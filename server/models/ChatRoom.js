const mongoose = require("mongoose");

const ChatRoomSchema = new mongoose.Schema(
  {
    name: { type: String },
    isGroup: { type: Boolean, default: false },
    members: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    admin: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
  },
  { timestamps: true }
);

module.exports = mongoose.model("ChatRoom", ChatRoomSchema);
