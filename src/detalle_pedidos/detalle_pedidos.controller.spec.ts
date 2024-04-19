import { Test, TestingModule } from '@nestjs/testing';
import { DetallePedidosController } from './detalle_pedidos.controller';

describe('DetallePedidosController', () => {
  let controller: DetallePedidosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DetallePedidosController],
    }).compile();

    controller = module.get<DetallePedidosController>(DetallePedidosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
