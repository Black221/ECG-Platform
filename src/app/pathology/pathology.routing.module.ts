import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {PathologyComponent} from "./components/pathology/pathology.component";
import {AuthGard} from "../core/guards/auth.gard";


const routes: Routes = [
    { path: '', component: PathologyComponent , canActivate: [AuthGard] },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule,
    ]
})

export class PathologyRoutingModule {

}
