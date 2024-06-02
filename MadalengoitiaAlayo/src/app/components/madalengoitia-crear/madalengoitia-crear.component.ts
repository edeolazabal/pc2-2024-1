import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Mina } from '../../models/mina';
import { MinaService } from '../../services/mina.service';

@Component({
  selector: 'app-madalengoitia-crear',
  templateUrl: './madalengoitia-crear.component.html',
  styleUrls: ['./madalengoitia-crear.component.css']
})
export class MadalengoitiaCrearComponent implements OnInit {
  public myForm!: FormGroup

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
      fechaOperacion:  ['', Validators.required],
      tipo:  ['', Validators.required],
      toneladaspro:  [''],

    })
  }

  addMina() {
    const mina: Mina = {
      codigo: 0,
      nombre: this.myForm.get('nombre')!.value,
      fechaOperacion: this.myForm.get('fechaOperacion')!.value,
      tipo: this.myForm.get('tipo')!.value,
      toneladaspro: this.myForm.get('toneladaspro')!.value
    }
    this.minaService.saveMina(mina).subscribe({
      next: (data) => {
        console.log("ingresando registro...")
        this.snackBar.open('Mina creada correctamenta', '', {
          duration: 3000
        })
        this.router.navigate(['/list'])
      },
      error: (err) => {
        console.log(err)
      },
    })
  }

}
