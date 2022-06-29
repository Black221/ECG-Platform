import { Component, OnInit } from '@angular/core';
import {PathologyService} from "../../services/pathology.service";

@Component({
  selector: 'app-pathology',
  templateUrl: './pathology.component.html',
  styleUrls: ['./pathology.component.css']
})
export class PathologyComponent implements OnInit {
    pathologies: any[] = [
        // {
        //     name: "a",
        //     description: "Lorem ipsum dolor sit amet," +
        //         " consectetur adipisicing elit. Commodi" +
        //         " consequuntur dolorem eos eveniet" +
        //         " excepturi illo nam nostrum sequi." +
        //         " Aperiam architecto asperiores eveniet " +
        //         "illo incidunt laborum, nobis possimus " +
        //         "quisquam repudiandae veritatis.",
        //     metadata_id: "",
        //     _id: ""
        // }, {
        //     name: "b",
        //     description: "Lorem ipsum dolor sit amet," +
        //         " consectetur adipisicing elit. Commodi" +
        //         " consequuntur dolorem eos eveniet" +
        //         " excepturi illo nam nostrum sequi." +
        //         " Aperiam architecto asperiores eveniet " +
        //         "illo incidunt laborum, nobis possimus " +
        //         "quisquam repudiandae veritatis.",
        //     metadata_id: "",
        //     _id: ""
        // }, {
        //     name: "c",
        //     description: "Lorem ipsum dolor sit amet," +
        //         " consectetur adipisicing elit. Commodi" +
        //         " consequuntur dolorem eos eveniet" +
        //         " excepturi illo nam nostrum sequi." +
        //         " Aperiam architecto asperiores eveniet " +
        //         "illo incidunt laborum, nobis possimus " +
        //         "quisquam repudiandae veritatis.",
        //     metadata_id: "",
        //     _id: ""
        // }
    ];
    add = false
    modify = false;
    selected: any;

    constructor (
        private pathologyService: PathologyService
    ) { }

    ngOnInit(): void {
        if (!this.pathologies.length)
            this.add = true;
    }

    addPathology(add: boolean) {
        this.add = add;
    }

    updatePathology () {

    }

    onSubmit () {

    }

    onUpdate () {

    }

    getPathology () {
    }

    getSelect($event: any) {
        console.log($event)
        this.selected = $event;
        if ($event)
            this.modify = true;
    }
}
