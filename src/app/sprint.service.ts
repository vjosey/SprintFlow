import { UserstoryService } from './userstory.service';
import { Sprint } from './model/sprint';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SPRINTS } from './mock-sprints';

@Injectable({
  providedIn: 'root'
})
export class SprintService {

  constructor(private userstoryService: UserstoryService) { }


 getSprints(): Observable<Sprint[]> {
   // TODO: replace for database
   return of(SPRINTS);
 }

 addSprint(sprint: Sprint): void {
   SPRINTS.push(sprint);
 }


}
