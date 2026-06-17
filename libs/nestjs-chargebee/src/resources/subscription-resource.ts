import { ChargebeeResource } from '../chargebee-resource.class';
export class SubscriptionResource extends ChargebeeResource {
  public readonly create = super.request(
    'subscription',
    'create',

    {
      subscription: { optional: false },
      customer: { optional: false },
      card: { optional: true },
      invoice: { optional: true },
      unbilled_charges: { optional: true },
    }
  );

  public readonly createForCustomer = super.request('subscription', 'createForCustomer', {
    subscription: { optional: false },
    customer: { optional: false },
    card: { optional: true },
    invoice: { optional: true },
    unbilled_charges: { optional: true },
  });

  public readonly createWithItems = super.request('subscription', 'createWithItems', {
    subscription: { optional: false },
    customer: { optional: false },
    card: { optional: true },
    invoice: { optional: true },
    unbilled_charges: { optional: true },
  });

  public readonly list = super.listRequest('subscription', 'list', {
    subscription: { optional: false },
    customer: { optional: false },
    card: { optional: true },
  });

  public readonly subscriptionsForCustomer = super.listRequest('subscription', 'subscriptionsForCustomer', {
    subscription: { optional: false },
  });

  public readonly contractTermsForSubscription = super.listRequest('subscription', 'contractTermsForSubscription', {
    contract_term: { optional: false },
  });

  public readonly listDiscounts = super.listRequest('subscription', 'listDiscounts', {
    discount: { optional: false },
  });

  public readonly retrieve = super.request('subscription', 'retrieve', {
    subscription: { optional: false },
    customer: { optional: false },
    card: { optional: true },
  });

  public readonly retrieveWithScheduledChanges = super.request('subscription', 'retrieveWithScheduledChanges', {
    subscription: { optional: false },
    customer: { optional: false },
    card: { optional: true },
  });

  public readonly removeScheduledChanges = super.request('subscription', 'removeScheduledChanges', {
    subscription: { optional: false },
    customer: { optional: false },
    card: { optional: true },
    credit_notes: { optional: true },
  });

  public readonly removeScheduledCancellation = super.request('subscription', 'removeScheduledCancellation', {
    subscription: { optional: false },
    customer: { optional: false },
    card: { optional: true },
  });

  public readonly removeCoupons = super.request('subscription', 'removeCoupons', {
    subscription: { optional: false },
    customer: { optional: false },
    card: { optional: true },
  });

  public readonly update = super.request('subscription', 'update', {
    subscription: { optional: false },
    customer: { optional: false },
    card: { optional: true },
    invoice: { optional: true },
    unbilled_charges: { optional: true },
    credit_notes: { optional: true },
  });

  public readonly updateForItems = super.request('subscription', 'updateForItems', {
    subscription: { optional: false },
    customer: { optional: false },
    card: { optional: true },
    invoice: { optional: true },
    unbilled_charges: { optional: true },
    credit_notes: { optional: true },
  });

  public readonly changeTermEnd = super.request('subscription', 'changeTermEnd', {
    subscription: { optional: false },
    customer: { optional: false },
    card: { optional: true },
    invoice: { optional: true },
    unbilled_charges: { optional: true },
    credit_notes: { optional: true },
  });

  public readonly reactivate = super.request('subscription', 'reactivate', {
    subscription: { optional: false },
    customer: { optional: false },
    card: { optional: true },
    invoice: { optional: true },
    unbilled_charges: { optional: true },
  });

  public readonly addChargeAtTermEnd = super.request('subscription', 'addChargeAtTermEnd', {
    estimate: { optional: false },
  });

  public readonly chargeAddonAtTermEnd = super.request('subscription', 'chargeAddonAtTermEnd', {
    estimate: { optional: false },
  });

  public readonly chargeFutureRenewals = super.request('subscription', 'chargeFutureRenewals', {
    subscription: { optional: false },
    customer: { optional: false },
    card: { optional: true },
    invoice: { optional: true },
    advance_invoice_schedules: { optional: true },
  });

  public readonly editAdvanceInvoiceSchedule = super.request('subscription', 'editAdvanceInvoiceSchedule', {
    advance_invoice_schedules: { optional: false },
  });

  public readonly retrieveAdvanceInvoiceSchedule = super.request('subscription', 'retrieveAdvanceInvoiceSchedule', {
    advance_invoice_schedules: { optional: false },
  });

  public readonly removeAdvanceInvoiceSchedule = super.request('subscription', 'removeAdvanceInvoiceSchedule', {
    subscription: { optional: false },
    advance_invoice_schedules: { optional: true },
  });

  public readonly regenerateInvoice = super.request('subscription', 'regenerateInvoice', {
    invoice: { optional: true },
    unbilled_charges: { optional: true },
  });

  public readonly importSubscription = super.request('subscription', 'importSubscription', {
    subscription: { optional: false },
  });

  public readonly importForCustomer = super.request('subscription', 'importForCustomer', {
    subscription: { optional: false },
  });

  public readonly importContractTerm = super.request('subscription', 'importContractTerm', {
    contract_term: { optional: false },
  });

  // eslint-disable-next-line no-secrets/no-secrets
  public readonly importUnbilledCharges = super.request('subscription', 'importUnbilledCharges', {
    unbilled_charges: { optional: false },
  });

  public readonly importForItems = super.request('subscription', 'importForItems', {
    subscription: { optional: false },
    customer: { optional: false },
    card: { optional: true },
    invoice: { optional: true },
  });

  public readonly overrideBillingProfile = super.request('subscription', 'overrideBillingProfile', {
    subscription: { optional: false },
    payment_source: { optional: true },
  });

  public readonly delete = super.request('subscription', 'delete', {
    subscription: { optional: false },
    customer: { optional: false },
    card: { optional: true },
  });

  public readonly pause = super.request('subscription', 'pause', {
    subscription: { optional: false },
    customer: { optional: false },
    card: { optional: true },
    invoice: { optional: true },
    unbilled_charges: { optional: true },
    credit_notes: { optional: true },
  });

  public readonly cancel = super.request('subscription', 'cancel', {
    subscription: { optional: false },
    customer: { optional: false },
    card: { optional: true },
    invoice: { optional: true },
    unbilled_charges: { optional: true },
    credit_notes: { optional: true },
  });

  public readonly cancelForItems = super.request('subscription', 'cancelForItems', {
    subscription: { optional: false },
    customer: { optional: false },
    card: { optional: true },
  });

  public readonly resume = super.request('subscription', 'resume', {
    subscription: { optional: false },
    customer: { optional: false },
    card: { optional: true },
    invoice: { optional: true },
    unbilled_charges: { optional: true },
    credit_notes: { optional: true },
  });

  public readonly removeScheduledPause = super.request('subscription', 'removeScheduledPause', {
    subscription: { optional: false },
    customer: { optional: false },
    card: { optional: true },
  });

  public readonly removeScheduledResumption = super.request('subscription', 'removeScheduledResumption', {
    subscription: { optional: false },
    customer: { optional: false },
    card: { optional: true },
  });
}
