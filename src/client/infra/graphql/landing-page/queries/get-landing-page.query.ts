import { gql } from 'graphql-request'

export const getLandingPageQuery = gql`
  fragment Hero on LandingPage {
    hero {
      description
      sectionTitle
      title
      highlightNumbers {
        id
        number
        description
      }
      mainButton {
        link
        label
      }
      secondaryButton {
        link
        label
      }
      photo {
        data {
          attributes {
            url
          }
        }
      }
    }
  }

  fragment WhyChooseUs on LandingPage {
    whyChooseUs {
      title
      description
      subtitle
      whyChooseUsCards {
        id
        title
        description
        icon
      }
    }
  }

  fragment About on LandingPage {
    about {
      title
      subtitle
      description
      photo {
        data {
          attributes {
            url
          }
        }
      }
    }
  }

  fragment Services on LandingPage {
    services {
      title
      subtitle
      description
      serviceCards {
        id
        title
        description
        icon
      }
    }
  }

  fragment Portfolio on LandingPage {
    portfolio {
      title
      subtitle
      description
      portfolioCards {
        id
        image {
          data {
            attributes {
              url
            }
          }
        }
        title
        shortDescription
      }
    }
  }

  fragment Footer on LandingPage {
    footer {
      description
      whatsLink
      instagramLink
      linkedinLink
      email
      phone
      copyrightName
      copyrightText
    }
  }

  query {
    landingPage {
      data {
        attributes {
          ...Hero
          ...WhyChooseUs
          ...About
          ...Services
          ...Portfolio
          ...Footer
        }
      }
    }
  }
`
