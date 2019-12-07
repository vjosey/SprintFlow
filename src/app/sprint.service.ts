import { Sprint } from './model/sprint';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SPRINTS } from './mock-sprints';

@Injectable({
  providedIn: 'root'
})
export class SprintService {

  constructor() { }


 getSprints(): Observable<Sprint[]> {
   // TODO: replace for database
   return of(SPRINTS);
 }


}
