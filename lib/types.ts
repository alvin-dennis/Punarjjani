export type NavItem = {
  label: string;
  href: string;
};

export type TeamMember = {
  id: string | number;
  name: string;
  role: string;
  bio?: string;
  image?: string;
  linkedin?: string;
  email?: string;
};
