import { CategoryItem } from '@prisma/client';

export class CategoryItemEntity implements CategoryItem {
  id: number;
  name: string;
  cost: number;
  per_participant: boolean;
  versionId: number;
  categoryId: number;

}
