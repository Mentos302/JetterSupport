const mongoose = require('mongoose')

const userScheme = new mongoose.Schema(
  {
    chat_ids: {
      type: String,
      required: true,
    },
  },
  { versionKey: false }
)

module.exports = userScheme
