"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CursorGlow() {
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, { damping: 25, stiffness: 250 });
  const springY = useSpring(cursorY, { damping: 25, stiffness: 250 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setVisible(true);
    };

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [data-magnetic]")) {
        setHovering(true);
      }
    };

    const handleOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [data-magnetic]")) {
        setHovering(false);
      }
    };

    const leave = () => setVisible(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", handleOver);
    window.addEventListener("mouseout", handleOut);
    document.addEventListener("mouseleave", leave);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", handleOver);
      window.removeEventListener("mouseout", handleOut);
      document.removeEventListener("mouseleave", leave);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Dot cursor */}
      <motion.div
        className="pointer-events-none fixed z-[10000] rounded-full bg-white mix-blend-difference"
        style={{
          x: springX,
          y: springY,
          width: hovering ? 48 : 8,
          height: hovering ? 48 : 8,
          translateX: "-50%",
          translateY: "-50%",
          opacity: visible ? 1 : 0,
          transition: "width 0.3s, height 0.3s",
        }}
      />
      {/* Ambient glow */}
      <motion.div
        className="pointer-events-none fixed z-[9998] rounded-full"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          width: 500,
          height: 500,
          background:
            "radial-gradient(circle, rgba(34,211,238,0.06) 0%, transparent 70%)",
          opacity: visible ? 1 : 0,
        }}
      />
    </>
  );
}
