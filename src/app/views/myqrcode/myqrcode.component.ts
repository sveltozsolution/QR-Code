import { Component } from '@angular/core';
import { WebService } from 'app/web.service';

@Component({
  templateUrl: 'myqrcode.component.html',
  providers :[WebService]
})
export class MyqrcodeComponent {
  items = [];
  
  constructor(private webservice: WebService) { }

  ngOnInit() {
    // this.initializevariable();
    debugger;
   
        this.bindqrcode();
        // this.username = localStorage.getItem("firstname");
    }
    bindqrcode() {
      this.webservice.getallqrcode().subscribe(qrcode => {
          this.dynamicjsondata(qrcode);
      })
  }
  dynamicjsondata(qrcode) {

    this.items = [];
    var fullname = "";

    for (var i = (qrcode.length - 1); i >= 0; i--) {

        var dynamicpath = "";

        if (qrcode[i].qrtype == "contact") {
            debugger;

            var jsondata = qrcode[i].qrdata;
            const values = Object.keys(jsondata).map(key => jsondata[key]).map(x => x.substr(0, x.length - 4));
            const commaJoinedValues = values.join(',');
            console.log(commaJoinedValues);
            fullname = values[0] + ' ' + values[1];

            // var dynamicpath = "http://localhost:4200/dynamic/" + qrcode[i]._id;
            dynamicpath = "https://aniruddhasveltoz.github.io/qr-generator/dynamic/" + qrcode[i]._id;
        } else {
            dynamicpath = qrcode[i].qrdata;
        }

        this.items.push({ 'id': qrcode[i]._id, 'name': fullname, 'generateddate': qrcode[i].generateddate, 'qrtype': qrcode[i].qrtype, 'path': dynamicpath })
    }

}
}
  

