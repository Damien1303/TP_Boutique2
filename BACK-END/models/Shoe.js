import mongoose from "mongoose";
import mongooseUniqueValidator from "mongoose-unique-validator";

const shoeSchema = mongoose.Schema(
  {
    nom: String,
    prix: Number,
    description: String,
    image: String,
    like:  { type: Number, default: 0 },
  },
  {
    timestamps: { createdAt: true },
  }
);

shoeSchema.plugin(mongooseUniqueValidator);

export default mongoose.model("Shoe", shoeSchema);
