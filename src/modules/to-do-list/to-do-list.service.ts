import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateToDoListDto } from './dto/create-to-do-list.dto';
import { UpdateToDoListDto } from './dto/update-to-do-list.dto';
import { CreateToDoListService } from 'src/usecases/to-do-list/create-to-do-list/create-to-do-list.service';
import { DeleteToDoListService } from 'src/usecases/to-do-list/delete-to-do-list/delete-to-do-list.service';
import { GetOneToDoListService } from 'src/usecases/to-do-list/get-one-to-do-list/get-one-to-do-list.service';
import { UpdateToDoListService } from 'src/usecases/to-do-list/update-to-do-list/update-to-do-list.service';
import { GetToDoListService } from 'src/usecases/to-do-list/get-to-do-list/get-to-do-list.service';

@Injectable()
export class ToDoListService {
  constructor(
    private readonly create_to_do_list_service: CreateToDoListService,
    private readonly delete_to_do_list_service: DeleteToDoListService,
    private readonly get_one_to_do_list_service: GetOneToDoListService,
    private readonly get_to_do_list_service: GetToDoListService,
    private readonly update_to_do_list_service: UpdateToDoListService,
  ) {}
  create(createToDoListDto: CreateToDoListDto) {
    try {
      return this.create_to_do_list_service.execute()
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  findAll() {
    return `This action returns all toDoList`;
  }

  findOne(id: number) {
    return `This action returns a #${id} toDoList`;
  }

  update(id: number, updateToDoListDto: UpdateToDoListDto) {
    return `This action updates a #${id} toDoList`;
  }

  remove(id: number) {
    return `This action removes a #${id} toDoList`;
  }
}
