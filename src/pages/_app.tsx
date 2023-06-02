import '@rubensdeoliveira-ui/react/dist/index.css'
import { type AppType } from 'next/app'

import '@/client/application/styles/globals.css'
import { Meta } from '@/client/application/sections'

const MyApp: AppType = ({ Component, pageProps: { ...pageProps } }) => {
  return (
    <>
      <Meta />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
