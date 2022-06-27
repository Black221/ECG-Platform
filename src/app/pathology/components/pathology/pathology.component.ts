import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pathology',
  templateUrl: './pathology.component.html',
  styleUrls: ['./pathology.component.css']
})
export class PathologyComponent implements OnInit {
    pathologies: any[] = [
        {
            name: "a",
            description: "",
            metadata_id: "",
            _id: ""
        }, {
            name: "a",
            description: "",
            metadata_id: "",
            _id: ""
        }, {
            name: "a",
            description: "",
            metadata_id: "",
            _id: ""
        }, {
            name: "a",
            description: "",
            metadata_id: "",
            _id: ""
        }, {
            name: "a",
            description: "",
            metadata_id: "",
            _id: ""
        }, {
            name: "a",
            description: "",
            metadata_id: "",
            _id: ""
        }
    ];
    add = false

    constructor() { }

    ngOnInit(): void {
    }

    addPathology() {
        this.add = true;
    }
}
