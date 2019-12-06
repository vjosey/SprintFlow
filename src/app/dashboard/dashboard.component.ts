import { Component, OnInit } from '@angular/core';
import { getLocaleDateFormat } from '@angular/common';
import { Sprint } from '../sprint';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  sprint: Sprint = {  id: 1,
    name: 'YYYY-QX-X/6', description: 'Collecting feedback from stalkholders',
    reviewDetails: '', retroDetails: '', startDate: new Date(), endDate: new Date(),
    userStories: [], sprintSummary: 'We are collection feedback from stalkholders'};

    constructor() { }

  ngOnInit() {

  }

}
