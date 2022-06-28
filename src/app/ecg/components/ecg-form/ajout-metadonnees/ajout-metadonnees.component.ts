import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-ajout-metadonnees',
  templateUrl: './ajout-metadonnees.component.html',
  styleUrls: ['./ajout-metadonnees.component.css']
})
export class AjoutMetadonneesComponent implements OnInit {

    @Input() active!:boolean;
    @Input() canSkip!: boolean;
    @Output() preview = new EventEmitter<boolean>();
    @Output() passed = new EventEmitter <boolean>();
    metadataForm!: FormGroup;

    constructor (
        private formBuilder: FormBuilder
    ) { }

    ngOnInit(): void {
        this.initForm();
    }

    onSubmit () {
        // @ts-ignore
        this.passed.emit(this.metadataForm)
    }



    initForm () {
        this.metadataForm = this.formBuilder.group(
            {

            }
        )
    }

    onPreview() {
        this.preview.emit(false)
    }
}
