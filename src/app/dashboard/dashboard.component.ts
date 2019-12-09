import { Observable } from 'rxjs';
import { SprintService } from './../sprint.service';
import { Sprint } from './../model/Sprint';
import { Component, OnInit } from '@angular/core';
import { getLocaleDateFormat } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

sprints: Sprint[];
activeSprints: Sprint[] = [];
completedSprints: Sprint[] = [];

    constructor(private sprintService: SprintService, private router: Router, private route: ActivatedRoute ) { }

  ngOnInit() {
    this.getSprints();
    this.sprintSorter(this.sprints);
  }

  goTo(route: string, id: number) {
    if (id != null) {
      this.router.navigate([route, id], {relativeTo: this.route});
    } else {
      this.router.navigate([route]);
    }
  }

  sprintSorter(sprints: Sprint[]): void {
    for (let index = 0; index < sprints.length; index++) {
      if (sprints[index].status.toLowerCase() === 'completed' && this.completedSprints.length < 4) {
        this.completedSprints.push(sprints[index]);
      } else if (sprints[index].status.toLowerCase() === 'active' && this.activeSprints.length < 3) {
        this.activeSprints.push(sprints[index]);
      } else {
        console.log('Not applicable status');
      }
    }
  }

  getSprints(): void {
    this.sprintService.getSprints().subscribe( sprints => this.sprints = sprints);
  }
}
