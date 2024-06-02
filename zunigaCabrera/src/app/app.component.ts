import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ZunigaCrearComponent } from './components/zuniga-crear/zuniga-crear.component';
import { NabvarComponent } from './components/nabvar/nabvar.component';
import { ZunigaListarComponent } from './components/zuniga-listar/zuniga-listar.component';
import { HttpClientModule } from '@angular/common/http';
import { InvestigacionService } from './services/Investigacion.service';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ZunigaCrearComponent, NabvarComponent, ZunigaListarComponent, HttpClientModule, ReactiveFormsModule, MatIconModule, MatPaginatorModule],
  providers:[InvestigacionService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'zunigaCabrera';
}