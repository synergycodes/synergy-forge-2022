import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';

@Module({
  imports: [
    DatabaseModule
  ],
  providers: [
    TasksService
  ],
  controllers: [
    TasksController
  ]
})
export class TasksModule { }
