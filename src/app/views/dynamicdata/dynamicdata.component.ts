import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebService } from '../../web.service';
import { ActivatedRoute } from '@angular/router';
import { Ng2DeviceService } from 'ng2-device-detector';

@Component({
  selector: 'app-dynamicdata',
  templateUrl: './dynamicdata.component.html',
  styleUrls: ['./dynamicdata.component.css'],
  providers: [WebService]

})

export class DynamicdataComponent implements OnInit {
  qrcodeid: string = "";
  qrdata: string = "";
  deviceInfo = null;
  id: string;
  private sub: any;

  constructor(private webservice: WebService, private route: ActivatedRoute, private deviceService: Ng2DeviceService) {
    this.epicFunction();
   }

   epicFunction() {
      console.log('hello `Dynamic` component');
      this.deviceInfo = this.deviceService.getDeviceInfo();
      console.log(this.deviceInfo);
      alert(this.deviceInfo);
    }

  ngOnInit() {
    debugger;
    this.sub = this.route.params.subscribe(params => {
      debugger;
       this.id = params['id']; // (+) converts string 'id' to a number

       // In a real app: dispatch action to load the details here.
    });
    this.Getid();

  }

  Getid() {
   debugger;
    //const id: string = this.route.snapshot.params['id'];
    //this.qrcodeid = "5a70385edde3db2734300ae0";
    console.log("qrcodeid value");
    console.log(this.id);
    this.webservice.getqrcode(this.id).subscribe(qrcode => {
      this.qrdata = JSON.parse(qrcode.qrdata);
      console.log("json data");
      console.log(this.qrdata);
    });
  }

  keys() {
    return Object.keys(this.qrdata);
  }

}
