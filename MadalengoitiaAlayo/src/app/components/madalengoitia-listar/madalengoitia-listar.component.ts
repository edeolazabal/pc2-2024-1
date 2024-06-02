import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MinaService } from '../../services/mina.service';
import { Mina } from '../../models/mina';


@Component({
  selector: 'app-madalengoitia-listar',
  templateUrl: './madalengoitia-listar.component.html',
  styleUrl: './madalengoitia-listar.component.css'
})
export class MadalengoitiaListarComponent implements OnInit{
  [x: string]: any;

  displayedColumns: string[] = ['codigo', 'nombre', 'toneladaspro']

  dataSource = new MatTableDataSource<Mina>()

  constructor(
    private minaService: MinaService) {}

  ngOnInit(): void {
    this.getMinas()
  }
  getMinas() {
    this.minaService.getMinas().subscribe((data: Mina[]) => {
      this.dataSource = new MatTableDataSource(data)
    })
  }

}
