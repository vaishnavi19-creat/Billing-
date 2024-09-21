"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CServer_1 = require("./CServer");
const typeorm_1 = require("typeorm");
const Client_1 = require("./db/entities/Client");
const dataSource = new typeorm_1.DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306, // Default MySQL port
    username: 'root',
    password: '',
    database: 'my-d-shop',
    entities: [Client_1.Client],
    synchronize: true,
    logging: false,
});
const PORT = process.env.PORT || 3001;
// Initialize the database connection before starting the server
dataSource.initialize()
    .then(() => {
    console.log('Database connected successfully');
    let server = new CServer_1.CServer().app;
    server.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}. http://localhost:${PORT}`);
    });
})
    .catch((error) => {
    console.error('Error during Data Source initialization', error);
});
