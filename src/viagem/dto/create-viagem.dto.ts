import { Type } from "class-transformer";
import { IsDate, IsMongoId, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
import mongoose, { mongo } from "mongoose";

export class CreateViagemDto {
    @IsNotEmpty()
    @IsString()
    nome: string;

    @IsNotEmpty()
    @Type(() => Date)
    @IsDate()
    dataSaida: Date; 

    @IsNotEmpty()
    @Type(() => Date)
    @IsDate()
    dataChegada: Date; 

    @IsNotEmpty()
    @IsNumber()
    valor: number;

    @IsOptional()
    @IsMongoId()
    destino: mongoose.Types.ObjectId;
}
