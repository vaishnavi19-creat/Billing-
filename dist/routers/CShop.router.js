"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CBase_router_1 = require("./CBase.router");
const CShop_controller_1 = require("../controllers/CShop.controller");
const CShop_validator_1 = require("../validators/CShop.validator");
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
        this.router.get('/getAllShops', CShop_validator_1.CShopValidator.validateGetAllShops(), CShop_controller_1.CShopController.getAllShops);
    }
    postRoutes() {
        console.log('In postRoute() from CSignUpRouter');
        this.router.post('/filterShops', CShop_validator_1.CShopValidator.validateFilterShops(), CShop_controller_1.CShopController.filterShops);
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
