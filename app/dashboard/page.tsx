'use client'

import { motion } from 'framer-motion'
import { Calendar, FileText, MessageCircle, Bell, Heart, CheckCircle2, Clock } from 'lucide-react'
import { ScrollAnimation } from '@/components/animations/ScrollAnimation'

const TIMELINE = [
  { status: 'done', label: 'Initial Consultation', date: 'Jun 15, 2026', icon: CheckCircle2 },
  { status: 'done', label: 'Medical Records Review', date: 'Jun 20, 2026', icon: CheckCircle2 },
  { status: 'current', label: 'Treatment Planning', date: 'Jul 07, 2026', icon: Clock },
  { status: 'pending', label: 'Travel Arrangements', date: 'Jul 20, 2026', icon: Clock },
  { status: 'pending', label: 'Procedure', date: 'Aug 05, 2026', icon: Clock },
  { status: 'pending', label: 'Recovery & Follow-up', date: 'Aug 20, 2026', icon: Clock },
]

const NOTIFICATIONS = [
  { type: 'info', title: 'Appointment Confirmed', desc: 'Dr. Sharma confirmed for Aug 5', time: '2h ago' },
  { type: 'success', title: 'Documents Approved', desc: 'Your medical records have been reviewed', time: '1d ago' },
  { type: 'info', title: 'Flight Options Available', desc: '3 flight options for your travel dates', time: '2d ago' },
]

export default function DashboardPage() {
  const progress = (TIMELINE.filter(t => t.status === 'done').length / TIMELINE.length) * 100

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollAnimation className="mb-12">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-2">
                Welcome back, <span className="gradient-text">Sarah</span> 👋
              </h1>
              <p className="text-txt-secondary">Here's your treatment journey overview</p>
            </div>
            <div className="flex gap-3">
              <button className="px-5 py-2.5 rounded-full glass font-medium hover:bg-medical-ice transition">
                <MessageCircle className="w-4 h-4 inline mr-2" />
                Message Doctor
              </button>
              <button className="px-5 py-2.5 rounded-full bg-cta-gradient text-white font-semibold shadow-lg shadow-medical-green/30">
                <FileText className="w-4 h-4 inline mr-2" />
                View Records
              </button>
            </div>
          </div>
        </ScrollAnimation>

        {/* Stats cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Next Appointment', value: 'Aug 5', icon: Calendar, color: '#0EA5E9' },
            { label: 'Treatment Progress', value: `${progress.toFixed(0)}%`, icon: Heart, color: '#10B981' },
            { label: 'Documents', value: '12', icon: FileText, color: '#06B6D4' },
            { label: 'Messages', value: '3', icon: MessageCircle, color: '#14B8A6' },
          ].map((s, i) => (
            <ScrollAnimation key={s.label} delay={i * 0.1}>
              <div className="glass rounded-2xl p-5">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${s.color}20` }}>
                    <s.icon className="w-5 h-5" style={{ color: s.color }} />
                  </div>
                </div>
                <div className="text-2xl font-bold">{s.value}</div>
                <div className="text-xs text-txt-muted">{s.label}</div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Progress ring */}
          <ScrollAnimation>
            <div className="glass rounded-3xl p-8 h-full">
              <h3 className="font-display text-xl font-bold mb-6">Treatment Progress</h3>
              <div className="relative w-48 h-48 mx-auto mb-6">
                <svg className="w-full h-full -rotate-90">
                  <circle cx="96" cy="96" r="80" stroke="#E0F2FE" strokeWidth="12" fill="none" />
                  <motion.circle
                    cx="96" cy="96" r="80"
                    stroke="url(#gradient)"
                    strokeWidth="12"
                    fill="none"
                    strokeLinecap="round"
                    initial={{ strokeDasharray: '0 502' }}
                    animate={{ strokeDasharray: `${(progress / 100) * 502} 502` }}
                    transition={{ duration: 1.5, ease: 'easeOut' }}
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#10B981" />
                      <stop offset="100%" stopColor="#0EA5E9" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="text-4xl font-bold gradient-text">{progress.toFixed(0)}%</div>
                  <div className="text-xs text-txt-muted">Complete</div>
                </div>
              </div>
              <div className="text-center text-sm text-txt-secondary">
                Step 3 of {TIMELINE.length} completed
              </div>
            </div>
          </ScrollAnimation>

          {/* Timeline */}
          <ScrollAnimation delay={0.1}>
            <div className="glass rounded-3xl p-8 h-full">
              <h3 className="font-display text-xl font-bold mb-6">Journey Timeline</h3>
              <div className="space-y-4">
                {TIMELINE.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="flex flex-col items-center">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        item.status === 'done' ? 'bg-medical-green text-white' :
                        item.status === 'current' ? 'bg-medical-blue text-white animate-pulse' :
                        'bg-medical-ice text-txt-muted'
                      }`}>
                        <item.icon className="w-5 h-5" />
                      </div>
                      {i < TIMELINE.length - 1 && (
                        <div className={`w-0.5 h-8 ${item.status === 'done' ? 'bg-medical-green' : 'bg-txt-muted/20'}`} />
                      )}
                    </div>
                    <div className="flex-1 pt-1">
                      <div className="font-semibold text-sm">{item.label}</div>
                      <div className="text-xs text-txt-muted">{item.date}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollAnimation>

          {/* Notifications */}
          <ScrollAnimation delay={0.2}>
            <div className="glass rounded-3xl p-8 h-full">
              <h3 className="font-display text-xl font-bold mb-6 flex items-center gap-2">
                <Bell className="w-5 h-5 text-medical-blue" />
                Notifications
              </h3>
              <div className="space-y-3">
                {NOTIFICATIONS.map((n, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="p-4 rounded-2xl bg-white/50 hover:bg-white transition cursor-pointer"
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-2 h-2 rounded-full mt-2 ${
                        n.type === 'success' ? 'bg-medical-green' : 'bg-medical-blue'
                      }`} />
                      <div className="flex-1">
                        <div className="font-semibold text-sm">{n.title}</div>
                        <div className="text-xs text-txt-secondary mt-0.5">{n.desc}</div>
                        <div className="text-xs text-txt-muted mt-1">{n.time}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  )
}