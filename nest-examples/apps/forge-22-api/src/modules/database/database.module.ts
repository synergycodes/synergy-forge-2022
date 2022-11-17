import { Module } from '@nestjs/common';
import { DatabaseService } from './database.service';

const services = [
  DatabaseService
]

@Module({
  providers: services,
  exports: services
})
export class DatabaseModule { }
