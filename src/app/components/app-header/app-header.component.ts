import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WebService } from 'app/web.service';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  providers: [WebService]
})
export class AppHeaderComponent {
  id: string;

  //show the signin and signout button
  signin: boolean = true;
  signout: boolean = false;
  navtoggle: boolean = false;
  myqrrcode: boolean = false;
  userid: string = "";
  username: string = "";


  constructor(private router: Router, private webservice: WebService) {
    // this.id = "5a98e67f95673611dc9b2e42" //coupon
    //this.id= "5a978a08d81ac815f84ef999" //youtube
  }

  ngOnInit() {
    debugger;
    this.userid = localStorage.getItem("userid");

    if (this.userid == null) {
      this.signin = true;
      this.signout = false;
      this.navtoggle = false;
      this.myqrrcode = true;
    } else {
      this.signout = true;
      this.signin = false;

      this.username = localStorage.getItem("firstname");
      this.navtoggle = true;
      this.myqrrcode = false;
    }
  }
  // home() {
  //   this.router.navigate(['/home'])

  // }
  // features() {
  //   this.router.navigate(['/features'])

  // }

  // pricing() {
  //   this.router.navigate(['/pricing'])

  // }
  // help() {
  //   this.router.navigate(['/help'])

  // }
  // blog() {
  //   this.router.navigate(['/blog'])
  // }

  myqrcode() {
    debugger;
    this.router.navigate(['/myqrcode'])
  }

  login() {
    debugger
    this.router.navigate(['pages/login'])
  }
  logout() {
    this.webservice.logout();
  }
}
