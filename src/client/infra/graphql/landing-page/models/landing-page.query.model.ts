type Button = { link: string; label: string }

type Photo = { url: string }

export type HighlightNumber = {
  id: string
  number: string
  description: string
}

export type HeroProps = {
  description: string
  sectionTitle: string
  title: string
  highlightNumbers: HighlightNumber[]
  mainButton: Button
  secondaryButton: Button
  photo: Photo
}

export type WhyChooseUsCardProps = {
  id: string
  title: string
  description: string
  icon: string
}

export type WhyChooseUsProps = {
  title: string
  subtitle: string
  description: string
  whyChooseUsCards: WhyChooseUsCardProps[]
}

export type AboutProps = {
  title: string
  subtitle: string
  description: string
  photo: Photo
}

export type ServiceCardProps = {
  id: string
  title: string
  description: string
  icon: string
}

export type ServicesProps = {
  title: string
  subtitle: string
  description: string
  serviceCards: ServiceCardProps[]
}

export type PortfolioCardProps = {
  id: string
  image: Photo
  title: string
  shortDescription: string
}

export type PortfolioProps = {
  title: string
  subtitle: string
  description: string
  portfolioCards: PortfolioCardProps[]
}

export type FooterProps = {
  description: string
  whatsLink: string
  instagramLink: string
  linkedinLink: string
  email: string
  phone: string
  copyrightName: string
  copyrightText: string
}

export type LandingPageQueryModel = {
  hero: HeroProps
  whyChooseUs: WhyChooseUsProps
  about: AboutProps
  services: ServicesProps
  portfolio: PortfolioProps
  footer: FooterProps
}
