import { SprintService } from "./../sprint.service";
import { Component, OnInit } from "@angular/core";
import { Sprint } from "../model/sprint";

@Component({
  selector: "app-sprintlist-board",
  templateUrl: "./sprintlist-board.component.html",
  styleUrls: ["./sprintlist-board.component.css"]
})
export class SprintlistBoardComponent implements OnInit {
  // sprints: Sprint[];
  activeSprints: Sprint[] = [];
  completedSprints: Sprint[] = [];

  constructor(private sprintService: SprintService) {}

  ngOnInit() {
    this.getSprints();
  }

  /*
   * Sorts the sprints into two separate arrays. One array that for completed sprints and another
   * that is for all other arrays in the active status.
   */
  sprintSorter(sprints: Sprint[]): void {
    // tslint:disable-next-line: prefer-for-of
    if (sprints.length !== 0) {
    for (let index = 0; index < sprints.length; index++) {
      if (sprints[index].status.toLowerCase() === "completed") {
        this.completedSprints.push(sprints[index]);
      } else if (sprints[index].status.toLowerCase() !== "completed") {
        this.activeSprints.push(sprints[index]);
      } else {
        // display no data message
        console.log("Not applicable status");
      }
    }
  }
  }

  /*
   * Calls on the spring-service class to get hold of the array of sprints
   * and locally stores it in it's own variable.
   */
  getSprints(): void {
    this.sprintService
      .getSprints()
      .subscribe(sprints => {
        this.sprintSorter(sprints);
      });
  }
}
