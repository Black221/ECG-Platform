import { Component, OnInit } from '@angular/core';
import {PatientService} from "../../services/patient.service";

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
    addPatient: boolean = false;

    constructor (
        private patientService: PatientService,
    ) { }

    onAddPatient () {
        this.addPatient = true;
    }

    ngOnInit(): void {
    }

    filterFirstname() {

    }

    filterLastname() {

    }

    filterBirthday() {

    }

    filterSex() {

    }

    updatePathology () {

    }

    onSubmit () {

    }

    onUpdate () {

    }

    getPathology () {
    }
}
