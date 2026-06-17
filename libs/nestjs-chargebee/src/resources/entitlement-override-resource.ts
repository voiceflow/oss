import { ChargebeeResource } from '../chargebee-resource.class';
export class EntitlementOverrideResource extends ChargebeeResource {
  public readonly addEntitlementOverrideForSubscription = super.request(
    'entitlementOverride',
    // eslint-disable-next-line no-secrets/no-secrets
    'addEntitlementOverrideForSubscription',
    { entitlement_override: { optional: false } }
  );

  public readonly listEntitlementOverrideForSubscription = super.listRequest(
    'entitlementOverride',
    'listEntitlementOverrideForSubscription',
    { entitlement_override: { optional: false } }
  );
}
