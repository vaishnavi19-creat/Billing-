"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const clientValidator_1 = require("../validators/client/clientValidator");
const express_validator_1 = require("express-validator");
const Client_1 = require("../db/entities/Client");
const typeorm_1 = require("typeorm");
// Create a new DataSource for client
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
const router = (0, express_1.Router)();
dataSource.initialize()
    .then(() => {
    const clientRepository = dataSource.getRepository(Client_1.Client);
    // Add a new client 
    router.post('/clients', clientValidator_1.clientValidator, async (req, res) => {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        try {
            const { name, mobileNo, email, address, gstNo, logo } = req.body;
            const client = new Client_1.Client();
            client.name = name;
            client.mobileNo = mobileNo;
            client.email = email;
            client.address = address;
            client.gstNo = gstNo;
            client.logo = logo;
            await clientRepository.save(client);
            return res.status(201).json({ message: 'Client created successfully', client });
        }
        catch (error) {
            return res.status(500).json({ message: 'Error creating client', error: error.message });
        }
    });
    // Edit an client by id
    router.put('/clients/:id', clientValidator_1.clientValidator, async (req, res) => {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        try {
            const { id } = req.params;
            const { name, mobileNo, email, address, gstNo, logo } = req.body;
            // Find client by id
            const client = await clientRepository.findOneBy({ id: parseInt(id) });
            if (!client) {
                return res.status(404).json({ message: 'Client not found' });
            }
            // Update client information
            client.name = name;
            client.mobileNo = mobileNo;
            client.email = email;
            client.address = address;
            client.gstNo = gstNo;
            client.logo = logo;
            await clientRepository.save(client);
            return res.status(200).json({ message: 'Client updated successfully', client });
        }
        catch (error) {
            return res.status(500).json({ message: 'Error updating client', error: error.message });
        }
    });
    // Delete client by id
    router.delete('/clients/:id', async (req, res) => {
        const { id } = req.params;
        try {
            const client = await clientRepository.findOneBy({ id: parseInt(id) });
            if (!client) {
                return res.status(404).json({ message: 'Client not found' });
            }
            await clientRepository.remove(client);
            return res.status(200).json({ message: 'Client deleted successfully' });
        }
        catch (error) {
            return res.status(500).json({ message: 'Error deleting client', error: error.message });
        }
    });
})
    .catch((error) => {
    console.error('Error during Data Source initialization in client router', error);
});
exports.default = router;
