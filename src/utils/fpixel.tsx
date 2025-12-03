export const pageview = () => {
  window.fbq('track', 'PageView');
};

// https://developers.facebook.com/docs/facebook-pixel/advanced/
export const eventview = (
  name: string,
  params?: Record<string, any>,
  advancedOptions?: Record<string, any>
) => {
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    window.fbq('track', name, params || {}, advancedOptions || {});
  }
};
