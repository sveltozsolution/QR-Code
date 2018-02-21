import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './app-footer.component.html'
})
export class AppFooterComponent { 

  hidenavtoggle: boolean = false;
  hidenavtoggle1:boolean = false;
    //show the signin and signout button
    signin: boolean = true;
    signout: boolean = false;
    userid: string = "";


    ngOnInit() {
      // this.initializevariable();
      debugger;
      this.userid = localStorage.getItem("userid");
  
      if (this.userid == null) {
        this.signin = true;
        this.signout = false;
        this.hidenavtoggle = false;
        this.hidenavtoggle1 = true;
      } else {
        this.signout = true;
        this.signin = false;
        this.hidenavtoggle = true;
        this.hidenavtoggle1 = false;
  
        //this.username = localStorage.getItem("firstname");
      }
    }


}
