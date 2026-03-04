const RECAPTCHA_READY_TIMEOUT_MS = 5000;
const RECAPTCHA_READY_INTERVAL_MS = 100;

const sanitizeRecaptchaActionSegment = (value = '') =>
  value
    .toLowerCase()
    .replace(/-/g, '_')
    .replace(/[^a-z0-9/_]/g, '_')
    .replace(/\/+/g, '/')
    .replace(/^\/|\/$/g, '')
    .replace(/_+/g, '_');

const ensureString = (value) => {
  if (Array.isArray(value)) {
    return value[0] ?? '';
  }

  if (typeof value !== 'string') {
    return '';
  }

  return value;
};

export const getViewRecaptchaAction = (slug) => {
  const safeSlug = sanitizeRecaptchaActionSegment(ensureString(slug));
  const slugSegment = safeSlug || 'article';

  return `view/${slugSegment}`;
};

const hasGrecaptcha = () => {
  if (typeof window === 'undefined') {
    return false;
  }

  return Boolean(
    window.grecaptcha &&
      typeof window.grecaptcha.ready === 'function' &&
      typeof window.grecaptcha.execute === 'function'
  );
};

const waitForGrecaptcha = (timeoutMs = RECAPTCHA_READY_TIMEOUT_MS) =>
  new Promise((resolve) => {
    const startedAt = Date.now();

    const checkAvailability = () => {
      if (hasGrecaptcha()) {
        resolve(window.grecaptcha);

        return;
      }

      if (Date.now() - startedAt >= timeoutMs) {
        resolve(null);

        return;
      }

      setTimeout(checkAvailability, RECAPTCHA_READY_INTERVAL_MS);
    };

    checkAvailability();
  });

export const executeRecaptcha = async (action) => {
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  if (!siteKey) {
    return null;
  }

  const grecaptcha = await waitForGrecaptcha();

  if (!grecaptcha) {
    return null;
  }

  return new Promise((resolve) => {
    grecaptcha.ready(() => {
      grecaptcha
        .execute(siteKey, { action })
        .then(resolve)
        .catch(() => resolve(null));
    });
  });
};
