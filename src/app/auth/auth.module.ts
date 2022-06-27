import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import {AppRoutingModule} from "../app.routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AuthService} from "./services/auth.service";
import {AuthGard} from "../core/guards/auth.gard";
import {StorageService} from "./services/storage.service";
import {AccessGard} from "../core/guards/access.gard";



@NgModule({
    declarations: [
        SignupComponent,
        SigninComponent
    ],
    imports: [
        CommonModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [
        AuthService,
        AuthGard,
        StorageService,
        AccessGard
    ]
})
export class AuthModule { }
