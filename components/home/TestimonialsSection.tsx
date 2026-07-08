'use client'

import { ScrollAnimation } from '../animations/ScrollAnimation'
import { Star, Quote } from 'lucide-react'

const TESTIMONIALS = [
  {
    name: 'Sarah Johnson',
    country: '🇺🇸 USA',
    treatment: 'Heart Surgery',
    hospital: 'Apollo Hospitals, India',
    text: 'Saved over $80,000 compared to US prices. The care was exceptional, and the staff spoke perfect English.',
    rating: 5,
  },
  {
    name: 'Ahmed Al-Rashid',
    country: '🇦🇪 UAE',
    treatment: 'Hair Transplant',
    hospital: 'Memorial Hospital, Turkey',
    text: 'Incredible results and professional service. The 3D consultation helped me understand exactly what to expect.',
    rating: 5,
  },
  {
    name: 'Maria Schmidt',
    country: '🇩🇪 Germany',
    treatment: 'Dental Implants',
    hospital: 'Acıbadem, Turkey',
    text: 'Perfect smile restored at 1/4 of German prices. The entire journey was seamless from start to finish.',
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="relative py-32">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollAnimation className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-medical-ice text-medical-blue text-sm font-medium mb-4">
            💬 Patient Stories
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Trusted by <span className="gradient-text">Thousands</span>
          </h2>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <ScrollAnimation key={t.name} delay={i * 0.1}>
              <div className="glass rounded-3xl p-8 h-full relative overflow-hidden group hover:shadow-2xl hover:shadow-medical-blue/20 transition-all">
                <Quote className="absolute top-4 right-4 w-12 h-12 text-medical-blue/10" />
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-5 h-5 text-medical-orange" fill="#F59E0B" />
                  ))}
                </div>
                <p className="text-txt-secondary leading-relaxed mb-6 italic">"{t.text}"</p>
                <div className="pt-6 border-t border-txt-muted/10">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 rounded-full bg-cta-gradient flex items-center justify-center text-white font-bold">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold">{t.name}</div>
                      <div className="text-xs text-txt-muted">{t.country}</div>
                    </div>
                  </div>
                  <div className="text-xs text-txt-secondary mt-2">
                    <span className="font-medium">{t.treatment}</span> • {t.hospital}
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}