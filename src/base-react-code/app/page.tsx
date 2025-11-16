'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { AppleHeroSection } from '@/components/apple-hero-section'
import { ImmersiveScrollSection } from '@/components/immersive-scroll-section'
import { HorizontalCarousel } from '@/components/horizontal-carousel'
import { ProcessReveal } from '@/components/process-reveal'
import { VideoTransitionSection } from '@/components/video-transition-section'
import { ParallaxTestimonials } from '@/components/parallax-testimonials'
import { FormsShowcase } from '@/components/forms-showcase'
import { FinalCTA } from '@/components/final-cta'

export default function Home() {
  return (
    <main className="bg-black">
      <Navigation />
      <AppleHeroSection />
      <ImmersiveScrollSection />
      <VideoTransitionSection />
      <HorizontalCarousel />
      <ProcessReveal />
      <ParallaxTestimonials />
      <FormsShowcase />
      <FinalCTA />
      <Footer />
    </main>
  )
}
