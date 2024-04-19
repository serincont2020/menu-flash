import { Test, TestingModule } from '@nestjs/testing';
import { RecetaSub2Controller } from './receta_sub2.controller';

describe('RecetaSub2Controller', () => {
  let controller: RecetaSub2Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RecetaSub2Controller],
    }).compile();

    controller = module.get<RecetaSub2Controller>(RecetaSub2Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
