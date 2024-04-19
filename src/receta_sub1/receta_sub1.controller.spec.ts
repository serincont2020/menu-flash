import { Test, TestingModule } from '@nestjs/testing';
import { RecetaSub1Controller } from './receta_sub1.controller';

describe('RecetaSub1Controller', () => {
  let controller: RecetaSub1Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RecetaSub1Controller],
    }).compile();

    controller = module.get<RecetaSub1Controller>(RecetaSub1Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
