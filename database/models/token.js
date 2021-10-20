const mongoose = require('mongoose')

const appealScheme = new mongoose.Schema(
  {
    user: {
      type: String,
      required: true,
    },
    refreshToken: {
      type: String,
      required: true,
    },
  },
  { versionKey: false }
)

module.exports = appealScheme
