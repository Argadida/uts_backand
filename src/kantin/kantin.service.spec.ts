import { Test, TestingModule } from '@nestjs/testing';
import { KantinService } from './kantin.service';

describe('KantinService', () => {
  let service: KantinService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KantinService],
    }).compile();

    service = module.get<KantinService>(KantinService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
