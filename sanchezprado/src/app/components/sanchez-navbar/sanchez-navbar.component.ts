import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatToolbarRow } from '@angular/material/toolbar';
import { RouterModule} from '@angular/router';
import { MatIconModule } from '@angular/material/icon'
@Component({
  selector: 'app-sanchez-navbar',
  standalone: true,
  imports: [MatToolbarRow,
    MatToolbarModule,
    RouterModule,
    MatIconModule 
  ],
  templateUrl: './sanchez-navbar.component.html',
  styleUrl: './sanchez-navbar.component.css'
})
export class SanchezNavbarComponent {

}
