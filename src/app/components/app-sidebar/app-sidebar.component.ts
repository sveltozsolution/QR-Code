import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './app-sidebar.component.html'
})
export class AppSidebarComponent {

  hidenavtoggle: boolean = false;

  //show the signin and signout button
  signin: boolean = true;
  signout: boolean = false;

  userid: string = "";
  username: string = "";

  constructor() { }

  ngOnInit() {
    // this.initializevariable();
    debugger;
    this.userid = localStorage.getItem("userid");

    if (this.userid == null) {
      this.signin = true;
      this.signout = false;
      this.hidenavtoggle = false;
    } else {
      this.signout = true;
      this.signin = false;
      this.hidenavtoggle = true;

      this.username = localStorage.getItem("firstname");
    }
  }
}
