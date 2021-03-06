import { Injectable } from '@angular/core';
import {StorageService} from "../../auth/services/storage.service";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PatientService {

    private isLoaded!: boolean;


    constructor (
        private storageService: StorageService,
        private http: HttpClient,
    ) { }

    private api = {
        getForDoctor: environment.RES_API+"patient/getByDoctor/",
        get: environment.RES_API+"patient/",
        update: environment.RES_API+"",
        archive: environment.RES_API+"",
        restore: environment.RES_API+"",
        post: environment.RES_API+""
    }

    post (patient: string) {
        return new Promise(
            (resolve, reject) => {
                const doctor = this.storageService.getUser().userId;
                this.http.post(this.api.post+doctor, patient).subscribe(
                    (res) => {
                        this.isLoaded = true;
                        console.log("this is next");
                        resolve(res);
                    },
                    (error) => {
                        this.isLoaded = false;
                        reject(error);
                    },
                    () => {
                        console.log("this is complete");
                        return "complete";
                    }
                )
            }
        )
    }

    get (count: string) {
        return new Promise(
            (resolve, reject) => {
                const doctor = this.storageService.getUser().userId;
                this.http.get(this.api.get+count).subscribe(
                    (res) => {
                        this.isLoaded = true;
                        console.log("this is next");
                        resolve(res);
                    },
                    (error) => {
                        this.isLoaded = false;
                        reject(error);
                    },
                    () => {
                        console.log("this is complete");
                        return "complete";
                    }
                )
            }
        )
    }

    update (id: string, ecg: any) {
        return new Promise(
            (resolve, reject) => {
                const creater = this.storageService.getUser().userId;
                this.http.put(this.api.update+id+'/'+creater, ecg).subscribe(
                    (res) => {
                        this.isLoaded = true;
                        console.log("this is next");
                        resolve(res);
                    },
                    (error) => {
                        this.isLoaded = false;
                        reject(error);
                    },
                    () => {
                        console.log("this is complete");
                        return "complete";
                    }
                )
            }
        )
    }

    archive (id: string) {
        return new Promise(
            (resolve, reject) => {
                const creater = this.storageService.getUser().userId;
                this.http.put(this.api.archive+id, {}).subscribe(
                    (res) => {
                        this.isLoaded = true;
                        console.log("this is next");
                        resolve(res);
                    },
                    (error) => {
                        this.isLoaded = false;
                        reject(error);
                    },
                    () => {
                        console.log("this is complete");
                        return "complete";
                    }
                )
            }
        )
    }

    restore (id: string) {
        return new Promise(
            (resolve, reject) => {
                const creater = this.storageService.getUser().userId;
                this.http.put(this.api.restore+id, {}).subscribe(
                    (res) => {
                        this.isLoaded = true;
                        console.log("this is next");
                        resolve(res);
                    },
                    (error) => {
                        this.isLoaded = false;
                        reject(error);
                    },
                    () => {
                        console.log("this is complete");
                        return "complete";
                    }
                )
            }
        )
    }

    getForDoctor() {
        const id = this.storageService.getUser().userId;
        return new Promise(
            (resolve, reject) => {
                const creater = this.storageService.getUser().userId;
                this.http.get(this.api.getForDoctor+id).subscribe(
                    (res) => {
                        this.isLoaded = true;
                        console.log("this is next");
                        resolve(res);
                    },
                    (error) => {
                        this.isLoaded = false;
                        reject(error);
                    },
                    () => {
                        console.log("this is complete");
                        return "complete";
                    }
                )
            }
        )
    }
}
