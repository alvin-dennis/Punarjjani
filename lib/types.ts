import { LucideIcon } from "lucide-react";

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
};

export interface Social {
  label: string;
  href: string;
  icon: LucideIcon;
}