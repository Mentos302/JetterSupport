module.exports = async (arr) => {
  const http = require('https')
  const fs = require('fs')

  if (arr) {
    const files = []

    for (const e of arr) {
      const fileName = e.split('/')
      const file = fs.createWriteStream(
        `client/build/uploads/${JSON.stringify(Date.now())}${
          fileName[fileName.length - 1]
        }`
      )
      const req = http.get(e, (res) => {
        res.pipe(file)
      })

      files.push(
        `${process.env.SITE_URL}/${file.path.split('/').slice(2).join('/')}`
      )
    }

    return files
  } else {
    return []
  }
}
