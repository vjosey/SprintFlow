import { SprintService } from './../sprint.service';
import { Sprint } from './../model/Sprint';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-sprint-review',
  templateUrl: './sprint-review.component.html',
  styleUrls: ['./sprint-review.component.css']
})

export class SprintReviewComponent implements OnInit {
  chosenSprint: Sprint = new Sprint();
  pageTitle = 'Review';
  saveReview: boolean;
  saveRetro: boolean;
  isRetro: boolean;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private sprintService: SprintService
  ) { }

  ngOnInit() {
    this.getSprint();
  }

  getSprint(): void {
    // Grabs a sprint based on the sprint id in order to display it's information to the user
    const id = +this.route.snapshot.paramMap.get('id');
    this.sprintService.getSprintById(id).subscribe(sprint => {
      this.chosenSprint = sprint;
    });
  }

  addSprint(stage: string) {

    if ( stage === 'review') {
      this.save();
      this.saveReview = true;
      this.chosenSprint.status = 'REVIEW';
        }

    if (stage === 'retro') {
      this.saveRetro = true;
      this.chosenSprint.status = 'COMPLETED';
      this.save();
    }
}

save() {
  this.sprintService.addSprint(this.chosenSprint).subscribe(sprint => {
    this.chosenSprint = sprint;
  });
}

goto(stage: string) {

  if ( stage === 'done') {
    this.router.navigate([`/sprint-details/${this.chosenSprint.id}`]);
  }

  if (stage === 'retro') {
    this.pageTitle = 'Retro';
    this.isRetro = true;
  }

}

  getMaxCharCount(max: number, str: string): string {

    if (str !== undefined) {

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
