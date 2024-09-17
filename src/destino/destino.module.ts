import { Module } from '@nestjs/common';
import { DestinoService } from './destino.service';
import { DestinoController } from './destino.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Destino, DestinoSchema } from './schema/destino.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Destino.name, schema: DestinoSchema }])],
  controllers: [DestinoController],
  providers: [DestinoService],
  exports: [DestinoService],
})
export class DestinoModule {}
