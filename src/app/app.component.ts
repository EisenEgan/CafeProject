import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  loggedIn: Boolean = false;
  login(event) {
    var username = event.user.username
    var password = event.user.password
    if (username == "Luke" && password == "Skywalker") {
      this.loggedIn = true;
    }
  }
}
