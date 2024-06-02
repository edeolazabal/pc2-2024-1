import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { OchoaCrearComponent } from './components/ochoa-crear/ochoa-crear.component';
import { OchoaListarComponent } from './components/ochoa-listar/ochoa-listar.component';
import { MaterialModule } from './material.module';
import { InvestigationService } from './services/investigation.service.service';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    OchoaCrearComponent,
    OchoaListarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [InvestigationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
