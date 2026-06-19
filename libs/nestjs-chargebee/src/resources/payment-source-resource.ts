import { ChargebeeResource } from '../chargebee-resource.class';
export class PaymentSourceResource extends ChargebeeResource {
  public readonly createUsingTempToken = super.request('paymentSource', 'createUsingTempToken', {
    payment_source: { optional: false },
    customer: { optional: false },
  });

  public readonly createUsingPermanentToken = super.request('paymentSource', 'createUsingPermanentToken', {
    payment_source: { optional: false },
    customer: { optional: false },
  });

  public readonly createUsingToken = super.request('paymentSource', 'createUsingToken', {
    payment_source: { optional: false },
    customer: { optional: false },
  });

  public readonly createUsingPaymentIntent = super.request('paymentSource', 'createUsingPaymentIntent', {
    payment_source: { optional: false },
    customer: { optional: false },
  });

  public readonly createVoucherPaymentSource = super.request('paymentSource', 'createVoucherPaymentSource', {
    payment_source: { optional: false },
    customer: { optional: false },
  });

  public readonly createCard = super.request('paymentSource', 'createCard', {
    payment_source: { optional: false },
    customer: { optional: false },
  });

  public readonly createBankAccount = super.request('paymentSource', 'createBankAccount', {
    payment_source: { optional: false },
    customer: { optional: false },
  });

  public readonly updateCard = super.request('paymentSource', 'updateCard', {
    payment_source: { optional: false },
    customer: { optional: false },
  });

  public readonly updateBankAccount = super.request('paymentSource', 'updateBankAccount', {
    payment_source: { optional: false },
    customer: { optional: false },
  });

  public readonly verifyBankAccount = super.request('paymentSource', 'verifyBankAccount', {
    payment_source: { optional: false },
  });

  public readonly retrieve = super.request('paymentSource', 'retrieve', {
    payment_source: { optional: false },
  });

  public readonly list = super.listRequest('paymentSource', 'list', {
    payment_source: { optional: false },
  });

  public readonly switchGatewayAccount = super.request('paymentSource', 'switchGatewayAccount', {
    payment_source: { optional: false },
    customer: { optional: false },
  });

  public readonly exportPaymentSource = super.request('paymentSource', 'exportPaymentSource', {
    third_party_payment_method: { optional: false },
  });

  public readonly delete = super.request('paymentSource', 'delete', {
    payment_source: { optional: false },
    customer: { optional: false },
  });

  public readonly deleteLocal = super.request('paymentSource', 'deleteLocal', {
    payment_source: { optional: false },
    customer: { optional: false },
  });
}
