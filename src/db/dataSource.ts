import { DataSource } from 'typeorm';
import { CShopEntities } from './entities/CShop.entities';
import { CShopTypeEntities } from './entities/CShopType.entities';
import { Client } from './entities/Client';  // Import Client entity

const AppDataSource = new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: ' ', 
    database: 'my-d-shop',
    synchronize: true,
    logging: false,
    entities: [
        CShopEntities,
        CShopTypeEntities,
        Client  
    ],
    migrations: [
        'src/migrations/**/*.ts'
    ],
    subscribers: [
        'src/subscriber/**/*.ts'
    ],
});

export default AppDataSource;








