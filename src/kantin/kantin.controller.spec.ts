import { Test, TestingModule } from '@nestjs/testing';
import { KantinController } from './kantin.controller';

describe('KantinController', () => {
  let controller: KantinController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KantinController],
    }).compile();

    controller = module.get<KantinController>(KantinController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
