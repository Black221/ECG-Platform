import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-patient-info',
  templateUrl: './patient-info.component.html',
  styleUrls: ['./patient-info.component.css']
})
export class PatientInfoComponent implements OnInit {

    @Input() id!: string
    drop: any;
    @Input() event: any;

    constructor() { }

    ngOnInit(): void {
    }

    dropAntecedent() {

    }
}
