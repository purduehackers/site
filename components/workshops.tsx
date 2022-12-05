import WorkshopCard from './workshop-card'
import splitArticle from '../utils/splitArticle'
import Image from 'next/image'
import IEvent from '../utils/interfaces/IEvent'
import Link from 'next/link'

const Workshops = ({
  fetchedEvents,
  randomBarCode
}: {
  fetchedEvents: IEvent[]
  randomBarCode: string
}) => {
  return (
    <div className="bg-[url('/img/news_paper_bg.jpg')] bg-cover font-alegre">
      <div className="min-h-screen">
        <div className="mt-3">
          <div className="grid grid-cols-5">
            <div className="flex justify-center">
              <div className="hidden w-48 p-5 md:block">
                <div className="p-2 border-2 border-slate-800">
                  <p>"All things are ready if our minds be so."</p>
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
          <div className="grid grid-cols-5 items-center">
            {/* mayber link price to send us a coffee? */}
            <div className="text-sm text-center uppercase">Price %10</div>
            <div className="col-span-3 text-center capitalize text-md">
              Purdue Hackers Inc
            </div>
            <div className="text-sm text-center uppercase">Issue #∞</div>
          </div>
          <div className="w-full h-0.5 bg-slate-700"></div>
          <div className="grid lg:grid-cols-3 justify-items-center sm:grid-cols-1 mb-12">
            {fetchedEvents.map((event) => {
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
              )
            })}
          </div>
          <div className="flex justify-center items-center sm:items-stretch mb-4 flex-col sm:flex-row gap-2">
            <div className="w-11/12 sm:w-1/2 xl:w-5/12 border-2 border-black border-dashed p-4">
              <p className="sm:hidden">
                {splitArticle[0]} {splitArticle[1]}
              </p>
              <div className="hidden sm:flex flex-row justify-center gap-x-4">
                <p>{splitArticle[0]}</p>
                <p>{splitArticle[1]}</p>
              </div>
            </div>
            <button className="view-workshops-button flex justify-center items-center border-2 border-black p-2 w-48 font-bold rounded hover:bg-black hover:text-white transition leading-tight">
              <Link href="#">
                <a href="https://events.purduehackers.com" target="_blank">
                  <p className="text-center text-xl">View All Workshops</p>
                  <p className="view-workshops-arrow text-lg">---{'>'}</p>
                </a>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Workshops
