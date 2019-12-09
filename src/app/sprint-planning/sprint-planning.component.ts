import { SprintService } from './../sprint.service';
import { Sprint } from './../model/Sprint';
import { UserStory } from './../model/UserStory';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
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
stories: UserStory[] = [];
selectedStory: UserStory;
userStory: UserStory = new UserStory();
showUserStoryModalAlert: boolean;

// Sprint Planning Attributes
summarySize = 130;
titleMaxSize = 50;
storyPointMax = 144;
priorityInfo = 'Select a priority for User Story.';
priority = 'Medium';

constructor(private sprintService: SprintService, private router: Router) {
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

// Push New User Story to Array
addUserStory( ) {
if (this.userStory.title && this.userStory.description) {
  // Set User Story Summary
  this.userStory.summary = this.userStory.description.substr(0, this.summarySize);
  // Set the length of title
  this.userStory.title = this.userStory.title.substr(0, this.titleMaxSize);

  if (this.priority == null) {
    this.userStory.status = 'Medium';
  } else {
    this.userStory.status = this.priority;
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

setStoryModalAlert(t: boolean) {
  this.showUserStoryModalAlert = t;
}

addSprint() {
  // Assign User stories to Sprint
  if (this.stories.length) {
    this.sprint.userStories = this.stories;
  }

  this.sprint.sprintSummary = this.sprint.description;
  this.sprintService.addSprint(this.sprint);
}

OnComplete() {
 if (this.sprint.name) {
  this.addSprint();
  this.sprint = new Sprint();
  this.router.navigate(['/sprint-board']);
} else {
  console.log('Not Sprint Name');
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

isPerfectSquare(numA: number): boolean {
  const sqrt = Math.sqrt(numA);
  console.log('Perfect Square' + sqrt);
  return (sqrt * sqrt === numA);
}


checkFibonacci(num: number): boolean {
  console.log('Fibonacci number' + (5 * (num * num) + 4) + '  ' +(5 * (num * num) - 4));
  return this.isPerfectSquare(5 * Math.pow(num,2) + 4) || this.isPerfectSquare(5 * Math.pow(num,2) - 4);
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
}

