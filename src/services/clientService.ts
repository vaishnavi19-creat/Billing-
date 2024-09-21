import { Client } from '../db/entities/Client';
import { ClientModel } from '../db/models/clientModel';
import { Repository } from 'typeorm';
import { DataSource } from 'typeorm';

export class ClientService {
    private clientRepository: Repository<Client>;

    constructor(dataSource: DataSource) {
        this.clientRepository = dataSource.getRepository(Client);
    }

    // Create a new client
    async createClient(data: ClientModel): Promise<ClientModel> {
        const client = this.clientRepository.create(data);
        return await this.clientRepository.save(client);
    }

    // Get all clients
    async getClients(): Promise<ClientModel[]> {
        return await this.clientRepository.find();
    }

    // Get a client by ID
    async getClientById(id: number): Promise<ClientModel | null> {
        return await this.clientRepository.findOneBy({ id });
    }

    // Update a client by ID
    async updateClient(id: number, data: Partial<ClientModel>): Promise<ClientModel | null> {
        await this.clientRepository.update(id, data);
        return await this.getClientById(id);  // Return the updated client after update
    }

    // Delete a client by ID
    async deleteClient(id: number): Promise<boolean> {
        const result = await this.clientRepository.delete(id);
        return result.affected > 0;
    }
}





























// export class ClientService implements ClientService {
//     static getClients: any;
//     static createClient(body: any) {
//         throw new Error('Method not implemented.');
//     }
//     private clientRepository: Repository<Client>;

//     constructor(dataSource: DataSource) {
//         this.clientRepository = dataSource.getRepository(Client);
//     }

//     async createClient(data: ClientModel): Promise<ClientModel> {
//         const client = this.clientRepository.create(data);
//         return await this.clientRepository.save(client);
//     }

//     async getClientById(id: number): Promise<ClientModel | null> {
//         return await this.clientRepository.findOneBy({ id });
//     }

//     async updateClient(id: number, data: Partial<ClientModel>): Promise<ClientModel> {
//         await this.clientRepository.update(id, data);
//         return await this.getClientById(id);
//     }

//     async deleteClient(id: number): Promise<boolean> {
//         const result = await this.clientRepository.delete(id);
//         return result.affected > 0;
//     }
// }
