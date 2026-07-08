import {
  Brain,
  Plane,
  Stethoscope,
  UserRound,
  ShieldCheck,
  Hotel,
  Languages,
  BadgeDollarSign,
  Headphones,
  FileCheck,
  HeartHandshake,
} from "lucide-react";

import { WhyChooseFeature, TrustBadge, JourneyPoint } from "./types";

export const whyChooseFeatures: WhyChooseFeature[] = [
  {
    id: 1,
    title: "Free Medical Opinion",
    description:
      "Receive expert treatment recommendations before planning your medical journey.",
    icon: Stethoscope,
    color: "blue",
  },
  {
    id: 2,
    title: "Dedicated Case Manager",
    description:
      "A personal coordinator supports you from consultation to recovery.",
    icon: UserRound,
    color: "green",
  },
  {
    id: 3,
    title: "Visa Assistance",
    description:
      "Complete support for medical visa documentation and application process.",
    icon: FileCheck,
    color: "cyan",
  },
  {
    id: 4,
    title: "Airport Pickup",
    description:
      "Comfortable airport transfers to your hotel and hospital.",
    icon: Plane,
    color: "emerald",
  },
  {
    id: 5,
    title: "Hotel Booking",
    description:
      "Stay close to your hospital with carefully selected accommodation.",
    icon: Hotel,
    color: "blue",
  },
  {
    id: 6,
    title: "Language Support",
    description:
      "Professional interpreters ensure smooth communication.",
    icon: Languages,
    color: "green",
  },
  {
    id: 7,
    title: "Transparent Pricing",
    description:
      "Clear treatment estimates without hidden charges.",
    icon: BadgeDollarSign,
    color: "cyan",
  },
  {
    id: 8,
    title: "24×7 Patient Support",
    description:
      "Our support team is available throughout your medical journey.",
    icon: Headphones,
    color: "emerald",
  },
];

export const trustBadges: TrustBadge[] = [
  {
    id: 1,
    title: "Happy Patients",
    value: "50,000+",
    color: "blue",
  },
  {
    id: 2,
    title: "Partner Hospitals",
    value: "50+",
    color: "green",
  },
  {
    id: 3,
    title: "Success Rate",
    value: "98%",
    color: "cyan",
  },
];

export const journeyPoints: JourneyPoint[] = [
  {
    id: 1,
    title: "Trusted Hospital Network",
    icon: ShieldCheck,
  },
  {
    id: 2,
    title: "Dedicated Patient Coordinator",
    icon: HeartHandshake,
  },
  {
    id: 3,
    title: "End-to-End Medical Travel",
    icon: Brain,
  },
];