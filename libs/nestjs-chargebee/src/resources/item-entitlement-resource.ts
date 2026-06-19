import { ChargebeeResource } from '../chargebee-resource.class';
export class ItemEntitlementResource extends ChargebeeResource {
  public readonly itemEntitlementsForItem = super.listRequest('itemEntitlement', 'itemEntitlementsForItem', {
    item_entitlement: { optional: false },
  });

  public readonly itemEntitlementsForFeature = super.listRequest('itemEntitlement', 'itemEntitlementsForFeature', {
    item_entitlement: { optional: false },
  });

  public readonly addItemEntitlements = super.listRequest('itemEntitlement', 'addItemEntitlements', {
    item_entitlement: { optional: false },
  });

  public readonly upsertOrRemoveItemEntitlementsForItem = super.listRequest(
    'itemEntitlement',
    'upsertOrRemoveItemEntitlementsForItem',
    { item_entitlement: { optional: false } }
  );
}
