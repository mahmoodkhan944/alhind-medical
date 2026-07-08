'use client'

import { ScrollAnimation } from '@/components/animations/ScrollAnimation'

import { whyChooseFeatures } from './data'
import { FeatureCard } from './FeatureCard'
import { IllustrationPanel } from './IllustrationPanel'
import { WhyChooseCTA } from './CTA'

export function WhyChooseMediVoyage() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-gradient-to-b
        from-slate-50
        via-white
        to-medical-blue/5

        py-14
        sm:py-16
        lg:py-24
      "
    >
      {/* Background */}

      <div className="pointer-events-none absolute inset-0">

        <div
          className="
            absolute
            -left-56
            top-0
            h-[420px]
            w-[420px]
            rounded-full
            bg-medical-blue/10
            blur-[120px]
          "
        />

        <div
          className="
            absolute
            -right-56
            bottom-0
            h-[420px]
            w-[420px]
            rounded-full
            bg-medical-green/10
            blur-[120px]
          "
        />

      </div>

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
          px-5
          sm:px-8
          lg:px-10
        "
      >
        {/* Heading */}

        <ScrollAnimation className="mx-auto max-w-3xl text-center">

          <span
            className="
              inline-flex
              items-center
              rounded-full
              border
              border-medical-blue/15
              bg-medical-blue/5
              px-4
              py-2

              text-xs
              font-semibold
              uppercase
              tracking-[0.18em]
              text-medical-blue
            "
          >
            Why Choose Al-Hind
          </span>

          <h2
            className="
              mt-6

              font-display
              text-4xl
              font-bold
              leading-tight
              tracking-[-0.04em]

              text-slate-900

              lg:text-6xl
            "
          >
            Healthcare Beyond Borders.
            <br />

            <span className="gradient-text">
              Care Beyond Expectations.
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-2xl

              text-base
              leading-8
              text-slate-600
            "
          >
            Everything you need for a safe, comfortable and
            stress-free medical journey — from consultation
            to recovery.
          </p>

        </ScrollAnimation>

        {/* Main Content */}

        {/* MAIN CONTENT */}

<div className="mt-16">

  {/* TOP AREA */}

  <div
    className="
      grid
      gap-8
      lg:grid-cols-[0.9fr_1.1fr]
      lg:items-stretch
    "
  >
    {/* FIRST 4 FEATURE CARDS */}

    <div
      className="
        grid
        gap-5
        sm:grid-cols-2
      "
    >
      {whyChooseFeatures.slice(0, 4).map((feature, index) => (
        <FeatureCard
          key={feature.id}
          feature={feature}
          delay={index * 0.08}
        />
      ))}
    </div>

    {/* ILLUSTRATION */}

    <div className="min-w-0">
      <IllustrationPanel />
    </div>

  </div>

  {/* REMAINING 4 FEATURE CARDS */}

  <div
    className="
      mt-8
      grid
      gap-5
      sm:grid-cols-2
      lg:grid-cols-4
    "
  >
    {whyChooseFeatures.slice(4).map((feature, index) => (
      <FeatureCard
        key={feature.id}
        feature={feature}
        delay={(index + 4) * 0.08}
      />
    ))}
  </div>

</div>

        {/* CTA */}

        <div className="mt-20">
          <WhyChooseCTA />
        </div>

      </div>
    </section>
  )
}