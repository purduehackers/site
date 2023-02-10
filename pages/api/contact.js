export default function (req, res) {
    require('dotenv').config()
    const PASSWORD = process.env.SEND_APP_PASSWORD

    let nodemailer = require('nodemailer')

    const transporter = nodemailer.createTransport({
        port: 465,
        host: 'smtp.gmail.com',
        auth: {
            user: 'ph.ghostmailer@gmail.com',
            pass: `${PASSWORD}`,
        },
        secure: true,
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
            return res.status(error.statusCode || 500).json({ error: error.message })
        } else {
            console.log(info)
            return res.status(200).json({ error: "" })
        }
    })
}