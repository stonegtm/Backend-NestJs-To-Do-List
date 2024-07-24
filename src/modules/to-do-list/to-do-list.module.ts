import { Module } from '@nestjs/common';
import { ToDoListService } from './to-do-list.service';
import { ToDoListController } from './to-do-list.controller';
import { UsecasesModule } from 'src/usecases/to-do-list/usecases.module';

@Module({
  imports: [UsecasesModule],
  controllers: [ToDoListController],
  providers: [ToDoListService],
})
export class ToDoListModule {}
