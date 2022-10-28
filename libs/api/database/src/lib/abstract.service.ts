import { Logger } from "@nestjs/common";
import { DatabaseService } from "@synergy-forge/api/database";

export abstract class AbstractService<T> {
  protected entityName!: string;

  constructor(protected db: DatabaseService) {
  }

  async findOne<T>(id: number): Promise<T> {
    try {
      // @ts-ignore
      return await this.db[this.entityName].findFirst({where: {id}});
    } catch (e: any) {
      Logger.error(e.message, e.stack, 'DB');
      throw new Error('query.findOne error');
    }
  }

  async findAll<T>(): Promise<T> {
    try {
      // @ts-ignore
      return await this.db[this.entityName].findMany();
    } catch (e: any) {
      Logger.error(e.message, e.stack, 'DB');
      throw new Error('query.findAll error');
    }
  }

  async create(data: Partial<T>): Promise<T> {
    try {
      // @ts-ignore
      return await this.db[this.entityName].create({data});
    } catch (e: any) {
      Logger.error(e.message, e.stack, 'DB');
      throw new Error('query.create error');
    }
  }

  async update(id: number, data: Partial<T>): Promise<T> {
    try {
      // @ts-ignore
      return await this.db[this.entityName].update({
        where: {id},
        data
      })
    } catch (e: any) {
      Logger.error(e.message, e.stack, 'DB');
      throw new Error('query.create error');
    }
  }

  async remove(id: number): Promise<void> {
    try {
      // @ts-ignore
      return await this.db[this.entityName].delete({where: {id}});
    } catch (e: any) {
      Logger.error(e.message, e.stack, 'DB');
      throw new Error('query.remove error');
    }
  }
}
