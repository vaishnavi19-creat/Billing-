"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CShopController = void 0;
const express_validator_1 = require("express-validator");
const errorType_enum_1 = require("../enums/errorType.enum");
const CCustomErrors_helper_1 = require("../helpers/CCustomErrors.helper");
const CShop_service_1 = require("../services/CShop.service");
const CFilterRequest_helper_1 = require("../helpers/CFilterRequest.helper");
const objShopService = new CShop_service_1.CShopService();
class CShopController {
    static async signUp(request, response, next) {
        try {
            console.log('In signUp() from CShopController');
            const errors = (0, express_validator_1.validationResult)(request);
            if (!errors.isEmpty()) {
                console.log('Caught in input validation error from CShopController => signUp()');
                return next(new CCustomErrors_helper_1.CCustomErrors(new Error('Please provide valid inputs.'), errorType_enum_1.errorTypeEnum.INPUT_VALIDATION_ERROR, errors));
            }
            const objFilteredShop = CFilterRequest_helper_1.CFilterRequest.filterSignUpRequest(request);
            const objSavedShop = await objShopService.signUp(objFilteredShop);
            if (objSavedShop) {
                console.log('Received success response in CShopController => signUp()');
                response.status(200).send({
                    status: 200,
                    message: 'success',
                    data: {
                        shopId: objSavedShop.shopId,
                        shopName: objSavedShop.shopName,
                        shopOwnerName: objSavedShop.shopOwnerName,
                        shopCity: objSavedShop.shopCity,
                        shopCityZipCode: objSavedShop.shopCityZipCode,
                    }
                });
            }
            else {
                response.status(400).send({
                    message: 'Sorry! The data could not be saved. Please try again.',
                    data: ''
                });
            }
        }
        catch (error) {
            return next(error);
        }
    }
    static async getAllShops(request, response, next) {
        try {
            const errors = (0, express_validator_1.validationResult)(request);
            if (!errors.isEmpty()) {
                console.log('Caught in input validation error from CShopController => getAllShops()');
                return next(new CCustomErrors_helper_1.CCustomErrors(new Error('Please provide valid inputs.'), errorType_enum_1.errorTypeEnum.INPUT_VALIDATION_ERROR, errors));
            }
            // Extract and parse query parameters
            const limit = Array.isArray(request.query.limit) ? request.query.limit[0] : request.query.limit || '10';
            const pageNumber = Array.isArray(request.query.pageNumber) ? request.query.pageNumber[0] : request.query.pageNumber || '1';
            // Convert to numbers
            const limitNumber = parseInt(limit, 10);
            const pageNumberNumber = parseInt(pageNumber, 10);
            // Handle invalid numbers
            if (isNaN(limitNumber) || isNaN(pageNumberNumber)) {
                return response.status(400).json({ message: 'Invalid limit or pageNumber parameter' });
            }
            const arrObjShops = await objShopService.getAllShops(limitNumber, pageNumberNumber);
            if (arrObjShops) {
                console.log('Received success response in CShopController => getAllShops()');
                response.status(200).send({
                    status: 200,
                    message: 'success',
                    data: arrObjShops.length > 0 ? arrObjShops : []
                });
            }
            else {
                response.status(404).send({
                    message: 'No shops found',
                    data: []
                });
            }
        }
        catch (error) {
            return next(error);
        }
    }
    static async filterShops(request, response, next) {
        try {
            const errors = (0, express_validator_1.validationResult)(request);
            if (!errors.isEmpty()) {
                console.log('Caught in input validation error from CShopController => filterShops()');
                return next(new CCustomErrors_helper_1.CCustomErrors(new Error('Please provide valid inputs.'), errorType_enum_1.errorTypeEnum.INPUT_VALIDATION_ERROR, errors));
            }
            // Extract and parse query parameters
            const limit = Array.isArray(request.query.limit) ? request.query.limit[0] : request.query.limit || '10';
            const pageNumber = Array.isArray(request.query.pageNumber) ? request.query.pageNumber[0] : request.query.pageNumber || '1';
            // Convert to numbers
            const limitNumber = parseInt(limit, 10);
            const pageNumberNumber = parseInt(pageNumber, 10);
            // Handle invalid numbers
            if (isNaN(limitNumber) || isNaN(pageNumberNumber)) {
                return response.status(400).json({ message: 'Invalid limit or pageNumber parameter' });
            }
            const arrShopObjs = await objShopService.getAllShops(limitNumber, pageNumberNumber);
            if (arrShopObjs) {
                console.log('Received success response in CShopController => filterShops()');
                response.status(200).send({
                    status: 200,
                    message: 'success',
                    data: arrShopObjs.length > 0 ? arrShopObjs : []
                });
            }
            else {
                response.status(404).send({
                    message: 'No shops found',
                    data: []
                });
            }
        }
        catch (error) {
            return next(error);
        }
    }
}
exports.CShopController = CShopController;
// import * as express from "express";
// import { validationResult } from "express-validator";
// import { errorTypeEnum } from "../enums/errorType.enum";
// import { CCustomErrors } from "../helpers/CCustomErrors.helper";
// import { CShopService } from '../services/CShop.service';
// import { CFilterRequest } from "../helpers/CFilterRequest.helper";
// import { getAllShops } from "../interfaces/CShop.interface";
// const objShopService = new CShopService();
// export class CShopController {
//     static async signUp( request:express.Request, response:express.Response, next:express.NextFunction ) {
//         try {
//             console.log('In signUp() from CShopController');
//             const errors = validationResult( request );
//             if (!errors.isEmpty()) {
//                 console.log('Cought in input validation error from CShopController => signUp() ');
//                 return next( new CCustomErrors( new Error( 'Please provide valid inputs. ' ), errorTypeEnum.INPUT_VALIDATION_ERROR, errors ) );
//             }
//             const objFilteredShop = CFilterRequest.filterSignUpRequest(request);
//             const objSavedShop = await objShopService.signUp(objFilteredShop);
//             if(objSavedShop) {
//                 console.log('Received success response in CShopController => signUp() ');
//                 response.status( 200 ).send({
//                     status: 200,
//                     message: 'success',
//                     data : {
//                         shopId: objSavedShop.shopId,
//                         shopName: objSavedShop.shopName,
//                         shopOwnerName: objSavedShop.shopOwnerName,
//                         shopCity: objSavedShop.shopCity,
//                         shopCityZipCode: objSavedShop.shopCityZipCode,
//                     }
//                 });
//             }
//             // } else {
//             //     response.status( 200 ).send({
//             //         messgae : 'Sorry! The data could not be saved. Please try again.',
//             //         data : ''
//             //     });
//             // }
//         } catch( error ) {
//             return next( error );
//         }
//     }
//     static async getAllShops( request:express.Request, response:express.Response, next:express.NextFunction ) {
//         try {
//             const errors = validationResult( request );
//             if (!errors.isEmpty()) {
//                 console.log('Cought in input validation error from CShopController => getAllShops() ');
//                 return next( new CCustomErrors( new Error( 'Please provide valid inputs. ' ), errorTypeEnum.INPUT_VALIDATION_ERROR, errors ) );
//             }
//             const limit = request.query.limit ? request.query.limit : 10;
//             const pageNumber = request.query.pageNumber ? request.query.pageNumber : 1;
//             const arrObjShops: Array<getAllShops> = await objShopService.getAllShops(parseInt(limit), parseInt(pageNumber));
//             if(arrObjShops) {
//                 console.log('Received success response in CShopController => getAllShops() ');
//                 response.status( 200 ).send({
//                     status: 200,
//                     message: 'success',
//                     data : arrObjShops.length > 0 ? arrObjShops : []
//                 });
//             }
//         } catch( error ) {
//             return next( error );
//         }
//     }
//     static async filterShops( request:express.Request, response:express.Response, next:express.NextFunction ) {
//         try {
//             const errors = validationResult( request );
//             if (!errors.isEmpty()) {
//                 console.log('Cought in input validation error from CShopController => filterShops() ');
//                 return next( new CCustomErrors( new Error( 'Please provide valid inputs. ' ), errorTypeEnum.INPUT_VALIDATION_ERROR, errors ) );
//             }
//             const limit = request.query.limit ? request.query.limit : 10;
//             const pageNumber = request.query.pageNumber ? request.query.pageNumber : 1;
//             const arrShopObjs: Array<getAllShops> = await objShopService.getAllShops(parseInt(limit), parseInt(pageNumber));
//             if(arrShopObjs) {
//                 console.log('Received success response in CShopController => filterShops() ');
//                 response.status( 200 ).send({
//                     status: 200,
//                     message: 'success',
//                     data : arrShopObjs.length > 0 ? arrShopObjs : []
//                 });
//             }
//         } catch( error ) {
//             return next( error );
//         }
//     }
// static async getAllSchools( request:express.Request, response:express.Response, next:express.NextFunction ) {
//     try {
//         const arrObjAllSchools = await objSchoolService.getAllSchools(request);
//         if( arrObjAllSchools ) {
//             response.status( 200 ).send({
//                 data : arrObjAllSchools
//             });
//         } else {
//             response.status( 200 ).send({
//                 messgae : 'Sorry! No Data available. Please try again.',
//                 data : []
//             });
//         }
//     } catch( error ) {
//         return next( new CCustomErrors( error, errorTypeEnum.DB_OPERATION_ERROR ) );
//     }
// }
// static async getSchoolById( request:express.Request, response:express.Response, next:express.NextFunction ) {
//     try {
//        const objSchool = await objSchoolService.getSchoolById(request);
//         if( objSchool ) {
//             response.status( 200 ).send({
//                 data : objSchool
//             });
//         } else {
//             response.status( 200 ).send({
//                 messgae : 'Sorry! No Data available. Please try again.',
//                 data : []
//             });
//         }
//     } catch( error ) {
//         return next( new CCustomErrors( error, errorTypeEnum.DB_OPERATION_ERROR ) );
//     }
// }
// static async getActiveSchools( request:express.Request, response:express.Response, next:express.NextFunction ) {
//     try {
//        const arrObjSchools = await objSchoolService.getActiveSchools(request);
//         if( arrObjSchools ) {
//             response.status( 200 ).send({
//                 data : arrObjSchools
//             });
//         } else {
//             response.status( 200 ).send({
//                 messgae : 'Sorry! No Data available. Please try again.',
//                 data : []
//             });
//         }
//     } catch( error ) {
//         return next( new CCustomErrors( error, errorTypeEnum.DB_OPERATION_ERROR ) );
//     }
// }
// static async getInactiveSchools( request:express.Request, response:express.Response, next:express.NextFunction ) {
//     try {
//        const arrObjSchools = await objSchoolService.getInactiveSchools(request);
//         if( arrObjSchools ) {
//             response.status( 200 ).send({
//                 data : arrObjSchools
//             });
//         } else {
//             response.status( 200 ).send({
//                 messgae : 'Sorry! No Data available. Please try again.',
//                 data : []
//             });
//         }
//     } catch( error ) {
//         return next( new CCustomErrors( error, errorTypeEnum.DB_OPERATION_ERROR ) );
//     }
// }
// static async updateSchool( request:express.Request, response:express.Response, next:express.NextFunction ) {
//     try {
//         const errors = validationResult( request );
//         if (!errors.isEmpty()) {
//             return next( new CCustomErrors( new Error( 'Please provide valid inputs. ' ), errorTypeEnum.INPUT_VALIDATION_ERROR, errors ) );
//         }
//         const objUpdatedSchool = await objSchoolService.updateSchool(request);
//         if( objUpdatedSchool ) {
//             response.status( 200 ).send({
//                 data : objUpdatedSchool
//             });
//         } else {
//             response.status( 200 ).send({
//                 messgae : 'Sorry! The data could not be updated. Please try again.',
//                 data : ''
//             });
//         }
//     } catch( error ) {
//         return next( new CCustomErrors( error, errorTypeEnum.DB_OPERATION_ERROR ) );
//     }
// }
// static async activateSchool( request:express.Request, response:express.Response, next:express.NextFunction ) {
//     try {
//         let objUpdatedSchool = await objSchoolService.updateSchool(request);
//         if( objUpdatedSchool ) {
//             response.status( 200 ).send({
//                 data : objUpdatedSchool
//             });
//         } else {
//             response.status( 200 ).send({
//                 messgae : 'Sorry! The data could not be updated. Please try again.',
//                 data : ''
//             });
//         }
//     } catch( error ) {
//         return next( new CCustomErrors( error, errorTypeEnum.DB_OPERATION_ERROR ) );
//     }
// }
// static async inactivateSchool( request:express.Request, response:express.Response, next:express.NextFunction ) {
//     try {
//         const objUpdatedSchool = await objSchoolService.updateSchool(request);
//         if( objUpdatedSchool ) {
//             response.status( 200 ).send({
//                 data : objUpdatedSchool
//             });
//         } else {
//             response.status( 200 ).send({
//                 messgae : 'Sorry! The data could not be updated. Please try again.',
//                 data : ''
//             });
//         }
//     } catch( error ) {
//         return next( new CCustomErrors( error, errorTypeEnum.DB_OPERATION_ERROR ) );
//     }        
// }
