webpackJsonp(["pages.module"],{

/***/ "../../../../../src/app/views/pages/404.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app flex-row align-items-center\">\n  <div class=\"container\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-md-6\">\n        <div class=\"clearfix\">\n          <h1 class=\"float-left display-3 mr-4\">404</h1>\n          <h4 class=\"pt-3\">Oops! You're lost.</h4>\n          <p class=\"text-muted\">The page you are looking for was not found.</p>\n        </div>\n        <div class=\"input-prepend input-group\">\n          <span class=\"input-group-addon\"><i class=\"fa fa-search\"></i></span>\n          <input id=\"prependedInput\" class=\"form-control\" size=\"16\" type=\"text\" placeholder=\"What are you looking for?\">\n          <span class=\"input-group-btn\">\n            <button class=\"btn btn-info\" type=\"button\">Search</button>\n          </span>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/views/pages/404.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return P404Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var P404Component = /** @class */ (function () {
    function P404Component() {
    }
    P404Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/views/pages/404.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], P404Component);
    return P404Component;
}());



/***/ }),

/***/ "../../../../../src/app/views/pages/500.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app flex-row align-items-center\">\n  <div class=\"container\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-md-6\">\n        <div class=\"clearfix\">\n          <h1 class=\"float-left display-3 mr-4\">500</h1>\n          <h4 class=\"pt-3\">Houston, we have a problem!</h4>\n          <p class=\"text-muted\">The page you are looking for is temporarily unavailable.</p>\n        </div>\n        <div class=\"input-prepend input-group\">\n          <span class=\"input-group-addon\"><i class=\"fa fa-search\"></i></span>\n          <input id=\"prependedInput\" class=\"form-control\" size=\"16\" type=\"text\" placeholder=\"What are you looking for?\">\n          <span class=\"input-group-btn\">\n            <button class=\"btn btn-info\" type=\"button\">Search</button>\n          </span>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>  \n"

/***/ }),

/***/ "../../../../../src/app/views/pages/500.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return P500Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var P500Component = /** @class */ (function () {
    function P500Component() {
    }
    P500Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/views/pages/500.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], P500Component);
    return P500Component;
}());



/***/ }),

/***/ "../../../../../src/app/views/pages/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app flex-row align-items-center\">\n  <div class=\"container\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-sm-8\">\n        <div class=\"card-group\">\n          <div class=\"card p-4\">\n            <div class=\"card-body\">\n              <h4 style=\"margin-bottom:20px;\">Sign In to your account</h4>\n              <!-- <p class=\"text-muted\">Sign In to your account</p> -->\n\n              <!-- <span style=\"color:red !important;font: bold 15px Georgia, serif;\">Incorrect email & password</span><br> -->\n              \n              <div class=\"input-group mb-3\">\n\n                <span class=\"input-group-addon\"><i class=\"icon-user\"></i></span>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Username\" [(ngModel)]=\"email\">\n                <!-- <input type=\"text\" placeholder=\"Enter Email\" ><br> -->\n              </div>\n              <div class=\"input-group mb-4\">\n                <span class=\"input-group-addon\"><i class=\"icon-lock\"></i></span>\n                <input type=\"password\" class=\"form-control\" placeholder=\"Password\"  [(ngModel)]=\"password\">\n                <!-- <input type=\"password\" placeholder=\"Enter Password\"><br> -->\n              </div>\n              <div class=\"row\">\n                <div class=\"col-sm-12\">\n                  <button type=\"button\" class=\"btn btn-primary loginbutton\" style=\"margin-bottom: 4px;\" (click)=\"Login()\" >Login</button>\n                  <br>\n                  <button style=\"margin-bottom: 4px; \" class=\"btn btn-twitter visible-sm visible-xs loginbutton\"  type=\"button\">\n                      <span> Log in with Twitter</span>\n                  </button>\n                  <button style=\"margin-bottom: 4px;\" class=\"btn btn-facebook visible-sm visible-xs loginbutton\" type=\"button\">\n                      <span> Log in with Facebook</span>\n                  </button>\n                    \n                      <button style=\"margin-bottom: 4px;\" class=\"btn btn-google-plus visible-sm visible-xs loginbutton\" type=\"button\">\n                          <span> Log in with Google+</span>\n                      </button>\n                   \n                </div>\n              </div>\n                <div class=\"row\">\n                <div class=\"col-sm-6\">\n                  <button type=\"button\" class=\"btn btn-link px-0\">Forgot password?</button>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-sm-12\">\n                    <p>Don't have a Qrcode account yet? <br>\n                    <a href=\"/#/pages/register\">Create your account now</a></p>\n\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"card text-white bg-primary py-5 loginpage visible-lg visible-md\" >\n            <div class=\"card-body text-center visible-lg visible-md\">\n              <div>\n                  <button style=\"margin-bottom: 4px; width:180px;\" class=\"btn btn-twitter\" type=\"button\">\n                      <span> Log in with Twitter</span>\n                  </button><br><br>\n                  <button style=\"margin-bottom: 4px;width:180px;\" class=\"btn btn-facebook\" type=\"button\">\n                      <span> Log in with Facebook</span>\n                    </button><br><br>\n                    \n                      <button style=\"margin-bottom: 4px;width:180px;\" class=\"btn btn-google-plus\" type=\"button\">\n                          <span> Log in with Google+</span>\n                        </button><br>\n                  \n                <!-- <h2>Sign up</h2>\n                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> -->\n                <!-- <button type=\"button\" class=\"btn btn-primary active mt-3\" style=\"width:150px;\">Register Now!</button> -->\n                \n              </div>\n            </div>\n          </div>\n          \n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/views/pages/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_web_service__ = __webpack_require__("../../../../../src/app/web.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    // messagepassword: boolean = false;
    function LoginComponent(Router, WebService) {
        this.Router = Router;
        this.WebService = WebService;
        this.test = new Date();
        this.email = "";
        this.password = "";
        this.messageemailpwd = false;
        // messageemail: boolean = false;
        this.errormessage = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.Login = function () {
        var email = this.email;
        var password = this.password;
        this.validate(email, password);
        if (email != "" && password != "") {
            this.WebService.Login(email, password);
            this.loginvalid = localStorage.getItem("loginvalid");
            if (this.loginvalid == "false") {
                this.errormessage = true;
            }
            else {
                this.errormessage = false;
            }
        }
    };
    LoginComponent.prototype.validate = function (email, password) {
        this.errormessage = false;
        if (email == "") {
            this.errormessage = true;
        }
        else {
            this.errormessage = false;
        }
        if (password == "") {
            this.errormessage = true;
        }
        else {
            this.errormessage = false;
        }
    };
    LoginComponent.prototype.register = function () {
        this.Router.navigate(['pages/register']);
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/views/pages/login.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_1_app_web_service__["a" /* WebService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_1_app_web_service__["a" /* WebService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/pages/pages-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagesRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__404_component__ = __webpack_require__("../../../../../src/app/views/pages/404.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__500_component__ = __webpack_require__("../../../../../src/app/views/pages/500.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_component__ = __webpack_require__("../../../../../src/app/views/pages/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__register_component__ = __webpack_require__("../../../../../src/app/views/pages/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: '',
        data: {
            title: 'Example Pages'
        },
        children: [
            {
                path: '404',
                component: __WEBPACK_IMPORTED_MODULE_2__404_component__["a" /* P404Component */],
                data: {
                    title: 'Page 404'
                }
            },
            {
                path: '500',
                component: __WEBPACK_IMPORTED_MODULE_3__500_component__["a" /* P500Component */],
                data: {
                    title: 'Page 500'
                }
            },
            {
                path: 'login',
                component: __WEBPACK_IMPORTED_MODULE_4__login_component__["a" /* LoginComponent */],
                data: {
                    title: 'Login Page'
                }
            },
            {
                path: 'register',
                component: __WEBPACK_IMPORTED_MODULE_5__register_component__["a" /* RegisterComponent */],
                data: {
                    title: 'Register Page'
                }
            }
        ]
    }
];
var PagesRoutingModule = /** @class */ (function () {
    function PagesRoutingModule() {
    }
    PagesRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes), __WEBPACK_IMPORTED_MODULE_6__angular_http__["c" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormsModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], PagesRoutingModule);
    return PagesRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/views/pages/pages.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__404_component__ = __webpack_require__("../../../../../src/app/views/pages/404.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__500_component__ = __webpack_require__("../../../../../src/app/views/pages/500.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_component__ = __webpack_require__("../../../../../src/app/views/pages/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_component__ = __webpack_require__("../../../../../src/app/views/pages/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_routing_module__ = __webpack_require__("../../../../../src/app/views/pages/pages-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_5__pages_routing_module__["a" /* PagesRoutingModule */], __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormsModule */]],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__404_component__["a" /* P404Component */],
                __WEBPACK_IMPORTED_MODULE_2__500_component__["a" /* P500Component */],
                __WEBPACK_IMPORTED_MODULE_3__login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_4__register_component__["a" /* RegisterComponent */]
            ]
        })
    ], PagesModule);
    return PagesModule;
}());



/***/ }),

/***/ "../../../../../src/app/views/pages/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app flex-row align-items-center\">\n  <div class=\"container\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-sm-5\">\n        <div class=\"card mx-4\">\n          <div class=\"card-body p-4\">\n            <h1>Register</h1>\n            <p class=\"text-muted\">Create your account</p>\n            <div class=\"input-group mb-3\">\n              <span class=\"input-group-addon\"><i class=\"icon-user\"></i></span>\n              <input type=\"text\" class=\"form-control\" placeholder=\"Firstname\">\n            </div>\n            <div class=\"input-group mb-3\">\n              <span class=\"input-group-addon\"><i class=\"icon-user\"></i></span>\n              <input type=\"text\" class=\"form-control\" placeholder=\"Lastname\">\n            </div>\n            <div class=\"input-group mb-3\">\n                \n              <span class=\"input-group-addon\"><i class=\"icon-screen-smartphone\"></i></span>\n              <input type=\"text\" class=\"form-control\" placeholder=\"Mobile Number\">\n            </div>\n\n            <div class=\"input-group mb-3\">\n              <span class=\"input-group-addon\">@</span>\n              <input type=\"text\" class=\"form-control\" placeholder=\"Email\">\n            </div>\n\n            <div class=\"input-group mb-3\">\n              <span class=\"input-group-addon\"><i class=\"icon-lock\"></i></span>\n              <input type=\"password\" class=\"form-control\" placeholder=\"Password\">\n            </div>\n\n            <!-- <div class=\"input-group mb-4\">\n              <span class=\"input-group-addon\"><i class=\"icon-lock\"></i></span>\n              <input type=\"password\" class=\"form-control\" placeholder=\"Repeat password\">\n            </div> -->\n            <div class=\"input-group mb-3\">\n            <button type=\"button\" class=\"btn btn-block btn-success\" style=\"width:200px;border-radius:25px;\">Create Account</button>\n          </div>\n            <span>Alredy Registered? </span><br>\n            <a href=\"#\">Login</a>\n            \n          </div>\n         <!-- <div class=\"card-footer p-4\">\n             <div class=\"row\">\n              <div class=\"col-6\">\n                <button class=\"btn btn-block btn-facebook\" type=\"button\"><span>facebook</span></button>\n              </div>\n              <div class=\"col-6\">\n                <button class=\"btn btn-block btn-twitter\" type=\"button\"><span>twitter</span></button>\n              </div>\n            </div>\n          </div> -->\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/views/pages/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegisterComponent = /** @class */ (function () {
    function RegisterComponent() {
    }
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/views/pages/register.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ })

});
//# sourceMappingURL=pages.module.chunk.js.map