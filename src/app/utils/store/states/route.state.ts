import { State, Action, StateContext, Selector } from '@ngxs/store';
import { IRoute } from '../../../share/models/route';
import { AddRoute, UpdateRoute } from '../action/route.action';

export class RouteStateModel {
  route: IRoute;
}

@State<RouteStateModel>({
  name: 'Route',
  defaults: {
    route: {
      route: '',
    },
  },
})
export class RouteState {
  @Selector()
  static getRoute(state: RouteStateModel) {
    return state.route;
  }

  @Action(AddRoute)
  add(
    { getState, patchState }: StateContext<RouteStateModel>,
    { payload }: AddRoute
  ) {
    const state = getState();
    patchState({
      route: {
        route: payload.route,
      },
    });
  }

  @Action(UpdateRoute)
  put(
    { getState, setState }: StateContext<RouteStateModel>,
    { payload }: UpdateRoute
  ) {
    const state = getState();
  }
}
