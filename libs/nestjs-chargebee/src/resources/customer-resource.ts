import { ChargebeeResource } from '../chargebee-resource.class';
export class CustomerResource extends ChargebeeResource {
  public readonly create = super.request('customer', 'create', {
    customer: { optional: false },
    card: { optional: true },
  });

  public readonly list = super.listRequest('customer', 'list', {
    customer: { optional: false },
    card: { optional: true },
  });

  public readonly retrieve = super.request('customer', 'retrieve', {
    customer: { optional: false },
    card: { optional: true },
  });

  public readonly update = super.request('customer', 'update', {
    customer: { optional: false },
    card: { optional: true },
  });

  public readonly updatePaymentMethod = super.request('customer', 'updatePaymentMethod', {
    customer: { optional: false },
    card: { optional: true },
  });

  public readonly updateBillingInfo = super.request('customer', 'updateBillingInfo', {
    customer: { optional: false },
    card: { optional: true },
  });

  public readonly contactsForCustomer = super.listRequest('customer', 'contactsForCustomer', {
    contact: { optional: false },
  });

  public readonly assignPaymentRole = super.request('customer', 'assignPaymentRole', {
    customer: { optional: false },
    payment_source: { optional: false },
  });

  public readonly addContact = super.request('customer', 'addContact', {
    customer: { optional: false },
    card: { optional: true },
  });

  public readonly updateContact = super.request('customer', 'updateContact', {
    customer: { optional: false },
    card: { optional: true },
  });

  public readonly deleteContact = super.request('customer', 'deleteContact', {
    customer: { optional: false },
    card: { optional: true },
  });

  public readonly addPromotionalCredits = super.request('customer', 'addPromotionalCredits', {
    customer: { optional: false },
    promotional_credit: { optional: false },
  });

  public readonly deductPromotionalCredits = super.request('customer', 'deductPromotionalCredits', {
    customer: { optional: false },
    promotional_credit: { optional: false },
  });

  public readonly setPromotionalCredits = super.request('customer', 'setPromotionalCredits', {
    customer: { optional: false },
    promotional_credit: { optional: false },
  });

  public readonly recordExcessPayment = super.request('customer', 'recordExcessPayment', {
    customer: { optional: false },
    transaction: { optional: false },
  });

  public readonly collectPayment = super.request('customer', 'collectPayment', {
    customer: { optional: false },
    transaction: { optional: false },
  });

  public readonly delete = super.request('customer', 'delete', {
    customer: { optional: false },
    card: { optional: true },
  });

  public readonly move = super.request('customer', 'move', {
    resource_migration: { optional: false },
  });

  public readonly changeBillingDate = super.request('customer', 'changeBillingDate', {
    customer: { optional: false },
  });

  public readonly merge = super.request('customer', 'merge', {
    customer: { optional: false },
  });

  public readonly clearPersonalData = super.request('customer', 'clearPersonalData', {
    customer: { optional: false },
  });

  public readonly relationships = super.request('customer', 'relationships', {
    customer: { optional: false },
  });

  public readonly deleteRelationship = super.request('customer', 'deleteRelationship', {
    customer: { optional: false },
  });

  public readonly hierarchy = super.request('customer', 'hierarchy', {
    hierarchies: { optional: false },
  });

  public readonly updateHierarchySettings = super.request('customer', 'updateHierarchySettings', {
    customer: { optional: false },
  });
}
