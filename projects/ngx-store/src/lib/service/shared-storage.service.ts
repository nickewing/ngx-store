import { WebStorageService } from './webstorage.service';
import { sharedStorageUtility } from '../utility/utilities';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: "root"
})
export class SharedStorageService extends WebStorageService {
    public static keys: Array<string> = [];

    constructor() {
        super(sharedStorageUtility);
        this._changes = sharedStorageUtility.changes;
    }
}
