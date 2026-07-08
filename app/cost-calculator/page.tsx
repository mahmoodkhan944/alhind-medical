'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ScrollAnimation } from '@/components/animations/ScrollAnimation'
import { Calculator, Plane, Hotel, Stethoscope, TrendingDown } from 'lucide-react'

const PROCEDURES = [
  { name: 'Heart Bypass', india: 8000, turkey: 12000, usa: 100000 },
  { name: 'Knee Replacement', india: 6000, turkey: 9000, usa: 40000 },
  { name: 'Hair Transplant', india: 1500, turkey: 2500, usa: 15000 },
  { name: 'Rhinoplasty', india: 2500, turkey: 3500, usa: 12000 },
  { name: 'IVF Treatment', india: 4000, turkey: 6000, usa: 25000 },
  { name: 'Dental Implants', india: 800, turkey: 1200, usa: 5000 },
]

export default function CostCalculatorPage() {
  const [procedure, setProcedure] = useState(PROCEDURES[0])
  const [travel, setTravel] = useState(800)
  const [stay, setStay] = useState(10)
  const [companion, setCompanion] = useState(1)

  const stayCost = stay * 100
  const companionCost = companion * (travel + stayCost)
  const indiaTotal = procedure.india + travel + stayCost + companionCost
  const turkeyTotal = procedure.turkey + travel + stayCost + companionCost
  const usaTotal = procedure.usa

  const savingsIndia = ((1 - indiaTotal / usaTotal) * 100).toFixed(0)
  const savingsTurkey = ((1 - turkeyTotal / usaTotal) * 100).toFixed(0)

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollAnimation className="text-center mb-12">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-4">
            Cost <span className="gradient-text">Calculator</span>
          </h1>
          <p className="text-lg text-txt-secondary">
            Compare treatment costs across countries with full transparency.
          </p>
        </ScrollAnimation>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Controls */}
          <ScrollAnimation variant="slideLeft">
            <div className="glass rounded-3xl p-8 space-y-6">
              <div>
                <label className="flex items-center gap-2 font-semibold mb-3">
                  <Stethoscope className="w-5 h-5 text-medical-blue" />
                  Procedure
                </label>
                <select
                  value={procedure.name}
                  onChange={(e) => setProcedure(PROCEDURES.find(p => p.name === e.target.value)!)}
                  className="w-full p-3 rounded-xl bg-white/50 border border-txt-muted/20 focus:border-medical-blue focus:outline-none"
                >
                  {PROCEDURES.map((p) => (
                    <option key={p.name} value={p.name}>{p.name}</option>
                  ))}
                </select>
              </div>

              <SliderControl
                icon={<Plane className="w-5 h-5 text-medical-blue" />}
                label="Travel Budget"
                value={travel}
                min={300}
                max={3000}
                step={100}
                onChange={setTravel}
                suffix="$"
              />

              <SliderControl
                icon={<Hotel className="w-5 h-5 text-medical-green" />}
                label="Days of Stay"
                value={stay}
                min={3}
                max={30}
                step={1}
                onChange={setStay}
                suffix=" days"
              />

              <SliderControl
                icon={<Calculator className="w-5 h-5 text-medical-cyan" />}
                label="Companions"
                value={companion}
                min={0}
                max={3}
                step={1}
                onChange={setCompanion}
                suffix=""
              />
            </div>
          </ScrollAnimation>

          {/* Results */}
          <ScrollAnimation variant="slideRight">
            <div className="space-y-4">
              <CostBar label="🇺🇸 USA" value={usaTotal} max={usaTotal} color="#94A3B8" />
              <CostBar label="🇮🇳 India" value={indiaTotal} max={usaTotal} color="#0EA5E9" savings={savingsIndia} />
              <CostBar label="🇹🇷 Turkey" value={turkeyTotal} max={usaTotal} color="#10B981" savings={savingsTurkey} />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass rounded-3xl p-8 mt-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-cta-gradient flex items-center justify-center">
                    <TrendingDown className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-display text-xl font-bold">You Could Save</div>
                    <div className="text-sm text-txt-secondary">Up to {savingsIndia}% vs USA</div>
                  </div>
                </div>
                <div className="text-5xl font-bold gradient-text mb-4">
                  ${(usaTotal - Math.min(indiaTotal, turkeyTotal)).toLocaleString()}
                </div>
                <button className="w-full py-3 rounded-full bg-cta-gradient text-white font-semibold shadow-lg shadow-medical-green/30 hover:scale-105 transition">
                  Get Personalized Quote
                </button>
              </motion.div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  )
}

function SliderControl({ icon, label, value, min, max, step, onChange, suffix }: any) {
  return (
    <div>
      <label className="flex items-center justify-between font-semibold mb-3">
        <span className="flex items-center gap-2">{icon}{label}</span>
        <span className="gradient-text font-bold">{value}{suffix}</span>
      </label>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-2 rounded-full bg-medical-ice appearance-none cursor-pointer accent-medical-blue"
      />
    </div>
  )
}

function CostBar({ label, value, max, color, savings }: any) {
  const pct = (value / max) * 100
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="glass rounded-2xl p-5"
    >
      <div className="flex items-center justify-between mb-2">
        <span className="font-semibold">{label}</span>
        <div className="flex items-center gap-2">
          <span className="font-bold text-xl" style={{ color }}>${value.toLocaleString()}</span>
          {savings && (
            <span className="px-2 py-0.5 rounded-full bg-medical-mint text-medical-green text-xs font-semibold">
              -{savings}%
            </span>
          )}
        </div>
      </div>
      <div className="h-3 bg-medical-ice rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}, ${color}aa)` }}
        />
      </div>
    </motion.div>
  )
}