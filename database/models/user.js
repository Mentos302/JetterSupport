const mongoose = require('mongoose')

const userScheme = new mongoose.Schema(
  {
    chat_id: {
      type: String,
      required: true,
    },
  },
  { versionKey: false }
)

module.exports = userScheme
