import {Injectable} from "@angular/core";
const USER_KEY = 'AUTH_KEY';
@Injectable()
export class StorageService {
    constructor() {}

    clean(): void {
        window.sessionStorage.clear();
    }

    public saveLogin (login: string): void {
        window.sessionStorage.setItem('LOGIN', JSON.stringify(login));
    }

    public getLogin (): string {
        const user = window.sessionStorage.getItem('LOGIN');
        if (user) {
            return JSON.parse(user);
        }
        return "";
    }

    public saveUser(user: any): void {
        window.sessionStorage.removeItem(USER_KEY);
        window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
    }
    public getUser(): any {
        const user = window.sessionStorage.getItem(USER_KEY);
        if (user) {
            return JSON.parse(user);
        }
        return {};
    }
    public isLoggedIn(): boolean {
        const user = window.sessionStorage.getItem(USER_KEY);
        return !!user;
    }
}
