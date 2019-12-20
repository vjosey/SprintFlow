import { UserStory } from './model/UserStory';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Sprint } from './model/sprint';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class SprintService {

  private sprintUrl = 'http://localhost:8080/api/sprintflow';  // TODO: URL to web; Change for production


  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getSprints(): Observable<Sprint[]> {
    return this.http.get<Sprint[]>(this.sprintUrl).pipe(
      catchError(this.handleError<Sprint[]>('getSprints', []))
    );
  }

  getTopActiveSprints(): Observable<Sprint[]> {
    const url = `${this.sprintUrl}/dashboard/active`;
    return this.http.get<Sprint[]>(url).pipe(
      catchError(this.handleError<Sprint[]>('getTopActiveSprints', [])));
  }

  getTopCompletedSprints(): Observable<Sprint[]> {
    const url = `${this.sprintUrl}/dashboard/completed`;
    return this.http.get<Sprint[]>(url).pipe(
      catchError(this.handleError<Sprint[]>('getTopCompletedSprints', [])));
  }

  getSprintById(id: number): Observable<Sprint> {
    const url = `${this.sprintUrl}/sprint/${id}`;
    return this.http.get<Sprint>(url).pipe(
    catchError(this.handleError<Sprint>(`getSprintById id=${id}`))
    );
  }

 addSprint(sprint: Sprint): Observable<Sprint> {

  console.log(sprint);
  return this.http.post<Sprint>(`${this.sprintUrl}/sprint`, sprint, this.httpOptions).pipe(
    catchError(this.handleError<Sprint>('addSprint', sprint))
  );
 }

 updateSprint(sprint: Sprint): Observable<Sprint>  {
   return this.http.put(`${this.sprintUrl}/sprint`, sprint, this.httpOptions).pipe(
    catchError(this.handleError<any>('updateSprint'))
   );
 }

 deleteSprint(id: number): Observable<{}> {
  const url = `${this.sprintUrl}/sprint/${id}`;
  return this.http.delete(url, this.httpOptions).pipe(
  catchError(this.handleError(`deleteSprint`))
  );
}


 private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
   // this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}



}
