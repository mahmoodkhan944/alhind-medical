'use client'

import { ArrowRight } from 'lucide-react'

import { TiltCard } from '@/components/animations/TiltCard'
import { ScrollAnimation } from '@/components/animations/ScrollAnimation'

import { WhyChooseFeature } from './types'

interface FeatureCardProps {
  feature: WhyChooseFeature
  delay?: number
}

const colorStyles = {
  blue: {
    gradient: 'from-blue-600 to-cyan-500',
    glow: 'rgba(37,99,235,.22)',
    border: 'group-hover:border-blue-300/40',
    bg: 'rgba(37,99,235,.08)',
  },
  green: {
    gradient: 'from-emerald-600 to-green-500',
    glow: 'rgba(5,150,105,.22)',
    border: 'group-hover:border-emerald-300/40',
    bg: 'rgba(5,150,105,.08)',
  },
  cyan: {
    gradient: 'from-cyan-600 to-sky-500',
    glow: 'rgba(8,145,178,.22)',
    border: 'group-hover:border-cyan-300/40',
    bg: 'rgba(8,145,178,.08)',
  },
  emerald: {
    gradient: 'from-green-600 to-emerald-500',
    glow: 'rgba(22,163,74,.22)',
    border: 'group-hover:border-green-300/40',
    bg: 'rgba(22,163,74,.08)',
  },
}

export function FeatureCard({
  feature,
  delay = 0,
}: FeatureCardProps) {
  const Icon = feature.icon

  const theme = colorStyles[feature.color]

  return (
    <ScrollAnimation delay={delay}>
      <TiltCard>

        <article
          className={`
            group
            relative
            overflow-hidden
            rounded-[28px]
            border
            border-slate-200/80
            bg-white/90
            backdrop-blur-xl
            p-6

            shadow-[0_12px_35px_rgba(15,23,42,.06)]

            transition-all
            duration-500

            hover:-translate-y-2
            hover:scale-[1.02]
            hover:shadow-[0_24px_70px_rgba(15,23,42,.10)]

            ${theme.border}
          `}
        >

          {/* Hover Glow */}

          <div
            className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            style={{
              background: `radial-gradient(circle at top right, ${theme.glow}, transparent 65%)`,
            }}
          />

          {/* Pattern */}

          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                'radial-gradient(circle at 24px 24px,#64748b 2px,transparent 2px)',
              backgroundSize: '34px 34px',
            }}
          />

          {/* Icon */}

          <div
            className={`
              relative

              flex
              h-14
              w-14
              items-center
              justify-center

              rounded-2xl

              bg-gradient-to-br
              ${theme.gradient}

              transition-all
              duration-500

              group-hover:rotate-6
              group-hover:scale-110
              group-hover:-translate-y-1
            `}
          >

            <Icon
              strokeWidth={2.2}
              className="h-7 w-7 text-white"
            />

          </div>

          {/* Content */}

          <div className="relative mt-6">

            <h3
              className="
                font-display
                text-xl
                font-bold
                text-slate-900
              "
            >
              {feature.title}
            </h3>

            <p
              className="
                mt-3
                text-sm
                leading-7
                text-slate-600
              "
            >
              {feature.description}
            </p>

          </div>

          {/* Footer */}

          <div
            className="
              relative
              mt-8

              flex
              items-center
              justify-between

              border-t
              border-slate-200/70

              pt-4
            "
          >

            <span
              className="
                text-sm
                font-semibold
                text-medical-blue
              "
            >
              Learn More
            </span>

            <span
              className="
                flex
                h-10
                w-10
                items-center
                justify-center

                rounded-full

                border
                border-slate-200

                bg-white

                transition-all
                duration-300

                group-hover:bg-medical-blue
                group-hover:border-medical-blue
                group-hover:translate-x-1
              "
            >

              <ArrowRight
                className="
                  h-5
                  w-5
                  text-slate-700
                  group-hover:text-white
                "
              />

            </span>

          </div>

        </article>

      </TiltCard>
    </ScrollAnimation>
  )
}