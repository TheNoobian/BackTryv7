import express from 'express';
import cors from 'cors';
import connectDB from './db';
import responseRoutes from './routes/responseRoutes';

const app = express();
const PORT = 3000;

// Conectar a la base de datos
connectDB();

// Middleware para parsear el cuerpo de las solicitudes
app.use(express.json());

// Middleware para habilitar CORS
app.use(cors());

// Rutas
app.use('/api', responseRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
