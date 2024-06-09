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
exports.getAllResponses = exports.createResponse = void 0;
const Response_1 = __importDefault(require("../models/Response"));
// Crear una nueva respuesta
const createResponse = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const count = yield Response_1.default.countDocuments();
        const newResponse = new Response_1.default(Object.assign(Object.assign({}, req.body), { index: count + 1 }));
        const savedResponse = yield newResponse.save();
        res.status(201).json(savedResponse);
    }
    catch (error) {
        console.error('Error creating response:', error);
        res.status(500).json({ error: 'Error creating response' });
    }
});
exports.createResponse = createResponse;
// Obtener todas las respuestas
const getAllResponses = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const responses = yield Response_1.default.find();
        res.status(200).json(responses);
    }
    catch (error) {
        console.error('Error fetching responses:', error);
        res.status(500).json({ error: 'Error fetching responses' });
    }
});
exports.getAllResponses = getAllResponses;
