import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpecificEcgComponent } from './components/specific-ecg/specific-ecg.component';
import { EcgComponent } from './components/ecg/ecg.component';
import { EcgFormComponent } from './components/ecg-form/ecg-form.component';
import { EcgPatientComponent } from './components/ecg-patient/ecg-patient.component';
import {EcgRoutingModule} from "./ecg.routing.module";
import { EcgListItemComponent } from './components/ecg-list-item/ecg-list-item.component';
import { ChoixPatientComponent } from './components/ecg-form/choix-patient/choix-patient.component';
import { AjoutEcgComponent } from './components/ecg-form/ajout-ecg/ajout-ecg.component';
import { AjoutMetadonneesComponent } from './components/ecg-form/ajout-metadonnees/ajout-metadonnees.component';
import { TerminerComponent } from './components/ecg-form/terminer/terminer.component';
import { ButtonComponent } from './components/ecg-form/button/button.component';
import {PatientModule} from "../patient/patient.module";



@NgModule({
    declarations: [
        SpecificEcgComponent,
        EcgComponent,
        EcgFormComponent,
        EcgPatientComponent,
        EcgListItemComponent,
        ChoixPatientComponent,
        AjoutEcgComponent,
        AjoutMetadonneesComponent,
        TerminerComponent,
        ButtonComponent
    ],
    exports: [
        EcgFormComponent
    ],
    imports: [
        CommonModule,
        EcgRoutingModule,
        PatientModule,
    ]
})
export class EcgModule { }
