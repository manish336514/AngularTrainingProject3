import { Component, OnInit } from "@angular/core";
import { Actor } from "../../models/actor.model";

import { ActordataService } from "../../services/actordata.service";

@Component({
  selector: "app-actorlist",
  templateUrl: "./actorlist.component.html",
  styleUrls: ["./actorlist.component.css"]
})
export class ActorlistComponent implements OnInit {
  actorList: Actor[];
  selectedIndex: number;
  tempActor: Actor;
  tempActorList: Actor[];

  //actorService it will become data member *private  it becomes member of class itself
  // if private is removed it becom a local variable
  constructor(private actorService: ActordataService) {}

  ngOnInit() {
    this.actorList = this.actorService.getActorList();

    this.selectedIndex = -1;
    this.tempActor = null;
    this.tempActorList = this.actorList.slice();
  }

  deleteActor(index: number) {
    this.actorList.splice(index, 1);
  }
  editActor(index: number) {
    this.selectedIndex = index;
    // this.tempActor = this.actorList[index];
    //Do not use this
    //shallow copy Problem

    //Solution - DEEP COPY

    //Approach 1(Works But not Recommended)
    // this.tempActor = {
    //   name: this.actorList[index].name,
    //   Rating: this.actorList[index].Rating
    // };

    // Approch 2 (May not Work worker, not Recommended)
    // this.tempActor = Object.assign({}, this.actorList[index]);
    //Solve problem for one level on , embeded object will cause problem
    // Approach 3(Best approch ,Always recommneded)

    this.tempActor = JSON.parse(JSON.stringify(this.actorList[index]));
  }
  saveActor(index: number) {
    this.selectedIndex = -1;
  }
  cancelActor(index: number) {
    this.actorList[index] = this.tempActor;
    this.selectedIndex = -1;
  }

  handleKey(index: number, event: KeyboardEvent) {
    if (event.key === "Escape") {
      this.cancelActor(index);
    }
  }

  sortList(direction: string, property: string) {
    this.actorList.sort((firstObj, secondObj) => {
      if (direction === "assending") {
        //Asseccnding order

        if (typeof firstObj[property] === "string") {
          //String Comparision
          if (firstObj[property] < secondObj[property]) return -1;
          if (firstObj[property] > secondObj[property]) return 1;
          return 0;
        } else {
          //Numeric Comparision

          return firstObj[property] - secondObj[property];
        }
      } else {
        //Descending order

        if (typeof firstObj[property] === "string") {
          //String Comparision
          if (firstObj[property] < secondObj[property]) return 1;
          if (firstObj[property] > secondObj[property]) return -1;
          return 0;
        } else {
          //Numeric Comparision

          return secondObj[property] - firstObj[property];
        }
      }
    });
  }

  resetList() {
    this.actorList = this.tempActorList.slice();
  }
}
