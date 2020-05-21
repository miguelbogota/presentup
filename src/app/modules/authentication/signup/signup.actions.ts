export class SetSignupForm {
  static readonly type = '[signup] set user';
  constructor(public payload: any) { }
}
