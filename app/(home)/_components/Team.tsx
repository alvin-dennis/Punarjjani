import Image from "next/image";
import { team } from "@/lib/data";
import { Member } from "@/lib/types";
import { VercelCard } from "@/components/ui/vercel-card";

function MemberCard({ member }: { member: Member }) {
  return (
    <VercelCard
      className="p-6 flex flex-col items-center text-center"
      animateOnHover
    >
      <div className="w-30 h-42 rounded-4xl overflow-hidden mb-4 ring-2 ring-offset-2">
        <Image
          src={member.image || "https://placehold.co/400x400"}
          alt={member.name}
          width={400}
          height={400}
          className="w-full h-full object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
          unoptimized
        />
      </div>

      <h3 className="text-lg font-semibold text-accent">{member.name}</h3>
      <p className="text-sm mt-1">{member.role}</p>
    </VercelCard>
  );
}

export default function Team() {
  return (
    <section id="team" className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl text-primary font-bold">
            Our Team
          </h2>
          <p className="mt-2 max-w-2xl mx-auto">
            A small team of passionate professionals working together to make a
            difference in people's lives.
          </p>
        </div>

        <h3 className="text-2xl font-semibold text-center mb-6">Advisors</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mb-10">
          {team.advisors.map((m) => (
            <MemberCard key={m.id} member={m} />
          ))}
        </div>

        <h3 className="text-2xl font-semibold text-center mb-6">Executives</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {team.executives.map((m) => (
            <MemberCard key={m.id} member={m} />
          ))}
        </div>
      </div>
    </section>
  );
}
