import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Store } from '@ngxs/store';
import { setMobile } from 'src/app/utils/store/action/mobile.action';

@Injectable({
  providedIn: 'root',
})
export class MobileService {
  private _isMobile = new Subject<boolean>();
  isMobile = this._isMobile.asObservable();

  constructor(private store: Store) {}

  setIsMobile(isMobile: boolean) {
    this._isMobile.next(isMobile);
    this.store.dispatch(new setMobile({ isMobile: isMobile }));
  }
}
