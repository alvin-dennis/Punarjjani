import Image from "next/image";
import Link from "next/link";
import { team } from "@/lib/data";
import { Member } from "@/lib/types";
import { VercelCard } from "@/components/ui/vercel-card";

function MemberCard({ member }: { member: Member }) {
  return (
    <VercelCard
      className="p-6 flex flex-col items-center text-center"
      animateOnHover
    >
      <div className="w-30 h-28 rounded-full overflow-hidden mb-4 ring-2 ring-offset-2">
        <Image
          src={member.image || "https://placehold.co/400x400"}
          alt={member.name}
          width={400}
          height={400}
          className="w-full h-full object-cover"
          unoptimized
        />
      </div>

      <h3 className="text-lg font-semibold">{member.name}</h3>
      <p className="text-sm mt-1">{member.role}</p>
      {member.bio && <p className="mt-3 text-sm">{member.bio}</p>}

      <div className="mt-4 flex items-center gap-4 z-10">
        {member.email && (
          <Link
            href={`mailto:${member.email}`}
            className="text-sm hover:underline"
          >
            Email
          </Link>
        )}
        {member.linkedin && (
          <Link
            href={member.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-sm hover:underline"
          >
            LinkedIn
          </Link>
        )}
      </div>
    </VercelCard>
  );
}

export default function Team({ members = team }: { members?: Member[] }) {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-nura font-bold">Our Team</h2>
          <p className="mt-2 max-w-2xl mx-auto">
            A small team of passionate professionals working together to make a
            difference in people's lives.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {members.map((m) => (
            <MemberCard key={m.id} member={m} />
          ))}
        </div>
      </div>
    </section>
  );
}
