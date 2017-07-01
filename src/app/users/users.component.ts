import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { UsersService } from '../services/users.service'
import { User } from '../classes/user'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  selected: User;
  users: User[] = []
  @Output() isSelected: EventEmitter<User> = new EventEmitter<User>()
  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.users = this.usersService.getUsers()
    this.usersService.usersUpdated.subscribe(
      (users: User[]) => {
        this.selected = null;
        this.users = users
      }
    )
  }

  highlight(user: User) {
    this.selected = user
    this.isSelected.emit(this.selected)
  }
}
