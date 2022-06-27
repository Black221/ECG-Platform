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
            description: "Lorem ipsum dolor sit amet," +
                " consectetur adipisicing elit. Commodi" +
                " consequuntur dolorem eos eveniet" +
                " excepturi illo nam nostrum sequi." +
                " Aperiam architecto asperiores eveniet " +
                "illo incidunt laborum, nobis possimus " +
                "quisquam repudiandae veritatis.",
            metadata_id: "",
            _id: ""
        }, {
            name: "a",
            description: "Lorem ipsum dolor sit amet," +
                " consectetur adipisicing elit. Commodi" +
                " consequuntur dolorem eos eveniet" +
                " excepturi illo nam nostrum sequi." +
                " Aperiam architecto asperiores eveniet " +
                "illo incidunt laborum, nobis possimus " +
                "quisquam repudiandae veritatis.",
            metadata_id: "",
            _id: ""
        }, {
            name: "a",
            description: "Lorem ipsum dolor sit amet," +
                " consectetur adipisicing elit. Commodi" +
                " consequuntur dolorem eos eveniet" +
                " excepturi illo nam nostrum sequi." +
                " Aperiam architecto asperiores eveniet " +
                "illo incidunt laborum, nobis possimus " +
                "quisquam repudiandae veritatis.",
            metadata_id: "",
            _id: ""
        }
    ];
    add = false

    constructor() { }

    ngOnInit(): void {
    }

    addPathology(add: boolean) {
        this.add = add;
    }
}
