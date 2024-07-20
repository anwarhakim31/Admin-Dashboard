import express from "express";
import { getUser } from "../controller/general-controller.js";

export const generalRouter = express.Router();

generalRouter.get("/user/:id", getUser);
