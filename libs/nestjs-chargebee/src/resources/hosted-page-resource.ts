import { ChargebeeResource } from '../chargebee-resource.class';
export class HostedPageResource extends ChargebeeResource {
  public readonly checkoutNew = super.request('hostedPage', 'checkoutNew', {
    hosted_page: { optional: false },
  });

  public readonly checkoutOneTime = super.request('hostedPage', 'checkoutOneTime', {
    hosted_page: { optional: false },
  });

  public readonly checkoutOneTimeForItems = super.request('hostedPage', 'checkoutOneTimeForItems', {
    hosted_page: { optional: false },
  });

  public readonly checkoutNewForItems = super.request('hostedPage', 'checkoutNewForItems', {
    hosted_page: { optional: false },
  });

  public readonly checkoutExisting = super.request('hostedPage', 'checkoutExisting', {
    hosted_page: { optional: false },
  });

  public readonly checkoutExistingForItems = super.request('hostedPage', 'checkoutExistingForItems', {
    hosted_page: { optional: false },
  });

  public readonly updateCard = super.request('hostedPage', 'updateCard', {
    hosted_page: { optional: false },
  });

  public readonly updatePaymentMethod = super.request('hostedPage', 'updatePaymentMethod', {
    hosted_page: { optional: false },
  });

  public readonly managePaymentSources = super.request('hostedPage', 'managePaymentSources', {
    hosted_page: { optional: false },
  });

  public readonly collectNow = super.request('hostedPage', 'collectNow', {
    hosted_page: { optional: false },
  });

  public readonly acceptQuote = super.request('hostedPage', 'acceptQuote', {
    hosted_page: { optional: false },
  });

  public readonly extendSubscription = super.request('hostedPage', 'extendSubscription', {
    hosted_page: { optional: false },
  });

  public readonly checkoutGift = super.request('hostedPage', 'checkoutGift', {
    hosted_page: { optional: false },
  });

  public readonly checkoutGiftForItems = super.request('hostedPage', 'checkoutGiftForItems', {
    hosted_page: { optional: false },
  });

  public readonly claimGift = super.request('hostedPage', 'claimGift', {
    hosted_page: { optional: false },
  });

  public readonly retrieveAgreementPdf = super.request('hostedPage', 'retrieveAgreementPdf', {
    hosted_page: { optional: false },
  });

  public readonly acknowledge = super.request('hostedPage', 'acknowledge', {
    hosted_page: { optional: false },
  });

  public readonly retrieve = super.request('hostedPage', 'retrieve', {
    hosted_page: { optional: false },
  });

  public readonly list = super.listRequest('hostedPage', 'list', {
    hosted_page: { optional: false },
  });

  public readonly preCancel = super.request('hostedPage', 'preCancel', {
    hosted_page: { optional: false },
  });

  public readonly events = super.request('hostedPage', 'events', {
    hosted_page: { optional: false },
  });

  public readonly viewVoucher = super.request('hostedPage', 'viewVoucher', {
    hosted_page: { optional: false },
  });
}
