import { table, base } from "./table"
import IEvent from './interfaces/IEvent'

export async function fetchData(): Promise<IEvent[]> {
  return new Promise((resolve, reject) => {
    const events:IEvent[] = [];
    table.select({
      maxRecords:3,
      sort: [
        {field: 'Event Date & End Time', direction: 'desc'},
      ],
      filterByFormula: `
      AND(
        {Unlisted} = 0,
        NOT(FIND("Hack Night", {Event Name})),
        {Recap Images}
      )`
    }).eachPage(function page(records, fetchNextPage) {
      for (const record of records) {
        const eventDateStr = record.fields['Event Date & Start Time'] as string
        const eventDate = new Date(eventDateStr)
        const recapImg = record.fields['Recap Images'] ?? []
        
        events.push(
          {
            name: record.fields['Event Name'] as string,
            date: eventDate,
            description: record.fields['Past Event Description'] as string,
            rsvp: record.fields['RSVP Count'] as number,
            img: recapImg[0].url,
            location: record.fields['Event Location'] as string,
          }
        )
      }
      fetchNextPage();
    }, function done(err) {
      resolve(events)
    })
  });
}