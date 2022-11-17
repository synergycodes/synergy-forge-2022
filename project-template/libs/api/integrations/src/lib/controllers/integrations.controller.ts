import { Controller, Get } from '@nestjs/common';
import { IntegrationsService } from '../services/integrations.service';
import { IntegrationEntity } from "../entities/integration.entity";
import { AbstractController } from "@synergy-forge/api/core";

@Controller('integrations')
export class IntegrationsController extends AbstractController<IntegrationEntity> {

  constructor(protected override service: IntegrationsService) {
    super(service);
  }

  @Get(':id/full')
  findFull(id: number) {
    return this.service.findFull(id);
  }
}
