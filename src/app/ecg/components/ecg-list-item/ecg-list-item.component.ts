import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-ecg-list-item',
  templateUrl: './ecg-list-item.component.html',
  styleUrls: ['./ecg-list-item.component.css']
})
export class EcgListItemComponent implements OnInit {
    @Input() ecg: any = {

    };
    metadata: any;
    patient: any;
    pathology: any;

  constructor() { }

  ngOnInit(): void {
  }

}
