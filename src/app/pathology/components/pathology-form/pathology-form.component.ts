import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PathologyService} from "../../services/pathology.service";

@Component({
  selector: 'app-pathology-form',
  templateUrl: './pathology-form.component.html',
  styleUrls: ['./pathology-form.component.css']
})
export class PathologyFormComponent implements OnInit {

    @Output() back = new EventEmitter<boolean> ();
    @Input() pathology:any;
    pathologyForm!: FormGroup;
    constructor (
        private pathologyService: PathologyService,
        private formBuilder: FormBuilder
    ) { }

    ngOnInit(): void {
        this.initForm()
    }

    onReturn() {
        this.back.emit(false);
    }

    onSubmit() {
        this.pathologyService.post(this.pathologyForm.value).then(
            res => {
                if (res)
                    window.location.reload()
            }
        )
        window.location.reload()
    }

    initForm () {
        this.pathologyForm = this.formBuilder.group(
            {
                name: [ this.pathology ? this.pathology.name : '', Validators.required],
                description: [ this.pathology ? this.pathology.description : '', Validators.required]
            }
        )
    }
}
