---
to: src/api/modules/<%= h.inflection.camelize(name, true) %>/<%= h.inflection.camelize(name, true) %>.model.js
---
const mongoose = require("mongoose");
const MainConnection = require("@/loaders/database");
const Schema = mongoose.Schema;

const <%= h.inflection.camelize(name, true) %>Schema = new Schema(
  {
    name: { type: String },
  },
  { timestamps: true }
);

// <%= h.inflection.camelize(name, true) %>Schema.index({ name: "text" }, { weights: { name: 2 } });

module.exports.<%= h.inflection.camelize(name) %>Model = MainConnection.model(
  "<%= h.inflection.camelize(name) %>",
  <%= h.inflection.camelize(name, true) %>Schema
);