import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MinaService } from '../../service/mina.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { Mina } from '../../model/mina';

@Component({
  selector: 'app-umina-crear',
  standalone: true,
  imports: [
    RouterModule,
    ReactiveFormsModule,
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatNativeDateModule,
    MatDatepickerModule
  ],
  templateUrl: './umina-crear.component.html',
  styleUrl: './umina-crear.component.css'
})
export class UminaCrearComponent implements OnInit {
  minaForm: FormGroup

  constructor(
    private fb: FormBuilder,
    private minaService: MinaService,
    private router: Router
  ) {
    this.minaForm = this.fb.group({
      codigo: ['', Validators.required],
      nombre: ['', Validators.required],
      fechaInicio: ['', Validators.required],
      tipo: ['', Validators.required],
      toneladasProducidas: [''],
    });
  }
ngOnInit(): void {}

async crearMina(): Promise<any> {
  if (this.minaForm.valid) {
    const nuevaMina: Mina = this.minaForm.value;
    (await this.minaService.crearMina(nuevaMina)).subscribe(() => {
      this.router.navigate(['/crear']);
      this.minaForm.reset();
    });
  }
}
}
