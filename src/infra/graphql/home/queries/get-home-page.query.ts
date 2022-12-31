import { gql } from 'graphql-request'

export const getHomePageQuery = gql`
  fragment GetHero on Home {
    hero {
      devApresentation
      title
      description
      button {
        label
        link
      }
      devImage {
        data {
          attributes {
            url
          }
        }
      }
    }
  }

  fragment GetWhatWeDo on Home {
    whatWeDo {
      sectionHeader {
        title
        description
      }
      whatWeDoCard {
        id
        title
        description
        linkText
        link
        iconType
      }
    }
  }

  fragment GetExperience on Home {
    experience {
      sectionHeader {
        title
        description
      }
      experienceCard {
        job
        company
        description
        id
      }
      experienceBar {
        language
        experienceLevel
        id
      }
    }
  }

  fragment GetCountInNumbers on Home {
    countInNumbers {
      sectionHeader {
        title
        description
      }
      countComponent {
        countNumber
        countText
      }
    }
  }

  fragment GetTestimonials on Home {
    testimonials {
      sectionHeader {
        title
        description
      }
      testimonialCard {
        quoteImage {
          data {
            attributes {
              url
            }
          }
        }
        description
        photo {
          data {
            attributes {
              url
            }
          }
        }
        name
        job
      }
    }
  }

  fragment GetCallToAction on Home {
    callToAction {
      title
      button {
        label
        link
      }
    }
  }

  fragment GetContact on Home {
    contact {
      contactCard {
        contactText
        contactType
      }
    }
  }

  fragment GetFooter on Home {
    footer {
      title
      footerInfo {
        footerInfoItemText
        footerInfoItemLink
      }
      socialIcons {
        socialIconType
        socialIconLink
      }
    }
  }

  query {
    home {
      data {
        attributes {
          ...GetHero
          ...GetWhatWeDo
          ...GetExperience
          ...GetCountInNumbers
          ...GetTestimonials
          ...GetCallToAction
          ...GetContact
          ...GetFooter
        }
      }
    }
  }
`
