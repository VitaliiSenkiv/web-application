import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PatientService } from 'src/app/core/services/patient.service';

@Component({
  selector: 'app-update-page',
  templateUrl: './update-page.component.html',
  styleUrls: ['./update-page.component.css']
})
export class UpdatePageComponent {
  constructor(private patientService: PatientService) {   }
  
  submit() {
    this.patientService.updatePatient(this.form.value.id as number, {
      name: this.form.value.name as string,
      petType: this.form.value.petType as string,
      ownerName: this.form.value.ownerName as string,
      birthday: this.form.value.birthday as Date,//string?
      diagnos: this.form.value.diagnos as string
    }).subscribe();
  }

  form = new FormGroup({
    id: new FormControl<number>(0),
    name: new FormControl<string>(''),
    petType: new FormControl<string>(''),
    ownerName: new FormControl<string>(''),
    birthday: new FormControl<Date>(new Date()),
    diagnos: new FormControl<string>('')
  })
  get id() {
    return this.form.controls.id as FormControl;
  }
  get name() {
    return this.form.controls.name as FormControl
  }

  get petType() {
    return this.form.controls.petType as FormControl
  }

  get ownerName() {
    return this.form.controls.ownerName as FormControl
  }

  get birthday() {
    return this.form.controls.birthday as FormControl
  }

  get diagnos() {
    return this.form.controls.diagnos as FormControl
  }
}
