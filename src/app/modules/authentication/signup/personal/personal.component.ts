import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {

  @Input() form: FormGroup; // Form will be passed from the parent
  @Output() step: EventEmitter<string> = new EventEmitter<string>(); // Sends either the next or back fucntion
  showLoadingSpinnerForm = false; // Show the spnnier while loading data from other providers

  constructor() { }

  ngOnInit(): void {
  }

  // Function handles the on submit form event to continue
  onNext(): void { this.step.emit('/account'); }

  // Function to sign up with Google
  signupWithGoogle() {
    this.showLoadingSpinnerForm = true; // Show animation while getting data

    this.showLoadingSpinnerForm = false; // Stop animation once data is loaded
  }

  // Getters & setters for the form
  get email(): AbstractControl { return this.form.get('email'); }
  get name(): AbstractControl { return this.form.get('name'); }

}
