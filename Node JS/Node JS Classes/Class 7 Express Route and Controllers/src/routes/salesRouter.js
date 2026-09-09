import express from "express";
import customersController from "../controllers/customersController.js";

const salesRouter = express.Router();

salesRouter.get("/customers", customersController);

export default salesRouter;
