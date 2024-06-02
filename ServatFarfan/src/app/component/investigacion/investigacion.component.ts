import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-investigacion',
  templateUrl: './investigacion.component.html',
  styleUrl: './investigacion.component.css'
})
export class InvestigacionComponent implements OnInit{
  constructor(public route: ActivatedRoute) {}

  ngOnInit(): void {
  }
  
}
