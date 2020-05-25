import { Component, OnInit, Input } from '@angular/core';
import { IPlayer } from 'src/app/share/models/player';
import constants from 'src/app/utils/constants/constants';
import { IMobile } from 'src/app/share/models/mobile';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngxs/store';

@Component({
  selector: 'player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
})
export class PlayerComponent implements OnInit {
  @Input() players: IPlayer;

  private subs: Subscription[] = [];
  public CONSTANTS = constants;

  private $mobile: Observable<IMobile>;
  public isMobile: boolean;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.$mobile = this.store.select((state) => state.Mobile.mobile);
    this.subs.push(
      this.$mobile.subscribe((isMobile: IMobile) => {
        this.isMobile = isMobile.isMobile;
      })
    );
  }

  ngOnDestroy(): void {
    this.subs.forEach((sub: Subscription) => {
      sub.unsubscribe();
    });
  }
}
