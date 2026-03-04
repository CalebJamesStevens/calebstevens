import React from 'react';
import { executeRecaptcha, getViewRecaptchaAction } from '../../../lib/recaptcha';

export default function IncrementViewCount({ slug }) {
  React.useEffect(() => {
    let cancelled = false;

    const registerView = async () => {
      const action = getViewRecaptchaAction(slug);
      const token = await executeRecaptcha(action);

      if (cancelled) {
        return;
      }

      await fetch(`/api/views/${slug}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action,
          token,
        }),
      });
    };

    registerView();

    return () => {
      cancelled = true;
    };
  }, [slug]);
}
