import WorkshopCard from "./card"
import { useState, useEffect } from "react";
import IEvent from "../utils/IEvent";

const Workshops = () => {
  const [events, setEvents] = useState<IEvent[]>([]);

  const fetchEvents = async() => {
    const response = await fetch('/api/workshop', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    });
    console.log(response)

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const fetchedEvents = await response.json();
    setEvents(fetchedEvents.slice(0,3));
  }

  useEffect(() => {
    fetchEvents();
  }, []);

  // console.log(events)

  return(
    <div className="bg-[url('/img/news_paper_bg.jpg')] bg-cover font-alegre">
      <div className="min-h-screen">
        <div className="mt-3">
          <div className="grid grid-cols-5">
            <div className="p-5">
              <div className="p-2 border-4 border-slate-800">
                <h1 className="font-bold">Today's Weather:</h1>
                Good day, Sunny :D <br />
                Cloud being gassy...
              </div>
            </div>
            <div className="col-span-3">
              <h1 className="p-5 text-center text-8xl">Workshops</h1>
            </div>
            <div className="p-5">
              <div className="p-2 border-4 border-slate-800">
                <h1 className="font-bold">Today's Sponsor:</h1>
                We will have sponsors very soon :D
              </div>
            </div>
          </div>
          <div className="w-full h-1 mt-3 bg-slate-700"></div>
          <div className="grid grid-cols-3">
            <div className="text-2xl text-center uppercase">Price 10 Cents</div>
            <div className="text-2xl text-center capitalize">Purdue Hackers Inc</div>
            <div className="text-2xl text-center uppercase">Issue # 10</div>
          </div>
          <div className="w-full h-1 bg-slate-700"></div>
          <div className="grid grid-cols-3 mt-4 justify-items-center">
            {events.map((event) => {
              return(
                <WorkshopCard
                  name={event.name}
                  date={event.date}
                  description={event.description}
                  rsvp={event.rsvp}
                  img={event.img}
                  location={event.location}
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
