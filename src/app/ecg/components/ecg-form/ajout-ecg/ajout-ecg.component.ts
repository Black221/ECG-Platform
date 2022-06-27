import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-ajout-ecg',
  templateUrl: './ajout-ecg.component.html',
  styleUrls: ['./ajout-ecg.component.css']
})
export class AjoutEcgComponent implements OnInit {

    @Input() active!:boolean;
    constructor() { }

    ngOnInit(): void {
    }

}
