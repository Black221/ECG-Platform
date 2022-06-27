import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-terminer',
  templateUrl: './terminer.component.html',
  styleUrls: ['./terminer.component.css']
})
export class TerminerComponent implements OnInit {

    @Input() active!:boolean;
    constructor() { }

    ngOnInit(): void {
    }

}
