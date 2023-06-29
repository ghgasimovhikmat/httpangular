
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, tap, map, catchError, throwError } from 'rxjs';
import { User } from '../interface/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = environment.apiUrl;
  readonly morParams = ['test1', 'test2'];
  readonly defaultImage='https://robohash.org';
  
  constructor(private http: HttpClient) {}
  getUsers():Observable<User[]>{
    return this.http.get<User[]>(`${this.apiUrl}/users`).pipe(
      catchError(this.handlerError)
    )
  }

  getTextFiles(): Observable<string> {
    return this.http.get(`/assets/text.txt`, { responseType: 'text' });
  }
 
  getUser(): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/users/1`).pipe(
      map(user=>{
        return {...user}
      })
    );
     
  }
  createUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/users`, user);
  }
  updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/users/${user.id}`, user);
  }
  patchUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/users/${user.id}`, user);
  }
  deleteUser(id: number): Observable<unknown> {
    return this.http.delete<unknown>(`${this.apiUrl}/users/${id}`);
  }

   /* getUsers(): Observable<User[]> {
    //const theParams={['testList']:this.morParams};

    //let myParams=new HttpParams({fromObject:{['testList']:this.morParams}});

    // let myParams=new HttpParams({fromString:'name=junior&id=58'});,{params:myParams}
    return this.http.get<User[]>(`${this.apiUrl}/users`).pipe(
      map(users =>users.map(user => ({
          //  ...user,
          email: user.email,
          name: user.name.toUpperCase(),
          image:`${this.defaultImage}/${user.username.toLowerCase()}`,
          website: user.website,
          username: user.username,
          phone: user.phone,
        }))
      )
    );
  } */

  private  handlerError(error: HttpErrorResponse):Observable<never> {
    if(error.status==404) {
      return throwError ({code:404,message:'Page not found'});
    }
    return throwError(error);
  }
}
