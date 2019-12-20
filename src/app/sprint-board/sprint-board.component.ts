import { Comment } from './../model/Comment';
import { Sprint } from './../model/Sprint';
import { Router, ActivatedRoute } from '@angular/router';
import { UserStory } from './../model/UserStory';
import { SprintService } from './../sprint.service';
import { Component, OnInit, AfterContentChecked } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
declare var $: any;

@Component({
  selector: 'app-sprint-board',
  templateUrl: './sprint-board.component.html',
  styleUrls: ['./sprint-board.component.css']
})

export class SprintBoardComponent implements OnInit, AfterContentChecked {

chosenSprint: Sprint = new Sprint();

hasSaved: boolean;

 toDo: UserStory[] = [];
 doing: UserStory[] = [];
 toReview: UserStory[] = [];
 depoly: UserStory[] = [];

 selectedStory: UserStory;
 selectedStoryIndex: number;
 editSelectedStory = false;
 userStory: UserStory = new UserStory();
 showUserStoryModalAlert: boolean;
 enableAddComment: boolean;

 // Sprint Planning Attributes
 summarySize = 110;
 titleMaxSize = 50;
 storyPointMax = 144;
 priorityInfo = 'Select a priority for User Story.';
 priority = 'Medium';

newComment = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private sprintService: SprintService
  ) { }

  ngOnInit(): void {
    /*
    * Based on the sprint that was selected on the  page, it will call the service class to
    * grab that specific sprint's object
    */
    this.getSprint();
    this.hasSaved = true;
  }

  ngAfterContentChecked()
  {
      if (this.newComment !== '') {
          this.enableAddComment = true;
      }

  }


  onCompleteSprint() {

    $('#reviewModal').modal('show');
  }

  endSprint(a: string) {
    if (a === 'no') {
      $('#reviewModal').modal('hide');
    } else if ( a === 'yes') {
      $('#reviewModal').modal('hide');
      this.router.navigate([`/sprint-review/${this.chosenSprint.id}`]);
    }

  }
  goBack() {
    this.router.navigate([`/sprint-details/${this.chosenSprint.id}`]);
  }

  onSaveSprint() {
    this.sprintService.addSprint(this.chosenSprint).subscribe(sprint => {
      this.chosenSprint.status = 'REVIEW';
      this.chosenSprint = sprint;
      this.hasSaved = true;
    });
  }


  getSprint(): void {
    // Grabs a sprint based on the sprint id in order to display it's information to the user
    const id = +this.route.snapshot.paramMap.get('id');
    this.sprintService.getSprintById(id).subscribe(sprint => {
      this.chosenSprint = sprint;
      this.sortUserStores(this.chosenSprint.userStories);

    });
  }


sortUserStores(stories: UserStory[]) {
stories.forEach(story => {
  this.addToGroup(story);
});
}

addToGroup(story: UserStory) {
story.status.toUpperCase();

switch (story.status) {
case 'TODO':
this.toDo.push(story);
break;
case 'DOING':
this.doing.push(story);
break;
case 'TOREVIEW':
this.toReview.push(story);
break;
case 'DEPLOY':
this.toDo.push(story);
break;
  }
}

SetPriorityColor(priorityType: string): string
{

  // console.log(priorityType);
  switch (priorityType) {
    case 'Lowest':
     return 'badge badge-primary';
    case 'Low':
      return 'badge badge-success';
    case 'Medium':
      return 'badge badge-info';
    case 'High':
      return 'badge badge-warning';
    case 'Highest':
      return 'badge badge-danger';
    default:
      return 'badge badge-primary';
  }

}

checkStoryStatus() {



  if (this.toDo.length > 0) {
    this.toDo.forEach(story => {
         if (story.status !== 'TODO') {
          story.status = 'TODO';
          }
    });
  }

  if (this.doing.length > 0) {
    this.doing.forEach(story => {
         if (story.status !== 'DOING') {
          story.status = 'DOING';
          }
    });
  }

  if (this.toReview.length > 0) {
    this.toReview.forEach(story => {
         if (story.status !== 'TOREVIEW') {
          story.status = 'TOREVIEW';
          }
    });
  }
  if (this.depoly.length > 0) {
    this.depoly.forEach(story => {
         if (story.status !== 'DEPOLY') {
          story.status = 'DEPOLY';
          }
    });
  }
  this.hasSaved = false;

}


// check if sprint is ready for the next step in the scrum
checkNextSprintStep(): boolean {
 let check: boolean;

 if ( this.hasSaved === true )
 {
    check = true;
 } else {
    check = false;
 }

 return check;
}

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
      this.checkStoryStatus();
    }
  }


  selectedUserStory(story: UserStory) {
    this.selectedStory = story;
    // save the in
    $('#StoryModal').modal('show');
   }


  addComment() {
 if (this.newComment !== '') {
  let comment: Comment =  new Comment();
  comment.comment = this.newComment;
  this.selectedStory.comments.push(comment);
  this.newComment = '';
  this.enableAddComment = false;
  }

  }

   getMaxCharCount(max: number, str: string): string {

    if (str !== undefined){

    if (str.length > max) {
      return 'Number of chars: Max ' + max + '/' + str.length + ' Over Max!';
    } else {

      return 'Number of chars: Max ' + max + '/' + str.length;
    }

    } else {
     return 'Number of chars: Max ' + max + '/0';
    }

    }


}
