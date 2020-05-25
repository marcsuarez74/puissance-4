import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  Route,
} from '@angular/router';
import { Observable } from 'rxjs';
import { PlayerService } from '../service/player.service';
import { Store } from '@ngxs/store';
import { AddRoute } from 'src/app/utils/store/action/route.action';

@Injectable({
  providedIn: 'root',
})
export class PlayersGuard implements CanActivate {
  constructor(
    private playerService: PlayerService,
    private router: Router,
    private store: Store
  ) {}

  canActivate(): boolean {
    if (this.playerService.getplayer('players')) {
      return true;
    } else {
      this.router.navigate(['/player']);
      this.store.dispatch(new AddRoute({ route: '/player' }));
      return false;
    }
  }
}
