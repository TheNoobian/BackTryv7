import { Request, Response } from 'express';
import ResponseModel from '../models/Response';

// Crear una nueva respuesta
export const createResponse = async (req: Request, res: Response): Promise<void> => {
    try {
        const count = await ResponseModel.countDocuments();
        const newResponse = new ResponseModel({
            ...req.body,
            index: count + 1
        });
        const savedResponse = await newResponse.save();
        res.status(201).json(savedResponse);
    } catch (error) {
        console.error('Error creating response:', error);
        res.status(500).json({ error: 'Error creating response' });
    }
};

// Obtener todas las respuestas
export const getAllResponses = async (req: Request, res: Response): Promise<void> => {
    try {
        const responses = await ResponseModel.find();
        res.status(200).json(responses);
    } catch (error) {
        console.error('Error fetching responses:', error);
        res.status(500).json({ error: 'Error fetching responses' });
    }
};
