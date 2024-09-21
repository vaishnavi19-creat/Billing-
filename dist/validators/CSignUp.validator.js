"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CSignUpValdator = void 0;
const express_validator_1 = require("express-validator");
const utils_helper_1 = require("../helpers/utils.helper");
class CSignUpValdator {
    static signUpValidator() {
        console.log('Validating signUp request....');
        return [
            (0, express_validator_1.body)('shopTypeId', 'Please provide the valid shop type. Hint: It should be from dropdown.').trim().escape().isNumeric().notEmpty().isIn((0, utils_helper_1.getShopTypeIds)()),
            (0, express_validator_1.body)('shopName', 'Please provide the valid shop name. Hint: It should be 5-100 characters in length.').trim().escape().isString().notEmpty().isLength({ min: 5, max: 100 }),
            (0, express_validator_1.body)('shopOwnerName', 'Please provide the valid shop owner full name. Hint: It should be 5-100 characters in length.').trim().escape().isString().notEmpty().isLength({ min: 5, max: 100 }),
            (0, express_validator_1.body)('shopAddress', 'Please provide the valid shop address. Hint: It should be 5-500 characters in length.').trim().escape().isString().notEmpty().isLength({ min: 5, max: 500 }),
            (0, express_validator_1.body)('shopCountryId', 'Please provide the valid shop country. Hint: It should be numeric value.').trim().escape().notEmpty().isNumeric(),
            (0, express_validator_1.body)('shopStateId', 'Please provide the valid shop state. Hint: It should be numeric value.').trim().escape().notEmpty().isNumeric(),
            (0, express_validator_1.body)('shopCity', 'Please provide the valid shop city. Hint: It should be 5-20 characters in length.').trim().escape().isString().notEmpty().isLength({ min: 5, max: 20 }),
            (0, express_validator_1.body)('shopCityZipCode', 'Please provide the valid 6 digit shop city zip code. Hint: It should be 6 digits in length.').trim().escape().notEmpty().isPostalCode('IN'),
            (0, express_validator_1.body)('shopMobileNumber', 'Please provide the valid shop mobile number. Hint: It should be 10 characters in length.').trim().escape().notEmpty().isMobilePhone('en-IN'),
            (0, express_validator_1.body)('shopEmailId', 'Please provide the valid shop email ID. Hint: It should be 7-50 characters in length.').trim().escape().isEmail().isLength({ min: 7, max: 50 }),
            (0, express_validator_1.body)('shopGSTNumber', 'Please provide the valid shop GST number. Hint: It should be 7-10 characters in length.').trim().escape().optional({ nullable: true }).isLength({ min: 7, max: 10 }),
        ];
    }
}
exports.CSignUpValdator = CSignUpValdator;
