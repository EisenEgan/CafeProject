import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database'

import { UsersService } from '../services/users.service'
import { User } from '../classes/user'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UsersService]
})
export class UsersComponent {
  selected: User;
  //users: FirebaseListObservable<User[]>
  users: User[]
  @Output() isSelected: EventEmitter<User> = new EventEmitter<User>()
  //constructor(private usersService: UsersService) { }

  constructor(private usersService: UsersService) {
    this.usersService.users.subscribe(result => {
      this.users = result
    })
    //  this.users = this.usersService.users
  }
  // ngOnInit() {
  //   this.usersService.users.subscribe(
  //     (result) => {
  //       console.log(result)
  //       // this.selected = null
  //       // this.users = users
  //     }
  //   )
  // this.users = this.usersService.getUsers()
  // this.usersService.usersUpdated.subscribe(
  //   (users: User[]) => {
  //     this.selected = null;
  //     this.users = users
  //   }
  // )
  // }
  //
  highlight(user: User) {
    this.selected = user
    this.isSelected.emit(this.selected)
  }
}
