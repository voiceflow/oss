import { ChargebeeResource } from '../chargebee-resource.class';
export class UnbilledChargeResource extends ChargebeeResource {
  public readonly createUnbilledCharge = super.request('unbilledCharge', 'createUnbilledCharge', {
    unbilled_charge: { optional: false },
  });

  public readonly create = super.request('unbilledCharge', 'create', {
    unbilled_charge: { optional: false },
  });

  public readonly invoiceUnbilledCharges = super.request('unbilledCharge', 'invoiceUnbilledCharges', {
    unbilled_charge: { optional: false },
  });

  public readonly delete = super.request('unbilledCharge', 'delete', {
    unbilled_charge: { optional: false },
  });

  public readonly list = super.listRequest('unbilledCharge', 'list', {
    unbilled_charge: { optional: false },
  });

  public readonly invoiceNowEstimate = super.request('unbilledCharge', 'invoiceNowEstimate', {
    unbilled_charge: { optional: false },
  });
}
