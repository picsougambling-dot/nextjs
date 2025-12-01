'use client';

import { useEffect, useState, type ReactNode } from "react";

interface DeferProps {
  children: ReactNode;
  when?: "idle" | "load";
  delay?: number;
}

export function Defer({ children, when = "idle", delay = 0 }: DeferProps) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const run = () => setShow(true);

    if (when === "idle" && typeof window !== "undefined" && "requestIdleCallback" in window) {
      (window as any).requestIdleCallback(run, { timeout: 2000 });
      return;
    }

    if (when === "load") {
      if (document.readyState === "complete") run();
      else window.addEventListener("load", run, { once: true });
      return () => window.removeEventListener("load", run as any);
    }

    const t = setTimeout(run, delay);
    return () => clearTimeout(t);
  }, [when, delay]);

  return show ? <>{children}</> : null;
}

export default Defer;
