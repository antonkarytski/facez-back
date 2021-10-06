import { Router } from "express";
import elementsRouter from "./assets";

const BaseRouter = Router();
BaseRouter.use("/assets", elementsRouter);
export default BaseRouter;
