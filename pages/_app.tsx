import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Analytics } from '@vercel/analytics/react';
import {
  Space_Grotesk,
  IBM_Plex_Serif,
  Inter,
  Space_Mono,
  Press_Start_2P,
  Alegreya
} from 'next/font/google';
import '@fortawesome/fontawesome-svg-core/styles.css';

const spaceGrotesk = Space_Grotesk({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-space-grotesk'
});
const ibmPlexSerif = IBM_Plex_Serif({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-ibm-plex-serif',
  display: 'swap'
});
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
});
const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-space-mono',
  display: 'swap'
});
const pressStart = Press_Start_2P({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-press-start',
  display: 'swap'
});
const alegreya = Alegreya({
  weight: ['400', '600'],
  subsets: ['latin'],
  variable: '--font-alegreya',
  display: 'swap'
});

export default function App({ Component, pageProps }: AppProps) {
  const vercelEnv = process.env.NEXT_PUBLIC_VERCEL_ENV;
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
      <main
        className={`${spaceGrotesk.variable} ${ibmPlexSerif.variable} ${inter.variable} ${spaceMono.variable} ${pressStart.variable} ${alegreya.variable} font-main`}
      >
        <Component {...pageProps} />
      </main>
      <Analytics />
    </>
  );
}
