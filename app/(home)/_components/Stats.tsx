"use client";

import CountUp from "react-countup";
import { stats } from "@/lib/data";
import { VercelCard } from "@/components/ui/vercel-card";


export default function Stats() {
  return (
    <section id="stats" aria-labelledby="stats" className="py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-semibold mb-6 text-center text-primary">
          Our Impact at a Glance
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          {stats.map((s) => (
            <VercelCard key={s.id} className="p-6" animateOnHover>
              <div className="text-4xl sm:text-5xl font-extrabold text-accent">
                <CountUp
                  start={0}
                  end={s.id === 2 ? s.value / 100000 : s.value}
                  duration={10}
                  separator=","
                  decimals={s.id === 2 ? 1 : 0}
                  suffix={s.id === 2 ? "L" : ""}
                />
              </div>
              <div className="mt-2 text-sm font-medium text-slate-600">
                {s.label}
              </div>
            </VercelCard>
          ))}
        </div>
      </div>
    </section>
  );
}
