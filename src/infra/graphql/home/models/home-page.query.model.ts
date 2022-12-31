export type HeroSectionModel = {
  devApresentation: string
  title: string
  description: string
  button: {
    label: string
    link: string
  }
  devImage: {
    url: string
  }
}

export type WhatWeDoSectionModel = {
  sectionHeader: {
    title: string
    description: string
  }
  whatWeDoCard: Array<{
    title: string
    description: string
    linkText: string
    link: string
    iconType: string
    id: string
  }>
}

export type ExperienceSectionModel = {
  sectionHeader: {
    title: string
    description: string
  }
  experienceCard: Array<{
    job: string
    company: string
    description: string
    id: string
  }>
  experienceBar: Array<{
    language: string
    experienceLevel: string
    id: string
  }>
}

export type CountInNumbersSectionModel = {
  sectionHeader: {
    title: string
    description: string
  }
  countComponent: {
    countNumber: string
    countText: string
  }
}

export type TestimonialsSectionModel = {
  sectionHeader: {
    title: string
    description: string
  }
  testimonialCard: {
    quoteImage: {
      url: string
    }
    description: string
    photo: {
      url: string
    }
    name: string
    job: string
  }
}

export type CallToActionSectionModel = {
  title: string
  button: {
    label: string
    link: string
  }
}

export type ContactSectionModel = {
  contactCard: {
    contactText: string
    contactType: string
  }
}

export type FooterSectionModel = {
  title: string
  footerInfo: {
    footerInfoItemText: string
    footerInfoItemLink: string
  }
  socialIcons: {
    socialIconType: string
    socialIconLink: string
  }
}

export type HomePageQueryModel = {
  hero: HeroSectionModel
  whatWeDo: WhatWeDoSectionModel
  experience: ExperienceSectionModel
  countInNumbers: CountInNumbersSectionModel
  testimonials: TestimonialsSectionModel
  callToAction: CallToActionSectionModel
  contact: ContactSectionModel
  footer: FooterSectionModel
}
