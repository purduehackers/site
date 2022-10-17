import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

import '@fortawesome/fontawesome-svg-core/styles.css'

function App({ Component, pageProps }: AppProps) {
  const vercelEnv = process.env.NEXT_PUBLIC_VERCEL_ENV
  return (
    <>
      <Head>
        <meta name="theme-color" content="#D97706" />
        <link
          rel="icon"
          href={
            vercelEnv === 'production'
              ? '/favicon.ico'
              : vercelEnv === 'preview'
              ? '/favicon_preview.ico'
              : '/favicon_dev.ico'
          }
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App
