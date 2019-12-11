<<<<<<< HEAD
import { UserStory } from './model/UserStory';
=======
import { UserstoryService } from './userstory.service';
>>>>>>> ee312916ed0b74ef6bde4a6b31fa2045ee57b15e
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
   SPRINTS.push(sprint);
 }


}
