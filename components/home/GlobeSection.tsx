"use client";

import dynamic from "next/dynamic";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Globe2,
  MapPin,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { ScrollAnimation } from "../animations/ScrollAnimation";

const GlobeScene = dynamic(
  () =>
    import("@/components/3d/GlobeScene").then((module) => module.GlobeScene),
  {
    ssr: false,
    loading: () => (
      <div className="absolute inset-0 flex items-start justify-center">
        <div className="h-32 w-32 animate-pulse rounded-full bg-medical-blue/10 blur-2xl" />
      </div>
    ),
  },
);

const DESTINATIONS = [
  {
    country: "India",
    flag: "🇮🇳",
    city: "Delhi · Mumbai · Chennai",
    hospitals: "30+",
    description:
      "Internationally accredited hospitals with advanced technology and experienced specialists.",
    color: "#2563EB",
  },
  {
    country: "Turkey",
    flag: "🇹🇷",
    city: "Istanbul · Ankara",
    hospitals: "20+",
    description:
      "Premium medical facilities offering advanced treatments and world-class patient care.",
    color: "#059669",
  },
];

export function GlobeSection() {
  return (
    <section className="relative overflow-hidden bg-[#F7FAFE] pt-8 pb-0 sm:pt-20 sm:pb-8 lg:pt-28 lg:pb-12">
      {/* BACKGROUND */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-64 top-0 h-[550px] w-[550px] rounded-full bg-medical-blue/[0.07] blur-[140px]" />

        <div className="absolute -right-64 bottom-0 h-[550px] w-[550px] rounded-full bg-medical-green/[0.07] blur-[140px]" />

        <div
          className="
            absolute
            inset-0
            opacity-[0.025]
            [background-image:linear-gradient(to_right,#2563eb_1px,transparent_1px),linear-gradient(to_bottom,#2563eb_1px,transparent_1px)]
            [background-size:60px_60px]
          "
        />
      </div>

      <div
        className="
          relative
          z-10
          mx-auto
          grid
          w-full
          max-w-7xl
          items-center
          gap-2
          sm:gap-12
          px-5
          sm:px-8
          lg:grid-cols-[0.9fr_1.1fr]
          lg:gap-16
          lg:px-10
          xl:px-6
        "
      >
        {/* LEFT CONTENT */}

        <ScrollAnimation variant="slideLeft">
          {/* BADGE */}

          <div
            className="
              mb-5
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-medical-blue/15
              bg-white/80
              px-4
              py-2
              shadow-sm
              backdrop-blur-xl
            "
          >
            <Globe2 className="h-4 w-4 text-medical-blue" />

            <span
              className="
                text-xs
                font-semibold
                uppercase
                tracking-[0.12em]
                text-medical-blue
                sm:text-sm
              "
            >
              Global Healthcare Network
            </span>
          </div>

          {/* HEADING */}

          <h2
            className="
              max-w-xl
              font-display
              text-3xl
              font-bold
              leading-[1.12]
              tracking-[-0.04em]
              text-txt-primary
              sm:text-4xl
              lg:text-5xl
            "
          >
            Trusted Healthcare
            <span className="mt-1 block gradient-text">Across Borders</span>
          </h2>

          {/* DESCRIPTION */}

          <p
            className="
              mt-5
              max-w-xl
              text-base
              leading-7
              text-txt-secondary
              sm:text-lg
              sm:leading-8
            "
          >
            Access internationally accredited hospitals and leading medical
            specialists in India and Turkey, with personalized support
            throughout your complete healthcare journey.
          </p>

          {/* TRUST POINTS */}

          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            <TrustPoint text="Verified Hospitals" />

            <TrustPoint text="International Standards" />

            <TrustPoint text="Expert Medical Teams" />

            <TrustPoint text="Complete Travel Support" />
          </div>

          {/* DESTINATION CARDS */}

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {DESTINATIONS.map((destination) => (
              <article
                key={destination.country}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[22px]
                  border
                  border-slate-200/80
                  bg-white/85
                  p-5
                  shadow-[0_10px_35px_rgba(11,37,69,0.06)]
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:shadow-[0_20px_50px_rgba(11,37,69,0.11)]
                "
              >
                {/* DECORATION */}

                <div
                  className="
                    absolute
                    -right-10
                    -top-10
                    h-28
                    w-28
                    rounded-full
                    opacity-[0.07]
                    transition-transform
                    duration-500
                    group-hover:scale-125
                  "
                  style={{
                    background: destination.color,
                  }}
                />

                <div className="relative">
                  {/* COUNTRY */}

                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{destination.flag}</span>

                      <div>
                        <h3 className="font-display text-lg font-bold text-txt-primary">
                          {destination.country}
                        </h3>

                        <div className="mt-0.5 flex items-center gap-1 text-[11px] text-txt-muted">
                          <MapPin className="h-3 w-3" />

                          {destination.city}
                        </div>
                      </div>
                    </div>

                    <div
                      className="
                        flex
                        h-11
                        w-11
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        text-sm
                        font-bold
                        text-white
                        shadow-sm
                      "
                      style={{
                        background: `linear-gradient(135deg, ${destination.color}, ${destination.color}cc)`,
                      }}
                    >
                      {destination.hospitals}
                    </div>
                  </div>

                  {/* DESCRIPTION */}

                  <p className="mt-4 text-sm leading-6 text-txt-secondary">
                    {destination.description}
                  </p>

                  {/* BOTTOM */}

                  <div className="mt-4 flex items-center justify-between border-t border-slate-200/70 pt-4">
                    <div className="flex items-center gap-2 text-xs font-semibold text-txt-secondary">
                      <Building2
                        className="h-4 w-4"
                        style={{
                          color: destination.color,
                        }}
                      />
                      Accredited Hospitals
                    </div>

                    <ArrowRight
                      className="
                        h-4
                        w-4
                        text-txt-muted
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                      "
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </ScrollAnimation>

        {/* RIGHT GLOBE */}

        <ScrollAnimation
          variant="slideRight"
          className="
  relative
  -mt-6
  h-[280px]
  w-full
  sm:mt-0
  sm:h-[450px]
  lg:h-[540px]
"
        >
          {/* GLOBE GLOW */}

          <div
            className="
      pointer-events-none
      absolute
      left-1/2
      top-1/2
      h-[85%]
      w-[85%]
      -translate-x-1/2
      -translate-y-1/2
      rounded-full
      bg-gradient-to-br
      from-medical-blue/10
      via-medical-cyan/5
      to-medical-green/10
      blur-[80px]
    "
          />

          {/* GLOBE CONTAINER */}

          <div className="absolute inset-0 overflow-hidden">
            <GlobeScene />
          </div>

          {/* TOP FLOATING CARD */}

          <div
            className="
      absolute
      left-3
      top-5
      z-10
      hidden
      items-center
      gap-3
      rounded-2xl
      border
      border-white/80
      bg-white/90
      px-4
      py-3
      shadow-[0_15px_40px_rgba(11,37,69,0.1)]
      backdrop-blur-xl
      sm:flex
      lg:-left-6
      lg:top-12
    "
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-medical-blue/10">
              <ShieldCheck className="h-5 w-5 text-medical-blue" />
            </div>

            <div>
              <div className="text-sm font-bold text-txt-primary">
                Trusted Network
              </div>

              <div className="text-xs text-txt-muted">
                50+ Partner Hospitals
              </div>
            </div>
          </div>

          {/* BOTTOM FLOATING CARD */}

          <div
            className="
      absolute
      bottom-5
      right-3
      z-10
      hidden
      items-center
      gap-3
      rounded-2xl
      border
      border-white/80
      bg-white/90
      px-4
      py-3
      shadow-[0_15px_40px_rgba(11,37,69,0.1)]
      backdrop-blur-xl
      sm:flex
      lg:-right-5
      lg:bottom-12
    "
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-medical-green/10">
              <Sparkles className="h-5 w-5 text-medical-green" />
            </div>

            <div>
              <div className="text-sm font-bold text-txt-primary">
                Global Care
              </div>

              <div className="text-xs text-txt-muted">India & Turkey</div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}

function TrustPoint({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2.5 text-sm font-medium text-txt-secondary">
      <span
        className="
          flex
          h-6
          w-6
          shrink-0
          items-center
          justify-center
          rounded-full
          bg-medical-green/10
        "
      >
        <CheckCircle2 className="h-3.5 w-3.5 text-medical-green" />
      </span>

      {text}
    </div>
  );
}
