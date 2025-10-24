"use client";
import { useEffect, useRef, useState } from "react";

export default function Statistics({ stats = [] }) {
    const [visible, setVisible] = useState(false);
    const ref = useRef(null);
    const [counters, setCounters] = useState(stats.map(() => 0));

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
        const durations = stats.map(() => 1500); // 1.5s
        const start = performance.now();

        const step = (timestamp) => {
            const t = Math.min((timestamp - start) / durations[0], 1);
            const next = stats.map((s, idx) => {
                const d = durations[idx] || durations[0];
                const tt = Math.min((timestamp - start) / d, 1);
                return Math.floor(s.value * easeOutCubic(tt));
            });
            setCounters(next);
            if (next.some((n, i) => n < stats[i].value)) {
                requestAnimationFrame(step);
            }
        };

        requestAnimationFrame(step);
    }, [visible, stats]);

    function easeOutCubic(t) {
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
                <h1 id="statistics-heading" className="text-3xl font-semibold mb-6" style={{ color: "var(--color-text)" }}>
                    Our Impact at a Glance
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {stats.map((s, i) => (
                        <div key={s.id} className="p-6 rounded-2xl shadow-sm bg-gradient-to-b from-white/60 to-white/30">
                            <div className="text-4xl sm:text-5xl font-extrabold" style={{ color: "var(--color-primary)" }}>
                                {counters[i].toLocaleString()}
                            </div>
                            <div className="mt-2 text-sm font-medium text-slate-600">{s.label}</div>
                            {s.sub && <div className="mt-2 text-xs text-slate-500">{s.sub}</div>}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
