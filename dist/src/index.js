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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _server_1 = __importDefault(require("@server"));
const Logger_1 = __importDefault(require("@shared/Logger"));
const mongoose_1 = __importDefault(require("mongoose"));
const port = Number(process.env.PORT || 3000);
function start() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            console.log(process.env.MONGO_URI);
            if (process.env.MONGO_URI) {
                yield mongoose_1.default.connect(process.env.MONGO_URI);
            }
            _server_1.default.listen(port, () => {
                Logger_1.default.info("Express server started on port: " + port);
            });
        }
        catch (e) {
            console.log("Server Error", e.message);
            process.exit(1);
        }
    });
}
start();
