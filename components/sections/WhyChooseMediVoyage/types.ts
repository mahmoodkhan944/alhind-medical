import { LucideIcon } from "lucide-react";

export interface WhyChooseFeature {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  color: "blue" | "green" | "cyan" | "emerald";
}

export interface TrustBadge {
  id: number;
  title: string;
  value: string;
  color: "blue" | "green" | "cyan";
}

export interface JourneyPoint {
  id: number;
  title: string;
  icon: LucideIcon;
}