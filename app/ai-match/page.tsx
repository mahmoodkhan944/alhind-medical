'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Brain, Heart, Calendar, MapPin, ArrowRight, ArrowLeft, Sparkles } from 'lucide-react'
import { ScrollAnimation } from '@/components/animations/ScrollAnimation'

const STEPS = [
  { id: 1, title: 'Your Condition', icon: Heart },
  { id: 2, title: 'Preferences', icon: Calendar },
  { id: 3, title: 'Location', icon: MapPin },
  { id: 4, title: 'AI Matching', icon: Brain },
]

const CONDITIONS = ['Cardiac', 'Neurology', 'Orthopedics', 'Cosmetic', 'Oncology', 'Fertility', 'Dental', 'Ophthalmology']
const BUDGETS = ['Under $5,000', '$5,000 - $15,000', '$15,000 - $30,000', 'Over $30,000']
const LOCATIONS = ['India', 'Turkey', 'Both (Best Match)']

export default function AIMatchPage() {
  const [step, setStep] = useState(1)
  const [data, setData] = useState({ condition: '', budget: '', location: '' })
  const [matching, setMatching] = useState(false)
  const [matched, setMatched] = useState(false)

  const next = () => {
    if (step === 3) {
      setMatching(true)
      setTimeout(() => {
        setMatching(false)
        setMatched(true)
        setStep(4)
      }, 3000)
    } else {
      setStep(step + 1)
    }
  }

  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <ScrollAnimation className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-medical-ice text-medical-blue text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            AI-Powered Matching
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-4">
            Find Your <span className="gradient-text">Perfect Match</span>
          </h1>
          <p className="text-lg text-txt-secondary">
            Our AI analyzes your needs and matches you with the ideal doctor and hospital.
          </p>
        </ScrollAnimation>

        {/* Progress */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            {STEPS.map((s, i) => (
              <div key={s.id} className="flex items-center flex-1">
                <motion.div
                  animate={{
                    scale: step === s.id ? 1.1 : 1,
                    background: step >= s.id ? 'linear-gradient(135deg, #10B981, #0EA5E9)' : '#E2E8F0',
                  }}
                  className={`w-12 h-12 rounded-full flex items-center justify-center ${step >= s.id ? 'text-white' : 'text-txt-muted'}`}
                >
                  <s.icon className="w-5 h-5" />
                </motion.div>
                {i < STEPS.length - 1 && (
                  <div className="flex-1 h-1 mx-2 bg-txt-muted/20 rounded-full overflow-hidden">
                    <motion.div
                      animate={{ width: step > s.id ? '100%' : '0%' }}
                      className="h-full bg-cta-gradient"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="text-center text-sm font-medium text-txt-secondary">
            Step {step} of {STEPS.length}: {STEPS[step - 1].title}
          </div>
        </div>

        <AnimatePresence mode="wait">
          {matching ? (
            <motion.div
              key="matching"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="glass rounded-3xl p-12 text-center"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                className="w-24 h-24 mx-auto mb-6 rounded-full bg-cta-gradient flex items-center justify-center"
              >
                <Brain className="w-12 h-12 text-white" />
              </motion.div>
              <h3 className="font-display text-2xl font-bold mb-2">AI is analyzing...</h3>
              <p className="text-txt-secondary">Matching you with the best doctors and hospitals</p>
              <div className="mt-6 space-y-2">
                {['Analyzing medical history', 'Comparing specialist ratings', 'Checking availability'].map((t, i) => (
                  <motion.div
                    key={t}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.8 }}
                    className="flex items-center gap-2 text-sm text-txt-secondary"
                  >
                    <div className="w-2 h-2 rounded-full bg-medical-green animate-pulse" />
                    {t}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ) : matched ? (
            <motion.div
              key="matched"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass rounded-3xl p-8"
            >
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-medical-mint text-medical-green text-sm font-medium mb-4">
                  ✓ Perfect Match Found
                </div>
                <h3 className="font-display text-3xl font-bold">Your Top Recommendations</h3>
              </div>
              <div className="space-y-4">
                {[
                  { name: 'Dr. Rajesh Sharma', hospital: 'Apollo Hospitals', match: 98, country: '🇮🇳' },
                  { name: 'Dr. Ayşe Yılmaz', hospital: 'Memorial Hospital', match: 94, country: '🇹🇷' },
                  { name: 'Dr. Priya Patel', hospital: 'Fortis Healthcare', match: 91, country: '🇮🇳' },
                ].map((doc, i) => (
                  <motion.div
                    key={doc.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.15 }}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-white/50 hover:bg-white transition"
                  >
                    <div className="w-14 h-14 rounded-full bg-cta-gradient flex items-center justify-center text-white font-bold text-xl">
                      {doc.country}
                    </div>
                    <div className="flex-1">
                      <div className="font-bold">{doc.name}</div>
                      <div className="text-sm text-txt-secondary">{doc.hospital}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold gradient-text">{doc.match}%</div>
                      <div className="text-xs text-txt-muted">Match</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="glass rounded-3xl p-8"
            >
              {step === 1 && (
                <div>
                  <h3 className="font-display text-2xl font-bold mb-6">What condition are you seeking treatment for?</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {CONDITIONS.map((c) => (
                      <button
                        key={c}
                        onClick={() => setData({ ...data, condition: c })}
                        className={`p-4 rounded-2xl font-medium text-sm transition-all ${
                          data.condition === c
                            ? 'bg-cta-gradient text-white shadow-lg'
                            : 'bg-white/50 hover:bg-medical-ice'
                        }`}
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              {step === 2 && (
                <div>
                  <h3 className="font-display text-2xl font-bold mb-6">What's your budget range?</h3>
                  <div className="space-y-3">
                    {BUDGETS.map((b) => (
                      <button
                        key={b}
                        onClick={() => setData({ ...data, budget: b })}
                        className={`w-full p-4 rounded-2xl font-medium text-left transition-all ${
                          data.budget === b
                            ? 'bg-cta-gradient text-white shadow-lg'
                            : 'bg-white/50 hover:bg-medical-ice'
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              {step === 3 && (
                <div>
                  <h3 className="font-display text-2xl font-bold mb-6">Preferred destination?</h3>
                  <div className="space-y-3">
                    {LOCATIONS.map((l) => (
                      <button
                        key={l}
                        onClick={() => setData({ ...data, location: l })}
                        className={`w-full p-4 rounded-2xl font-medium text-left transition-all ${
                          data.location === l
                            ? 'bg-cta-gradient text-white shadow-lg'
                            : 'bg-white/50 hover:bg-medical-ice'
                        }`}
                      >
                        {l}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex justify-between mt-8">
                <button
                  onClick={() => setStep(Math.max(1, step - 1))}
                  disabled={step === 1}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full glass font-medium disabled:opacity-30"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back
                </button>
                <button
                  onClick={next}
                  className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-cta-gradient text-white font-semibold shadow-lg shadow-medical-green/30 hover:scale-105 transition"
                >
                  {step === 3 ? 'Find Matches' : 'Next'}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}