/**
 * Contact component
 *
 * This component is the contact feature that allows
 * the user to contact with me. Will be available for everyone
 * and the data will be sent to me.
 */

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup; // Form group for the contact form

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      name: '',
      email: '',
      message: ''
    });
  }

}
