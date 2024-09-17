import { Module } from '@nestjs/common';
import { ViagemService } from './viagem.service';
import { ViagemController } from './viagem.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Viagem, ViagemSchema } from './schema/viagem.schema';
import { DestinoModule } from 'src/destino/destino.module';

@Module({
  imports: [MongooseModule.forFeature([{ name: Viagem.name, schema: ViagemSchema }]), DestinoModule],
  controllers: [ViagemController],
  providers: [ViagemService],
})
export class ViagemModule {}
