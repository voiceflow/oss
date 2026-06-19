import { ChargebeeResource } from '../chargebee-resource.class';

export class CardResource extends ChargebeeResource {
  public readonly retrieve = super.request('card', 'retrieve', {
    card: { optional: false },
  });

  public readonly updateCardForCustomer = super.request('card', 'updateCardForCustomer', {
    card: { optional: false },
    customer: { optional: false },
  });

  public readonly switchGatewayForCustomer = super.request('card', 'switchGatewayForCustomer', {
    card: { optional: false },
    customer: { optional: false },
  });

  public readonly copyCardForCustomer = super.request('card', 'copyCardForCustomer', {
    third_party_payment_method: { optional: false },
  });

  public readonly deleteCardForCustomer = super.request('card', 'deleteCardForCustomer', {
    customer: { optional: false },
  });
}
