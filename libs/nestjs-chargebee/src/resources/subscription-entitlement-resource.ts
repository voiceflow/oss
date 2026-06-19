import { ChargebeeResource } from '../chargebee-resource.class';
export class SubscriptionEntitlementResource extends ChargebeeResource {
  public readonly subscriptionEntitlementsForSubscription = super.listRequest(
    'subscriptionEntitlement',
    'subscriptionEntitlementsForSubscription',
    { subscription_entitlement: { optional: false } }
  );

  public readonly setSubscriptionEntitlementAvailability = super.listRequest(
    'subscriptionEntitlement',
    'setSubscriptionEntitlementAvailability',
    { subscription_entitlement: { optional: false } }
  );
}
