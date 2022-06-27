import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {AuthService} from "../../auth/services/auth.service";
import {StorageService} from "../../auth/services/storage.service";

@Injectable()

export class AuthGard implements CanActivate{


    constructor(
        private authService: AuthService,
        private router: Router,
        private storageService: StorageService
    ) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Promise<boolean> {
        if (this.authService.getToken()) {
            return true;
        } else {
            if (this.storageService.isLoggedIn()) {
                this.authService.setToken(this.storageService.getUser().token)
                this.authService.setUserId(this.storageService.getUser().userId)
                return true;
            }
            this.router.navigateByUrl('/auth/login')
            return false;
        }
    }
}
