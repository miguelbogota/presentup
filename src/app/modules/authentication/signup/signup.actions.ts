import { IUserForm } from '@app-models/user.model';

export class SetSignupForm {
  static readonly type = '[signup] set user';
  constructor(public payload: IUserForm) { }
}