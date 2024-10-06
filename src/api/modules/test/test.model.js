const mongoose = require('mongoose')
const MainConnection = require('@/')
const Schema = mongoose.Schema

const testSchema = new Schema(
  {
    name: { type: String },
  },
  { timestamps: true },
)

// testSchema.index({ name: "text" }, { weights: { name: 2 } });

module.exports.TestModel = MainConnection.model('Test', testSchema)
