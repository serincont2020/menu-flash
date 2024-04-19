import { Module } from '@nestjs/common';
import { DetallePedidosController } from './detalle_pedidos.controller';
import { DetallePedidosService } from './detalle_pedidos.service';

@Module({
  controllers: [DetallePedidosController],
  providers: [DetallePedidosService]
})
export class DetallePedidosModule {}
