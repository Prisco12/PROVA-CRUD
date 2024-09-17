import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

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

  @Prop({
    type: mongoose.Types.ObjectId,
    ref: 'Destino',
    required: false,
  })
  destino: mongoose.Types.ObjectId;
}

export const ViagemSchema = SchemaFactory.createForClass(Viagem);
