import { ChargebeeResource } from '../chargebee-resource.class';
export class ResourceMigrationResource extends ChargebeeResource {
  public readonly retrieveLatest = super.request('resourceMigration', 'retrieveLatest', {
    resource_migration: { optional: false },
  });
}
