import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DestinoService } from './destino.service';
import { CreateDestinoDto } from './dto/create-destino.dto';
import { UpdateDestinoDto } from './dto/update-destino.dto';
import { DestinoInterface } from './interface/destino.interface';
import mongoose from 'mongoose';

@Controller('destino')
export class DestinoController {
  constructor(private readonly destinoService: DestinoService) {}

  @Post()
  create(@Body() createDestinoDto: CreateDestinoDto): Promise <DestinoInterface> {
    return this.destinoService.create(createDestinoDto);
  }

  @Get()
  findAll() {
    return this.destinoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: mongoose.Types.ObjectId) {
    return this.destinoService.findOne(id);
  }

  @Get('name')
  findByName(@Body('name') name: string) {
      return this.destinoService.findByName(name);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDestinoDto: UpdateDestinoDto) {
    return this.destinoService.update(id, updateDestinoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.destinoService.remove(id);
  }
}
