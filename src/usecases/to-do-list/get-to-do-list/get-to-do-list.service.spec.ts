import { Test, TestingModule } from '@nestjs/testing';
import { GetToDoListService } from './get-to-do-list.service';

describe('GetToDoListService', () => {
  let service: GetToDoListService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetToDoListService],
    }).compile();

    service = module.get<GetToDoListService>(GetToDoListService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
