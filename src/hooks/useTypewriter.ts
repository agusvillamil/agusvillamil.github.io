import { useEffect, useState } from "react";

const prefersReducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Types `text` one character at a time. With reduced motion it shows the full text at once.
export function useTypewriter(text: string, { startDelay = 350, charDelay = 80 } = {}) {
  const [count, setCount] = useState(() => (prefersReducedMotion() ? text.length : 0));

  useEffect(() => {
    if (count >= text.length) return;
    const timer = window.setTimeout(() => setCount((c) => c + 1), count === 0 ? startDelay : charDelay);
    return () => window.clearTimeout(timer);
  }, [count, text.length, startDelay, charDelay]);

  return { typed: text.slice(0, count), done: count >= text.length };
}
