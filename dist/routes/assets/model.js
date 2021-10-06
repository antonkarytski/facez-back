"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const modelsNames_1 = require("../modelsNames");
const AssetSchema = new mongoose_1.default.Schema({
    node: String,
    offset: {
        x: Number,
        y: Number,
    },
    uniqKey: String,
    scale: Number,
    rotation: Number,
    token: { type: String, required: false },
    owner: { type: String, required: false },
});
const Assets = mongoose_1.default.model(modelsNames_1.Asset, AssetSchema);
exports.default = Assets;
