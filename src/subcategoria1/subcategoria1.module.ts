import { Module } from '@nestjs/common';
import { Subcategoria1Controller } from './subcategoria1.controller';
import { Subcategoria1Service } from './subcategoria1.service';

@Module({
  controllers: [Subcategoria1Controller],
  providers: [Subcategoria1Service]
})
export class Subcategoria1Module {}
