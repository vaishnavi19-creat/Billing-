"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CBase_router_1 = require("./CBase.router");
const CSignUp_validator_1 = require("../validators/CSignUp.validator");
const CShop_controller_1 = require("../controllers/CShop.controller");
class CSignUpRouter extends CBase_router_1.CBaseRouter {
    constructor() {
        super();
        this.getRoutes();
        this.postRoutes();
        this.putRoutes();
        this.patchRoutes();
        this.deleteRoutes();
    }
    getRoutes() {
        console.log('In getRoute() from CSignUpRouter');
    }
    postRoutes() {
        console.log('In postRoute() from CSignUpRouter');
        // {
        //     "shopTypeId": 1,
        //     "shopName": "Demo Shop 1",
        //     "shopOwnerName": "Mr. Shriyash Kishor Dindore",
        //     "shopAddress": "A/P: Main road, near to santhanath temple, Vairag",
        //     "shopCountryId": 1,
        //     "shopStateId": 1,
        //     "shopCity": "VAIRAG",
        //     "shopCityZipCode": "413402",
        //     "shopMobileNumber": "123465790",
        //     "shopEmailId": "abc@gmail.com",
        //     "shopGSTNumber": ""
        // }
        this.router.post('/', CSignUp_validator_1.CSignUpValdator.signUpValidator(), CShop_controller_1.CShopController.signUp);
    }
    putRoutes() {
        console.log('In putRoute() from CSignUpRouter');
    }
    patchRoutes() {
        console.log('In patchRoute() from CSignUpRouter');
    }
    deleteRoutes() {
        console.log('In deleteRoute() from CSignUpRouter');
    }
}
exports.default = new CSignUpRouter().router;
