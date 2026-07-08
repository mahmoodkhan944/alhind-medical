"use client";

import Link from "next/link";
import {
  ArrowRight,
  Heart,
  Brain,
  Smile,
  Bone,
  Eye,
  Baby,
  Sparkles
} from "lucide-react";

import { Building2, Globe2, HeartHandshake } from "lucide-react";

import { ScrollAnimation } from "../animations/ScrollAnimation";
import { TiltCard } from "../animations/TiltCard";

const TREATMENTS = [
  {
    icon: Heart,
    badge: "Most Popular",
    name: "Cardiac Surgery",
    color: "#2563EB",
    desc: "Advanced cardiac procedures with experienced specialists and modern technology" +
      "."
  }, {
    icon: Brain,
    badge: "Advanced",
    name: "Neurosurgery",
    color: "#0F766E",
    desc: "Specialized treatment for brain, spine and complex neurological conditions."
  }, {
    icon: Smile,
    badge: "Best Choice",
    name: "Cosmetic Surgery",
    color: "#0891B2",
    desc: "Modern aesthetic procedures delivered by experienced cosmetic specialists."
  }, {
    icon: Bone,
    badge: "Minimally Invasive",
    name: "Orthopedics",
    color: "#059669",
    desc: "Advanced joint replacement, spine care, rehabilitation and sports medicine."
  }, {
    icon: Eye,
    badge: "High Success",
    name: "Eye Surgery",
    color: "#2563EB",
    desc: "Advanced vision correction and eye treatments with leading specialists."
  }, {
    icon: Baby,
    badge: "Recommended",
    name: "Fertility Care",
    color: "#0F766E",
    desc: "Personalized fertility treatments with compassionate and experienced care."
  }
];

export function TreatmentsSection() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-gradient-to-b
        from-slate-50
        via-white
        to-blue-50/30
        py-10
        sm:py-12
        lg:py-16
      ">
      {/* BACKGROUND */}

      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute
            -left-64
            top-20
            h-[500px]
            w-[500px]
            rounded-full
            bg-medical-blue/[0.05]
            blur-[130px]
          "/>

        <div
          className="
            absolute
            -right-64
            bottom-0
            h-[500px]
            w-[500px]
            rounded-full
            bg-medical-green/[0.05]
            blur-[130px]
          "/>
      </div>

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-7xl
          px-5
          sm:px-8
          lg:px-10
          xl:px-6
        ">
        {/* SECTION HEADER */}

        <ScrollAnimation
          className="mx-auto mb-8 max-w-3xl text-center sm:mb-10 lg:mb-12">
          <div
            className="
              mb-4
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-medical-blue/15
              bg-medical-blue/5
              px-4
              py-2
            ">
            <Sparkles className="h-4 w-4 text-medical-blue" />

            <span
              className="
                text-xs
                font-semibold
                uppercase
                tracking-[0.12em]
                text-medical-blue
                sm:text-sm
              ">
              Medical Specialties
            </span>
          </div>

          <h2
            className="
            font-display
            text-3xl
            font-bold
            leading-tight
            tracking-[-0.04em]
            text-txt-primary
            sm:text-4xl
            lg:text-5xl
          ">
            Advanced Medical
            <span className="gradient-text">Treatments</span>
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-2xl
              text-sm
              leading-6
              text-txt-secondary
              sm:text-base
              sm:leading-7
            ">
            Choose from internationally accredited hospitals and experienced specialists
            across our global healthcare network.
          </p>
        </ScrollAnimation>

        <div className="
              mt-8
              mb-10
              flex
              flex-wrap
              justify-center
              gap-3
              lg:mb-14
              ">
          <div
            className="rounded-full
            border
            border-slate-200
            bg-white/90
            backdrop-blur
            px-4
            py-2
            text-sm
            font-medium
            shadow-md
            transition-all
            hover:-translate-y-1
            hover:border-medical-blue/20">
            <span className="inline-flex items-center gap-2">
              <Building2 className="h-4 w-4 text-medical-blue" />
              500+ Specialists
            </span>
          </div>

          <div
            className="rounded-full
            border
            border-slate-200
            bg-white/90
            backdrop-blur
            px-4
            py-2
            text-sm
            font-medium
            shadow-md
            transition-all
            hover:-translate-y-1
            hover:border-medical-blue/20">
            <span className="inline-flex items-center gap-2">
              <Globe2 className="h-4 w-4 text-medical-blue" />
              40+ Countries
            </span>
          </div>

          <div
            className="rounded-full
            border
            border-slate-200
            bg-white/90
            backdrop-blur
            px-4
            py-2
            text-sm
            font-medium
            shadow-md
            transition-all
            hover:-translate-y-1
          hover:border-medical-blue/20">
            <span className="inline-flex items-center gap-2">
              <HeartHandshake className="h-4 w-4 text-medical-blue" />
              250+ Procedures
            </span>
          </div>
        </div>

        {/* TREATMENT GRID */}

        <div
          className="
            grid
            grid-cols-1
            gap-3
            sm:gap-5
            sm:grid-cols-2
            lg:grid-cols-3
            lg:gap-6
          ">
          {
            TREATMENTS.map((treatment, index) => {
              const Icon = treatment.icon;

              return (
                <ScrollAnimation key={treatment.name} delay={index * 0.08}>
                  <TiltCard>
                    <Link
                      href={`/treatments?category=${encodeURIComponent(treatment.name.toLowerCase(),)}`}
                      className="block h-full">
                      <article
                        className="
                        group
                        relative
                        h-full
                        min-h-[220px]
                        overflow-hidden
                        rounded-[20px]
                        border
                        border-slate-200/80
                        bg-white
                        p-4
                        shadow-[0_8px_30px_rgba(11,37,69,0.05)]
                        transition-all
                        duration-500

                        hover:-translate-y-1
                        hover:scale-[1.02]
                        hover:border-medical-blue/20
                        hover:shadow-[0_20px_60px_rgba(11,37,69,0.10)]

                        sm:min-h-[240px]
                        sm:rounded-[24px]
                        sm:p-6

                        lg:min-h-[260px]
                        lg:rounded-[28px]
                        lg:p-7
                      ">
                        {/* HOVER BACKGROUND */}

                        <div
                          className="
                          absolute
                          inset-0
                          opacity-0
                          transition-opacity
                          duration-500
                          group-hover:opacity-[0.07]
                        "
                          style={{
                            background: `linear-gradient(135deg, ${treatment.color}, transparent 70%)`
                          }} /> {/* DECORATIVE CIRCLE */}

                        <div
                          className="absolute inset-0 opacity-[0.03]"
                          style={{
                            backgroundImage: `
      radial-gradient(circle at 25px 25px, ${treatment.color} 2px, transparent 2px)
    `,
                            backgroundSize: "30px 30px"
                          }} />

                        <div className="relative flex h-full flex-col">
                          {/* ICON */}

                          <div
                            className="
                            flex
                            h-11
                            w-11
                            items-center
                            justify-center
                            rounded-xl
                            shadow-lg
                            transition-all
                            duration-500

                            group-hover:-translate-y-2
                            group-hover:scale-110
                            group-hover:rotate-6

                            sm:h-14
                            sm:w-14
                            sm:rounded-2xl
                          "
                            style={{
                              background: `linear-gradient(135deg, ${treatment.color}, ${treatment.color}cc)`,
                              boxShadow: `0 16px 40px ${treatment.color}25`
                            }}>
                            <Icon strokeWidth={2.2} className="h-5 w-5 text-white sm:h-7 sm:w-7" />
                          </div>

                          <div
                            className="
                            mt-4
                            inline-flex
                            rounded-full
                            bg-medical-blue/5
                            px-3
                            py-1
                            text-[11px]
                            font-semibold
                            text-medical-blue
                            ">
                            <div
                              className="mt-4 inline-flex rounded-full px-3 py-1 text-[11px] font-semibold"
                              style={{
                                color: treatment.color,
                                backgroundColor: `${treatment.color}15`
                              }}>
                              {treatment.badge}
                            </div>
                          </div>

                          {/* CONTENT */}

                          <div className="mt-4 sm:mt-6">
                            <h3
                              className="
                              font-display
                              text-base
                              font-bold
                              leading-tight
                              tracking-[-0.02em]
                              text-txt-primary

                              sm:text-xl
                              lg:text-2xl
                            ">
                              {treatment.name}
                            </h3>

                            <p
                              className="
                              mt-2
                              line-clamp-2
                              text-xs
                              leading-5
                              text-txt-secondary

                              sm:mt-3
                              sm:text-sm
                              sm:leading-6

                              lg:text-[15px]
                            ">
                              {treatment.desc}
                            </p>
                          </div>

                          {/* BOTTOM */}

                          <div
                            className="
                            mt-auto
                            flex
                            items-center
                            justify-between
                            border-t
                            border-slate-200/70
                            pt-3

                            sm:pt-5
                          ">
                            <span
                              className="
                              text-xs
                              font-semibold
                              text-txt-primary

                              sm:text-sm
                            ">
                              Learn More
                            </span>

                            <span
                              className="
                              flex
                              h-8
                              w-8
                              items-center
                              justify-center
                              rounded-full
                              border
                              border-slate-200
                              bg-slate-50
                              text-txt-secondary
                              transition-all
                              duration-300

                              group-hover:translate-x-1
                              group-hover:bg-gradient-to-r
                              group-hover:from-medical-blue
                              group-hover:to-medical-green
                              group-hover:border-transparent
                              group-hover:text-white
                              group-hover:scale-110

                              sm:h-10
                              sm:w-10
                            ">
                              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                            </span>
                          </div>
                        </div>
                      </article>
                    </Link>
                  </TiltCard>
                </ScrollAnimation>
              );
            })
          }
        </div>

        {/* BOTTOM CTA */}

        <ScrollAnimation delay={0.3} className="mt-8 text-center sm:mt-10 lg:mt-12">
          <Link
            href="/treatments"
            className="
              group
              inline-flex
              min-h-12
              items-center
              justify-center
              gap-2
              rounded-full
              border
              border-slate-200
              bg-white
              px-6
              py-3
              text-sm
              font-semibold
              text-txt-primary
              shadow-sm
              transition-all
              duration-300

              hover:-translate-y-0.5
              hover:bg-gradient-to-r
              hover:from-medical-blue
              hover:to-medical-green
              hover:border-transparent
              hover:text-white
            ">
            Explore All Treatments
            <ArrowRight
              className="
                h-4
                w-4
                transition-transform
                duration-300
                group-hover:translate-x-2
              "/>
          </Link>
        </ScrollAnimation>
      </div>
    </section>
  );
}
