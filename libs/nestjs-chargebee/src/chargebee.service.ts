import { Inject, Injectable } from '@nestjs/common';

import { ChargebeeResourceWrapper } from './chargebee-resource-wrapper.class';
import type { ChargebeeModuleOptions } from './chargebee.interface';
import { CHARGEBEE_MODULE_OPTIONS_TOKEN } from './chargebee.module-definition';

@Injectable()
export class ChargebeeService extends ChargebeeResourceWrapper {
  constructor(
    @Inject(CHARGEBEE_MODULE_OPTIONS_TOKEN)
    options: ChargebeeModuleOptions
  ) {
    super(options);
  }
}
