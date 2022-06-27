import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ContainerComponent } from './components/container/container.component';
import { HomeComponent } from './components/home/home.component';
import {RouterModule} from "@angular/router";
import { ArchiveComponent } from './components/archive/archive.component';
import {HttpClientModule} from "@angular/common/http";
import {StaffService} from "../staff/services/staff.service";
import {StaffModule} from "../staff/staff.module";



@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        NavBarComponent,
        ContainerComponent,
        HomeComponent,
        ArchiveComponent
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        NavBarComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
    ],
    providers: [
        StaffService
    ]
})
export class CoreModule { }
