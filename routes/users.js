const mongoose = require("mongoose");
const plm = require("passport-local-mongoose");

mongoose.connect("mongodb://localhost:27017/insta-c");

const userShema = mongoose.Schema({
  username: String,
  name: String,
  email: String,
  password: String,
  profileImage: String,
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
});

// Used to setup serialise user and deserialise user
userShema.plugin(plm);

module.exports = mongoose.model("User", userShema);
