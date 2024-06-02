
import { Component, OnInit  } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router ,RouterModule} from '@angular/router';
import { MatTableDataSource } from '@angular/material/table'; 
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table'
import { Mina } from '../../Models/mina';
import { MinaService } from '../../services/mina.service';
import { MatPaginatorModule } from '@angular/material/paginator';
@Component({
  selector: 'app-sanchez-listar',
  standalone: true,
  imports: [
    MatCardModule,
    MatIconModule,
    MatTableModule,
    RouterModule ,
    MatPaginatorModule
  ],
  templateUrl: './sanchez-listar.component.html',
  styleUrl: './sanchez-listar.component.css'
})
export class SanchezListarComponent implements OnInit{
  [x: string]: any;

  displayedColumns: string[] = [ 'nombre', 'fecha_inicio', 'tipo']

  dataSource = new MatTableDataSource<Mina>()

  constructor(
    private minaService: MinaService,
    private snackBar: MatSnackBar,
    private router: Router) {}

  ngOnInit(): void {
    this.getMinas()
  }
  getMinas() {
    this.minaService.getMinas().subscribe((data: Mina[]) => {
      this.dataSource = new MatTableDataSource(data)
    })
  }

}


