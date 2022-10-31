import { Injectable } from '@nestjs/common';
import { DatabaseService } from '@synergy-forge/api/database';
import { Integration } from '@synergy-forge/shared/data-access';

@Injectable()
export class IntegrationsService {
  constructor(private db: DatabaseService) {}

  getAll(): Promise<Integration[]> {
    return this.db.integration.findMany();
  }
}
