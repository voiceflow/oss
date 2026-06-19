import { ChargebeeResource } from '../chargebee-resource.class';
export class OrderResource extends ChargebeeResource {
  public readonly create = super.request('order', 'create', {
    order: { optional: false },
  });

  public readonly update = super.request('order', 'update', {
    order: { optional: false },
  });

  public readonly importOrder = super.request('order', 'importOrder', {
    order: { optional: false },
  });

  public readonly assignOrderNumber = super.request('order', 'assignOrderNumber', { order: { optional: false } });

  public readonly cancel = super.request('order', 'cancel', {
    order: { optional: false },
  });

  public readonly createRefundableCreditNote = super.request('order', 'createRefundableCreditNote', {
    order: { optional: false },
  });

  public readonly reopen = super.request('order', 'reopen', {
    order: { optional: false },
  });

  public readonly retrieve = super.request('order', 'retrieve', {
    order: { optional: false },
  });

  public readonly delete = super.request('order', 'delete', {
    order: { optional: false },
  });

  public readonly list = super.listRequest('order', 'list', {
    order: { optional: false },
  });

  public readonly ordersForInvoice = super.listRequest('order', 'ordersForInvoice', { order: { optional: false } });

  public readonly resend = super.request('order', 'resend', {
    order: { optional: false },
  });
}
