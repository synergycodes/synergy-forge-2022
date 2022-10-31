import { Module } from '@nestjs/common';
import { DatabaseModule } from '@synergy-forge/api/database';
import { IntegrationsModule } from '@synergy-forge/api/integrations';

@Module({
  imports: [DatabaseModule, IntegrationsModule],
})
export class AppModule {}
