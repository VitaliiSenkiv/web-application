import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AppointmentService } from 'src/app/core/services/appointment.service';

@Component({
  selector: 'app-update-appointment-page-component',
  templateUrl: './update-appointment-page-component.component.html',
  styleUrls: ['./update-appointment-page-component.component.css']
})
export class UpdateAppointmentPageComponentComponent {
  constructor(private appointmentService: AppointmentService) {  }
  
  submit() {
    this.appointmentService.updateAppointment(this.form.value.id as number, {
      date: this.form.value.date as Date,
      patientId: this.form.value.patientId as number
    }).subscribe();
  }

  form = new FormGroup({
    id: new FormControl<number>(0),
    date: new FormControl<Date>(new Date()),
    patientId: new FormControl<number>(0)
  })
  
  get id() {
    return this.form.controls.id as FormControl;
  }

  get date() {
    return this.form.controls.date as FormControl
  }

  get patientId() {
    return this.form.controls.patientId as FormControl
  }
}
