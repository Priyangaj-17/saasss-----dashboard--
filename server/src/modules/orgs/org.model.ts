import mongoose from "mongoose";

const orgSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    ownerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    plan: {
      type: String,
      enum: ["free", "pro", "enterprise"],
      default: "free",
    },
  },
  { timestamps: true }
);

export const Organization = mongoose.model("Organization", orgSchema);
