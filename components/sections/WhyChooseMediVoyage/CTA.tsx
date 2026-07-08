'use client'

import Link from 'next/link'
import { ArrowRight, MessageCircle } from 'lucide-react'

import { ScrollAnimation } from '@/components/animations/ScrollAnimation'

export function WhyChooseCTA() {
  return (
    <ScrollAnimation delay={0.25}>
      <section
        className="
          relative
          overflow-hidden
          rounded-[32px]
          bg-gradient-to-r
          from-medical-blue
          via-sky-600
          to-medical-green
          p-8
          text-white

          lg:p-12
        "
      >
        {/* Background Glow */}

        <div className="absolute -top-32 -right-32 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

        <div
          className="
            relative
            flex
            flex-col
            items-center
            justify-between
            gap-8

            lg:flex-row
          "
        >
          <div className="max-w-2xl text-center lg:text-left">
            <span
              className="
                inline-flex
                rounded-full
                bg-white/15
                px-4
                py-2
                text-sm
                font-semibold
              "
            >
              Free Consultation
            </span>

            <h2
              className="
                mt-5
                font-display
                text-3xl
                font-bold
                leading-tight

                lg:text-5xl
              "
            >
              Ready to Start Your
              <br />
              Medical Journey?
            </h2>

            <p
              className="
                mt-5
                text-white/90
                leading-7
                text-base
              "
            >
              Our medical travel experts are available 24×7 to help
              you choose the right hospital, estimate treatment costs,
              arrange travel, and coordinate your complete care.
            </p>
          </div>

          <div
            className="
              flex
              flex-col
              gap-4

              sm:flex-row
            "
          >
            <Link
              href="/contact"
              className="
                inline-flex
                items-center
                justify-center
                gap-3

                rounded-full
                bg-white/10
                px-8
                py-4

                font-semibold
                text-medical-blue

                shadow-xl

                transition-all
                duration-300

                hover:-translate-y-1
                hover:scale-[1.03]
              "
            >
              Book Free Consultation

              <ArrowRight className="h-5 w-5" />
            </Link>

            <Link
              href="/contact"
              className="
                inline-flex
                items-center
                justify-center
                gap-3

                rounded-full

                border
                border-white/40

                bg-white/10

                px-8
                py-4

                font-semibold
                text-white

                backdrop-blur

                transition-all
                duration-300

                hover:bg-white/20
              "
            >
              <MessageCircle className="h-5 w-5" />

              WhatsApp Us
            </Link>
          </div>
        </div>
      </section>
    </ScrollAnimation>
  )
}