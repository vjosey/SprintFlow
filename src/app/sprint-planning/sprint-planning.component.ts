import { Component, OnInit, Input } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-sprint-planning',
  templateUrl: './sprint-planning.component.html',
  styleUrls: ['./sprint-planning.component.css']
})
export class SprintPlanningComponent implements OnInit {


stories: UserStory[] = USERSTORE;

selectedStory: UserStory;

userStory: UserStory = {
  id: 1,
  title: 'New',
  detail: 'new stuff'
};

constructor() {

}

  ngOnInit() {
  }

selectedUserStory(story: UserStory) {
 this.selectedStory = story;
 $('StoryModal').modal('show');
}

spOn() {
  // alert( 'hello' );
  $('#newStoryModal').modal('show');

}

saveNewUserStory() {

  // add to array
  this.userStory.id = 16; // can to auto id
  this.stories.push(this.userStory);
  $('#newStoryModal').modal('hide');
  this.userStory = null;
}



}

export class UserStory {
  id: number;
  title: string;
  detail: string;

  constructor(){}

}

export const USERSTORE: UserStory[] = [
  { id: 11, title: 'Dr Nice' , detail: 'dbkfjnkejnfdskn'},
  { id: 12, title: 'Narco' , detail: 'dbkfjnkejnfdskn'},
  { id: 13, title: 'Bombasto' , detail: 'dbkfjnkejnfdskn'},
  { id: 14, title: 'Celeritas', detail: 'dbkfjnkejnfdskn' },
];
