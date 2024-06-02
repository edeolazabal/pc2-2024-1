import { Component, ViewChild, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { investigacion } from '../../../model/investigacion';
import { InvestigacionService } from '../../../service/investigacion.service';

@Component({
  selector: 'app-servat-listar',
  templateUrl: './servat-listar.component.html',
  styleUrl: './servat-listar.component.css'
})
export class ServatListarComponent implements OnInit{
  dataSource: MatTableDataSource<investigacion> = new MatTableDataSource();
  displayedColumns: string[] = ['Código', 'Descripción','Fecha de Aprobación'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private iS: InvestigacionService) {}

  ngOnInit(): void {
    this.iS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
    this.iS.getList().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
  }
}
