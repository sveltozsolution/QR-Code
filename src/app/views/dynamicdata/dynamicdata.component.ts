import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebService } from '../../web.service';
import { ActivatedRoute } from '@angular/router';
import { Ng2DeviceService } from 'ng2-device-detector';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dynamicdata',
  templateUrl: './dynamicdata.component.html',
  styleUrls: ['./dynamicdata.component.css'],
  providers: [WebService, HttpClient]

})

export class DynamicdataComponent implements OnInit {
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
  private sub: any;
  qrdata1: any;
  qrdata2: any;
  //show jeson data on dynamicpage
  jsondata: boolean = true;
  nonjsondata: boolean = true;

  constructor(public router: Router, location: Location, private webservice: WebService, private route: ActivatedRoute, private deviceService: Ng2DeviceService) {
    // this.epicFunction();

  }

  // epicFunction() {
  //   console.log('hello `Dynamic` component');
  //   this.deviceInfo = this.deviceService.getDeviceInfo();
  //   console.log(this.deviceInfo);
  //   // alert(this.deviceInfo);
  // }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {

      this.id = params['id']; // ✓ converts string 'id' to a number
       this.Getid();

    });

    console.log("ip");
    this.webservice.getIpAddress().subscribe(data => {

      this.qruserinfo = data._body

      this.userdata = JSON.parse(this.qruserinfo);

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

      this.usersdata(this.city, this.ip, this.country, this.os, this.browsername, this.qruserinfo, this.id);

    });

    // this.Getid();
  }

  Getid() {
debugger;
    this.webservice.getqrcode(this.id).subscribe(qrcode => {

      if (qrcode.qrtype == "url") {
        debugger;
        this.qrdata2 = qrcode.qrdata;
        this.nonjsondata = false;
        this.jsondata = false;

        let url: string = '';
        if (!/^http[s]?:\/\//.test(this.qrdata2)) {
          url += 'http://';
        }
        url += this.qrdata2;
        window.location.href = url;
        // window.open(url, '_blank');
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

  usersdata(city, ip, country, os, browsername, qruserinfo, id) {

    this.webservice.postuserdata(city, ip, country, os, browsername, qruserinfo, id);

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
  }
} 