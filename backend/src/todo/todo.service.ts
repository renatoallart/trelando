import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTodoInput } from './dto/create-todo.input';
import { UpdateTodoInput } from './dto/update-todo.input';

@Injectable()
export class TodoService {
  constructor(private prisma: PrismaService) {}
  create({ todo }: CreateTodoInput) {
    return this.prisma.todo.create({
      data: { todo },
    });
  }

  findAll() {
    return this.prisma.todo.findMany();
  }

  findOne(id: string) {
    return this.prisma.todo.findUnique({
      where: { id },
    });
  }

  update(id: string, todo: string) {
    return this.prisma.todo.update({
      where: { id },
      data: { todo },
    });
  }

  remove(id: string) {
    return this.prisma.todo.delete({
      where: { id },
    });
  }
}
