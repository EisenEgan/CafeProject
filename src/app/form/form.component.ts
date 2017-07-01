import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Output() onLogin = new EventEmitter()
  username: String
  password: String
  constructor() { }

  ngOnInit() {
  }

  login() {
    this.onLogin.emit({
      user: {
        username: this.username,
        password: this.password
      }
    })
  }

}
