import Image from "next/image";

export default function About() {
  const PRIMARY_BLUE = "text-[#2C55C0]";
  const ACCENT_TEXT_COLOR = "text-[#0F172A]";
  const BG_COLOR = "bg-white";

  return (
    <section id="about" className={`py-20 ${BG_COLOR} ${ACCENT_TEXT_COLOR}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className={`text-4xl font-extrabold uppercase ${PRIMARY_BLUE} mb-16 text-center tracking-wider`}
        >
          Our Vision: The Punarjani Mission
        </h2>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h3 className={`text-3xl font-bold mb-4 ${ACCENT_TEXT_COLOR}`}>
              A New Beginning Through Collaboration
            </h3>
            <p className="mt-4 text-lg leading-relaxed text-gray-700">
              **Punarjani**, which translates to &quot;rebirth&quot; or
              &quot;rejuvenation&quot;, is a community-driven initiative built
              on the belief that local resources and volunteer commitment can
              drive profound transformation.
            </p>
            <p className="mt-6 text-lg leading-relaxed font-semibold text-gray-700">
              Today, we are a transparent, tech-enabled platform where we
              focuses on providing compassionate medical care to those in need —
              supporting underprivileged communities with essential healthcare,
              and restoring hope and dignity to vulnerable lives.
            </p>

            <a
              href="#team"
              className="mt-8 inline-block font-bold text-[#2563EB] hover:underline transition duration-300"
            >
              Meet Our Team of Collaborators &rarr;
            </a>
          </div>

          <div className="md:pl-8 flex items-center justify-center">
            <div className="w-full max-w-sm mx-auto p-8 bg-muted rounded-xl shadow-sm flex flex-col items-center justify-center border border-gray-300">
              <Image
                src="/assets/logo.png"
                alt="Punarjani Project Logo - Symbol of Rebirth"
                width={250}
                height={250}
                className="object-contain"
                priority
              />
              <p className="text-gray-600 text-center font-semibold mt-4">
                Our symbol of collective rejuvenation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
