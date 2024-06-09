import mongoose, { Schema, Document } from 'mongoose';

interface IResponse extends Document {
    index: number;
    gusto_general: string;
    sabor: number;
    aroma: number;
    textura: number;
    crocante: number;
    forma: number;
    color: number;
    tamaño: number;
}

const ResponseSchema: Schema = new Schema({
    index: { type: Number, required: true, unique: true },
    gusto_general: { type: String, required: true },
    sabor: { type: Number, required: true },
    aroma: { type: Number, required: true },
    textura: { type: Number, required: true },
    crocante: { type: Number, required: true },
    forma: { type: Number, required: true },
    color: { type: Number, required: true },
    tamaño: { type: Number, required: true }
});

export default mongoose.model<IResponse>('Response', ResponseSchema);
