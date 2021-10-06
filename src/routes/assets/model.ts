import mongoose from "mongoose";
import { Asset } from "../modelsNames";

export type IAsset = {
  node: string;
  offset: {
    x: number;
    y: number;
  };
  scale: number;
  rotation: number;
  uniqKey: string;
  token?: string;
  owner?: string;
  _id?: string;
  _delete?: boolean;
};

const AssetSchema = new mongoose.Schema({
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

const Assets = mongoose.model(Asset, AssetSchema);
export default Assets;
