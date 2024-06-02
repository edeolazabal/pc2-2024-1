import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DescriptionService } from './services/description.service';
import { VillalobosCrearComponent } from './components/villalobos-crear/villalobos-crear.component';
import { VillalobosListarComponent } from './components/villalobos-listar/villalobos-listar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, VillalobosCrearComponent, VillalobosListarComponent, NavbarComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [DescriptionService]
})
export class AppComponent {
  title = 'villalobospaico';
}
