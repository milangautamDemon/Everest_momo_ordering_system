import mongoose from "mongoose";

const talkSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  words: {
    type: String,
    required: true,
  },
});

export const Talk = mongoose.model("Talk", talkSchema);
export default Talk;
