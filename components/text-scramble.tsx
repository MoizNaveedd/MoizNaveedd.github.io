"use client";

import { useEffect, useState, useCallback } from "react";

const chars = "!<>-_\\/[]{}—=+*^?#________";

type TextScrambleProps = {
  text: string;
  className?: string;
  delay?: number;
};

export function TextScramble({ text, className, delay = 0 }: TextScrambleProps) {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);

  const scramble = useCallback(() => {
    let iteration = 0;
    const speed = 30;
    const interval = setInterval(() => {
      setDisplayed(
        text
          .split("")
          .map((char, i) => {
            if (char === " ") return " ";
            if (i < iteration) return text[i];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );
      iteration += 1 / 2;
      if (iteration >= text.length) {
        clearInterval(interval);
        setDisplayed(text);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStarted(true);
      scramble();
    }, delay);
    return () => clearTimeout(timer);
  }, [delay, scramble]);

  return (
    <span className={className}>
      {started ? displayed : "\u00A0"}
    </span>
  );
}
