const nodemailer = require('nodemailer')

module.exports = async (appeal) => {
  let transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  })

  let emails = await Email.find()
  let to
  emails.map((e) => (to += `${e.email}, `))

  let subject, html
  if (appeal.type === 'reclamation') {
    subject = `Новая рекламация к заказу №${appeal.orderId} в боте @JetterSupportBot`
    html = `
    <div>
        <h1>Подробная информация о рекламации доступна по ссылке:</h1>
        <a href="">Перейти к рекламации</a>
    </div>
`
  } else {
    subject = `Новое сообщение в боте @JetterSupportBot`
    html = `
    <div>
        <h1>Подробная информация доступна по ссылке:</h1>
        <a href="">Перейти к сообщению</a>
    </div>
`
  }

  await transporter.sendMail({
    from: process.env.SMTP_USER,
    to,
    subject,
    text: '',
    html,
  })
}
