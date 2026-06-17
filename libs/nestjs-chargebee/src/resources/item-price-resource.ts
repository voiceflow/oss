import { ChargebeeResource } from '../chargebee-resource.class';
export class ItemPriceResource extends ChargebeeResource {
  public readonly create = super.request('itemPrice', 'create', {
    item_price: { optional: false },
  });

  public readonly retrieve = super.request('itemPrice', 'retrieve', {
    item_price: { optional: false },
  });

  public readonly update = super.request('itemPrice', 'update', {
    item_price: { optional: false },
  });

  public readonly list = super.listRequest('itemPrice', 'list', {
    item_price: { optional: false },
  });

  public readonly delete = super.request('itemPrice', 'delete', {
    item_price: { optional: false },
  });

  public readonly findApplicableItems = super.listRequest('itemPrice', 'findApplicableItems', {
    item: { optional: false },
  });

  public readonly findApplicableItemPrices = super.listRequest('itemPrice', 'findApplicableItemPrices', {
    item: { optional: false },
  });
}
