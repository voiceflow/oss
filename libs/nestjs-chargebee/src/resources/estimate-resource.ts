import { ChargebeeResource } from '../chargebee-resource.class';
export class EstimateResource extends ChargebeeResource {
  public readonly createSubscription = super.request('estimate', 'createSubscription', {
    estimate: { optional: false },
  });

  public readonly createSubItemEstimate = super.request('estimate', 'createSubItemEstimate', {
    estimate: { optional: false },
  });

  public readonly createSubForCustomerEstimate = super.request('estimate', 'createSubForCustomerEstimate', {
    estimate: { optional: false },
  });

  public readonly createSubItemForCustomerEstimate = super.request('estimate', 'createSubItemForCustomerEstimate', {
    estimate: { optional: false },
  });

  public readonly updateSubscription = super.request('estimate', 'updateSubscription', {
    estimate: { optional: false },
  });

  public readonly updateSubscriptionForItems = super.request('estimate', 'updateSubscriptionForItems', {
    estimate: { optional: false },
  });

  public readonly renewalEstimate = super.request('estimate', 'renewalEstimate', { estimate: { optional: false } });

  public readonly advanceInvoiceEstimate = super.request('estimate', 'advanceInvoiceEstimate', {
    estimate: { optional: false },
  });

  public readonly regenerateInvoiceEstimate = super.request('estimate', 'regenerateInvoiceEstimate', {
    estimate: { optional: false },
  });

  public readonly upcomingInvoicesEstimate = super.request('estimate', 'upcomingInvoicesEstimate', {
    estimate: { optional: false },
  });

  public readonly changeTermEnd = super.request('estimate', 'changeTermEnd', {
    estimate: { optional: false },
  });

  public readonly cancelSubscription = super.request('estimate', 'cancelSubscription', {
    estimate: { optional: false },
  });

  public readonly cancelSubscriptionForItems = super.request('estimate', 'cancelSubscriptionForItems', {
    estimate: { optional: false },
  });

  public readonly pauseSubscription = super.request('estimate', 'pauseSubscription', {
    estimate: { optional: false },
  });

  public readonly resumeSubscription = super.request('estimate', 'resumeSubscription', {
    estimate: { optional: false },
  });

  public readonly giftSubscription = super.request('estimate', 'giftSubscription', { estimate: { optional: false } });

  public readonly giftSubscriptionForItems = super.request('estimate', 'giftSubscriptionForItems', {
    estimate: { optional: false },
  });

  public readonly createInvoice = super.request('estimate', 'createInvoice', {
    estimate: { optional: false },
  });

  public readonly createInvoiceForItems = super.request('estimate', 'createInvoiceForItems', {
    estimate: { optional: false },
  });
}
