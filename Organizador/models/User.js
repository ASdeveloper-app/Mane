const {
  model,
  Schema
} = require("mongoose");
const PLM = require("passport-local-mongoose");

const userSchema = new Schema({
  email: String,
  name: String,
  facebookID: String,
  googleID: String,
  image: {
    type: String,
    default: 'https://www.endeavorcareers.com/wp-content/uploads/2017/03/default-profile-pic.png'
  },
  role: {
    type: String,
    enum: ["ADMIN", "GUEST"]
  }
}, {
  timestamps: true
});

userSchema.plugin(PLM, {
  usernameField: "email"
});

module.exports = model("User", userSchema);