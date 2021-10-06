import { Router } from "express";
import { getAllAssets, updateAssets } from "./Assets";

const elementsRouter = Router();

elementsRouter.get("/", getAllAssets);
elementsRouter.put("/", updateAssets);

export default elementsRouter;
