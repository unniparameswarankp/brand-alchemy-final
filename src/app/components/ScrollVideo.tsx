"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollVideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;
    if (!video || !section) return;

    video.pause();

    const initAnimation = () => {
      const duration = video.duration || 1; // fallback in case duration = NaN

      gsap.to(video, {
        currentTime: duration,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=" + window.innerHeight * 5, // pin for 3x viewport scroll
          scrub: true,
          pin: true,
          // markers: true,
        },
      });
    };

    if (video.readyState >= 1) {
      // metadata already loaded
      initAnimation();
    } else {
      video.addEventListener("loadedmetadata", initAnimation);
    }

    return () => {
      video.removeEventListener("loadedmetadata", initAnimation);
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden"
    >
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        src="/videos/aikivy.mp4"
        muted
        playsInline
        preload="auto"
      />

      {/* Overlay content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-6">
        <h1 className="text-5xl font-bold mb-4">Brand Alchemy</h1>
        <p className="text-lg max-w-xl">
          Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.
        </p>
      </div>
    </section>
  );
}
