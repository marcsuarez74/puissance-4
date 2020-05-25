import { Injectable } from '@angular/core';
import { IPlayer } from '../models/player';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  localStorage: Storage;
  changes$ = new Subject();

  constructor() {
    this.localStorage = window.localStorage;
  }

  getplayer(key: string): any {
    if (this.isLocalStorageSupported) {
      return JSON.parse(this.localStorage.getItem(key));
    }
    return null;
  }

  setPlayers(key: string, value: IPlayer[]): boolean {
    if (this.isLocalStorageSupported) {
      this.localStorage.setItem(key, JSON.stringify(value));
      this.changes$.next({
        type: 'set',
        key,
        value,
      });
      return true;
    }
    return false;
  }

  removePlayer(key: string): boolean {
    if (this.isLocalStorageSupported) {
      this.localStorage.removeItem(key);
      this.changes$.next({
        type: 'remove',
        key,
      });
      return true;
    }
    return false;
  }

  get isLocalStorageSupported(): boolean {
    return !!this.localStorage;
  }
}
