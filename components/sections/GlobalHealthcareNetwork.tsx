'use client'

import { MapPin, ArrowRight, ShieldCheck } from 'lucide-react'

const COUNTRIES = [
  {
    name: 'India',
    code: 'IN',
    flag: '🇮🇳',
    count: '30+',
    description:
      'Internationally accredited hospitals offering advanced treatments and experienced medical specialists.',
    hospitals: [
      {
        name: 'Medanta - The Medicity',
        location: 'Gurugram',
        image: '/images/hospitals/medanta.jpg',
      },
      {
        name: 'Apollo Hospitals',
        location: 'Chennai',
        image: '/images/hospitals/apollo.jpg',
      },
      {
        name: 'Fortis Healthcare',
        location: 'New Delhi',
        image: '/images/hospitals/fortis.jpg',
      },
      {
        name: 'Max Healthcare',
        location: 'New Delhi',
        image: '/images/hospitals/max.jpg',
      },
    ],
  },
  {
    name: 'Turkey',
    code: 'TR',
    flag: '🇹🇷',
    count: '20+',
    description:
      'Premium medical facilities providing advanced treatments and world-class international patient care.',
    hospitals: [
      {
        name: 'Memorial Hospital',
        location: 'Istanbul',
        image: '/images/hospitals/memorial.jpg',
      },
      {
        name: 'Acibadem Hospital',
        location: 'Istanbul',
        image: '/images/hospitals/acibadem.jpg',
      },
      {
        name: 'Medical Park',
        location: 'Istanbul',
        image: '/images/hospitals/medical-park.jpg',
      },
      {
        name: 'Liv Hospital',
        location: 'Istanbul',
        image: '/images/hospitals/liv.jpg',
      },
    ],
  },
]

export function GlobalHealthcareNetwork() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-white
        py-10
        sm:py-12
        lg:py-16
      "
    >
      {/* BACKGROUND */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_50%_0%,rgba(14,165,233,0.08),transparent_40%)]
        "
      />

      <div
        className="
          relative
          mx-auto
          max-w-7xl
          px-5
          sm:px-8
          lg:px-10
          xl:px-6
        "
      >
        {/* HEADING */}

        <div className="mx-auto mb-8 max-w-3xl text-center lg:mb-10">
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
            <ShieldCheck className="h-4 w-4" />

            Trusted Hospital Network
          </div>

          <h2
            className="
              font-display
              text-3xl
              font-bold
              tracking-[-0.03em]
              text-txt-primary
              sm:text-4xl
              lg:text-5xl
            "
          >
            Our Global Healthcare{' '}
            <span className="gradient-text">Network</span>
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
            Connect with trusted hospitals and experienced medical specialists
            across leading healthcare destinations.
          </p>
        </div>

        {/* COUNTRY GRID */}

        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          {COUNTRIES.map((country) => (
            <div
              key={country.name}
              className="
                overflow-hidden
                rounded-[24px]
                border
                border-medical-blue/10
                bg-gradient-to-br
                from-slate-50
                via-white
                to-medical-ice
                p-4
                shadow-[0_20px_60px_rgba(15,56,110,0.08)]
                sm:p-5
              "
            >
              {/* COUNTRY HEADER */}

              <div className="mb-6 flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-2xl
                      bg-white
                      text-2xl
                      shadow-sm
                    "
                  >
                    {country.flag}
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <span
                        className="
                          text-sm
                          font-semibold
                          text-txt-secondary
                        "
                      >
                        {country.code}
                      </span>

                      <h3
                        className="
                          font-display
                          text-xl
                          font-bold
                          text-txt-primary
                        "
                      >
                        {country.name}
                      </h3>
                    </div>

                    <div
                      className="
                        mt-1
                        text-xs
                        text-txt-secondary
                      "
                    >
                      International Healthcare Destination
                    </div>
                  </div>
                </div>

                <div
                  className="
                    rounded-xl
                    bg-cta-gradient
                    px-3
                    py-2
                    text-sm
                    font-bold
                    text-white
                    shadow-lg
                    shadow-medical-blue/20
                  "
                >
                  {country.count}
                </div>
              </div>

              {/* HOSPITAL GRID */}

              <div className="grid grid-cols-2 gap-2 sm:gap-3">
  {country.hospitals.map((hospital, index) => (
    <button
      key={hospital.name}
      type="button"
      className={`
        group
        overflow-hidden
        rounded-2xl
        border
        border-slate-100
        bg-white
        text-left
        transition-all
        duration-300

        hover:-translate-y-1
        hover:border-medical-blue/20
        hover:shadow-xl
        hover:shadow-medical-blue/10

        ${index >= 2 ? "hidden sm:block" : ""}
      `}
    >
      {/* IMAGE */}

      <div
        className="
          relative
          h-[100px]
          aspect-[4/3]
          overflow-hidden
          bg-slate-100
          sm:h-[140px]
          lg:h-[165px]
        "
      >
        <img
          src={hospital.image}
          alt={hospital.name}
          className="
            h-full
            w-full
            object-cover
            transition-transform
            duration-500
            group-hover:scale-105
          "
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 to-transparent" />
      </div>

      <div className="p-3 sm:p-4">
        <h4 className="line-clamp-1 font-display text-sm font-bold text-txt-primary sm:text-base">
          {hospital.name}
        </h4>

        <div className="mt-2 flex items-center gap-1.5 text-[11px] text-txt-secondary sm:text-xs">
          <MapPin className="h-3.5 w-3.5 text-medical-blue" />
          {hospital.location}
        </div>
      </div>
    </button>
  ))}
</div>

              {/* DESCRIPTION */}

              <p
                className="
                  mt-5
                  text-sm
                  leading-6
                  text-txt-secondary
                "
              >
                {country.description}
              </p>

              {/* BUTTON */}

              <button
                type="button"
                className="
                  group
                  mt-5
                  flex
                  w-full
                  items-center
                  justify-between
                  rounded-xl
                  border
                  border-medical-blue/10
                  bg-white
                  px-4
                  py-3
                  text-sm
                  font-semibold
                  text-txt-primary
                  transition-all

                  hover:border-medical-blue/20
                  hover:text-medical-blue
                  hover:shadow-md
                "
              >
                View Hospitals in {country.name}

                <ArrowRight
                  className="
                    h-4
                    w-4
                    transition-transform
                    group-hover:translate-x-1
                  "
                />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}