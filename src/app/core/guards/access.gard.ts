import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {AuthService} from "../../auth/services/auth.service";
import {StorageService} from "../../auth/services/storage.service";
import {StaffService} from "../../staff/services/staff.service";

@Injectable()

export class AccessGard implements CanActivate {

    constructor(
        private router: Router,
        private staffService: StaffService,
        private storageService: StorageService
    ) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Promise<boolean> {
        return this.staffService.getStaff().then(
            // @ts-ignore
            (res: any) => {
                if (res) {
                    const access = res.staff.permission;
                    if (access !== "user") {
                        return true;
                    } else {
                        this.router.navigateByUrl('/home');
                        return false;
                    }
                } else
                    return false;
            }
        ).catch(err => {
            return false;
        });
    }
}
