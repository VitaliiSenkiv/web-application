import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AppointmentService } from 'src/app/core/services/appointment.service';

@Component({
  selector: 'app-add-appointment-page',
  templateUrl: './add-appointment-page.component.html',
  styleUrls: ['./add-appointment-page.component.css']
})
export class AddAppointmentPageComponent {
  constructor(private appointmentService: AppointmentService) {
  }
  
  submit() {
    this.appointmentService.makeAppointment({
      date: this.form.value.date as Date,
      patientId: this.form.value.patientId as number
    }).subscribe();
  }

  form = new FormGroup({
    date: new FormControl<Date>(new Date()),
    patientId: new FormControl<number>(0)
  })

  get date() {
    return this.form.controls.date as FormControl
  }

  get patientId() {
    return this.form.controls.patientId as FormControl
  }
}
