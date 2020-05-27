import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IPlayer } from 'src/app/share/models/player';
import constants from 'src/app/utils/constants/constants';

interface IData {
  players: IPlayer[];
  turn: number;
}

@Component({
  selector: 'app-first-player',
  templateUrl: './first-player.component.html',
  styleUrls: ['./first-player.component.scss'],
})
export class FirstPlayerComponent implements OnInit {
  public CONSTANTS = constants;
  public player: IPlayer;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: IData,
    private dialogRef: MatDialogRef<FirstPlayerComponent>
  ) {}

  ngOnInit(): void {
    this.data.players.forEach((player: IPlayer) => {
      if (player.player === this.data.turn) {
        this.player = player;
      }
    });
  }
}
