import { HttpClient } from '@angular/common/http';
import { UserStory } from './model/UserStory';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserstoryService {

  constructor() { }

 // TODO: replace with Mock database
 USERSTORE: UserStory[];

  getUserStory(): Observable<UserStory[]> {
    return of(this.USERSTORE);
    // TODO: replace with Mock database
  }

addUserStory(story: UserStory): Observable<UserStory> {
 return of(story);
 // TODO: replace
}

}
