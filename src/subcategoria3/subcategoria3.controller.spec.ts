import { Test, TestingModule } from '@nestjs/testing';
import { Subcategoria3Controller } from './subcategoria3.controller';

describe('Subcategoria3Controller', () => {
  let controller: Subcategoria3Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Subcategoria3Controller],
    }).compile();

    controller = module.get<Subcategoria3Controller>(Subcategoria3Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
