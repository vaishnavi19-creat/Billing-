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
exports.CShopEntities = void 0;
const typeorm_1 = require("typeorm");
const CBase_entities_1 = require("./CBase.entities");
const CShopType_entities_1 = require("./CShopType.entities");
let CShopEntities = class CShopEntities extends CBase_entities_1.CBaseEntities {
    shopId;
    shopName;
    shopOwnerName;
    shopAddress;
    shopCountryId;
    shopStateId;
    shopCity;
    shopCityZipCode;
    shopMobileNumber;
    shopEmailId;
    shopGSTNumber;
    shopStatus;
    shopLastRecord;
    shopLogoUrl;
    shopTypeId;
    shopTypeStatic;
};
exports.CShopEntities = CShopEntities;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'shop_id' }),
    __metadata("design:type", Number)
], CShopEntities.prototype, "shopId", void 0);
__decorate([
    (0, typeorm_1.Index)(),
    (0, typeorm_1.Column)({ 'name': 'shop_name', 'type': 'varchar', 'length': 100, 'nullable': false }),
    __metadata("design:type", String)
], CShopEntities.prototype, "shopName", void 0);
__decorate([
    (0, typeorm_1.Column)({ 'name': 'shop_owner_name', 'type': 'varchar', 'length': 100, 'nullable': false }),
    __metadata("design:type", String)
], CShopEntities.prototype, "shopOwnerName", void 0);
__decorate([
    (0, typeorm_1.Column)({ 'name': 'shop_address', 'type': 'varchar', 'length': 500, 'nullable': false }),
    __metadata("design:type", String)
], CShopEntities.prototype, "shopAddress", void 0);
__decorate([
    (0, typeorm_1.Column)({ 'name': 'shop_country_id', 'type': 'integer', 'nullable': false }),
    __metadata("design:type", String)
], CShopEntities.prototype, "shopCountryId", void 0);
__decorate([
    (0, typeorm_1.Column)({ 'name': 'shop_state_id', 'type': 'integer', 'nullable': false }),
    __metadata("design:type", String)
], CShopEntities.prototype, "shopStateId", void 0);
__decorate([
    (0, typeorm_1.Column)({ 'name': 'shop_city', 'type': 'varchar', 'length': 20, 'nullable': false }),
    __metadata("design:type", String)
], CShopEntities.prototype, "shopCity", void 0);
__decorate([
    (0, typeorm_1.Column)({ 'name': 'shop_city_zip_code', 'type': 'varchar', 'length': 6, 'nullable': false }),
    __metadata("design:type", String)
], CShopEntities.prototype, "shopCityZipCode", void 0);
__decorate([
    (0, typeorm_1.Column)({ 'name': 'shop_mobile_number', 'type': 'varchar', 'length': 10, 'nullable': false }),
    __metadata("design:type", String)
], CShopEntities.prototype, "shopMobileNumber", void 0);
__decorate([
    (0, typeorm_1.Column)({ 'name': 'shop_email_id', 'type': 'varchar', 'length': 50, 'nullable': false }),
    __metadata("design:type", String)
], CShopEntities.prototype, "shopEmailId", void 0);
__decorate([
    (0, typeorm_1.Column)({ 'name': 'shop_gst_number', 'type': 'varchar', 'length': 10, 'nullable': false }),
    __metadata("design:type", String)
], CShopEntities.prototype, "shopGSTNumber", void 0);
__decorate([
    (0, typeorm_1.Column)({ 'name': 'shop_status', 'type': 'boolean', 'default': true }),
    __metadata("design:type", Boolean)
], CShopEntities.prototype, "shopStatus", void 0);
__decorate([
    (0, typeorm_1.Column)({ 'name': 'shop_last_record', 'type': 'text', 'default': null, 'nullable': true }),
    __metadata("design:type", String)
], CShopEntities.prototype, "shopLastRecord", void 0);
__decorate([
    (0, typeorm_1.Column)({ 'name': 'shop_logo_url', 'type': 'varchar', 'length': 200, 'nullable': true }),
    __metadata("design:type", String)
], CShopEntities.prototype, "shopLogoUrl", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'shop_type_id' }) // This is the foreign key column to store shopType
    ,
    __metadata("design:type", Number)
], CShopEntities.prototype, "shopTypeId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => CShopType_entities_1.CShopTypeEntities, { onDelete: 'CASCADE', onUpdate: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'shop_type_id', referencedColumnName: 'shopTypeId' }),
    __metadata("design:type", CShopType_entities_1.CShopTypeEntities)
], CShopEntities.prototype, "shopTypeStatic", void 0);
exports.CShopEntities = CShopEntities = __decorate([
    (0, typeorm_1.Entity)({ 'name': 'shops' }),
    (0, typeorm_1.Unique)(['shopMobileNumber']),
    (0, typeorm_1.Unique)(['shopEmailId'])
], CShopEntities);
