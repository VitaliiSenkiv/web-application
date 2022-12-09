import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { IAppointment } from '../model/Appointment';
import { IAppointmentDTO } from '../model/AppointmentDTO';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  public appointments: IAppointment[] = [];
  
  constructor(private http: HttpClient) { }

  public getAppointments(): Observable<IAppointment[]> {
    return this.http.get<IAppointment[]>('https://localhost:7150/api/Appointment')
    .pipe(
      tap(appointments => this.appointments = appointments)
    );
  }

  public makeAppointment(appointmentDTO: IAppointmentDTO): Observable<IAppointmentDTO> {
    console.log(appointmentDTO);
    return this.http.post<IAppointmentDTO>('https://localhost:7150/api/Appointment', appointmentDTO);
  }

  public updateAppointment(id: number, newAppiintment: IAppointmentDTO) {
    return this.http.put('https://localhost:7150/api/Appointment/' + id, newAppiintment);
  }

  public deletePatient(id: number) {
    this.appointments = this.appointments.filter(el => el.id != id);

    return this.http.delete<IAppointment>('https://localhost:7150/api/Appointment/' + id);
  }
}
