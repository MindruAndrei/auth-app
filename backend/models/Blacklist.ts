import mongoose from "mongoose";

const BlacklistSchema = new mongoose.Schema(
    {
        token: {
            type: String,
            required: true,
            ref: "UserEntry",
        },
    },
    { timestamps: true }
);

const Blacklist = mongoose.model("blacklist", BlacklistSchema);
export default Blacklist;