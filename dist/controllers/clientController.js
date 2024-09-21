"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientController = void 0;
const typeorm_1 = require("typeorm"); // Import DataSource
const clientService_1 = require("../services/clientService");
const express_validator_1 = require("express-validator");
const clientconstants_1 = require("../constants/clientconstants");
const Client_1 = require("../db/entities/Client");
// DataSource
const dataSource = new typeorm_1.DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'my-d-shop',
    entities: [Client_1.Client],
    synchronize: true,
    logging: false,
});
// initializing  Clientservices 
let clientService;
dataSource.initialize()
    .then(() => {
    clientService = new clientService_1.ClientService(dataSource);
})
    .catch((error) => {
    console.error('Error during Data Source initialization', error);
});
class ClientController {
    static async createClient(req, res) {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        try {
            const client = await clientService.createClient(req.body);
            return res.status(201).json({ message: clientconstants_1.CLIENT_MESSAGES.CREATE_SUCCESS, client });
        }
        catch (error) {
            return res.status(500).json({ message: clientconstants_1.CLIENT_MESSAGES.CREATE_FAIL, error: error.message });
        }
    }
    static async getClients(req, res) {
        try {
            const clients = await clientService.getClients();
            return res.status(200).json(clients);
        }
        catch (error) {
            return res.status(500).json({ message: 'Error fetching clients', error: error.message });
        }
    }
}
exports.ClientController = ClientController;
