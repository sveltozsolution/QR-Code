import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { WebService } from 'app/web.service';
import { Ng2DeviceService } from 'ng2-device-detector';
import { QRCodeComponent } from 'angular2-qrcode';

@Component({
    templateUrl: 'home.component.html',
    providers: [WebService, Ng2DeviceService]
})
export class HomeComponent {
    demoarr: Array<any> = [];

    @ViewChild('qrcode') qrcode_download: QRCodeComponent;

    //device location
    deviceInfo = null;
    device: string = "";
    language: string = "";
    browsername = "";
    browserversion = "";
    os = "";
    osversion = "";
    ua = "";
    usseragent = "";
    ismobile = "";
    isdekstop: boolean;
    istab = "";
    getDeviceInfo = "";
    qrinfo = "";

    totalitems: number;
    items = [];
    qrdata: string = "";

    //color change for qrocde
    favcolor: string;
    qrfrontcolor: string;
    favcolorbk: string;
    qrbackcolor: string;

    //  username: string = "";

    loginvalid;
    // url variable
    url: string = "";

    // contact variable
    firstname: string = "";
    familyname: string = "";
    linkedin: string = "";
    pinterest: string = "";
    twitter: string = "";
    facebook: string = "";
    phonehome: string = "";
    fax: string = "";
    phonework: string = "";
    company: string = "";
    jobtitle: string = "";
    street: string = "";
    zip: string = "";
    city: string = "";
    state: string = "";
    country: string = "";
    phonedirect: string = "";
    email: string = "";
    contacturl: string = "";

    // sms variable
    phoneno = "";

    // sms variable
    mobileno = "";
    message = "";

    // text variable
    text = "";

    //vcard section
    vfirstname = "";
    vfamilyname = "";
    vcompany = "";
    vtitle = "";
    vphoneno = "";
    vemail = "";
    vwebsite = "";
    vstreet = "";
    vcity = "";
    vstate = "";
    vzip = "";
    vcountry = "";

    //coupon section
    ctitle = "";
    cdiscount = "";
    cwebsite = "";
    cpromocode = "";
    coffer = "";
    cterms = "";
    cdate = "";

    qrtype: string = "";
    qrstatus: string = "Static";
    qrstatus_static: boolean = true;
    qrstatus_dynamic: boolean = false;

    // boolean variable for which section should open
    urlsection: boolean = true;
    contactsection: boolean = false;
    phonesection: boolean = false;
    smssection: boolean = false;
    textsection: boolean = false;
    vcardsection: boolean = false;
    couponsection: boolean = false;

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

    //edit url variable
    eurl: string = "";
    urlid: string;



    //boolean variable for static or Dynamic
    staticqrcode: String = "";
    userid: string = "";


    contactid: string;
    generateqrimage: boolean = false;
    defaultqrimage: boolean = true;

    editcontactsection: boolean = true;

    mydatasection: boolean = true;
    othersection: boolean = true;

    //color on button
    // staticbutton: boolean = true;
    // dynamicbutton: boolean = false;

    //required field message
    messageurlfield: boolean = false;
    messagecontactfield: boolean = false;
    messagephonefield: boolean = false;
    messagetextfield: boolean = false;
    messagevcardfield: boolean = false;
    messagesmsfield: boolean = false;
    messagecouponfield: boolean = false;

    //show the signin and signout button
    signin: boolean = true;
    signout: boolean = false;
    QRcd_id:string;


    constructor(private router: Router, private webservice: WebService, private deviceService: Ng2DeviceService) { }

    ngOnInit() {

        this.router.navigateByUrl("http://localhost:4200/dynamicdata/111");
        this.initializevariable();

        this.userid = localStorage.getItem("userid");

        if (this.userid == null) {
            this.signin = true;
            this.signout = false;
        } else {
            this.signout = true;
            this.signin = false;
            //  this.username = localStorage.getItem("firstname");
        }

        this.epicFunction();
        if (this.isdekstop) {
            this.device = "desktop";
        } else if (this.istab) {
            this.device = "tab";
        } else {
            this.device = "mobile";
        }
        this.language = "Language of the browser: " + navigator.language;

    }

    initializevariable() {
        this.qrdata = "";

        // url variable
        this.url = "";

        // contact variable
        this.firstname = "";
        this.familyname = "";
        this.jobtitle = "";
        this.company = "";
        this.phonework = "";
        this.phonehome = "";
        this.fax = "";
        this.street = "";
        this.zip = "";
        this.city = "";
        this.state = "";
        this.country = "";
        this.facebook = "";
        this.twitter = "";
        this.pinterest = "";
        this.linkedin = "";
        this.phonedirect = "";
        this.email = "";
        this.contacturl = "";

        // sms variable
        this.mobileno = "";
        this.message = "";

        // sms variable
        this.phoneno = "";

        // text variable
        this.text = "";

        //coupon variable
        this.ctitle = "";
        this.cdate = "";
        this.cdiscount = "";
        this.coffer = "";
        this.cwebsite = "";
        this.cpromocode = "";
        this.cterms = "";


        this.qrtype = "url";
        this.qrstatus = "Static";
        this.urlsection = true;
        this.contactsection = false;
        this.phonesection = false;
        this.smssection = false;
        this.textsection = false;
        this.vcardsection = false;
        this.mydatasection = false;

    }


    qrstatusclick() {

        if (this.urlsection || this.contactsection || this.couponsection)  {

            if (this.qrstatus == "Static") {
                this.qrstatus = "Dynamic";
                this.qrstatus_dynamic = true;
                this.qrstatus_static = false;

            } else {
                this.qrstatus = "Static";
                this.qrstatus_dynamic = false;
                this.qrstatus_static = true;
            }
        } else {
            this.qrstatus = "Static";
            this.qrstatus_dynamic = false;
            this.qrstatus_static = true;

        }
        console.log("in status click method");
        console.log(this.qrstatus);
    }


    Qrtypeclick(qrcodetype) {
        this.generateqrimage = false;
        this.defaultqrimage = true;

        if (qrcodetype == "url") {
            this.urlsection = true;

            this.contactsection = false;
            this.phonesection = false;
            this.smssection = false;
            this.textsection = false;
            this.vcardsection = false;
            this.couponsection = false;
            // this.mydatasection = false;
            this.othersection = true;

        }
        else if (qrcodetype == "contact") {

            this.contactsection = true;

            this.urlsection = false;
            this.phonesection = false;
            this.smssection = false;
            this.textsection = false;
            this.vcardsection = false;
            this.couponsection = false;
            this.othersection = true;


            // this.mydatasection = false;
            // this.othersection = true;
            // this.qrstatus = "Dynamic";
        }
        else if (qrcodetype == "phone") {
            this.phonesection = true;

            this.urlsection = false;
            this.contactsection = false;
            this.smssection = false;
            this.textsection = false;
            this.vcardsection = false;
            this.couponsection = false;
            this.othersection = true;

            // this.mydatasection = false;
            //     this.othersection = true;

            this.qrstatus = "Static";

        }
        else if (qrcodetype == "sms") {
            this.smssection = true;

            this.urlsection = false;
            this.contactsection = false;
            this.phonesection = false;
            this.textsection = false;
            this.vcardsection = false;
            this.couponsection = false;
            this.othersection = true;

            // this.mydatasection = false;
            // this.othersection = true;

            this.qrstatus = "Static";
        }
        else if (qrcodetype == "text") {
            this.textsection = true;

            this.urlsection = false;
            this.contactsection = false;
            this.phonesection = false;
            this.smssection = false;
            this.vcardsection = false;
            this.couponsection = false;
            this.othersection = true;
            // this.mydatasection = false;
            this.qrstatus = "Static";
        }

        else if (qrcodetype == "coupon") {
            this.couponsection = true;

            this.urlsection = false;
            this.contactsection = false;
            this.phonesection = false;
            this.smssection = false;
            this.vcardsection = false;
            this.textsection = false;
            this.mydatasection = false;
            // this.othersection = true;
            this.othersection = true;

        }

        // else if (qrcodetype == "showdata") {
        //     this.mydatasection = true;

        //     this.textsection = false;
        //     this.urlsection = false;
        //     this.contactsection = false;
        //     this.phonesection = false;
        //     this.smssection = false;
        //     this.vcardsection = false;
        //     this.othersection = false;
        // }

        else {
            this.vcardsection = true;
            this.urlsection = false;
            this.contactsection = false;
            this.phonesection = false;
            this.smssection = false;
            this.textsection = false;
            this.couponsection = false;
            this.othersection = true;
            // this.mydatasection = false;
            this.qrstatus = "Static";
        }
    }


    Generate() {
        debugger;
        this.generateqrimage = true;
        this.defaultqrimage = false;
        var currentdate = new Date();
        var generateddate = currentdate.toLocaleDateString();
        var userid = this.userid;
        var qrtype = "";

        if (this.urlsection) {
            if (this.url == "") {
                this.messageurlfield = true;
                this.generateqrimage = false;
                this.defaultqrimage = true;
            } else {
                this.messageurlfield = false;
                this.qrdata = this.url;
                qrtype = "url";
            }
        } else if (this.contactsection) {
            if (this.firstname == "" || this.familyname == "") {
                this.messagecontactfield = true;
                this.generateqrimage = false;
                this.defaultqrimage = true;

            }
            else {
                this.messagecontactfield = false;
                this.createJson();
                qrtype = "contact";
                console.log(this.qrstatus)

            }
        } else if (this.phonesection) {
            if (this.phoneno == "") {
                this.messagephonefield = true;
                this.generateqrimage = false;
                this.defaultqrimage = true;

            } else {
                this.messagephonefield = false;
                this.generateqrimage = true;
                this.qrdata = this.phoneno;
                qrtype = "phone";
            }
        }
        else if (this.vcardsection) {
            if (this.vfirstname == "" && this.vfamilyname == "") {
                this.messagevcardfield = true;
                this.generateqrimage = false;
                this.defaultqrimage = true;

            } else {
                this.messagevcardfield = false;
                this.generateqrimage = true;
                this.createJson();
                qrtype = "vcard";

            }

        } else if (this.smssection) {
            if (this.mobileno == "" && this.message == "") {
                this.messagesmsfield = true;
                this.generateqrimage = false;
                this.defaultqrimage = true;

            } else {
                this.messagesmsfield = false;
                this.generateqrimage = true;
                this.createJson();
                qrtype = "SMS";
            }
        } else if (this.textsection) {
            if (this.text == "") {
                this.messagetextfield = true;
                this.generateqrimage = false;
                this.defaultqrimage = true;

            }
            else {
                this.messagetextfield = false;
                this.generateqrimage = true;
                this.qrdata = this.text;
                qrtype = "Text";
            }
        }

        else  {
            qrtype = "coupon";
            if (this.ctitle == "" || this.cdiscount == "") {
                this.messagecouponfield = true;
                this.generateqrimage = false;
                this.defaultqrimage = true;

            }
            else {
                this.messagecouponfield = false;
                this.createJson();
                qrtype = "Coupon";
                console.log(this.qrstatus)
                
            }
        }
      

        //for Dynamic add
        if (this.qrstatus == "Dynamic") {
            console.log("adding dynamic");
            
            // if (this.signin == true) {
            //     this.messageurlfield = false;
            //     this.messagecouponfield = false;
            //     // this.router.navigate(['pages/login']);
            // }
            // else {
            // if (this.messagerequiredfield == false) {
            // this.webservice.generatecode(generateddate, userid, qrtype, this.qrdata, this.qrinfo);
            // }
            if (this.messageurlfield == false && this.messagecontactfield == false && this.messagephonefield == false && this.messagetextfield == false && this.messagevcardfield == false && this.messagesmsfield == false && this.messagecouponfield == false) {
               
                var result = this.webservice.generatecode(generateddate, userid, qrtype, this.qrdata, this.qrinfo).subscribe(
                    qrcode => {
                        debugger;
                        this.QRcd_id=qrcode.url._id;
                        if(this.QRcd_id!="")
                        {
                            this.staticqrcode = "https://sveltozsolution.github.io/QR-Code/dynamicdata/" +this.QRcd_id;
                        }
                    });
            }
        }

        //for static add
        else {
            console.log("adding static");
            debugger;
            if (this.smssection || this.contactsection || this.vcardsection || this.couponsection) {
                this.staticjsondata(this.qrdata);
            }
            else if (this.urlsection || this.textsection || this.phonesection) {
                this.qrdata = this.qrdata;
            }

            if (this.messageurlfield == false && this.messagecontactfield == false && this.messagephonefield == false && this.messagetextfield == false && this.messagevcardfield == false && this.messagesmsfield == false && this.messagecouponfield == false) {
                // this.staticqrcode = '{' + 'Type :' + qrtype + 'Data :' +'[' + this.qrdata +']' + '}';
                this.staticqrcode = this.qrdata;

                this.webservice.generatecode(generateddate, userid, qrtype, this.qrdata, this.qrinfo);
            }
        }
        // this.qrElement = <HTMLVideoElement>document.getElementById("saticqr");
    }

    // staticjsondata(qrdata) {
    //     debugger;
    //     var jsondata = qrdata;

    //     var jsonobj = JSON.parse(jsondata);
    //     var keys = Object.keys(jsonobj);
    //     var values = Object. (jsonobj);
    //     // var values = Object.isExtensible(jsonobj)
    //     // var values = values.join(jsonobj)
    //     qrdata = "";



    //     for (var j = 0; j <= keys.length - 1; j++) {
    //         var objkey = keys[j];
    //         qrdata += values[j] + '\n'

    //     }
    //     this.qrdata = qrdata;
    // }

    staticjsondata(qrdata) {
        debugger
        // let qrdata1: any;
        const jsondata = qrdata;
        const values = Object.keys(qrdata).map(key => qrdata[key]).map(x => x.substr(0, x.length - 4));
        const commaJoinedValues = values.join(',');
        console.log(qrdata);

        // if (this.couponsection) {
        //     debugger;
        //     this.qrtype = "Coupon";
        //     var ctitle = qrdata.Title
        //     var cdiscount = qrdata.Discount
        //     var cwebsite = qrdata.Website
        //     var cpromocode = qrdata["Promo Code"]
        //     var coffer = qrdata.Offer
        //     var cterms = qrdata.Terms
        //     var cdate = qrdata["Expiry Date"]

        //     qrdata1 = this.qrtype + '\n' +
        //         'Title :' + qrdata.Title + '\n' +
        //         'Discount :' + qrdata.Discount + '\n' +
        //         'Website :' + qrdata.Website + '\n' +
        //         'Promo Code :' + qrdata["Promo Code"] + '\n' +
        //         'Offer :' + qrdata.Offer + '\n' +
        //         'Terms :' + qrdata.Terms + '\n' +
        //         'Expiry Date :' + qrdata["Expiry Date"];

        //     alert(qrdata1);
        // }

    }

    createJson() {
        var Jsonobj = "";

        if (this.smssection) {
            debugger;
            Jsonobj = '{'
                + '"Mobile No." : "' + this.mobileno + '",'
                + '"Message" : "' + this.message + '"'
                + '}';
        }
        else if (this.contactsection) {

            Jsonobj = '{'
                + '"First Name" : "' + this.firstname + '",'
                + '"Family Name" : "' + this.familyname + '",'
                + '"Job Title": "' + this.jobtitle + '",'
                + '"Company" : "' + this.company + '",'
                + '"PhoneDirect" : "' + this.phonedirect + '",'
                + '"PhoneWork" : "' + this.phonework + '",'
                + '"PhoneHome": "' + this.phonehome + '",'
                + '"Fax" : "' + this.fax + '",'
                + '"Email": "' + this.email + '",'
                + '"URL" : "' + this.contacturl + '",'
                + '"Street" : "' + this.street + '",'
                + '"City" : "' + this.city + '",'
                + '"state" : "' + this.state + '",'
                + '"Zip": "' + this.zip + '",'
                + '"Country" : "' + this.country + '",'
                + '"Facebook" : "' + this.facebook + '",'
                + '"Twitter" : "' + this.twitter + '",'
                + '"Pinterest" : "' + this.pinterest + '",'
                + '"LinkedIn" : "' + this.linkedin + '"'
                + '}';
        }

        else if (this.vcardsection) {

            Jsonobj = '{'
                + '"First Name" : "' + this.vfirstname + '",'
                + '"Family Name" : "' + this.vfamilyname + '",'
                + '"Company Name" : "' + this.vcompany + '",'
                + '"Title Within Company" : "' + this.vtitle + '",'
                + '"Phone No" : "' + this.vphoneno + '",'
                + '"Email" : "' + this.vemail + '",'
                + '"Website" : "' + this.vwebsite + '",'
                + '"Street" : "' + this.vstreet + '",'
                + '"City" : "' + this.vcity + '",'
                + '"State" : "' + this.vstate + '",'
                + '"Zip": "' + this.vzip + '",'
                + '"Country" : "' + this.vcountry + '"'
                + '}';
        }
        //coupon section
        else {
            this.qrtype = "Coupon";

            Jsonobj = '{'
                + '"Title" : "' + this.ctitle + '",'
                + 'Discount : "' + this.cdiscount + '",'
                + '"Website" : "' + this.cwebsite + '",'
                + '"Promo Code" : "' + this.cpromocode + '",'
                + '"Offer" : "' + this.coffer + '",'
                + '"Terms" : "' + this.cterms + '",'
                + '"Expiry Date" : "' + this.cdate + '"'
                + '}';
        }
        this.qrdata = Jsonobj;
    }

    //     createJsoncoupon(){
    //         debugger;
    //         this.qrtype = "Coupon";

    //         this.demoarr.push({
    //             "Title": this.ctitle,
    //             "Discount": this.cdiscount,
    //             "Website": this.cwebsite,
    //             "Promo Code": this.cpromocode,
    //             "Offer": this.coffer,
    //             "Terms": this.cterms,
    //             "Expiry Date": this.cdate,
    //         })
    //   this.qrdata = this.demoarr[0];
    //   debugger;
    //     }


    epicFunction() {

        console.log('hello `qrcode` component');
        debugger;
        this.deviceInfo = this.deviceService.getDeviceInfo();
        //    this.ismobile = this.deviceService.isMobile();
        //     this.isTablet = this.deviceService.isTablet();
        //  this.browserlang=this.deviceInfo.browserlang;
        this.browsername = this.deviceInfo.browser;
        this.os = this.deviceInfo.os;
        this.osversion = this.deviceInfo.os_version;
        this.usseragent = this.deviceInfo.userAgent;
        this.isdekstop = true;
        this.createJson1();
    }

    createJson1() {
        debugger;
        var Jsonqrinfoobj = "";
        Jsonqrinfoobj = '{'
            + '"device" : "' + this.device + '",'
            + '"language" : "' + this.language + '",'
            + '"browsername" : "' + this.browsername + '",'
            + '"browserversion" : "' + this.browserversion + '",'
            + '"os" : "' + this.os + '",'
            + '"osversion" : "' + this.osversion + '",'
            + '"usseragent" : "' + this.usseragent + '",'
            + '" getDeviceInfo" : "' + this.getDeviceInfo + '" '
            + '}'
        this.qrinfo = Jsonqrinfoobj;

    }


    DownloadQRCodeAsJPG() {
        //@ViewChild('qrcode') : QRCodeComponent;
        debugger;
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
        debugger;
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
        debugger;
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
        debugger;
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

    styleqrModal() {
        debugger;
        this.generateqrimage = true;
    }

    test() {
        this.qrfrontcolor = this.favcolor;
        this.qrbackcolor = this.favcolorbk;
    }
}