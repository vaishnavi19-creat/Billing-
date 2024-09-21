"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shopTypeName = exports.shopTypeID = void 0;
var shopTypeID;
(function (shopTypeID) {
    shopTypeID[shopTypeID["GENERAL_STORE_SHOP_TYPE"] = 1] = "GENERAL_STORE_SHOP_TYPE";
    shopTypeID[shopTypeID["MEDICAL_STORE_SHOP_TYPE"] = 2] = "MEDICAL_STORE_SHOP_TYPE";
    shopTypeID[shopTypeID["CLOTHS_SHOP_TYPE"] = 3] = "CLOTHS_SHOP_TYPE";
    shopTypeID[shopTypeID["FOOTWARE_SHOP_TYPE"] = 4] = "FOOTWARE_SHOP_TYPE";
    shopTypeID[shopTypeID["HARDWARE_SHOP_TYPE"] = 5] = "HARDWARE_SHOP_TYPE";
})(shopTypeID || (exports.shopTypeID = shopTypeID = {}));
var shopTypeName;
(function (shopTypeName) {
    shopTypeName["GENERAL_STORE_SHOP_TYPE"] = "GENERAL STORE";
    shopTypeName["MEDICAL_STORE_SHOP_TYPE"] = "MEDICAL STORE";
    shopTypeName["CLOTHS_SHOP_TYPE"] = "CLOTHS STORE";
    shopTypeName["FOOTWARE_SHOP_TYPE"] = "FOOTWARE STORE";
    shopTypeName["HARDWARE_SHOP_TYPE"] = "HARDWARE STORE";
})(shopTypeName || (exports.shopTypeName = shopTypeName = {}));
