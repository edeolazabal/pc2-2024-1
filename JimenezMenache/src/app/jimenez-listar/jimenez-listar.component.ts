

import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatPaginator } from '@angular/material/paginator';
import {MatTable, MatTableDataSource} from '@angular/material/table';
import {MatCard} from "@angular/material/card";

@Component({
  selector: 'app-jimenez-listar',
  templateUrl: './jimenez-listar.component.html',
  standalone: true,
  imports: [
    MatCard,
    MatTable,
    MatPaginator
  ],
  styleUrls: ['./jimenez-listar.component.css']
})
export class JimenezListarComponent implements OnInit {
  displayedColumns: string[] = ['code', 'description', 'type'];
  dataSource = new MatTableDataSource([]);

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('/jimenezmenache/listar')
      .subscribe((data: any) => {
        this.dataSource.data = data;
        // @ts-ignore
        this.dataSource.paginator = this.paginator;
      });
  }
}
