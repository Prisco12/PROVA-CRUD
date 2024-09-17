import mongoose from "mongoose";

export interface ViagemInterface {
    nome: string;
    dataSaida: Date;
    dataChegada: Date;
    valor: number;
    destino: mongoose.Types.ObjectId;
}