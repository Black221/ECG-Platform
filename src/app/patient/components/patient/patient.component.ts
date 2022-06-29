import { Component, OnInit } from '@angular/core';
import {PatientService} from "../../services/patient.service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
    addPatient: boolean = false;
    patients = [];
    message: string = "empty";
    patientForm!: FormGroup;
    selected:any;
    modify = false;

    constructor (
        private patientService: PatientService,
        private formBuilder: FormBuilder,
        private router: Router
    ) { }

    ngOnInit(): void {
        if (!this.patients.length)
            this.addPatient = true;
        this.initForm()
    }

    getPatients () {
        this.patientService.getForDoctor().then(
            res => {
                if (res) {
                    //@ts-ignore
                    this.patients = res.patients
                }
            }
        )
    }


    onAddPatient () {
        this.addPatient = true;
    }


    filterFirstname() {
        // @ts-ignore
        this.firstname = !this.firstname
        this.patients.sort((x, y) => {
            // @ts-ignore
            let a = x.firstname.toUpperCase(), b = y.firstname.toUpperCase();
            // @ts-ignore
            if (!this.firstname)
                return a == b ? 0 : a > b ? 1 : -1;
            return a == b ? 0 : a > b ? -1 : 1;
        })
    }

    filterLastname() {
        // @ts-ignore
        this.lastname = ! this.lastname
        this.patients.sort((x, y) => {
            // @ts-ignore
            let a = x.lastname.toUpperCase(), b = y.lastname.toUpperCase();
            // @ts-ignore
            if (!this.lastname)
                return a == b ? 0 : a > b ? 1 : -1;
            return a == b ? 0 : a > b ? -1 : 1;
        })
    }

    filterBirthday() {
        // @ts-ignore
        this.birthday = ! this.birthday
        this.patients.sort((x, y) => {
            // @ts-ignore
            let a = x.birthday.toUpperCase(), b = y.birthday.toUpperCase();
            // @ts-ignore
            if (!this.birthday)
                return a == b ? 0 : a > b ? 1 : -1;
            return a == b ? 0 : a > b ? -1 : 1;
        })
    }

    filterSex() {
        // @ts-ignore
        this.sex = ! this.sex
        this.patients.sort((x, y) => {
            // @ts-ignore
            let a = x.sex.toUpperCase(), b = y.sex.toUpperCase();
            // @ts-ignore
            if (!this.sex)
                return a == b ? 0 : a > b ? 1 : -1;
            return a == b ? 0 : a > b ? -1 : 1;
        })
    }

    onUpdate () {

    }

    getSelected($event: any) {
        this.selected = $event;
        if (this.selected)
            this.modify = true
    }
    initForm () {
        this.patientForm = this.formBuilder.group(
            {
                firstname:[ this.selected ? this.selected.firstname :'', Validators.required],
                lastname:[ this.selected ? this.selected.lastname :'', Validators.required],
                sex:[ this.selected ? this.selected.sex :'', Validators.required],
                birthday:[ this.selected ? this.selected.birthday :'', Validators.required],
                cni:[ this.selected ? this.selected.cni :'', Validators.required],
                phone:[ this.selected ? this.selected.phone :'', Validators.required],
                country:[ this.selected ? this.selected.country :'Senegal', Validators.required],
                nationality:[ this.selected ? this.selected.nationality :'Senegalaise', Validators.required],
                city:[ this.selected ? this.selected.city :'', Validators.required],
                address:[ this.selected ? this.selected.address :'', Validators.required],
            }
        )
    }
    onSubmit() {

    }
}
