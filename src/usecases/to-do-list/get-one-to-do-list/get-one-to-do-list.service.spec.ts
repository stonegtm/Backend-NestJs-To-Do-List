import { Test, TestingModule } from '@nestjs/testing';
import { GetOneToDoListService } from './get-one-to-do-list.service';

describe('GetOneToDoListService', () => {
  let service: GetOneToDoListService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetOneToDoListService],
    }).compile();

    service = module.get<GetOneToDoListService>(GetOneToDoListService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
