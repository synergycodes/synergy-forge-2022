import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { Task } from '@my-fullstack-app/types';

import { TasksService } from './tasks.service';
import { CreateTaskDto } from './tasks.types';

@Controller('tasks')
@ApiTags('tasks')
export class TasksController {

  constructor(
    private tasksService: TasksService
  ) { }

  @Post()
  @ApiOperation({
    description: 'Create task with a given name and save it in the db'
  })
  createTask(@Body() taskDto: CreateTaskDto) {
    const { name } = taskDto;
    return this.tasksService.createTask(name);
  }

  @Get()
  getAll(): Promise<Task[]> {
    return this.tasksService.getAll();
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.tasksService.deleteById(id);
  }
}
