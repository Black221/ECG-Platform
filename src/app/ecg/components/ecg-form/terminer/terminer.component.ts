import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-terminer',
  templateUrl: './terminer.component.html',
  styleUrls: ['./terminer.component.css']
})
export class TerminerComponent implements OnInit {

    @Input() active!:boolean;
    @Output() passed = new EventEmitter <boolean>();
    constructor() { }

    ngOnInit(): void {
    }

}
