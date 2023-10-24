import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { inputDetails, customPatterns } from './custom-patterns';
type charType = 'text' | 'password';
// type maskTypes =
//   | 'firstName'
//   | 'lastName'
//   | 'email'
//   | 'cin'
//   | 'panCard'
//   | 'fullName'
//   | 'phoneNumber'
//   | 'amount'
//   | 'ifscCode'
//   | 'percentage';
type maskTypes = 'phoneNumber' | 'email' | 'percentage';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
})
export class CustomInputComponent {
  title = 'custom-input';
  @Input() charType: charType;
  @Input() control: FormControl;
  @Input() maskTypes: maskTypes;
  @Input() customPattern: any;
  attributes: any = {};

  constructor() {}
  ngOnInit() {
    this.setAttributes();
  }
  setAttributes() {
    Object.keys(inputDetails).forEach((val) => {
      if (this.maskTypes === val) {
        this.attributes = { ...inputDetails[val] };
        console.log(this.maskTypes, this.attributes);
      }
    });
  }
}
