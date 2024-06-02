import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MadalengoitiaCrearComponent } from './components/madalengoitia-crear/madalengoitia-crear.component';
import { MadalengoitiaListarComponent } from './components/madalengoitia-listar/madalengoitia-listar.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MadalengoitiaCrearComponent,
    MadalengoitiaListarComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }