"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientService = void 0;
const Client_1 = require("../db/entities/Client");
class ClientService {
    clientRepository;
    constructor(dataSource) {
        this.clientRepository = dataSource.getRepository(Client_1.Client);
    }
    async createClient(data) {
        const client = this.clientRepository.create(data);
        return await this.clientRepository.save(client);
    }
    async getClients() {
        return await this.clientRepository.find();
    }
    async getClientById(id) {
        return await this.clientRepository.findOneBy({ id });
    }
    async updateClient(id, data) {
        await this.clientRepository.update(id, data);
        return await this.getClientById(id);
    }
    async deleteClient(id) {
        const result = await this.clientRepository.delete(id);
        return result.affected > 0;
    }
}
exports.ClientService = ClientService;
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
