import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { InvestigacionService } from '../../services/Investigacion.service';
import { Investigacion } from '../../model/Investigacion';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-zuniga-listar',
  standalone: true,
  imports: [
    MatCardModule,
    MatTableModule,
    MatSnackBarModule,
    MatIconModule,
    MatButtonModule,
    RouterModule,
    MatPaginatorModule
  ],
  templateUrl: './zuniga-listar.component.html',
  styleUrl: './zuniga-listar.component.css'
})
export class ZunigaListarComponent implements OnInit{
  constructor(
    private investigacionService: InvestigacionService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  
  ngOnInit(): void {
    this.getInvestigaciones(),
    this.dataSource.paginator = this.paginator;

  }

  [x: string]: any;

  displayedColumns: string[] = ['Codigo', 'Descripcion', 'Presupuesto']

  dataSource = new MatTableDataSource<Investigacion>()

  getInvestigaciones(){
    this.investigacionService.getInvestigacion().subscribe((data: Investigacion[]) => {
      this.dataSource = new MatTableDataSource(data)
  })

}
}
