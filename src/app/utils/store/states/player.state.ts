import { State, Action, StateContext, Selector } from '@ngxs/store';
import { IPlayer } from '../../../share/models/player';
import { AddPlayer, UpdatePlayer, DeletePlayer } from '../action/player.action';

export class PlayerStateModel {
  players: IPlayer[];
}

@State<PlayerStateModel>({
  name: 'Players',
  defaults: {
    players: [],
  },
})
export class PlayerState {
  @Selector()
  static getPlayer(state: PlayerStateModel) {
    return state.players;
  }

  @Action(AddPlayer)
  add(
    { getState, patchState }: StateContext<PlayerStateModel>,
    { payload }: AddPlayer
  ) {
    const state = getState();
    patchState({
      players: [...state.players, payload],
    });
  }

  @Action(UpdatePlayer)
  put(
    { getState, setState }: StateContext<PlayerStateModel>,
    { payload }: UpdatePlayer
  ) {
    const state = getState();

    // setState({
    //   players: [...state.players, payload],
    // });
  }

  @Action(DeletePlayer)
  delete(
    { getState, patchState }: StateContext<PlayerStateModel>,
    { payload }: DeletePlayer
  ) {
    const state = getState();

    if (state.players.length > 0) {
      state.players = [];
    }
    return state;
  }
}
