import { Module } from '@nestjs/common';
import { Subcategoria2Controller } from './subcategoria2.controller';
import { Subcategoria2Service } from './subcategoria2.service';

@Module({
  controllers: [Subcategoria2Controller],
  providers: [Subcategoria2Service]
})
export class Subcategoria2Module {}
