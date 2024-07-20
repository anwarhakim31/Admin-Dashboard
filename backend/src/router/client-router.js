import express from "express";
import { getProducts } from "../controller/client-controller.js";

export const clientRouter = express.Router();

clientRouter.get("/products", getProducts);
