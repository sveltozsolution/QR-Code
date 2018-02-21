import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WebService } from 'app/web.service';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  providers: [WebService]
})
export class AppHeaderComponent {

  //show the signin and signout button
  signin: boolean = true;
  signout: boolean = false;
  navtoggle: boolean = false;
  userid: string = "";
  username: string = "";
  

  constructor(private router: Router, private webservice: WebService) { }
  ngOnInit() {
    // this.initializevariable();
    debugger;
    this.userid = localStorage.getItem("userid");

    if (this.userid == null) {
      this.signin = true;
      this.signout = false;
      this.navtoggle = false;
    } else {
      this.signout = true;
      this.signin = false;

      this.username = localStorage.getItem("firstname");
      this.navtoggle = true;

    }
  }
  

  login() {
    this.router.navigate(['pages/login'])
  }
  logout() {
    this.webservice.logout();
  }
}
