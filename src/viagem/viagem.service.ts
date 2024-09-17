import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateViagemDto } from './dto/create-viagem.dto';
import { UpdateViagemDto } from './dto/update-viagem.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Viagem, ViagemDocument } from './schema/viagem.schema';
import mongoose, { Model } from 'mongoose';
import { DestinoService } from 'src/destino/destino.service';
import { error } from 'console';

@Injectable()
export class ViagemService {
  constructor(@InjectModel(Viagem.name) 
              private viagemModel: Model<ViagemDocument>,
              private destinoService: DestinoService) {}

  create(createViagemDto: CreateViagemDto) {
    return this.viagemModel.create(createViagemDto);
  }

  async addDestino(id: string, destino: mongoose.Types.ObjectId) {
    const erro = { message: [] }
    const destinoData = await this.destinoService.findAll()
    if (destinoData.length === 0) {
      return erro.message.push('Não há destinos cadastrados')
    } else {
      const viagem = await this.viagemModel.findById(id);
      if (!viagem) {
       return erro.message.push('Viagem não encontrada, insira um id válido')	
      } else {
        const destinoResult = await this.destinoService.findOne(destino);
        if (!destinoResult) {
          return erro.message.push('Destino não encontrado, insira um id válido')
        } else {
          return await this.viagemModel.findByIdAndUpdate(id, {destino: destino}, {new: true}).populate('destino').exec();
        }
      }
    }
  }

  async removeDestino(id: string, destino: mongoose.Types.ObjectId) {
    const erro = { message: [] }
    const destinoData = await this.destinoService.findAll()
    if (destinoData.length === 0) {
      return erro.message.push('Não há destinos cadastrados')
    } else {
      const viagem = await this.viagemModel.findById(id);
      if (!viagem) {
       return erro.message.push('Viagem não encontrada, insira um id válido')	
      } else {
        const destinoResult = await this.destinoService.findOne(destino);
        if (!destinoResult) {
          return erro.message.push('Destino não encontrado, insira um id válido')
        } else {
          return await this.viagemModel.findByIdAndUpdate(id, {$unset: {destino: '' }}, {new: true}).populate('destino').exec();
        }
      }
    }
  }

  findAll() {
    return this.viagemModel.find().populate('destino').exec();
  }

  findOne(id: string) {
    return this.viagemModel.findById(id);
  }

  update(id: string, updateViagemDto: UpdateViagemDto) {
    return this.viagemModel.findByIdAndUpdate(id, {$set: updateViagemDto}, {new: true});
  }

  remove(id: string) {
    return this.viagemModel.deleteOne({ _id: id });
  }
}
