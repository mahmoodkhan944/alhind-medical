import Link from 'next/link'
import { Heart, Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="relative bg-bg-dark text-white mt-32 overflow-hidden">
      {/* Gradient top border */}
      <div className="h-1 bg-cta-gradient" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-hero-gradient flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" fill="white" />
              </div>
              <span className="font-display font-bold text-xl">Al-Hind</span>
            </div>
            <p className="text-txt-muted text-sm leading-relaxed">
              Premium medical tourism platform connecting patients with world-class hospitals in India and Turkey.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Explore</h4>
            <ul className="space-y-2 text-sm text-txt-muted">
              <li><Link href="/treatments" className="hover:text-medical-blue transition">Treatments</Link></li>
              <li><Link href="/hospitals" className="hover:text-medical-blue transition">Hospitals</Link></li>
              <li><Link href="/doctors" className="hover:text-medical-blue transition">Doctors</Link></li>
              <li><Link href="/cost-calculator" className="hover:text-medical-blue transition">Cost Calculator</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-txt-muted">
              <li><Link href="/ai-match" className="hover:text-medical-blue transition">AI Doctor Match</Link></li>
              <li><Link href="/dashboard" className="hover:text-medical-blue transition">Patient Portal</Link></li>
              <li><Link href="#" className="hover:text-medical-blue transition">Travel Assistance</Link></li>
              <li><Link href="#" className="hover:text-medical-blue transition">Insurance</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-txt-muted">
              <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-medical-blue" /> care@alhind.com</li>
              <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-medical-blue" /> +1 (800) 555-CARE</li>
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-medical-blue" /> Global • 24/7</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-txt-muted">
            © 2026 Al-Hind. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-txt-muted">
            <Link href="#" className="hover:text-medical-blue transition">Privacy</Link>
            <Link href="#" className="hover:text-medical-blue transition">Terms</Link>
            <Link href="#" className="hover:text-medical-blue transition">HIPAA</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}