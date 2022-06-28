import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-choix-patient',
  templateUrl: './choix-patient.component.html',
  styleUrls: ['./choix-patient.component.css']
})
export class ChoixPatientComponent implements OnInit {

    @Output() passed = new EventEmitter<any>();
    @Input() active!:boolean;
    @Input() canSkip!: boolean;
    @Output() skip = new  EventEmitter<boolean>();

    ajouter: boolean = false;

    click = 0;
    patients: any [] = [];
    patientForm!: FormGroup;


    constructor (
        private formBuilder: FormBuilder
    ) { }

    ngOnInit(): void {
        if (!this.patients.length)
            this.ajouter = true;
        this.intiForm()
    }

    changeChoix (choix: boolean) {
        this.ajouter = choix;
    }

    // addAntecedent () {
    //     if (this.click > 8)
    //         return;
    //     this.antecedents[this.click] = true;
    //     this.click ++;
    // }

    filterFirstname() {

    }

    filterLastname() {

    }

    filterBirthday() {

    }

    filterSex() {

    }

    onSubmit () {
        if (this.canSkip) {
            this.skip.emit(true);
            return;
        }
        this.passed.emit(this.patientForm.value);
    }

    onSelect (id: any) {
        this.passed.emit(id);
    }

    intiForm () {
        this.patientForm = this.formBuilder.group(
            {
                firstname:[ 'patient', Validators.required],
                lastname:[ 'patient', Validators.required],
                sex:[ 'M', Validators.required],
                birthday:[ '', Validators.required],
                cni:[ '', Validators.required],
                phone:[ '777777777', Validators.required],
                country:[ 'Senegal', Validators.required],
                nationality:[ 'Senegalaise', Validators.required],
                city:[ 'Dakar', Validators.required],
                address:[ 'Dakar', Validators.required],
            }
        )
    }

    onSkip() {
        this.skip.emit(true)
    }
}
