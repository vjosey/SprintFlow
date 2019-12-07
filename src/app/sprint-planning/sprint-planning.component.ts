import { UserstoryService } from './../userstory.service';
import { UserStory } from './../model/UserStory';
import { Component, OnInit, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';
declare var $: any;

@Component({
  selector: 'app-sprint-planning',
  templateUrl: './sprint-planning.component.html',
  styleUrls: ['./sprint-planning.component.css']
})
export class SprintPlanningComponent implements OnInit {


stories: UserStory[] = USERSTORE;

selectedStory: UserStory;

userStory: UserStory = new UserStory();

constructor(private userstoryService: UserstoryService) {
}

  ngOnInit() {
  }

selectedUserStory(story: UserStory) {
 this.selectedStory = story;
 $('#StoryModal').modal('show');
}

OpenModal() {
  // alert( 'hello' );
  $('#newStoryModal').modal('show');

}

addUserStory( title: string, detail: string) {

  // add to array
  this.userStory = new UserStory();
  this.userStory.id = 16; // can to auto id
  this.userStory.title = title;
  this.userStory.description = detail;
  this.stories.push(this.userStory);
  $('#newStoryModal').modal('hide');
  this.userStory = null;
}

OnComplete() {
}


/* getUserStory() {
 this.userstoryService.getUserStory();
} */

}


export const USERSTORE: UserStory[] = [
  { id: 11, title: 'User should be able' , description: 'dbkfjnkejnfdskn',
  priority: 1, comments: [],
  storyPoint: 25 },
  { id: 11, title: 'User should be able' , description: 'dbkfjnkejnfdskn',
  priority: 1, comments: [],
  storyPoint: 25 },
  { id: 11, title: 'User should be able' , description: 'dbkfjnkejnfdskn',
  priority: 1, comments: [],
  storyPoint: 25 },
  { id: 11, title: 'User should be able' , description: 'dbkfjnkejnfdskn',
  priority: 1, comments: [],
  storyPoint: 25 },
  { id: 11, title: 'User should be able' , description: 'dbkfjnkejnfdskn',
  priority: 1, comments: [],
  storyPoint: 25 },
  { id: 11, title: 'User should be able' , description: 'dbkfjnkejnfdskn',
  priority: 1, comments: [],
  storyPoint: 25 }
];
