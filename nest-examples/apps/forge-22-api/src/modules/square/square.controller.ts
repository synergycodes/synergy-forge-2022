import { Controller, Get, Param } from '@nestjs/common';

@Controller('square')
export class SquareController {

  @Get(':number')
  getSquare(@Param('number') number: number) {
    return Math.pow(number, 2);
  }

  @Get(':number/:power')
  getPower(@Param('number') number: number, @Param('power') power: number) {
    return Math.pow(number, power);
  }

}
