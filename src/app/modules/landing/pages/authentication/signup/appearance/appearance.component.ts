import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-appearance',
  templateUrl: './appearance.component.html',
  styleUrls: ['./appearance.component.scss']
})
export class AppearanceComponent implements OnInit {

  @Input() form: FormGroup; // Form will be passed from the parent
  @Output() step: EventEmitter<string> = new EventEmitter<string>(); // Sends either the next or back fucntion

  constructor() { }

  ngOnInit(): void {
  }

  // Function handles the on submit form event to continue
  onNext(): void { this.step.emit('/subscription'); }
  // Function handles the back function
  onBack(): void { this.step.emit('/account'); }

}
