"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CShopService = void 0;
const errorType_enum_1 = require("../enums/errorType.enum");
const CCustomErrors_helper_1 = require("../helpers/CCustomErrors.helper");
const CShop_model_1 = require("../db/models/CShop.model");
const objShopModel = new CShop_model_1.CShopModel();
class CShopService {
    async signUp(request) {
        try {
            console.log('In CShopService => signUp() ');
            const existingShop = await this.getShopDetailsByNameZipCode(request.shopName, request.shopCityZipCode);
            if (existingShop) {
                console.log('Cought in input validation error from CShopService => signUp() existing shop name');
                throw (new CCustomErrors_helper_1.CCustomErrors(new Error(`The shop ${existingShop.shopName} already exists in the same city. Please confirm if you are ${existingShop.shopOwnerName} and may forgot the credentials.`), errorType_enum_1.errorTypeEnum.INPUT_VALIDATION_ERROR, []));
            }
            const existingShopMobileNumber = await this.getShopDetailsByShopMobileNumber(request.shopMobileNumber);
            if (existingShopMobileNumber) {
                console.log('Cought in input validation error from CShopService => signUp() existing mobile number');
                const duplicateMobileNumberError = { "errors": [{
                            "value": existingShopMobileNumber.shopMobileNumber,
                            "msg": `The shop mobile number ${existingShopMobileNumber.shopMobileNumber} is already exists. Please try with another number.`,
                            "param": "shopMobileNumber",
                            "location": "body"
                        }] };
                throw (new CCustomErrors_helper_1.CCustomErrors(new Error(`The mobile number ${existingShopMobileNumber.shopMobileNumber} already exists. Please provide another mobile number.`), errorType_enum_1.errorTypeEnum.INPUT_VALIDATION_ERROR, duplicateMobileNumberError));
            }
            const existingShopEmailId = await this.getShopDetailsByShopEmailId(request.shopEmailId);
            if (existingShopEmailId) {
                console.log('Cought in input validation error from CShopService => signUp() existing email id');
                const duplicateEmailIdError = { "errors": [{
                            "value": existingShopEmailId.shopEmailId,
                            "msg": `The shop email id ${existingShopEmailId.shopEmailId} is already exists. Please try with another email id.`,
                            "param": "shopEmailId",
                            "location": "body"
                        }] };
                throw (new CCustomErrors_helper_1.CCustomErrors(new Error(`The email id ${existingShopEmailId.shopEmailId} already exists. Please provide another email id.`), errorType_enum_1.errorTypeEnum.INPUT_VALIDATION_ERROR, duplicateEmailIdError));
            }
            const savedShop = await objShopModel.signUp(request);
            console.log(await JSON.stringify(savedShop));
            return savedShop;
        }
        catch (error) {
            throw (error);
        }
    }
    async getShopDetailsByNameZipCode(shopName, shopCityZipCode) {
        try {
            console.log('Validating existing shop from CShopService => getShopDetailsByNameZipCode()');
            return await objShopModel.getShopDetailsByNameZipCode(shopName, shopCityZipCode);
        }
        catch (error) {
            throw (new CCustomErrors_helper_1.CCustomErrors(error, errorType_enum_1.errorTypeEnum.DB_OPERATION_ERROR));
        }
    }
    async getShopDetailsByShopMobileNumber(shopMobileNumber) {
        try {
            console.log('Validating existing mobile number from CShopService => getShopDetailsByShopMobileNumber()');
            return await objShopModel.getShopDetailsByShopMobileNumber(shopMobileNumber);
        }
        catch (error) {
            throw (new CCustomErrors_helper_1.CCustomErrors(error, errorType_enum_1.errorTypeEnum.DB_OPERATION_ERROR));
        }
    }
    async getShopDetailsByShopEmailId(shopEmailId) {
        try {
            console.log('Validating existing email id from CShopService => getShopDetailsByShopEmailId()');
            return await objShopModel.getShopDetailsByShopEmailId(shopEmailId);
        }
        catch (error) {
            throw (new CCustomErrors_helper_1.CCustomErrors(error, errorType_enum_1.errorTypeEnum.DB_OPERATION_ERROR));
        }
    }
    async getAllShops(limit = 10, pageNumber = 1) {
        try {
            console.log('Validating existing email id from CShopService => getAllShops()');
            return await objShopModel.getAllShops(limit, pageNumber);
        }
        catch (error) {
            throw (new CCustomErrors_helper_1.CCustomErrors(error, errorType_enum_1.errorTypeEnum.DB_OPERATION_ERROR));
        }
    }
}
exports.CShopService = CShopService;
