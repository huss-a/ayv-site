import mongoose from "mongoose";

const Users = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  name: String,
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

export const UsersModel =  mongoose.model("Users", Users);
