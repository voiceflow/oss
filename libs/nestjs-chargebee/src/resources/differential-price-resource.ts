import { ChargebeeResource } from '../chargebee-resource.class';
export class DifferentialPriceResource extends ChargebeeResource {
  public readonly create = super.request('differentialPrice', 'create', {
    differential_price: { optional: false },
  });

  public readonly retrieve = super.request('differentialPrice', 'retrieve', {
    differential_price: { optional: false },
  });

  public readonly update = super.request('differentialPrice', 'update', {
    differential_price: { optional: false },
  });

  public readonly delete = super.request('differentialPrice', 'delete', {
    differential_price: { optional: false },
  });

  public readonly list = super.listRequest('differentialPrice', 'list', {
    differential_price: { optional: false },
  });
}
