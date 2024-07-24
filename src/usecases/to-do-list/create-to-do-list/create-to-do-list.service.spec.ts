import { Test, TestingModule } from '@nestjs/testing';
import { CreateToDoListService } from './create-to-do-list.service';

describe('CreateToDoListService', () => {
  let service: CreateToDoListService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreateToDoListService],
    }).compile();

    service = module.get<CreateToDoListService>(CreateToDoListService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
