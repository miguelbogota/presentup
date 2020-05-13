/**
 * Contact component
 *
 * This component is the contact feature that allows
 * the user to contact with me. Will be available for everyone
 * and the data will be sent to me.
 */

import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, AbstractControl, Validators } from '@angular/forms';
import { AuthService } from '@app-core/authentication/auth.service';
import { IUser } from '@app-models/user.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  // Store user to show the information needed in the component
  @Input() user: IUser;
  contactForm: FormGroup; // Form group for the contact form

  constructor(
    private formBuilder: FormBuilder,
    public authService: AuthService
  ) { }

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(20)]],
    });
    // Check to fill the form with the logged user
    this.fillUserForm();
  }

  // Function to handle the contact form's submit
  submitForm() {
    /**
     * This function should send the message to the user,
     * then return a success message and a modal with a send
     * to the dashboard button and a stay button and a text
     * showing that the message was send successfully and can
     * check their messages in their dashboard.
     */
    console.log(this.contactForm.value);
  }

  // Functions fills the form with user data
  private fillUserForm() {
    this.authService.currentUser.subscribe((u: IUser) => {
      // Validate if there's any user logged
      if (u) {
        // Set value to the form
        this.name.setValue(u.name);
        this.email.setValue(u.email);
      }
      else {
        // Clear the form
        this.name.setValue('');
        this.email.setValue('');
      }
    });
  }

  // Getters & setters for the form
  get name(): AbstractControl { return this.contactForm.get('name'); }
  get email(): AbstractControl { return this.contactForm.get('email'); }
  get message(): AbstractControl { return this.contactForm.get('message'); }

}
