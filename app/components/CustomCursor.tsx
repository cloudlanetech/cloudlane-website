"use client";

import React, { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>(undefined);
  const pos = useRef({ x: 0, y: 0, rx: 0, ry: 0 });

  useEffect(() => {
    // Hide default cursor site-wide while this component is mounted
    document.body.style.cursor = "none";

    const handleMouseMove = (e: MouseEvent) => {
      pos.current.x = e.clientX;
      pos.current.y = e.clientY;
      
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };

    const animateRing = () => {
      // Lagging effect (interpolation)
      pos.current.rx += (pos.current.x - pos.current.rx) * 0.15;
      pos.current.ry += (pos.current.y - pos.current.ry) * 0.15;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${pos.current.rx}px, ${pos.current.ry}px)`;
      }
      requestRef.current = requestAnimationFrame(animateRing);
    };

    const handleMouseEnter = () => {
      cursorRef.current?.classList.add("hover");
      ringRef.current?.classList.add("hover");
    };

    const handleMouseLeave = () => {
      cursorRef.current?.classList.remove("hover");
      ringRef.current?.classList.remove("hover");
    };

    // Auto-attach hover effects to interactive elements
    const attachHandlers = (elements: NodeListOf<Element> | Element[]) => {
      elements.forEach((el) => {
        el.addEventListener("mouseenter", handleMouseEnter);
        el.addEventListener("mouseleave", handleMouseLeave);
      });
    };

    const detachHandlers = (elements: NodeListOf<Element> | Element[]) => {
      elements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };

    const selectors = 'a, button, [role="button"], input, textarea, select, .clickable';
    const elements = document.querySelectorAll(selectors);
    attachHandlers(elements);

    // Watch for dynamic DOM changes (like modal opens or React state changes)
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof Element) {
            const children = node.querySelectorAll(selectors);
            if (node.matches(selectors)) attachHandlers([node]);
            attachHandlers(children);
          }
        });
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    window.addEventListener("mousemove", handleMouseMove);
    requestRef.current = requestAnimationFrame(animateRing);

    return () => {
      document.body.style.cursor = "auto";
      window.removeEventListener("mousemove", handleMouseMove);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
      detachHandlers(document.querySelectorAll(selectors));
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="custom-cursor" />
      <div ref={ringRef} className="custom-cursor-ring" />
    </>
  );
}
