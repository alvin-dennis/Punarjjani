import { NavItem } from "@/lib/types";

export const navItems: NavItem[] = [
  { label: "About", href: "#" },
  { label: "Impact", href: "#pricing" },
  { label: "Statistics", href: "#docs" },
  { label: "Team", href: "#projects" },
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
