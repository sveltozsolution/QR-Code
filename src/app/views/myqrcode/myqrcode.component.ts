import { Component, ElementRef, ViewChild } from '@angular/core';
import { WebService } from 'app/web.service';
import { ModalDirective } from 'ngx-bootstrap/modal/modal.component';
import { QRCodeComponent } from 'angular2-qrcode';

@Component({
    templateUrl: 'myqrcode.component.html',
    providers: [WebService]
})
export class MyqrcodeComponent {
    items = [];
    public primaryModal;
    id: string = "";


    @ViewChild('qrcode') qrcode_download: QRCodeComponent;

    //Edit Contact variables
    efirstname: string = "";
    efamilyname: string = "";
    ejobtitle: string = "";
    ecompany: string = "";
    ephonedirect: string = "";
    ephonework: string = "";
    ephonehome: string = "";
    efax: string = "";
    eemail: string = "";
    econtacturl: string = "";
    estreet: string = "";
    ecity: string = "";
    ezip: string = "";
    estate: string = "";
    ecountry: string = "";
    efacebook: string = "";
    etwitter: string = "";
    epinterest: string = "";
    elinkedin: string = "";

    contactid: string;
    editcontactsection: boolean = true;

    userid: string = "";
    //show the signin and signout button
    // signin: boolean = true;
    // signout: boolean = false;
    // mydatasection: boolean = false;

    //edit url variable
    eurl: string = "";
    urlid: string;

    qrtype: string = "url";
    qrdata: string = "";


    constructor(private webservice: WebService) { }

    ngOnInit() {
        // this.id = "5a98e67f95673611dc9b2e42" //coupon
        //this.id= "5a978a08d81ac815f84ef999" //youtube

        this.initializecontactvariable();
        this.bindqrcode();
        this.userid = localStorage.getItem("userid");

        // if (this.userid == null) {
        //     this.signin = true;
        //     this.signout = false;
        //     this.mydatasection = false;

        // } else {
        //     this.signout = true;
        //     this.signin = false;
        //     this.mydatasection = true;

        // }
        // this.username = localStorage.getItem("firstname");
    }

    initializecontactvariable() {
        this.efirstname = "";
        this.efamilyname = "";
        this.ejobtitle = "";
        this.ecompany = "";
        this.ephonedirect = "";
        this.ephonework = "";
        this.ephonehome = "";
        this.efax = "";
        this.eemail = "";
        this.econtacturl = "";
        this.estreet = "";
        this.ecity = "";
        this.ezip = "";
        this.estate = "";
        this.ecountry = "";
        this.efacebook = "";
        this.etwitter = "";
        this.epinterest = "";
        this.elinkedin = "";
    }

    bindqrcode() {
        debugger;
        this.webservice.getallqrcode().subscribe(qrcode => {

            this.dynamicjsondata(qrcode);
        })
    }

    dynamicjsondata(qrcode) {

        this.items = [];
        var fullname = "";
        var urldata = "";
        for (var i = (qrcode.length - 1); i >= 0; i--) {
            var dynamicpath = "";
            var qrstatus = true;
            if (qrcode[i].qrtype == "contact") {

                var jsondata = qrcode[i].qrdata;
                const values = Object.keys(jsondata).map(key => jsondata[key]).map(x => x.substr(0, x.length - 4));
                const commaJoinedValues = values.join(',');
                console.log(values);
                fullname = values[0] + ' ' + values[1];
                urldata = "";

                var dynamicpath = "https://sveltozsolution.github.io/QR-Code/dynamicdata/" + qrcode[i]._id;
               // var dynamicpath = "http://localhost:4200/dynamicdata/" + qrcode[i]._id;
            }

            else if (qrcode[i].qrtype == "url") {
                 var dynamicpath = "https://sveltozsolution.github.io/QR-Code/dynamicdata/" + qrcode[i]._id;
                //var dynamicpath = "http://localhost:4200/dynamicdata/" + qrcode[i]._id;
                urldata = qrcode[i].qrdata;
            }

            else if (qrcode[i].qrtype == "Coupon") {
                 var dynamicpath = "https://sveltozsolution.github.io/QR-Code/dynamicdata/" + qrcode[i]._id;
               // var dynamicpath = "http://localhost:4200/dynamicdata/" + qrcode[i]._id;
                //  urldata = qrcode[i].qrdata;
            }

            else {

                dynamicpath = qrcode[i].qrdata;
                urldata = "";
                qrstatus=false;
            }

            this.items.push({ 'id': qrcode[i]._id, 'name': fullname, 'urldata': urldata, 'generateddate': qrcode[i].generateddate, 'qrtype': qrcode[i].qrtype, 'path': dynamicpath, 'qrstatus': qrstatus })
        }
    }

    Editurl(id) {

        this.eurl = " ";
        this.urlid = id;
        this.webservice.getqrcode(this.urlid).subscribe(qrcode => {
            this.qrtype = "url";
            this.eurl = qrcode.qrdata;
            console.log(this.qrdata);
        })
    }

    updateurl() {

        var currentdate = new Date();
        var generateddate = currentdate.toLocaleDateString();
        var userid = this.userid;
        var qrtype = "url";
        var qrdata = this.eurl;
        this.webservice.Updateqrcode(this.urlid, generateddate, userid, qrtype, qrdata);
        window.location.reload();

    }

    // Editcontact(id) {
    //     this.initializecontactvariable();
    //     this.contactid = id;
    //     this.webservice.getqrcode(this.contactid).subscribe(qrcode => {
    //         this.editcontactsection = true;
    //         this.qrtype = "contact";
    //         //this.getvalues(qrcode.qrdata);
    //     })
    // }

    // getvalues(qrdata) {

    //     var jsonobj = JSON.parse(qrdata);

    //     // console.log("json keys");
    //     var keys = Object.keys(jsonobj);
    //     console.log(keys);

    //     // console.log("json values");
    //     var values = values.join(jsonobj);
    //     console.log(values);

    //     // console.log("json key values");
    //     for (var j = 0; j <= keys.length - 1; j++) {
    //         var objkey = keys[j];

    //         if (objkey == "First Name") {
    //             this.efirstname = values[j];
    //         }
    //         else if (objkey == "Family Name") {
    //             this.efamilyname = values[j];
    //         }
    //         else if (objkey == "Job Title") {
    //             this.ejobtitle = values[j];
    //         }
    //         else if (objkey == "Company") {
    //             this.ecompany = values[j];
    //         }
    //         else if (objkey == "PhoneDirect") {
    //             this.ephonedirect = values[j];
    //         }
    //         else if (objkey == "PhoneWork") {
    //             this.ephonework = values[j];
    //         }
    //         else if (objkey == "PhoneHome") {
    //             this.ephonehome = values[j];
    //         }
    //         else if (objkey == "Fax") {
    //             this.efax = values[j];
    //         }
    //         else if (objkey == "Email") {
    //             this.eemail = values[j];
    //         }
    //         else if (objkey == "URL") {
    //             this.econtacturl = values[j];
    //         }
    //         else if (objkey == "Street") {
    //             this.estreet = values[j];
    //         } else if (objkey == "City") {
    //             this.ecity = values[j];
    //         }
    //         else if (objkey == "Zip") {
    //             this.ezip = values[j];
    //         }
    //         else if (objkey == "state") {
    //             this.estate = values[j];
    //         }
    //         else if (objkey == "Country") {
    //             this.ecountry = values[j];
    //         } else if (objkey == "Facebook") {
    //             this.efacebook = values[j];
    //         } else if (objkey == "Twitter") {
    //             this.etwitter = values[j];
    //         } else if (objkey == "Pinterest") {
    //             this.epinterest = values[j];
    //         }
    //         else {
    //             this.elinkedin = values[j];
    //         }
    //     }
    // }


    DownloadQRCodeAsJPG(item) {
        debugger
        //@ViewChild('qrcode') : QRCodeComponent;

        //  @ViewChild('qrcode') qrcode1: QRCodeComponent;
        let el: ElementRef = this.qrcode_download['elementRef'];
        let html: string = el.nativeElement.innerHTML;
        let img64: string = html.substr(0, html.length - 2).split('base64,')[1];

        let a = document.createElement("a");
        a.href = 'data:application/octet-stream;base64,' + img64;
        a.download = 'qrcode.jpg';
        a.click();
    }

    DownloadQRCodeAsEPS() {
        //@ViewChild('qrcode') : QRCodeComponent;

        //  @ViewChild('qrcode') qrcode1: QRCodeComponent;
        let el: ElementRef = this.qrcode_download['elementRef'];
        let html: string = el.nativeElement.innerHTML;
        let img64: string = html.substr(0, html.length - 2).split('base64,')[1];

        let a = document.createElement("a");
        a.href = 'data:application/octet-stream;base64,' + img64;
        a.download = 'qrcode.eps';
        a.click();
    }

    DownloadQRCodeAsPDF() {
        //@ViewChild('qrcode') : QRCodeComponent;

        //  @ViewChild('qrcode') qrcode1: QRCodeComponent;
        let el: ElementRef = this.qrcode_download['elementRef'];
        let html: string = el.nativeElement.innerHTML;
        let img64: string = html.substr(0, html.length - 2).split('base64,')[1];

        let a = document.createElement("a");
        a.href = 'data:application/octet-stream;base64,' + img64;
        a.download = 'qrcode.pdf';
        a.click();
    }

    //print QRCode image
    printcode() {

        let printContents, popupWin;
        printContents = document.getElementById('print-section').innerHTML;
        popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
        popupWin.document.open();
        popupWin.document.write(`
          <html>
            <head>
              <title>Qr Code</title>
              <style>
              //........Customized style.......
              </style>
            </head>
        <body onload="window.print();window.close()">${printContents}</body>
          </html>`
        );
        popupWin.document.close();
    }

}


