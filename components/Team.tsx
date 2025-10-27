"use client";

import React from "react";
import Image from "next/image";
import { teamMembers } from "@/lib/data";
import { TeamMember } from "@/lib/types";

function MemberCard({ member }: { member: TeamMember }) {
  return (
    <article
      className="rounded-2xl shadow-sm p-6 flex flex-col items-center text-center"
      style={{ backgroundColor: "var(--card)", color: "var(--card-foreground)" }}
    >
      <div className="w-28 h-28 rounded-full overflow-hidden mb-4 ring-2 ring-offset-2" style={{ boxShadow: "0 6px 18px rgba(44,85,192,0.08)" }}>
        <Image
          src={member.image || "https://placehold.co/400x400"}
          alt={member.name}
          width={400}
          height={400}
          className="w-full h-full object-cover"
          unoptimized
        />
      </div>

      <h3 className="text-lg font-nura font-semibold" style={{ color: "var(--color-foreground)" }}>
        {member.name}
      </h3>
      <p className="text-sm mt-1" style={{ color: "var(--muted-foreground)" }}>{member.role}</p>
      {member.bio && (
        <p className="mt-3 text-sm" style={{ color: "var(--muted-foreground)" }}>{member.bio}</p>
      )}

      <div className="mt-4 flex items-center gap-4">
        {member.email && (
          <a
            href={`mailto:${member.email}`}
            className="text-sm hover:underline"
            style={{ color: "var(--color-primary)" }}
          >
            Email
          </a>
        )}
        {member.linkedin && (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-sm hover:underline"
            style={{ color: "var(--color-primary)" }}
          >
            LinkedIn
          </a>
        )}
      </div>
    </article>
  );
}

export default function Team({ members = teamMembers }: { members?: TeamMember[] }) {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-nura font-bold" style={{ color: "var(--color-foreground)" }}>Our Team</h2>
          <p className="mt-2 max-w-2xl mx-auto" style={{ color: "var(--muted-foreground)" }}>
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
