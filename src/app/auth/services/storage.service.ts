import {Injectable} from "@angular/core";
const USER_KEY = 'azerty78thisismy78529key42279password';
@Injectable()
export class StorageService {
    constructor() {}

    clean(): void {
        window.sessionStorage.clear();
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