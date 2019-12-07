import { Observable } from 'rxjs';
import { SprintService } from './../sprint.service';
import { Sprint } from './../model/Sprint';
import { Component, OnInit } from '@angular/core';
import { getLocaleDateFormat } from '@angular/common';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

sprints: Sprint[];

  sprint: Sprint = {  id: 1,
    name: 'YYYY-QX-X/6', description: 'Collecting feedback from stalkholders',
    reviewDetails: '', retroDetails: '', startDate: new Date(), endDate: new Date(),
    userStories: [], sprintSummary: 'We are collection feedback from stalkholders'};

  // sprints = SPRINTS;

    constructor(private sprintService: SprintService ) { }

  ngOnInit() {
    this.getSprints();
  }

  getSprints(): void {

  }

}
