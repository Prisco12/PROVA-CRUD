import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type DestinoDocument = HydratedDocument<Destino>;

@Schema()
export class Destino {

  @Prop({required: true})
  nome: string;

}

export const DestinoSchema = SchemaFactory.createForClass(Destino);
