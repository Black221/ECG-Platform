import { Injectable } from '@angular/core';
import {StorageService} from "../../auth/services/storage.service";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable()
export class StaffService {
    isLoaded!: boolean;

    constructor(
        private storageService: StorageService,
        private http: HttpClient
    ) { }

    getStaff () {
        const id = this.storageService.getUser().userId;
        return new Promise(
            (resolve, reject) => {
                this.http.get(environment.AUTH_API+'staff/specific/'+id).subscribe(
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

    updateStaff(staff : any) {
        const id = this.storageService.getUser().userId;
        return new Promise(
            (resolve, reject) => {
                this.http.patch(environment.AUTH_API+'staff/update/'+id, staff).subscribe(
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

    updatePassword (password: any) {
        const id = this.storageService.getUser().userId;
        return new Promise (
            (resolve, reject) => {
                this.http.put(environment.AUTH_API+'staff/password/'+id, password).subscribe(
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

}
