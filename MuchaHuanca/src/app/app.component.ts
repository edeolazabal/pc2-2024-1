import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';

import { InvestigacionService } from './service/investigacion.service';
import { MuchaCrearComponent } from './component/mucha-crear/mucha-crear.component';
import { MuchaListarComponent } from './component/mucha-listar/mucha-listar.component';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

  imports: [
    RouterOutlet , 
    NavbarComponent,
    HttpClientModule,
    MuchaCrearComponent,
    MuchaListarComponent
  ],
  providers: [InvestigacionService]
  
})
export class AppComponent {
  title = 'MuchaHuanca';
}
