import { State, Action, StateContext, Selector } from '@ngxs/store';
import { IMobile } from 'src/app/share/models/mobile';
import { setMobile } from '../action/mobile.action';

export class MobileStateModel {
  mobile: IMobile;
}

@State<MobileStateModel>({
  name: 'Mobile',
  defaults: {
    mobile: {
      isMobile: false,
    },
  },
})
export class MobileState {
  @Selector()
  static getMobile(state: MobileStateModel) {
    return state.mobile;
  }

  @Action(setMobile)
  add(
    { getState, patchState }: StateContext<MobileStateModel>,
    { payload }: setMobile
  ) {
    const state = getState();
    patchState({
      mobile: {
        isMobile: payload.isMobile,
      },
    });
  }
}
