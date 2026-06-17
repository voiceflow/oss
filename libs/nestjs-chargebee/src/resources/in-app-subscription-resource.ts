import { ChargebeeResource } from '../chargebee-resource.class';
export class InAppSubscriptionResource extends ChargebeeResource {
  public readonly processReceipt = super.request('inAppSubscription', 'processReceipt', {
    in_app_subscription: { optional: false },
  });

  public readonly importReceipt = super.request('inAppSubscription', 'importReceipt', {
    in_app_subscription: { optional: false },
  });

  public readonly importSubscription = super.request('inAppSubscription', 'importSubscription', {
    in_app_subscription: { optional: false },
  });

  public readonly retrieveStoreSubs = super.request('inAppSubscription', 'retrieveStoreSubs', {
    in_app_subscription: { optional: false },
  });
}
