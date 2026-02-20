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

    // Calculer la largeur totale à scroller
    const totalWidth = container.scrollWidth;
    const viewportWidth = window.innerWidth;
    const distance = totalWidth - viewportWidth;

    // Animation avec GSAP
    gsap.to(container, {
      x: -distance,
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "bottom bottom",
        scrub: 1, // smooth scrub
        markers: false, // debug (mets true pour voir les markers)
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return null;
};
