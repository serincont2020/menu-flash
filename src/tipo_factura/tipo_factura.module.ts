import { Module } from '@nestjs/common';
import { TipoFacturaController } from './tipo_factura.controller';
import { TipoFacturaService } from './tipo_factura.service';

@Module({
  controllers: [TipoFacturaController],
  providers: [TipoFacturaService]
})
export class TipoFacturaModule {}
