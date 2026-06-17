import { ChargebeeResource } from '../chargebee-resource.class';
export class PaymentIntentResource extends ChargebeeResource {
  public readonly create = super.request('paymentIntent', 'create', {
    payment_intent: { optional: false },
  });

  public readonly update = super.request('paymentIntent', 'update', {
    payment_intent: { optional: false },
  });

  public readonly retrieve = super.request('paymentIntent', 'retrieve', {
    payment_intent: { optional: false },
  });
}
