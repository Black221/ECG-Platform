import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-patient-item',
  templateUrl: './patient-item.component.html',
  styleUrls: ['./patient-item.component.css']
})
export class PatientItemComponent implements OnInit {
    @Input() patient: any;
    id!: string;
    dropInfo = false;
    event: any;

  constructor() { }

  ngOnInit(): void {
  }

    onDelete(_id: any) {

    }

    drop() {
        console.log('info')
        this.dropInfo = !this.dropInfo
    }
}
