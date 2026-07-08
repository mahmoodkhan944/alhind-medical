'use client'

import { ScrollAnimation } from '../../animations/ScrollAnimation'

import { trustBadges, journeyPoints } from './data'
import MedicalTravelIllustration from '@/components/sections/WhyChooseMediVoyage/MedicalTravelIllustration'

const badgeColors = {
  blue: 'from-blue-500 to-cyan-500',
  green: 'from-emerald-500 to-green-500',
  cyan: 'from-cyan-500 to-sky-500',
}

export function IllustrationPanel() {
  return (
    <ScrollAnimation delay={0.15}
    className="w-full min-w-0 self-start lg:sticky lg:top-28">
      <div
        className="
          relative
          overflow-hidden
          rounded-[32px]
          border
          border-slate-200/80
          bg-white/90
          p-5
          shadow-[0_30px_80px_rgba(15,23,42,.08)]
          backdrop-blur-xl
          sm:p-8
        "
      >
        {/* BACKGROUND GLOW */}

        <div
          className="
            pointer-events-none
            absolute
            -right-24
            -top-24
            h-72
            w-72
            rounded-full
            bg-medical-blue/10
            blur-[120px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -left-20
            bottom-0
            h-60
            w-60
            rounded-full
            bg-medical-green/10
            blur-[120px]
          "
        />

        {/* MEDICAL TRAVEL ILLUSTRATION */}

        <div className="relative">
          <MedicalTravelIllustration />
        </div>

        {/* TRUST BADGES */}

        <div
          className="
            relative
            mt-4
            grid
            grid-cols-3
            gap-2
            sm:gap-4
          "
        >
          {trustBadges.map((badge) => (
            <div
              key={badge.id}
              className="
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-3
                text-center
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-lg
                sm:p-4
              "
            >
              <div
                className={`
                  mx-auto
                  mb-3
                  h-2
                  w-10
                  rounded-full
                  bg-gradient-to-r
                  sm:w-12
                  ${badgeColors[badge.color]}
                `}
              />

              <div
                className="
                  text-lg
                  font-bold
                  text-slate-900
                  sm:text-2xl
                "
              >
                {badge.value}
              </div>

              <div
                className="
                  mt-1
                  text-[10px]
                  text-slate-500
                  sm:text-xs
                "
              >
                {badge.title}
              </div>
            </div>
          ))}
        </div>

        {/* JOURNEY POINTS */}

        <div className="relative mt-8 space-y-4">
          {journeyPoints.map((item) => {
            const Icon = item.icon

            return (
              <div
                key={item.id}
                className="
                  flex
                  items-center
                  gap-3
                "
              >
                <div
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-medical-green/10
                  "
                >
                  <Icon
                    className="
                      h-5
                      w-5
                      text-medical-green
                    "
                  />
                </div>

                <span
                  className="
                    text-sm
                    font-medium
                    text-slate-700
                  "
                >
                  {item.title}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </ScrollAnimation>
  )
}