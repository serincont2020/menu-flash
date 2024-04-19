import { Module } from '@nestjs/common';
import { RecetaSub1Controller } from './receta_sub1.controller';
import { RecetaSub1Service } from './receta_sub1.service';

@Module({
  controllers: [RecetaSub1Controller],
  providers: [RecetaSub1Service]
})
export class RecetaSub1Module {}
