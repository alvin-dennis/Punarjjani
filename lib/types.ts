export type NavItem = {
  label: string;
  href: string;
};

export type Member = {
  id: string | number;
  name: string;
  role: string;
  bio?: string;
  image?: string;
  linkedin?: string;
  email?: string;
};

export type Stat = {
  id: string | number;
  value: number;
  label: string;
  sub?: string;
};
