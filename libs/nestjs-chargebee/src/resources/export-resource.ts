import { ChargebeeResource } from '../chargebee-resource.class';
export class ExportResource extends ChargebeeResource {
  public readonly waitForExportCompletion = super.request('export', 'waitForExportCompletion', {
    download: { optional: false },
  });

  public readonly retrieve = super.request('export', 'retrieve', {
    export: { optional: false },
  });

  public readonly revenueRecognition = super.request('export', 'revenueRecognition', { export: { optional: false } });

  public readonly deferredRevenue = super.request('export', 'deferredRevenue', { export: { optional: false } });

  public readonly plans = super.request('export', 'plans', {
    export: { optional: false },
  });

  public readonly addons = super.request('export', 'addons', {
    export: { optional: false },
  });

  public readonly coupons = super.request('export', 'coupons', {
    export: { optional: false },
  });

  public readonly customers = super.request('export', 'customers', {
    export: { optional: false },
  });

  public readonly subscriptions = super.request('export', 'subscriptions', {
    export: { optional: false },
  });

  public readonly invoices = super.request('export', 'invoices', {
    export: { optional: false },
  });

  public readonly creditNotes = super.request('export', 'creditNotes', {
    export: { optional: false },
  });

  public readonly transactions = super.request('export', 'transactions', {
    export: { optional: false },
  });

  public readonly orders = super.request('export', 'orders', {
    export: { optional: false },
  });

  public readonly itemFamilies = super.request('export', 'itemFamilies', {
    export: { optional: false },
  });

  public readonly items = super.request('export', 'items', {
    export: { optional: false },
  });

  public readonly itemPrices = super.request('export', 'itemPrices', {
    export: { optional: false },
  });

  public readonly attachedItems = super.request('export', 'attachedItems', {
    export: { optional: false },
  });

  public readonly differentialPrices = super.request('export', 'differentialPrices', { export: { optional: false } });
}
