"use client";

import { useEffect, useRef, useState } from "react";

type Stat = {
  id: string | number;
  value: number;
  label: string;
  sub?: string;
};

export default function Statistics() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement | null>(null);

  const statsData: Stat[] = [
    { id: 1, value: 1500, label: "Active Users", sub: "Last 30 days" },
    { id: 2, value: 320, label: "Projects Completed" },
    { id: 3, value: 98, label: "Client Satisfaction", sub: "In %" },
  ];

  const [counters, setCounters] = useState<number[]>(statsData.map(() => 0));

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    const durations = statsData.map(() => 1500);
    const start = performance.now();

    const step = (timestamp: number) => {
      const next = statsData.map((s, idx) => {
        const d = durations[idx] || durations[0];
        const t = Math.min((timestamp - start) / d, 1);
        return Math.floor(s.value * easeOutCubic(t));
      });
      setCounters(next);

      if (next.some((n, i) => n < statsData[i].value)) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [visible]);

  function easeOutCubic(t: number) {
    return 1 - Math.pow(1 - t, 3);
  }

  return (
    <section
      ref={ref}
      aria-labelledby="statistics-heading"
      className="py-12 sm:py-16 bg-white/60"
      style={{ backgroundColor: "transparent" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <h1
          id="statistics-heading"
          className="text-3xl font-semibold mb-6"
          style={{ color: "var(--color-text)" }}
        >
          Our Impact at a Glance
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {statsData.map((s, i) => (
            <div
              key={s.id}
              className="p-6 rounded-2xl shadow-sm bg-gradient-to-b from-white/60 to-white/30"
            >
              <div
                className="text-4xl sm:text-5xl font-extrabold"
                style={{ color: "var(--color-primary)" }}
              >
                {counters[i].toLocaleString()}
              </div>
              <div className="mt-2 text-sm font-medium text-slate-600">
                {s.label}
              </div>
              {s.sub && (
                <div className="mt-2 text-xs text-slate-500">{s.sub}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
