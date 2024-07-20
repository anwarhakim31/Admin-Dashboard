import mongoose from "mongoose";
import dotenv from "dotenv";
import { app } from "./src/app/app.js";
// import User from "./src/models/User.js";
// import Product from "./src/models/Product.js";
// import ProductStat from "./src/models/ProductStat.js";
// import { dataUser, dataProduct, dataProductStat } from "./src/data/index.js";

dotenv.config();
const port = process.env.PORT || 5000;
mongoose.set("strictQuery", true);

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);

    console.log("Successfully connected to DB");
    // await ProductStat.insertMany(dataProductStat);
  } catch (error) {
    console.error("Database connection failed:", error);
  }
};

app.listen(port, () => {
  connectDB();

  console.log(`Server running on port ${port}`);
});
