import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {CoreModule} from "./core/core.module";
import {AppRoutingModule} from "./app.routing.module";
import {PathologyModule} from "./pathology/pathology.module";
import {AuthModule} from "./auth/auth.module";
import {PatientModule} from "./patient/patient.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ShareModule} from "./share/share.module";
import {HttpClientModule} from "@angular/common/http";
import {httpInterceptorProviders} from "./core/interceptors";

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        CoreModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        ShareModule,
        AuthModule,
        HttpClientModule,
    ],
  providers: [
      httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
