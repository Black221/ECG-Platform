import {Component, Input, OnInit} from '@angular/core';
import {StorageService} from "../../../auth/services/storage.service";
import {AuthService} from "../../../auth/services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    linkForm: any;
    @Input() title: any;
    isAuth!: boolean;
    // idAuth: string;

    constructor(
        private storageService: StorageService,
        private authService: AuthService,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.isAuth = this.storageService.isLoggedIn();
    }

    onLogout() {
        this.authService.logout().then(
            res => {
                if (res) {
                    console.log('yes');
                    this.authService.clear();
                    this.storageService.clean();
                    window.location.reload();
                }
            }
        )

    }
}
