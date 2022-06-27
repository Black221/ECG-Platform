import { Component, OnInit } from '@angular/core';
import {StaffService} from "../../services/staff.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-staff-profil',
  templateUrl: './staff-profil.component.html',
  styleUrls: ['./staff-profil.component.css']
})
export class StaffProfilComponent implements OnInit {

    modify: boolean = false;

    staff: any = {
        firstname: "Admin",
        lastname: "Admin",
        birthday: "10/10/2001",
        cni: "222222222222",
        permission: "Admin",
        phone: "777777777",
        email: "admin@admin.sn",
        address: {
            address: "Dakar",
            city: "Dakar",
            country: "Senegal"
        },

    };
    updateForm!: FormGroup;
    updatePassword!: FormGroup;
    errorMessage: any;
    password: boolean = false;

    constructor(
        private formBuilder: FormBuilder,
        private staffService: StaffService,
    ) { }

    ngOnInit(): void {
        this.staffService.getStaff().then(
            (res) => {
                if (res)
                    //@ts-ignore
                    this.staff = res.staff
            }
        )
    }

    getModify(): boolean {
        return this.modify;
    }

    onModify() {
        if (this.password){
            this.initFormP();
            return;
        }
        this.errorMessage = "";
        this.modify = !this.modify;
        this.initForm()
    }


    onSubmit() {
        const updated = {
            //@ts-ignore
            firstname: this.updateForm.get('firstname').value,
            //@ts-ignore
            lastname: this.updateForm.get('lastname').value,
            //@ts-ignore
            cni: this.updateForm.get('cni').value ? this.updateForm.get('cni').value.toString() : '',
            //@ts-ignore
            sex: this.updateForm.get('sex').value,
            //@ts-ignore
            email: this.updateForm.get('email').value,
            //@ts-ignore
            birthday: this.updateForm.get('birthday').value,
            //@ts-ignore
            login: this.updateForm.get('login').value,
            address: {
                //@ts-ignore
                address: this.updateForm.get('address').value,
                //@ts-ignore
                city: this.updateForm.get('city').value,
                //@ts-ignore
                country: this.updateForm.get('country').value,
            },
            //@ts-ignore
            phone: this.updateForm.get('phone').value,
        }
        this.staffService.updateStaff(updated).then(
            (res) => {
                if (res) {
                    window.location.reload()
                } else {
                    console.log(res)
                }
            }, err => {
                //@ts-ignore
                this.errorMessage = err.error;
            }
        )
    }

    getIsLoad (): boolean {
        return this.staffService.isLoaded;
    }

    private initFormP () {
        this.updatePassword = this.formBuilder.group(
            {
                password: ['', [Validators.required, Validators.pattern(/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/)]],
                confirmation: ['', Validators.required],
                exPassword: ['', Validators.required]
            }
        )
    }

    private initForm() {
        this.updateForm = this.formBuilder.group(
            {
                firstname: [this.staff.firstname, Validators.required],
                lastname: [this.staff.lastname, Validators.required],
                cni: [this.staff.cni, Validators.required],
                sex: [this.staff.sex, Validators.required],
                email: [this.staff.email, Validators.required],
                birthday: [this.staff.birthday, Validators.required],
                login: [this.staff.login, Validators.required],
                address: [this.staff.address.address, Validators.required],
                city: [this.staff.address.city, Validators.required],
                country: [this.staff.address.country, Validators.required],
                phone: [this.staff.phone, Validators.required],
            }
        );
    }

    onUpdatePassword() {
        this.modify = !this.password;
        this.password = !this.password;
    }

    onSubmitP() {

    }

    annuler() {
        this.modify = !this.modify;
        this.password = !this.password;
    }
}
