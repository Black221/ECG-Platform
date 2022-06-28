import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {AuthService} from "../../auth/services/auth.service";
import {StorageService} from "../../auth/services/storage.service";
import {StaffService} from "../../staff/services/staff.service";

@Injectable()

export class AdminGard implements CanActivate {

    constructor(
        private router: Router,
        private storageService: StorageService
    ) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Promise<boolean> {
        if (this.storageService.getUser().status === "admin") {
            return true;
        } else {
            this.router.navigateByUrl('/home');
            return false;
        }
    }
}
