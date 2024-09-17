import { Injectable } from '@nestjs/common';
import { CreateDestinoDto } from './dto/create-destino.dto';
import { UpdateDestinoDto } from './dto/update-destino.dto';
import { Destino, DestinoDocument } from './schema/destino.schema';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';

@Injectable()
export class DestinoService {
  constructor(@InjectModel(Destino.name) private destinoModel: Model<DestinoDocument>) {}

  create(createDestinoDto: CreateDestinoDto) {
    return this.destinoModel.create(createDestinoDto);
  }

  findAll() {
    return this.destinoModel.find();
  }

  findOne(id: mongoose.Types.ObjectId) {
    return this.destinoModel.findById(id);
  }

  update(id: string, updateDestinoDto: UpdateDestinoDto) {
    return this.destinoModel.findByIdAndUpdate(id, {$set: updateDestinoDto}, {new: true});
  }

  remove(id: string) {
    return this.destinoModel.deleteOne({ _id: id });
  }
}
