import { Component, OnInit } from '@angular/core';
import { UserService } from './service/user.service';
import { User } from './interface/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  users:User[];
  title = 'angularhttp';
  /* private user:User= {
      'id':5,
      'name': 'Juniar Graham',
      'username': 'Junior',
      'email': 'Sincere@april.biz',
      'address': {
        'street': 'Kulas Light',
        'suite': 'Apt. 556',
        'city': 'Gwenborough',
        'zipcode': '92998-3874',
        'geo': {
          'lat': '-37.3159',
          'lng': '81.1496'
        }
      },
      'phone': '1-770-736-8031 x56442',
      'website': 'hildegard.org',
      'company': {
        'name': 'Get Carona',
        'catchPhrase': 'Multi-layered client-server neural-net',
        'bs': 'harness real-time e-markets'
      }
    } */
    private user:User= {
      'id':5,
      'name': 'Juniar Graham',
      'username': 'Junior',
      'email': 'Sincere@april.biz',
      
    }
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    //this.onTextUser();
   // this.onPatchUser();
   this.onGetUsers();
    //this. onDeleteUser();
   this.onGetUser();
   // this.onPostUser();
   //this.onPutUser();
  
  }
  onGetUsers(): void {
    this.userService.getUsers().subscribe(
      (response) => {
        console.log(response),
        this.users=response
      },
      (error: any) => console.log(error),
      () => console.log('Done getting users')
    );
  }

  onGetUser(): void {
    this.userService.getUser().subscribe(
      (response) => console.log(response),
      (error: any) => console.log(error),
      () => console.log('Done getting user')
    );
  }
  onPostUser():void{
    this.userService.createUser(this.user).subscribe(
      (response)=>console.log(response),
      (error: any) => console.log(error),
      () => console.log('Done creating user')
    )
  }
   onPutUser():void{
    this.userService.updateUser(this.user).subscribe(
      (response)=>console.log(response),
      (error: any) => console.log(error),
      () => console.log('Done updated user')
    )
  } 
  onPatchUser():void{
    this.userService.patchUser(this.user).subscribe(
      (response)=>console.log(response),
      (error: any) => console.log(error),
      () => console.log('Done patched user')
    )
  } 
  onDeleteUser():void{
    this.userService.deleteUser(5).subscribe(
      (response)=>console.log("response delete from",response),
      (error: any) => console.log(error),
      () => console.log('Done deleted user')
    )
  } 
  onTextUser():void{
    this.userService.getTextFiles().subscribe(
      (response)=>console.log("response",response),
      (error: any) => console.log(error),
      () => console.log('Done retreived text files')
    )
  } 
}
