import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {EcgService} from "../../services/ecg.service";
import {PostEcgService} from "../../services/ajout-ecg.service";

@Component({
  selector: 'app-ecg-form',
  templateUrl: './ecg-form.component.html',
  styleUrls: ['./ecg-form.component.css']
})
export class EcgFormComponent implements OnInit {
    step1: boolean = true;
    canSkip1: boolean = false;
    step2: boolean = false;
    canSkip2: boolean = false;
    step3: boolean = false;
    canSkip3: boolean = false;
    step4: boolean = false;

    patient: any;
    ecg: any;
    metadata: any


    @Output() passed = new EventEmitter <boolean>();

    constructor (
        private appendEcg: PostEcgService
    ) { }

    ngOnInit(): void {
    }

    getStep1($event: any) {
        console.log($event);
        this.patient = $event;
        if (this.patient !== undefined) {
            this.step2 = true
            this.canSkip1 = true;
        }
        console.log(this.patient)
    }

    getStep2($event: boolean) {
        this.ecg = $event;
        if (this.ecg !== undefined) {
            this.step3 = true;
            this.canSkip2 = true;
        }
        console.log(this.patient,this.ecg)
    }

    getStep3($event: boolean) {
        this.metadata = $event;
        if (this.metadata !== undefined) {
            this.step4 = true;
            this.canSkip3 = true;
        }
        console.log(this.patient, this.ecg, this.metadata)
    }

    getStep4($event: boolean) {

    }

    onSaveEcg () {
        this.appendEcg.post({}, '').then(
            res => {
                if (res) {
                    this.appendEcg.postMetadata({}, '').then(
                        resM => {
                            if (resM) {

                            }
                            this.appendEcg.postFile({}, '').then(
                                resF => {
                                    if (resF){
                                        console.log(res,resM,resF)
                                    }
                                }
                            )
                        }
                    )
                }
            }
        )
    }
}
