import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-ajout-metadonnees',
  templateUrl: './ajout-metadonnees.component.html',
  styleUrls: ['./ajout-metadonnees.component.css']
})
export class AjoutMetadonneesComponent implements OnInit {

    @Input() active!:boolean;
    constructor() { }

    ngOnInit(): void {
    }

}
