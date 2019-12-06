import { UserStory } from './model/UserStory';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserstoryService {

  constructor() { }


  getUserStory(): UserStory[] {
    return [];
    // TODO: replace with Mockr database
  }
}
