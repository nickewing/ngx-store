import {
  CookiesStorageService,
  LocalStorageService,
  SessionStorageService,
  SharedStorageService
} from "./service";

import { NgModule } from "@angular/core";

@NgModule({
  providers: [
    LocalStorageService,
    SessionStorageService,
    CookiesStorageService,
    SharedStorageService
  ]
})
export class WebStorageModule {}
