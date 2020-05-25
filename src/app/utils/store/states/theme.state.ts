import { State, Action, StateContext, Selector } from '@ngxs/store';
import { ITheme } from 'src/app/share/models/theme';
import { setTheme } from '../action/theme.action';

export class ThemeStateModel {
  theme: ITheme;
}

@State<ThemeStateModel>({
  name: 'Theme',
  defaults: {
    theme: {
      isDarkTheme: false,
    },
  },
})
export class ThemeState {
  @Selector()
  static getTheme(state: ThemeStateModel) {
    return state.theme;
  }

  @Action(setTheme)
  add(
    { getState, patchState }: StateContext<ThemeStateModel>,
    { payload }: setTheme
  ) {
    const state = getState();
    patchState({
      theme: {
        isDarkTheme: payload.isDarkTheme,
      },
    });
  }
}
