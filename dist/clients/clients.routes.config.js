"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientsRoutes = void 0;
const common_routes_config_1 = require("../common/common.routes.config");
const clients_constroller_1 = __importDefault(require("./controllers/clients.constroller"));
const clients_middleware_1 = __importDefault(require("./middlewares/clients.middleware"));
class ClientsRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'ClientsRoutes');
    }
    configureRoutes() {
        this.app.route(`/clients`)
            .get(clients_constroller_1.default.listClients)
            .post(clients_middleware_1.default.validateRequiredClientBodyFields, clients_constroller_1.default.createClient);
        return this.app;
    }
}
exports.ClientsRoutes = ClientsRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50cy5yb3V0ZXMuY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NsaWVudHMvY2xpZW50cy5yb3V0ZXMuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLHlFQUFvRTtBQUVwRSw0RkFBbUU7QUFDbkUsMEZBQWlFO0FBRWpFLE1BQWEsYUFBYyxTQUFRLHlDQUFrQjtJQUNqRCxZQUFZLEdBQXdCO1FBQ2hDLEtBQUssQ0FBQyxHQUFHLEVBQUUsZUFBZSxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVELGVBQWU7UUFDWCxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUM7YUFDakIsR0FBRyxDQUFDLDZCQUFrQixDQUFDLFdBQVcsQ0FBQzthQUNuQyxJQUFJLENBQ0QsNEJBQWlCLENBQUMsZ0NBQWdDLEVBQ2xELDZCQUFrQixDQUFDLFlBQVksQ0FDbEMsQ0FBQztRQUVWLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNwQixDQUFDO0NBQ0o7QUFmRCxzQ0FlQyJ9