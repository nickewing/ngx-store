import { WebStorageService } from './webstorage.service';
import { Injectable } from '@angular/core';
import { fromEvent, merge } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { NgxStorageEvent } from '../utility/storage/storage-event';
import { localStorageUtility } from '../utility/utilities';

@Injectable({
  providedIn: "root"
})
export class LocalStorageService extends WebStorageService {
    public static keys: Array<string> = [];

    constructor() {
        super(localStorageUtility);
        this._changes =
            merge(fromEvent<NgxStorageEvent>(window, 'storage')
                  .pipe(
                      filter((event: NgxStorageEvent) => event.storageArea === localStorage),
                      map((event: NgxStorageEvent) => this.mapNativeEvent(event))
                  ),
                  localStorageUtility.changes);
    }
}
