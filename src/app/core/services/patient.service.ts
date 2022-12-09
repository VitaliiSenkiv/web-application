import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPatient } from '../model/Patient';
import { Observable, tap } from 'rxjs';
import { IPatientDTO } from '../model/PatientDTO';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
    public patients: IPatient[] = [];
  
    constructor(private http: HttpClient) { }
  
    public getPatients(): Observable<IPatient[]> {
      return this.http.get<IPatient[]>('https://localhost:7150/api/Patient')
      .pipe(
        tap(patients => this.patients = patients)
      );
    }
  
    public getPatientById(id: number): Observable<IPatient> {
      return this.http.get<IPatient>('https://localhost:7150/api/Patient/' +  id).pipe();
    }
  
    public createPatient(patient: IPatientDTO): Observable<IPatientDTO> {
      console.log(patient);
      return this.http.post<IPatientDTO>('https://localhost:7150/api/Patient', patient);
    }
  
    public deletePatient(id: number) {
      this.patients = this.patients.filter(el => el.id != id);
  
      return this.http.delete<IPatient>('https://localhost:7150/api/Patient/' + id);
    }
  
    public updatePatient(id: number, newPatient: IPatientDTO) {
      return this.http.put('https://localhost:7150/api/Patient/' + id, newPatient);
    }
  }