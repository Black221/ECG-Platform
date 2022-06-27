import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Route, Router, Routes} from "@angular/router";

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

    @Output() emitStep = new EventEmitter<number>();
    step: number = 1;
    suivant: string = "Suivant";

    constructor(
        private route: Router
    ) { }

    ngOnInit(): void {
    }

    previewStep() {
        if (this.step <= 1)
            return;
        this.emitStep.emit(-- this.step);
        this.suivant = "Suivant";

    }

    nextStep() {
        // @ts-ignore
        if (this.step >= 4) {
            this.suivant = "Terminer"
            return;
        }
        this.emitStep.emit(++ this.step);
    }

    remove() {
        this.route.navigateByUrl('/ecgs');
    }
}
