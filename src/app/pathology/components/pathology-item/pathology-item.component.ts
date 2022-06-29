import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-pathology-item',
  templateUrl: './pathology-item.component.html',
  styleUrls: ['./pathology-item.component.css']
})
export class PathologyItemComponent implements OnInit {
    @Input() pathology:any;
    @Output() modify = new EventEmitter <any>();

    index: any;

    constructor() { }

    ngOnInit(): void {
    }

    onSelect () {
        this.modify.emit(this.pathology);
    }

    onDelete(_id: any) {

    }

}
