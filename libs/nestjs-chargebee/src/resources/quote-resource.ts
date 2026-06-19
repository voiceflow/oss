import { ChargebeeResource } from '../chargebee-resource.class';
export class QuoteResource extends ChargebeeResource {
  public readonly retrieve = super.request('quote', 'retrieve', {
    quote: { optional: false },
  });

  public readonly createSubForCustomerQuote = super.request('quote', 'createSubForCustomerQuote', {
    quote: { optional: false },
  });

  public readonly editCreateSubForCustomerQuote = super.request('quote', 'editCreateSubForCustomerQuote', {
    quote: { optional: false },
  });

  public readonly updateSubscriptionQuote = super.request('quote', 'updateSubscriptionQuote', {
    quote: { optional: false },
  });

  public readonly editUpdateSubscriptionQuote = super.request('quote', 'editUpdateSubscriptionQuote', {
    quote: { optional: false },
  });

  public readonly createForOnetimeCharges = super.request('quote', 'createForOnetimeCharges', {
    quote: { optional: false },
  });

  public readonly editOneTimeQuote = super.request('quote', 'editOneTimeQuote', { quote: { optional: false } });

  public readonly createSubItemsForCustomerQuote = super.request('quote', 'createSubItemsForCustomerQuote', {
    quote: { optional: false },
  });

  public readonly editCreateSubCustomerQuoteForItems = super.request('quote', 'editCreateSubCustomerQuoteForItems', {
    quote: { optional: false },
  });

  public readonly updateSubscriptionQuoteForItems = super.request('quote', 'updateSubscriptionQuoteForItems', {
    quote: { optional: false },
  });

  public readonly editUpdateSubscriptionQuoteForItems = super.request(
    'quote',
    // eslint-disable-next-line no-secrets/no-secrets
    'editUpdateSubscriptionQuoteForItems',
    { quote: { optional: false } }
  );

  public readonly createForChargeItemsAndCharges = super.request('quote', 'createForChargeItemsAndCharges', {
    quote: { optional: false },
  });

  public readonly editForChargeItemsAndCharges = super.request('quote', 'editForChargeItemsAndCharges', {
    quote: { optional: false },
  });

  public readonly list = super.listRequest('quote', 'list', {
    quote: { optional: false },
  });

  public readonly quoteLineGroupsForQuote = super.listRequest('quote', 'quoteLineGroupsForQuote', {
    quote: { optional: false },
  });

  public readonly convert = super.request('quote', 'convert', {
    quote: { optional: false },
  });

  public readonly updateStatus = super.request('quote', 'updateStatus', {
    quote: { optional: false },
  });

  public readonly extendExpiryDate = super.request('quote', 'extendExpiryDate', { quote: { optional: false } });

  public readonly delete = super.request('quote', 'delete', {
    quote: { optional: false },
  });

  public readonly pdf = super.request('quote', 'pdf', {
    download: { optional: false },
  });
}
