import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { HttpClientModule } from '@angular/common/http';
import { MinaService } from './services/mina.service';
import { MontesListMinaComponent } from './components/montes-list-mina/montes-list-mina.component';
import { MontesAddMinaComponent } from './components/montes-add-mina/montes-add-mina.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, NavbarComponent, MontesListMinaComponent, MontesAddMinaComponent, HttpClientModule],
    providers: [MinaService]

})
export class AppComponent {
  title = 'mina-app';
}
