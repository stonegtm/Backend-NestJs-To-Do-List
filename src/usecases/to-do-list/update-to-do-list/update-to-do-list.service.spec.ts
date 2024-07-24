import { Test, TestingModule } from '@nestjs/testing';
import { UpdateToDoListService } from './update-to-do-list.service';

describe('UpdateToDoListService', () => {
  let service: UpdateToDoListService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UpdateToDoListService],
    }).compile();

    service = module.get<UpdateToDoListService>(UpdateToDoListService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
