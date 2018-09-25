import mongoose from "mongoose";
const Schema = mongoose.Schema;

const SearchHistorySchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  history: [
    {
      repoName: String,
      htmlUrl: String,
      updated_at: {
        type: Date,
        default: Date.now
      }
    }
  ]
});

export default mongoose.model("search-histories", SearchHistorySchema);
