import { IRoute } from '../../../share/models/route';

export class AddRoute {
  static readonly type = '[IRoute] Add';
  constructor(public payload: IRoute) {}
}

export class UpdateRoute {
  static readonly type = '[IRoute] Update';
  constructor(public payload: IRoute) {}
}
