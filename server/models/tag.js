const { Schema, model } = require("mongoose");

const tagSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    name: { type: String, unique: true },
    description: { type: String },
  },
  { timestamps: true }
);

module.exports = model("Tag", tagSchema);
