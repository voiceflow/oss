import type { Config } from 'chargebee';
import Chargebee from 'chargebee';

import type { ChargebeeModuleOptions } from './chargebee.interface';

export function createChargebee(options: ChargebeeModuleOptions): Chargebee {
  const config: Config = {
    site: options.site,
    apiKey: options.apiKey,
    ...(options.override?.url ? extractURLOptions(options.override.url) : {}),
    ...(options.override?.timeout ? { timeout: options.override.timeout } : {}),
  };
  return new Chargebee(config);
}

export function extractURLOptions(urlStr: string) {
  const url = new URL(urlStr);
  return {
    hostSuffix: url.hostname,
    apiPath: url.pathname as '/api/v2' | '/api/v1',
    protocol: url.protocol.replace(':', '') as 'https' | 'http',
    ...(url.port ? { port: parseInt(url.port, 10) } : {}),
  };
}
