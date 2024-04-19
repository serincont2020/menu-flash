import { Module } from '@nestjs/common';
import { TipoPedidoController } from './tipo_pedido.controller';
import { TipoPedidoService } from './tipo_pedido.service';

@Module({
  controllers: [TipoPedidoController],
  providers: [TipoPedidoService]
})
export class TipoPedidoModule {}
