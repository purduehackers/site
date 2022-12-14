import IEvent from './interfaces/IEvent'
import Attachment from './interfaces/AirtableAttachment'

export async function fetchEvents(): Promise<IEvent[]> {
  return new Promise((resolve, reject) => {
    const events: IEvent[] = []
    const select = encodeURIComponent(
      JSON.stringify({
        maxRecords: 3,
        sort: [{ field: 'Event Date & End Time', direction: 'desc' }],
        filterByFormula: `
      AND(
        {Unlisted} = 0,
        FIND("Workshop", {Event Name}),
        OR(
          {Stat 1 Label} = "people",
          {Stat 2 Label} = "people",
          {Stat 3 Label} = "people"
        ),
        {Recap Images}
      )`
      })
    )
    fetch(`https://api.purduehackers.com/events?select=${select}`)
      .then((r) => r.json())
      .then((records) => {
        for (const record of records) {
          const eventDateStr = record.fields[
            'Event Date & Start Time'
          ] as string
          const eventDate = new Date(eventDateStr)
          const recapImg = (record.fields['Recap Images'] as Attachment[]) ?? []
          let participantCount = ''

          for (let statNum = 1; statNum <= 3; statNum++) {
            if (record.fields['Stat ' + statNum + ' Label'] === 'people') {
              participantCount = record.fields[
                'Stat ' + statNum + ' Data'
              ] as string
            }
          }
          events.push({
            name: record.fields['Event Name'] as string,
            date: eventDate,
            description: record.fields['Past Event Description'] as string,
            rsvp: participantCount,
            img: recapImg[0].url,
            location: record.fields['Event Location'] as string
          })
        }
        resolve(events)
      })
      .catch((err) => reject(err))
  })
}
