import chalk from "chalk";
import mongoose from "mongoose";

async function dbConnect(uri:string) {
  try {
    await mongoose.connect(uri, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    console.log(chalk.bold(chalk.green`Connected to MongoDB!`));
  } catch (err) {
    console.log(err);
  }
}
export default dbConnect;
