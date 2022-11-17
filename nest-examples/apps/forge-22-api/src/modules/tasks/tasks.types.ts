import { ApiProperty } from '@nestjs/swagger';
import { Task } from '@my-fullstack-app/types';

export class CreateTaskDto implements Partial<Task> {
  @ApiProperty({
    description: 'The name of the task to be created',
    example: 'Give me a cookie'
  })
  name: string;
}
