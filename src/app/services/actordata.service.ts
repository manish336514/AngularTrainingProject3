import { Injectable } from "@angular/core";
import { Actor } from "../models/actor.model";
@Injectable({
  providedIn: "root"
})
export class ActordataService {
  actorList: Actor[];
  constructor() {
    this.actorList = [
      {
        name: "Amitabhmm",
        Rating: 70
      },
      {
        name: "Rajnikant",
        Rating: 90
      },
      {
        name: "Hrithik",
        Rating: 60
      },
      {
        name: "Dhoni",
        Rating: 95
      }
    ];
  }

  getActorList() {
    return this.actorList;
  }

  addActor(actor: Actor) {
    this.actorList.push(actor);
  }

  deleteActor(index: number) {
    this.actorList.splice(index, 1);
  }
  updateactor(index: number, newActordata: Actor) {
    this.actorList.splice(index, 1, newActordata);
  }
}
