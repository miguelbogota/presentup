import { IUserForm } from 'src/app/shared/models/user.model';

export class SetSignupForm {
  static readonly type = '[signup] set user';
  constructor(public payload: IUserForm) { }
}