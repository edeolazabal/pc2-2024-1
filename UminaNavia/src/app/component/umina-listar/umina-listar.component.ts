import { MatCardModule } from '@angular/material/card';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Mina } from '../../model/mina';
import { MinaService } from '../../service/mina.service';
import { RouterModule } from '@angular/router';
import { MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-umina-listar',
  standalone: true,
  imports: [
    RouterModule,
    MatTableModule,
    MatCardModule,
    MatPaginatorModule
  ],
  templateUrl: './umina-listar.component.html',
  styleUrl: './umina-listar.component.css'
})
export class UminaListarComponent implements OnInit{
  minas: MatTableDataSource<Mina> = new MatTableDataSource<Mina>()
  displayedColumns : string[] = [
    'codigo', 
    'nombre', 
    //'fechaInicio',
    'tipo',
    //'toneladasProducidas'
  ]

  constructor(private minaService: MinaService) { }

  async ngOnInit() {
    (await this.minaService.listarMinas()).subscribe((data: Mina[]) => {
      this.minas.data = data;
    });

  }
}
