import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {StorageService} from "../../auth/services/storage.service";
import {environment} from "../../../environments/environment";

@Injectable()
export class EcgService {
    private isLoaded!: boolean;


    constructor (
        private storageService: StorageService,
        private http: HttpClient,
    ) { }

    private api = {
        get: environment.RES_API+"",
        update: "",
        archive: "",
        restore: ""
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
}
