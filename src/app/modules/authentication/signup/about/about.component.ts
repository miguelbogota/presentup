import { Component, OnInit } from '@angular/core';
import {  AbstractControl, FormBuilder } from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { SignupState } from '../signup.state';
import { SetSignupForm } from '../signup.actions';
import { IUserForm } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  description = ''; // Description will be binded with this property

  // User passed from the state in the app
  @Select(SignupState) signupState: Observable<IUserForm>;
  // Form for the component
  signupForm = this.fb.group({
    user: this.fb.group({
      descriptions: [['']]
    })
  });

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.stateChanges();
    this.updateState();
  }

  // Back function will only return to the signup step before
  back() {
    this.router.navigate(['/signup/account']);
  }

  // Submit action will only re-direct since the data is been
  // save in the state of the signup component
  submit() {
    this.router.navigate(['/signup/appearance']);
  }

  // Splits the descriptions to the array
  toArray(value: string): void {
    this.descriptions.setValue(value.split(/[\r\n]+/));
  }

  // Function updates the state in the store
  private updateState(): void {
    // The state will update with the changes of the form
    this.signupForm.valueChanges.subscribe((u: IUserForm) => {
      this.store.dispatch([new SetSignupForm(u)]);
    });
  }

  // Funtion check if the values can be updated or not
  private validateChanges<T>(value: T, control: AbstractControl): void {
    // Diferents check for the values
    const isDifferent = value && control && value !== control.value;
    // Update the controls if they've been changed
    if (isDifferent) {  this.updateControl(value, control); }
  }

  // Functions validates the current form with the state
  private stateChanges() {
    this.signupState.subscribe((u: IUserForm) => {
      // Update the form with data
      this.validateChanges(u.user.descriptions, this.descriptions);
    });
  }

  // Function update a control
  private updateControl<T>(value: T, control: AbstractControl): void {
    control.setValue(value); // Set value to the control
    /**
     * Functioning will be, if you leave a page and return later the state
     * will be loaded and mark everything as touched as a heads up in all the
     * differents fields that are unfilled. This can be change with the line
     * commented below and only make the ones touched as touched leaving the
     * others as they were originally.
     */
    // control.markAllAsTouched(); // Mark control as touched
    this.signupForm.markAllAsTouched(); // Mark The whole form as touched
  }

  // Getters & setters for the form
  get descriptions(): AbstractControl { return this.signupForm.get('user.descriptions'); }

}
