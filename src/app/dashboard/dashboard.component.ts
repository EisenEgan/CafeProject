import { Component, OnInit, Output } from '@angular/core';

import { UsersService } from '../services/users.service'
import { User } from '../classes/user'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  isSelected: Boolean = false;
  userSelected: User;
  mode: String = 'users';
  constructor(private usersService: UsersService) { }

  ngOnInit() {
  }

  onSelected(user: User) {
    this.userSelected = user
    this.isSelected = true
  }

  cancel() {
    this.mode = 'users'
  }

  create() {
    this.userSelected = undefined
    this.mode = 'edit'
  }

  edit() {
    this.mode = 'edit'
  }

  delete() {
    this.isSelected = false;
    this.usersService.deleteUser(this.userSelected)
  }

  onAdd(event: String) {
    this.mode = event
  }
}
