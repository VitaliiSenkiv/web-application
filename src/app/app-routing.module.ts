import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsertPageComponent } from './components/insert-page/insert-page.component';
import { GetPageComponent } from './components/get-page/get-page.component';
import { UpdatePageComponent } from './components/update-page/update-page.component';
import { DeletePageComponent } from './components/delete-page/delete-page.component';
import { AppointmentPageComponent } from './components/appointment-page/appointment-page.component';
import { AddAppointmentPageComponent } from './components/add-appointment-page/add-appointment-page.component';
import { UpdateAppointmentPageComponentComponent } from './components/update-appointment-page-component/update-appointment-page-component.component';
import { DeleteAppointmentPageComponent } from './components/delete-appointment-page/delete-appointment-page.component';

const routes: Routes = [
  { path: "", component: GetPageComponent },
  { path: "insert", component: InsertPageComponent },
  { path: "update", component: UpdatePageComponent },
  { path: "delete", component: DeletePageComponent },
  { path: "appointment", component: AppointmentPageComponent },
  { path: "addAppointment", component: AddAppointmentPageComponent },
  { path: "updateAppointment", component: UpdateAppointmentPageComponentComponent },
  { path: "deleteAppointment", component: DeleteAppointmentPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
