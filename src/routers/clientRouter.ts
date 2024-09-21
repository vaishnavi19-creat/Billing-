import { Router } from 'express';
import { clientValidator } from '../validators/client/clientValidator';
import { ClientController } from '../controllers/clientController';

const router = Router();

//  Create a new client
router.post('/clients', clientValidator, ClientController.createClient);

//  Update client by ID
router.put('/clients/:id', clientValidator, ClientController.updateClient);

// Delete client by ID
router.delete('/clients/:id', ClientController.deleteClient);

//  Get all clients
router.get('/clients', ClientController.getClients);

export default router;


