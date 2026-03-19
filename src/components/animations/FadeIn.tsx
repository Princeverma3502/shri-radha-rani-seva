"use client";

import { useEffect, useRef, useState } from "react";

export default function FadeIn({ 
  children, 
  delay = 0, 
  direction = "up" 
}: { 
  children: React.ReactNode; 
  delay?: number; 
  direction?: "up" | "down" | "left" | "right" | "none";
}) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    }, { threshold: 0.1 }); // Triggers when 10% of the element is visible

    const currentRef = domRef.current;
    if (currentRef) observer.observe(currentRef);
    return () => { if (currentRef) observer.unobserve(currentRef); };
  }, []);

  // Determine initial transform based on direction
  let initialTransform = "translate-y-10"; // default up
  if (direction === "down") initialTransform = "-translate-y-10";
  if (direction === "left") initialTransform = "translate-x-10";
  if (direction === "right") initialTransform = "-translate-x-10";
  if (direction === "none") initialTransform = "translate-x-0 translate-y-0";

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0 translate-x-0" : `opacity-0 ${initialTransform}`
      }`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}