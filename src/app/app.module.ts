import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SprintDetailsComponent } from './sprint-details/sprint-details.component';
import { CurrentSprintComponent } from './current-sprint/current-sprint.component';
import { CompletedSprintComponent } from './completed-sprint/completed-sprint.component';
import { SprintPlanningComponent } from './sprint-planning/sprint-planning.component';
import { SprintReviewComponent } from './sprint-review/sprint-review.component';
import { SprintBoardComponent } from './sprint-board/sprint-board.component';
import { SprintlistBoardComponent } from './sprintlist-board/sprintlist-board.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SprintDetailsComponent,
    CurrentSprintComponent,
    CompletedSprintComponent,
    SprintPlanningComponent,
    SprintReviewComponent,
    SprintBoardComponent,
    SprintlistBoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DragDropModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
