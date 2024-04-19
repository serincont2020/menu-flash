import { Module } from '@nestjs/common';
import { RecetaSub2Controller } from './receta_sub2.controller';
import { RecetaSub2Service } from './receta_sub2.service';

@Module({
  controllers: [RecetaSub2Controller],
  providers: [RecetaSub2Service]
})
export class RecetaSub2Module {}
