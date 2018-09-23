import mongoose from "mongoose";
import findOrCreate from "mongoose-findorcreate";

const UserSchema = new mongoose.Schema({
  userId: String,
  name: String,
  username: String,
  updated_at: {
    type: Date,
    default: Date.now
  }
});

UserSchema.plugin(findOrCreate);

export default mongoose.model("users", UserSchema);
