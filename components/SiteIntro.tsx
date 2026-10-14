'use client';

import { useEffect, useState } from 'react';

export default function SiteIntro() {
  const [visible, setVisible] = useState(true);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    if (!visible) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [visible]);

  useEffect(() => {
    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (motionPreference.matches) {
      setVisible(false);
      return;
    }

    const exitTimer = window.setTimeout(() => setExiting(true), 1750);
    const removeTimer = window.setTimeout(() => setVisible(false), 2350);

    return () => {
      window.clearTimeout(exitTimer);
      window.clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`site-intro${exiting ? ' site-intro-exiting' : ''}`}
      role="status"
      aria-label="Entering Rajeev Verma's creative portfolio"
    >
      <div className="site-intro-top">
        <span>RV<span className="site-intro-mark">®</span></span>
        <span>INDEPENDENT CREATIVE PRACTICE</span>
      </div>

      <div className="site-intro-center">
        <div className="intro-emblem" aria-hidden="true">
          <span className="intro-emblem-orbit" />
          <span className="intro-emblem-inner">RV</span>
          <span className="intro-emblem-index">01</span>
        </div>
        <p>Stories made to <em>move.</em></p>
      </div>

      <div className="site-intro-bottom">
        <span>CREATIVE DIRECTION · PERFORMANCE VIDEO</span>
        <span className="intro-loading">
          <span>ENTERING</span>
          <span className="intro-progress" aria-hidden="true"><span /></span>
          <span>GURUGRAM, IN</span>
        </span>
      </div>
    </div>
  );
}
