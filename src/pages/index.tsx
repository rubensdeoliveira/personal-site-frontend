import { GetStaticProps } from 'next'

import { normalizeData } from '@/client/application/helpers'
import {
  About,
  Footer,
  Header,
  Hero,
  Services,
  WhyChooseUs
} from '@/client/application/sections'
import { client } from '@/client/infra/graphql/common/client'
import { getLandingPageQuery } from '@/client/infra/graphql/landing-page/queries'
import { LandingPageQueryModel } from '@/client/infra/graphql/landing-page/models'
import { Portfolio } from '@/client/application/sections/portfolio'

export const getStaticProps: GetStaticProps = async () => {
  const landingResponse = await client.request(getLandingPageQuery)
  const { landingPage } = normalizeData(landingResponse)
  return {
    props: { ...landingPage },
    revalidate: 60 * 10
  }
}

export default function Home({
  hero,
  whyChooseUs,
  about,
  services,
  portfolio,
  footer
}: LandingPageQueryModel) {
  return (
    <>
      <Header />
      <main>
        <Hero {...hero} />
        <WhyChooseUs {...whyChooseUs} />
        <About
          {...about}
          instagramLink={footer.instagramLink}
          whatsLink={footer.whatsLink}
          linkedinLink={footer.linkedinLink}
        />
        <Services {...services} />
        <Portfolio {...portfolio} />
      </main>
      <Footer {...footer} />
    </>
  )
}
