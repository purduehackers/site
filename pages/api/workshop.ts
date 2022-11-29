import type { NextApiRequest, NextApiResponse } from 'next'
import { table, base } from "../../utils/table"
import IEvent from '../../utils/IEvent'

const filterStrings = [
  'Test Event',
  'The Ultimate Future Event',
  'Hack Night'
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
      }).eachPage(function page(records, fetchNextPage) {
        
        RecordsLoop:
        for (const record of records) {
          const eventName = record.fields['Event Name'] as string
          const eventDateStr = record.fields['Event Date & Start Time'] as string
          const eventDate = new Date(eventDateStr)
          const recapImg = record.fields['Recap Images'] ?? []

          // maybe there is a better way to filter out events
          for (const string of filterStrings) {
            if (eventName.substring(0, string.length) == string) {
              continue RecordsLoop;
            }
          }

          // only display events with images
          if (recapImg[0] === undefined) continue
          
          events.push(
            {
              name: eventName,
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
        if (err) {
          console.error(err);
          res.status(500).json({ message: 'Error occurs when fetching events' });
        }
        const sortedEvents:IEvent[] = events.sort((a, b) => {
          return a.date >= b.date ? -1 : 1;
        })
        res.status(200).json(sortedEvents);
      })
  }
}

export default handler