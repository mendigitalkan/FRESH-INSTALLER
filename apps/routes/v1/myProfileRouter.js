"use strict";
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.myProfileRouter = void 0;
const express_1 = __importDefault(require("express"));
const middlewares_1 = require("../../middlewares");
const find_1 = require("../../controllers/my-profile/find");
const update_1 = require("../../controllers/my-profile/update");
const myProfileRouter = (app) => {
    const router = express_1.default.Router();
    app.use('/api/v1/my-profile', middlewares_1.middleware.useAuthorization, router);
    router.get('/', async (req, res) => await (0, find_1.findMyProfile)(req, res));
    router.patch('/', async (req, res) => await (0, update_1.updateMyProfile)(req, res));
};
exports.myProfileRouter = myProfileRouter;
