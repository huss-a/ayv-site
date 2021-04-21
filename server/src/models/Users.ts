import mongoose from "mongoose";

const Users = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  ifcName: {
    type: String,
    required: true,
  },
  callsign: {
    type: String,
    required: true,
  },
});

export const UsersModel = mongoose.model("Users", Users);
