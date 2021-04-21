"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersModel = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var Users = new mongoose_1.default.Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    ifcName: {
        type: String,
        required: true,
    },
    callsign: {
        type: String,
        required: true,
    },
});
exports.UsersModel = mongoose_1.default.model("Users", Users);
