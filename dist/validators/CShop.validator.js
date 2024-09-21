"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CShopValidator = void 0;
const express_validator_1 = require("express-validator");
class CShopValidator {
    static validateGetAllShops() {
        console.log('Validating validateGetAllShops request....');
        return [
            (0, express_validator_1.query)('limit', 'Please provide the valid limit.').trim().escape().isNumeric().notEmpty(),
            (0, express_validator_1.query)('pageNumber', 'Please provide the valid page number.').trim().escape().isNumeric().notEmpty(),
        ];
    }
    static validateFilterShops() {
        console.log('Validating validateFilterShops request....');
        return [
            (0, express_validator_1.query)('limit', 'Please provide the valid limit.').optional().trim().escape().isNumeric(),
            (0, express_validator_1.query)('pageNumber', 'Please provide the valid page number.').optional().trim().escape().isNumeric(),
            (0, express_validator_1.body)('shopTypeId', 'Please provice numeric shop type id').optional().trim().escape().isNumeric(),
            (0, express_validator_1.body)('shopCountryId', 'Please provice numeric shop country id').optional().trim().escape().isNumeric(),
            (0, express_validator_1.body)('shopStateId', 'Please provice numeric shop state id').optional().trim().escape().isNumeric(),
            (0, express_validator_1.body)('shopStatus', 'Please provice boolean shop status').optional().trim().escape().isBoolean(),
        ];
    }
}
exports.CShopValidator = CShopValidator;
