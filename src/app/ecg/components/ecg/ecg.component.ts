import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {EcgService} from "../../services/ecg.service";

@Component({
  selector: 'app-ecg',
  templateUrl: './ecg.component.html',
  styleUrls: ['./ecg.component.css']
})
export class EcgComponent implements OnInit {

    ecgs = [];

    constructor (
        private router: Router,
        private ecgService: EcgService
    ) { }

    ngOnInit(): void {
        if (!this.ecgs.length)
            this.router.navigateByUrl('/ecgs/new')
    }

    getEcgs () {
        this.ecgService.get().then(
            res => {
                if (res)
                    //@ts-ignore
                    this.ecgs = res.ecgs;
            }
        )
    }
}
