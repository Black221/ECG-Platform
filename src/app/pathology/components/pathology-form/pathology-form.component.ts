import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-pathology-form',
  templateUrl: './pathology-form.component.html',
  styleUrls: ['./pathology-form.component.css']
})
export class PathologyFormComponent implements OnInit {

    @Output() back = new EventEmitter<boolean> ();
    constructor() { }

    ngOnInit(): void {

    }

    onReturn($event: MouseEvent) {
        this.back.emit(false);
    }

    onSubmit() {

        window.location.reload()
    }
}
