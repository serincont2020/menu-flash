import { Test, TestingModule } from '@nestjs/testing';
import { TipoFacturaController } from './tipo_factura.controller';

describe('TipoFacturaController', () => {
  let controller: TipoFacturaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TipoFacturaController],
    }).compile();

    controller = module.get<TipoFacturaController>(TipoFacturaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
