const mongoose = require('mongoose')
const MainConnection = require('@/database/init.mongo')

const { Schema } = mongoose

const userSchema = new Schema(
  {
    name: { type: String },
  },
  { timestamps: true },
)

// userSchema.index({ name: "text" }, { weights: { name: 2 } });

module.exports.UserModel = MainConnection.model('User', userSchema)
