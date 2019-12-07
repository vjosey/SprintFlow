import { HttpClient } from '@angular/common/http';
import { UserStory } from './model/UserStory';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { USERSTORIES } from './mock-userstory';

@Injectable({
  providedIn: 'root'
})
export class UserstoryService {

  constructor() { }

  getUserStory(): Observable<UserStory[]> {
    return of(USERSTORIES);
    // TODO: replace with Mock database
  }

addUserStory(story: UserStory): Observable<UserStory> {
 return of(story);
 // TODO: replace
}

}
