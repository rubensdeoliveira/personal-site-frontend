import { Layout } from '@/application/components'
import {
  CountInNumbersSection,
  ExperienceSection,
  HeroSection,
  TestimonialsSection,
  WhatWeDoSection,
  ContactSection,
  CallToActionSection,
  FooterSection,
} from '@/application/sections'

export default function Home() {
  return (
    <>
      <main>
        <Layout>
          <HeroSection />
          <WhatWeDoSection />
          <ExperienceSection />
          <CountInNumbersSection />
          <TestimonialsSection />
          <CallToActionSection />
          <ContactSection />
        </Layout>
      </main>
      <FooterSection />
    </>
  )
}
