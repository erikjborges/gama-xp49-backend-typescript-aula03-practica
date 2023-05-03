import { CRUD } from "../../common/interfaces/crud.interface";
import clienteDao from "../daos/clientes.dao"
import { ClienteDTO } from "../dtos/cliente.dto";

class ClientsService implements CRUD{
    async list(): Promise<ClienteDTO[]> {
        return clienteDao.listar();
    }

    async create(resource: ClienteDTO): Promise<any> {
        return clienteDao.cadastrar(resource);
    }
}

export default new ClientsService();