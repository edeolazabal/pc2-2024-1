
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./component/navbar/navbar.component";
import { HttpClientModule } from '@angular/common/http';
import { MinaService } from './service/mina.service';
import { UminaListarComponent } from './component/umina-listar/umina-listar.component';
import { UminaCrearComponent } from './component/umina-crear/umina-crear.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
      HttpClientModule,
      RouterOutlet,
      NavbarComponent,
      UminaListarComponent,
      UminaCrearComponent
    ],
    providers: [MinaService]

})
export class AppComponent {
  title = 'curso-ng17';
}
