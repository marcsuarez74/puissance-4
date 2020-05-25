import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Store } from '@ngxs/store';
import { setTheme } from 'src/app/utils/store/action/theme.action';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  // init variable _darkTheme as an Observable
  private _darkTheme = new Subject<boolean>();
  isDarkTheme = this._darkTheme.asObservable();

  constructor(private store: Store) {}

  //set darkTheme
  setDarkTheme(isDarkTheme: boolean): void {
    this._darkTheme.next(isDarkTheme);
    this.store.dispatch(new setTheme({ isDarkTheme: isDarkTheme }));
  }
}
