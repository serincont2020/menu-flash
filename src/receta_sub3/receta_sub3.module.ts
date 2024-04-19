import { Module } from '@nestjs/common';
import { RecetaSub3Controller } from './receta_sub3.controller';
import { RecetaSub3Service } from './receta_sub3.service';

@Module({
  controllers: [RecetaSub3Controller],
  providers: [RecetaSub3Service]
})
export class RecetaSub3Module {}
