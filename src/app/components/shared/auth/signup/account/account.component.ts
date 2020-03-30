import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  @Input() form: FormGroup; // Form will be passed from the parent
  @Output() step: EventEmitter<string> = new EventEmitter<string>(); // Sends either the next or back fucntion

  constructor() { }

  ngOnInit(): void {
  }

  // Function handles the on submit form event to continue
  onNext(): void { this.step.emit('/appearance'); }
  // Function handles the back function
  onBack(): void { this.step.emit(''); }

  // Getter gets only the first name
  get fName(): string { return this.form.get('name').value.split(' ')[0]; }
  // Getters & setters for the form
  get uid(): AbstractControl { return this.form.get('uid'); }
  get pass(): AbstractControl { return this.form.get('pass'); }
  get cPass(): AbstractControl { return this.form.get('cPass'); }

}
