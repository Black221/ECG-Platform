import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-specific-ecg',
  templateUrl: './specific-ecg.component.html',
  styleUrls: ['./specific-ecg.component.css']
})
export class SpecificEcgComponent implements OnInit {
    ecg: any;
    metadata: any;
    ecgMetadata: any;
    patient: any;

    constructor() { }

    ngOnInit(): void {
    }

    onDelete(_id: any) {

    }

    getPath() {
        return "";
    }
}
