import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientComponent } from './components/patient/patient.component';
import { PatientItemComponent } from './components/patient-item/patient-item.component';
import { PatientFormComponent } from './components/patient-form/patient-form.component';
import {PathologyRoutingModule} from "../pathology/pathology.routing.module";
import { PatientInfoComponent } from './components/patient-info/patient-info.component';
import {PatientService} from "./services/patient.service";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
    declarations: [
        PatientComponent,
        PatientItemComponent,
        PatientFormComponent,
        PatientInfoComponent
    ],
    exports: [
        PatientItemComponent
    ],
    imports: [
        CommonModule,
        PathologyRoutingModule,
        ReactiveFormsModule
    ],
    providers: [
        PatientService
    ]
})
export class PatientModule { }
