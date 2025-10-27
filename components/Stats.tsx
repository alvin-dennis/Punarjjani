import CountUp from "react-countup";

type Stat = {
  id: string | number;
  value: number;
  label: string;
  sub?: string;
};

export default function Stats() {

  const statsData: Stat[] = [
    { id: 1, value: 1500, label: "Active Users", sub: "Last 30 days" },
    { id: 2, value: 320, label: "Projects Completed" },
    { id: 3, value: 98, label: "Client Satisfaction", sub: "In %" },
  ];

  return (
    <section
      id="stats"
      aria-labelledby="stats"
      className="py-12 sm:py-16 bg-white/60"
      style={{ backgroundColor: "transparent" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <h1
          className="text-3xl font-semibold mb-6 text-center"
          style={{ color: "var(--color-text)" }}
        >
          Our Impact at a Glance
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {statsData.map((s) => (
            <div key={s.id} className="p-6 rounded-2xl shadow-sm">
              <div className="text-4xl sm:text-5xl font-extrabold text-primary">
                  <CountUp
                    start={0}
                    end={s.value}
                    duration={8}
                    separator=","
                  />
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
