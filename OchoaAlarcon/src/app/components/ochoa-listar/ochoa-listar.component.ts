import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { Investigation } from 'src/app/models/investigation';
import { InvestigationService } from 'src/app/services/investigation.service.service';

@Component({
  selector: 'app-ochoa-listar',
  templateUrl: './ochoa-listar.component.html',
  styleUrls: ['./ochoa-listar.component.css']
})
export class OchoaListarComponent implements OnInit {

  displayedColumns: string[] = ['codigo', 'descripcion', 'tipo'];
  dataSource = new MatTableDataSource<Investigation>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private investigationService: InvestigationService,
    private snackBar: MatSnackBar,
    private router: Router) {}

  ngOnInit(): void {
    this.getInvestigations();
  }

  getInvestigations() {
    this.investigationService.getInvestigations().subscribe((data: Investigation[]) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
  }

  
}
