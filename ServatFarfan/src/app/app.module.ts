import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule, MatIconButton } from '@angular/material/button';
import { MatInputModule} from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { NavbarComponent } from './component/navbar/navbar.component'
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { InvestigacionComponent } from './component/investigacion/investigacion.component';
import { ServatCrearComponent } from './component/investigacion/servat-crear/servat-crear.component';
import { ServatListarComponent } from './component/investigacion/servat-listar/servat-listar.component';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InvestigacionComponent,
    ServatCrearComponent,
    ServatListarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, //add
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatSortModule,
    ReactiveFormsModule,
    FormsModule,
    MatDatepickerModule,
    MatToolbarModule,
    MatIconModule,
    MatSelectModule,
    ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
