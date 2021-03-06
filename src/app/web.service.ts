import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Router, Data } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class WebService {
    NAME_KEY = 'firstname';
    TOKEN_KEY = 'token';
    USER_ROLE = "userrole";
    loginvalid = "loginvalid";
    userid = "userid";

   // base_url = 'http://localhost:5000/api/';
     base_url = 'https://qurcodeapi.herokuapp.com/api/';


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
    generatecode(generateddate: string, userid: string, qrtype: string, qrdata: string, qrinfo: string) {
        
        let data = new URLSearchParams();
        // data.append('title', title);
        // data.append('qrstatus', qrstatus);        
        data.append('generateddate', generateddate);
        data.append('userid', userid);
        data.append('qrtype', qrtype);
        data.append('qrdata', qrdata);
        data.append('qrinfo', qrinfo);

        // var token = localStorage.getItem('token');
        var headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new RequestOptions({ headers: headers });

        return this.http.post(this.base_url + 'addqrcode', data, options).map(res => res.json());
        
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
        debugger;
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

    // getqrcode(qrcodeid: string) {
    //     debugger;
    //    var url = this.base_url + 'qrcode/' + qrcodeid
    //     var headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    //     var options = new RequestOptions({ headers: headers });
    //     return this.http.get(url, options).map(res => res.json());
    

        //   return this.http.get(url, options).subscribe(res => {
        //         var data = res.json();
        //         console.log(data);
        //     })

        // var headers = new Headers({ 'Authorization': localStorage.getItem('token') });
        // var options = new RequestOptions({ headers: headers });
        // console.log("in get profile");
        // return this.http.get(url, options).map(res => res.json());
    // }

    getqrcode(qrcodeid: string) {
        debugger;
        var url = this.base_url + 'qrcode/' + qrcodeid
        var headers = new Headers({ 'Authorization': localStorage.getItem('token') });
        var options = new RequestOptions({ headers: headers });
        return this.http.get(url, options).map(res => res.json());
    }
    
    getIpAddress() {
        return this.http
            .get('http://freegeoip.net/json/?callback')
            .map(response => response || {})
            .catch(this.handleError);
    }

    private handleError(error: HttpErrorResponse):
        Observable<any> {
        //Log error in the browser console 
        console.error('observable error: ', error);

        return Observable.throw(error);
    }
    //   getIP(): Observable<Data[]> { 
    //       return this.http.get('http://ipinfo.io') // ...using post request 
    //       .map((res:Response) => res.json()) // ...and calling .json() on the response to return data 
    //       .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any 
    //   } 

    postuserdata(date, city, ip, country, os, browsername, userdata, id) { 
        debugger 
        // city="pune" 
        let data = new URLSearchParams(); 
        data.append('date', date);         
        data.append('cities', city); 
        data.append('ip', ip); 
        data.append('country', country); 
        data.append('os', os); 
        data.append('browser', browsername); 
        data.append('qruserinfo', userdata); 
        data.append('userid', id); 
        var headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' }); 
        var options = new RequestOptions({ headers: headers }); 
 
 
        this.http.post(this.base_url + 'qruserinfo', data, ).subscribe(res => { 
 
        }) 
    }

    getuserdata() {
        debugger;
        var url = this.base_url + 'qrcodeuserList';
        var headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new RequestOptions({ headers: headers });
        debugger;
        return this.http.get(url, options).map(res => res.json());
    }

    getusercount(id) {
        var url = this.base_url + 'qrcount/';
        var headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new RequestOptions({ headers: headers });
        debugger;
        return this.http.get(url + id, options).map(res => res.json());

    }

}




