webpackJsonp(["mycode.module"],{

/***/ "../../../../../src/app/views/mycode/mycode-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MycodeRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mycode_component__ = __webpack_require__("../../../../../src/app/views/mycode/mycode.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__mycode_component__["a" /* MycodeComponent */],
        data: {
            title: 'Mycode'
        }
    }
];
var MycodeRoutingModule = /** @class */ (function () {
    function MycodeRoutingModule() {
    }
    MycodeRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], MycodeRoutingModule);
    return MycodeRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/views/mycode/mycode.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Dynamic data-->\r\n<div *ngIf=\"mydatasection\">\r\n  <div class=\"row\" style=\"margin-top:10px;\">\r\n    <div class=\"col-sm-3\"></div>\r\n    <div class=\"col-sm-6\">\r\n\r\n      <h3 style=\"background-color: #3c1e1ec2;color:white;padding-left:18px;\">My Static Codes\r\n      </h3>\r\n\r\n    </div>\r\n    <div class=\"col-sm-3\"></div>\r\n  </div>\r\n  <br>\r\n  <div class=\"row\" *ngFor=\"let item of items\">\r\n    <div class=\"col-sm-3\"></div>\r\n    <div class=\"col-sm-6\">\r\n      <div class=\"row\">\r\n        <div id=\"wrapper\" #wrapper class=\"col-sm-4\">\r\n          <qr-code style=\"margin-left: 15px;\" [value]=\"item.path\" [size]=\"110\" #qrcode></qr-code>\r\n          <br>\r\n          <button type=\"button\" class=\"btn btn-sm btn-primary\" style=\"margin-left: 18px;width: 74px;height: 21px;\" (click)=\"DownloadQRCode(item.id)\">\r\n            <p style=\"margin-top:-5px;\">Download</p>\r\n          </button>\r\n        </div>\r\n        <div class=\"col-sm-8 Download\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-4\">\r\n              <!--<label>{{item.generateddate | date }}</label>-->\r\n            </div>\r\n            <div class=\"col-sm-4\">\r\n              <p style=\"font-size: 25px;\">{{item.name}}\r\n                \r\n              </p>\r\n            </div>\r\n            <div class=\"col-sm-4\">\r\n              <p style=\"color: green;\">{{item.path}}\r\n               \r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <hr style=\"border:1px solid black;margin-top:4px;width:94%;\">\r\n    </div>\r\n    <div class=\"col-sm-3\"></div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/views/mycode/mycode.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MycodeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_web_service__ = __webpack_require__("../../../../../src/app/web.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MycodeComponent = /** @class */ (function () {
    function MycodeComponent(webservice) {
        this.webservice = webservice;
        this.items = [];
        this.id = "";
        this.editcontactsection = true;
        this.userid = "";
        //show the signin and signout button
        this.signin = true;
        this.signout = false;
        this.mydatasection = false;
        //edit url variable
        this.eurl = "";
        this.qrtype = "url";
        this.qrdata = "";
    }
    MycodeComponent.prototype.ngOnInit = function () {
        debugger;
        this.bindqrcode();
        this.userid = localStorage.getItem("userid");
        if (this.userid == null) {
            this.signin = true;
            this.signout = false;
            this.mydatasection = false;
        }
        else {
            this.signout = true;
            this.signin = false;
            this.mydatasection = true;
        }
        // this.username = localStorage.getItem("firstname");
    };
    MycodeComponent.prototype.bindqrcode = function () {
        var _this = this;
        this.webservice.getallqrcode().subscribe(function (qrcode) {
            _this.dynamicjsondata(qrcode);
        });
    };
    MycodeComponent.prototype.dynamicjsondata = function (qrcode) {
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
    };
    MycodeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/views/mycode/mycode.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_1_app_web_service__["a" /* WebService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_app_web_service__["a" /* WebService */]])
    ], MycodeComponent);
    return MycodeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/mycode/mycode.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MycodeModule", function() { return MycodeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mycode_component__ = __webpack_require__("../../../../../src/app/views/mycode/mycode.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mycode_routing_module__ = __webpack_require__("../../../../../src/app/views/mycode/mycode-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_qrcode__ = __webpack_require__("../../../../angular2-qrcode/lib/angular2-qrcode.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var MycodeModule = /** @class */ (function () {
    function MycodeModule() {
    }
    MycodeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__mycode_routing_module__["a" /* MycodeRoutingModule */], __WEBPACK_IMPORTED_MODULE_3_angular2_qrcode__["b" /* QRCodeModule */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_5__angular_common__["b" /* CommonModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_1__mycode_component__["a" /* MycodeComponent */]]
        })
    ], MycodeModule);
    return MycodeModule;
}());



/***/ })

});
//# sourceMappingURL=mycode.module.chunk.js.map