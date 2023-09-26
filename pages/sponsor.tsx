/* eslint-disable @next/next/no-img-element */ // Using next/image dramatically increases the pdf's size when printing
import Head from 'next/head';
import { Content } from '../components/sponsor/content';
import SponsorContent from '@/components/sponsor/sponsor.mdx';

export default function Sponsor(): JSX.Element {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <meta property="og:site_name" content="Purdue Hackers" />
        <meta property="og:name" content="Purdue Hackers" />
        <meta property="og:title" content="Sponsor | Purdue Hackers" />
        <meta
          property="og:description"
          content="All the most talented, creative, & dedicated engineers congregate in Purdue Hackers to make real projects. Get directly in front of them by sponsoring us."
        />
        <meta property="og:type" content="website" />
        <title>Sponsor | Purdue Hackers</title>
      </Head>
      <header className="border-b-4 bg-amber-300 print:bg-amber-300 border-black">
        <div className="py-16 flex flex-col gap-y-4">
          <h1 className="text-center text-4xl sm:text-7xl print:text-7xl sm:tracking-tight font-bold flex justify-center items-center gap-2">
            <img
              src="/ph-logo-black.svg"
              alt="Logo"
              className="self-center flex-shrink-0 h-[1em] w-auto pointer-events-none"
            />
            Purdue Hackers
          </h1>
        </div>
      </header>
      <article className="mt-8 sm:mt-12 mb-8 sm:mb-32 text-lg font-serif flex flex-col items-start gap-y-4 justify-center w-11/12 sm:w-full max-w-2xl mx-auto">
        <Content>
          <SponsorContent />
        </Content>
      </article>
    </div>
  );
}
