const { Schema, model } = require("mongoose");

const cardSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    text: { type: Schema.Types.ObjectId, ref: "Text" },
    decks: [{ type: Schema.Types.ObjectId, ref: "Deck" }],
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },
    frontProperties: {
      traditional: { type: String },
      easier: { type: String },
      pinyin: { type: String },
    },
    backProperties: {
      meaning: { type: String },
    },
  },
  { timestamps: true }
);

module.exports = model("Card", cardSchema);
