import { Sprint } from './../model/Sprint';
import { ActivatedRoute } from '@angular/router';
import { UserStory } from './../model/UserStory';
import { SprintService } from './../sprint.service';
import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-sprint-board',
  templateUrl: './sprint-board.component.html',
  styleUrls: ['./sprint-board.component.css']
})
export class SprintBoardComponent implements OnInit {

chosenSprint: Sprint = new Sprint();

 toDo: UserStory[] = [];
 doing: UserStory[] = [];
 toReview: UserStory[] = [];
 depoly: UserStory[] = [];

  constructor(
    private route: ActivatedRoute,
    private sprintService: SprintService
  ) { }

  ngOnInit(): void {
    /*
    * Based on the sprint that was selected on the  page, it will call the service class to
    * grab that specific sprint's object
    */
    this.getSprint();
    this.sortUserStores(this.chosenSprint.userStories);
  }

  getSprint(): void {
    // Grabs a sprint based on the sprint id in order to display it's information to the user
    const id = +this.route.snapshot.paramMap.get('id');
    this.sprintService.getSprintById(id).subscribe(sprint => this.chosenSprint = sprint);
  }

sortUserStores(stories: UserStory[]) {
stories.forEach(story => {
  this.addToGroup(story);
});
}

addToGroup(story: UserStory) {

if (story.status === 'completed') {
  story.status = 'DEPLOY';
}
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
                  this.depoly.push(story);
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

}
