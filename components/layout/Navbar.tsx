'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import {
  Menu,
  X,
  HeartPulse,
  Stethoscope,
  Building2,
  UserRound,
  Brain,
  Calculator,
  Home,
  ArrowRight,
} from 'lucide-react'
import { LanguageSwitcher } from './LanguageSwitcher'

const NAV_ITEMS = [
  { href: '', label: 'Home', icon: Home },
  { href: '/treatments', label: 'Treatments', icon: Stethoscope },
  { href: '/hospitals', label: 'Hospitals', icon: Building2 },
  { href: '/doctors', label: 'Doctors', icon: UserRound },
  { href: '/aboutus', label: 'About Us', icon: Brain },
  {
    href: '/contactus',
    label: 'Contact Us',
    icon: Calculator,
  },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  const locale = pathname.split('/')[1] || 'en'

  const createHref = (href: string) => {
    return href ? `/${locale}${href}` : `/${locale}`
  }

  const isActive = (href: string) => {
    const fullHref = createHref(href)

    if (href === '') {
      return pathname === fullHref
    }

    return pathname.startsWith(fullHref)
  }

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className="
        fixed
        inset-x-0
        top-0
        z-50
        border-b
        border-slate-200/60
        bg-white/80
        shadow-[0_4px_30px_rgba(11,37,69,0.04)]
        backdrop-blur-2xl
      "
    >
      <nav
        className="
          mx-auto
          flex
          h-[76px]
          w-full
          max-w-7xl
          items-center
          justify-between
          px-4
          sm:px-6
          lg:px-8
        "
      >
        {/* LOGO */}

        <Link
          href={`/${locale}`}
          onClick={() => setOpen(false)}
          className="group flex shrink-0 items-center gap-2.5"
        >
          <div
            className="
              relative
              flex
              h-11
              w-11
              items-center
              justify-center
              overflow-hidden
              rounded-[14px]
              bg-cta-gradient
              shadow-[0_8px_25px_rgba(37,99,235,0.22)]
              transition
              duration-300
              group-hover:-translate-y-0.5
              group-hover:shadow-[0_12px_30px_rgba(37,99,235,0.3)]
            "
          >
            <HeartPulse className="relative z-10 h-6 w-6 text-white" />

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-br
                from-white/30
                via-transparent
                to-transparent
              "
            />
          </div>

          <div className="flex flex-col">
            <span
              className="
                font-display
                text-lg
                font-bold
                leading-none
                tracking-[-0.03em]
                sm:text-xl
              "
            >
              <span className="gradient-text">
                AL-HIND
              </span>
            </span>

            <span
              className="
                mt-1
                hidden
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.16em]
                text-txt-muted
                sm:block
              "
            >
              Healthcare Without Borders
            </span>
          </div>
        </Link>

        {/* DESKTOP NAVIGATION */}

        <div className="hidden items-center lg:flex">
          <div
            className="
              flex
              items-center
              gap-1
              rounded-full
              border
              border-slate-200/70
              bg-white/70
              p-1.5
              shadow-[0_5px_25px_rgba(11,37,69,0.06)]
              backdrop-blur-xl
            "
          >
            {NAV_ITEMS.map((item) => {
              const active = isActive(item.href)

              return (
                <Link
                  key={item.href}
                  href={createHref(item.href)}
                  className={`
                    relative
                    whitespace-nowrap
                    rounded-full
                    px-3.5
                    py-2
                    text-sm
                    font-medium
                    transition-all
                    duration-300
                    ${
                      active
                        ? 'bg-cta-gradient text-white shadow-md'
                        : 'text-txt-secondary hover:bg-medical-blue/5 hover:text-txt-primary'
                    }
                  `}
                >
                  {item.label}
                </Link>
              )
            })}
          </div>
        </div>

        {/* RIGHT SIDE */}

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <LanguageSwitcher />

          <Link
            href={`/${locale}/ai-match`}
            className="
              group
              hidden
              min-h-11
              items-center
              justify-center
              gap-2
              rounded-full
              bg-cta-gradient
              px-5
              py-2.5
              text-sm
              font-semibold
              text-white
              shadow-[0_8px_25px_rgba(37,99,235,0.2)]
              transition
              duration-300
              hover:-translate-y-0.5
              hover:shadow-[0_12px_30px_rgba(37,99,235,0.28)]
              md:inline-flex
            "
          >
            Get Started

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

          {/* MOBILE MENU BUTTON */}

          <button
            type="button"
            onClick={() => setOpen((current) => !current)}
            aria-label={
              open
                ? 'Close navigation menu'
                : 'Open navigation menu'
            }
            aria-expanded={open}
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-xl
              border
              border-slate-200/80
              bg-white/80
              text-txt-primary
              shadow-sm
              transition
              duration-300
              hover:bg-medical-blue/5
              lg:hidden
            "
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={open ? 'close' : 'menu'}
                initial={{
                  opacity: 0,
                  rotate: -90,
                  scale: 0.8,
                }}
                animate={{
                  opacity: 1,
                  rotate: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  rotate: 90,
                  scale: 0.8,
                }}
                transition={{
                  duration: 0.18,
                }}
              >
                {open ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </nav>

      {/* MOBILE NAVIGATION */}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: 'auto',
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.25,
              ease: 'easeInOut',
            }}
            className="
              overflow-hidden
              border-t
              border-slate-200/70
              bg-white/95
              backdrop-blur-2xl
              lg:hidden
            "
          >
            <div
              className="
                mx-auto
                w-full
                max-w-7xl
                px-4
                py-4
                sm:px-6
              "
            >
              <div className="grid gap-1.5">
                {NAV_ITEMS.map((item, index) => {
                  const Icon = item.icon
                  const active = isActive(item.href)

                  return (
                    <motion.div
                      key={item.href}
                      initial={{
                        opacity: 0,
                        x: -15,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay: index * 0.04,
                      }}
                    >
                      <Link
                        href={createHref(item.href)}
                        onClick={() => setOpen(false)}
                        className={`
                          group
                          flex
                          min-h-12
                          items-center
                          gap-3
                          rounded-xl
                          px-3
                          py-2.5
                          text-sm
                          font-medium
                          transition
                          duration-300
                          ${
                            active
                              ? 'bg-medical-blue/10 text-medical-blue'
                              : 'text-txt-secondary hover:bg-medical-blue/5 hover:text-txt-primary'
                          }
                        `}
                      >
                        <span
                          className={`
                            flex
                            h-9
                            w-9
                            shrink-0
                            items-center
                            justify-center
                            rounded-lg
                            transition
                            duration-300
                            ${
                              active
                                ? 'bg-medical-blue text-white'
                                : 'bg-medical-blue/10 text-medical-blue group-hover:bg-medical-blue group-hover:text-white'
                            }
                          `}
                        >
                          <Icon className="h-4 w-4" />
                        </span>

                        <span>{item.label}</span>

                        <ArrowRight
                          className="
                            ml-auto
                            h-4
                            w-4
                            transition-transform
                            duration-300
                            group-hover:translate-x-1
                          "
                        />
                      </Link>
                    </motion.div>
                  )
                })}
              </div>

              {/* MOBILE CTA */}

              <Link
                href={`/${locale}/ai-match`}
                onClick={() => setOpen(false)}
                className="
                  mt-4
                  flex
                  min-h-12
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-cta-gradient
                  px-5
                  py-3
                  font-semibold
                  text-white
                  shadow-lg
                  shadow-medical-blue/20
                  md:hidden
                "
              >
                Get Started

                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}