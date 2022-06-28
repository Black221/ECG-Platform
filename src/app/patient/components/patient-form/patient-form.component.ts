import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PatientService} from "../../services/patient.service";

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.css']
})
export class PatientFormComponent implements OnInit {
    patientForm!: FormGroup;
    @Output() remove = new  EventEmitter<boolean>();

    constructor (
        private formBuilder: FormBuilder,
        private patientService: PatientService
    ) { }

    ngOnInit(): void {
        this.initForm();
    }

    onRemove () {
        this.remove.emit(false);
    }

    onSubmit () {
        this.patientService.post(this.patientForm.value).then(
            res => {
                if (res) {
                    window.location.reload()
                }
            }
        )
    }

    initForm() {
        this.patientForm = this.formBuilder.group(
            {
                firstname:[ '', Validators.required],
                lastname:[ '', Validators.required],
                sex:[ '', Validators.required],
                birthday:[ '', Validators.required],
                cni:[ '', Validators.required],
                phone:[ '', Validators.required],
                country:[ 'Senegal', Validators.required],
                nationality:[ 'Senegalaise', Validators.required],
                city:[ '', Validators.required],
                address:[ '', Validators.required],
            }
        )
    }
}
