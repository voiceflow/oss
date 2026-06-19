import { ChargebeeResource } from '../chargebee-resource.class';
export class TransactionResource extends ChargebeeResource {
  public readonly createAuthorization = super.request('transaction', 'createAuthorization', {
    transaction: { optional: false },
  });

  public readonly voidTransaction = super.request('transaction', 'voidTransaction', {
    transaction: { optional: false },
  });

  public readonly recordRefund = super.request('transaction', 'recordRefund', {
    transaction: { optional: false },
  });

  public readonly refund = super.request('transaction', 'refund', {
    transaction: { optional: false },
  });

  public readonly list = super.listRequest('transaction', 'list', {
    transaction: { optional: false },
  });

  public readonly transactionsForCustomer = super.listRequest('transaction', 'transactionsForCustomer', {
    transaction: { optional: false },
  });

  public readonly transactionsForSubscription = super.listRequest('transaction', 'transactionsForSubscription', {
    transaction: { optional: false },
  });

  public readonly paymentsForInvoice = super.listRequest('transaction', 'paymentsForInvoice', {
    transaction: { optional: false },
  });

  public readonly retrieve = super.request('transaction', 'retrieve', {
    transaction: { optional: false },
  });

  public readonly deleteOfflineTransaction = super.request('transaction', 'deleteOfflineTransaction', {
    transaction: { optional: false },
  });
}
