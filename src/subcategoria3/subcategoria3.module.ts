import { Module } from '@nestjs/common';
import { Subcategoria3Controller } from './subcategoria3.controller';
import { Subcategoria3Service } from './subcategoria3.service';

@Module({
  controllers: [Subcategoria3Controller],
  providers: [Subcategoria3Service]
})
export class Subcategoria3Module {}
