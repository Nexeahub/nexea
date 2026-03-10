import mongoose from "mongoose";

const RegistrationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Full name is required"],
      trim: true,
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      lowercase: true,
      trim: true,
    },

    whatsapp: {
      type: String,
      required: [true, "WhatsApp number is required"],
      trim: true,
    },

    track: {
      name: {
        type: String,
        required: true,
      },
      cohort: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      currency: {
        type: String,
        default: "₦",
      },
    },

    paymentStatus: {
      type: String,
      enum: ["pending", "paid", "failed"],
      default: "pending",
    },

    paymentReference: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.models.Registration ||
  mongoose.model("Registration", RegistrationSchema);
