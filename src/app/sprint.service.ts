import { Sprint } from './model/sprint';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SprintService {

  constructor() { }

  // TODO: replace with mock data or mock database
  SPRINT: Sprint[];

 getSprint(): Sprint[] {
   return this.SPRINT;
 }

}
