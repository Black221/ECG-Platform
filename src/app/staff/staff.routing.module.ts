import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {StaffComponent} from "./components/staff/staff.component";
// import {Spe} from "./components/specific-staff/specific-staff.component";
import {StaffProfilComponent} from "./components/staff-profil/staff-profil.component";
import {AuthGard} from "../core/guards/auth.gard";
// import {StaffActivityListComponent} from "./components/staff-activity-list/staff-activity-list.component";
// import {StaffFormComponent} from "./components/staff-form/staff-form.component";

const routes: Routes = [
    { path: '', component: StaffComponent , canActivate: [AuthGard] },
    { path: 'profile', component: StaffProfilComponent , canActivate: [AuthGard] },
]

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [
        RouterModule
    ]
})

export class StaffRoutingModule {

}
