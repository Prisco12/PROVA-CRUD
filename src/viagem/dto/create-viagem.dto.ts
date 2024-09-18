import { Type } from "class-transformer";
import { ArrayMinSize, IsArray, IsDate, IsMongoId, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
import mongoose, { mongo } from "mongoose";
import { CreateDestinoDto } from "src/destino/dto/create-destino.dto";

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

    @IsArray()
    @IsOptional()
    @ArrayMinSize(0)
    destino: CreateDestinoDto[];
}
