import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PathologyService} from "../../../../pathology/services/pathology.service";

@Component({
  selector: 'app-ajout-ecg',
  templateUrl: './ajout-ecg.component.html',
  styleUrls: ['./ajout-ecg.component.css']
})
export class AjoutEcgComponent implements OnInit {

    @Input() active!:boolean;
    @Output() passed = new EventEmitter <any>();
    @Output() preview = new EventEmitter<boolean>();
    @Input() canSkip!: boolean;
    @Output() skip = new EventEmitter<boolean>();
    file : any;

    ecgForm!: FormGroup;
    pathologies: string[] = [];
    // file!: FormData;

    constructor (
        private formBuilder: FormBuilder,
        private pathologyService: PathologyService,
    ) { }

    ngOnInit(): void {
        this.initForm();
    }

    getPathology($event: Event) {
        console.log($event)
        // @ts-ignore
        this.pathologies.push($event.target.value);
    }

    onPreview() {
        this.preview.emit(false)
    }

    onSubmit() {
        if (this.canSkip) {
            this.skip.emit(true);
            return;
        }
        this.passed.emit({ecg :this.ecgForm.value, pathology: this.pathologies, ecgFile: this.file});
    }


    initForm() {
        this.ecgForm = this.formBuilder.group(
            {
                comment: [''],
            }
        )
    }

    uploadFile($event: Event) {
        console.log("hey");
        // @ts-ignore
        this.file = ($event.target as HTMLInputElement).files[0];
    }

}
