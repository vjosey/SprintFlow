import { Sprint } from './model/sprint';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SprintService {

  constructor() { }

  // TODO: replace with mock data or mock database
  SPRINT: Sprint[];

 getSprints(): Observable<Sprint[]> {
   // TODO: replace for database
   return of(this.SPRINT);
 }


}
