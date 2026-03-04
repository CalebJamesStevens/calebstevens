import { db } from '../../../lib/firebase';
import { getViewRecaptchaAction } from '../../../lib/recaptcha';

const RECAPTCHA_VERIFY_URL = 'https://www.google.com/recaptcha/api/siteverify';
const RECAPTCHA_MIN_SCORE = Number(process.env.RECAPTCHA_MIN_SCORE ?? 0.5);

const getFirstValue = (value) => {
  if (Array.isArray(value)) {
    return value[0] ?? '';
  }

  if (typeof value !== 'string') {
    return '';
  }

  return value;
};

const parseBody = (body) => {
  if (!body) {
    return {};
  }

  if (typeof body === 'string') {
    try {
      return JSON.parse(body);
    } catch {
      return {};
    }
  }

  return body;
};

const getRemoteIp = (req) => {
  const forwardedFor = getFirstValue(req.headers['x-forwarded-for']);
  if (forwardedFor) {
    return forwardedFor.split(',')[0].trim();
  }

  return getFirstValue(req.headers['x-real-ip']);
};

const verifyRecaptchaToken = async ({ token, expectedAction, remoteIp }) => {
  const secret = process.env.RECAPTCHA_SECRET_KEY;

  if (!secret) {
    return { success: true, skipped: true };
  }

  if (!token) {
    return { success: false, reason: 'missing_token' };
  }

  const body = new URLSearchParams();
  body.append('secret', secret);
  body.append('response', token);
  if (remoteIp) {
    body.append('remoteip', remoteIp);
  }

  try {
    const response = await fetch(RECAPTCHA_VERIFY_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body,
    });

    if (!response.ok) {
      return { success: false, reason: 'siteverify_http_error' };
    }

    const verification = await response.json();
    const score = Number(verification?.score ?? 0);

    return {
      success:
        Boolean(verification?.success) &&
        verification?.action === expectedAction &&
        score >= RECAPTCHA_MIN_SCORE,
      score,
      details: verification,
    };
  } catch {
    return { success: false, reason: 'siteverify_request_failed' };
  }
};

export default async (req, res) => {
  const slug = getFirstValue(req.query.slug);

  if (!slug) {
    return res.status(400).json({ error: 'Missing slug' });
  }

  if (req.method === 'POST') {
    const expectedAction = getViewRecaptchaAction(slug);
    const parsedBody = parseBody(req.body);
    const token = typeof parsedBody.token === 'string' ? parsedBody.token : '';

    const recaptcha = await verifyRecaptchaToken({
      token,
      expectedAction,
      remoteIp: getRemoteIp(req),
    });

    if (!recaptcha.success) {
      return res.status(403).json({
        error: 'reCAPTCHA verification failed',
        reason: recaptcha.reason ?? 'recaptcha_failed',
      });
    }

    const ref = db.ref('views').child(slug);

    const { snapshot } = await ref.transaction((currentViews) => {
      if (process.env.NODE_ENV === 'development') {
        return currentViews;
      }
      if (currentViews === null) {
        return 1;
      }

      return currentViews + 1;
    });

    return res.status(200).json({
      total: snapshot.val(),
    });
  }

  if (req.method === 'GET') {
    const snapshot = await db.ref('views').child(slug).once('value');
    const views = snapshot.val();

    return res.status(200).json({ total: views });
  }

  return res.status(405).json({ error: 'Method not allowed' });
};
