import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateToDoListDto } from './dto/create-to-do-list.dto';
import { UpdateToDoListDto } from './dto/update-to-do-list.dto';

import { Todo } from 'src/common/type';

@Injectable()
export class ToDoListService {
  constructor() {}
  private todos: Todo[] = [];
  private countId = 1;

  async create(createToDoListDto: CreateToDoListDto) {
    try {
      const todo: Todo = {
        id: this.countId++,
        ...createToDoListDto,
      };
      this.todos.push(todo);
      return {
        result: true,
        status: 201,
        message: 'Create success.',
        data: todo,
      };
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  findAll() {
    try {
      return { result: true, status: 200, data: this.todos };
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  findOne(id: number) {
    try {
      const todo = this.todos.find((f) => f.id === id);
      if (!todo) {
        throw new NotFoundException(`Todo with id ${id} not found`);
      }
      return {
        result: true,
        status: 200,
        data: todo,
      };
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  update(id: number, updateToDoListDto: UpdateToDoListDto) {
    try {
      const index = this.todos.findIndex((todo) => todo.id === id);
      if (index === -1) {
        throw new NotFoundException(`Todo with id ${id} not found`);
      }
      const updatedTodo = { ...this.todos[index], ...updateToDoListDto };
      this.todos[index] = updatedTodo;
      return {
        result: true,
        status: 204,
        message: 'Update success.',
        data: updatedTodo,
      };
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  remove(id: number) {
    try {
      const index = this.todos.findIndex((todo) => todo.id === id);
      if (index === -1) {
        throw new NotFoundException(`Todo with id ${id} not found`);
      }
      this.todos.splice(index, 1);
      return { result: true, status: 204, message: 'Delete success.' };
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
}
