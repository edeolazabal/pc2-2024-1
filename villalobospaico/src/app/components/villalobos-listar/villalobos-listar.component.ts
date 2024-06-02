import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DescriptionService } from '../../services/description.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { Description } from '../../models/description';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-villalobos-listar',
  standalone: true,
  imports: [
    MatCardModule,
    MatTableModule,
    MatSnackBarModule,
    MatIconModule,
    MatButtonModule,
    RouterModule,
    MatPaginator
  ],
  templateUrl: './villalobos-listar.component.html',
  styleUrl: './villalobos-listar.component.css'
})
export class VillalobosListarComponent implements OnInit {
  constructor(
    private descriptionservice: DescriptionService) {}

    [x: string]: any;

  displayedColumns: string[] = ['description', 'type', 'budget']

  dataSource = new MatTableDataSource<Description>()
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.getDescriptions();
  }
  
    getDescriptions() {
    this.descriptionservice.getDescriptions().subscribe((data: Description[]) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    })
  }
}
