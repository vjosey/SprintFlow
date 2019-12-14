import { SprintService } from './../sprint.service';
import { Sprint } from './../model/Sprint';
import { UserStory } from './../model/UserStory';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-sprint-planning',
  templateUrl: './sprint-planning.component.html',
  styleUrls: ['./sprint-planning.component.css']
})

export class SprintPlanningComponent implements OnInit {

// Sprint
sprint: Sprint = new Sprint();

// User Story
stories: UserStory[] = []; // User stories created for this sprint

selectedStory: UserStory;
selectedStoryIndex: number;
editSelectedStory = false;
userStory: UserStory = new UserStory();
showUserStoryModalAlert: boolean;

// Sprint Planning Attributes
summarySize = 110;
titleMaxSize = 50;
storyPointMax = 144;
priorityInfo = 'Select a priority for User Story.';
priority = 'Medium';

constructor(private sprintService: SprintService, private router: Router, private route: ActivatedRoute,) {
}

  ngOnInit() {

    // Check if uri has an /id from exsisting sprints, for blank for new sprints and get exsisting sprint data
    if (this.route.snapshot.paramMap.get('id') !== null) {
        this.getSprint();
    }
  }

  getSprint(): void {
    // Grabs a sprint based on the sprint id in order to display it's information to the user
    const id = +this.route.snapshot.paramMap.get('id');
    this.sprintService.getSprintById(id).subscribe(sprint => this.sprint = sprint);
    this.setSprintFromParamMapId();
  }


  setSprintFromParamMapId() {
    this.stories = this.sprint.userStories;
  }


selectedUserStory(story: UserStory) {
 this.selectedStory = story;
 // save the in
 $('#StoryModal').modal('show');
}

RemoveSelectedUserStory() {
 console.log(this.stories.indexOf(this.selectedStory));
 this.stories.splice(this.stories.indexOf(this.selectedStory), 1);
 $('#StoryModal').modal('hide');
 }

OpenModal() {
  // alert( 'hello' );
  $('#newStoryModal').modal('show');
}


// Push New User Story to Array
addUserStory( ) {
if (this.userStory.title && this.userStory.description) {
  // Set User Story Summary
  this.userStory.summary = this.userStory.description.substr(0, this.summarySize);
  // Set the length of title
  this.userStory.title = this.userStory.title.substr(0, this.titleMaxSize);

  if (this.priority == null) {
    this.userStory.priority = 'Medium';
  } else {
    this.userStory.priority = this.priority;
  }

  // Set story point to a Fibonacci number
  this.userStory.storyPoint = this.findFibonacci(this.userStory.storyPoint);


  // Push User story into the Userstories list, close modal and set User story to new user
  this.stories.push(this.userStory);
  $('#newStoryModal').modal('hide');
  this.userStory = new UserStory();
}
this.setStoryModalAlert(false);
}

updateUserStory(close: boolean) {
  if (this.selectedStory) {
    this.setSeletedStoryPriority(this.priority);
    this.selectedStory.summary = this.selectedStory.description.substr(0, this.summarySize);
  }

  console.log(this.stories);
// Close modal box once done
  if (close) {
    $('#StoryModal').modal('hide');
  }

  this.setEditStateOnSelectedStory(false);

}

setStoryModalAlert(t: boolean) {
  this.showUserStoryModalAlert = t;
}

addSprint(status: string) {
    // Assign User stories to Sprint
    this.sprint.userStories = this.stories;
    this.sprint.status = status;
    this.sprint.sprintSummary = this.sprint.description;

    // Add sprint to database
    this.sprintService.addSprint(this.sprint);
}


OnComplete(save: boolean) {

if (this.stories.length && this.sprint.description && this.sprint.name && this.sprint.startDate && this) {
 if (!this.sprint.id) {
   // if save is true the sprint will be added in  "Planning" status
   // While in planning status the user will be able to make changes to sprint setup and the sprint time counter will not start
    if (save) {
      this.addSprint('Planning');
    } else {
      this.addSprint('Working');
    }
  } else {
    // TODO: update sprint
    console.log('Sprint Id, update');
  }

  this.router.navigate([`/sprint-details/${this.sprint.id}`]);
  this.sprint = new Sprint();

} else {
 // TODO: User alert
 $('.alert').alert('show');
 console.warn('Sprint Id, update');
}

}

SetPriorityInfo(priorityType: string)
{
  switch (priorityType) {
    case 'Lowest':
       this.priorityInfo = 'Trivial problem with little or no impact to progress.';
       break;
    case 'Low':
        this.priorityInfo = 'Easy problem easily worked around';
        break;
    case 'Medium':
        this.priorityInfo = 'Has the potential to affect progress.';
        break;
    case 'High':
        this.priorityInfo = 'Serious problem that could block progress.';
        break;
    case 'Highest':
        this.priorityInfo = 'This problem will block progress.';
        break;
    default:
        this.priorityInfo = 'Select a priority for User Story';
        break;
  }
  this.priority = priorityType;
}


// Find a better way to get the fibonacci number
findFibonacci(num: number): number {

if (num > this.storyPointMax) {
 num = this.storyPointMax;
}

let t1 = 1;
let t2 = 0;
let nextTerm = t1 + t2;
let fibonacciSeries: number[] = [];

while (nextTerm <= num) {
  t1 = t2;
  t2 = nextTerm;
  nextTerm = t1 + t2;
  fibonacciSeries.push(nextTerm);
// If number is a fibonacci just return it
  if (nextTerm == num) {
    return num;
  }

 }
 // get the last number in the series
return fibonacciSeries[fibonacciSeries.length - 1 ];
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


setEditStateOnSelectedStory(bool: boolean) {
this.editSelectedStory = bool;
}

SetPriorityColor(priorityType: string): string
{

  console.log(priorityType);
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

setSeletedStoryPriority(str: string) {
  this.selectedStory.priority = str;
}


}

