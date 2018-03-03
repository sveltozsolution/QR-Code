webpackJsonp(["myqrcode.module"],{

/***/ "../../../../../src/app/views/myqrcode/myqrcode-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyqrcodeRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__myqrcode_component__ = __webpack_require__("../../../../../src/app/views/myqrcode/myqrcode.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__myqrcode_component__["a" /* MyqrcodeComponent */],
        data: {
            title: 'Myqrcode'
        }
    }
];
var MyqrcodeRoutingModule = /** @class */ (function () {
    function MyqrcodeRoutingModule() {
    }
    MyqrcodeRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], MyqrcodeRoutingModule);
    return MyqrcodeRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/views/myqrcode/myqrcode.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Dynamic data-->\n<!-- <div *ngIf=\"mydatasection\"> -->\n  <div>\n  <div class=\"row\" style=\"margin-top:10px;\">\n    <div class=\"col-sm-3\"></div>\n    <div class=\"col-sm-6\">\n\n      <h3 style=\"background-color: #3c1e1ec2;color:white;padding-left:18px;\">My Dynamic Codes\n      </h3>\n\n    </div>\n    <div class=\"col-sm-3\"></div>\n  </div>\n  <br>\n  <div class=\"row\" *ngFor=\"let item of items\">\n    <div class=\"col-sm-3\"></div>\n    <div class=\"col-sm-6\">\n      <div class=\"row\">\n        <div id=\"wrapper\" #wrapper class=\"col-sm-4\">\n            <div id=\"print-section\">\n          <qr-code style=\"margin-left: 15px;\" [value]=\"item.path\" [size]=\"110\" #qrcode></qr-code>\n         </div>\n          <br>\n          <button type=\"button\" class=\"btn btn-sm btn-primary\" style=\"width: 110px;height:21px;\">\n            <p style=\"margin-top:-5px;\" (click)=\"DownloadQRCodeAsJPG()\">JPG</p>\n          </button>\n          <button type=\"button\" class=\"btn btn-sm btn-primary\" style=\"width:110px;height: 21px;\">\n            <p style=\"margin-top:-5px;\" (click)=\"DownloadQRCodeAsEPS()\">EPS</p>\n          </button>\n          <button type=\"button\" class=\"btn btn-sm btn-primary\" style=\"width:110px;height: 21px;\">\n            <p style=\"margin-top:-5px;\" (click)=\"DownloadQRCodeAsPDF()\">PDF</p>\n          </button>\n          <button type=\"button\" class=\"btn btn-sm btn-primary\" style=\"width:110px;height: 21px;\">\n            <p style=\"margin-top:-5px;\" (click)=\"printcode()\">Print</p>\n          </button>\n          <!-- <a style=\"margin-top:-5px;\"  [routerLink]=\"['/dashboard', item.id]\" (click)=\"sendid(item.id)\" class=\"nav-link\" href=\"/dashboard\" >Analytics</a> -->\n          \n          <a style=\"margin-top:-5px;\"  [routerLink]=\"['/dashboard', item.id]\"  class=\"nav-link\"  >Analytics</a>\n        </div>\n        <div class=\"col-sm-8 Download\">\n          <div class=\"row\">\n            <div class=\"col-sm-4\">\n              <label>{{item.generateddate | date }}</label>\n              \n            </div>\n            <div class=\"col-sm-4\">\n              <p style=\"font-size: 25px;\">{{item.name}}\n                <button *ngIf=\"item.qrtype=='contact'\" type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" (click)=\"Editcontact(item.id)\"\n                  (click)=\"contactModal.show()\" style=\"margin-left:5px;\">Edit</button>\n              </p>\n            </div>\n            <div class=\"col-sm-4\">QRType: {{item.qrtype}} \n              <p style=\"color: rgb(78, 70, 72);\">{{item.urldata}}</p>\n              <p style=\"color: green;\">{{item.path}}\n                <button *ngIf=\"item.qrtype=='url'\" type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" (click)=\"Editurl(item.id)\" (click)=\"urlModal.show()\"\n                  style=\"margin-left:5px;\">Edit</button>\n              </p>\n            </div>\n          </div>\n        </div>\n      </div>\n      <hr style=\"border:1px solid black;margin-top:4px;width:94%;\">\n    </div>\n    <div class=\"col-sm-3\"></div>\n  </div>\n</div>\n\n<!-- edit url -->\n<div bsModal #urlModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-primary\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Modal title</h4>\n        <button type=\"button\" class=\"close\" (click)=\"urlModal.hide()\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <div>\n          <input type=\"text\" [(ngModel)]=\"eurl\" class=\"form-control\">\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"urlModal.hide()\">Close</button>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"updateurl()\">Save changes</button>\n      </div>\n    </div>\n    <!-- /.modal-content -->\n  </div>\n  <!-- /.modal-dialog -->\n</div>"

/***/ }),

/***/ "../../../../../src/app/views/myqrcode/myqrcode.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyqrcodeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_web_service__ = __webpack_require__("../../../../../src/app/web.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_qrcode__ = __webpack_require__("../../../../angular2-qrcode/lib/angular2-qrcode.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MyqrcodeComponent = /** @class */ (function () {
    function MyqrcodeComponent(webservice) {
        this.webservice = webservice;
        this.items = [];
        this.id = "";
        //Edit Contact variables
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
        this.editcontactsection = true;
        this.userid = "";
        //show the signin and signout button
        // signin: boolean = true;
        // signout: boolean = false;
        // mydatasection: boolean = false;
        //edit url variable
        this.eurl = "";
        this.qrtype = "url";
        this.qrdata = "";
    }
    MyqrcodeComponent.prototype.ngOnInit = function () {
        this.initializecontactvariable();
        debugger;
        this.bindqrcode();
        // this.userid = localStorage.getItem("userid");
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
    };
    MyqrcodeComponent.prototype.initializecontactvariable = function () {
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
    };
    MyqrcodeComponent.prototype.bindqrcode = function () {
        var _this = this;
        this.webservice.getallqrcode().subscribe(function (qrcode) {
            _this.dynamicjsondata(qrcode);
        });
    };
    MyqrcodeComponent.prototype.dynamicjsondata = function (qrcode) {
        this.items = [];
        var fullname = "";
        var urldata = "";
        for (var i = (qrcode.length - 1); i >= 0; i--) {
            var dynamicpath = "";
            if (qrcode[i].qrtype == "contact") {
                var jsondata = qrcode[i].qrdata;
                var values = Object.keys(jsondata).map(function (key) { return jsondata[key]; }).map(function (x) { return x.substr(0, x.length - 4); });
                var commaJoinedValues = values.join(',');
                console.log(values);
                fullname = values[0] + ' ' + values[1];
                urldata = "";
                var dynamicpath = "http://sveltozsolution.github.io/QR-Code/dynamicdata/" + qrcode[i]._id;
                //var dynamicpath = "http://localhost:4200/dynamicdata/" + qrcode[i]._id;
            }
            else if (qrcode[i].qrtype == "url") {
                var dynamicpath = "http://sveltozsolution.github.io/QR-Code/dynamicdata/" + qrcode[i]._id;
                // var dynamicpath = "http://localhost:4200/dynamicdata/" + qrcode[i]._id;
                urldata = qrcode[i].qrdata;
            }
            else if (qrcode[i].qrtype == "Coupon") {
                var dynamicpath = "http://sveltozsolution.github.io/QR-Code/dynamicdata/" + qrcode[i]._id;
                // var dynamicpath = "http://localhost:4200/dynamicdata/" + qrcode[i]._id;
                //  urldata = qrcode[i].qrdata;
            }
            else {
                dynamicpath = qrcode[i].qrdata;
                urldata = "";
            }
            this.items.push({ 'id': qrcode[i]._id, 'name': fullname, 'urldata': urldata, 'generateddate': qrcode[i].generateddate, 'qrtype': qrcode[i].qrtype, 'path': dynamicpath });
        }
    };
    MyqrcodeComponent.prototype.Editurl = function (id) {
        var _this = this;
        debugger;
        this.eurl = " ";
        this.urlid = id;
        this.webservice.getqrcode(this.urlid).subscribe(function (qrcode) {
            _this.qrtype = "url";
            _this.eurl = qrcode.qrdata;
            console.log(_this.qrdata);
        });
    };
    MyqrcodeComponent.prototype.updateurl = function () {
        debugger;
        var currentdate = new Date();
        var generateddate = currentdate.toLocaleDateString();
        var userid = this.userid;
        var qrtype = "url";
        var qrdata = this.eurl;
        this.webservice.Updateqrcode(this.urlid, generateddate, userid, qrtype, qrdata);
        window.location.reload();
    };
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
    MyqrcodeComponent.prototype.DownloadQRCodeAsJPG = function () {
        //@ViewChild('qrcode') : QRCodeComponent;
        debugger;
        //  @ViewChild('qrcode') qrcode1: QRCodeComponent;
        var el = this.qrcode_download['elementRef'];
        var html = el.nativeElement.innerHTML;
        var img64 = html.substr(0, html.length - 2).split('base64,')[1];
        var a = document.createElement("a");
        a.href = 'data:application/octet-stream;base64,' + img64;
        a.download = 'qrcode.jpg';
        a.click();
    };
    MyqrcodeComponent.prototype.DownloadQRCodeAsEPS = function () {
        //@ViewChild('qrcode') : QRCodeComponent;
        debugger;
        //  @ViewChild('qrcode') qrcode1: QRCodeComponent;
        var el = this.qrcode_download['elementRef'];
        var html = el.nativeElement.innerHTML;
        var img64 = html.substr(0, html.length - 2).split('base64,')[1];
        var a = document.createElement("a");
        a.href = 'data:application/octet-stream;base64,' + img64;
        a.download = 'qrcode.eps';
        a.click();
    };
    MyqrcodeComponent.prototype.DownloadQRCodeAsPDF = function () {
        //@ViewChild('qrcode') : QRCodeComponent;
        debugger;
        //  @ViewChild('qrcode') qrcode1: QRCodeComponent;
        var el = this.qrcode_download['elementRef'];
        var html = el.nativeElement.innerHTML;
        var img64 = html.substr(0, html.length - 2).split('base64,')[1];
        var a = document.createElement("a");
        a.href = 'data:application/octet-stream;base64,' + img64;
        a.download = 'qrcode.pdf';
        a.click();
    };
    //print QRCode image
    MyqrcodeComponent.prototype.printcode = function () {
        debugger;
        var printContents, popupWin;
        printContents = document.getElementById('print-section').innerHTML;
        popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
        popupWin.document.open();
        popupWin.document.write("\n          <html>\n            <head>\n              <title>Qr Code</title>\n              <style>\n              //........Customized style.......\n              </style>\n            </head>\n        <body onload=\"window.print();window.close()\">" + printContents + "</body>\n          </html>");
        popupWin.document.close();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('qrcode'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_angular2_qrcode__["a" /* QRCodeComponent */])
    ], MyqrcodeComponent.prototype, "qrcode_download", void 0);
    MyqrcodeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/views/myqrcode/myqrcode.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_1_app_web_service__["a" /* WebService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_app_web_service__["a" /* WebService */]])
    ], MyqrcodeComponent);
    return MyqrcodeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/myqrcode/myqrcode.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyqrcodeModule", function() { return MyqrcodeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_dropdown__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_tabs__ = __webpack_require__("../../../../ngx-bootstrap/tabs/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__myqrcode_component__ = __webpack_require__("../../../../../src/app/views/myqrcode/myqrcode.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__myqrcode_routing_module__ = __webpack_require__("../../../../../src/app/views/myqrcode/myqrcode-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular2_qrcode__ = __webpack_require__("../../../../angular2-qrcode/lib/angular2-qrcode.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Modal Component

// Tabs Component

// Components Routing






var MyqrcodeModule = /** @class */ (function () {
    function MyqrcodeModule() {
    }
    MyqrcodeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__myqrcode_routing_module__["a" /* MyqrcodeRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_dropdown__["a" /* BsDropdownModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal__["a" /* ModalModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_tabs__["a" /* TabsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_9_angular2_qrcode__["b" /* QRCodeModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__myqrcode_component__["a" /* MyqrcodeComponent */]
            ]
        })
    ], MyqrcodeModule);
    return MyqrcodeModule;
}());



/***/ })

});
//# sourceMappingURL=myqrcode.module.chunk.js.map