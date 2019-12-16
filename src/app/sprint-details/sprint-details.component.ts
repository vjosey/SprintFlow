import { UserStory } from './../model/UserStory';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { SprintService } from './../sprint.service';
import { Sprint } from './../model/Sprint';
import { Location } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sprint-details',
  templateUrl: './sprint-details.component.html',
  styleUrls: ['./sprint-details.component.css']
})
export class SprintDetailsComponent implements OnInit {
  chosenSprint: Sprint; // The sprint that was selected on the dashboard page.
  completedUserStories: UserStory[] = [];
  activeUserStores: UserStory[] = [];
  isActive: boolean;

  constructor(
    private route: ActivatedRoute,
    private sprintService: SprintService,
    private location: Location, private router: Router
    ) {}

  ngOnInit(): void {
    /*
    * Based on the sprint that was selected on the dashboard page, it will call the service class to
    * grab that specific sprint's object
    */
    this.getSprint();
    this.sortUserStores(this.chosenSprint);
    this.isActiveFunc(this.chosenSprint);

  }

  getSprint(): void {
    // Grabs a sprint based on the sprint id in order to display it's information to the user
    const id = +this.route.snapshot.paramMap.get('id');
    this.sprintService.getSprintById(id).subscribe(sprint => this.chosenSprint = sprint);
  }

  /*
  * Used in the userstory display card to color the priority
  */
  SetPriorityColor(priorityType: string): string {
    console.log(priorityType);
    switch (priorityType) {
      case 'Lowest':
      return 'badge badge-primary';
      case 'Low':
        return 'badge badge-success';
      case 'Medium':
        return 'badge badge-info';
      case 'High':
        return 'badge badge-warning';
      case 'Highest':
        return 'badge badge-danger';
      default:
        return 'badge badge-primary';
    }
  }

  /*
  * This will sort out the userstories into two separate arrays one for completed
  * and another for active userstories that have not yet been deployed.
  */
  sortUserStores(sprint: Sprint) {
    // tslint:disable-next-line: prefer-for-of
    for (let index = 0; index < sprint.userStories.length ; index++) {
      if (sprint.userStories[index].status.toLowerCase() !== 'deploy') {
          this.activeUserStores.push(sprint.userStories[index]);
      } else {
        this.completedUserStories.push(sprint.userStories[index]);
      }
    }
  }

  /*
  * When user clicks on button on html page this takes you to another page
  * based on the current sprint's active status.
  */
  nextActivity(): void {
    this.router.navigate([`/sprint-board/${this.chosenSprint.id}`]);
  /*
    switch (sprintStatus.toLowerCase()) {
      case 'planning':
        break;
      case 'working':
        break;
      case 'review':
        break;
      case 'retro':
        break;
      default:
        // Error message
        break;
    }
    */
  }

  isActiveFunc(sprint: Sprint) {
    if (sprint.status.toLowerCase() === 'active') {
      this.isActive = true;
    } else {
      this.isActive = false;
    }
  }
}
