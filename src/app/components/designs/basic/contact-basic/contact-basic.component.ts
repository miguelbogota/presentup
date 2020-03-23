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
  selector: 'app-contact-basic',
  templateUrl: './contact-basic.component.html',
  styleUrls: ['./contact-basic.component.scss']
})
export class ContactBasicComponent implements OnInit {

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
