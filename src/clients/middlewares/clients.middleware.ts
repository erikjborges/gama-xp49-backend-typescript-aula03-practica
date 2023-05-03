import express from 'express';

class ClientsMiddleware {
    async validateRequiredClientBodyFields(req: express.Request, res: express.Response, next: express.NextFunction) {
        if (req.body && (req.body.cpf || req.body.cpnj)){
            next();
        } else {
            res.status(400).send({error: `Voce deve enviar o campo cpf ou cnpj.`});
        }
    }
}

export default new ClientsMiddleware();