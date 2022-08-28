import { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/header'
import Email from '../components/email'
import Community from '../components/community'
import Workshops from '../components/workshops'
import HackNight from '../components/hack-night'

const Home: NextPage = () => {
  return (
    <div className="min-h-screen overflow-hidden flex flex-col">
      <Head>
        <meta property="og:site_name" content="Purdue Hackers" />
        <meta property="og:name" content="Purdue Hackers" />
        <meta property="og:title" content="Purdue Hackers" />
        <meta
          property="og:image"
          content="https://og.purduehackers.com/Test.png?theme=light&md=1&fontSize=300px&caption="
        />
        <meta property="og:description" content="💛⚡️" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:type" content="website" />
        <title>Purdue Hackers</title>
      </Head>
      <Header />
      <hr className="border-2 border-black border-dashed bg-amber-100" />
      <Email />
      <hr className="border-2 border-black border-dashed bg-amber-100" />
      <Community />
      <Workshops />
      <HackNight />
    </div>
  )
}

export default Home
