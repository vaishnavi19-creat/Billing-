"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const CShop_entities_1 = require("./entities/CShop.entities");
const CShopType_entities_1 = require("./entities/CShopType.entities");
const Client_1 = require("./entities/Client"); // Import Client entity
const AppDataSource = new typeorm_1.DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: ' ',
    database: 'my-d-shop',
    synchronize: true,
    logging: false,
    entities: [
        CShop_entities_1.CShopEntities,
        CShopType_entities_1.CShopTypeEntities,
        Client_1.Client
    ],
    migrations: [
        'src/migrations/**/*.ts'
    ],
    subscribers: [
        'src/subscriber/**/*.ts'
    ],
});
exports.default = AppDataSource;
