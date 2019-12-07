import { SPRINTS } from './../mock-sprints';
import { Component, OnInit } from '@angular/core';
import { getLocaleDateFormat } from '@angular/common';
import { Sprint } from '../sprint';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  sprints = SPRINTS;

    constructor() { }

  ngOnInit() {

  }

}
