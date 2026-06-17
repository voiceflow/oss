import { ChargebeeResource } from '../chargebee-resource.class';
export class SiteMigrationDetailResource extends ChargebeeResource {
  public readonly list = super.listRequest('siteMigrationDetail', 'list', {
    site_migration_detail: { optional: false },
  });
}
