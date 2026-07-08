"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { ScrollAnimation } from "../animations/ScrollAnimation";

export function CTASection() {
  return (
    <section className="relative py-32">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollAnimation>
          <div className="relative rounded-[2.5rem] overflow-hidden bg-bg-dark p-12 md:p-20">
            {/* Animated gradient background */}
            <motion.div
              animate={{
                background: [
                  "radial-gradient(circle at 20% 30%, rgba(14,165,233,0.3) 0%, transparent 50%)",
                  "radial-gradient(circle at 80% 70%, rgba(16,185,129,0.3) 0%, transparent 50%)",
                  "radial-gradient(circle at 50% 50%, rgba(6,182,212,0.3) 0%, transparent 50%)",
                ],
              }}
              transition={{ duration: 8, repeat: Infinity }}
              className="absolute inset-0"
            />

            <div className="relative text-center max-w-3xl mx-auto">
              <Sparkles className="w-12 h-12 text-medical-orange mx-auto mb-6" />
              <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-6">
                Ready to Start Your{" "}
                <span className="gradient-text">Healing Journey?</span>
              </h2>
              <p className="text-lg text-txt-muted mb-10">
                Get a free consultation with our medical experts. No commitment,
                no pressure — just clarity.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/ai-match"
                  className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-cta-gradient text-white font-semibold shadow-xl shadow-medical-green/30 hover:shadow-medical-green/50 hover:scale-105 transition-all"
                >
                  Start Free Consultation
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/cost-calculator"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full glass text-white font-semibold hover:bg-white/20 transition"
                >
                  Calculate Costs
                </Link>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
