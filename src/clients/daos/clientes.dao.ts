import { ClienteDTO } from "../dtos/cliente.dto";

class ClienteDAO {
    private _clientes: ClienteDTO[];

    constructor(){
        this._clientes = [];
    }

    listar(): (ClienteDTO)[] {
        let objPessoas: (ClienteDTO)[] = [];

        for(let cliente of this._clientes)
            objPessoas.push(cliente);

        return objPessoas;
    }

    cadastrar(pessoa: ClienteDTO): ClienteDTO {
        let objPessoa;

        pessoa.indexId = this._clientes.length;
        objPessoa = pessoa;
        this._clientes.push(objPessoa);

        return objPessoa;
    }
}

export default new ClienteDAO();