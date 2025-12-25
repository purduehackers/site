import { NextPage } from 'next';
import { useEffect, useState, useMemo } from 'react';
import Head from 'next/head';
import { GetStaticProps } from 'next';

import Hero from '../components/hero';
import Email from '../components/email';
import Community from '../components/community';
import Workshops from '../components/workshops';
import HackNight from '../components/hack-night';
import JoinUs from '../components/join-us';
import { IEvent } from '../utils/interfaces/SanityEvent';

import {
  DraggableContext,
  DraggableInterface
} from '../context/DraggableContext';
import { fetchEvents } from '../utils/fetchEvents';
import Footer from '../components/footer';

interface HomeFetchedEventsProps {
  fetchedWorkshops: IEvent[];
  fetchedHackNights: IEvent[];
  upcomingHackNight: IEvent;
  randomBarCode: string;
}

const Home: NextPage<HomeFetchedEventsProps> = ({
  fetchedWorkshops,
  fetchedHackNights,
  upcomingHackNight,
  randomBarCode
}) => {
  // Disable draggable feature on small screen
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0
  });
  const [draggable, setDraggable] = useState<boolean>(false);

  const value = useMemo<DraggableInterface>(
    () => ({ draggable, setDraggable }),
    [draggable]
  );

  const resizeHandler = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    });

    if (windowSize.width > 640) {
      setDraggable(true);
    } else {
      setDraggable(false);
    }
  };

  useEffect((): any => {
    if (window.innerWidth > 640) {
      setDraggable(true);
    } else {
      setDraggable(false);
    }
  }, []);

  useEffect((): any => {
    window.addEventListener('resize', resizeHandler);
    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  });

  return (
    <DraggableContext.Provider value={value}>
      <div className="flex flex-col min-h-screen overflow-hidden">
        <Head>
          <meta property="og:site_name" content="Purdue Hackers" />
          <meta property="og:name" content="Purdue Hackers" />
          <meta property="og:title" content="Purdue Hackers" />
          <meta
            property="og:image"
            content="https://raw.githubusercontent.com/purduehackers/site/main/public/img/intro.png"
          />
          <meta
            property="og:description"
            content="A community of students who collaborate, learn, and build kick-ass technical projects 💛⚡️"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="og:type" content="website" />
          <title>Purdue Hackers</title>
        </Head>
        <Hero />
        <hr className="border-2 border-black border-dashed" />
        <Email />
        <hr className="border-2 border-black border-dashed" />
        <Community />
        <Workshops
          fetchedWorkshops={fetchedWorkshops}
          randomBarCode={randomBarCode}
        />
        <HackNight
          fetchedHackNights={fetchedHackNights}
          upcomingHackNight={upcomingHackNight}
        />
        <JoinUs />
        <Footer />
      </div>
    </DraggableContext.Provider>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  // const fetchedEvents: IEvent[] = await fetchEvents();
  const fetchedEvents: IEvent[] = [];

  // sort for workshops and hack nights
  let numWorkshops = 3;
  let numHackNights = 5;
  let fetchedWorkshops: IEvent[] = [];
  let fetchedHackNights: IEvent[] = [];
  let upcomingHackNight: IEvent = {
    name: '',
    //date: new Date(2024, 8, 20, 20, 0, 0), // temp manually entered date
    date: new Date(),
    description: '',
    rsvp: '',
    img: '',
    location: 'The Bechtel Center'
  };

  let today = new Date();

  for (let i = 0; i < fetchedEvents.length; i++) {
    if (
      fetchedEvents[i].date >= today &&
      fetchedEvents[i].name.includes('Hack Night')
    ) {
      upcomingHackNight = fetchedEvents[i];
    } else if (
      fetchedHackNights.length < numHackNights &&
      fetchedEvents[i].img &&
      fetchedEvents[i].date < today &&
      fetchedEvents[i].name.includes('Hack Night')
    ) {
      fetchedHackNights.push(fetchedEvents[i]);
    } else if (
      fetchedWorkshops.length < numWorkshops &&
      fetchedEvents[i].img &&
      fetchedEvents[i].date < today &&
      fetchedEvents[i].name.includes('Workshop')
    ) {
      fetchedWorkshops.push(fetchedEvents[i]);
    }
  }

  // generate barcode
  let randomBarCode = '';
  for (let i = 0; i < 5; i++) {
    randomBarCode += Math.floor(Math.random() * 10);
    randomBarCode += '    ';
  }

  return {
    props: {
      fetchedWorkshops: JSON.parse(JSON.stringify(fetchedWorkshops)),
      fetchedHackNights: JSON.parse(JSON.stringify(fetchedHackNights)),
      upcomingHackNight: JSON.parse(JSON.stringify(upcomingHackNight)),
      randomBarCode
    },
    revalidate: 60
  };
};

export default Home;
