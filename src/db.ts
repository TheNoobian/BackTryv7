import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Cargar variables de entorno desde .env
dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  throw new Error('MONGO_URI is not defined in environment variables');
}

let database: mongoose.Connection;

const connectDB = async () => {
  if (database) {
    return;
  }

  try {
    await mongoose.connect(MONGO_URI as string, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: 'foodtest' // Reemplaza con el nombre real de tu base de datos
    } as any);
    database = mongoose.connection;

    database.once('open', async () => {
      console.log('MongoDB connected');
    });

    database.on('error', (error) => {
      console.error('MongoDB connection error:', error);
    });

  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

export default connectDB;
