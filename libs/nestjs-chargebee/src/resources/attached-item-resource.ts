import { ChargebeeResource } from '../chargebee-resource.class';

export class AttachedItemResource extends ChargebeeResource {
  public readonly create = super.request('attachedItem', 'create', {
    attached_item: { optional: false },
  });

  public readonly update = super.request('attachedItem', 'update', {
    attached_item: { optional: false },
  });

  public readonly retrieve = super.request('attachedItem', 'retrieve', {
    attached_item: { optional: false },
  });

  public readonly delete = super.request('attachedItem', 'delete', {
    attached_item: { optional: false },
  });

  public readonly list = super.listRequest('attachedItem', 'list', {
    attached_item: { optional: false },
  });
}
