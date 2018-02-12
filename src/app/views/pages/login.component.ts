import { Component } from '@angular/core';
import { WebService } from 'app/web.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'login.component.html',
  providers:[WebService]
})
export class LoginComponent {

  test: Date = new Date();
  loginvalid;

  email: string = "";
  password: string = "";

  messageemailpwd: boolean = false;
  // messageemail: boolean = false;
  errormessage: boolean = false;
  // messagepassword: boolean = false;

  constructor(private Router: Router, private WebService: WebService) { }




  ngOnInit() {
  }

  Login() {
      
      var email = this.email;
      var password = this.password;

      this.validate(email, password);
      if (email != "" && password != "") {
      
          this.WebService.Login(email, password);
          this.loginvalid = localStorage.getItem("loginvalid");
          if (this.loginvalid == "false") {
              this.errormessage = true;
          }
          else {
              this.errormessage = false;
          }
      }

  }

  validate(email, password) {
   

      this.errormessage = false;

      if (email == "") {
          this.errormessage = true;
      }
      else {
          this.errormessage = false;
      }
      if (password == "") {
          this.errormessage = true;
      }
      else {
          this.errormessage = false;
      }
  }
  register(){
    this.Router.navigate(['pages/register'])
  }

}



