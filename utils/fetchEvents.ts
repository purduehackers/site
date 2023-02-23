import { SanityEvent, IEvent } from './interfaces/SanityEvent'

export async function fetchEvents(): Promise<IEvent[]> {
  return new Promise((resolve, reject) => {
    const events: IEvent[] = []

    const groqFilter = `*[_type == "event" %26%26 (!unlisted || !defined(unlisted))] | order(end desc)`
    fetch(
      `https://api.purduehackers.com/events?groq=${groqFilter} {
        ...,
        "recapImages": recapImages[].asset->{
          ...,
          metadata
        }
      }`
    )
      .then((r) => r.json())
      .then((records: SanityEvent[]) => {
        for (const event of records) {
          const eventDateStr = event.start
          const eventDate = new Date(eventDateStr)
          const recapImg = event.recapImages ? event.recapImages[0] : {url: ''}
          let participantCount = ''

          for (let statNum = 1; statNum <= 3; statNum++) {
            if (event.stat1 && event.stat1.label === 'people') {
              participantCount = event.stat1.data
            } else if (event.stat2 && event.stat2.label === 'people') {
              participantCount = event.stat2.data
            } else if (event.stat3 && event.stat3.label === 'people') {
              participantCount = event.stat3.data
            }
          }

          events.push({
            name: event.name,
            date: eventDate,
            description: event.pastEventDesc,
            rsvp: participantCount,
            img: recapImg.url,
            location: event.loc
          })
        }
        resolve(events)
      })
      .catch((err) => reject(err))
  })
}
