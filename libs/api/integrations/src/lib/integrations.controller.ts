import { Controller, Get, Post } from '@nestjs/common';
import { IntegrationsService } from './integrations.service';

@Controller('integrations')
export class IntegrationsController {
  constructor(private integrationsService: IntegrationsService) {}

  @Get()
  getAll() {
    return this.integrationsService.getAll();
  }

  @Post()
  save() {
    return this.integrationsService.getAll();
  }
}
