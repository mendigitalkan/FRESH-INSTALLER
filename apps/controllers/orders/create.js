"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOrder = void 0;
const http_status_codes_1 = require("http-status-codes");
const response_1 = require("../../utilities/response");
const requestCheker_1 = require("../../utilities/requestCheker");
const uuid_1 = require("uuid");
const orders_1 = require("../../models/orders");
const products_1 = require("../../models/products");
const sequelize_1 = require("sequelize");
const createOrder = async (req, res) => {
    const requestBody = req.body;
    const emptyField = (0, requestCheker_1.requestChecker)({
        requireList: ['orderProductId', 'orderOngkirPrice'],
        requestData: requestBody
    });
    if (emptyField.length > 0) {
        const message = `invalid request parameter! require (${emptyField})`;
        const response = response_1.ResponseData.error(message);
        return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json(response);
    }
    try {
        const product = await products_1.ProductModel.findOne({
            where: {
                deleted: { [sequelize_1.Op.eq]: 0 },
                productId: { [sequelize_1.Op.eq]: requestBody.orderProductId }
            }
        });
        if (product == null) {
            const message = 'product not found!';
            const response = response_1.ResponseData.error(message);
            return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json(response);
        }
        requestBody.orderTotalProductPrice =
            product?.productPrice + requestBody.orderOngkirPrice;
        requestBody.orderUserId = req.body?.user?.userId;
        requestBody.orderId = (0, uuid_1.v4)();
        await orders_1.OrdersModel.create(requestBody);
        const response = response_1.ResponseData.default;
        const result = { message: 'success' };
        response.data = result;
        return res.status(http_status_codes_1.StatusCodes.CREATED).json(response);
    }
    catch (error) {
        const message = `unable to process request! error ${error.message}`;
        const response = response_1.ResponseData.error(message);
        return res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).json(response);
    }
};
exports.createOrder = createOrder;
