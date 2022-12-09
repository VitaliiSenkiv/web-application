import { Component, OnInit } from '@angular/core';
import { PatientService } from 'src/app/core/services/patient.service';

@Component({
  selector: 'app-get-page',
  templateUrl: './get-page.component.html',
  styleUrls: ['./get-page.component.css']
})
export class GetPageComponent implements OnInit {

  constructor(public service: PatientService) {}

  ngOnInit(): void {
    this.service.getPatients().subscribe(patients => console.log(patients)); 
  }
}
