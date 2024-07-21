import express from "express";
import {
  getProducts,
  getCustomers,
  getTransaction,
} from "../controller/client-controller.js";

export const clientRouter = express.Router();

clientRouter.get("/products", getProducts);
clientRouter.get("/customers", getCustomers);
clientRouter.get("/transaction", getTransaction);
