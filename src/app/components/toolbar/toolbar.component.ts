import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ThemeService } from 'src/app/share/service/theme.service';
import constants from 'src/app/utils/constants/constants';
import { PlayerService } from 'src/app/share/service/player.service';
import { Router, ActivatedRoute, UrlSegment } from '@angular/router';
import { Store } from '@ngxs/store';
import { AddRoute, UpdateRoute } from 'src/app/utils/store/action/route.action';
import { IRoute } from 'src/app/share/models/route';
import { Location } from '@angular/common';

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  private subs: Subscription[] = [];

  public CONSTANTS = constants;
  public isDarkTheme: Observable<Boolean>;

  private $route: Observable<IRoute>;
  public route: IRoute;

  constructor(
    private themeService: ThemeService,
    private playerService: PlayerService,
    private router: Router,
    private store: Store,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.isDarkTheme = this.themeService.isDarkTheme;

    this.route = { route: this.location.path() };
    this.store.dispatch(new AddRoute(this.route));

    this.$route = this.store.select((state) => state.Route.route);
    this.subs.push(
      this.$route.subscribe((route: IRoute) => {
        this.route = route;
      })
    );
  }

  toggleDarkTheme(checked: boolean) {
    this.themeService.setDarkTheme(checked);
  }

  addRoutetoStore(route: string) {
    this.store.dispatch(new AddRoute({ route: route }));
  }

  returnHomePage() {
    this.playerService.removePlayer('players');
    this.router.navigate(['/player']);
    this.addRoutetoStore('/player');
  }
}
