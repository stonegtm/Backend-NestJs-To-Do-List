import { Test, TestingModule } from '@nestjs/testing';
import { DeleteToDoListService } from './delete-to-do-list.service';

describe('DeleteToDoListService', () => {
  let service: DeleteToDoListService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeleteToDoListService],
    }).compile();

    service = module.get<DeleteToDoListService>(DeleteToDoListService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
