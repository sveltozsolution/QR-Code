import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WebService } from 'app/web.service';

@Component({
    templateUrl: 'forms.component.html',
    providers: [WebService]
})
export class FormsComponent {

    totalitems: number;
    items = [];
    qrdata: string = "";

    username: string = "";

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

    qrtype: string = "url";
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
    // defaultqrimage: boolean = true;
    editcontactsection: boolean = true;

    mydatasection: boolean = false;
    othersection: boolean = true;

    //color on button 
    staticbutton: boolean = true;
    dynamicbutton: boolean = false;

    //required field message
    messageurlfield: boolean = false;
    messagecontactfield: boolean = false;
    messagephonefield: boolean = false;
    messagetextfield: boolean = false;
    messagevcardfield: boolean = false;
    messagesmsfield: boolean = false;

    //show the signin and signout button
    signin: boolean = true;
    signout: boolean = false;


    constructor(private router: Router, private webservice: WebService) { }

    ngOnInit() {
        // this.initializevariable();
        debugger;
        this.userid = localStorage.getItem("userid");

        if (this.userid == null) {
            this.signin = true;
            this.signout = false;
        } else {
            this.signout = true;
            this.signin = false;

            // this.bindqrcode();
            this.username = localStorage.getItem("firstname");
        }
    }

    bindqrcode() {
        this.webservice.getallqrcode().subscribe(qrcode => {
            // this.dynamicjsondata(qrcode);
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
                var jsonobj = JSON.parse(jsondata);
                var keys = Object.keys(jsonobj);
                var values = values(jsonobj);
                fullname = values[0] + ' ' + values[1];

                // var dynamicpath = "http://localhost:4200/dynamic/" + qrcode[i]._id;
                dynamicpath = "https://aniruddhasveltoz.github.io/qr-generator/dynamic/" + qrcode[i]._id;
            } else {
                dynamicpath = qrcode[i].qrdata;
            }

            this.items.push({ 'id': qrcode[i]._id, 'name': fullname, 'generateddate': qrcode[i].generateddate, 'qrtype': qrcode[i].qrtype, 'path': dynamicpath })
        }

    }


    qrstatusclick() {

        if (this.urlsection || this.contactsection) {

            if (this.qrstatus == "Static") {
                this.qrstatus = "Dynamic";
                this.qrstatus_dynamic = true;
                this.qrstatus_static = false;

                this.dynamicbutton = true;
                this.staticbutton = false;

            } else {
                this.qrstatus = "Static";
                this.qrstatus_dynamic = false;
                this.qrstatus_static = true;

                this.dynamicbutton = false;
                this.staticbutton = true;
            }
        } else {
            this.qrstatus = "Static";
            this.qrstatus_dynamic = false;
            this.qrstatus_static = true;

            this.dynamicbutton = false;
            this.staticbutton = true;
        }

        console.log("in status click method");
        console.log(this.qrstatus);
    }


    Qrtypeclick(qrcodetype) {
        // this.generateqrimage = false;
        // this.defaultqrimage = true;

        this.dynamicbutton = false;
        this.staticbutton = true;

        if (qrcodetype == "url") {
            this.urlsection = true;

            this.contactsection = false;
            this.phonesection = false;
            this.smssection = false;
            this.textsection = false;
            this.vcardsection = false;
            // this.mydatasection = false;
            // this.othersection = true;

            this.dynamicbutton = true;
            this.staticbutton = false;
        }
        else if (qrcodetype == "contact") {

            this.contactsection = true;

            this.urlsection = false;
            this.phonesection = false;
            this.smssection = false;
            this.textsection = false;
            this.vcardsection = false;
            // this.mydatasection = false;
            // this.othersection = true;

            this.dynamicbutton = true;
            this.staticbutton = false;

            //     this.qrstatus = "Dynamic";
        }
        else if (qrcodetype == "phone") {
            this.phonesection = true;

            this.urlsection = false;
            this.contactsection = false;
            this.smssection = false;
            this.textsection = false;
            this.vcardsection = false;
            // this.mydatasection = false;
            //     this.othersection = true;

            //     this.qrstatus = "Static";

        }
        else if (qrcodetype == "sms") {
            this.smssection = true;

            this.urlsection = false;
            this.contactsection = false;
            this.phonesection = false;
            this.textsection = false;
            this.vcardsection = false;
            // this.mydatasection = false;
            //     this.othersection = true;

            //     this.qrstatus = "Static";
        }
        else if (qrcodetype == "text") {
            this.textsection = true;

            this.urlsection = false;
            this.contactsection = false;
            this.phonesection = false;
            this.smssection = false;
            this.vcardsection = false;
            // this.mydatasection = false;
            // this.othersection = true;

            // this.qrstatus = "Static";
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
            // this.mydatasection = false;
            //     this.othersection = true;

            //     this.qrstatus = "Static";

        }

    }


    Generate() {

        debugger;
        this.generateqrimage = true;
        // this.defaultqrimage = false;

        var currentdate = new Date();
        var generateddate = currentdate.toLocaleDateString();
        var userid = this.userid;
        var qrtype = "";

        if (this.urlsection) {
            if (this.url == "") {
                this.messageurlfield = true;
                this.generateqrimage = false;
            } else {
                this.messageurlfield = false;
                this.qrdata = this.url;
                qrtype = "url";
            }
        } else if (this.contactsection) {
            qrtype = "contact";
            if (this.firstname == "" || this.familyname == "") {
                this.messagecontactfield = true;
                this.generateqrimage = false;
            }
            else {
                this.messagecontactfield = false;
                this.createJson();
            }
        } else if (this.phonesection) {
            if (this.phoneno == "") {
                this.messagephonefield = true;
                this.generateqrimage = false;
            } else {
                this.messagephonefield = false;
                this.generateqrimage = true;
                this.qrdata = this.phoneno;
            }
        }
        else if (this.vcardsection) {
            if (this.vfirstname == "" && this.vfamilyname == "") {
                this.messagevcardfield = true;
                this.generateqrimage = false;
            } else {
                this.messagevcardfield = false;
                this.generateqrimage = true;
                this.createJson();
            }


        } else if (this.smssection) {
            if (this.mobileno == "" && this.message == "") {
                this.messagesmsfield = true;
                this.generateqrimage = false;
            } else {
                this.messagesmsfield = false;
                this.generateqrimage = true;
                this.createJson();
            }
        } else if (this.textsection) {
            if (this.text == "") {
                this.messagetextfield = true;
                this.generateqrimage = false;
            }
            else {
                this.messagetextfield = false;
                this.generateqrimage = true;
                this.qrdata = this.text;
            }
        }
        else {
            this.createJson();
        }
        if (this.qrstatus == "Dynamic") {
            if (this.signin == true) {
                //this.router.navigate(['login']);
            }
            else {
                console.log("adding dynamic");
                // if (this.messagerequiredfield == false) {
                //     this.webservice.generatecode(generateddate, userid, qrtype, this.qrdata);
                // }

                this.webservice.generatecode(generateddate, userid, qrtype, this.qrdata);
            }
        }
        else {
            console.log("adding static");
            if (this.smssection || this.contactsection || this.vcardsection) {
                this.staticjsondata(this.qrdata);
            }
            this.staticqrcode = this.qrdata;
            this.webservice.generatecode(generateddate, userid, qrtype, this.qrdata);

        }

        // this.qrElement = <HTMLVideoElement>document.getElementById("saticqr");
    }

    staticjsondata(qrdata) {
        var jsondata = qrdata;

        var jsonobj = JSON.parse(jsondata);
        var keys = Object.keys(jsonobj);
        // var values = Object.values(jsonobj)
        var values = values.join(jsonobj)
        qrdata = "";

        for (var j = 0; j <= keys.length - 1; j++) {
            var objkey = keys[j];
            qrdata += values[j] + '\n'

        }
        this.qrdata = qrdata;

    }

    createJson() {
        var Jsonobj = "";

        if (this.smssection) {
            Jsonobj = '{'
                + '"Mobile No." : "' + this.mobileno + '",'
                + '"Message" : "' + this.message + '"'
                + '}';
        }
        else if (this.contactsection) {
            Jsonobj = '{'
                + '"First Name" : "' + this.firstname + '",'
                + '"Family Name" : "' + this.familyname + '",'
                + '"Job Title" : "' + this.jobtitle + '",'
                + '"Company" : "' + this.company + '",'
                + '"PhoneDirect" : "' + this.phonedirect + '",'
                + '"PhoneWork" : "' + this.phonework + '",'
                + '"PhoneHome" : "' + this.phonehome + '",'
                + '"Fax" : "' + this.fax + '",'
                + '"Email" : "' + this.email + '",'
                + '"URL" : "' + this.contacturl + '",'
                + '"Street" : "' + this.street + '",'
                + '"City" : "' + this.city + '",'
                + '"state" : "' + this.state + '",'
                + '"Zip" : "' + this.zip + '",'
                + '"Country" : "' + this.country + '",'
                + '"Facebook" : "' + this.facebook + '",'
                + '"Twitter" : "' + this.twitter + '",'
                + '"Pinterest" : "' + this.pinterest + '",'
                + '"LinkedIn" : "' + this.linkedin + '"'

                + '}';
        }
        else {
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
                + '"Zip" : "' + this.vzip + '",'
                + '"Country" : "' + this.vcountry + '"'
                + '}';
        }

        this.qrdata = Jsonobj;
    }
}




