import { Module } from '@nestjs/common';
import { BebidasController } from './bebidas.controller';
import { BebidasService } from './bebidas.service';

@Module({
  controllers: [BebidasController],
  providers: [BebidasService]
})
export class BebidasModule {}
