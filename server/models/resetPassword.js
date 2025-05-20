const { Schema, model } = require("mongoose");

const ResetUserPasswordSchema = new Schema(
    {
        userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
        token: {
            type: String,
            required: true
        },
    },
    { timestamps: true }
);

ResetUserPasswordSchema.index({ createdAt: 1 }, { expireAfterSeconds: 3600 });

module.exports = model("ResetUserPassword", ResetUserPasswordSchema, 'reset-password');
