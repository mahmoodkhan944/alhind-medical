"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

import {
  ArrowRight,
  CheckCircle2,
  Globe2,
  HeartPulse,
  ShieldCheck,
  Star,
  Users,
} from "lucide-react";

import {
  getCountries,
  getCountryCallingCode,
  type Country,
} from "react-phone-number-input";

import en from "react-phone-number-input/locale/en.json";

/* =========================================================
   TREATMENTS
========================================================= */

const treatments = [
  "Cardiac Surgery",
  "Neurosurgery",
  "Cosmetic Surgery",
  "Orthopedics",
  "Eye Surgery",
  "Fertility Treatment",
  "Cancer Treatment",
  "Organ Transplant",
  "Dental Treatment",
  "Bariatric Surgery",
  "Spine Surgery",
  "Other Treatment",
];

/* =========================================================
   HERO SECTION
========================================================= */

export function HeroSection() {
  /* =======================================================
     STATE
  ======================================================= */

  const [country, setCountry] = useState<Country>("IN");
  const [phone, setPhone] = useState("");

  /* =======================================================
     COUNTRY LIST
  ======================================================= */

  const countries = useMemo(() => {
    return getCountries()
      .map((countryCode) => ({
        code: countryCode,
        name: en[countryCode] || countryCode,
        callingCode: getCountryCallingCode(countryCode),
      }))
      .sort((a, b) => a.name.localeCompare(b.name));
  }, []);

  /* =======================================================
     FORM SUBMIT
  ======================================================= */

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    /*
      API integration baad me yahan hogi.
      Abhi submit par page reload nahi hoga.
    */
  };

  return (
    <section
      className="
        relative
        isolate
        overflow-hidden
        bg-slate-950
      "
    >
      {/* ===================================================
          BACKGROUND IMAGE
      =================================================== */}

      <div
        className="
          absolute
          inset-0
          -z-30
          bg-cover
          bg-[position:58%_center]
          bg-no-repeat

          sm:bg-center
          lg:bg-center
        "
        style={{
          backgroundImage: "url('/images/hero/medical-hero.jpeg')",
        }}
      />

      {/* ===================================================
          MAIN DARK OVERLAY
      =================================================== */}

      <div
        className="
          absolute
          inset-0
          -z-20

          bg-gradient-to-r

          from-slate-950/95
          via-slate-950/75
          to-slate-900/35

          lg:from-slate-950/90
          lg:via-slate-950/60
          lg:to-slate-900/25
        "
      />

      {/* ===================================================
          MOBILE OVERLAY
      =================================================== */}

      <div
        className="
          absolute
          inset-0
          -z-20
          bg-slate-950/20

          lg:hidden
        "
      />

      {/* ===================================================
          BOTTOM OVERLAY
      =================================================== */}

      <div
        className="
          absolute
          inset-0
          -z-10

          bg-gradient-to-t

          from-slate-950/75
          via-transparent
          to-slate-950/20
        "
      />

      {/* ===================================================
          SUBTLE BLUE / GREEN GLOW
      =================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-60
          -top-60
          -z-10

          h-[600px]
          w-[600px]

          rounded-full

          bg-blue-500/20

          blur-[160px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-60
          -right-60
          -z-10

          h-[650px]
          w-[650px]

          rounded-full

          bg-emerald-400/20

          blur-[160px]
        "
      />

      {/* ===================================================
          HERO CONTAINER
      =================================================== */}

      <div
        className="
          relative
          z-10

          mx-auto

          grid

          w-full
          max-w-7xl

          gap-10

          px-5
          py-10

          sm:px-8
          sm:py-14

          lg:min-h-[760px]
          lg:grid-cols-[1.05fr_0.95fr]
          lg:items-center
          lg:gap-14
          lg:px-10
          lg:py-16

          xl:min-h-[800px]
        "
      >
        {/* =================================================
            LEFT HERO CONTENT
        ================================================= */}

        <div className="max-w-[680px]">
          {/* BADGE */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="
              mb-5

              inline-flex
              items-center
              gap-2

              rounded-full

              border
              border-white/20

              bg-white/10

              px-4
              py-2

              shadow-lg

              backdrop-blur-xl
            "
          >
            <ShieldCheck
              className="
                h-4
                w-4

                text-cyan-300
              "
            />

            <span
              className="
                text-[10px]
                font-bold

                uppercase

                tracking-[0.14em]

                text-white

                sm:text-xs
              "
            >
              Trusted Medical Travel Platform
            </span>
          </motion.div>

          {/* =================================================
              MAIN HEADING
          ================================================= */}

          <motion.h1
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.1,
            }}
            className="
              font-display

              text-[clamp(2.6rem,5.5vw,4.8rem)]

              font-bold

              leading-[1.03]

              tracking-[-0.05em]

              text-white
            "
          >
            World-Class Medical Care
            <span
              className="
                mt-2
                block

                bg-gradient-to-r

                from-blue-400
                via-cyan-300
                to-emerald-300

                bg-clip-text

                text-transparent
              "
            >
              Beyond Borders
            </span>
          </motion.h1>

          {/* =================================================
              DESCRIPTION
          ================================================= */}

          <motion.p
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
            className="
              mt-6

              max-w-xl

              text-sm

              leading-7

              text-white/80

              sm:text-base
              sm:leading-8

              lg:text-lg
            "
          >
            Connect with trusted hospitals and experienced medical specialists
            in India and Turkey. From treatment planning to travel and recovery,
            Al-Hind supports your complete healthcare journey.
          </motion.p>

          {/* =================================================
              TRUST POINTS
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.25,
            }}
            className="
              mt-6

              grid

              gap-3

              sm:grid-cols-2
            "
          >
            <HeroTrustPoint text="Verified Partner Hospitals" />

            <HeroTrustPoint text="Experienced Medical Specialists" />

            <HeroTrustPoint text="Transparent Treatment Guidance" />

            <HeroTrustPoint text="End-to-End Patient Support" />
          </motion.div>

          {/* =================================================
              CTA BUTTONS
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.3,
            }}
            className="
              mt-8

              flex

              flex-col

              gap-3

              sm:flex-row
              sm:flex-wrap
            "
          >
            <Link
              href="/ai-match"
              className="
                group

                inline-flex

                min-h-13

                items-center
                justify-center

                gap-2

                rounded-full

                bg-gradient-to-r

                from-blue-600
                via-cyan-500
                to-emerald-500

                px-7
                py-3.5

                text-sm
                font-semibold

                text-white

                shadow-[0_15px_40px_rgba(37,99,235,0.35)]

                transition

                duration-300

                hover:-translate-y-1

                hover:shadow-[0_20px_50px_rgba(37,99,235,0.45)]
              "
            >
              Get Free Medical Opinion
              <ArrowRight
                className="
                  h-4
                  w-4

                  transition-transform

                  duration-300

                  group-hover:translate-x-1
                "
              />
            </Link>

            <Link
              href="/hospitals"
              className="
                inline-flex

                min-h-13

                items-center
                justify-center

                gap-2

                rounded-full

                border
                border-white/25

                bg-white/10

                px-7
                py-3.5

                text-sm
                font-semibold

                text-white

                shadow-lg

                backdrop-blur-xl

                transition

                duration-300

                hover:-translate-y-1

                hover:bg-white/20
              "
            >
              Explore Hospitals
              <Globe2 className="h-4 w-4" />
            </Link>
          </motion.div>

          {/* =================================================
              PATIENT TRUST AREA
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.4,
            }}
            className="
              mt-8

              flex

              flex-col

              gap-5

              border-t
              border-white/15

              pt-6

              sm:flex-row
              sm:items-center
              sm:gap-10
            "
          >
            {/* PATIENT COUNT */}

            <div className="flex items-center">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((item) => (
                  <div
                    key={item}
                    className="
                      flex

                      h-10
                      w-10

                      items-center
                      justify-center

                      rounded-full

                      border-[3px]
                      border-slate-900/70

                      bg-white/15

                      shadow-lg

                      backdrop-blur-xl
                    "
                  >
                    <Users
                      className="
                        h-4
                        w-4

                        text-white
                      "
                    />
                  </div>
                ))}
              </div>

              <div className="ml-4">
                <div
                  className="
                    font-display

                    text-lg
                    font-bold

                    text-white
                  "
                >
                  15,000+
                </div>

                <div
                  className="
                    text-xs

                    text-white/60
                  "
                >
                  Patients Supported
                </div>
              </div>
            </div>

            {/* PATIENT RATING */}

            <div>
              <div
                className="
                  flex
                  items-center
                  gap-1
                "
              >
                {[1, 2, 3, 4, 5].map((item) => (
                  <Star
                    key={item}
                    className="
                      h-4
                      w-4

                      fill-amber-400

                      text-amber-400
                    "
                  />
                ))}

                <span
                  className="
                    ml-2

                    font-bold

                    text-white
                  "
                >
                  4.9
                </span>
              </div>

              <div
                className="
                  mt-1

                  text-xs

                  text-white/60
                "
              >
                Trusted Patient Experience
              </div>
            </div>
          </motion.div>
        </div>

        {/* =================================================
            RIGHT GLASS FORM
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            x: 40,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.9,
            delay: 0.2,
          }}
          className="
            relative

            mx-auto

            w-full

            max-w-[520px]

            lg:mx-0
            lg:ml-auto
          "
        >
          {/* FORM GLOW */}

          <div
            className="
              pointer-events-none

              absolute

              -inset-8

              rounded-[50px]

              bg-gradient-to-br

              from-blue-500/25
              via-cyan-400/10
              to-emerald-400/25

              blur-3xl
            "
          />

          {/* =================================================
              GLASS FORM CARD
          ================================================= */}

          <div
            className="
              relative

              overflow-hidden

              rounded-[28px]

              border
              border-white/30

              bg-white/[0.78]

              p-5

              shadow-[0_35px_100px_rgba(0,0,0,0.35)]

              backdrop-blur-2xl

              sm:p-7

              lg:p-8
            "
          >
            {/* TOP GLASS HIGHLIGHT */}

            <div
              className="
                pointer-events-none

                absolute

                inset-x-0
                top-0

                h-px

                bg-gradient-to-r

                from-transparent
                via-white
                to-transparent
              "
            />

            {/* FORM HEADER */}

            <div className="text-center">
              <div
                className="
                  mx-auto

                  flex

                  h-13
                  w-13

                  items-center
                  justify-center

                  rounded-2xl

                  bg-gradient-to-br

                  from-blue-600
                  via-cyan-500
                  to-emerald-500

                  shadow-lg
                "
              >
                <HeartPulse
                  className="
                    h-6
                    w-6

                    text-white
                  "
                />
              </div>

              <h2
                className="
                  mt-4

                  font-display

                  text-2xl

                  font-bold

                  tracking-tight

                  text-slate-900

                  sm:text-[28px]
                "
              >
                Get Free Medical Opinion
              </h2>

              <p
                className="
                  mx-auto

                  mt-2

                  max-w-sm

                  text-sm

                  leading-6

                  text-slate-600
                "
              >
                Share your treatment needs and our healthcare coordinators will
                guide you through the next steps.
              </p>
            </div>

            {/* =================================================
                FORM START
            ================================================= */}

            <form
              onSubmit={handleSubmit}
              className="
                mt-6

                space-y-4
              "
            >
              {/* PATIENT NAME */}

              <div>
                <label
                  htmlFor="hero-name"
                  className="
                    mb-2

                    block

                    text-sm
                    font-semibold

                    text-slate-800
                  "
                >
                  Patient Name
                </label>

                <input
                  id="hero-name"
                  name="patientName"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Enter patient name"
                  className="
                    h-12

                    w-full

                    rounded-xl

                    border
                    border-white/60

                    bg-white/60

                    px-4

                    text-sm

                    text-slate-900

                    shadow-sm

                    outline-none

                    backdrop-blur-md

                    transition

                    placeholder:text-slate-400

                    focus:border-blue-400/70

                    focus:bg-white/90

                    focus:ring-4

                    focus:ring-blue-500/10
                  "
                />
              </div>

              {/* =================================================
                  COUNTRY + TREATMENT GRID
              ================================================= */}

              <div
                className="
                  grid

                  gap-4

                  sm:grid-cols-2
                "
              >
                {/* COUNTRY */}

                <div>
                  <label
                    htmlFor="hero-country"
                    className="
                      mb-2

                      block

                      text-sm
                      font-semibold

                      text-slate-800
                    "
                  >
                    Country
                  </label>

                  <select
                    id="hero-country"
                    name="country"
                    value={country}
                    onChange={(event) =>
                      setCountry(event.target.value as Country)
                    }
                    className="
                      h-12

                      w-full

                      rounded-xl

                      border
                      border-white/60

                      bg-white/60

                      px-3

                      text-sm

                      text-slate-900

                      shadow-sm

                      outline-none

                      backdrop-blur-md

                      transition

                      focus:border-blue-400/70

                      focus:bg-white/90

                      focus:ring-4

                      focus:ring-blue-500/10
                    "
                  >
                    {countries.map((item) => (
                      <option key={item.code} value={item.code}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                </div>
                {/* TREATMENT */}

                <div>
                  <label
                    htmlFor="hero-treatment"
                    className="
                      mb-2
                      block
                      text-sm
                      font-semibold
                      text-slate-800
                    "
                  >
                    Treatment
                  </label>

                  <select
                    id="hero-treatment"
                    name="treatment"
                    defaultValue=""
                    required
                    className="
                      h-12
                      w-full
                      rounded-xl
                      border
                      border-white/60
                      bg-white/60
                      px-3
                      text-sm
                      text-slate-900
                      shadow-sm
                      outline-none
                      backdrop-blur-md
                      transition

                      focus:border-blue-400/70
                      focus:bg-white/90
                      focus:ring-4
                      focus:ring-blue-500/10
                    "
                  >
                    <option value="" disabled>
                      Select Treatment
                    </option>

                    {treatments.map((treatment) => (
                      <option key={treatment} value={treatment}>
                        {treatment}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* =================================================
                  PHONE NUMBER
              ================================================= */}

              <div>
                <label
                  htmlFor="hero-phone"
                  className="
                    mb-2
                    block
                    text-sm
                    font-semibold
                    text-slate-800
                  "
                >
                  Phone Number
                </label>

                <div
                  className="
                    flex
                    h-12
                    overflow-hidden
                    rounded-xl
                    border
                    border-white/60
                    bg-white/60
                    shadow-sm
                    backdrop-blur-md
                    transition

                    focus-within:border-blue-400/70
                    focus-within:bg-white/90
                    focus-within:ring-4
                    focus-within:ring-blue-500/10
                  "
                >
                  {/* AUTO COUNTRY CODE */}

                  <div
                    className="
                      flex
                      shrink-0
                      items-center
                      justify-center
                      border-r
                      border-slate-200/80
                      px-4
                      text-sm
                      font-semibold
                      text-slate-800
                    "
                  >
                    +{getCountryCallingCode(country)}
                  </div>

                  <input
                    id="hero-phone"
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    inputMode="tel"
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                    placeholder="Enter phone number"
                    className="
                      h-full
                      min-w-0
                      flex-1
                      bg-transparent
                      px-4
                      text-sm
                      text-slate-900
                      outline-none

                      placeholder:text-slate-400
                    "
                  />
                </div>
              </div>

              {/* =================================================
                  MEDICAL CONCERN
              ================================================= */}

              <div>
                <label
                  htmlFor="hero-message"
                  className="
                    mb-2
                    block
                    text-sm
                    font-semibold
                    text-slate-800
                  "
                >
                  Medical Concern
                </label>

                <textarea
                  id="hero-message"
                  name="medicalConcern"
                  rows={3}
                  required
                  placeholder="Briefly describe the patient's medical condition"
                  className="
                    w-full
                    resize-none
                    rounded-xl
                    border
                    border-white/60
                    bg-white/60
                    px-4
                    py-3
                    text-sm
                    leading-6
                    text-slate-900
                    shadow-sm
                    outline-none
                    backdrop-blur-md
                    transition

                    placeholder:text-slate-400

                    focus:border-blue-400/70
                    focus:bg-white/90
                    focus:ring-4
                    focus:ring-blue-500/10
                  "
                />
              </div>

              {/* =================================================
                  SUBMIT BUTTON
              ================================================= */}

              <button
                type="submit"
                className="
                  group
                  flex
                  min-h-13
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-gradient-to-r
                  from-blue-600
                  via-cyan-500
                  to-emerald-500
                  px-6
                  py-3.5
                  text-sm
                  font-semibold
                  text-white
                  shadow-[0_15px_35px_rgba(37,99,235,0.30)]
                  transition
                  duration-300

                  hover:-translate-y-0.5
                  hover:shadow-[0_20px_45px_rgba(37,99,235,0.40)]

                  active:translate-y-0
                "
              >
                Get Free Medical Opinion
                <ArrowRight
                  className="
                    h-4
                    w-4
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </button>
            </form>

            {/* =================================================
                PRIVACY MESSAGE
            ================================================= */}

            <div
              className="
                mt-4
                flex
                items-start
                justify-center
                gap-2
                text-center
                text-xs
                leading-5
                text-slate-500
              "
            >
              <ShieldCheck
                className="
                  mt-0.5
                  h-4
                  w-4
                  shrink-0
                  text-emerald-600
                "
              />

              <span>
                Your information is secure and handled confidentially.
              </span>
            </div>

            {/* =================================================
                FORM STATS
            ================================================= */}

            <div
              className="
                mt-5
                grid
                grid-cols-3
                divide-x
                divide-slate-200/80
                border-t
                border-slate-200/80
                pt-5
              "
            >
              <FormStat value="50+" label="Hospitals" />

              <FormStat value="500+" label="Doctors" />

              <FormStat value="24×7" label="Support" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* ===================================================
          BOTTOM TRUST STRIP
      =================================================== */}

      <div
        className="
          relative
          z-10
          border-t
          border-white/15
          bg-slate-950/40
          backdrop-blur-xl
        "
      >
        <div
          className="
            mx-auto
            grid
            max-w-7xl
            grid-cols-2
            gap-x-4
            gap-y-5
            px-5
            py-5

            sm:px-8

            md:grid-cols-4

            lg:px-10
          "
        >
          <BottomTrustItem
            icon={<ShieldCheck className="h-5 w-5" />}
            title="Verified Hospitals"
            subtitle="Trusted healthcare network"
          />

          <BottomTrustItem
            icon={<HeartPulse className="h-5 w-5" />}
            title="Expert Guidance"
            subtitle="Personal treatment support"
          />

          <BottomTrustItem
            icon={<Globe2 className="h-5 w-5" />}
            title="India & Turkey"
            subtitle="Leading medical destinations"
          />

          <BottomTrustItem
            icon={<CheckCircle2 className="h-5 w-5" />}
            title="Complete Support"
            subtitle="Consultation to recovery"
          />
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   HERO TRUST POINT
========================================================= */

function HeroTrustPoint({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2.5">
      <div
        className="
          flex
          h-6
          w-6
          shrink-0
          items-center
          justify-center
          rounded-full
          bg-emerald-400/20
          backdrop-blur-xl
        "
      >
        <CheckCircle2
          className="
            h-3.5
            w-3.5
            text-emerald-300
          "
        />
      </div>

      <span
        className="
          text-sm
          font-medium
          text-white/90
        "
      >
        {text}
      </span>
    </div>
  );
}

/* =========================================================
   FORM STAT
========================================================= */

function FormStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="px-1 text-center">
      <div
        className="
          font-display
          text-lg
          font-bold
          text-slate-900

          sm:text-xl
        "
      >
        {value}
      </div>

      <div
        className="
          mt-1
          text-[10px]
          text-slate-500

          sm:text-[11px]
        "
      >
        {label}
      </div>
    </div>
  );
}

/* =========================================================
   BOTTOM TRUST ITEM
========================================================= */

function BottomTrustItem({
  icon,
  title,
  subtitle,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}) {
  return (
    <div
      className="
        flex
        items-center
        gap-3

        md:justify-center
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
          rounded-xl
          border
          border-white/20
          bg-white/10
          text-cyan-300
          shadow-lg
          backdrop-blur-xl
        "
      >
        {icon}
      </div>

      <div>
        <div
          className="
            text-xs
            font-bold
            text-white

            sm:text-sm
          "
        >
          {title}
        </div>

        <div
          className="
            mt-0.5
            hidden
            text-xs
            text-white/55

            sm:block
          "
        >
          {subtitle}
        </div>
      </div>
    </div>
  );
}
