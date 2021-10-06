"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Assets_1 = require("./Assets");
const elementsRouter = (0, express_1.Router)();
elementsRouter.get("/", Assets_1.getAllAssets);
elementsRouter.put("/", Assets_1.updateAssets);
exports.default = elementsRouter;
