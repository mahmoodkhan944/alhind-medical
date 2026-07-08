'use client'

import { motion } from 'framer-motion'
import { Star, Award, MessageCircle } from 'lucide-react'
import { ScrollAnimation } from '@/components/animations/ScrollAnimation'
import { TiltCard } from '@/components/animations/TiltCard'

const DOCTORS = [
  { name: 'Dr. Rajesh Sharma', specialty: 'Cardiac Surgeon', hospital: 'Apollo Hospitals', country: '🇮🇳', experience: 25, rating: 4.9, reviews: 523, image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400' },
  { name: 'Dr. Ayşe Yılmaz', specialty: 'Cosmetic Surgeon', hospital: 'Memorial Hospital', country: '🇹🇷', experience: 18, rating: 4.8, reviews: 412, image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400' },
  { name: 'Dr. Priya Patel', specialty: 'Neurosurgeon', hospital: 'Fortis Healthcare', country: '🇮🇳', experience: 22, rating: 4.9, reviews: 387, image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400' },
  { name: 'Dr. Mehmet Kaya', specialty: 'Orthopedic Surgeon', hospital: 'Acıbadem', country: '🇹🇷', experience: 20, rating: 4.8, reviews: 298, image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400' },
  { name: 'Dr. Anil Kumar', specialty: 'Oncologist', hospital: 'Medanta', country: '🇮🇳', experience: 28, rating: 4.9, reviews: 612, image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400' },
  { name: 'Dr. Elif Demir', specialty: 'Fertility Specialist', hospital: 'Liv Hospital', country: '🇹🇷', experience: 15, rating: 4.7, reviews: 234, image: 'https://images.unsplash.com/photo-1651008376811-b90baee6071f?w=400' },
]

export default function DoctorsPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollAnimation className="text-center mb-16">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-4">
            Expert <span className="gradient-text">Doctors</span>
          </h1>
          <p className="text-lg text-txt-secondary max-w-2xl mx-auto">
            Meet our network of world-renowned specialists with decades of experience.
          </p>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DOCTORS.map((d, i) => (
            <ScrollAnimation key={d.name} delay={i * 0.1}>
              <TiltCard>
                <div className="glass rounded-3xl p-8 group hover:shadow-2xl hover:shadow-medical-blue/20 transition-all">
                  <div className="relative mb-6">
                    <div className="relative w-32 h-32 mx-auto">
                      {/* 3D depth ring */}
                      <div className="absolute inset-0 rounded-full bg-cta-gradient blur-xl opacity-40 group-hover:opacity-60 transition" />
                      <div className="relative w-full h-full rounded-full overflow-hidden ring-4 ring-white shadow-xl">
                        <div
                          className="w-full h-full bg-cover bg-center"
                          style={{ backgroundImage: `url(${d.image})` }}
                        />
                      </div>
                      {/* Badge */}
                      <div className="absolute -bottom-2 -right-2 w-12 h-12 rounded-full bg-cta-gradient flex items-center justify-center shadow-lg">
                        <Award className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>

                  <div className="text-center mb-4">
                    <div className="text-2xl mb-2">{d.country}</div>
                    <h3 className="font-display text-xl font-bold mb-1">{d.name}</h3>
                    <p className="text-medical-blue font-medium text-sm">{d.specialty}</p>
                    <p className="text-xs text-txt-muted mt-1">{d.hospital}</p>
                  </div>

                  <div className="flex items-center justify-center gap-1 mb-6">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star
                        key={j}
                        className={`w-4 h-4 ${j < Math.floor(d.rating) ? 'text-medical-orange' : 'text-txt-muted/30'}`}
                        fill={j < Math.floor(d.rating) ? '#F59E0B' : 'none'}
                      />
                    ))}
                    <span className="ml-2 text-sm font-semibold">{d.rating}</span>
                    <span className="text-xs text-txt-muted">({d.reviews})</span>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-txt-muted/10">
                    <div className="text-center">
                      <div className="text-xs text-txt-muted">Experience</div>
                      <div className="font-bold">{d.experience} yrs</div>
                    </div>
                    <button className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-cta-gradient text-white text-sm font-semibold hover:shadow-lg hover:shadow-medical-green/30 transition">
                      <MessageCircle className="w-4 h-4" />
                      Consult
                    </button>
                  </div>
                </div>
              </TiltCard>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </div>
  )
}