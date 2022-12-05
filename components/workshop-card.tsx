import Image from 'next/image'
import { Remarkable } from 'remarkable'
import IEvent from '../utils/interfaces/IEvent'
import { GithubSlugger } from 'github-slugger-typescript'

const WorkshopCard = (props: IEvent) => {
  const md = new Remarkable()
  const parsedDescription = md.render(props.description)
  const date = new Date(props.date)
  const slugger = new GithubSlugger()
  const eventUrl =
    'https://events.purduehackers.com/' + slugger.slug(props.name)

  return (
    <div className="max-w-sm mx-4 mt-2 overflow-hidden bg-white rounded border-2 border-slate-800 shadow-lg">
      <div className="px-6 py-4">
        <a
          className="mb-2 text-xl font-bold underline hover:text-amber-500"
          href={eventUrl}
          target="_blank"
        >
          {props.name}
        </a>
        <p className="text-slate-500">{date.toDateString()}</p>
        <div className="mt-4 h-40 rounded overflow-scroll text-base text-gray-700 px-2 pb-2 pt-1 border-2 border-slate-800 border-dashed">
          <div dangerouslySetInnerHTML={{ __html: parsedDescription }}></div>
        </div>
      </div>
      <div className="relative w-full h-52">
        <Image src={props.img} layout="fill" objectFit="contain"></Image>
      </div>

      <div className="px-6 pt-4 pb-2">
        <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
          {props.location}
        </span>
        <span className="inline-block px-3 py-1 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
          Hackers: {props.rsvp}
        </span>
      </div>
    </div>
  )
}

export default WorkshopCard
