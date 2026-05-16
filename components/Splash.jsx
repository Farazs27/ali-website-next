"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";

const MIN_DISPLAY = 650;
const MAX_DISPLAY = 2500;
const FADE_MS = 450;

export default function Splash() {
  const [phase, setPhase] = useState("visible");

  useEffect(() => {
    const start = performance.now();
    let cleanup = () => {};

    const finish = () => {
      cleanup();
      const elapsed = performance.now() - start;
      const wait = Math.max(0, MIN_DISPLAY - elapsed);
      setTimeout(() => {
        setPhase("hiding");
        setTimeout(() => setPhase("gone"), FADE_MS);
      }, wait);
    };

    if (document.readyState === "complete") {
      finish();
    } else {
      window.addEventListener("load", finish, { once: true });
      const safety = setTimeout(finish, MAX_DISPLAY);
      cleanup = () => {
        window.removeEventListener("load", finish);
        clearTimeout(safety);
      };
    }

    return cleanup;
  }, []);

  if (phase === "gone") return null;

  return (
    <div className={`splash splash--${phase}`} aria-hidden="true" role="presentation">
      <div className="splash__inner">
        <Logo size={88} className="splash__logo" />
        <div className="splash__brand">
          <span className="splash__b1">samen</span>
          <span className="splash__b2">M O N D Z O R G</span>
        </div>
      </div>
    </div>
  );
}
