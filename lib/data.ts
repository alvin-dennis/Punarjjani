import { NavItem } from "@/lib/types";

export const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Impact", href: "#pricing" },
  { label: "Statistics", href: "#docs" },
  { label: "Team", href: "/team" },
];

export const ctaButton: NavItem = {
  label: "Donate",
  href: "#get-started",
};

export const heroData = {
  title: "A Mission to Restore Health and Hope",
  subtitle:
    "Providing compassionate medical care to those in need — supporting underprivileged communities with essential healthcare, and restoring hope and dignity to vulnerable lives.",
  primaryButton: {
    label: "Donate Now",
    href: "/donate",
  },
  secondaryButton: {
    label: "View our initiatives",
    href: "#initiatives",
  },
  programs: [
    {
      image: "https://placehold.co/500x400",
      category: "Placeholder",
      title: "Placeholder",
    },
    {
      image: "https://placehold.co/500x400",
      category: "Placeholder",
      title: "Placeholder",
    },
    {
      image: "https://placehold.co/500x400",
      category: "Placeholder",
      title: "Placeholder",
    },
    {
      image: "https://placehold.co/500x400",
      category: "Placeholder",
      title: "Placeholder",
    },
    {
      image: "https://placehold.co/500x400",
      category: "Placeholder",
      title: "Placeholder",
    },
  ],
};

export const teamMembers = [
  {
    id: 1,
    name: "Dr. Ananya Rao",
    role: "Medical Director",
    bio: "Over 12 years of experience in community health programs, leading clinical teams and trainings.",
    image: "https://placehold.co/400x400",
    linkedin: "https://www.linkedin.com/",
    email: "ananya@punarjjani.org",
  },
  {
    id: 2,
    name: "Rahul Sharma",
    role: "Program Manager",
    bio: "Coordinates outreach and logistics for mobile clinics and community drives.",
    image: "https://placehold.co/400x400",
    linkedin: "https://www.linkedin.com/",
    email: "rahul@punarjjani.org",
  },
  {
    id: 3,
    name: "Ms. Latha Iyer",
    role: "Volunteer Coordinator",
    bio: "Builds and supports our volunteer network with training and resource allocation.",
    image: "https://placehold.co/400x400",
    linkedin: "https://www.linkedin.com/",
    email: "latha@punarjjani.org",
  },
  {
    id: 4,
    name: "Amit Verma",
    role: "Fundraising Lead",
    bio: "Leads donor relations and fundraising initiatives to sustain our programs.",
    image: "https://placehold.co/400x400",
    linkedin: "https://www.linkedin.com/",
    email: "amit@punarjjani.org",
  },
];
