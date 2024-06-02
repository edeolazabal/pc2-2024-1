
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Router, RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { InvestigacionService } from '../../service/investigacion.service';
import { Investigacion } from '../../model/investigacion';


@Component({
  selector: 'app-mucha-crear',
  standalone: true,
  imports: [RouterModule,
    ReactiveFormsModule,
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule],
  templateUrl: './mucha-crear.component.html',
  styleUrl: './mucha-crear.component.css'
})
export class MuchaCrearComponent implements OnInit{

investigacionForm: FormGroup

  constructor(
    private fb: FormBuilder,
    private investigacionService: InvestigacionService,
    private router: Router
  ) {
    this.investigacionForm = this.fb.group({
      brand: ['', Validators.required],
      price: ['', Validators.required],
    });
  }
ngOnInit(): void {}

async crearInvestigacion(): Promise<any> {
  if (this.investigacionForm.valid) {
    const nuevoInvestigacion: Investigacion = this.investigacionForm.value;
    (await this.investigacionService.crearInvestigacion(nuevoInvestigacion)).subscribe(() => {
      this.router.navigate(['/mucha']);
      this.investigacionForm.reset();
    });
  }
}

}
