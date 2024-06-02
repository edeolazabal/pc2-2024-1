import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { InvestigacionService } from '../../service/investigacion.service';
import { Investigacion } from '../../model/investigacion';

@Component({
  selector: 'app-mucha-listar',
  standalone: true,
  imports: [MatTableModule,RouterModule, MatCardModule,MatIconModule],
  templateUrl: './mucha-listar.component.html',
  styleUrl: './mucha-listar.component.css'
})
export class MuchaListarComponent implements OnInit{
  investigacion: MatTableDataSource<Investigacion> = new MatTableDataSource<Investigacion>()
  displayedColumns : string[] = ['codigo', 'descripcion', 'presupuesto']

  constructor(private investigacionService: InvestigacionService) { }

  async ngOnInit() {
    (await this.investigacionService.listarInvestigacion()).subscribe((data: Investigacion[]) => {
      this.investigacion.data = data;
    });

  }
}