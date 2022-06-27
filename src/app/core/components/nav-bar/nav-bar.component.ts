import { Component, OnInit } from '@angular/core';
import {StorageService} from "../../../auth/services/storage.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

    constructor(
        private storageService: StorageService
    ) { }
    opened = false
    isAuth!: boolean;

    ngOnInit(): void {
        this.isAuth = this.storageService.isLoggedIn()
    }

    openMenu() {
        this.opened = !this.opened
    }
}
