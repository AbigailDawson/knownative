const { Schema, model } = require("mongoose");

const textSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    title: { type: String, required: true, unique: true, trim: true },
    source: { type: String },
    content: { type: String },
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
