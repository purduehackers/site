import WorkshopCard from "./workshop-card"
import Image from "next/image";

const Workshops = ({ fetchedEvents, randomBarCode }) => {
  return(
    <div className="bg-[url('/img/news_paper_bg.jpg')] bg-cover font-alegre">
      <div className="min-h-screen">
        <div className="mt-3">
          <div className="grid grid-cols-5">
            <div className="flex justify-center">
              <div className="hidden w-48 p-5 sm:block">
                <div className="p-2 border-2 border-slate-800">
                  <p>"All things are ready if our minds be so."</p>
                  <p className="text-right">- William Shakespeare</p>
                </div>
              </div>
            </div>
            <div className="col-span-3">
              <div className="grid grid-cols-1">
                <h1 className="p-5 text-center text-9xl">Workshops</h1>
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
              <div className="hidden w-48 p-5 sm:block">
                <h1 className="font-bold tracking-widest">Late City Edition</h1>
                <p className="pb-2">weather: rainy and depressing day. A little bit of coffee and coding may help</p>
                <Image
                  src={"/img/barcode.png"}
                  alt="mysterious barcode"
                  width={200}
                  height={40}
                ></Image>
                <p className="overflow-hidden text-sm tracking-widest text-center">{randomBarCode}</p>
              </div>
            </div>
          </div>
          <div className="w-full h-0.5 mt-3 bg-slate-700"></div>
          <div className="grid grid-cols-5">
            
            {/* mayber link price to send us a coffee? */}
            <div className="text-sm text-center uppercase">Price 10$</div>
            <div className="col-span-3 text-center capitalize text-md">Purdue Hackers Inc</div>
            <div className="text-sm text-center uppercase">Issue #10</div>
          </div>
          <div className="w-full h-0.5 bg-slate-700"></div>
          <div className="grid lg:grid-cols-3 justify-items-center sm:grid-cols-1 mb-8">
            {fetchedEvents.map((event) => {
              return(
                <WorkshopCard
                  name={event.name}
                  date={event.date}
                  description={event.description}
                  rsvp={event.rsvp}
                  img={event.img}
                  location={event.location}
                  key={EventTarget.name}
                />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Workshops