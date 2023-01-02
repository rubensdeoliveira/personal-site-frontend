import { extendTheme } from '@chakra-ui/react'
import { lighten } from 'polished'

export const theme = extendTheme({
  colors: {
    'gray.400': '#2E2E30',
    'gray.500': '#343434',
    'gray.800': '#202020',
    'gray.900': '#161616',
    'red.500': '#F50D32',
    'red.500.lighten': lighten(0.2, '#F50D32'),
  },
  styles: {
    global: {
      html: {
        fontSize: '62.5%',
      },
      body: {
        bg: 'gray.800',
        color: 'white',
        fontFamily: 'Montserrat',
        fontSize: '1.6rem',
      },
      a: {
        _hover: {
          textDecoration: 'none !important',
        },
      },
    },
  },
})
