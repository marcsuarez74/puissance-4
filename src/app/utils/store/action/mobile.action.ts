import { IMobile } from '../../../share/models/mobile';

export class setMobile {
  static readonly type = '[IMobile] Set';

  constructor(public payload: IMobile) {}
}
