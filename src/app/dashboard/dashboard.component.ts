import { SprintService } from './../sprint.service';
import { Sprint } from './../model/Sprint';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

// sprints: Sprint[] = [];
activeSprints: Sprint[] = [];
completedSprints: Sprint[] = [];

    constructor(private sprintService: SprintService, private router: Router, private route: ActivatedRoute ) { }

  ngOnInit() {
    this.getSprints();
  }


  /*
  * When a user clicks on a sprint on the dashboard page it will navigate them to
  * the sprint overiew page with details pertaining to that specific sprint.
  */
  goTo(route: string, id: number): void {
    if (id != null) {
      this.router.navigate([route, id], {relativeTo: this.route});
    } else {
      this.router.navigate([route]);
    }
  }

  /*
  * Sorts the sprints into two separate arrays. One array that for completed sprints and another
  * that is for all other arrays in the active status.
  */
  sprintSorter(sprints: Sprint[]): void {
    // tslint:disable-next-line: prefer-for-
    if (sprints.length !== 0) {
      for(let index = 0; index < sprints.length; index++) {
        if (sprints[index].status.toLowerCase() === 'completed' && this.completedSprints.length < 4) {
          this.completedSprints.push(sprints[index]);
        } else if (sprints[index].status.toLowerCase() !== 'completed' && this.activeSprints.length < 3) {
          this.activeSprints.push(sprints[index]);
        } else {
          // display no data message
          console.log('Not applicable status');
        }
      }
      console.log('workin');
  } else {

    console.log('not workin');
  }
  }

  /*
  * Calls on the spring-service class to get hold of the array of sprints
  * and locally stores it in it's own variable.
  */
  getSprints(): void {
    this.sprintService.getSprints().subscribe( sprints => {
      this.sprintSorter(sprints);
     });
  }

  showAllSprints(route: string): void {
    this.router.navigate(['sprintlist-board']);
  }
}
