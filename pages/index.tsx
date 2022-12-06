import { NextPage } from 'next'
import { useEffect, useState, useMemo } from 'react'
import Head from 'next/head'
import { GetStaticProps } from 'next'

import Header from '../components/header'
import Email from '../components/email'
import Community from '../components/community'
import Workshops from '../components/workshops'
import HackNight from '../components/hack-night'
import JoinUs from '../components/join-us'
import IEvent from '../utils/interfaces/IEvent'

import {
  DraggableContext,
  DraggableInterface
} from '../context/DraggableContext'
import { fetchData } from '../utils/fetchData'

interface HomeFetchedEventsProps {
  fetchedEvents: IEvent[]
  randomBarCode: string
}

const Home: NextPage<HomeFetchedEventsProps> = ({
  fetchedEvents,
  randomBarCode
}) => {
  // Disable draggable feature on small screen
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0
  })
  const [draggable, setDraggable] = useState<boolean>(false)

  const value = useMemo<DraggableInterface>(
    () => ({ draggable, setDraggable }),
    [draggable]
  )

  const resizeHandler = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    })

    if (windowSize.width > 640) {
      setDraggable(true)
    } else {
      setDraggable(false)
    }
  }

  useEffect((): any => {
    if (window.innerWidth > 640) {
      setDraggable(true)
    } else {
      setDraggable(false)
    }
  }, [])

  useEffect((): any => {
    window.addEventListener('resize', resizeHandler)
    return () => {
      window.removeEventListener('resize', resizeHandler)
    }
  })

  return (
    <DraggableContext.Provider value={value}>
      <div className="flex flex-col min-h-screen overflow-hidden">
        <Head>
          <meta property="og:site_name" content="Purdue Hackers" />
          <meta property="og:name" content="Purdue Hackers" />
          <meta property="og:title" content="Purdue Hackers" />
          <meta
            property="og:image"
            content="https://og.purduehackers.com/Home.png?theme=light&md=1&fontSize=250px&caption=%25F0%259F%2592%259B%25E2%259A%25A1%25EF%25B8%258F"
          />
          <meta property="og:description" content="💛⚡️" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="og:type" content="website" />
          <title>Purdue Hackers</title>
        </Head>
        <Header />
        <hr className="border-2 border-black border-dashed bg-amber-100" />
        <Email />
        <hr className="border-2 border-black border-dashed bg-amber-200" />
        <Community />
        <Workshops
          fetchedEvents={fetchedEvents}
          randomBarCode={randomBarCode}
        />
        <HackNight />
        <JoinUs />
      </div>
    </DraggableContext.Provider>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const fetchedEvents: IEvent[] = await fetchData()
  let randomBarCode = ''
  for (let i = 0; i < 5; i++) {
    randomBarCode += Math.floor(Math.random() * 10)
    randomBarCode += '    '
  }
  return {
    props: {
      fetchedEvents: JSON.parse(JSON.stringify(fetchedEvents)),
      randomBarCode
    },
    revalidate: 60
  }
}

export default Home
