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

constructor() {
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
  this.userStory.detail = detail;
  this.stories.push(this.userStory);
  $('#newStoryModal').modal('hide');
  this.userStory = null;
}

OnComplete() {
}

}

export class UserStory {
  id: number;
  title: string;
  detail: string;

  constructor() {}

}

export const USERSTORE: UserStory[] = [
  { id: 11, title: 'Dr Nice' , detail: 'dbkfjnkejnfdskn'},
  { id: 12, title: 'Narco' , detail: 'dbkfjnkejnfdskn'},
  { id: 13, title: 'Bombasto' , detail: 'dbkfjnkejnfdskn'},
  { id: 14, title: 'Celeritas', detail: 'dbkfjnkejnfdskn' },
];