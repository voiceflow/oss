import { ChargebeeResource } from '../chargebee-resource.class';
export class CreditNoteResource extends ChargebeeResource {
  public readonly create = super.request('creditNote', 'create', {
    credit_note: { optional: false },
    invoice: { optional: false },
  });

  public readonly retrieve = super.request('creditNote', 'retrieve', {
    credit_note: { optional: false },
  });

  public readonly pdf = super.request('creditNote', 'pdf', {
    download: { optional: false },
  });

  public readonly downloadEinvoice = super.request('creditNote', 'downloadEinvoice', {
    download: { optional: false },
  });

  public readonly refund = super.request('creditNote', 'refund', {
    credit_note: { optional: false },
    transaction: { optional: false },
  });

  public readonly recordRefund = super.request('creditNote', 'recordRefund', {
    credit_note: { optional: false },
    transaction: { optional: false },
  });

  public readonly voidCreditNote = super.request('creditNote', 'voidCreditNote', {
    credit_note: { optional: false },
    invoice: { optional: false },
  });

  public readonly list = super.listRequest('creditNote', 'list', {
    credit_note: { optional: false },
  });

  public readonly creditNotesForCustomer = super.listRequest('creditNote', 'creditNotesForCustomer', {
    credit_note: { optional: false },
    customer: { optional: false },
  });

  public readonly delete = super.request('creditNote', 'delete', {
    credit_note: { optional: false },
  });

  // eslint-disable-next-line no-secrets/no-secrets
  public readonly removeTaxWithheldRefund = super.request('creditNote', 'removeTaxWithheldRefund', {
    credit_note: { optional: false },
    customer: { optional: false },
  });

  public readonly resendEinvoice = super.request('creditNote', 'resendEinvoice', {
    credit_note: { optional: false },
  });

  public readonly sendEinvoice = super.request('creditNote', 'sendEinvoice', {
    credit_note: { optional: false },
  });

  public readonly importCreditNote = super.request('creditNote', 'importCreditNote', {
    credit_note: { optional: false },
  });
}
