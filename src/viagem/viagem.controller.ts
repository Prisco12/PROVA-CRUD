import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ViagemService } from './viagem.service';
import { CreateViagemDto } from './dto/create-viagem.dto';
import { UpdateViagemDto } from './dto/update-viagem.dto';
import { ViagemInterface } from './interface/viagem.interface';
import mongoose from 'mongoose';

@Controller('viagem')
export class ViagemController {
  constructor(private readonly viagemService: ViagemService) {}

  @Post()
  create(@Body() createViagemDto: CreateViagemDto) {
    return this.viagemService.create(createViagemDto);
  }

  @Post('add-destino/:id')
  addDestino(@Param('id') id: string, @Body('destino') destino: mongoose.Types.ObjectId) {
    return this.viagemService.addDestino(id, destino);
  }

  @Post('remove-destino/:id')
  removeDestino(@Param('id') id: string, @Body('destino') destino: mongoose.Types.ObjectId) {
    return this.viagemService.removeDestino(id, destino);
  }

  @Get()
  findAll() {
    return this.viagemService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.viagemService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateViagemDto: UpdateViagemDto) {
    return this.viagemService.update(id, updateViagemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.viagemService.remove(id);
  }
}
