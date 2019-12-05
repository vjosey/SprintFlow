import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SpringDetailsComponent } from './spring-details/spring-details.component';
import { CurrentSprintComponent } from './current-sprint/current-sprint.component';
import { CompletedSprintComponent } from './completed-sprint/completed-sprint.component';
import { SprintPlanningComponent } from './sprint-planning/sprint-planning.component';
import { SprintReviewComponent } from './sprint-review/sprint-review.component';
import { SprintRetroComponent } from './sprint-retro/sprint-retro.component';
import { SprintBoardComponent } from './sprint-board/sprint-board.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SpringDetailsComponent,
    CurrentSprintComponent,
    CompletedSprintComponent,
    SprintPlanningComponent,
    SprintReviewComponent,
    SprintRetroComponent,
    SprintBoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
