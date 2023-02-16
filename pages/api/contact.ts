import { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

export default function (req: NextApiRequest, res: NextApiResponse) {
  const PASSWORD = process.env.SEND_APP_PASSWORD

  const transporter = nodemailer.createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    auth: {
      user: 'ph.ghostmailer@gmail.com',
      pass: `${PASSWORD}`
    },
    secure: true
  })
  const mailData = {
    from: 'ph.ghostmailer@gmail.com',
    to: 'purduehackers@gmail.com',
    subject: `[Received from Site] : ${req.body.subject}`,
    text: `Message from ${req.body.userEmail}\n` + req.body.message,
    html: `<p>Message from ${req.body.userEmail}</p>
                <p>${req.body.message}</p>`
  }

  transporter.sendMail(mailData, (err, info) => {
    if (err) {
      console.log(err)
      return res.status(500).json({ error: err.message })
    } else {
      console.log(info)
      return res.status(200).json({ error: '' })
    }
  })
}
