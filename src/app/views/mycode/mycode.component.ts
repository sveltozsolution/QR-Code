import { Component } from '@angular/core';
import { WebService } from 'app/web.service';


@Component({
  templateUrl: 'mycode.component.html',
  providers:[WebService]
})
export class MycodeComponent {
 
    
      items = [];
    public primaryModal;
    id: string = "";

    
  

    contactid: string;
    editcontactsection: boolean = true;

    userid: string = "";
    //show the signin and signout button
    signin: boolean = true;
    signout: boolean = false;
    mydatasection: boolean = false;

    //edit url variable
    eurl: string = "";
    urlid: string;

    qrtype: string = "url";
    qrdata: string = "";


    constructor(private webservice: WebService) { }

    ngOnInit() {
        debugger;

        this.bindqrcode();
        this.userid = localStorage.getItem("userid");

        if (this.userid == null) {
            this.signin = true;
            this.signout = false;
            this.mydatasection = false;

        } else {
            this.signout = true;
            this.signin = false;
            this.mydatasection = true;

        }
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

            // if (qrcode[i].qrtype == "contact") {
            //     debugger;

            //     var jsondata = qrcode[i].qrdata;
            //     const values = Object.keys(jsondata).map(key => jsondata[key]).map(x => x.substr(0, x.length - 4));
            //     const commaJoinedValues = values.join(',');
            //     console.log(values);
            //     // fullname = values[0] + ' ' + values[1];
            //     fullname = values[0] + ' ' + values[1];

            //     var dynamicpath = "http://localhost:4200/dynamic/" + qrcode[i]._id;
            //     // dynamicpath = "https://aniruddhasveltoz.github.io/qr-generator/dynamic/" + qrcode[i]._id;
            // }
            // else {
            //     dynamicpath = qrcode[i].qrdata;
            // }
            debugger;
            dynamicpath = qrcode[i].qrdata;
            //this.items.push({ 'id': qrcode[i]._id, 'name': fullname, 'qrtype': qrcode[i].qrtype, 'path': dynamicpath })
        }
    }

    


}
