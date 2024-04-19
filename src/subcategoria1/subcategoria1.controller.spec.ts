import { Test, TestingModule } from '@nestjs/testing';
import { Subcategoria1Controller } from './subcategoria1.controller';

describe('Subcategoria1Controller', () => {
  let controller: Subcategoria1Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Subcategoria1Controller],
    }).compile();

    controller = module.get<Subcategoria1Controller>(Subcategoria1Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
