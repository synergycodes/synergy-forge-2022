import { Module } from '@nestjs/common';

import { SquareModule } from '../modules/square/square.module';
import { TasksModule } from '../modules/tasks/tasks.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

const featureModules = [
  SquareModule,
  TasksModule
]

@Module({
  imports: [
    ...featureModules
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
