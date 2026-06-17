import { ChargebeeResource } from '../chargebee-resource.class';
export class VirtualBankAccountResource extends ChargebeeResource {
  public readonly createUsingPermanentToken = super.request('virtualBankAccount', 'createUsingPermanentToken', {
    virtual_bank_account: { optional: false },
  });

  public readonly create = super.request('virtualBankAccount', 'create', {
    virtual_bank_account: { optional: false },
  });

  public readonly retrieve = super.request('virtualBankAccount', 'retrieve', {
    virtual_bank_account: { optional: false },
  });

  public readonly list = super.listRequest('virtualBankAccount', 'list', {
    virtual_bank_account: { optional: false },
  });

  public readonly delete = super.request('virtualBankAccount', 'delete', {
    virtual_bank_account: { optional: false },
  });

  public readonly deleteLocal = super.request('virtualBankAccount', 'deleteLocal', {
    virtual_bank_account: { optional: false },
  });
}
