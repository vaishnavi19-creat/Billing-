"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CFilterRequest = void 0;
class CFilterRequest {
    static filterSignUpRequest(rawData) {
        console.log('Filtering the request from CFilterRequest => filterSignUpRequest() ');
        return {
            shopTypeId: rawData?.body?.shopTypeId ? rawData.body.shopTypeId : '',
            shopName: rawData?.body?.shopName ? rawData.body.shopName : '',
            shopOwnerName: rawData?.body?.shopOwnerName ? rawData.body.shopOwnerName : '',
            shopAddress: rawData?.body?.shopAddress ? rawData.body.shopAddress : '',
            shopCountryId: rawData?.body?.shopCountryId ? rawData.body.shopCountryId : '',
            shopStateId: rawData?.body?.shopStateId ? rawData.body.shopStateId : '',
            shopCity: rawData?.body?.shopCity ? rawData.body.shopCity : '',
            shopCityZipCode: rawData?.body?.shopCityZipCode ? rawData.body.shopCityZipCode : '',
            shopMobileNumber: rawData?.body?.shopMobileNumber ? rawData.body.shopMobileNumber : '',
            shopEmailId: rawData?.body?.shopEmailId ? rawData.body.shopEmailId : '',
            shopGSTNumber: rawData?.body?.shopGSTNumber ? rawData.body.shopGSTNumber : '',
            createdBy: 1,
            createdOn: new Date(),
            updatedBy: 1,
            updatedOn: new Date(),
        };
    }
}
exports.CFilterRequest = CFilterRequest;
