"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Heart,
  Brain,
  Smile,
  Bone,
  Eye,
  Baby,
  Activity,
  Pill,
} from "lucide-react";
import { ScrollAnimation } from "@/components/animations/ScrollAnimation";
import { TiltCard } from "@/components/animations/TiltCard";
import { FlipCard } from "@/components/animations/FlipCard";

const CATEGORIES = [
  { id: "all", label: "All", icon: Activity },
  { id: "cardiac", label: "Cardiac", icon: Heart },
  { id: "neuro", label: "Neurology", icon: Brain },
  { id: "cosmetic", label: "Cosmetic", icon: Smile },
  { id: "ortho", label: "Orthopedics", icon: Bone },
  { id: "eye", label: "Ophthalmology", icon: Eye },
  { id: "fertility", label: "Fertility", icon: Baby },
  { id: "dental", label: "Dental", icon: Pill },
];

const TREATMENTS = [
  {
    id: 1,
    category: "cardiac",
    name: "Coronary Bypass",
    priceIndia: 8000,
    priceTurkey: 12000,
    duration: "7-10 days",
    icon: Heart,
    color: "#0EA5E9",
    desc: "Surgical procedure to restore blood flow to the heart.",
  },
  {
    id: 2,
    category: "cardiac",
    name: "Heart Valve Replacement",
    priceIndia: 10000,
    priceTurkey: 15000,
    duration: "10-14 days",
    icon: Heart,
    color: "#0EA5E9",
    desc: "Replace damaged heart valves with mechanical or biological ones.",
  },
  {
    id: 3,
    category: "neuro",
    name: "Brain Tumor Surgery",
    priceIndia: 12000,
    priceTurkey: 18000,
    duration: "14-21 days",
    icon: Brain,
    color: "#10B981",
    desc: "Advanced neurosurgical removal of brain tumors.",
  },
  {
    id: 4,
    category: "cosmetic",
    name: "Rhinoplasty",
    priceIndia: 2500,
    priceTurkey: 3500,
    duration: "7 days",
    icon: Smile,
    color: "#06B6D4",
    desc: "Nose reshaping surgery for aesthetic or functional purposes.",
  },
  {
    id: 5,
    category: "cosmetic",
    name: "Hair Transplant",
    priceIndia: 1500,
    priceTurkey: 2500,
    duration: "3-5 days",
    icon: Smile,
    color: "#06B6D4",
    desc: "FUE hair transplantation with natural results.",
  },
  {
    id: 6,
    category: "ortho",
    name: "Knee Replacement",
    priceIndia: 6000,
    priceTurkey: 9000,
    duration: "10-14 days",
    icon: Bone,
    color: "#14B8A6",
    desc: "Total knee arthroplasty for pain relief.",
  },
  {
    id: 7,
    category: "eye",
    name: "LASIK",
    priceIndia: 1500,
    priceTurkey: 2000,
    duration: "2 days",
    icon: Eye,
    color: "#0EA5E9",
    desc: "Laser eye surgery to correct vision.",
  },
  {
    id: 8,
    category: "fertility",
    name: "IVF Treatment",
    priceIndia: 4000,
    priceTurkey: 6000,
    duration: "21 days",
    icon: Baby,
    color: "#10B981",
    desc: "In vitro fertilization for fertility assistance.",
  },
  {
    id: 9,
    category: "dental",
    name: "Dental Implants",
    priceIndia: 800,
    priceTurkey: 1200,
    duration: "7 days",
    icon: Pill,
    color: "#14B8A6",
    desc: "Permanent tooth replacement with titanium implants.",
  },
];

export default function TreatmentsPage() {
  const [active, setActive] = useState("all");

  const filtered =
    active === "all"
      ? TREATMENTS
      : TREATMENTS.filter((t) => t.category === active);

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollAnimation className="text-center mb-12">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-4">
            Our <span className="gradient-text">Treatments</span>
          </h1>
          <p className="text-lg text-txt-secondary max-w-2xl mx-auto">
            Explore our comprehensive range of medical procedures with
            transparent pricing.
          </p>
        </ScrollAnimation>

        {/* Filter tabs */}
        <ScrollAnimation className="mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            {CATEGORIES.map((cat) => (
              <motion.button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-sm transition-all ${
                  active === cat.id
                    ? "bg-cta-gradient text-white shadow-lg shadow-medical-green/30"
                    : "glass hover:bg-medical-ice"
                }`}
              >
                <cat.icon className="w-4 h-4" />
                {cat.label}
              </motion.button>
            ))}
          </div>
        </ScrollAnimation>

        {/* Treatment grid with flip cards */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filtered.map((t, i) => (
            <motion.div
              key={t.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="h-[320px]"
            >
              <TiltCard className="h-full">
                <FlipCard
                  className="h-full"
                  front={
                    <div className="h-full glass rounded-3xl p-8 flex flex-col relative overflow-hidden group">
                      <div
                        className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-20"
                        style={{ background: t.color }}
                      />
                      <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                        style={{
                          background: `linear-gradient(135deg, ${t.color}, ${t.color}aa)`,
                        }}
                      >
                        <t.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="font-display text-2xl font-bold mb-2">
                        {t.name}
                      </h3>
                      <p className="text-sm text-txt-secondary mb-auto">
                        {t.desc}
                      </p>
                      <div className="flex items-center justify-between pt-4 border-t border-txt-muted/10">
                        <div>
                          <div className="text-xs text-txt-muted">India</div>
                          <div className="font-bold" style={{ color: t.color }}>
                            ${t.priceIndia.toLocaleString()}
                          </div>
                        </div>
                        <div className="text-xs text-txt-muted">
                          Click for details →
                        </div>
                      </div>
                    </div>
                  }
                  back={
                    <div
                      className="h-full rounded-3xl p-8 text-white flex flex-col"
                      style={{
                        background: `linear-gradient(135deg, ${t.color}, ${t.color}cc)`,
                      }}
                    >
                      <h3 className="font-display text-2xl font-bold mb-4">
                        {t.name}
                      </h3>
                      <div className="space-y-3 flex-1">
                        <div className="flex justify-between items-center">
                          <span className="text-sm opacity-80">🇮🇳 India</span>
                          <span className="font-bold">
                            ${t.priceIndia.toLocaleString()}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm opacity-80">🇹🇷 Turkey</span>
                          <span className="font-bold">
                            ${t.priceTurkey.toLocaleString()}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm opacity-80">Duration</span>
                          <span className="font-bold">{t.duration}</span>
                        </div>
                      </div>
                      <button className="mt-4 w-full py-3 rounded-full bg-white/20 hover:bg-white/30 transition font-semibold">
                        Get Quote →
                      </button>
                    </div>
                  }
                />
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
