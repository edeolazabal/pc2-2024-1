import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { Router } from '@angular/router';
import { DescriptionService } from '../../services/description.service';
import { Description } from '../../models/description';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-villalobos-crear',
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
  templateUrl: './villalobos-crear.component.html',
  styleUrl: './villalobos-crear.component.css'
})
export class VillalobosCrearComponent implements OnInit {
  public myForm!: FormGroup;
  public investigationTypes = ['Académico', 'Administrativo', 'Comercial'];

  constructor(
    private fb: FormBuilder,
    private descriptionService: DescriptionService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.reactiveForm()
  }

  reactiveForm() {
    this.myForm = this.fb.group ({
      id: [''],
      description: ['', Validators.required],
      date:  ['', Validators.required],
      type:  ['', Validators.required],
      budget:  ['']
    })
  }

  addDescription() {
    if (this.myForm.valid) {
    const description: Description = {
      Id: 0,
      description: this.myForm.get('description')!.value,
      date: this.myForm.get('date')!.value,
      type: this.myForm.get('type')!.value,
      budget: this.myForm.get('budget')!.value || 0
    }
    this.descriptionService.saveDescription(description).subscribe({
      next: (description) => {
        console.log("ingresando registro...", description)
        this.snackBar.open('Descripcion creado correctamento', '', {
          duration: 3000
        });
        this.router.navigate(['villalobos/listar']);
      },
      error: (err) => {
        console.log(err)
        this.snackBar.open('Error al crear la descripción', '', {
          duration: 3000,
          panelClass: ['snack-bar-error']
        });
      }
    });
  } else {
    this.snackBar.open('Por favor complete todos los campos requeridos', '', {
      duration: 3000,
      panelClass: ['snack-bar-error']
    });
  }
}
}
