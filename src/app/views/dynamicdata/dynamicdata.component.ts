import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebService } from '../../web.service';
import { ActivatedRoute } from '@angular/router';
import { Ng2DeviceService } from 'ng2-device-detector';
import { Location } from '@angular/common';
// import { MyUserServService } from 'app/views/dynamicdata/dynamicdata.service'; 
import { HttpClient } from '@angular/common/http';
// import { HttpRequest,HttpClient, HttpResponse, HttpInterceptor, HttpHandler, HttpEvent } from '@angular/common/http' 
@Component({
  selector: 'app-dynamicdata',
  templateUrl: './dynamicdata.component.html',
  styleUrls: ['./dynamicdata.component.css'],
  providers: [WebService, HttpClient]

})

export class DynamicdataComponent implements OnInit {
  // urlToOpen: string;
  Title: any;
  newdata: any;
  qrinfo: string;
  language: any;
  usseragent: any;
  osversion: any;
  os: any;
  browsername: any;
  timezone: any;
  state: any;
  city: any;
  country: any;
  ip: any;
  userdata: any;
  qrdata2: any;



  errorMessage: any;
  IppDetails: any;
  loading: boolean;
  _http: any;
  location: any;
  result: any;
  geolocationPosition: Position;
  setPosition: any;
  qrcode: any;
  qrcodeid: string = "";
  qrdata: string = "";
  deviceInfo = null;
  id: any;
  qruserinfo = "";
  qrdata1 = "";

  private sub: any;

  //show jeson data on dynamicpage
  jsondata: boolean = true;
  nonjsondata: boolean = true;

  constructor(public router: Router, location: Location, private webservice: WebService, private route: ActivatedRoute, private deviceService: Ng2DeviceService) {
    //  public  userService: MyUserServService, 
    this.epicFunction();

  }

  epicFunction() {
    console.log('hello `Dynamic` component');
    this.deviceInfo = this.deviceService.getDeviceInfo();
    console.log(this.deviceInfo);
    // alert(this.deviceInfo); 
  }

  ngOnInit() {

    debugger
    this.sub = this.route.params.subscribe(params => {

      this.id = params['id']; // ✓ converts string 'id' to a number 
      this.Getid();
    });

    console.log("ip");
    this.webservice.getIpAddress().subscribe(data => {
      console.log(data);
      debugger;
      this.qruserinfo = data._body

      //  var abc=JSON.parse(data._body); 
      //   debugger; 
      //   alert(abc.ip); 
      //   alert(abc.country_name); 
      this.userdata = JSON.parse(this.qruserinfo);
      // this.userdata = JSON.stringify(this.userdata); 
      // this.userdata=JSON.parse(this.userdata); 
      // this.usersdata() 
      this.ip = this.userdata.ip
      this.country = this.userdata.country_name
      this.city = this.userdata.city
      this.state = this.userdata.region_name
      this.timezone = this.userdata.time_zone
      this.deviceInfo = this.deviceService.getDeviceInfo();
      this.browsername = this.deviceInfo.browser;
      this.os = this.deviceInfo.os;
      this.osversion = this.deviceInfo.os_version;
      this.usseragent = this.deviceInfo.userAgent;
      this.language = this.deviceInfo.language;
      this.createJson2();

      // alert(this.userdata.ip); 
      // alert(this.userdata.city); 
      //this.usersdata() 
    });

    // this.getIP() 

    this._http.get("http://freegeoip.net/json/")
      .map(data => {

        console.log(data.json().ip);
      });

    // }; 
    // this.Getid(); 
    // if(window.navigator.geolocation){ 
    //   window.navigator.geolocation.getCurrentPosition(this.setPosition.bind(this)); 
    // debugger; 
    // }; 
  }

  Getid() {

    // this.id = "5a8fee91d7f04f0021f60813"

    console.log("qrcodeid value");
    console.log(this.id);
    this.webservice.getqrcode(this.id).subscribe(qrcode => {
      debugger;

      if (qrcode.qrtype == "url") {
        this.qrdata2 = qrcode.qrdata;
        this.nonjsondata = true;
        this.jsondata = false;

        let url: string = '';
        if (!/^http[s]?:\/\//.test(this.qrdata2)) {
          url += 'http://';
        }
        url += this.qrdata2;
        window.open(url, '_blank');
      }
      
      else if (qrcode.qrtype == "phone") {
        this.qrdata2 = qrcode.qrdata;
        this.nonjsondata = true;
        this.jsondata = false;

      }
      else {
        this.qrdata1 = qrcode.qrdata;
        // var jsonobj = JSON.parse(this.qrdata1);
        this.qrdata2 = JSON.parse(this.qrdata1);
        this.nonjsondata = false;
        this.jsondata = true;
      }
    });
  }

  keys() {
    return Object.keys(this.qrdata2);
  }




  //   getIP() { 
  //     debugger; 
  //     this.loading = true; 
  //     this.webservice.getIP() 
  //     .subscribe( 
  //         IPDetails => this.IppDetails, 
  //         error =>  this.errorMessage = <any>error 
  //         ); 
  // } 

  usersdata(qruserinfo, id) {

    this.webservice.postuserdata(qruserinfo, id);

  }

  createJson2() {


    var Jsonuserqrinfoobj = '{'
      //+ '"device" : "' + this.device + '",' 
      + '"language" : "' + this.language + '",'
      + '"browsername" : "' + this.browsername + '",'
      // + '"browserversion" : "' + this.browserversion + '",' 
      + '"os" : "' + this.os + '",'
      + '"osversion" : "' + this.osversion + '",'
      + '"usseragent" : "' + this.usseragent + '",'
      // + '" getDeviceInfo" : "' + this.getDeviceInfo + '" ' 
      + '"ip" : "' + this.ip + '",'
      + '"country" : "' + this.country + '",'
      + '"city" : "' + this.city + '",'
      + '"state" : "' + this.state + '",'
      + '"timezone" : "' + this.timezone + '"'

      + '}'
    this.qruserinfo = Jsonuserqrinfoobj;
    // this.usersdata(this.qrinfo); 
    this.usersdata(this.qruserinfo, this.id);
  }

}