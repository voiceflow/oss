import { ChargebeeResource } from '../chargebee-resource.class';
export class ItemFamilyResource extends ChargebeeResource {
  public readonly create = super.request('itemFamily', 'create', {
    item_family: { optional: false },
  });

  public readonly retrieve = super.request('itemFamily', 'retrieve', {
    item_family: { optional: false },
  });

  public readonly list = super.listRequest('itemFamily', 'list', {
    item_family: { optional: false },
  });

  public readonly update = super.request('itemFamily', 'update', {
    item_family: { optional: false },
  });

  public readonly delete = super.request('itemFamily', 'delete', {
    item_family: { optional: false },
  });
}
