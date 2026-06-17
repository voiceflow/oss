import { ChargebeeResource } from '../chargebee-resource.class';
export class PromotionalCreditResource extends ChargebeeResource {
  public readonly add = super.request('promotionalCredit', 'add', {
    promotional_credit: { optional: false },
  });

  public readonly deduct = super.request('promotionalCredit', 'deduct', {
    promotional_credit: { optional: false },
  });

  public readonly set = super.request('promotionalCredit', 'set', {
    promotional_credit: { optional: false },
  });

  public readonly list = super.listRequest('promotionalCredit', 'list', {
    promotional_credit: { optional: false },
  });

  public readonly retrieve = super.request('promotionalCredit', 'retrieve', {
    promotional_credit: { optional: false },
  });
}
