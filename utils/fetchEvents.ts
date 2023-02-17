import { SanityEvent, IEvent } from './interfaces/SanityEvent'

export async function fetchEvents(): Promise<IEvent[]> {
  return new Promise((resolve, reject) => {
    const events: IEvent[] = []
    fetch(
      `https://api.purduehackers.com/events?groq=*[_type == "event" %26%26 (!unlisted || !defined(unlisted)) %26%26 length(recapImages) > 0 %26%26 name match "Workshop" %26%26 (stat1.label match "people" || stat2.label match "people" || stat3.label match "people")] | order(end desc) [0...3] {
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
          const recapImg = event.recapImages[0] ?? []
          let participantCount = ''

          for (let statNum = 1; statNum <= 3; statNum++) {
            if (event.stat1.label === 'people') {
              participantCount = event.stat1.data
            } else if (event.stat2.label === 'people') {
              participantCount = event.stat2.data
            } else if (event.stat3.label === 'people') {
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
