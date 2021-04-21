import mongoose from "mongoose";

const Users = new mongoose.Schema({
  callsign: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

export const UsersModel = mongoose.model("Users", Users);
