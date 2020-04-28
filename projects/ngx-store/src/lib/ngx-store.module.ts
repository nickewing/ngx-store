import { NgModule } from "@angular/core";
import { CookiesStorageService } from './service/cookies-storage.service';
import { LocalStorageService } from './service/local-storage.service';
import { SessionStorageService } from './service/session-storage.service';
import { SharedStorageService } from './service/shared-storage.service';

@NgModule({
  providers: [
    LocalStorageService,
    SessionStorageService,
    CookiesStorageService,
    SharedStorageService
  ]
})
export class WebStorageModule {}
