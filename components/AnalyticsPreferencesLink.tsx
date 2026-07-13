"use client";

const preferenceEvent = "dog-haven-group:analytics-preferences";

export function AnalyticsPreferencesLink() {
  return (
    <a
      href="#analytics-preferences"
      onClick={(event) => {
        event.preventDefault();
        window.dispatchEvent(new Event(preferenceEvent));
      }}
    >
      Analytics preferences
    </a>
  );
}

