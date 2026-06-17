import { ChargebeeResource } from '../chargebee-resource.class';
export class TimeMachineResource extends ChargebeeResource {
  public readonly retrieve = super.request('timeMachine', 'retrieve', {
    time_machine: { optional: false },
  });

  public readonly startAfresh = super.request('timeMachine', 'startAfresh', {
    time_machine: { optional: false },
  });

  public readonly travelForward = super.request('timeMachine', 'travelForward', {
    time_machine: { optional: false },
  });
}
