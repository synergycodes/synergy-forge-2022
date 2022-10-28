import { Body, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { AbstractService } from "./abstract-service";

export abstract class AbstractController<T> {
  constructor(protected service: AbstractService<T>) {
  }

  @Post()
  create(@Body() createDto: Partial<T>) {
    return this.service.create(createDto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDto: Partial<T>
  ) {
    return this.service.update(+id, updateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
