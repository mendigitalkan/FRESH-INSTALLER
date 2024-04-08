"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePushToken = void 0;
const http_status_codes_1 = require("http-status-codes");
const response_1 = require("../../utilities/response");
const sequelize_1 = require("sequelize");
const user_1 = require("../../models/user");
const updatePushToken = async (req, res) => {
    const requestBody = req.body;
    try {
        const newData = {
            ...(requestBody.userFcmId.length > 0 && {
                userFcmId: requestBody.userFcmId
            })
        };
        console.log(req.body.user);
        await user_1.UserModel.update(newData, {
            where: {
                deleted: { [sequelize_1.Op.eq]: 0 },
                userId: { [sequelize_1.Op.eq]: req.body?.user?.userId }
            }
        });
        const response = response_1.ResponseData.default;
        response.data = { message: 'success' };
        return res.status(http_status_codes_1.StatusCodes.OK).json(response);
    }
    catch (error) {
        const message = `unable to process request! error ${error.message}`;
        const response = response_1.ResponseData.error(message);
        return res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).json(response);
    }
};
exports.updatePushToken = updatePushToken;
