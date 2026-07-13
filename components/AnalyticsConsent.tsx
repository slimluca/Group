"use client";

import { GoogleAnalytics } from "@next/third-parties/google";
import Link from "next/link";
import { useEffect, useState } from "react";

const storageKey = "dog-haven-group-analytics-consent-v1";
const preferenceEvent = "dog-haven-group:analytics-preferences";

type ConsentChoice = "accepted" | "declined";

export function AnalyticsConsent({
  measurementId,
}: {
  measurementId?: string;
}) {
  const [choice, setChoice] = useState<ConsentChoice | null>(null);
  const [isReady, setIsReady] = useState(false);
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  useEffect(() => {
    window.setTimeout(() => {
      const storedChoice = window.localStorage.getItem(storageKey);
      if (storedChoice === "accepted" || storedChoice === "declined") {
        setChoice(storedChoice);
        setIsPanelOpen(false);
      } else {
        setIsPanelOpen(true);
      }
      setIsReady(true);
    }, 0);

    const openPreferences = () => setIsPanelOpen(true);
    window.addEventListener(preferenceEvent, openPreferences);
    return () => window.removeEventListener(preferenceEvent, openPreferences);
  }, []);

  useEffect(() => {
    if (!measurementId) {
      return;
    }
    window[`ga-disable-${measurementId}` as keyof Window] =
      choice === "declined";
  }, [choice, measurementId]);

  const saveChoice = (nextChoice: ConsentChoice) => {
    window.localStorage.setItem(storageKey, nextChoice);
    setChoice(nextChoice);
    setIsPanelOpen(false);
  };

  return (
    <>
      {isReady && choice === "accepted" && measurementId ? (
        <GoogleAnalytics gaId={measurementId} />
      ) : null}
      {isReady && isPanelOpen ? (
        <section
          className="analytics-consent"
          aria-labelledby="analytics-consent-title"
        >
          <div>
            <h2 id="analytics-consent-title">Analytics preferences</h2>
            <p>
              Dog Haven Group uses optional analytics to understand how visitors
              use the website and improve its guides, tools and resources.
            </p>
            <Link href="/privacy-policy">Privacy policy</Link>
          </div>
          <div className="analytics-consent-actions">
            <button
              className="button"
              type="button"
              onClick={() => saveChoice("accepted")}
            >
              Accept analytics
            </button>
            <button
              className="button secondary"
              type="button"
              onClick={() => saveChoice("declined")}
            >
              Decline
            </button>
          </div>
        </section>
      ) : null}
    </>
  );
}
