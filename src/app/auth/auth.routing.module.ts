import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {SignupComponent} from "./components/signup/signup.component";
import {SigninComponent} from "./components/signin/signin.component";
import {AccessGard} from "../core/guards/access.gard";
import {AuthGard} from "../core/guards/auth.gard";

const routes: Routes = [
    { path: '', component: SigninComponent },
    { path: 'login', component: SigninComponent },
    { path: 'register', component: SignupComponent, canActivate: [AuthGard, AccessGard] },
]

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [
        RouterModule
    ]
})

export class AuthRoutingModule {

}
