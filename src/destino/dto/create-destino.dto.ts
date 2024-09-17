import { IsNotEmpty, IsString } from "class-validator";

export class CreateDestinoDto {
    @IsNotEmpty()
    @IsString()
    nome: string;
}
