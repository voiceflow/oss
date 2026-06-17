import { ChargebeeResource } from '../chargebee-resource.class';
export class PaymentVoucherResource extends ChargebeeResource {
  public readonly create = super.request('paymentVoucher', 'create', {
    payment_voucher: { optional: false },
  });

  public readonly retrieve = super.request('paymentVoucher', 'retrieve', {
    payment_voucher: { optional: false },
  });

  // eslint-disable-next-line no-secrets/no-secrets
  public readonly paymentVouchersForInvoice = super.listRequest('paymentVoucher', 'paymentVouchersForInvoice', {
    payment_voucher: { optional: false },
  });

  public readonly paymentVouchersForCustomer = super.listRequest('paymentVoucher', 'paymentVouchersForCustomer', {
    payment_voucher: { optional: false },
  });
}
