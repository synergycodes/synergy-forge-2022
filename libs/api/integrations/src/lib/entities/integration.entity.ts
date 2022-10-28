import { Integration } from '@prisma/client';

export class IntegrationEntity implements Integration {
  id: number;
  name: string;
  budget: number;
  participants: number;
  date_start: Date;
  date_end: Date;
}
