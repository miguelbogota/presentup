import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { SetSignupForm } from './signup.actions';
import { newUserForm, IUserForm } from '@app-models/user.model';

@State<IUserForm>({
  name: 'signup',
  defaults: newUserForm()
})
@Injectable()
export class SignupState {

  @Selector()
  static getSignupForm(state: IUserForm): IUserForm {
    return state;
  }

  @Action(SetSignupForm)
  setSignupForm({ getState, setState }: StateContext<IUserForm>, { payload }: SetSignupForm) {
    const currentUserForm = getState().user;
    const currentUserSettingsForm = getState().user.settings;
    // Update the state merging all the data
    setState({
      ...getState(),
      ...payload,
      user: {
        ...currentUserForm,
        ...payload.user,
        settings: {
          ...currentUserSettingsForm,
          ...payload.user.settings
        }
      }
    });
  }

}
