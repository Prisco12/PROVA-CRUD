import { Module } from '@nestjs/common';
import { ViagemModule } from './viagem/viagem.module';
import { MongooseModule } from '@nestjs/mongoose';
import { DestinoModule } from './destino/destino.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/viagem'), ViagemModule, DestinoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
