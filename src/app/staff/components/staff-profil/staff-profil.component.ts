import { Component, OnInit } from '@angular/core';
import {StaffService} from "../../services/staff.service";

@Component({
  selector: 'app-staff-profil',
  templateUrl: './staff-profil.component.html',
  styleUrls: ['./staff-profil.component.css']
})
export class StaffProfilComponent implements OnInit {
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

    constructor(
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

    modify() {

    }
}
