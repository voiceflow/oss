import { ChargebeeResource } from '../chargebee-resource.class';
export class PortalSessionResource extends ChargebeeResource {
  public readonly create = super.request('portalSession', 'create', {
    portal_session: { optional: false },
  });

  public readonly retrieve = super.request('portalSession', 'retrieve', {
    portal_session: { optional: false },
  });

  public readonly logout = super.request('portalSession', 'logout', {
    portal_session: { optional: false },
  });

  public readonly activate = super.request('portalSession', 'activate', {
    portal_session: { optional: false },
  });
}
