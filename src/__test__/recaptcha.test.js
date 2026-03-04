import { getViewRecaptchaAction } from '../../lib/recaptcha';

describe('getViewRecaptchaAction', () => {
  it('normalizes blog slugs to valid reCAPTCHA action names', () => {
    expect(getViewRecaptchaAction('how-the-world-wide-web-works')).toBe('view/how_the_world_wide_web_works');
  });

  it('falls back to a safe default segment when slug is empty', () => {
    expect(getViewRecaptchaAction('')).toBe('view/article');
  });
});
