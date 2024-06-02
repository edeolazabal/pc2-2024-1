import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SanchezCrearComponent } from './components/sanchez-crear/sanchez-crear.component';
import { HttpClientModule } from '@angular/common/http';
import { MinaService } from './services/mina.service';
import { SanchezNavbarComponent } from './components/sanchez-navbar/sanchez-navbar.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,SanchezCrearComponent, HttpClientModule,SanchezNavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[MinaService]
})
export class AppComponent {
  title = 'sanchezprado';
}
