import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { NoiseOverlay } from '@/components/ui/NoiseOverlay'

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ locale: string }>
}>) {
  await params

  return (
    <>
      <NoiseOverlay />
      <Navbar />

      <main className="relative z-10">
        {children}
      </main>

      <Footer />
    </>
  )
}