import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  @Input() form: FormGroup; // Form will be passed from the parent
  @Output() step: EventEmitter<string> = new EventEmitter<string>(); // Sends either the next or back fucntion

  constructor() { }

  ngOnInit(): void {
  }

  // Function handles the on submit form event to continue
  onNext(): void { this.step.emit('/appearance'); }
  // Function handles the back function
  onBack(): void { this.step.emit('/account'); }

}
