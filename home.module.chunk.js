webpackJsonp(["home.module"],{

/***/ "../../../../../src/app/views/home/home-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_component__ = __webpack_require__("../../../../../src/app/views/home/home.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__home_component__["a" /* HomeComponent */],
        data: {
            title: 'home'
        }
    }
];
var HomeRoutingModule = /** @class */ (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/views/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n\r\n  <div class=\"row\" style=\"margin-top:25px;\">\r\n\r\n    <div class=\"col-sm-8\">\r\n\r\n      <div class=\"card card1\">\r\n        <div class=\"card-header\">\r\n\r\n          <div class=\"segmented-control radiofontsize\" style=\"width: 100%; color: #20a8d8\">\r\n\r\n            <input type=\"radio\" name=\"sc-1-1\" id=\"sc-1-1-1\" checked>\r\n\r\n            <input type=\"radio\" name=\"sc-1-1\" id=\"sc-1-1-2\">\r\n\r\n            <input type=\"radio\" name=\"sc-1-1\" id=\"sc-1-1-3\">\r\n\r\n            <input type=\"radio\" name=\"sc-1-1\" id=\"sc-1-1-4\">\r\n\r\n            <input type=\"radio\" name=\"sc-1-1\" id=\"sc-1-1-5\">\r\n\r\n            <input type=\"radio\" name=\"sc-1-1\" id=\"sc-1-1-6\">\r\n\r\n            <input type=\"radio\" name=\"sc-1-1\" id=\"sc-1-1-7\">\r\n\r\n            <label for=\"sc-1-1-1\" data-value=\"URL\" (click)=\"Qrtypeclick('url')\">URL</label>\r\n\r\n            <label for=\"sc-1-1-2\" data-value=\"Contact\" (click)=\"Qrtypeclick('contact')\">Contact</label>\r\n\r\n            <label for=\"sc-1-1-3\" data-value=\"Text\" (click)=\"Qrtypeclick('text')\">Text</label>\r\n\r\n            <label for=\"sc-1-1-4\" data-value=\"Phone\" (click)=\"Qrtypeclick('phone')\">Phone</label>\r\n\r\n            <label for=\"sc-1-1-5\" data-value=\"Vcard\" (click)=\"Qrtypeclick('vcard')\">Vcard</label>\r\n\r\n            <label for=\"sc-1-1-6\" data-value=\"SMS\" (click)=\"Qrtypeclick('sms')\">SMS</label>\r\n\r\n            <label for=\"sc-1-1-7\" data-value=\"Coupon\" (click)=\"Qrtypeclick('coupon')\">Coupon</label>\r\n          </div>\r\n\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"inputmargin\" *ngIf=\"urlsection\">\r\n            <span *ngIf=\"messageurlfield\" style=\"color:red !important;font: bold 15px Georgia, serif\">Url is required</span>\r\n            <input type=\"text\" [(ngModel)]=\"url\" class=\"form-control\" placeholder=\"Enter your URL (ex. http://www.example.com)\">\r\n          </div>\r\n\r\n          <div class=\"inputmargin \" *ngIf=\"contactsection\">\r\n            <span *ngIf=\"messagecontactfield\" style=\"color:red !important;font: bold 15px Georgia, serif\">Firstname and Familyname are required</span>\r\n            <br>\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-6\">\r\n\r\n                <!-- <label style=\"color:red\">*</label> -->\r\n                <input type=\"text\" [(ngModel)]=\"firstname\" class=\"form-control\" placeholder=\"Enter Name\">\r\n              </div>\r\n              <div class=\"col-sm-6\">\r\n                <!-- <label>Family Name</label>\r\n                  <label style=\"color:red\">*</label> -->\r\n                <input type=\"text\" [(ngModel)]=\"familyname\" class=\"form-control\" placeholder=\"Enter Family Name\">\r\n              </div>\r\n\r\n            </div>\r\n            <br>\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-6\">\r\n                <!-- <label>Job Title</label> -->\r\n                <input type=\"text\" [(ngModel)]=\"jobtitle\" class=\"form-control\" placeholder=\"Enter Job Title\">\r\n              </div>\r\n              <div class=\"col-sm-6\">\r\n                <!-- <label>Company</label> -->\r\n                <input type=\"text\" [(ngModel)]=\"company\" class=\"form-control\" placeholder=\"Enter Company\">\r\n              </div>\r\n            </div>\r\n\r\n            <hr style=\"border-bottom: 1px solid #8C969D;width:100%\">\r\n\r\n            <label style=\"padding-bottom:15px;\">\r\n              <b>Add Phone</b>\r\n            </label>\r\n            <br>\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-6\">\r\n                <!-- <label>Phone (direct)</label> -->\r\n                <input type=\"text\" [(ngModel)]=\"phonedirect\" class=\"form-control\" placeholder=\"Phone (direct)\" maxlength=\"256\">\r\n\r\n              </div>\r\n              <div class=\"col-sm-6\">\r\n                <!-- <label>Phone (work)</label> -->\r\n                <input type=\"text\" [(ngModel)]=\"phonework\" class=\"form-control\" placeholder=\"Phone (work)\" maxlength=\"256\">\r\n              </div>\r\n\r\n            </div>\r\n            <br>\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-6\">\r\n                <!-- <label>Phone (home)</label> -->\r\n                <input type=\"text\" [(ngModel)]=\"phonehome\" class=\"form-control\" placeholder=\"Phone (home)\" maxlength=\"256\">\r\n\r\n              </div>\r\n              <div class=\"col-sm-6\">\r\n                <!-- <label>Fax (work)</label> -->\r\n                <input type=\"text\" [(ngModel)]=\"fax\" class=\"form-control\" placeholder=\"Fax (work)\" maxlength=\"256\">\r\n\r\n              </div>\r\n            </div>\r\n\r\n\r\n            <hr style=\"border-bottom: 1px solid #8C969D;width:100%\">\r\n\r\n            <label style=\"padding-bottom:15px;\">\r\n              <b>Add Email/URL</b>\r\n            </label>\r\n            <br>\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-6\">\r\n                <!-- <label>Email</label> -->\r\n                <input type=\"text\" [(ngModel)]=\"email\" class=\"form-control\" placeholder=\" Enter Email\" maxlength=\"256\">\r\n\r\n              </div>\r\n              <div class=\"col-sm-6\">\r\n                <!-- <label>URL</label> -->\r\n                <input type=\"text\" [(ngModel)]=\"contacturl\" class=\"form-control\" placeholder=\"Enter URL\" maxlength=\"256\">\r\n\r\n              </div>\r\n            </div>\r\n\r\n            <hr style=\"border-bottom: 1px solid #8C969D;width:100%\">\r\n\r\n            <label style=\"padding-bottom:15px;\">\r\n              <b>Add Address</b>\r\n            </label>\r\n            <br>\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-6\">\r\n                <!-- <label>Street</label> -->\r\n                <input type=\"text\" [(ngModel)]=\"street\" class=\"form-control\" placeholder=\"Enter Street\">\r\n              </div>\r\n              <div class=\"col-sm-6\">\r\n                <!-- <label>City</label> -->\r\n                <input type=\"text\" [(ngModel)]=\"city\" class=\"form-control\" placeholder=\"Enter City\">\r\n              </div>\r\n            </div>\r\n            <br>\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-6\">\r\n                <!-- <label>State</label> -->\r\n                <input type=\"text\" [(ngModel)]=\"state\" class=\"form-control\" placeholder=\"Enter State\">\r\n              </div>\r\n              <div class=\"col-sm-6\">\r\n                <!-- <label>Zip</label> -->\r\n                <input type=\"text\" [(ngModel)]=\"zip\" class=\"form-control\" placeholder=\"Enter Zip\">\r\n              </div>\r\n            </div>\r\n            <br>\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-6\">\r\n                <!-- <label>Country</label> -->\r\n                <input type=\"text\" [(ngModel)]=\"country\" class=\"form-control\" placeholder=\"Enter Country\">\r\n              </div>\r\n              <div class=\"col-sm-6\"></div>\r\n            </div>\r\n\r\n            <hr style=\"border-bottom: 1px solid #8C969D;width:100%\">\r\n\r\n            <label style=\"padding-bottom:15px;\">\r\n              <b>Add Social Profile</b>\r\n            </label>\r\n            <br>\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-6\">\r\n                <!-- <label>Facebook</label> -->\r\n                <input type=\"text\" [(ngModel)]=\"facebook\" class=\"form-control\" placeholder=\"http://www.facebook.com/example\">\r\n              </div>\r\n              <div class=\"col-sm-6\">\r\n                <!-- <label>Twitter</label> -->\r\n                <input type=\"text\" [(ngModel)]=\"twitter\" class=\"form-control\" placeholder=\"http://www.twitter.com/example\">\r\n              </div>\r\n            </div>\r\n            <br>\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-6\">\r\n                <!-- <label>Pinterest</label> -->\r\n                <input type=\"text\" [(ngModel)]=\"pinterest\" class=\"form-control\" placeholder=\"http://www.pinterest.com/example\">\r\n              </div>\r\n              <div class=\"col-sm-6\">\r\n                <!-- <label>LinkedIn</label> -->\r\n                <input type=\"text\" [(ngModel)]=\"linkedin\" class=\"form-control\" placeholder=\"http://www.linkedin.com/example\">\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n\r\n\r\n          <div class=\"inputmargin\" *ngIf=\"phonesection\">\r\n            <span *ngIf=\"messagephonefield\" style=\"color:red !important;font: bold 15px Georgia, serif\">Phone No. is required</span>\r\n            <input type=\"text\" [(ngModel)]=\"phoneno\" placeholder=\"Enter Phone No.\" class=\"form-control\">\r\n          </div>\r\n\r\n          <div class=\"inputmargin\" *ngIf=\"smssection\">\r\n            <span *ngIf=\"messagesmsfield\" style=\"color:red !important;font: bold 15px Georgia, serif\">Mobile No. is required</span>\r\n\r\n            <input type=\"text\" [(ngModel)]=\"mobileno\" class=\"form-control\" placeholder=\"Enter Mobile No\">\r\n            <br>\r\n            <textarea type=\"text\" [(ngModel)]=\"message\" class=\"form-control\" placeholder=\"Enter Message\"></textarea>\r\n            <br>\r\n          </div>\r\n\r\n          <div class=\"inputmargin\" *ngIf=\"textsection\">\r\n            <span *ngIf=\"messagetextfield\" style=\"color:red !important;font: bold 15px Georgia, serif\">Message is required</span>\r\n\r\n            <textarea type=\"text\" [(ngModel)]=\"text\" class=\"form-control\" placeholder=\"Enter Message\" rows=\"4\" cols=\"50\"></textarea>\r\n          </div>\r\n\r\n          <div class=\"inputmargin\" *ngIf=\"vcardsection\">\r\n            <span *ngIf=\"messagevcardfield\" style=\"color:red !important;font: bold 15px Georgia, serif\">Firstname and Familyname are required</span>\r\n\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-6\">\r\n                <!-- <label>First Name</label> -->\r\n                <!-- <label style=\"color:red\">*</label> -->\r\n                <input type=\"text\" [(ngModel)]=\"vfirstname\" class=\"form-control\" placeholder=\"First Name\" maxlength=\"256\">\r\n              </div>\r\n              <div class=\"col-sm-6\">\r\n                <!-- <label>Family Name</label> -->\r\n                <!-- <label style=\"color:red\">*</label> -->\r\n                <input type=\"text\" [(ngModel)]=\"vfamilyname\" class=\"form-control\" placeholder=\"Family Name\" maxlength=\"256\">\r\n              </div>\r\n            </div>\r\n            <hr style=\"border-bottom: 1px solid #8C969D;width:100%\">\r\n\r\n            <label style=\"padding-bottom:15px;\">\r\n              <b>Add Organization</b>\r\n            </label>\r\n            <br>\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-6\">\r\n                <!-- <label>Company Name</label> -->\r\n                <input type=\"text\" [(ngModel)]=\"vcompany\" class=\"form-control\" placeholder=\"Company Name\" maxlength=\"256\">\r\n\r\n              </div>\r\n              <div class=\"col-sm-6\">\r\n                <!-- <label>Title within Company</label> -->\r\n                <input type=\"text\" [(ngModel)]=\"vtitle\" class=\"form-control\" placeholder=\"Title within Company\" maxlength=\"256\">\r\n              </div>\r\n            </div>\r\n\r\n            <hr style=\"border-bottom: 1px solid #8C969D;width:100%\">\r\n\r\n            <label style=\"padding-bottom:15px;\">\r\n              <b>Add Phone</b>\r\n            </label>\r\n\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-6\">\r\n                <!-- <label>Phone Number</label> -->\r\n                <input type=\"text\" [(ngModel)]=\"vphoneno\" class=\"form-control\" placeholder=\"Phone Number\" maxlength=\"256\">\r\n              </div>\r\n            </div>\r\n\r\n\r\n            <hr style=\"border-bottom: 1px solid #8C969D;width:100%\">\r\n\r\n            <label style=\"padding-bottom:15px;\">\r\n              <b>Add Email/URL</b>\r\n            </label>\r\n            <br>\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-6\">\r\n                <!-- <label>Email</label> -->\r\n                <input type=\"text\" [(ngModel)]=\"vemail\" class=\"form-control\" placeholder=\"Email\" maxlength=\"256\">\r\n\r\n              </div>\r\n              <div class=\"col-sm-6\">\r\n                <!-- <label>Website</label> -->\r\n                <input type=\"text\" [(ngModel)]=\"vwebsite\" class=\"form-control\" placeholder=\"Website\" maxlength=\"256\">\r\n\r\n              </div>\r\n            </div>\r\n\r\n            <hr style=\"border-bottom: 1px solid #8C969D;width:100%\">\r\n\r\n            <label style=\"padding-bottom:15px;\">Address</label>\r\n            <br>\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-6\">\r\n                <!-- <label>Street</label> -->\r\n                <input type=\"text\" [(ngModel)]=\"vstreet\" class=\"form-control\" placeholder=\"Street\" maxlength=\"256\">\r\n              </div>\r\n              <div class=\"col-sm-6\">\r\n                <!-- <label>city</label> -->\r\n                <input type=\"text\" [(ngModel)]=\"vcity\" class=\"form-control\" placeholder=\"City\" maxlength=\"256\">\r\n              </div>\r\n            </div>\r\n            <br>\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-6\">\r\n                <!-- <label>State</label> -->\r\n                <input type=\"text\" [(ngModel)]=\"vstate\" class=\"form-control\" placeholder=\"State\" maxlength=\"256\">\r\n              </div>\r\n              <div class=\"col-sm-6\">\r\n                <!-- <label>Zip</label> -->\r\n                <input type=\"text\" [(ngModel)]=\"vzip\" class=\"form-control\" placeholder=\"Zip\" maxlength=\"256\">\r\n              </div>\r\n            </div>\r\n            <br>\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-6\">\r\n                <!-- <label>Country</label> -->\r\n                <input type=\"text\" [(ngModel)]=\"vcountry\" class=\"form-control\" placeholder=\"Country\" maxlength=\"256\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n\r\n          <div class=\"inputmargin\" *ngIf=\"couponsection\">\r\n            <span *ngIf=\"messagecouponfield\" style=\"color:red !important;font: bold 15px Georgia, serif\">Title and Discount are required</span>\r\n            <br>\r\n            <label>\r\n              <b>Create an online coupon and we'll provide you with a QR Code that links to it</b>\r\n            </label>\r\n\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-6\">\r\n                <!-- <label>Title</label> -->\r\n                <input type=\"text\" [(ngModel)]=\"ctitle\" class=\"form-control\" placeholder=\"Title\" maxlength=\"256\">\r\n              </div>\r\n              <div class=\"col-sm-6\">\r\n                <!-- <label>Discount</label><label style=\"color:red\">*</label> -->\r\n                <input type=\"text\" [(ngModel)]=\"cdiscount\" class=\"form-control\" placeholder=\"Discount\" maxlength=\"256\">\r\n                <br>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-6\">\r\n                <!-- <label>Enter the website where people can use your coupon</label><label style=\"color:red\">*</label> -->\r\n                <input type=\"text\" [(ngModel)]=\"cwebsite\" class=\"form-control\" placeholder=\"Enter the website where people can use your coupon\"\r\n                  maxlength=\"256\">\r\n                <br>\r\n              </div>\r\n              <div class=\"col-sm-6\">\r\n                <!-- <label>Promo Code if needed</label> -->\r\n                <input type=\"text\" [(ngModel)]=\"cpromocode\" class=\"form-control\" placeholder=\"Promo code if needed\" maxlength=\"256\">\r\n                <br>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-6\">\r\n                <!-- <label>Describe Your Offer</label><br> -->\r\n                <textarea type=\"text\" [(ngModel)]=\"coffer\" placeholder=\"Describe Your Offer\" class=\"form-control\"></textarea>\r\n                <br>\r\n              </div>\r\n              <div class=\"col-sm-6\">\r\n                <!-- <label>Terms</label><br> -->\r\n                <textarea type=\"text\" [(ngModel)]=\"cterms\" placeholder=\"Terms\" class=\"form-control\"></textarea>\r\n                <br>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-6\">\r\n                <!-- <label>Expiry Date</label><br> -->\r\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"cdate\" placeholder=\"Expiry Date  dd-mm-yyyy\" maxlength=\"150\">\r\n              </div>\r\n              <div class=\"col-sm-6\">\r\n\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"card-footer card1\">\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-6\">\r\n\r\n            <!--switch button-->\r\n            <!-- <div *ngIf=\"urlsection\">\r\n                  <div class=\"row\" style=\"margin-left:4px;\">\r\n                    <div><label > Static</label></div>\r\n                    <div><label class=\"switch \">\r\n                      <input *ngIf=\"qrstatus_static\" type=\"checkbox\" id=\"switch\" name=\"switch\" (click)=\"qrstatusclick()\">\r\n                      <input *ngIf=\"qrstatus_dynamic\" type=\"checkbox\" checked id=\"switch2\" name=\"switch2\" (click)=\"qrstatusclick()\">\r\n                      <span class=\"slider round\"></span>\r\n                    </label></div>\r\n                    <div><label > Dynamic</label></div>\r\n                  </div>\r\n                  \r\n                </div> -->\r\n\r\n            <div class=\"segmented-control1 segmented11\" style=\"width: 35%; color:#5fbaad;\" *ngIf=\"othersection\">\r\n\r\n              <input type=\"radio\" name=\"s-1-1\" id=\"sc-1\" (click)=\"qrstatusclick()\" checked>\r\n\r\n              <input type=\"radio\" name=\"s-1-1\" id=\"sc-2\" (click)=\"qrstatusclick()\">\r\n\r\n\r\n              <label for=\"sc-1\" data-value=\"Static\">Static</label>\r\n\r\n              <label for=\"sc-2\" data-value=\"Dynamic\">Dynamic</label>\r\n\r\n            </div>\r\n          </div>\r\n          <div class=\"col-sm-6\">\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-sm-3\" class=\"qrcodeside qrcodeimg\">\r\n      <div *ngIf=\"generateqrimage\">\r\n        <div id=\"print-section\">\r\n          <qr-code [value]=\"staticqrcode\" [size]=\"150\" [foreground]=\"qrfrontcolor\"  [background]=\"qrbackcolor\" colordark='red' colorlight='green' #qrcode></qr-code>\r\n        </div>\r\n\r\n        <br />\r\n        <br />\r\n        <button type=\"button\" class=\"btn btn-sm btn-primary\" style=\"width: 110px;height:21px;\">\r\n          <p style=\"margin-top:-5px;\" (click)=\"DownloadQRCodeAsJPG()\">Download As JPG</p>\r\n        </button>\r\n        <!--<br />-->\r\n        <button type=\"button\" class=\"btn btn-sm btn-primary\" style=\"width:110px;height: 21px;\">\r\n          <p style=\"margin-top:-5px;\" (click)=\"DownloadQRCodeAsEPS()\">Download As EPS</p>\r\n        </button>\r\n        <br>\r\n        <button type=\"button\" class=\"btn btn-sm btn-primary\" style=\"width:110px;height: 21px;\">\r\n          <p style=\"margin-top:-5px;\" (click)=\"DownloadQRCodeAsPDF()\">Download As PDF</p>\r\n        </button>\r\n\r\n\r\n        <button type=\"button\" class=\"btn btn-sm btn-primary\" style=\"width:110px;height: 21px;\">\r\n          <p style=\"margin-top:-5px;\" (click)=\"printcode()\">Print</p>\r\n        </button>\r\n      </div>\r\n\r\n\r\n      <div *ngIf=\"defaultqrimage\">\r\n        <img src=\"assets/defaultqrimage.png\" height=\"180px\" width=\"180px\" class=\"img-responsive\" />\r\n      </div>\r\n      <br>\r\n      <div class=\"row\">\r\n        <!-- <div class=\"col-sm-2\"></div> -->\r\n        <div class=\"col-sm-8\">\r\n          Select foreground color here :\r\n          <input type=\"color\" value=\"#800080\" [(ngModel)]=\"favcolor\" (change)=\"test()\">\r\n          <br> Select background color here :\r\n          <input type=\"color\" value=\"#800080\" [(ngModel)]=\"favcolorbk\" (change)=\"test()\">\r\n          <br><br>\r\n          <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" (click)=\"styleqrModal.show()\" (click)=\"styleqrModal()\" style=\"margin-left:5px;\">+Style your QR-Code</button>\r\n          <br>\r\n          <br>\r\n\r\n          <button type=\"submit\" (click)=\"Generate()\" class=\"btn btn-sm btn-success buttonform\" style=\"font-size: 15px\">Generate</button>\r\n        </div>\r\n        <div class=\"col-sm-2\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Style your QR-Code -->\r\n  <div>\r\n  <div bsModal #styleqrModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-primary\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h4 class=\"modal-title\">Style your QR Code</h4>\r\n          <button type=\"button\" class=\"close\" (click)=\"styleqrModal.hide()\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <div>Dots :\r\n              <!-- <input type=\"color\" value=\"#800080\" [(ngModel)]=\"dotscolor\"> -->\r\n              <input type=\"color\" value=\"#800080\">\r\n              Shape :\r\n              <!-- <input type=\"dropdown\" value=\"round\" [(ngModel)]=\"shapeqr\"> -->\r\n              <input type=\"dropdown\" value=\"round\" >\r\n              Center Color :\r\n              <!-- <input type=\"color\" value=\"#800080\" [(ngModel)]=\"centercolor\"> -->\r\n              <input type=\"color\" value=\"#800080\" >\r\n\r\n            <!-- <input type=\"text\" [(ngModel)]=\"eurl\" class=\"form-control\"> -->\r\n          </div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-secondary\" >Close</button>\r\n          <button type=\"button\" class=\"btn btn-primary\" >Done</button>\r\n        </div>\r\n      </div>\r\n      <!-- /.modal-content -->\r\n    </div>\r\n    <!-- /.modal-dialog -->\r\n  </div>\r\n</div>\r\n<!-- <div>\r\n      <input name=\"file\" type=\"file\" (change)=\"onChange($event)\"/>\r\n    </div> -->\r\n\r\n\r\n\r\n\r\n<!--Dynamic data-->\r\n<!-- <div *ngIf=\"mydatasection\"> -->\r\n<!-- <div>\r\n              <div class=\"col-sm-12\" style=\"margin-top:10px;\">\r\n                <div class=\"col-sm-3\"></div>\r\n                <div class=\"col-sm-6\">\r\n                  <div>\r\n                    <h3 style=\"background-color: #3c1e1ec2;color:white\">\r\n                      <label class=\"text\">My Dynamic Codes</label>\r\n                    </h3>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-3\"></div>\r\n              </div>\r\n              <div class=\"row\" *ngFor=\"let item of items\">\r\n                <div class=\"col-sm-3\"></div>\r\n                <div class=\"col-sm-6\">\r\n                  <div class=\"row\">\r\n                    <div id=\"wrapper\" #wrapper class=\"col-sm-4\">\r\n                      <qr-code style=\"margin-left: 15px;\" [value]=\"item.path\" [size]=\"110\"></qr-code><br>\r\n                      <button type=\"button\" class=\"btn btn-sm btn-primary\" style=\"margin-left: 18px;width: 74px;height: 21px;\">\r\n                    <p style=\"margin-top:-5px;\">Download</p>\r\n                    </button>\r\n                    </div>\r\n                    <div class=\"col-sm-8 Download\">\r\n                      <label>{{item.generateddate | date }}</label><br>\r\n                      <p style=\"font-size: 25px;\">{{item.name}}<button *ngIf=\"item.qrtype=='contact'\" (click)=\"Editcontact(item.id)\" data-toggle=\"modal\" data-target=\"#contactModal\"\r\n                          type=\"button\" class=\"btn btn-sm btn-primary\" style=\"margin-left:5px;\">Edit</button></p>\r\n                      <p style=\"color: green;\">{{item.path}} <button *ngIf=\"item.qrtype=='url'\" disabled type=\"button\" class=\"btn btn-sm btn-primary\" style=\"margin-left:5px;\">Edit</button></p><br>\r\n                    </div>\r\n                  </div>\r\n                  <hr style=\"border:1px solid black;margin-top:4px;width:94%;\">\r\n                </div>\r\n                <div class=\"col-sm-3\"></div>\r\n              </div>\r\n            </div>\r\n        </div> -->"

/***/ }),

/***/ "../../../../../src/app/views/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_web_service__ = __webpack_require__("../../../../../src/app/web.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_device_detector__ = __webpack_require__("../../../../ng2-device-detector/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_qrcode__ = __webpack_require__("../../../../angular2-qrcode/lib/angular2-qrcode.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomeComponent = /** @class */ (function () {
    function HomeComponent(router, webservice, deviceService) {
        this.router = router;
        this.webservice = webservice;
        this.deviceService = deviceService;
        this.demoarr = [];
        //device location
        this.deviceInfo = null;
        this.device = "";
        this.language = "";
        this.browsername = "";
        this.browserversion = "";
        this.os = "";
        this.osversion = "";
        this.ua = "";
        this.usseragent = "";
        this.ismobile = "";
        this.istab = "";
        this.getDeviceInfo = "";
        this.qrinfo = "";
        this.items = [];
        this.qrdata = "";
        // url variable
        this.url = "";
        // contact variable
        this.firstname = "";
        this.familyname = "";
        this.linkedin = "";
        this.pinterest = "";
        this.twitter = "";
        this.facebook = "";
        this.phonehome = "";
        this.fax = "";
        this.phonework = "";
        this.company = "";
        this.jobtitle = "";
        this.street = "";
        this.zip = "";
        this.city = "";
        this.state = "";
        this.country = "";
        this.phonedirect = "";
        this.email = "";
        this.contacturl = "";
        // sms variable
        this.phoneno = "";
        // sms variable
        this.mobileno = "";
        this.message = "";
        // text variable
        this.text = "";
        //vcard section
        this.vfirstname = "";
        this.vfamilyname = "";
        this.vcompany = "";
        this.vtitle = "";
        this.vphoneno = "";
        this.vemail = "";
        this.vwebsite = "";
        this.vstreet = "";
        this.vcity = "";
        this.vstate = "";
        this.vzip = "";
        this.vcountry = "";
        //coupon section
        this.ctitle = "";
        this.cdiscount = "";
        this.cwebsite = "";
        this.cpromocode = "";
        this.coffer = "";
        this.cterms = "";
        this.cdate = "";
        this.qrtype = "";
        this.qrstatus = "Static";
        this.qrstatus_static = true;
        this.qrstatus_dynamic = false;
        // boolean variable for which section should open
        this.urlsection = true;
        this.contactsection = false;
        this.phonesection = false;
        this.smssection = false;
        this.textsection = false;
        this.vcardsection = false;
        this.couponsection = false;
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
        //edit url variable
        this.eurl = "";
        //boolean variable for static or Dynamic
        this.staticqrcode = "";
        this.userid = "";
        this.generateqrimage = false;
        this.defaultqrimage = true;
        this.editcontactsection = true;
        this.mydatasection = true;
        this.othersection = true;
        //color on button
        // staticbutton: boolean = true;
        // dynamicbutton: boolean = false;
        //required field message
        this.messageurlfield = false;
        this.messagecontactfield = false;
        this.messagephonefield = false;
        this.messagetextfield = false;
        this.messagevcardfield = false;
        this.messagesmsfield = false;
        this.messagecouponfield = false;
        //show the signin and signout button
        this.signin = true;
        this.signout = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.router.navigateByUrl("http://localhost:4200/dynamicdata/111");
        this.initializevariable();
        this.userid = localStorage.getItem("userid");
        if (this.userid == null) {
            this.signin = true;
            this.signout = false;
        }
        else {
            this.signout = true;
            this.signin = false;
            //  this.username = localStorage.getItem("firstname");
        }
        this.epicFunction();
        if (this.isdekstop) {
            this.device = "desktop";
        }
        else if (this.istab) {
            this.device = "tab";
        }
        else {
            this.device = "mobile";
        }
        this.language = "Language of the browser: " + navigator.language;
    };
    HomeComponent.prototype.initializevariable = function () {
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
    };
    HomeComponent.prototype.qrstatusclick = function () {
        if (this.urlsection || this.contactsection) {
            if (this.qrstatus == "Static") {
                this.qrstatus = "Dynamic";
                this.qrstatus_dynamic = true;
                this.qrstatus_static = false;
            }
            else {
                this.qrstatus = "Static";
                this.qrstatus_dynamic = false;
                this.qrstatus_static = true;
            }
        }
        else {
            this.qrstatus = "Static";
            this.qrstatus_dynamic = false;
            this.qrstatus_static = true;
        }
        console.log("in status click method");
        console.log(this.qrstatus);
    };
    HomeComponent.prototype.Qrtypeclick = function (qrcodetype) {
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
            this.othersection = false;
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
            this.othersection = false;
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
            this.othersection = false;
            // this.mydatasection = false;
            //     this.othersection = true;
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
            this.othersection = false;
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
            this.othersection = false;
            this.qrstatus = "static";
        }
        else {
            this.vcardsection = true;
            this.urlsection = false;
            this.contactsection = false;
            this.phonesection = false;
            this.smssection = false;
            this.textsection = false;
            this.couponsection = false;
            this.othersection = false;
            // this.mydatasection = false;
            this.qrstatus = "Static";
        }
    };
    HomeComponent.prototype.Generate = function () {
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
            }
            else {
                this.messageurlfield = false;
                this.qrdata = this.url;
                qrtype = "url";
            }
        }
        else if (this.contactsection) {
            if (this.firstname == "" || this.familyname == "") {
                this.messagecontactfield = true;
                this.generateqrimage = false;
                this.defaultqrimage = true;
            }
            else {
                this.messagecontactfield = false;
                this.createJson();
                qrtype = "contact";
            }
        }
        else if (this.phonesection) {
            if (this.phoneno == "") {
                this.messagephonefield = true;
                this.generateqrimage = false;
                this.defaultqrimage = true;
            }
            else {
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
            }
            else {
                this.messagevcardfield = false;
                this.generateqrimage = true;
                this.createJson();
                qrtype = "vcard";
            }
        }
        else if (this.smssection) {
            if (this.mobileno == "" && this.message == "") {
                this.messagesmsfield = true;
                this.generateqrimage = false;
                this.defaultqrimage = true;
            }
            else {
                this.messagesmsfield = false;
                this.generateqrimage = true;
                this.createJson();
                qrtype = "SMS";
            }
        }
        else if (this.textsection) {
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
        else {
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
            }
        }
        //for Dynamic add
        if (this.qrstatus == "Dynamic") {
            // if (this.signin == true) {
            //     this.messageurlfield = false;
            //     this.messagecouponfield = false;
            //     // this.router.navigate(['pages/login']);
            // }
            // else {
            console.log("adding dynamic");
            // if (this.messagerequiredfield == false) {
            // this.webservice.generatecode(generateddate, userid, qrtype, this.qrdata, this.qrinfo);
            // }
            if (this.messageurlfield == false && this.messagecontactfield == false && this.messagephonefield == false && this.messagetextfield == false && this.messagevcardfield == false && this.messagesmsfield == false && this.messagecouponfield == false) {
                debugger;
                this.staticqrcode = this.qrdata;
                this.webservice.generatecode(generateddate, userid, qrtype, this.qrdata, this.qrinfo);
            }
            // }
        }
        else {
            console.log("adding static");
            if (this.smssection || this.contactsection || this.vcardsection || this.couponsection) {
                this.staticjsondata(this.qrdata);
            }
            if (this.messageurlfield == false && this.messagecontactfield == false && this.messagephonefield == false && this.messagetextfield == false && this.messagevcardfield == false && this.messagesmsfield == false && this.messagecouponfield == false) {
                // this.staticqrcode = '{' + 'Type :' + qrtype + 'Data :' +'[' + this.qrdata +']' + '}';
                this.staticqrcode = this.qrdata;
                this.webservice.generatecode(generateddate, userid, qrtype, this.qrdata, this.qrinfo);
            }
        }
        // this.qrElement = <HTMLVideoElement>document.getElementById("saticqr");
    };
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
    HomeComponent.prototype.staticjsondata = function (qrdata) {
        debugger;
        // let qrdata1: any;
        var jsondata = qrdata;
        var values = Object.keys(qrdata).map(function (key) { return qrdata[key]; }).map(function (x) { return x.substr(0, x.length - 4); });
        var commaJoinedValues = values.join(',');
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
    };
    HomeComponent.prototype.createJson = function () {
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
    };
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
    HomeComponent.prototype.epicFunction = function () {
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
    };
    HomeComponent.prototype.createJson1 = function () {
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
            + '}';
        this.qrinfo = Jsonqrinfoobj;
    };
    HomeComponent.prototype.DownloadQRCodeAsJPG = function () {
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
    HomeComponent.prototype.DownloadQRCodeAsEPS = function () {
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
    HomeComponent.prototype.DownloadQRCodeAsPDF = function () {
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
    HomeComponent.prototype.printcode = function () {
        debugger;
        var printContents, popupWin;
        printContents = document.getElementById('print-section').innerHTML;
        popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
        popupWin.document.open();
        popupWin.document.write("\n          <html>\n            <head>\n              <title>Qr Code</title>\n              <style>\n              //........Customized style.......\n              </style>\n            </head>\n        <body onload=\"window.print();window.close()\">" + printContents + "</body>\n          </html>");
        popupWin.document.close();
    };
    HomeComponent.prototype.styleqrModal = function () {
        debugger;
        this.generateqrimage = true;
    };
    HomeComponent.prototype.test = function () {
        this.qrfrontcolor = this.favcolor;
        this.qrbackcolor = this.favcolorbk;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('qrcode'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_angular2_qrcode__["a" /* QRCodeComponent */])
    ], HomeComponent.prototype, "qrcode_download", void 0);
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/views/home/home.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_2_app_web_service__["a" /* WebService */], __WEBPACK_IMPORTED_MODULE_3_ng2_device_detector__["b" /* Ng2DeviceService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_2_app_web_service__["a" /* WebService */], __WEBPACK_IMPORTED_MODULE_3_ng2_device_detector__["b" /* Ng2DeviceService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/home/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_charts_ng2_charts__ = __webpack_require__("../../../../ng2-charts/ng2-charts.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_charts_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_charts_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_component__ = __webpack_require__("../../../../../src/app/views/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_routing_module__ = __webpack_require__("../../../../../src/app/views/home/home-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_qrcode__ = __webpack_require__("../../../../angular2-qrcode/lib/angular2-qrcode.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








// import { ColorPickerModule } from 'angular4-color-picker';
var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__home_routing_module__["a" /* HomeRoutingModule */], __WEBPACK_IMPORTED_MODULE_4__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_1_ng2_charts_ng2_charts__["ChartsModule"], __WEBPACK_IMPORTED_MODULE_6_angular2_qrcode__["b" /* QRCodeModule */], __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap_modal__["a" /* ModalModule */].forRoot(),
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__home_component__["a" /* HomeComponent */]]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ })

});
//# sourceMappingURL=home.module.chunk.js.map