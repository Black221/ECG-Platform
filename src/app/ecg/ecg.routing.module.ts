import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {EcgComponent} from "./components/ecg/ecg.component";
import {SpecificEcgComponent} from "./components/specific-ecg/specific-ecg.component";
import {EcgFormComponent} from "./components/ecg-form/ecg-form.component";
import {EcgPatientComponent} from "./components/ecg-patient/ecg-patient.component";
import {AuthGard} from "../core/guards/auth.gard";


const routes: Routes = [
    { path: 'patient/:id', component: EcgPatientComponent , canActivate: [AuthGard] },
    { path: 'view/:id', component: SpecificEcgComponent , canActivate: [AuthGard] },
    { path: 'new', component: EcgFormComponent , canActivate: [AuthGard] },
    { path: 'edit/:id', component: EcgFormComponent , canActivate: [AuthGard] },
    { path: '', component: EcgComponent , canActivate: [AuthGard] },
    { path: ':filter', component: EcgComponent , canActivate: [AuthGard] },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class EcgRoutingModule {

}
