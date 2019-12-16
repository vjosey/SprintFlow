import { UserStory } from './model/UserStory';

import { Sprint } from './model/sprint';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SPRINTS } from './mock-sprints';
import { USERSTORIES } from './mock-userstory';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class SprintService {

  constructor(private messageService: MessageService) { }

  getSprints(): Observable<Sprint[]> {
    // TODO: replace for database
    return of(SPRINTS);
  }

  getSprintById(sprintId: number): Observable<Sprint> {
    this.messageService.add(`SprintService: Fetched with id: ${sprintId}`);
    return of(SPRINTS.find(sprint => sprint.id === sprintId));
  }

 addSprint(sprint: Sprint): void {
  // create a new id for new sprint.
  // This should be done from the database in the future
  sprint.id = SPRINTS.length + 1;
  console.log(sprint.id);
  SPRINTS.push(sprint);
 }

 updateSprint(sprint: Sprint): void  {
 // TODO: Update sprint in database

 }

}
