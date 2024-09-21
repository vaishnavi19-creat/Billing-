"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CShopModel = void 0;
const CShop_entities_1 = require("../entities/CShop.entities");
const dataSource_1 = __importDefault(require("../dataSource"));
class CShopModel {
    repository;
    constructor() {
        this.repository = dataSource_1.default.getRepository(CShop_entities_1.CShopEntities);
    }
    async signUp(objNewShop) {
        try {
            console.log('Jumped in CShopModel => signUp()');
            const { shopId, shopName, shopOwnerName, shopCity, shopCityZipCode, shopMobileNumber, shopEmailId } = await this.repository.save(objNewShop);
            return { shopId, shopName, shopOwnerName, shopCity, shopCityZipCode, shopMobileNumber, shopEmailId };
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async getShopDetailsByNameZipCode(shopName, shopCityZipCode) {
        try {
            console.log('Jumped in CShopModel => getShopDetailsByNameZipCode()');
            return await this.repository.findOne({
                select: {
                    shopId: true,
                    shopName: true,
                    shopOwnerName: true
                },
                where: {
                    shopName: shopName,
                    shopCityZipCode: shopCityZipCode
                }
            });
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async getShopDetailsByShopMobileNumber(shopMobileNumber) {
        try {
            console.log('Jumped in CShopModel => getShopDetailsByShopMobileNumber()');
            return await this.repository.findOne({
                select: {
                    shopId: true,
                    shopName: true,
                    shopOwnerName: true,
                    shopMobileNumber: true
                },
                where: {
                    shopMobileNumber: shopMobileNumber,
                }
            });
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async getShopDetailsByShopEmailId(shopEmailId) {
        try {
            console.log('Jumped in CShopModel => getShopDetailsByShopEmailId()');
            return await this.repository.findOne({
                select: {
                    shopId: true,
                    shopName: true,
                    shopOwnerName: true,
                    shopEmailId: true
                },
                where: {
                    shopEmailId: shopEmailId,
                }
            });
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async getAllShops(limit = 10, pageNumber = 1) {
        try {
            console.log('Jumped in CShopModel => getAllShops()');
            const skip = (limit * pageNumber) - limit;
            return await this.repository
                .createQueryBuilder('shop')
                .leftJoinAndSelect('shop.shopTypeStatic', 'shopType')
                .select(['shop.shopId', 'shop.shopName', 'shop.shopOwnerName', 'shop.shopMobileNumber', 'shop.shopEmailId', 'shop.shopGSTNumber', 'shop.shopCityZipCode', 'shopType.shopTypeShortDescription'])
                .skip(skip)
                .take(limit)
                .getMany();
        }
        catch (error) {
            throw new Error(error);
        }
    }
}
exports.CShopModel = CShopModel;
