import { Layout } from '@/application/components'
import { normalizeData } from '@/application/helpers'
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
import { client } from '@/infra/graphql/common/client'
import { HomePageQueryModel } from '@/infra/graphql/home/models'
import { getHomePageQuery } from '@/infra/graphql/home/queries'
import { GetStaticProps } from 'next'

export default function Home({
  callToAction,
  contact,
  countInNumbers,
  experience,
  footer,
  hero,
  testimonials,
  whatWeDo,
}: HomePageQueryModel) {
  return (
    <>
      <main>
        <Layout>
          <HeroSection {...hero} />
          <WhatWeDoSection {...whatWeDo} />
          <ExperienceSection {...experience} />
          <CountInNumbersSection {...countInNumbers} />
          <TestimonialsSection {...testimonials} />
          <CallToActionSection {...callToAction} />
          <ContactSection {...contact} />
        </Layout>
      </main>
      <FooterSection {...footer} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await client.request(getHomePageQuery)
  const { home } = normalizeData(response)
  return {
    props: { ...home },
    revalidate: 60 * 10,
  }
}
