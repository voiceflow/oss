import { ChargebeeResource } from '../chargebee-resource.class';
export class CouponCodeResource extends ChargebeeResource {
  public readonly create = super.request('couponCode', 'create', {
    coupon_code: { optional: false },
  });

  public readonly retrieve = super.request('couponCode', 'retrieve', {
    coupon_code: { optional: false },
  });

  public readonly list = super.listRequest('couponCode', 'list', {
    coupon_code: { optional: false },
  });

  public readonly archive = super.request('couponCode', 'archive', {
    coupon_code: { optional: false },
  });
}
