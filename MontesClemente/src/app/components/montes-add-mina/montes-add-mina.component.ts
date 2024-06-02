import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MinaService } from '../../services/mina.service';
import { Mina } from '../../model/mina';

@Component({
  selector: 'app-montes-add-mina',
  standalone: true,
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatOptionModule,
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './montes-add-mina.component.html',
  styleUrl: './montes-add-mina.component.css'
})
export class MontesAddMinaComponent implements OnInit{
  public myForm!: FormGroup
  foods: any;

  listaTipos: { value: string; viewvalue: string }[] = [
    { value: 'Tajo Abierto', viewvalue: 'Tajo Abierto' },
    { value: 'Subterránea', viewvalue: 'Subterránea' },
    { value: 'Mixta', viewvalue: 'Mixta' },
  ];
    constructor(
      private fb: FormBuilder,
      private minaService: MinaService,
      private snackBar: MatSnackBar,
      private router: Router
    ) {}
    ngOnInit(): void {
      this.reactiveForm()
    }
  
    reactiveForm() {
      this.myForm = this.fb.group ({
        codigo: [''],
        nombre: ['', Validators.required],
        fechaInicioOperacion:  ['', Validators.required],
        tipo:  ['', Validators.required],
        toneladasProducidas:  ['', Validators.required]
      })
    }
  
    addAuto() {
      const mina: Mina = {
        codigo: 0,
        nombre: this.myForm.get('nombre')!.value,
        fechaInicioOperacion: this.myForm.get('fechaInicioOperacion')!.value,
        tipo: this.myForm.get('tipo')!.value,
        toneladasProducidas: this.myForm.get('toneladasProducidas')!.value
      }
      this.minaService.saveMinas(mina).subscribe({
        next: (data) => {
          console.log("ingresando registro...")
          this.snackBar.open('Mina creado correctamento', '', {
            duration: 3000
          })
          this.router.navigate(['/montes/nuevo']).then(() => {
            window.location.reload();
          });
        },
        error: (err) => {
          console.log(err)
        },
      })
    }
  
}
