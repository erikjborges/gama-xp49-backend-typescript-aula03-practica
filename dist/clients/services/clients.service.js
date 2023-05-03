"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const clientes_dao_1 = __importDefault(require("../daos/clientes.dao"));
class ClientsService {
    list() {
        return __awaiter(this, void 0, void 0, function* () {
            return clientes_dao_1.default.listar();
        });
    }
    create(resource) {
        return __awaiter(this, void 0, void 0, function* () {
            return clientes_dao_1.default.cadastrar(resource);
        });
    }
}
exports.default = new ClientsService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50cy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NsaWVudHMvc2VydmljZXMvY2xpZW50cy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ0Esd0VBQTZDO0FBRzdDLE1BQU0sY0FBYztJQUNWLElBQUk7O1lBQ04sT0FBTyxzQkFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQy9CLENBQUM7S0FBQTtJQUVLLE1BQU0sQ0FBQyxRQUFvQjs7WUFDN0IsT0FBTyxzQkFBVSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMxQyxDQUFDO0tBQUE7Q0FDSjtBQUVELGtCQUFlLElBQUksY0FBYyxFQUFFLENBQUMifQ==