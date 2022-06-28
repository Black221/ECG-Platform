import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaffComponent } from './components/staff/staff.component';
import { StaffProfilComponent } from './components/staff-profil/staff-profil.component';
import { StaffItemComponent } from './components/staff-item/staff-item.component';
import {StaffRoutingModule} from "./staff.routing.module";
import {ShareModule} from "../share/share.module";
import {StaffService} from "./services/staff.service";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { GetStaffProfileComponent } from './components/get-staff-profile/get-staff-profile.component';



@NgModule({
    declarations: [
        StaffComponent,
        StaffProfilComponent,
        StaffItemComponent,
        GetStaffProfileComponent
    ],
    imports: [
        CommonModule,
        StaffRoutingModule,
        ShareModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule
    ],
    providers: [
        StaffService
    ]
})
export class StaffModule { }
