import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { SetProfile } from './_profile.actions';
import { User } from '@app-models/user.model';

@State<User>({
  name: 'profile',
  defaults: null
})
@Injectable()
export class ProfileState {

  @Selector()
  static getProfile(state: User): User {
    return state;
  }

  @Action(SetProfile)
  setProfile({ setState }: StateContext<User>, { payload }: SetProfile): void {
    setState(payload);
  }



}
