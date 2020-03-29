import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {

  signupForm: FormGroup; // Form with the data in the sign up page
  showLoadingSpinnerForm = false; // Show the spnnier while loading data from other providers

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    // Form set up
    this.signupForm = this.fb.group({
      email: ['', [ Validators.required, Validators.email ]],
      name: ['', [ Validators.required ]]
    });
  }

  // Function handles the on submit form event
  onSubmit(): void {
    this.signupForm.markAsTouched(); // Mark as touched to see errors
    if (this.signupForm.invalid) { return null; } // If the form is invalid do nothing
    // If form is valid send to set the account page
    this.router.navigate(['/signup/account']);
  }

  // Function to sign up with Google
  signupWithGoogle() {
    this.showLoadingSpinnerForm = true; // Show animation while getting data

    this.showLoadingSpinnerForm = false; // Stop animation once data is loaded
  }

  // Getters & setters for the form
  get email() { return this.signupForm.get('email'); }
  get name() { return this.signupForm.get('name'); }

}
