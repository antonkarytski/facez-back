import { Request, Response } from "express";
import Assets, { IAsset } from "./model";
import { Types } from "mongoose";

export async function getAllAssets(req: Request, res: Response) {
  Assets.find({}, (err, assets) => {
    if (err) {
      console.log("error", err);
      res.status(500).json(err);
      return;
    }
    console.log(assets);
    res.status(200).json(assets);
  });
}

export async function updateAssets(req: Request, res: Response) {
  try {
    console.log(req.body);
    const requestStack = req.body.map(({ _delete, _id, ...data }: IAsset) => {
      if (_delete && _id) {
        return {
          deleteOne: {
            filter: { _id: new Types.ObjectId(_id) },
          },
        };
      }
      if (!_delete && _id) {
        return {
          updateOne: {
            filter: { _id: new Types.ObjectId(_id) },
            update: { $set: data },
          },
        };
      }
      return {
        insertOne: {
          document: data,
        },
      };
    });
    console.log(requestStack);
    const result = await Assets.bulkWrite(requestStack);
    console.log(result);
    res.status(201).json(result);
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "error", e });
  }
}
