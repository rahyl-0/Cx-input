import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  appToOps: FormGroup;
  mask: any;
  ngOnInit() {
    this.appToOps = new FormGroup({
      phoneNumber: new FormControl(null, [Validators.required]),
      email: new FormControl('', [Validators.required]),
      ifsc: new FormControl('', [Validators.required]),
    });
  }
}
