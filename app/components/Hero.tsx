"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const connection = (navigator as Navigator & {
      connection?: { saveData?: boolean };
    }).connection;
    let visible = true;

    const syncPlayback = () => {
      if (motion.matches || connection?.saveData || document.hidden || !visible || video.dataset.userPaused === "true") {
        video.pause();
      } else {
        // Autoplay can be blocked by browser policy; the poster and play control remain usable.
        void video.play().catch(() => {});
      }
    };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      syncPlayback();
    }, { threshold: 0.1 });

    observer.observe(video);
    motion.addEventListener("change", syncPlayback);
    document.addEventListener("visibilitychange", syncPlayback);
    syncPlayback();
    return () => {
      observer.disconnect();
      motion.removeEventListener("change", syncPlayback);
      document.removeEventListener("visibilitychange", syncPlayback);
      video.pause();
    };
  }, []);

  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.dataset.userPaused = "false";
      void video.play().catch(() => setIsPlaying(false));
    } else {
      video.dataset.userPaused = "true";
      video.pause();
    }
  };

  return (
    <section className="home-hero" aria-labelledby="hero-title">
      <div className="home-hero__atmosphere" aria-hidden="true" />
      <div className="home-hero__media">
        <video
          ref={videoRef}
          id="hero-video"
          loop
          muted
          playsInline
          preload="none"
          poster="/images/hero-poster.jpg"
          aria-hidden="true"
          tabIndex={-1}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onError={() => { setHasError(true); setIsPlaying(false); }}
        >
          <source src="/videos/video2.mp4" type="video/mp4" />
        </video>
        <div className="home-hero__shade" aria-hidden="true" />
        {!hasError && (
          <button
            type="button"
            className="home-hero__playback"
            onClick={togglePlayback}
            aria-controls="hero-video"
            aria-label={isPlaying ? "Pause background video" : "Play background video"}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              {isPlaying ? <path d="M6 4h4v16H6zm8 0h4v16h-4z" /> : <path d="m8 4 12 8-12 8z" />}
            </svg>
            <span>{isPlaying ? "Pause video" : "Play video"}</span>
          </button>
        )}
      </div>
      <div className="home-hero__content">
        <p className="home-hero__eyebrow">Custom stone. Lasting impressions.</p>
        <h1 id="hero-title">Exceptional stone.<br />Made for your home.</h1>
        <p className="home-hero__description">
          Custom marble, quartz, and granite countertops.<span> Crafted and installed across the GTA and Hamilton.</span>
        </p>
        <div className="home-hero__actions">
          <Link href="/contact" className="home-hero__primary">
            Get Free Quote <span aria-hidden="true">↗</span>
          </Link>
          <Link href="/gallery" className="home-hero__secondary">
            View Our Work <span aria-hidden="true">→</span>
          </Link>
        </div>
        <p className="home-hero__footnote">From the first cut to the finishing touch.</p>
      </div>
    </section>
  );
}
