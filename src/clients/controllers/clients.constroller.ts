import express from 'express';
import debug from 'debug';
import clientsService from '../services/clients.service';

class ClientsController {
    async listClients(req: express.Request, res: express.Response){
        const clients = await clientsService.list();
        res.status(200).send(clients);
    }

    async createClient(req: express.Request, res: express.Response){
        const client = await clientsService.create(req.body);
        res.status(201).send(client);
    }
}

export default new ClientsController();