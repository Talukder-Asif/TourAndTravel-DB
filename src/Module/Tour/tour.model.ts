import { model, Schema } from "mongoose";

const tourSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  startLocation: {
    type: String,
    default: "Sirajganj",
    required: true,
  },
  destination: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ["adventure", "relaxation", "hiking"],
    default: "adventure",
    required: true,
  },
  ratting: {
    type: String,
    enum: ["Good", "Average"],
    default: "Average",
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  images: {
    type: [String],
  },
});

export const Tour = model("Tour", tourSchema);
