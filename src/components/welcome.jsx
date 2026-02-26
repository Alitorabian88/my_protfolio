import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const FONT_WEIGHT = {
  subtitle: { min: 100, max: 400, default: 100 },
  title: { min: 400, max: 900, default: 400 },
};

const renderText = (text, className, baseWeight = 400) => {
  return [...text].map((char, i) => (
    <span
      key={i}
      className={`inline-block ${className}`}
      style={{
        fontVariationSettings: `'wght' ${baseWeight}`,
      }}
    >
      {char === " " ? "\u00A0" : char}
    </span>
  ));
};

const setupTextHover = (container, type) => {
  if (!container) return;

  const letters = container.querySelectorAll("span");
  const { min, max } = FONT_WEIGHT[type];

  const animateLetter = (letter, weight, duration = 0.25) => {
    gsap.to(letter, {
      duration,
      ease: "power2.out",
      fontVariationSettings: `'wght' ${weight}`,
      overwrite: "auto",
    });
  };

  const handleMouseMove = (e) => {
    // Calculate mouse position relative to the container if needed,
    // but here we use clientX vs getBoundingClientRect which is viewport relative.
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    // Optimization: Check if mouse is near the container vertically
    const rect = container.getBoundingClientRect();
    const buffer = 100; // pixels
    if (mouseY < rect.top - buffer || mouseY > rect.bottom + buffer) {
      // If far away vertically, reset or ignore?
      // Let's just calculate horizontal distance for effect
    }

    letters.forEach((letter) => {
      const { left, width } = letter.getBoundingClientRect();
      const letterCenterX = left + width / 2;

      // Distance from mouse X to letter center X
      const distance = Math.abs(mouseX - letterCenterX);

      // Calculate weight based on distance
      // Max weight when distance is 0
      // Min weight when distance is large (e.g. 300px)
      const range = 300;
      const intensity = Math.max(0, 1 - distance / range);
      // Apply easing to intensity (quadratic)
      const easedIntensity = Math.pow(intensity, 2);

      const targetWeight = min + (max - min) * easedIntensity;

      animateLetter(letter, targetWeight);
    });
  };

  const handleMouseLeave = () => {
    letters.forEach((letter) => animateLetter(letter, min, 0.5));
  };

  // Attach event listener to window or container?
  // Usually container for hover effect, but to make it feel fluid maybe window?
  // Let's stick to container to avoid global listeners.
  container.addEventListener("mousemove", handleMouseMove);
  container.addEventListener("mouseleave", handleMouseLeave);

  // Return cleanup function
  return () => {
    container.removeEventListener("mousemove", handleMouseMove);
    container.removeEventListener("mouseleave", handleMouseLeave);
  };
};

function Welcome() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useGSAP(() => {
    const cleanupSubtitle = setupTextHover(subtitleRef.current, "subtitle");
    const cleanupTitle = setupTextHover(titleRef.current, "title");

    return () => {
      if (cleanupSubtitle) cleanupSubtitle();
      if (cleanupTitle) cleanupTitle();
    };
  }, []);

  return (
    <section id="welcome">
      <p ref={subtitleRef} className="hidden sm:flex justify-center flex-wrap">
        {renderText(
          "Hey , I'm Ali! Welcome to my",
          "text-3xl font-georama",
          FONT_WEIGHT.subtitle.min,
        )}
      </p>
      <h1
        ref={titleRef}
        className="mt-7 hidden sm:flex justify-center flex-wrap"
      >
        {renderText(
          "portfolio",
          "text-9xl italic font-georama",
          FONT_WEIGHT.title.min,
        )}
      </h1>
      <div className="small-screen">
        <p>This Portfolio is designed for desktop and tablet screens only.</p>
      </div>
    </section>
  );
}

export default Welcome;
