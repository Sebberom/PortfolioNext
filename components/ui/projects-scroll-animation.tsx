"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const ProjectsScrollAnimation = () => {
  useEffect(() => {
    const container = document.getElementById("projects-container");
    const section = document.querySelector("#projects");

    if (!container || !section) return;

    let tween: gsap.core.Tween | null = null;

    const setupAnimation = () => {
      tween?.scrollTrigger?.kill();
      tween?.kill();
      gsap.set(container, { x: 0 });

      if (window.innerWidth < 1024) return;

      const totalWidth = container.scrollWidth;
      const viewportWidth = window.innerWidth;
      const distance = totalWidth - viewportWidth;

      if (distance <= 0) return;

      tween = gsap.to(container, {
        x: -distance,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          invalidateOnRefresh: true,
          markers: false,
        },
      });
    };

    setupAnimation();
    window.addEventListener("resize", setupAnimation);
    ScrollTrigger.addEventListener("refreshInit", setupAnimation);
    ScrollTrigger.refresh();

    return () => {
      window.removeEventListener("resize", setupAnimation);
      ScrollTrigger.removeEventListener("refreshInit", setupAnimation);
      tween?.scrollTrigger?.kill();
      tween?.kill();
    };
  }, []);

  return null;
};
