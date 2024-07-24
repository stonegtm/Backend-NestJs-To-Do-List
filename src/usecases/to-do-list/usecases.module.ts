import { Module } from '@nestjs/common';
import { CreateToDoListService } from './create-to-do-list/create-to-do-list.service';
import { DeleteToDoListService } from './delete-to-do-list/delete-to-do-list.service';
import { GetOneToDoListService } from './get-one-to-do-list/get-one-to-do-list.service';
import { GetToDoListService } from './get-to-do-list/get-to-do-list.service';
import { UpdateToDoListService } from './update-to-do-list/update-to-do-list.service';

@Module({
  imports: [],
  providers: [
    CreateToDoListService,
    DeleteToDoListService,
    GetOneToDoListService,
    GetToDoListService,
    UpdateToDoListService,
  ],
  exports: [
    CreateToDoListService,
    DeleteToDoListService,
    GetOneToDoListService,
    GetToDoListService,
    UpdateToDoListService,
  ],
})
export class UsecasesModule {}
