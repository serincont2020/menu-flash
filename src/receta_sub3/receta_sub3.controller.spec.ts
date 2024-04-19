import { Test, TestingModule } from '@nestjs/testing';
import { RecetaSub3Controller } from './receta_sub3.controller';

describe('RecetaSub3Controller', () => {
  let controller: RecetaSub3Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RecetaSub3Controller],
    }).compile();

    controller = module.get<RecetaSub3Controller>(RecetaSub3Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
