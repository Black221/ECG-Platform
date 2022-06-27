import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {StorageService} from "../../services/storage.service";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
    signInForm!: FormGroup;
    errorMessage: any;
    isAuth: boolean = false;

    constructor(
        private formBuilder: FormBuilder,
        private authService: AuthService,
        private router: Router,
        private storageService: StorageService
    ) { }

    ngOnInit(): void {
        if (this.storageService.isLoggedIn()) {
            this.authService.setToken(this.storageService.getUser().token)
            this.authService.setUserId(this.storageService.getUser().userId)
            console.log(this.authService.getToken());
            this.router.navigateByUrl('/home');
        }
        this.initForm();
    }

    onSubmit() {
        this.authService.login(this.signInForm.value)
            .then((res) => {
                if (res) {
                    //@ts-ignore
                    this.storageService.saveUser(res);
                    //@ts-ignore
                    this.authService.setToken(res.token);
                    //@ts-ignore
                    this.authService.setUserId(res.userId);
                    window.location.reload()
                } else {
                    this.errorMessage = "Une erreur est survenue. Veuillez réssayer plus tard"
                }
            }, (error) => {
                this.errorMessage = error.error;
                console.log(error)
            })
    }

    private initForm() {
        this.signInForm = this.formBuilder.group(
            {
                login: ['', Validators.required],
                password: ['', [Validators.required, Validators.pattern(/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/)]],
            }
        );
    }
}
