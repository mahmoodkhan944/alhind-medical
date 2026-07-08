"use client";

import { motion } from "framer-motion";
import { MapPin, Star, Award, Users, Calendar } from "lucide-react";
import { ScrollAnimation } from "@/components/animations/ScrollAnimation";
import { TiltCard } from "@/components/animations/TiltCard";

const HOSPITALS = [
  {
    name: "Apollo Hospitals",
    location: "Chennai, India",
    country: "🇮🇳",
    rating: 4.9,
    reviews: 2847,
    specialties: ["Cardiac", "Oncology", "Neurology"],
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800",
    beds: 1000,
    established: 1983,
    accreditations: ["JCI", "NABH"],
  },
  {
    name: "Memorial Hospital",
    location: "Istanbul, Turkey",
    country: "🇹🇷",
    rating: 4.8,
    reviews: 1923,
    specialties: ["Cosmetic", "Orthopedics", "Fertility"],
    image: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=800",
    beds: 750,
    established: 1995,
    accreditations: ["JCI", "ISO"],
  },
  {
    name: "Fortis Healthcare",
    location: "Delhi, India",
    country: "🇮🇳",
    rating: 4.9,
    reviews: 3156,
    specialties: ["Cardiac", "Transplant", "Oncology"],
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800",
    beds: 1200,
    established: 1996,
    accreditations: ["JCI", "NABH"],
  },
  {
    name: "Acıbadem Healthcare",
    location: "Istanbul, Turkey",
    country: "🇹🇷",
    rating: 4.8,
    reviews: 2104,
    specialties: ["Oncology", "Cardiac", "Neurology"],
    image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800",
    beds: 900,
    established: 1991,
    accreditations: ["JCI", "ISO"],
  },
  {
    name: "Medanta - The Medicity",
    location: "Gurugram, India",
    country: "🇮🇳",
    rating: 4.9,
    reviews: 2567,
    specialties: ["Transplant", "Cardiac", "Neurology"],
    image: "https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=800",
    beds: 1250,
    established: 2009,
    accreditations: ["JCI", "NABH"],
  },
  {
    name: "Liv Hospital",
    location: "Istanbul, Turkey",
    country: "🇹🇷",
    rating: 4.7,
    reviews: 1678,
    specialties: ["Cosmetic", "Dental", "Orthopedics"],
    image: "https://images.unsplash.com/photo-1574169208507-84376144848b?w=800",
    beds: 400,
    established: 22012,
    accreditations: ["JCI"],
  },
];

export default function HospitalsPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollAnimation className="text-center mb-16">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-4">
            Partner <span className="gradient-text">Hospitals</span>
          </h1>
          <p className="text-lg text-txt-secondary max-w-2xl mx-auto">
            World-class facilities with international accreditations and
            state-of-the-art technology.
          </p>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {HOSPITALS.map((h, i) => (
            <ScrollAnimation key={h.name} delay={i * 0.1}>
              <TiltCard>
                <div className="glass rounded-3xl overflow-hidden group hover:shadow-2xl hover:shadow-medical-blue/20 transition-all">
                  <div className="relative h-56 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                      style={{ backgroundImage: `url(${h.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/80 to-transparent" />
                    <div className="absolute top-4 right-4 glass px-3 py-1.5 rounded-full flex items-center gap-1">
                      <Star
                        className="w-4 h-4 text-medical-orange"
                        fill="#F59E0B"
                      />
                      <span className="font-semibold text-sm">{h.rating}</span>
                    </div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="text-2xl mb-1">{h.country}</div>
                      <h3 className="font-display text-xl font-bold">
                        {h.name}
                      </h3>
                      <div className="flex items-center gap-1 text-sm opacity-90">
                        <MapPin className="w-3 h-3" />
                        {h.location}
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {h.specialties.map((s) => (
                        <span
                          key={s}
                          className="px-3 py-1 rounded-full bg-medical-ice text-medical-blue text-xs font-medium"
                        >
                          {s}
                        </span>
                      ))}
                    </div>

                    <div className="grid grid-cols-3 gap-3 pt-4 border-t border-txt-muted/10">
                      <div className="text-center">
                        <Users className="w-4 h-4 text-medical-blue mx-auto mb-1" />
                        <div className="text-xs text-txt-muted">Beds</div>
                        <div className="font-bold text-sm">{h.beds}</div>
                      </div>
                      <div className="text-center">
                        <Calendar className="w-4 h-4 text-medical-green mx-auto mb-1" />
                        <div className="text-xs text-txt-muted">Since</div>
                        <div className="font-bold text-sm">{h.established}</div>
                      </div>
                      <div className="text-center">
                        <Award className="w-4 h-4 text-medical-cyan mx-auto mb-1" />
                        <div className="text-xs text-txt-muted">Accred.</div>
                        <div className="font-bold text-sm">
                          {h.accreditations.length}
                        </div>
                      </div>
                    </div>

                    <button className="mt-6 w-full py-3 rounded-full bg-cta-gradient text-white font-semibold hover:shadow-lg hover:shadow-medical-green/30 transition">
                      View Details
                    </button>
                  </div>
                </div>
              </TiltCard>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </div>
  );
}
