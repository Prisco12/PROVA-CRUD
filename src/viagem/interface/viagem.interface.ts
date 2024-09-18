import mongoose from "mongoose";
import { CreateDestinoDto } from "src/destino/dto/create-destino.dto";

export interface ViagemInterface {
    nome: string;
    dataSaida: Date;
    dataChegada: Date;
    valor: number;
    destino: CreateDestinoDto[];
}