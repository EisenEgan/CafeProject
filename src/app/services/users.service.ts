import { Injectable, EventEmitter } from '@angular/core';

import { User } from '../classes/user'

@Injectable()
export class UsersService {
  usersUpdated = new EventEmitter<User[]>()
  users: User[] = [
    new User('John', 'Thompson', '2017-01-01', 'jthmompson@gmail.com'),
    new User('Mark', 'Waters', '2017-01-01', 'mwaters@gmail.com'),
    new User('Hans', 'Gruber', '2017-01-01', 'hgrub@gmail.com'),
    new User('John', 'Lincoln', '2017-01-01', 'lincobaby32@gmail.com'),
    new User('Walter', 'Hillsborough', '2017-01-01', 'wallhill84@gmail.com'),
  ]

  constructor() { }

  getUsers() {
    return this.users
  }

  deleteUser(user: User) {
    this.users.splice(this.users.indexOf(user), 1)
    this.usersUpdated.emit(this.users)
  }

  addUser(user: User) {
    this.users.push(user)
  }

  editUser(oldUser: User, newUser: User) {
    this.users[this.users.indexOf(oldUser)] = newUser
  }
}
