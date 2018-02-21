import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class WebService {
    NAME_KEY = 'firstname';
    TOKEN_KEY = 'token';
    USER_ROLE = "userrole";
    loginvalid = "loginvalid";
    userid = "userid";

       base_url = 'http://localhost:5000/api/';
    // base_url = 'https://qurcodeapi.herokuapp.com/api/';

 
    constructor(private http: Http, private router: Router) { }

    route(menuid: string) {
        this.router.navigate(['/racipe/' + menuid]);
    }

    register(firstname: string, lastname: string, mobileno: string, email: string, password: string) {
        let data = new URLSearchParams();
        data.append('firstname', firstname);
        data.append('lastname', lastname);
        data.append('mobileno', mobileno);
        data.append('email', email);
        data.append('password', password);
        console.log(data);
        this.http.post(this.base_url + 'auth/' + 'register', data).subscribe(res => res.json()); {
        }
    }

    Login(email: string, password: string) {
        
        // localStorage.setItem(this.loginvalid, "false");
        let data = new URLSearchParams();
        data.append('email', email);
        data.append('password', password);
        var res = this.http.post(this.base_url + 'auth/login', data).subscribe(res => {
            this.authenticate(res);
        })
    }

    authenticate(res) {

        var authResponse = res.json();
        if (!authResponse.token) {
            localStorage.setItem(this.loginvalid, "false");
            return;
        }
        debugger;

        // localStorage.setItem(this.TOKEN_KEY, authResponse.token);
        // localStorage.setItem(this.USER_ROLE, authResponse.user.role);
        localStorage.setItem(this.loginvalid, "true");
        localStorage.setItem(this.NAME_KEY, authResponse.user.firstname);
        localStorage.setItem(this.userid, authResponse.user._id);
        this.router.navigate(['home']);
    }

    logout() {
        // localStorage.removeItem(this.TOKEN_KEY);
        localStorage.removeItem(this.loginvalid);
        localStorage.removeItem(this.NAME_KEY);
        localStorage.removeItem(this.userid);
        this.router.navigate(['home']);
        location.reload();
    }

    get isAuthenticated() {
        return !!localStorage.getItem(this.TOKEN_KEY);
    }

    // qrcode api call
    // generatecode(title: string, qrstatus: string, qrtype: string, qrdata: string) {
    generatecode(generateddate: string, userid: string, qrtype: string, qrdata: string, qrinfo:string) {
        let data = new URLSearchParams();
        // data.append('title', title);
        // data.append('qrstatus', qrstatus);        
debugger;
        data.append('generateddate', generateddate);
        data.append('userid', userid);
        data.append('qrtype', qrtype);
        data.append('qrdata', qrdata);
        data.append('qrinfo', qrinfo);

        // var token = localStorage.getItem('token');
        var headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new RequestOptions({ headers: headers });
        //return this.http.post(this.base_url + 'Generatecontact', data, options).map(res => res.json());


        this.http.post(this.base_url + 'addqrcode', data, options).subscribe(res => {

        })
    }

    Updateqrcode(qrcodeid: string, generateddate: string, userid: string, qrtype: string, qrdata: string) {
        debugger;
        var url = this.base_url + 'updateqrcode/' + qrcodeid;
        let data = new URLSearchParams();
        data.append('generateddate', generateddate);
        data.append('userid', userid);
        data.append('qrtype', qrtype);
        data.append('qrdata', qrdata);
        console.log(data);

        // var token = localStorage.getItem('token'); 
        var headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new RequestOptions({ headers: headers });
        //return this.http.post(this.base_url + 'Generatecontact', data, options).map(res => res.json()); 


        this.http.put(url, data, options).subscribe(res => {
            //set newly added category 
            var data = res.json();
            console.log('url data added');
            console.log(data);

        })
    }

    getallqrcode() {
        var url = this.base_url + 'qrcodeList';
        var headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new RequestOptions({ headers: headers });
        return this.http.get(url, options).map(res => res.json());


        //   return this.http.get(url, options).subscribe(res => {
        //         var data = res.json();
        //         console.log(data);
        //     })

        // var headers = new Headers({ 'Authorization': localStorage.getItem('token') });
        // var options = new RequestOptions({ headers: headers });
        // console.log("in get profile");
        // return this.http.get(url, options).map(res => res.json());
    }

    getqrcode(qrcodeid: string) {
        debugger;
        var url = this.base_url + 'qrcode/' + qrcodeid
        var headers = new Headers({ 'Authorization': localStorage.getItem('token') });
        var options = new RequestOptions({ headers: headers });
        return this.http.get(url, options).map(res => res.json());
    }

}


