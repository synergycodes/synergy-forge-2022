import { Module } from '@nestjs/common';
import { SquareController } from './square.controller';

const controllers = [
  SquareController
]

@Module({
  controllers,
})
export class SquareModule { }
