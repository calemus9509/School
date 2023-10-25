import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//para poder traer todas las opciones del crud HttpClientModule
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EspecialidadIndexComponent } from './especialidades/especialidad-index/especialidad-index.component';
import { EspecialidadFormComponent } from './especialidades/especialidad-form/especialidad-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [
    AppComponent,
    EspecialidadIndexComponent,
    EspecialidadFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //importar httpclien,forms,reactive
    HttpClientModule ,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
     BrowserAnimationsModule,
     DataTablesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
