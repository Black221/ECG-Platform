import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable()
export class AuthService {

    constructor(
        private http: HttpClient
    ) { }

    private token!: string;
    private userId!: string;

    getToken (): string {
        return this.token;
    }

    setToken (token: string) {
        this.token = token;
    }

    getUserId (): string {
        return this.userId;
    }

    setUserId (user: string) {
        this.userId = user;
    }

    private api = {
        register: environment.AUTH_API+"auth/register",
        login: environment.AUTH_API+"auth/login",
        logout: environment.AUTH_API+"staff/logout"
    };
    isLoaded!:boolean;

    addUser (user: any) {
        return new Promise(
            (resolve, reject) => {
                this.http.post(this.api.register, user).subscribe(
                    (res) => {
                        this.isLoaded = true;
                        resolve(res);
                    },
                    (error) => {
                        this.isLoaded = false;
                        reject(error);
                    },
                    () => {
                        console.log("this is next");
                        console.log("this is complete");
                        return "complete";
                    }

                )
            }
        )
    }

    login (user: any) {
        return new Promise(
            (resolve, reject) => {
                this.http.post(this.api.login, user).subscribe(
                    (res) => {
                        this.isLoaded = true;
                        resolve(res);
                    },
                    (error) => {
                        this.isLoaded = false;
                        reject(error);
                    },
                    () => {
                        this.isLoaded = false;
                        return "complete";
                    }
                )
            }
        )
    }

    logout () {
        return new Promise(
            (resolve, reject) => {
                this.http.get(this.api.logout).subscribe(
                    (res) => {
                        this.isLoaded = true;
                        resolve(res);
                    },
                    (error) => {
                        this.isLoaded = false;
                        reject(error);
                    },
                    () => {
                        this.isLoaded = false;
                        return "complete";
                    }
                )
            }
        )
    }

    clear() {
        //@ts-ignore
        this.token = undefined;
        //@ts-ignore
        this.userId = undefined;
    }
}
