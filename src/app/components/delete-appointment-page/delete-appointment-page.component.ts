import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AppointmentService } from 'src/app/core/services/appointment.service';

@Component({
  selector: 'app-delete-appointment-page',
  templateUrl: './delete-appointment-page.component.html',
  styleUrls: ['./delete-appointment-page.component.css']
})
export class DeleteAppointmentPageComponent {
  constructor(private appointmentService: AppointmentService){}
  
  form = new FormGroup({
    id: new FormControl<number>(0)
  })

  get id() {
    return this.form.controls.id;
  }

  submit() {
    this.appointmentService.deletePatient(this.form.value.id as number).subscribe();
  }
}
