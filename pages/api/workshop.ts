import type { NextApiRequest, NextApiResponse } from 'next'
import { table, base } from "../../utils/table"

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const { method } = req;
  switch (method) {
    case 'GET':
      table.select({
        maxRecords: 10,
        // view: "Upcoming Events"
      }).eachPage(function page(records, fetchNextPage) {
        records.forEach(function(record) {
          console.log('Retrieved', record.get('Event Name'));
        });
      }, function done(err) {
        if (err) {
          console.error(err);
        }
      })
  }
}

export default handler

