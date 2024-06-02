import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { InvestigacionService } from '../../services/Investigacion.service';
import { Investigacion } from '../../model/Investigacion';

@Component({
  selector: 'app-zuniga-crear',
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
  templateUrl: './zuniga-crear.component.html',
  styleUrl: './zuniga-crear.component.css'
})
export class ZunigaCrearComponent implements OnInit{

  public myForm!: FormGroup;
  foods: any;

  constructor(
    private router: Router, 
    private fb: FormBuilder,
    private investigacionService: InvestigacionService,
    private snackBar: MatSnackBar,) { }

  ngOnInit(): void {
    this.reactiveForm
    
  }

  reactiveForm() {
    this.myForm = this.fb.group ({
      Codigo: ['', Validators.required],
      Descripcion: ['', Validators.required]
    })
  }

  NuevaInvestigacion(){
    const investigacion:Investigacion={
      Codigo: this.myForm.get("Codigo")!.value,
      Descripcion: this.myForm.get("Descripcion")!.value,
      Presupuesto: this.myForm.get("Presupuesto")!.value,
      FechaDeAprobacion: "00/00/0000",
      Tipo: "no hay"
    }

    this.investigacionService.saveInvestigacion(investigacion).subscribe({
      next: (data) => {
        console.log("ingresando registro...")
        this.snackBar.open('Renta creado correctamento', '', {
          duration: 3000
        })
        this.router.navigate(['/zuniga/listar'])
      },
      error: (err) => {
        console.log(err)
      },
    })
  }
}