module.exports = async (appeal, resolve) => {
  const fs = require('fs')
  const path = require('path')
  const pdf = require('html-pdf')

  let html = fs.readFileSync(path.join(__dirname, 'template.html'), 'utf8')
  const options = { format: 'Letter' }
  const { photos, orderId, text, from, date } = appeal

  const getPhotos = () => {
    let str = ''

    photos.forEach((e) => (str += `<img src=${e} />`))

    return str
  }

  html = html
    .replace('{{orderId}}', orderId)
    .replace('{{text}}', text)
    .replace('{{first_name}}', from.name)
    .replace(`{{date}}`, date)
    .replace('{{photos}}', getPhotos())

  pdf
    .create(html, options)
    .toFile(`client/public/uploads/${orderId}.pdf`, function (err, res) {
      if (err) return console.log(err)
      resolve(`${process.env.SITE_URL}/uploads/${orderId}.pdf`)
    })
}
