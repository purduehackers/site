import type { NextApiRequest, NextApiResponse } from 'next'
import { table, base } from "../../utils/table"
import IEvent from '../../utils/interfaces/IEvent'

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
        if (err) {
          console.error(err);
          return res.status(500).json({ message: 'Error occurs when fetching events' });
        }
        return res.status(200).json(events);
      })
  }
}

export default handler