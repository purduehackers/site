import WorkshopCard from "./workshop-card"
import { useState, useEffect } from "react";
import IEvent from "../utils/IEvent";
import Image from "next/image";

const Workshops = ({ fetchedEvents }) => {
  return(
    <div className="bg-[url('/img/news_paper_bg.jpg')] bg-cover font-alegre">
      <div className="min-h-screen">
        <div className="mt-3">
          <div className="grid grid-cols-2">
            <h1 className="p-5 text-5xl text-right">Workshops</h1>
            <div className="relative w-full h-full">
              <Image
                src={"/ph-logo.png"}
                alt="Purdue Hackers Logo"
                layout='fill'
                objectFit='contain'
              ></Image>
            </div>
          </div>
          
          {/* <div className="grid grid-cols-5">
            <div className="p-5">
              <div className="p-2 border-4 border-slate-800">
                <h1 className="font-bold">Today's Weather:</h1>
                Good day, Sunny :D <br />
                Cloud being gassy...
              </div>
            </div>
            <div className="col-span-3">
              <h1 className="p-5 text-5xl text-center">Workshops</h1>
            </div>
            <div className="p-5">
              <div className="p-2 border-4 border-slate-800">
                <h1 className="font-bold">Today's Sponsor:</h1>
                We will have sponsors very soon :D
              </div>
            </div>
          </div> */}
          <div className="w-full h-0.5 mt-3 bg-slate-700"></div>
          <div className="grid grid-cols-5">
            
            {/* mayber link price to send us a coffee? */}
            <div className="text-sm text-center uppercase">Price 1$</div>
            <div className="col-span-3 text-center capitalize text-md">Purdue Hackers Inc</div>
            <div className="text-sm text-center uppercase">Issue # 10</div>
          </div>
          <div className="w-full h-0.5 bg-slate-700"></div>
          <div className="grid lg:grid-cols-3 justify-items-center sm:grid-cols-1">
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