import type { NextApiRequest, NextApiResponse } from 'next'
import { table, base } from "../../utils/table"

interface IEvent {
  name: string
  date: Date
  description: string
  rsvp: number
  // 'Recap Images': Array<AirtableAttachment>
}

const filterStrings = [
  'Test Event',
  'The Ultimate Future Event'
]

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const { method } = req;
  switch (method) {
    case 'GET':
      const events:IEvent[] = [];
      table.select({
        // maxRecords: 10,
        // view: "Upcoming Events"
      }).eachPage(function page(records, fetchNextPage) {
        
        RecordsLoop:
        for (const record of records) {
          const eventName = record.fields['Event Name'] as string
          const eventDateStr = record.fields['Event Date & Start Time'] as string
          const eventDate = new Date(eventDateStr)

          // maybe there is a better way to filter out events
          for (const string of filterStrings) {
            if (eventName.substring(0, string.length) == string) {
              continue RecordsLoop;
            }
          }
          
          events.push(
            {
              name: eventName,
              date: eventDate,
              description: record.fields['Event Description'] as string,
              rsvp: record.fields['RSVP Count'] as number
            }
          )
        }
        fetchNextPage();
      }, function done(err) {
        const sortedEvents:IEvent[] = events.sort((a, b) => {
          return a.date >= b.date ? -1 : 1;
        })
        if (err) {
          console.error(err);
          res.status(200).json(sortedEvents);
        }
        console.log("called")
        res.status(200).json(sortedEvents);
      })


      // , function done(err) {
      //   if (err) {
      //     console.error(err);
      //   }
      //   const sortedEvents:IEvent[] = events.sort((a, b) => {
      //     return a.date >= b.date ? -1 : 1;
      //   })
      //   console.log("hi");
      //   console.log(sortedEvents);
      //   res.status(200).json(sortedEvents);
      // })
  }
}

export default handler