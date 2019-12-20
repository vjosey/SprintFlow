import { SprintlistBoardComponent } from './sprintlist-board/sprintlist-board.component';
import { SprintDetailsComponent } from './sprint-details/sprint-details.component';
import { SprintReviewComponent } from './sprint-review/sprint-review.component';
import { SprintPlanningComponent } from './sprint-planning/sprint-planning.component';
import { SprintBoardComponent } from './sprint-board/sprint-board.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'sprint-board/:id', component: SprintBoardComponent},
  { path: 'sprint-planning/:id', component: SprintPlanningComponent},
  { path: 'sprint-review/:id', component: SprintReviewComponent},
  { path: 'sprint-details/:id', component: SprintDetailsComponent},
  { path: 'sprint-planning', component: SprintPlanningComponent},
  { path: 'sprintlist-board', component: SprintlistBoardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
