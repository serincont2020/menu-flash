import { Test, TestingModule } from '@nestjs/testing';
import { Subcategoria2Controller } from './subcategoria2.controller';

describe('Subcategoria2Controller', () => {
  let controller: Subcategoria2Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Subcategoria2Controller],
    }).compile();

    controller = module.get<Subcategoria2Controller>(Subcategoria2Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
