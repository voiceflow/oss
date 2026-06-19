import { ChargebeeResource } from '../chargebee-resource.class';
export class CouponSetResource extends ChargebeeResource {
  public readonly create = super.request('couponSet', 'create', {
    coupon_set: { optional: false },
  });

  public readonly addCouponCodes = super.request('couponSet', 'addCouponCodes', { coupon_set: { optional: false } });

  public readonly list = super.listRequest('couponSet', 'list', {
    coupon_set: { optional: false },
  });

  public readonly retrieve = super.request('couponSet', 'retrieve', {
    coupon_set: { optional: false },
  });

  public readonly update = super.request('couponSet', 'update', {
    coupon_set: { optional: false },
  });

  public readonly delete = super.request('couponSet', 'delete', {
    coupon_set: { optional: false },
  });

  public readonly deleteUnusedCouponCodes = super.request('couponSet', 'deleteUnusedCouponCodes', {
    coupon_set: { optional: false },
  });
}
