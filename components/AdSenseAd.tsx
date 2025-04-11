// components/AdSenseAd.tsx
"use client";

import { useEffect, useRef } from "react";

// Global set to track initialized ad slots
const initializedAdSlots = new Set<string>();

const AdSenseAd = ({ adSlot, instanceId }: { adSlot: string; instanceId: string }) => {
  const adRef = useRef<HTMLDivElement>(null);
  const hasPushed = useRef(false);

  // Unique key for this ad slot instance
  const adSlotKey = `${adSlot}-${instanceId}`;

  console.log(`Rendering AdSenseAd for slot ${adSlotKey}`);

  useEffect(() => {
    console.log(`useEffect running for slot ${adSlotKey}`);

    // Skip if this ad slot has already been initialized or pushed
    if (initializedAdSlots.has(adSlotKey) || hasPushed.current) {
      console.log(`Ad slot ${adSlotKey} already initialized or pushed. Skipping.`);
      return;
    }

    hasPushed.current = true;
    console.log(`Attempting to initialize ad slot ${adSlotKey}`);

    const loadAd = () => {
      if (!adRef.current) {
        console.warn(`Ad slot ${adSlotKey} ref not available. Retrying...`);
        setTimeout(loadAd, 500);
        return;
      }

      // Check how many <ins> elements exist with this ad slot
      const insElements = document.querySelectorAll(`ins[data-ad-slot="${adSlot}"]`);
      console.log(`Found ${insElements.length} <ins> elements with data-ad-slot="${adSlot}"`);

      if (adRef.current.offsetWidth <= 0) {
        console.warn(`Ad slot ${adSlotKey} not visible (width=${adRef.current.offsetWidth}). Retrying...`);
        setTimeout(loadAd, 500);
        return;
      }

      console.log(`Ad slot ${adSlotKey} is visible (width=${adRef.current.offsetWidth}). Proceeding...`);

      // try {
      //   if (typeof window.adsbygoogle !== "undefined") {
      //     if (initializedAdSlots.has(adSlotKey)) {
      //       console.log(`Ad slot ${adSlotKey} already initialized in another instance. Skipping push.`);
      //       return;
      //     }

      //     console.log(`Pushing ad for slot ${adSlotKey}`);
      //     (window.adsbygoogle = window.adsbygoogle || []).push({});
      //     initializedAdSlots.add(adSlotKey);
      //     console.log(`Ad slot ${adSlotKey} initialized successfully.`);
      //   } else {
      //     console.warn(`AdSense script not loaded for slot ${adSlotKey}. Retrying...`);
      //     setTimeout(loadAd, 500);
      //   }
      // } catch (error) {
      //   console.error(`AdSense error for slot ${adSlotKey}:`, error);
      // }
    };

    loadAd();

    return () => {
      console.log(`Cleaning up ad slot ${adSlotKey}`);
      if (adRef.current) {
        adRef.current.innerHTML = "";
      }
    };
  }, [adSlotKey]);

  return (
    <div ref={adRef} style={{ minHeight: "250px", minWidth: "300px" }}>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-9972955749211628"
        data-ad-slot={adSlot}
        data-ad-format="auto"
        data-full-width-responsive="true"
        data-adtest={process.env.NODE_ENV === "development" ? "on" : "off"}
      ></ins>
    </div>
  );
};

export default AdSenseAd;