"use client";

import type { ReactNode } from "react";

import {
  Globe,
  Plane,
  Building2,
  ShieldCheck,
  HeartPulse,
  Stethoscope,
  FileText,
} from "lucide-react";

type Country = {
  code: string;
  label: string;
  position: string;
};

const countries: Country[] = [
  {
    code: "🇮🇳",
    label: "India",
    position: "left-4 top-6",
  },
  {
    code: "🇹🇷",
    label: "Turkey",
    position: "right-4 top-6",
  },
];

function CountryMarker({
  code,
  label,
  position,
}: Country) {
  return (
    <div
      className={`absolute ${position}
      flex items-center gap-2
      rounded-full
      border border-slate-200
      bg-white/90
      backdrop-blur-xl
      px-3
      py-2
      shadow-lg`}
    >
      <span className="text-lg">
        {code}
      </span>

      <span
        className="
          text-xs
          font-semibold
          text-slate-700
        "
      >
        {label}
      </span>
    </div>
  );
}

function FloatingCard({
  icon,
  className,
}: {
  icon: ReactNode;
  className: string;
}) {
  return (
    <div
      className={`
        absolute
        ${className}

        flex
        h-14
        w-14
        items-center
        justify-center

        rounded-2xl

        border
        border-slate-200

        bg-white/90
        backdrop-blur-xl

        shadow-xl
      `}
    >
      {icon}
    </div>
  );
}

function HospitalMarker({
  className,
}: {
  className: string;
}) {
  return (
    <div
      className={`
        absolute
        ${className}

        flex
        h-12
        w-12
        items-center
        justify-center

        rounded-full

        border
        border-slate-200

        bg-white

        shadow-lg
      `}
    >
      <Building2
        className="h-5 w-5 text-medical-blue"
      />
    </div>
  );
}

export default function MedicalTravelIllustration() {
  return (
    <div
      className="
        relative
        flex
        h-[480px]
        w-full
        items-center
        justify-center
        overflow-hidden
      "
    >
      {/* Background Glow */}

      <div
        className="
          absolute
          h-[420px]
          w-[420px]
          rounded-full
          bg-cyan-200/30
          blur-[120px]
        "
      />

      {/* SVG Routes */}

      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 500 500"
      >
        <path
          d="M110 120 Q250 250 390 120"
          fill="none"
          stroke="#38BDF8"
          strokeWidth="2"
          strokeDasharray="7 7"
        />

        <path
          d="M110 380 Q250 250 390 380"
          fill="none"
          stroke="#38BDF8"
          strokeWidth="2"
          strokeDasharray="7 7"
        />
      </svg>

            {/* Globe */}

      <div className="relative z-20">

        <div
          className="
            absolute
            inset-0
            rounded-full
            bg-cyan-400/30
            blur-[70px]
            scale-110
          "
        />

        <div
          className="
            relative
            flex
            h-64
            w-64
            items-center
            justify-center

            rounded-full

            bg-gradient-to-br
            from-blue-600
            via-sky-500
            to-cyan-500

            shadow-[0_35px_80px_rgba(37,99,235,.35)]
          "
        >
          <Globe
            size={120}
            strokeWidth={1.4}
            className="text-white"
          />
        </div>

      </div>

      {/* Plane */}

      <div
        className="
          absolute
          top-16
          left-1/2
          -translate-x-1/2
          animate-bounce
          z-30
        "
      >
        <Plane
          className="
            h-6
            w-6
            rotate-45
            text-cyan-600
          "
        />
      </div>

      {/* Hospital Markers */}

      <HospitalMarker className="left-20 top-24" />

      <HospitalMarker className="right-20 top-24" />

      <HospitalMarker className="left-20 bottom-24" />

      <HospitalMarker className="right-20 bottom-24" />

      {/* Countries */}

      {countries.map((country) => (
        <CountryMarker
          key={country.label}
          {...country}
        />
      ))}

      {/* Floating Cards */}

      <FloatingCard
        className="left-8 top-1/2"
        icon={
          <HeartPulse className="h-6 w-6 text-red-500" />
        }
      />

      <FloatingCard
        className="right-8 top-16"
        icon={
          <ShieldCheck className="h-6 w-6 text-emerald-600" />
        }
      />

      <FloatingCard
        className="left-12 bottom-10"
        icon={
          <Stethoscope className="h-6 w-6 text-sky-600" />
        }
      />

      <FloatingCard
        className="right-12 bottom-10"
        icon={
          <FileText className="h-6 w-6 text-blue-600" />
        }
      />

      {/* Bottom Text */}

      <div
        className="
          absolute
          bottom-0
          left-1/2
          -translate-x-1/2

          text-center
        "
      >

      </div>

    </div>
  );
}