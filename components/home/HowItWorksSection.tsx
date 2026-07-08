"use client";

import { useState } from "react";
import { ScrollAnimation } from "../animations/ScrollAnimation";
import {
  Search,
  UserCheck,
  Plane,
  Heart,
  Stethoscope,
  Building2,
  MapPin,
  Headphones,
  FileText,
  ShieldCheck,
  Hotel,
  Luggage,
  CheckCircle2,
  Ambulance,
  CalendarCheck,
} from "lucide-react";

const STEPS = [
  {
    icon: Search,
    title: "Tell Us Your Needs",
    desc: "Share your medical condition, treatment requirements, and preferences with our healthcare experts.",
  },
  {
    icon: UserCheck,
    title: "Get Matched",
    desc: "Receive personalized recommendations for trusted doctors and internationally accredited hospitals.",
  },
  {
    icon: Plane,
    title: "Plan Your Journey",
    desc: "We coordinate your treatment journey including travel, visa assistance, accommodation, and logistics.",
  },
  {
    icon: Heart,
    title: "Receive World-Class Care",
    desc: "Travel with confidence and receive quality treatment with dedicated support throughout your healthcare journey.",
  },
];

const VISUAL_ICONS = [
  Stethoscope,
  Building2,
  Heart,
  MapPin,
  UserCheck,
  Plane,
  Search,
  Headphones,
  Building2,
  Stethoscope,
  Plane,
  Heart,
];

function StepIllustration({ step }: { step: number }) {
  /* STEP 1 — MEDICAL REQUIREMENTS */

  if (step === 0) {
    return (
      <div className="relative flex h-52 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="absolute left-5 top-5 h-20 w-20 rounded-full bg-blue-200/30 blur-2xl" />

        <div className="absolute bottom-4 right-4 h-24 w-24 rounded-full bg-cyan-200/40 blur-2xl" />

        <div className="relative w-[82%] rounded-2xl border border-blue-100 bg-white p-4 shadow-xl">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <FileText className="h-6 w-6" />
            </div>

            <div>
              <div className="h-2.5 w-28 rounded-full bg-slate-200" />
              <div className="mt-2 h-2 w-20 rounded-full bg-slate-100" />
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-3">
              <Stethoscope className="h-5 w-5 text-blue-500" />
              <div className="h-2 flex-1 rounded-full bg-blue-100" />
            </div>

            <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-3">
              <FileText className="h-5 w-5 text-cyan-500" />
              <div className="h-2 flex-1 rounded-full bg-cyan-100" />
            </div>
          </div>

          <div className="absolute -right-3 -top-3 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-lg">
            <Search className="h-5 w-5" />
          </div>
        </div>
      </div>
    );
  }

  /* STEP 2 — HOSPITAL MATCHING */

  if (step === 1) {
    return (
      <div className="relative flex h-52 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-cyan-50 via-white to-blue-50">
        <div className="absolute h-36 w-36 rounded-full border border-blue-100" />

        <div className="absolute h-48 w-48 rounded-full border border-cyan-100" />

        <div className="relative flex items-center gap-3">
          <div className="rounded-2xl border border-blue-100 bg-white p-4 shadow-lg">
            <Building2 className="h-10 w-10 text-blue-600" />

            <div className="mt-3 h-2 w-16 rounded-full bg-blue-100" />

            <div className="mt-2 flex gap-1">
              <div className="h-1.5 w-6 rounded-full bg-cyan-400" />
              <div className="h-1.5 w-3 rounded-full bg-slate-200" />
            </div>
          </div>

          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-xl">
            <UserCheck className="h-6 w-6" />
          </div>

          <div className="rounded-2xl border border-cyan-100 bg-white p-4 shadow-lg">
            <Stethoscope className="h-10 w-10 text-cyan-600" />

            <div className="mt-3 h-2 w-16 rounded-full bg-cyan-100" />

            <div className="mt-2 flex gap-1">
              <div className="h-1.5 w-6 rounded-full bg-blue-400" />
              <div className="h-1.5 w-3 rounded-full bg-slate-200" />
            </div>
          </div>
        </div>

        <div className="absolute bottom-4 flex items-center gap-2 rounded-full border border-green-100 bg-white px-4 py-2 text-xs font-semibold text-green-600 shadow-md">
          <ShieldCheck className="h-4 w-4" />
          Verified Match
        </div>
      </div>
    );
  }

  /* STEP 3 — TRAVEL */

  if (step === 2) {
    return (
      <div className="relative h-52 overflow-hidden rounded-2xl bg-gradient-to-br from-sky-50 via-white to-cyan-50">
        {/* ROUTE */}

        <div className="absolute left-[15%] top-1/2 h-px w-[70%] border-t-2 border-dashed border-blue-200" />

        {/* HOME LOCATION */}

        <div className="absolute left-[10%] top-[38%]">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-100 bg-white text-blue-500 shadow-lg">
            <MapPin className="h-7 w-7" />
          </div>
        </div>

        {/* PLANE */}

        <div className="absolute left-1/2 top-[35%] -translate-x-1/2">
          <div className="flex h-16 w-16 rotate-[-10deg] items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-xl">
            <Plane className="h-8 w-8" />
          </div>
        </div>

        {/* HOTEL */}

        <div className="absolute right-[10%] top-[38%]">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-100 bg-white text-cyan-600 shadow-lg">
            <Hotel className="h-7 w-7" />
          </div>
        </div>

        {/* SERVICES */}

        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
          <div className="flex items-center gap-1 rounded-full bg-white px-3 py-2 text-[10px] font-medium text-slate-600 shadow">
            <Luggage className="h-3.5 w-3.5 text-blue-500" />
            Travel
          </div>

          <div className="flex items-center gap-1 rounded-full bg-white px-3 py-2 text-[10px] font-medium text-slate-600 shadow">
            <Hotel className="h-3.5 w-3.5 text-cyan-500" />
            Stay
          </div>

          <div className="flex items-center gap-1 rounded-full bg-white px-3 py-2 text-[10px] font-medium text-slate-600 shadow">
            <Headphones className="h-3.5 w-3.5 text-green-500" />
            Support
          </div>
        </div>
      </div>
    );
  }

  /* STEP 4 — TREATMENT */

  return (
    <div className="relative flex h-52 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 via-white to-emerald-50">
      <div className="absolute h-44 w-44 rounded-full bg-gradient-to-br from-blue-100/50 to-emerald-100/50 blur-xl" />

      {/* HOSPITAL */}

      <div className="relative">
        <div className="flex h-28 w-28 items-center justify-center rounded-[28px] border border-blue-100 bg-white shadow-xl">
          <Building2 className="h-14 w-14 text-blue-600" />
        </div>

        {/* SUCCESS */}

        <div className="absolute -right-4 -top-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 text-white shadow-lg">
          <CheckCircle2 className="h-6 w-6" />
        </div>

        {/* HEART */}

        <div className="absolute -bottom-4 -left-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white text-rose-500 shadow-lg">
          <Heart className="h-5 w-5" />
        </div>
      </div>

      {/* FLOATING ELEMENTS */}

      <div className="absolute left-4 top-5 flex h-10 w-10 items-center justify-center rounded-xl bg-white text-blue-500 shadow">
        <CalendarCheck className="h-5 w-5" />
      </div>

      <div className="absolute bottom-5 right-5 flex h-10 w-10 items-center justify-center rounded-xl bg-white text-cyan-500 shadow">
        <Ambulance className="h-5 w-5" />
      </div>

      <div className="absolute bottom-4 rounded-full border border-emerald-100 bg-white px-4 py-2 text-[11px] font-semibold text-emerald-600 shadow">
        World-Class Healthcare
      </div>
    </div>
  );
}

export function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    // How It Works
    <section className="relative overflow-hidden bg-white py-10 sm:py-12 lg:py-16">
      {/* BACKGROUND DECORATION */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_80%_50%,rgba(14,165,233,0.08),transparent_35%)]
        "
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 xl:px-6">
        {/* SECTION HEADING */}

        <ScrollAnimation className="mb-10 text-center lg:mb-14">
          <div
            className="
              mb-4
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-medical-blue/10
              bg-medical-ice
              px-4
              py-2
              text-xs
              font-medium
              text-medical-blue
              sm:text-sm
            "
          >
            ✨ Simple Process
          </div>

          <h2
            className="
              font-display
              text-3xl
              font-bold
              tracking-[-0.03em]
              sm:text-4xl
              md:text-5xl
            "
          >
            How It <span className="gradient-text">Works</span>
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-2xl
              text-sm
              leading-relaxed
              text-txt-secondary
              sm:text-base
            "
          >
            Your complete healthcare journey, simplified into four easy steps.
          </p>
        </ScrollAnimation>

        {/* MAIN CONTENT */}

        {/* MAIN CONTENT */}

        {/* =========================
    MOBILE / TABLET LAYOUT
========================= */}

        <div className="lg:hidden">
          <ScrollAnimation>
            <div className="relative mx-auto max-w-xl">
              {/* TIMELINE BACKGROUND LINE */}

              <div
                className="
          absolute
          bottom-6
          left-[21px]
          top-6
          w-px
          bg-slate-200
        "
              />

              {/* ACTIVE PROGRESS LINE */}

              <div
                className="
          absolute
          left-[21px]
          top-6
          w-px
          bg-gradient-to-b
          from-blue-500
          to-teal-500
          transition-all
          duration-500
        "
                style={{
                  height: `${(activeStep / (STEPS.length - 1)) * 88}%`,
                }}
              />

              <div className="relative space-y-3">
                {STEPS.map((step, i) => {
                  const Icon = step.icon;
                  const isActive = activeStep === i;

                  return (
                    <div
                      key={step.title}
                      onClick={() => setActiveStep(i)}
                      className="
                relative
                flex
                cursor-pointer
                items-start
                gap-4
              "
                    >
                      {/* NUMBER */}

                      <button
                        type="button"
                        aria-label={`Open step ${i + 1}`}
                        className={`
                  relative
                  z-10
                  mt-2
                  flex
                  h-[43px]
                  w-[43px]
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  text-sm
                  font-bold
                  transition-all
                  duration-300

                  ${
                    isActive
                      ? `
                        scale-105
                        bg-cta-gradient
                        text-white
                        shadow-[0_10px_25px_rgba(14,165,233,0.30)]
                      `
                      : `
                        border
                        border-slate-200
                        bg-slate-50
                        text-txt-primary
                      `
                  }
                `}
                      >
                        {i + 1}
                      </button>

                      {/* STEP CONTENT */}

                      <div
                        className={`
                  min-w-0
                  flex-1
                  rounded-2xl
                  px-4
                  py-4
                  transition-all
                  duration-300

                  ${
                    isActive
                      ? `
                        border
                        border-medical-blue/10
                        bg-white
                        shadow-[0_15px_40px_rgba(15,56,110,0.08)]
                      `
                      : `
                        border
                        border-transparent
                      `
                  }
                `}
                      >
                        <div className="flex items-start gap-3">
                          {/* ICON */}

                          <div
                            className={`
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      transition-all
                      duration-300

                      ${
                        isActive
                          ? `
                            bg-medical-ice
                            text-medical-blue
                          `
                          : `
                            bg-slate-50
                            text-txt-secondary
                          `
                      }
                    `}
                          >
                            <Icon className="h-5 w-5" />
                          </div>

                          {/* TEXT */}

                          <div className="min-w-0 flex-1">
                            <h3
                              className="
                        font-display
                        text-base
                        font-bold
                        leading-tight
                        text-txt-primary
                      "
                            >
                              {step.title}
                            </h3>

                            <p
                              className="
                        mt-2
                        text-[13px]
                        leading-[1.65]
                        text-txt-secondary
                      "
                            >
                              {step.desc}
                            </p>
                          </div>
                        </div>

                        {/* MOBILE ACTIVE VISUAL */}

                        {/* MOBILE CUSTOM ILLUSTRATION */}

                        <div
                          className={`
    grid
    transition-all
    duration-500
    ease-in-out

    ${
      isActive
        ? "mt-4 grid-rows-[1fr] opacity-100"
        : "grid-rows-[0fr] opacity-0"
    }
  `}
                        >
                          <div className="overflow-hidden">
                            <StepIllustration step={i} />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </ScrollAnimation>
        </div>

        {/* =========================
    DESKTOP LAYOUT
========================= */}

        <div
          className="
    hidden
    items-center
    gap-16
    lg:grid
    lg:grid-cols-[1.1fr_0.9fr]
  "
        >
          {/* LEFT TIMELINE */}

          <ScrollAnimation>
            <div className="relative">
              {STEPS.map((step, i) => {
                const Icon = step.icon;
                const isActive = activeStep === i;

                return (
                  <div
                    key={step.title}
                    onClick={() => setActiveStep(i)}
                    className="
              group
              relative
              flex
              cursor-pointer
              gap-6
              pb-8
              last:pb-0
            "
                  >
                    {/* TIMELINE */}

                    <div className="relative flex flex-col items-center">
                      <div
                        className={`
                  relative
                  z-10
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  text-sm
                  font-bold
                  transition-all
                  duration-300

                  ${
                    isActive
                      ? `
                        scale-110
                        bg-cta-gradient
                        text-white
                        shadow-lg
                        shadow-medical-blue/25
                      `
                      : `
                        border
                        border-slate-200
                        bg-slate-50
                        text-txt-primary
                      `
                  }
                `}
                      >
                        {i + 1}
                      </div>

                      {i !== STEPS.length - 1 && (
                        <div
                          className={`
                    absolute
                    top-11
                    h-[calc(100%_-_4px)]
                    w-px

                    ${i < activeStep ? "bg-medical-blue" : "bg-slate-200"}
                  `}
                        />
                      )}
                    </div>

                    {/* CONTENT */}

                    <div
                      className={`
                flex-1
                rounded-2xl
                px-5
                py-4
                transition-all
                duration-300

                ${
                  isActive
                    ? `
                      bg-white
                      shadow-[0_15px_45px_rgba(15,56,110,0.08)]
                      ring-1
                      ring-medical-blue/10
                    `
                    : `
                      hover:bg-slate-50/70
                    `
                }
              `}
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className={`
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl

                    ${
                      isActive
                        ? `
                          bg-medical-ice
                          text-medical-blue
                        `
                        : `
                          bg-slate-50
                          text-txt-secondary
                        `
                    }
                  `}
                        >
                          <Icon className="h-5 w-5" />
                        </div>

                        <div>
                          <h3
                            className="
                      mb-2
                      font-display
                      text-xl
                      font-bold
                      text-txt-primary
                    "
                          >
                            {step.title}
                          </h3>

                          <p
                            className="
                      max-w-xl
                      text-[15px]
                      leading-6
                      text-txt-secondary
                    "
                          >
                            {step.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </ScrollAnimation>

          {/* RIGHT VISUAL */}

          {/* RIGHT CUSTOM ILLUSTRATION */}

          <ScrollAnimation delay={0.15}>
            <div
              className="
      relative
      mx-auto
      w-full
      max-w-lg
      overflow-hidden
      rounded-[32px]
      border
      border-medical-blue/10
      bg-gradient-to-br
      from-slate-50
      via-white
      to-medical-ice
      p-6
      shadow-[0_30px_80px_rgba(15,56,110,0.12)]
    "
            >
              {/* BACKGROUND GLOW */}

              <div
                className="
        pointer-events-none
        absolute
        -right-20
        -top-20
        h-56
        w-56
        rounded-full
        bg-medical-cyan/10
        blur-3xl
      "
              />

              {/* STEP INDICATOR */}

              <div className="relative mb-5 flex items-center justify-between">
                <div>
                  <div
                    className="
            text-xs
            font-semibold
            uppercase
            tracking-[0.15em]
            text-medical-blue
          "
                  >
                    Healthcare Journey
                  </div>

                  <h3
                    className="
            mt-1
            font-display
            text-xl
            font-bold
            text-txt-primary
          "
                  >
                    {STEPS[activeStep].title}
                  </h3>
                </div>

                <div
                  className="
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-full
          bg-cta-gradient
          text-sm
          font-bold
          text-white
          shadow-lg
          shadow-medical-blue/20
        "
                >
                  {activeStep + 1}
                </div>
              </div>

              {/* CUSTOM ILLUSTRATION */}

              <div
                key={activeStep}
                className="
        relative
        overflow-hidden
        rounded-2xl
        border
        border-white/80
        bg-white/50
        p-2
        shadow-inner
      "
              >
                <StepIllustration step={activeStep} />
              </div>

              {/* DESCRIPTION */}

              <div
                className="
        relative
        mt-5
        rounded-2xl
        border
        border-white
        bg-white/90
        p-5
        shadow-lg
        backdrop-blur-xl
      "
              >
                <div className="flex items-start gap-4">
                  <div
                    className="
            flex
            h-12
            w-12
            shrink-0
            items-center
            justify-center
            rounded-xl
            bg-cta-gradient
            text-white
            shadow-lg
            shadow-medical-blue/20
          "
                  >
                    {(() => {
                      const ActiveIcon = STEPS[activeStep].icon;

                      return <ActiveIcon className="h-6 w-6" />;
                    })()}
                  </div>

                  <div>
                    <div
                      className="
              mb-1
              text-xs
              font-medium
              uppercase
              tracking-wider
              text-medical-blue
            "
                    >
                      Step {activeStep + 1}
                    </div>

                    <h4
                      className="
              font-display
              text-lg
              font-bold
              text-txt-primary
            "
                    >
                      {STEPS[activeStep].title}
                    </h4>

                    <p
                      className="
              mt-2
              text-sm
              leading-6
              text-txt-secondary
            "
                    >
                      {STEPS[activeStep].desc}
                    </p>
                  </div>
                </div>
              </div>

              {/* STEP NAVIGATION DOTS */}

              <div className="relative mt-5 flex items-center justify-center gap-2">
                {STEPS.map((step, index) => (
                  <button
                    key={step.title}
                    type="button"
                    onClick={() => setActiveStep(index)}
                    aria-label={`Open step ${index + 1}`}
                    className={`
            h-2
            rounded-full
            transition-all
            duration-300

            ${
              activeStep === index
                ? "w-8 bg-medical-blue"
                : "w-2 bg-slate-200 hover:bg-slate-300"
            }
          `}
                  />
                ))}
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
