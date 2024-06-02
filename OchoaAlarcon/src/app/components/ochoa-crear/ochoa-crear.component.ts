import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Investigation } from 'src/app/models/investigation';
import { InvestigationService } from 'src/app/services/investigation.service.service';

@Component({
  selector: 'app-ochoa-crear',
  templateUrl: './ochoa-crear.component.html',
  styleUrls: ['./ochoa-crear.component.css']
})
export class OchoaCrearComponent implements OnInit {
  public myForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private investigationService: InvestigationService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.reactiveForm();
  }

  reactiveForm() {
    this.myForm = this.fb.group ({
      codigo: ['', Validators.required],
      descripcion: ['', Validators.required],
      fechaAprobacion: ['', Validators.required],
      tipo: ['', Validators.required],
      presupuesto: ['']
    });
  }

  addInvestigation() {
    const investigation: Investigation = {
      codigo: this.myForm.get('codigo')!.value,
      descripcion: this.myForm.get('descripcion')!.value,
      fechaAprobacion: this.myForm.get('fechaAprobacion')!.value,
      tipo: this.myForm.get('tipo')!.value,
      presupuesto: this.myForm.get('presupuesto')!.value
    };
    this.investigationService.saveInvestigation(investigation).subscribe({
      next: (data) => {
        console.log("Ingresando registro...");
        this.snackBar.open('Investigación creada correctamente', '', {
          duration: 3000
        });
        this.router.navigate(['/ochoa/listar']);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}
