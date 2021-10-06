"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateAssets = exports.getAllAssets = void 0;
const model_1 = __importDefault(require("./model"));
const mongoose_1 = require("mongoose");
function getAllAssets(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        model_1.default.find({}, (err, assets) => {
            if (err) {
                console.log("error", err);
                res.status(500).json(err);
                return;
            }
            console.log(assets);
            res.status(200).json(assets);
        });
    });
}
exports.getAllAssets = getAllAssets;
function updateAssets(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            console.log(req.body);
            const requestStack = req.body.map((_a) => {
                var { _delete, _id } = _a, data = __rest(_a, ["_delete", "_id"]);
                if (_delete && _id) {
                    return {
                        deleteOne: {
                            filter: { _id: new mongoose_1.Types.ObjectId(_id) },
                        },
                    };
                }
                if (!_delete && _id) {
                    return {
                        updateOne: {
                            filter: { _id: new mongoose_1.Types.ObjectId(_id) },
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
            const result = yield model_1.default.bulkWrite(requestStack);
            console.log(result);
            res.status(201).json(result);
        }
        catch (e) {
            console.log(e);
            res.status(500).json({ message: "error", e });
        }
    });
}
exports.updateAssets = updateAssets;
