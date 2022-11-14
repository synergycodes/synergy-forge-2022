import { Controller } from '@nestjs/common';
import { IntegrationsService } from '../services/integrations.service';
import { IntegrationEntity } from "../entities/integration.entity";
import { AbstractController } from "@synergy-forge/api/core";

@Controller('integrations')
export class IntegrationsController extends AbstractController<IntegrationEntity> {

  constructor(protected override service: IntegrationsService) {
    super(service);
  }
}
