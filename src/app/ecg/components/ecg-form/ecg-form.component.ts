import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ecg-form',
  templateUrl: './ecg-form.component.html',
  styleUrls: ['./ecg-form.component.css']
})
export class EcgFormComponent implements OnInit {
    etape1: boolean = true;
    etape2: boolean = false;
    etape3: boolean = false;
    etape4: boolean = false;


  constructor() { }

  ngOnInit(): void {
  }

    getStep($event: number) {
        console.log($event)
        switch ($event) {
            case 1:
                this.etape1 = true;
                this.etape2 = false;
                this.etape3 = false;
                this.etape4 = false;
            break;
            case 2:
                this.etape1 = false;
                this.etape2 = true;
                this.etape3 = false;
                this.etape4 = false;
            break;
            case 3:
                this.etape1 = false;
                this.etape2 = false;
                this.etape3 = true;
                this.etape4 = false;
            break;
            case 4:
                this.etape1 = false;
                this.etape2 = false;
                this.etape3 = false;
                this.etape4 = true;
            break;
        }
    }
}
