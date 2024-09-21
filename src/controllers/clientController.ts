import { Request, Response } from 'express';
import { ClientService } from '../services/clientService';
import { validationResult } from 'express-validator';
import { CLIENT_MESSAGES } from '../constants/clientconstants';  // For response messages

let clientService: ClientService;

export class ClientController {

    static initializeService(service: ClientService) {
        clientService = service;
    }

    // Create a client
    static async createClient(req: Request, res: Response) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            const client = await clientService.createClient(req.body);  
            return res.status(201).json({ message: CLIENT_MESSAGES.CREATE_SUCCESS, client });
        } catch (error) {
            return res.status(500).json({ message: CLIENT_MESSAGES.CREATE_FAIL, error: error.message });
        }
    }

    // Get all clients
    static async getClients(req: Request, res: Response) {
        try {
            const clients = await clientService.getClients();  
            return res.status(200).json(clients);
        } catch (error) {
            return res.status(500).json({ message: 'Error fetching clients', error: error.message });
        }
    }

    // Update a client by ID
    static async updateClient(req: Request, res: Response) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            const { id } = req.params;
            const updatedClient = await clientService.updateClient(parseInt(id), req.body);
            if (!updatedClient) {
                return res.status(404).json({ message: CLIENT_MESSAGES.NOT_FOUND });
            }
            return res.status(200).json({ message: CLIENT_MESSAGES.UPDATE_SUCCESS, updatedClient });
        } catch (error) {
            return res.status(500).json({ message: CLIENT_MESSAGES.UPDATE_FAIL, error: error.message });
        }
    }

    // Delete a client by ID
    static async deleteClient(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const success = await clientService.deleteClient(parseInt(id));
            if (!success) {
                return res.status(404).json({ message: CLIENT_MESSAGES.NOT_FOUND });
            }
            return res.status(200).json({ message: CLIENT_MESSAGES.DELETE_SUCCESS });
        } catch (error) {
            return res.status(500).json({ message: CLIENT_MESSAGES.DELETE_FAIL, error: error.message });
        }
    }
}







