const { Schema, model } = require("mongoose");
const bcrypt = require('bcrypt')

//Number of rounds of encryption
const SALT_ROUNDS = 6

const userSchema = new Schema({
  name: { type: String, required: true },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    trim: true,
    minLength: 3,
    required: true,
  },
  gamesaves: []
}, {
    timestamps: true,
    // Even though it's hashed - don't serialize the password
    toJSON: {
        //doc is the original document or data stored and the ret is what is sent back when called
        transform: function(doc, ret) {
          delete ret.password;
          return ret;
        }
      }
});

userSchema.pre('save', async function(next) {
    // 'this' is the user doc
    if (!this.isModified('password')) return next();
    // update the password with the computed hash
    this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
    return next();
  });

module.exports = model("User", userSchema);
