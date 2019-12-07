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

    constructor(private sprintService: SprintService ) { }

  ngOnInit() {
    this.getSprints();
  }

  getSprints(): void {
    this.sprintService.getSprints().subscribe( sprints => this.sprints = sprints);
  }

}
