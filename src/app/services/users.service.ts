import { Injectable, EventEmitter } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database'

import { User } from '../classes/user'

@Injectable()
export class UsersService {
  usersUpdated = new EventEmitter<User[]>()
  users: FirebaseListObservable<User[]>
  //users: User[]
  // users: User[] = [
  //   new User('John', 'Thompson', '2017-01-01', 'jthmompson@gmail.com'),
  //   new User('Mark', 'Waters', '2017-01-01', 'mwaters@gmail.com'),
  //   new User('Hans', 'Gruber', '2017-01-01', 'hgrub@gmail.com'),
  //   new User('John', 'Lincoln', '2017-01-01', 'lincobaby32@gmail.com'),
  //   new User('Walter', 'Hillsborough', '2017-01-01', 'wallhill84@gmail.com'),
  // ]

  constructor(db: AngularFireDatabase) {
    this.users = db.list('/users')
  }

  // getUsers() {
  //   return this.users
  // }

  deleteUser(key: string) {
    this.users.remove(key)
    // this.users.splice(this.users.indexOf(user), 1)
    // this.usersUpdated.emit(this.users)
  }

  addUser(user: User) {
    delete user.$key
    this.users.push(user)
  }
  //
  // editUser(oldUser: User, newUser: User) {
  //   this.users
  //   //this.users[this.users.indexOf(oldUser)] = newUser
  // }
  editUser(user: User) {
    this.users.update(user.$key, user)
    //this.users.update(user).then(_ => console.log('set'))
  }
  //
  // fetchData() {
  //   return this.http.get('https://cafeproject-5ff94.firebaseio.com/')
  //     .map((response: Response) => response.json())
  //     .subscribe(
  //     (data: Recipe[]) => {
  //       this.recipes = data;
  //       this.recipesChanged.emit(this.recipes);
  //     }
  //     );
  // }
}
