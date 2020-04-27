import { Component, OnInit } from '@angular/core';
import {  AbstractControl, Validators, FormBuilder } from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { SignupState } from '../signup.state';
import { SetSignupForm } from '../signup.actions';
import { IUserForm } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  firstName: string; // Name of the user
  isPasswordDiferrent = false; // Check if the password is diferrent

  // User passed from the state in the app
  @Select(SignupState) signupState: Observable<IUserForm>;
  // Form for the component
  signupForm = this.fb.group({
    user: this.fb.group({
      username: ['', [ Validators.required ]],
      phone: [''],
      recoveryEmail: ['', [ Validators.email ]],
      location: ['', [ Validators.required ]],
      gender: [null, [ Validators.required ]]
    }),
    password: ['', [ Validators.required ]],
    confirmPassword: ['', [ Validators.required ]],
    area: [null]
  });

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.stateChanges();
    this.updateState();
    // Check if the passwords match
    this.confirmPassword.valueChanges.subscribe((pass: string) => {
      if (this.password.value === pass) { this.isPasswordDiferrent = false; }
      else { this.isPasswordDiferrent = true; }
    });
    // Check password field if confirmPassword was already touched
    this.password.valueChanges.subscribe((pass: string) => {
      if (this.confirmPassword.touched) {
        if (this.confirmPassword.value === pass) { this.isPasswordDiferrent = false; }
        else { this.isPasswordDiferrent = true; }
      }
    });
  }

  // Back function will only return to the signup step before
  back() {
    this.router.navigate(['/signup']);
  }

  // Submit action will only re-direct since the data is been
  // save in the state of the signup component
  submit() {
    this.router.navigate(['/signup/about']);
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
      this.firstName = u.user.name ? u.user.name.split(' ')[0] : ''; // Get first name
      // Update the form with data
      this.validateChanges(u.user.username, this.username);
      this.validateChanges(u.password, this.password);
      this.validateChanges(u.confirmPassword, this.confirmPassword);
      this.validateChanges(u.area, this.area);
      this.validateChanges(u.user.phone, this.phone);
      this.validateChanges(u.user.recoveryEmail, this.recoveryEmail);
      this.validateChanges(u.user.location, this.location);
      this.validateChanges(u.user.gender, this.gender);
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
  get username(): AbstractControl { return this.signupForm.get('user.username'); }
  get password(): AbstractControl { return this.signupForm.get('password'); }
  get confirmPassword(): AbstractControl { return this.signupForm.get('confirmPassword'); }
  get area(): AbstractControl { return this.signupForm.get('area'); }
  get phone(): AbstractControl { return this.signupForm.get('user.phone'); }
  get recoveryEmail(): AbstractControl { return this.signupForm.get('user.recoveryEmail'); }
  get location(): AbstractControl { return this.signupForm.get('user.location'); }
  get gender(): AbstractControl { return this.signupForm.get('user.gender'); }

}
