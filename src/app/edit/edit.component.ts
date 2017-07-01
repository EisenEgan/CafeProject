import { Component, Input, Output, OnChanges, EventEmitter } from '@angular/core';

import { UsersService } from '../services/users.service'
import { User } from '../classes/user'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnChanges {
  @Input() user: User
  @Output() onAdd = new EventEmitter<string>()
  //user: User
  oldUser: User
  addUser: Boolean

  // @Input set user(value: User) {
  //   // this.user = value;
  //   // console.log(value)
  //   return function() {
  //     console.log('herp')
  //   }
  // }

  constructor(private usersService: UsersService) { }

  ngOnChanges() {
    if (this.user) {
      this.addUser = false
      this.oldUser = { ...this.user }
    } else {
      this.user = { firstName: '', lastName: '', startDate: '', email: '' }
      this.addUser = true
    }
  }

  add() {
    console.log(this.user)
    if (this.addUser) {
      this.usersService.addUser(this.user)
    } else {
      this.usersService.editUser(this.oldUser, this.user)
    }
    this.onAdd.emit('users')
    // console.log(this.oldUser)
    // console.log(this.user)
    // this.usersService
  }

}
