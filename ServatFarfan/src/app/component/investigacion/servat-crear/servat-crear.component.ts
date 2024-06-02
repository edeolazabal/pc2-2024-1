import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { investigacion } from '../../../model/investigacion';
import { InvestigacionService } from '../../../service/investigacion.service';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  AbstractControl,
} from '@angular/forms';

@Component({
  selector: 'app-servat-crear',
  templateUrl: './servat-crear.component.html',
  styleUrl: './servat-crear.component.css'
})
export class ServatCrearComponent {
  form: FormGroup = new FormGroup({});
  inves: investigacion = new investigacion();
  mensaje: string = '';
  maxFecha: Date = new Date(); // a mano importar import * as moment from 'moment';
  tipos: { value: string, viewValue: string }[] = [
    { value: 'Academico', viewValue: 'Academico'},
    { value: 'Administrativo', viewValue: 'Administrativo' },
    { value: 'Comercial', viewValue: 'Comercial' },
  ]

  constructor(
    private iS: InvestigacionService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      codigo: ['', Validators.required],
      descripcion: ['', Validators.required],
      fechaAprobacion: ['', [Validators.required]],
      tipo: ['', Validators.required],
      presupuesto:  [''],
    });
  }

  aceptar() {
    if (this.form.valid) {
    this.inves.codigo = this.form.value['codigo'];
    this.inves.descripcion = this.form.value['descripcion'];
    this.inves.fechaAprobacion = this.form.value['fechaAprobacion'];
    this.inves.tipo = this.form.value['tipo'];
    this.inves.presupuesto = this.form.value['presupuesto'];

    this.iS.insert(this.inves).subscribe((data) => {
      this.iS.list().subscribe((data) => {
        this.iS.setList(data);
      });
    });
    this.router.navigate(['servat/nuevo']);
  } else {
    this.mensaje = 'Por favor complete todos los campos obligatorios.';
  }
  }

  obtenerControlCampo(nombreCampo: string): AbstractControl {
    const control = this.form.get(nombreCampo);
    if (!control) {
      throw new Error(`Control no encontrado para el campo ${nombreCampo}`);
    }
    return control;
  }

}

