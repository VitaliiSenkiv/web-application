import { Component } from '@angular/core';
import { AppointmentService } from 'src/app/core/services/appointment.service';

@Component({
  selector: 'app-appointment-page',
  templateUrl: './appointment-page.component.html',
  styleUrls: ['./appointment-page.component.css']
})
export class AppointmentPageComponent {
  constructor(public service: AppointmentService) {}

  ngOnInit(): void {
    this.service.getAppointments().subscribe(appinitments => console.log(appinitments)); 
  }
}
