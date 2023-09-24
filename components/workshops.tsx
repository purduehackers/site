import WorkshopCard from './workshop-card';
import splitArticle from '../utils/splitArticle';
import Image from 'next/image';
import { IEvent } from '../utils/interfaces/SanityEvent';
import Link from 'next/link';

const Workshops = ({
  fetchedEvents,
  randomBarCode
}: {
  fetchedEvents: IEvent[];
  randomBarCode: string;
}) => {
  return (
    <div className="bg-[url('/img/news_paper_bg.jpg')] bg-cover font-alegre">
      <div className="min-h-screen">
        <div className="mt-8">
          <div className="grid grid-cols-5">
            <div className="flex justify-center">
              <div className="hidden w-48 p-5 md:block">
                <div className="p-2 border-2 border-slate-800">
                  <p>&quot;All things are ready if our minds be so.&quot;</p>
                  <p className="text-right">- William Shakespeare</p>
                </div>
              </div>
            </div>
            <div className="col-span-3">
              <div className="grid grid-cols-1">
                <h1 className="text-5xl text-center sm:p-5 md:text-8xl sm:text-6xl">
                  Workshops
                </h1>
                {/* <div className="relative w-full h-24">
                  <Image
                    src={"/ph-logo.png"}
                    alt="Purdue Hackers Logo"
                    layout='fill'
                    objectFit='contain'
                  ></Image>
                </div> */}
              </div>
            </div>
            <div className="flex justify-center">
              <div className="hidden w-48 p-5 md:block">
                <h1 className="font-bold tracking-widest">Late City Edition</h1>
                <p className="pb-2">
                  weather: rainy and depressing day. A little bit of coffee and
                  coding may help
                </p>
                <Image
                  src={'/img/barcode.png'}
                  alt="mysterious barcode"
                  width={200}
                  height={40}
                ></Image>
                <p className="overflow-hidden text-sm tracking-widest text-center">
                  {randomBarCode}
                </p>
              </div>
            </div>
          </div>
          <div className="w-full h-0.5 mt-3 bg-slate-700"></div>
          <div className="grid grid-cols-5 items-center sm:text-lg">
            {/* mayber link price to send us a coffee? */}
            <div className="text-sm text-center uppercase">Price %10</div>
            <div className="col-span-3 text-center capitalize text-md">
              Purdue Hackers Inc
            </div>
            <div className="text-sm text-center uppercase">Issue #∞</div>
          </div>
          <div className="w-full h-0.5 bg-slate-700"></div>
          <div className="flex flex-col-reverse sm:flex-col">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-row items-center gap-1 mt-6 ml-4">
                <div className="w-3.5 h-3.5 rounded-full bg-emerald-500 animate-pulse"></div>
                <p className="font-bold">
                  Live from our{' '}
                  <span className="underline hover:text-amber-500">
                    <a href="https://events.purduehackers.com" target="_blank">
                      Events site
                    </a>
                  </span>
                </p>
              </div>
              <div className="grid lg:grid-cols-3 gap-3 sm:gap-0 justify-items-center sm:grid-cols-1 mb-12 sm:mb-0">
                {fetchedEvents.map(event => {
                  return (
                    <WorkshopCard
                      name={event.name}
                      date={event.date}
                      description={event.description}
                      rsvp={event.rsvp}
                      img={event.img}
                      location={event.location}
                      key={event.name}
                    />
                  );
                })}
              </div>
            </div>
            <div className="mt-12 flex justify-center items-center sm:items-stretch mb-4 flex-col sm:flex-row gap-2">
              <div className="w-11/12 sm:w-7/12 xl:w-5/12 border-2 border-slate-800 border-dashed rounded p-4">
                <p className="sm:hidden">
                  {splitArticle[0]} {splitArticle[1]}
                </p>
                <div className="hidden sm:flex flex-row justify-center gap-x-4">
                  <p>{splitArticle[0]}</p>
                  <p>{splitArticle[1]}</p>
                </div>
              </div>
              <button className="flex justify-center items-center border-2 border-slate-800 p-2 w-48 font-bold rounded hover:bg-slate-800 hover:text-white transition ease-in-out duration-100 leading-tight">
                <Link legacyBehavior href="#">
                  <a href="https://events.purduehackers.com" target="_blank">
                    <p className="text-center text-xl">
                      View Upcoming Workshops
                    </p>
                  </a>
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workshops;
