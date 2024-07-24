import { Module } from '@nestjs/common';
import { ToDoListService } from './to-do-list.service';
import { ToDoListController } from './to-do-list.controller';

@Module({
  controllers: [ToDoListController],
  providers: [ToDoListService],
})
export class ToDoListModule {}
