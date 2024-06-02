// jimenez-crear.component.ts
import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatDatepicker, MatDatepickerInput, MatDatepickerToggle} from "@angular/material/datepicker";
import {MatOption, MatSelect} from "@angular/material/select";
import {MatCard} from "@angular/material/card";

@Component({
  selector: 'app-jimenez-crear',
  templateUrl: './jimenez-crear.component.html',
  standalone: true,
  imports: [
    MatLabel,
    MatFormField,
    MatDatepickerToggle,
    MatSelect,
    MatOption,
    MatDatepicker,
    ReactiveFormsModule,
    MatCard,
    MatDatepickerInput
  ],
  styleUrls: ['./jimenez-crear.component.css']
})
export class JimenezCrearComponent {
  investigationForm: FormGroup;
  types: string[] = ['Academic', 'Administrative', 'Commercial'];

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.investigationForm = this.fb.group({
      code: ['', Validators.required],
      description: ['', Validators.required],
      approvalDate: ['', Validators.required],
      type: ['', Validators.required],
      budget: ['']
    });
  }

  onSubmit() {
    if (this.investigationForm.valid) {
      this.http.post('/jimenezmenache/nuevo', this.investigationForm.value)
        .subscribe(response => {
          this.investigationForm.reset();
        });
    }
  }
}
