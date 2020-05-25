import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/share/service/theme.service';
import { Subscription } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IPlayer } from 'src/app/share/models/player';
import { Store } from '@ngxs/store';
import { AddPlayer } from 'src/app/utils/store/action/player.action';
import { PlayerService } from 'src/app/share/service/player.service';
import { UpdateRoute, AddRoute } from 'src/app/utils/store/action/route.action';
import constants from 'src/app/utils/constants/constants';

@Component({
  selector: 'player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.scss'],
})
export class PlayerFormComponent implements OnInit {
  public CONSTANTS = constants;

  private subs: Subscription[] = [];
  private players: IPlayer[] = [];

  public playerForm: FormGroup;
  public isDarkTheme: boolean;

  constructor(
    private store: Store,
    private router: Router,
    private themeService: ThemeService,
    private fb: FormBuilder,
    private playerService: PlayerService
  ) {
    this.createForm();
  }

  ngOnInit(): void {
    this.subs.push(
      this.themeService.isDarkTheme.subscribe((darkTheme: boolean) => {
        this.isDarkTheme = darkTheme;
      })
    );
  }

  // init form for the player
  createForm() {
    this.playerForm = this.fb.group({
      player1: ['', Validators.required],
      player2: ['', Validators.required],
    });
  }

  // submit form function + add player to the store + navigate to the game
  runGame(player1: string, player2: string) {
    this.players.push(
      { name: player1, score: 0, tokens: 21, player: 1 },
      { name: player2, score: 0, tokens: 21, player: 2 }
    );

    this.addPlayertoStore(this.players);

    this.router.navigate(['/game']);
    this.store.dispatch(new AddRoute({ route: '/game' }));
  }

  // add players to the store
  addPlayertoStore(players: IPlayer[]) {
    players.forEach((player: IPlayer) => {
      this.store.dispatch(new AddPlayer(player));
    });
    this.playerService.setPlayers('players', players);
  }

  ngOnDetroy(): void {
    this.subs.forEach((sub: Subscription) => {
      sub.unsubscribe();
    });
  }
}
