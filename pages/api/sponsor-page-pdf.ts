import type { NextApiRequest, NextApiResponse } from 'next'
import puppeteer from 'puppeteer'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const browser = await puppeteer.launch({ headless: 'new' })
  const page = await browser.newPage()

  await page.setExtraHTTPHeaders({
    'Puppeteer-Visit': 'true'
  })

  await page.goto('http://localhost:3000/sponsor', {
    waitUntil: 'networkidle0'
  })

  const pdf = await page.pdf({ format: 'Letter' })

  await browser.close()

  res.setHeader('Content-Type', 'application/pdf')
  res.setHeader('Content-Disposition', 'attachment; filename=download.pdf')
  res.send(pdf)
}
