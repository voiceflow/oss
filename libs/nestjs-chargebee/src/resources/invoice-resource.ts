import { ChargebeeResource } from '../chargebee-resource.class';
export class InvoiceResource extends ChargebeeResource {
  public readonly create = super.request('invoice', 'create', {
    invoice: { optional: false },
  });

  public readonly createForChargeItemsAndCharges = super.request('invoice', 'createForChargeItemsAndCharges', {
    invoice: { optional: false },
  });

  public readonly charge = super.request('invoice', 'charge', {
    invoice: { optional: false },
  });

  public readonly chargeAddon = super.request('invoice', 'chargeAddon', {
    invoice: { optional: false },
  });

  public readonly createForChargeItem = super.request('invoice', 'createForChargeItem', {
    invoice: { optional: false },
  });

  public readonly stopDunning = super.request('invoice', 'stopDunning', {
    invoice: { optional: false },
  });

  public readonly importInvoice = super.request('invoice', 'importInvoice', {
    invoice: { optional: false },
  });

  public readonly applyPayments = super.request('invoice', 'applyPayments', {
    invoice: { optional: false },
  });

  public readonly syncUsages = super.request('invoice', 'syncUsages', {
    invoice: { optional: false },
  });

  public readonly deleteLineItems = super.request('invoice', 'deleteLineItems', { invoice: { optional: false } });

  public readonly applyCredits = super.request('invoice', 'applyCredits', {
    invoice: { optional: false },
  });

  public readonly list = super.listRequest('invoice', 'list', {
    invoice: { optional: false },
  });

  public readonly invoicesForCustomer = super.listRequest('invoice', 'invoicesForCustomer', {
    invoice: { optional: false },
  });

  public readonly invoicesForSubscription = super.listRequest('invoice', 'invoicesForSubscription', {
    invoice: { optional: false },
  });

  public readonly retrieve = super.request('invoice', 'retrieve', {
    invoice: { optional: false },
  });

  public readonly pdf = super.request('invoice', 'pdf', {
    download: { optional: false },
  });

  public readonly downloadEinvoice = super.request('invoice', 'downloadEinvoice', { invoice: { optional: false } });

  public readonly listPaymentReferenceNumbers = super.listRequest('invoice', 'listPaymentReferenceNumbers', {
    invoice: { optional: false },
  });

  public readonly addCharge = super.request('invoice', 'addCharge', {
    invoice: { optional: false },
  });

  public readonly addAddonCharge = super.request('invoice', 'addAddonCharge', { invoice: { optional: false } });

  public readonly addChargeItem = super.request('invoice', 'addChargeItem', {
    invoice: { optional: false },
  });

  public readonly close = super.request('invoice', 'close', {
    invoice: { optional: false },
  });

  public readonly collectPayment = super.request('invoice', 'collectPayment', {
    invoice: { optional: false },
  });

  public readonly recordPayment = super.request('invoice', 'recordPayment', {
    invoice: { optional: false },
  });

  public readonly recordTaxWithheld = super.request('invoice', 'recordTaxWithheld', { invoice: { optional: false } });

  public readonly removeTaxWithheld = super.request('invoice', 'removeTaxWithheld', { invoice: { optional: false } });

  public readonly refund = super.request('invoice', 'refund', {
    invoice: { optional: false },
  });

  public readonly recordRefund = super.request('invoice', 'recordRefund', {
    invoice: { optional: false },
  });

  public readonly removePayment = super.request('invoice', 'removePayment', {
    invoice: { optional: false },
  });

  public readonly removeCreditNote = super.request('invoice', 'removeCreditNote', { invoice: { optional: false } });

  public readonly voidInvoice = super.request('invoice', 'voidInvoice', {
    invoice: { optional: false },
  });

  public readonly writeOff = super.request('invoice', 'writeOff', {
    invoice: { optional: false },
  });

  public readonly delete = super.request('invoice', 'delete', {
    invoice: { optional: false },
  });

  public readonly updateDetails = super.request('invoice', 'updateDetails', {
    invoice: { optional: false },
  });

  public readonly resendEinvoice = super.request('invoice', 'resendEinvoice', {
    invoice: { optional: false },
  });

  public readonly sendEinvoice = super.request('invoice', 'sendEinvoice', {
    invoice: { optional: false },
  });
}
