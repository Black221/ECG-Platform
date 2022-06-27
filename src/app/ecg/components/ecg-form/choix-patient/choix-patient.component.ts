import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-choix-patient',
  templateUrl: './choix-patient.component.html',
  styleUrls: ['./choix-patient.component.css']
})
export class ChoixPatientComponent implements OnInit {

    @Input() active!:boolean;
    ajouter: boolean = false;
    antecedents = [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
    ];
    click = 0;

    constructor() { }

    ngOnInit(): void {
    }

    changeChoix (choix: boolean) {
        this.ajouter = choix;
    }

    addAntecedent () {
        if (this.click > 8)
            return;
        this.antecedents[this.click] = true;
        this.click ++;
    }

    filterFirstname() {

    }

    filterLastname() {

    }

    filterBirthday() {

    }

    filterSex() {

    }
}
