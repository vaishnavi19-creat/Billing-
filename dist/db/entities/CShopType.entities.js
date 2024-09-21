"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CShopTypeEntities = void 0;
const typeorm_1 = require("typeorm");
const CBase_entities_1 = require("./CBase.entities");
const CShop_entities_1 = require("./CShop.entities");
let CShopTypeEntities = class CShopTypeEntities extends CBase_entities_1.CBaseEntities {
    shopTypeId;
    shopTypeShortDescription;
    shops;
};
exports.CShopTypeEntities = CShopTypeEntities;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'shop_type_id' }),
    __metadata("design:type", Number)
], CShopTypeEntities.prototype, "shopTypeId", void 0);
__decorate([
    (0, typeorm_1.Column)({ 'name': 'shop_type_short_description', 'type': 'varchar', 'length': 20, 'nullable': false }),
    __metadata("design:type", String)
], CShopTypeEntities.prototype, "shopTypeShortDescription", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => CShop_entities_1.CShopEntities, (shop) => shop.shopTypeStatic),
    __metadata("design:type", Array)
], CShopTypeEntities.prototype, "shops", void 0);
exports.CShopTypeEntities = CShopTypeEntities = __decorate([
    (0, typeorm_1.Entity)({ 'name': 'shop_types_static' }),
    (0, typeorm_1.Unique)(['shopTypeShortDescription'])
], CShopTypeEntities);
