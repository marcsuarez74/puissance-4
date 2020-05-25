import { IPlayer } from '../../../share/models/player';

export class AddPlayer {
  static readonly type = '[IPlayer] Add';
  constructor(public payload: IPlayer) {}
}

export class UpdatePlayer {
  static readonly type = '[IPlayer] Update';
  constructor(public payload: IPlayer) {}
}
