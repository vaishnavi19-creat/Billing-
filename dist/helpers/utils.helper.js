"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getShopTypeByShopTypeId = exports.getShopTypeIds = void 0;
const constants_1 = require("../constants/constants");
const getShopTypeIds = () => {
    return constants_1.SHOP_TYPES.map(shopType => shopType.shopTypeId);
};
exports.getShopTypeIds = getShopTypeIds;
const getShopTypeByShopTypeId = (shopTypeId) => {
    return constants_1.SHOP_TYPES.filter(shopType => shopType.shopTypeId === shopTypeId);
};
exports.getShopTypeByShopTypeId = getShopTypeByShopTypeId;
