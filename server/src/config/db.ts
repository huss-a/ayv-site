import mongoose from "mongoose";

async function dbConnect() {
  try {
    await mongoose.connect(
      "mongodb+srv://huss:uheh@ayva-site.gwp7h.mongodb.net/AYV-Site-DB?retryWrites=true&w=majority",
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
      }
    );
    console.log("Connected to MongoDB!");
  } catch (err) {
    console.log(err);
  }
}
export default dbConnect;
