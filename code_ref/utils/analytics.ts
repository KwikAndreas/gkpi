// Google Analytics 4 Client-Side Implementation
// Untuk menggunakan GA4 di Vite/React

// Import di index.html atau main.tsx
export const initGA = (measurementId: string) => {
  // Load GA4 script
  const script1 = document.createElement("script");
  script1.async = true;
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script1);

  // Initialize dataLayer
  window.dataLayer = window.dataLayer || [];
  function gtag(...args: any[]) {
    window.dataLayer.push(args);
  }

  gtag("js", new Date());
  gtag("config", measurementId);
};

// Track page view
export const trackPageView = (url: string) => {
  if (typeof window.gtag !== "undefined") {
    window.gtag("config", import.meta.env.VITE_GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
};

// Track custom events
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (typeof window.gtag !== "undefined") {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Declare gtag for TypeScript
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}
