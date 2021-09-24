const mongoose = require('mongoose')

const appealScheme = new mongoose.Schema(
  {
    from: {
      type: Number,
      required: true,
    },
    category: { type: String },
    reqidenty: { type: Number },
    text: { type: String },
    orderId: { type: Number },
    photos: { type: Array },
    videos: { type: Array },
    documents: { type: Array },
    date: { type: String },
    status: { type: String },
  },
  { versionKey: false }
)

module.exports = appealScheme
