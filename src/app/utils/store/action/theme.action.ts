import { ITheme } from '../../../share/models/theme';

export class setTheme {
  static readonly type = '[ITheme] Set';

  constructor(public payload: ITheme) {}
}
