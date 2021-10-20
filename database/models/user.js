const mongoose = require('mongoose')

const userScheme = new mongoose.Schema(
  {
    chat_id: {
      type: String,
    },
    login: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
    date: {
      type: String,
    },
  },
  { versionKey: false }
)

module.exports = userScheme
