import mongoose from "mongoose";
import dotenv from "dotenv";
import { app } from "./src/app/app.js";

dotenv.config();
const port = process.env.PORT;
mongoose.set("strictQuery", true);

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);

    console.log("Succes Connect to DB");
  } catch (error) {
    console.log(error);
  }
};

app.listen(port, () => {
  connectDB();
  console.log("Server running in port 5000");
});
