import { Component , OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Mina } from '../../Models/mina';
import { MinaService } from '../../services/mina.service';
@Component({
  selector: 'app-sanchez-crear',
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
  templateUrl: './sanchez-crear.component.html',
  styleUrl: './sanchez-crear.component.css'
})
export class SanchezCrearComponent implements OnInit{
  public myForm!: FormGroup
  foods: any;
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
    this.myForm = this.fb.group ({//Atributos a validad
      id: [''], 
      nombre: ['', Validators.required],
      fecha_inicio: ['', Validators.required],
      tipo: ['', Validators.required],
      toneladas_producidas: [' '],
    })
  }

  addMina() {
    const mina: Mina = {
      id: 0,
      nombre: this.myForm.get('nombre')!.value,
      fecha_inicio: this.myForm.get('fecha_inicio')!.value,
      tipo: this.myForm.get('tipo')!.value,
      toneladas_producidas: this.myForm.get('toneladas_producidas')!.value,
      
    }
    this.minaService.saveMina(mina).subscribe({
      next: (data) => {
        console.log("ingresando registro...")
        this.snackBar.open('Mina ingresada correctamento', '', {
          duration: 3000
        })
        this.router.navigate(['/sanchez/nuevo'])
      },
      error: (err) => {
        console.log(err)
      },
    })
  }
}
