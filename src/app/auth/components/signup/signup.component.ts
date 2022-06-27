import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
    errorMessage: any;
    signUpForm!: FormGroup;


    constructor(
        private authService: AuthService,
        private formBuilder: FormBuilder,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.initForm();
    }

    onSubmit() {
        this.authService.addUser(this.signUpForm.value)
            .then((res) => {
                console.log(res)
                this.router.navigate(['/home']);
            }, (error) => {
                console.log(error)
                this.errorMessage = error;
            }
        )
    }

    private initForm() {
        this.signUpForm = this.formBuilder.group(
            {
                firstname: ['', Validators.required],
                lastname: ['', Validators.required],
                cni: ['', Validators.required],
                sex: ['', Validators.required],
                birthday: ['', Validators.required],
                login: ['', Validators.required],
                password: ['', [Validators.required, Validators.pattern(/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/)]],
                profession: ['', Validators.required],
                permission: ['', Validators.required],
                phone: ['', Validators.required],
            }
        );
    }


}
