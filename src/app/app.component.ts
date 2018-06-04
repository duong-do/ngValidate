import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FormBuilder]
})
export class AppComponent {
  validatingForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.validatingForm = fb.group({
        'required': [null, Validators.required],
    });
    }
}
