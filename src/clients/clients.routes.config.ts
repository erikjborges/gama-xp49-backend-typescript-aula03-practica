import { CommonRoutesConfig } from "../common/common.routes.config";
import express from "express";
import clientsConstroller from "./controllers/clients.constroller";
import clientsMiddleware from "./middlewares/clients.middleware";

export class ClientsRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'ClientsRoutes');
    }

    configureRoutes(): express.Application {
        this.app.route(`/clients`)
                .get(clientsConstroller.listClients)
                .post(
                    clientsMiddleware.validateRequiredClientBodyFields,
                    clientsConstroller.createClient
                );

        return this.app;
    }
}