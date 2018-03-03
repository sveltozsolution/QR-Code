webpackJsonp(["dashboard.module"],{

/***/ "../../../../../src/app/views/dashboard/dashboard-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_component__ = __webpack_require__("../../../../../src/app/views/dashboard/dashboard.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__dashboard_component__["a" /* DashboardComponent */],
        data: {
            title: 'Dashboard'
        }
    }
];
var DashboardRoutingModule = /** @class */ (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/views/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>\n  statistics\n</h1>\n<div class=\"row\">\n  <div id=\"wrapper\" #wrapper class=\"col-sm-4\">\n    <a></a>\n\n    <qr-code style=\"margin-left: 15px;\" [value]=\"qrdata\" [size]=\"110\" #qrcode></qr-code>\n\n  </div>\n  <div class=\"col-sm-8\">\n    <a>Created date:</a>\n    <b>{{generateddate}}</b>\n    <br>\n    <a>URL:</a>\n    <b>{{qrdata}}</b>\n  </div>\n\n</div>\n<br>\n<br>\n\n<br>\n<div class=\"row\">\n  <div class=\"col-sm-3\">\n    <!-- <a>Browser:<b>{{browsername}}</b></a>  -->\n  </div>\n  <!-- <div  class=\"col-sm-3\" >\n    <a>OS:<b>{{os}}</b></a>\n         </div> -->\n  <div class=\"col-sm-3\">\n\n    <!-- <a>Country</a> -->\n  </div>\n  <div class=\"col-sm-3\">\n    <!-- <a>City</a> -->\n  </div>\n\n</div>\n<h2>Scans over time</h2>\n\n<br>\n<!--<piechart ng-model=\"vm.data\"></piechart>-->\n<div>\n\n\n</div>\n\n\n\n\n<div class=\"animated fadeIn\">\n\n\n  <div class=\"row\">\n    <div class=\"col-sm-6 col-lg-3\">\n      <div class=\"card text-white bg-primary\">\n        <div class=\"card-body pb-0\">\n          <div class=\"btn-group float-right\" dropdown>\n            <button type=\"button\" class=\"btn btn-transparent dropdown-toggle p-0\" dropdownToggle>\n              <i class=\"icon-settings\"></i>\n            </button>\n            <div class=\"dropdown-menu dropdown-menu-right\" *dropdownMenu>\n              <a class=\"dropdown-item\" href=\"#\">Action</a>\n              <a class=\"dropdown-item\" href=\"#\">Another action</a>\n              <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n            </div>\n          </div>\n          <h4 class=\"mb-0\">{{count}}</h4>\n          <p>Scans</p>\n        </div>\n        <div class=\"chart-wrapper px-3\" style=\"height:70px;\">\n          <canvas baseChart class=\"chart\" [datasets]=\"lineChart1Data\" [labels]=\"lineChart1Labels\" [options]=\"lineChart1Options\" [colors]=\"lineChart1Colours\"\n            [legend]=\"lineChart1Legend\" [chartType]=\"lineChart1Type\" (chartHover)=\"chartHovered($event)\" (chartClick)=\"chartClicked($event)\"></canvas>\n        </div>\n      </div>\n    </div>\n    <!--/.col-->\n    <div class=\"col-sm-6 col-lg-3\">\n      <div class=\"card text-white bg-info\">\n        <div class=\"card-body pb-0\">\n          <button type=\"button\" class=\"btn btn-transparent p-0 float-right\">\n            <i class=\"icon-location-pin\"></i>\n          </button>\n          <h4 class=\"mb-0\"></h4>\n          <h3>OS</h3>\n          <p> Windows:\n            <b>{{windows}}</b>\n          </p>\n          <p> Other:\n            <b>{{Otheros}}</b>\n          </p>\n        </div>\n        <div class=\"chart-wrapper px-3\" style=\"height:70px;\">\n          <canvas baseChart class=\"chart\" [datasets]=\"lineChart2Data\" [labels]=\"lineChart2Labels\" [options]=\"lineChart2Options\" [colors]=\"lineChart2Colours\"\n            [legend]=\"lineChart2Legend\" [chartType]=\"lineChart2Type\" (chartHover)=\"chartHovered($event)\" (chartClick)=\"chartClicked($event)\"></canvas>\n        </div>\n      </div>\n    </div>\n    <!--/.col-->\n    <div class=\"col-sm-6 col-lg-3\">\n      <div class=\"card text-white bg-warning\">\n        <div class=\"card-body pb-0\">\n          <div class=\"btn-group float-right\" dropdown>\n            <button type=\"button\" class=\"btn btn-transparent dropdown-toggle p-0\" dropdownToggle>\n              <i class=\"icon-settings\"></i>\n            </button>\n            <div class=\"dropdown-menu dropdown-menu-right\" *dropdownMenu>\n              <a class=\"dropdown-item\" href=\"#\">Action</a>\n              <a class=\"dropdown-item\" href=\"#\">Another action</a>\n              <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n            </div>\n          </div>\n          <h4 class=\"mb-0\"> </h4>\n          <h3>Browsers</h3>\n          <p> Crome:\n            <b>{{crome}}</b>\n          </p>\n          <p> Other:\n            <b>{{otherbrowser}}</b>\n          </p>\n        </div>\n        <div class=\"chart-wrapper\" style=\"height:70px;\">\n          <canvas baseChart class=\"chart\" [datasets]=\"lineChart3Data\" [labels]=\"lineChart3Labels\" [options]=\"lineChart3Options\" [colors]=\"lineChart3Colours\"\n            [legend]=\"lineChart3Legend\" [chartType]=\"lineChart3Type\" (chartHover)=\"chartHovered($event)\" (chartClick)=\"chartClicked($event)\"></canvas>\n        </div>\n      </div>\n    </div>\n    <!--/.col-->\n    <div class=\"col-sm-6 col-lg-3\">\n      <div class=\"card text-white bg-danger\">\n        <div class=\"card-body pb-0\">\n          <div class=\"btn-group float-right\" dropdown>\n            <button type=\"button\" class=\"btn btn-transparent dropdown-toggle p-0\" dropdownToggle>\n              <i class=\"icon-settings\"></i>\n            </button>\n            <div class=\"dropdown-menu dropdown-menu-right\" *dropdownMenu>\n              <a class=\"dropdown-item\" href=\"#\">Action</a>\n              <a class=\"dropdown-item\" href=\"#\">Another action</a>\n              <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n            </div>\n          </div>\n          <h4 class=\"mb-0\"></h4>\n          <p>{{city}}</p>\n        </div>\n        <div class=\"chart-wrapper px-3\" style=\"height:70px;\">\n          <canvas baseChart class=\"chart\" [datasets]=\"barChart1Data\" [labels]=\"barChart1Labels\" [options]=\"barChart1Options\" [colors]=\"barChart1Colours\"\n            [legend]=\"barChart1Legend\" [chartType]=\"barChart1Type\" (chartHover)=\"chartHovered($event)\" (chartClick)=\"chartClicked($event)\"></canvas>\n        </div>\n      </div>\n    </div>\n    <!--/.col-->\n  </div>\n  <!--/.row-->\n  <div class=\"card\">\n    <div class=\"card-body\">\n      <div class=\"row\">\n        <div class=\"col-sm-5\">\n          <h4 class=\"card-title mb-0\">Traffic</h4>\n          <div class=\"small text-muted\">November 2015</div>\n        </div>\n        <!--/.col-->\n        <div class=\"col-sm-7 d-none d-md-block\">\n          <button type=\"button\" class=\"btn btn-primary float-right\">\n            <i class=\"icon-cloud-download\"></i>\n          </button>\n          <div class=\"btn-toolbar float-right\" role=\"toolbar\" aria-label=\"Toolbar with button groups\">\n            <div class=\"btn-group mr-3\" data-toggle=\"buttons\" aria-label=\"First group\">\n              <label class=\"btn btn-outline-secondary\">\n                <input type=\"radio\" name=\"options\" id=\"option1\"> Day\n              </label>\n              <label class=\"btn btn-outline-secondary active\">\n                <input type=\"radio\" name=\"options\" id=\"option2\" checked> Month\n              </label>\n              <label class=\"btn btn-outline-secondary\">\n                <input type=\"radio\" name=\"options\" id=\"option3\"> Year\n              </label>\n            </div>\n          </div>\n        </div>\n        <!--/.col-->\n      </div>\n      <!--/.row-->\n      <div class=\"chart-wrapper\" style=\"height:300px;margin-top:40px;\">\n        <canvas baseChart class=\"chart\" [datasets]=\"mainChartData\" [labels]=\"mainChartLabels\" [options]=\"mainChartOptions\" [colors]=\"mainChartColours\"\n          [legend]=\"mainChartLegend\" [chartType]=\"mainChartType\" (chartHover)=\"chartHovered($event)\" (chartClick)=\"chartClicked($event)\"></canvas>\n      </div>\n    </div>\n    <h1>piechart</h1>\n    <div style=\"display: block\">\n      <canvas baseChart [data]=\"pieChartData\" [labels]=\"pieChartLabels\" [chartType]=\"pieChartType\" (chartHover)=\"chartHovered($event)\"\n        (chartClick)=\"chartClicked($event)\"></canvas>\n    </div>\n    <!-- <div class=\"card-footer\">\n      <ul>\n        <li>\n          <div class=\"text-muted\">Visits</div>\n          <strong>29.703 Users (40%)</strong>\n          <div class=\"progress progress-xs mt-2\">\n            <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 40%\" aria-valuenow=\"40\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n          </div>\n        </li>\n        <li class=\"d-none d-md-table-cell\">\n          <div class=\"text-muted\">Unique</div>\n          <strong>24.093 Users (20%)</strong>\n          <div class=\"progress progress-xs mt-2\">\n            <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 20%\" aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n          </div>\n        </li>\n        <li>\n          <div class=\"text-muted\">Pageviews</div>\n          <strong>78.706 Views (60%)</strong>\n          <div class=\"progress progress-xs mt-2\">\n            <div class=\"progress-bar bg-warning\" role=\"progressbar\" style=\"width: 60%\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n          </div>\n        </li>\n        <li class=\"d-none d-md-table-cell\">\n          <div class=\"text-muted\">New Users</div>\n          <strong>22.123 Users (80%)</strong>\n          <div class=\"progress progress-xs mt-2\">\n            <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 80%\" aria-valuenow=\"80\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n          </div>\n        </li>\n        <li class=\"d-none d-md-table-cell\">\n          <div class=\"text-muted\">Bounce Rate</div>\n          <strong>40.15%</strong>\n          <div class=\"progress progress-xs mt-2\">\n            <div class=\"progress-bar\" role=\"progressbar\" style=\"width: 40%\" aria-valuenow=\"40\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n          </div>\n        </li>\n      </ul>\n    </div> -->\n  </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/views/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_web_service__ = __webpack_require__("../../../../../src/app/web.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(webservice, route) {
        var _this = this;
        this.webservice = webservice;
        this.route = route;
        this.Otheros = 0;
        this.windows = 0;
        this.otherbrowser = 0;
        this.crome = 0;
        this.count = 0;
        this.pieChartLabels = ['Crome', 'Other'];
        this.pieChartData = [this.crome, this.otherbrowser];
        this.pieChartType = 'pie';
        // events
        this.brandPrimary = '#20a8d8';
        this.brandSuccess = '#4dbd74';
        this.brandInfo = '#63c2de';
        this.brandWarning = '#f8cb00';
        this.brandDanger = '#f86c6b';
        // dropdown buttons
        // public status: { isopen } = { isopen: false };
        // public toggleDropdown($event: MouseEvent): void {
        //   $event.preventDefault();
        //   $event.stopPropagation();
        //   this.status.isopen = !this.status.isopen;
        // }
        // lineChart1
        this.lineChart1Data = [
            {
                data: [65, 59, 84, 84, 51, 55, 40],
                label: 'Series A'
            }
        ];
        this.lineChart1Labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        this.lineChart1Options = {
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                        gridLines: {
                            color: 'transparent',
                            zeroLineColor: 'transparent'
                        },
                        ticks: {
                            fontSize: 2,
                            fontColor: 'transparent',
                        }
                    }],
                yAxes: [{
                        display: false,
                        ticks: {
                            display: false,
                            min: 40 - 5,
                            max: 84 + 5,
                        }
                    }],
            },
            elements: {
                line: {
                    borderWidth: 1
                },
                point: {
                    radius: 4,
                    hitRadius: 10,
                    hoverRadius: 4,
                },
            },
            legend: {
                display: false
            }
        };
        this.lineChart1Colours = [
            {
                backgroundColor: this.brandPrimary,
                borderColor: 'rgba(255,255,255,.55)'
            }
        ];
        this.lineChart1Legend = false;
        this.lineChart1Type = 'line';
        // lineChart2
        this.lineChart2Data = [
            {
                data: [1, 18, 9, 17, 34, 22, 11],
                label: 'Series A'
            }
        ];
        this.lineChart2Labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        this.lineChart2Options = {
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                        gridLines: {
                            color: 'transparent',
                            zeroLineColor: 'transparent'
                        },
                        ticks: {
                            fontSize: 2,
                            fontColor: 'transparent',
                        }
                    }],
                yAxes: [{
                        display: false,
                        ticks: {
                            display: false,
                            min: 1 - 5,
                            max: 34 + 5,
                        }
                    }],
            },
            elements: {
                line: {
                    tension: 0.00001,
                    borderWidth: 1
                },
                point: {
                    radius: 4,
                    hitRadius: 10,
                    hoverRadius: 4,
                },
            },
            legend: {
                display: false
            }
        };
        this.lineChart2Colours = [
            {
                backgroundColor: this.brandInfo,
                borderColor: 'rgba(255,255,255,.55)'
            }
        ];
        this.lineChart2Legend = false;
        this.lineChart2Type = 'line';
        // lineChart3
        this.lineChart3Data = [
            {
                data: [78, 81, 80, 45, 34, 12, 40],
                label: 'Series A'
            }
        ];
        this.lineChart3Labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        this.lineChart3Options = {
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                        display: false
                    }],
                yAxes: [{
                        display: false
                    }]
            },
            elements: {
                line: {
                    borderWidth: 2
                },
                point: {
                    radius: 0,
                    hitRadius: 10,
                    hoverRadius: 4,
                },
            },
            legend: {
                display: false
            }
        };
        this.lineChart3Colours = [
            {
                backgroundColor: 'rgba(255,255,255,.2)',
                borderColor: 'rgba(255,255,255,.55)',
            }
        ];
        this.lineChart3Legend = false;
        this.lineChart3Type = 'line';
        // barChart1
        this.barChart1Data = [
            {
                data: [78, 81, 80, 45, 34, 12, 40, 78, 81, 80, 45, 34, 12, 40, 12, 40],
                label: 'Series A'
            }
        ];
        this.barChart1Labels = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16'];
        this.barChart1Options = {
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                        display: false,
                        barPercentage: 0.6,
                    }],
                yAxes: [{
                        display: false
                    }]
            },
            legend: {
                display: false
            }
        };
        this.barChart1Colours = [
            {
                backgroundColor: 'rgba(255,255,255,.3)',
                borderWidth: 0
            }
        ];
        this.barChart1Legend = false;
        this.barChart1Type = 'bar';
        /* tslint:disable:max-line-length */
        this.mainChartLabels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Thursday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        /* tslint:enable:max-line-length */
        this.mainChartOptions = {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                        gridLines: {
                            drawOnChartArea: false,
                        },
                        ticks: {
                            callback: function (value) {
                                return value.charAt(0);
                            }
                        }
                    }],
                yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            maxTicksLimit: 5,
                            stepSize: Math.ceil(250 / 5),
                            max: 250
                        }
                    }]
            },
            elements: {
                line: {
                    borderWidth: 2
                },
                point: {
                    radius: 0,
                    hitRadius: 10,
                    hoverRadius: 4,
                    hoverBorderWidth: 3,
                }
            },
            legend: {
                display: false
            }
        };
        this.mainChartColours = [
            {
                backgroundColor: this.convertHex(this.brandInfo, 10),
                borderColor: this.brandInfo,
                pointHoverBackgroundColor: '#fff'
            },
            {
                backgroundColor: 'transparent',
                borderColor: this.brandSuccess,
                pointHoverBackgroundColor: '#fff'
            },
            {
                backgroundColor: 'transparent',
                borderColor: this.brandDanger,
                pointHoverBackgroundColor: '#fff',
                borderWidth: 1,
                borderDash: [8, 5]
            }
        ];
        this.mainChartLegend = false;
        this.mainChartType = 'line';
        // social box charts
        this.socialChartData1 = [
            {
                data: [65, 59, 84, 84, 51, 55, 40],
                label: 'Facebook'
            }
        ];
        this.socialChartData2 = [
            {
                data: [1, 13, 9, 17, 34, 41, 38],
                label: 'Twitter'
            }
        ];
        this.socialChartData3 = [
            {
                data: [78, 81, 80, 45, 34, 12, 40],
                label: 'LinkedIn'
            }
        ];
        this.socialChartData4 = [
            {
                data: [35, 23, 56, 22, 97, 23, 64],
                label: 'Google+'
            }
        ];
        this.socialChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        this.socialChartOptions = {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                        display: false,
                    }],
                yAxes: [{
                        display: false,
                    }]
            },
            elements: {
                line: {
                    borderWidth: 2
                },
                point: {
                    radius: 0,
                    hitRadius: 10,
                    hoverRadius: 4,
                    hoverBorderWidth: 3,
                }
            },
            legend: {
                display: false
            }
        };
        this.socialChartColours = [
            {
                backgroundColor: 'rgba(255,255,255,.1)',
                borderColor: 'rgba(255,255,255,.55)',
                pointHoverBackgroundColor: '#fff'
            }
        ];
        this.socialChartLegend = false;
        this.socialChartType = 'line';
        // sparkline charts
        this.sparklineChartData1 = [
            {
                data: [35, 23, 56, 22, 97, 23, 64],
                label: 'Clients'
            }
        ];
        this.sparklineChartData2 = [
            {
                data: [65, 59, 84, 84, 51, 55, 40],
                label: 'Clients'
            }
        ];
        this.sparklineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        this.sparklineChartOptions = {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                        display: false,
                    }],
                yAxes: [{
                        display: false,
                    }]
            },
            elements: {
                line: {
                    borderWidth: 2
                },
                point: {
                    radius: 0,
                    hitRadius: 10,
                    hoverRadius: 4,
                    hoverBorderWidth: 3,
                }
            },
            legend: {
                display: false
            }
        };
        this.sparklineChartDefault = [
            {
                backgroundColor: 'transparent',
                borderColor: '#d1d4d7',
            }
        ];
        this.sparklineChartPrimary = [
            {
                backgroundColor: 'transparent',
                borderColor: this.brandPrimary,
            }
        ];
        this.sparklineChartInfo = [
            {
                backgroundColor: 'transparent',
                borderColor: this.brandInfo,
            }
        ];
        this.sparklineChartDanger = [
            {
                backgroundColor: 'transparent',
                borderColor: this.brandDanger,
            }
        ];
        this.sparklineChartWarning = [
            {
                backgroundColor: 'transparent',
                borderColor: this.brandWarning,
            }
        ];
        this.sparklineChartSuccess = [
            {
                backgroundColor: 'transparent',
                borderColor: this.brandSuccess,
            }
        ];
        this.sparklineChartLegend = false;
        this.sparklineChartType = 'line';
        // mainChart
        this.mainChartElements = 27;
        this.mainChartData1 = [];
        this.mainChartData2 = [];
        this.mainChartData3 = [];
        this.mainChartData = [
            {
                data: this.mainChartData1,
                label: 'Current'
            },
            {
                data: this.mainChartData2,
                label: 'Previous'
            },
            {
                data: this.mainChartData3,
                label: 'BEP'
            }
        ];
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = params['id']; // (+) converts string 'id' to a number
        });
        this.getcount(this.id);
        this.bindqrcode();
    }
    // events
    DashboardComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    DashboardComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    // convert Hex to RGBA
    DashboardComponent.prototype.convertHex = function (hex, opacity) {
        hex = hex.replace('#', '');
        var r = parseInt(hex.substring(0, 2), 16);
        var g = parseInt(hex.substring(2, 4), 16);
        var b = parseInt(hex.substring(4, 6), 16);
        var rgba = 'rgba(' + r + ', ' + g + ', ' + b + ', ' + opacity / 100 + ')';
        return rgba;
    };
    DashboardComponent.prototype.random = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    DashboardComponent.prototype.ngOnInit = function () {
        // generate random values for mainChart
        for (var i = 0; i <= this.mainChartElements; i++) {
            this.mainChartData1.push(this.random(50, 200));
            this.mainChartData2.push(this.random(80, 100));
            this.mainChartData3.push(65);
        }
    };
    DashboardComponent.prototype.bindqrcode = function () {
        var _this = this;
        this.webservice.getallqrcode().subscribe(function (qrcode) {
            _this.qrcode = qrcode;
            for (var i = 0; i <= qrcode.length; i++) {
                var iddata = qrcode[i]._id;
                if (_this.id == iddata) {
                    _this.qrdata = qrcode[i].qrdata;
                    _this.generateddate = qrcode[i].generateddate;
                }
            }
        });
        this.webservice.getuserdata().subscribe(function (qruserdata) {
            _this.ipa = [];
            for (var i = 0; i <= qruserdata.length; i++) {
                _this.count++;
                var iddata = qruserdata[i].userid;
                if (_this.id == iddata) {
                    _this.devicedeatils = qruserdata[i].qruserinfo;
                    var finalData = _this.devicedeatils.replace(/\\/g, "");
                    _this.device = JSON.parse(finalData);
                    debugger;
                    //  let devicedata=[]
                    _this.browser = _this.device.browsername;
                    //  browser
                    if (_this.browser == "chrome") {
                        _this.crome++;
                    }
                    else {
                        _this.otherbrowser++;
                    }
                    // os
                    _this.osy = _this.device.os;
                    if (_this.osy == "windows") {
                        _this.windows++;
                    }
                    else {
                        _this.Otheros++;
                    }
                    //    if( this.osy=="chrome"){
                    //    this.crome++
                    //  }
                    //  else {
                    //    this.otherbrowser++
                    //  }
                    _this.ipadress = _this.device.ip;
                    _this.ipa.push(_this.ipadress);
                    _this.city = _this.device.city;
                    _this.country = _this.device.country;
                    debugger;
                }
            }
        });
    };
    DashboardComponent.prototype.getcount = function (id) {
        var _this = this;
        this.webservice.getusercount(id).subscribe(function (qrcode) {
            debugger;
            _this.totalcount = qrcode;
            // for (var i = 0; i <= qrcode.length; i++) {
            //   var iddata = qrcode[i]._id
            //   if (this.id == iddata) {
            //     // this.qrdata = qrcode[i].qrdata
            //     // this.generateddate=qrcode[i].generateddate
            //   }
        });
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/views/dashboard/dashboard.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_2_app_web_service__["a" /* WebService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_app_web_service__["a" /* WebService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/dashboard/dashboard.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_charts_ng2_charts__ = __webpack_require__("../../../../ng2-charts/ng2-charts.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_charts_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_charts_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_dropdown__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_component__ = __webpack_require__("../../../../../src/app/views/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_routing_module__ = __webpack_require__("../../../../../src/app/views/dashboard/dashboard-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_qrcode__ = __webpack_require__("../../../../angular2-qrcode/lib/angular2-qrcode.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// import { MyqrcodeRoutingModule } from 'app/views/myqrcode/myqrcode-routing.module';
var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__dashboard_routing_module__["a" /* DashboardRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_1_ng2_charts_ng2_charts__["ChartsModule"],
                __WEBPACK_IMPORTED_MODULE_5_angular2_qrcode__["b" /* QRCodeModule */],
                __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_dropdown__["a" /* BsDropdownModule */],
                __WEBPACK_IMPORTED_MODULE_1_ng2_charts_ng2_charts__["ChartsModule"]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__dashboard_component__["a" /* DashboardComponent */]]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ })

});
//# sourceMappingURL=dashboard.module.chunk.js.map