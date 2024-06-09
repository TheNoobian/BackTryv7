"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const db_1 = __importDefault(require("./db"));
const responseRoutes_1 = __importDefault(require("./routes/responseRoutes"));
const app = (0, express_1.default)();
const PORT = 3000;
// Conectar a la base de datos
(0, db_1.default)();
// Middleware para parsear el cuerpo de las solicitudes
app.use(express_1.default.json());
// Middleware para habilitar CORS
app.use((0, cors_1.default)());
// Rutas
app.use('/api', responseRoutes_1.default);
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
