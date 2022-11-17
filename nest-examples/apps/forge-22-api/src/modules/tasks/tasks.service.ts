import { Injectable } from '@nestjs/common';
import { Task } from '@my-fullstack-app/types';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class TasksService {

  constructor(
    private databaseService: DatabaseService
  ) { }

  async createTask(name: string) {
    const result = await this.databaseService.task.create({
      data: {
        name
      }
    });

    return result as Task;
  }

  getAll() {
    return this.databaseService.task.findMany();
  }

  deleteById(id: number) {
    return this.databaseService.task.delete({
      where: {
        id
      }
    })
  }

}
