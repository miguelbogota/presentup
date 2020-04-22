import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']
})
export class SubscriptionComponent implements OnInit {

  @Input() form: FormGroup; // Form will be passed from the parent
  @Output() step: EventEmitter<string> = new EventEmitter<string>(); // Sends either the next or back fucntion

  constructor() { }

  ngOnInit(): void {
  }

  // Function handles the on submit form event to continue
  onNext(): void {
    console.log('finished!')
  }

  // Function handles the back function
  onBack(): void { this.step.emit('/appearance'); }

}
