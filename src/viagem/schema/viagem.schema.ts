import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { CreateDestinoDto } from 'src/destino/dto/create-destino.dto';

export type ViagemDocument = HydratedDocument<Viagem>;

@Schema()
export class Viagem {

  @Prop({required: true})
  nome: string;

  @Prop({required: true})
  dataSaida: Date;

  @Prop({required: true})
  dataChegada: Date;

  @Prop({required: true})
  valor: number;

  @Prop([CreateDestinoDto])
  destino: CreateDestinoDto[];
}

export const ViagemSchema = SchemaFactory.createForClass(Viagem);
