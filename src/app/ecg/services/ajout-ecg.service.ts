import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {StorageService} from "../../auth/services/storage.service";

@Injectable()
export class PostEcgService {
    private status!: string;
    private isLoaded!: boolean;

    api = {
        post: ""
    }

    constructor(
        private http: HttpClient,
        private storageService: StorageService
    ) {}


    post (ecg: any,id: string) {
        return new Promise(
            (resolve, reject) => {
                const creater = this.storageService.getUser().userId;
                this.http.post(this.api.post+id, {}).subscribe(
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

    postMetadata (metadata: any, id: string) {
        return new Promise(
            (resolve, reject) => {
                const creater = this.storageService.getUser().userId;
                this.http.post(this.api.post+id, {}).subscribe(
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

    postFile (file: any, id:string) {
        return new Promise(
            (resolve, reject) => {
                const creater = this.storageService.getUser().userId;
                this.http.post(this.api.post+id, {}).subscribe(
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
