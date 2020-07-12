import { User } from '@app-models/user.model';

/**
 * Class is used for the state action to set a new user.
 */
export class SetProfile {
  static readonly type = '[profile] set user';
  constructor(public payload: User) { }
}
