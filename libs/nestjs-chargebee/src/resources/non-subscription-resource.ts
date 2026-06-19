import { ChargebeeResource } from '../chargebee-resource.class';
export class NonSubscriptionResource extends ChargebeeResource {
  public readonly processReceipt = super.request('nonSubscription', 'processReceipt', {
    non_subscription: { optional: false },
  });
}
