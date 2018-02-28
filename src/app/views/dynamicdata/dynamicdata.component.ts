import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebService } from '../../web.service';
import { ActivatedRoute } from '@angular/router';
import { Ng2DeviceService } from 'ng2-device-detector';
import { Location } from '@angular/common';
// import { MyUserServService } from 'app/views/dynamicdata/dynamicdata.service';
import { HttpClient } from '@angular/common/http';
import { Alert } from 'selenium-webdriver';
// import { HttpRequest,HttpClient, HttpResponse, HttpInterceptor, HttpHandler, HttpEvent } from '@angular/common/http'
@Component({
  selector: 'app-dynamicdata',
  templateUrl: './dynamicdata.component.html',
  styleUrls: ['./dynamicdata.component.css'],
  providers: [WebService, HttpClient]

})

export class DynamicdataComponent implements OnInit {



  i: number=0;
  userid: string;
  userdata: any;
  _body: any;
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
  private sub: any;

  constructor(
    public WebService: WebService,
    //  public  userService: MyUserServService,
    public router: Router, location: Location, private webservice: WebService, private route: ActivatedRoute, private deviceService: Ng2DeviceService) {
    this.epicFunction();
    this.WebService.getIpAddress().subscribe(data => {
      console.log(data);
    this.userdata=JSON.parse(data._body);
      debugger;
    //  this.usersdata()
     this.deviceInfo = this.deviceService.getDeviceInfo();
    });
  }
  epicFunction() {
    console.log('hello `Dynamic` component');
   
  }

  ngOnInit() {
    debugger;
    this.sub = this.route.params.subscribe(params => {
      debugger;
      this.id = params['id']; // (+) converts string 'id' to a number
      alert(this.id);
    });

  }

  Getid() {
    // debugger;
    // this.id = "5a8fee91d7f04f0021f60813"

    // console.log("qrcodeid value");
    // console.log(this.id);
    // this.webservice.getqrcode(this.id).subscribe(qrcode => {
    //   this.qrdata = JSON.parse(qrcode.qrdata);

    //   alert(this.qrcode.qrdata)
    //   console.log("json data");
    //   console.log(this.qrdata);
    // });
  }

  keys() {
    // this.count()
    return Object.keys(this.qrdata);
  }
  // getIP() {
  //   this.count()
  //   this.loading = true;
  //   this.webservice.getIP()
  //     .subscribe(
  //       IPDetails => this.IppDetails,
  //       error => this.errorMessage = <any>error
  //     );
  }

//   usersdata(){
// //  this.webservice.postuserdata(this.userdata);
//  this.count()

//   }

// }

