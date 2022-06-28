import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PathologyComponent } from './components/pathology/pathology.component';
import { PathologyItemComponent } from './components/pathology-item/pathology-item.component';
import { PathologyFormComponent } from './components/pathology-form/pathology-form.component';
import {PathologyRoutingModule} from "./pathology.routing.module";
import {ShareModule} from "../share/share.module";
import {PathologyService} from "./services/pathology.service";



@NgModule({
    declarations: [
        PathologyComponent,
        PathologyItemComponent,
        PathologyFormComponent,
    ],
    imports: [
        CommonModule,
        PathologyRoutingModule,
        ShareModule
    ],
    exports: [
        PathologyItemComponent,
        PathologyFormComponent,
    ],
    providers: [
        PathologyService,

    ]
})
export class PathologyModule { }
