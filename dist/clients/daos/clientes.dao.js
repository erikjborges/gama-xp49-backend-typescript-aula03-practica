"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ClienteDAO {
    constructor() {
        this._clientes = [];
    }
    listar() {
        let objPessoas = [];
        for (let cliente of this._clientes)
            objPessoas.push(cliente);
        return objPessoas;
    }
    cadastrar(pessoa) {
        let objPessoa;
        pessoa.indexId = this._clientes.length;
        objPessoa = pessoa;
        this._clientes.push(objPessoa);
        return objPessoa;
    }
}
exports.default = new ClienteDAO();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50ZXMuZGFvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NsaWVudHMvZGFvcy9jbGllbnRlcy5kYW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSxNQUFNLFVBQVU7SUFHWjtRQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCxNQUFNO1FBQ0YsSUFBSSxVQUFVLEdBQW1CLEVBQUUsQ0FBQztRQUVwQyxLQUFJLElBQUksT0FBTyxJQUFJLElBQUksQ0FBQyxTQUFTO1lBQzdCLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFN0IsT0FBTyxVQUFVLENBQUM7SUFDdEIsQ0FBQztJQUVELFNBQVMsQ0FBQyxNQUFrQjtRQUN4QixJQUFJLFNBQVMsQ0FBQztRQUVkLE1BQU0sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUM7UUFDdkMsU0FBUyxHQUFHLE1BQU0sQ0FBQztRQUNuQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUUvQixPQUFPLFNBQVMsQ0FBQztJQUNyQixDQUFDO0NBQ0o7QUFFRCxrQkFBZSxJQUFJLFVBQVUsRUFBRSxDQUFDIn0=