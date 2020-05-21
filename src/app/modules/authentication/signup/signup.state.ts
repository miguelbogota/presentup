import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { SetSignupForm } from './signup.actions';

@State<any>({
  name: 'signup',
  defaults: {
    user: {
      uid: '',
      email: '',
      name: '',
      username: '',
      recoveryEmail: '',
      phone: '',
      location: '',
      birth: new Date(),
      gender: '',
      title: '',
      img: '',
      description: '',
      design: '',
      settings: {
        subscription: ''
      }
    },
    password: '',
    confirmPassword: '',
    area: ''
  }
})
@Injectable()
export class SignupState {

  @Selector()
  static getSignupForm(state: any): any {
    return state;
  }

  @Action(SetSignupForm)
  setSignupForm({ getState, setState }: StateContext<any>, { payload }: SetSignupForm) {
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
