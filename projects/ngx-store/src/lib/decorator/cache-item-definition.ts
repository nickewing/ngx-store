import { DecoratorConfig } from "../ngx-store.types";
import { WebStorageServiceInterface } from "../service/webstorage.interface";
import { WebStorageUtility } from "../utility/webstorage.utility";

export interface CacheItemDefinition {
  key: string;
  name: string;
  targets: Array<Object>;
  services: Array<WebStorageServiceInterface>;
  utilities: Array<UtilityEntry>;
}

export interface UtilityEntry {
  utility: WebStorageUtility;
  config?: DecoratorConfig;
}
