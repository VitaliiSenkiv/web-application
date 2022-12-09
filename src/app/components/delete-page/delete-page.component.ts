import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PatientService } from 'src/app/core/services/patient.service';

@Component({
  selector: 'app-delete-page',
  templateUrl: './delete-page.component.html',
  styleUrls: ['./delete-page.component.css']
})
export class DeletePageComponent {
  form = new FormGroup({
    id: new FormControl<number>(0)
  })

  get id() {
    return this.form.controls.id;
  }

  constructor(private patientsService: PatientService){}

  submit() {
    this.patientsService.deletePatient(this.form.value.id as number).subscribe();
  }
}
