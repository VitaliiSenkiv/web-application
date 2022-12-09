import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InsertPageComponent } from './components/insert-page/insert-page.component';
import { GetPageComponent } from './components/get-page/get-page.component';
import { UpdatePageComponent } from './components/update-page/update-page.component';
import { DeletePageComponent } from './components/delete-page/delete-page.component';
import { AppointmentPageComponent } from './components/appointment-page/appointment-page.component';
import { AddAppointmentPageComponent } from './components/add-appointment-page/add-appointment-page.component';
import { UpdateAppointmentPageComponentComponent } from './components/update-appointment-page-component/update-appointment-page-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DeleteAppointmentPageComponent } from './components/delete-appointment-page/delete-appointment-page.component';

@NgModule({
  declarations: [
    AppComponent,
    InsertPageComponent,
    GetPageComponent,
    UpdatePageComponent,
    DeletePageComponent,
    AppointmentPageComponent,
    AddAppointmentPageComponent,
    UpdateAppointmentPageComponentComponent,
    DeleteAppointmentPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
