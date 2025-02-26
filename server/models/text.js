const { Schema, model } = require("mongoose");

const textSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    title: { type: String, required: true, trim: true },
    source: { type: String },
    content: { type: String },
    // level needs to be added once we can classify a text correctly upon upload
    // level: { type: String, enum: ["A1", "A2", "B1", "B2", "C1", "C2"] },
    cards: [{ type: Schema.Types.ObjectId, ref: "Card" }],
    tags: [{ type: Schema.Types.ObjectId, ref: "Tag" }],
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },
  },
  { timestamps: true }
);

module.exports = model("Text", textSchema);
