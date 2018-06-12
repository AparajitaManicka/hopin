(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n  #footer-contentportfolio {\r\n    background: black;\r\n    text-align: center;\r\n    color: white;\r\n    height: 50px;\r\n    position: fixed;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    padding: 0.5rem;\r\n    border-top-width: 5px;\r\n    border-top-style: solid;\r\n    border-top-color:#d9534f;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\">\r\n<link href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css\" rel=\"stylesheet\" />\r\n<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"></script>\r\n<script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\"></script>\r\n<link href='https://fonts.googleapis.com/css?family=Galada' rel='stylesheet'>\r\n<link href='https://fonts.googleapis.com/css?family=Satisfy' rel='stylesheet'>\r\n\r\n<head>\r\n  <meta charset=\"utf-8\" />\r\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n</head>\r\n<nav class=\"navbar navbar-inverse navbar-fixed-top\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"navbar-header\">\r\n      <a class=\"navbar-brand\" href=\"#\" style=\"font-size:28px;color:#d9534f;font-family:'Galada'\">\r\n        <span class=\"glyphicon glyphicon-share-alt\"></span> HOP IN</a>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</nav>\r\n<router-outlet></router-outlet>\r\n<div>\r\n  <footer>\r\n    <div id=\"footer-contentportfolio\">\r\n      <p>@Copyright 2018 Hopin Inc </p>\r\n    </div>\r\n  </footer>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(flashmsgservice) {
        this.flashmsgservice = flashmsgservice;
        this.title = 'HopIn';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [angular2_flash_messages__WEBPACK_IMPORTED_MODULE_1__["FlashMessagesService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _choice_choice_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./choice/choice.component */ "./src/app/choice/choice.component.ts");
/* harmony import */ var _offeraride_offeraride_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./offeraride/offeraride.component */ "./src/app/offeraride/offeraride.component.ts");
/* harmony import */ var _bookaride_bookaride_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./bookaride/bookaride.component */ "./src/app/bookaride/bookaride.component.ts");
/* harmony import */ var _viewridesofferedbyyou_viewridesofferedbyyou_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./viewridesofferedbyyou/viewridesofferedbyyou.component */ "./src/app/viewridesofferedbyyou/viewridesofferedbyyou.component.ts");
/* harmony import */ var _viewridestravelledbyyou_viewridestravelledbyyou_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./viewridestravelledbyyou/viewridestravelledbyyou.component */ "./src/app/viewridestravelledbyyou/viewridestravelledbyyou.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var appRoutes = [
    { path: '', component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_4__["WelcomeComponent"] },
    { path: 'welcome', component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_4__["WelcomeComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"] },
    { path: 'choice', component: _choice_choice_component__WEBPACK_IMPORTED_MODULE_12__["ChoiceComponent"] },
    { path: 'offeraride', component: _offeraride_offeraride_component__WEBPACK_IMPORTED_MODULE_13__["OfferarideComponent"] },
    { path: 'bookaride', component: _bookaride_bookaride_component__WEBPACK_IMPORTED_MODULE_14__["BookarideComponent"] },
    { path: 'viewridesofferedbyyou', component: _viewridesofferedbyyou_viewridesofferedbyyou_component__WEBPACK_IMPORTED_MODULE_15__["ViewridesofferedbyyouComponent"] },
    { path: 'viewridestravelledbyyou', component: _viewridestravelledbyyou_viewridestravelledbyyou_component__WEBPACK_IMPORTED_MODULE_16__["ViewridestravelledbyyouComponent"] },
    { path: 'logout', component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_4__["WelcomeComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_11__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_4__["WelcomeComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"],
                _choice_choice_component__WEBPACK_IMPORTED_MODULE_12__["ChoiceComponent"],
                _offeraride_offeraride_component__WEBPACK_IMPORTED_MODULE_13__["OfferarideComponent"],
                _bookaride_bookaride_component__WEBPACK_IMPORTED_MODULE_14__["BookarideComponent"],
                _viewridesofferedbyyou_viewridesofferedbyyou_component__WEBPACK_IMPORTED_MODULE_15__["ViewridesofferedbyyouComponent"],
                _viewridestravelledbyyou_viewridestravelledbyyou_component__WEBPACK_IMPORTED_MODULE_16__["ViewridestravelledbyyouComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(appRoutes),
                _angular_http__WEBPACK_IMPORTED_MODULE_1__["HttpModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                angular2_flash_messages__WEBPACK_IMPORTED_MODULE_8__["FlashMessagesModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_9__["AgmCoreModule"].forRoot({
                    apiKey: "AIzaSyBaRjCn1ljM2OIHAs2_qa_4P4p-ypv-kCg",
                    libraries: ["places"]
                })
            ],
            providers: [_app_service__WEBPACK_IMPORTED_MODULE_10__["AppService"], angular2_flash_messages__WEBPACK_IMPORTED_MODULE_8__["FlashMessagesService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppService = /** @class */ (function () {
    function AppService(http) {
        this.http = http;
        this._baseUrl = 'http://localhost:7000';
    }
    AppService.prototype.registerNewUser = function (userData) {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        this.http.post(this._baseUrl + "/signupuser", userData, { headers: headers })
            .subscribe(function (response) { return _this.res = response.json(); });
    };
    AppService.prototype.registerNewRide = function (rideDetails) {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        console.log("New ride offered:" + JSON.stringify(rideDetails));
        this.http.post(this._baseUrl + "/offeraride", rideDetails, { headers: headers })
            .subscribe(function (response) { return _this.res = response.json(); });
    };
    AppService.prototype.authenticateUser = function (username, password) {
        this.currentUser = username;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('username', username);
        headers.append('password', password);
        /*return this.http.post(this._baseUrl + "/authlogin", {headers:headers})
          .map((response: Response) => <any[]>response.json())
    */
    };
    AppService.prototype.ridesOffered = function () {
        return this.http.get(this._baseUrl + "/getridesoffered/" + this.currentUserId)
            .map(function (response) { return response.json(); });
    };
    AppService.prototype.ridesTravelled = function () {
        return this.http.get(this._baseUrl + "/getridestravelled/" + this.currentUserId)
            .map(function (response) { return response.json(); });
    };
    AppService.prototype.getUserId = function (username) {
        console.log("CALLiNG to get userid " + username);
        return this.http.get(this._baseUrl + "/getuserid/" + username)
            .map(function (response) { return response.json(); });
    };
    AppService.prototype.deleteride = function (cancelride) {
        console.log("DELETE Ride:" + cancelride);
        return this.http.post(this._baseUrl + "/deleteofferedride", cancelride)
            .map(function (response) { return response.json(); });
    };
    AppService.prototype.deletetravel = function (cancelride) {
        console.log("DELETE Ride:" + cancelride);
        return this.http.post(this._baseUrl + "/deletetravelledride", cancelride)
            .map(function (response) { return response.json(); });
    };
    AppService.prototype.searchRides = function (from, to, date) {
        return this.http.get(this._baseUrl + "/api/bookaride/" + from + "/" + to + "/" + date)
            .map(function (response) { return response.json(); });
    };
    AppService.prototype.bookRide = function (ride) {
        return this.http.post(this._baseUrl + "/api/reserveaseat", ride)
            .map(function (response) { return response.json(); });
    };
    AppService.prototype.confirmTransaction = function (confirmTransaction) {
        return this.http.post(this._baseUrl + "/api/userconfirm", confirmTransaction)
            .map(function (response) { return response.json(); });
    };
    AppService.prototype.handleError = function (error) {
        console.error(error);
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(error || 'Server Error');
    };
    AppService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./src/app/bookaride/bookaride.component.css":
/*!***************************************************!*\
  !*** ./src/app/bookaride/bookaride.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n    font-family: 'Times New Roman', Times, serif;\r\n}\r\n\r\n#header {\r\n    margin-top: 10px;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n#logo {\r\n    color: #ae275f;\r\n    font-size: 15px;\r\n\r\n}\r\n\r\nul,\r\nli {\r\n    padding: 0;\r\n}\r\n\r\nli {\r\n    display: inline;\r\n    margin: 5px;\r\n    font-size: 20px;\r\n    line-height: 18px;\r\n\r\n}\r\n\r\n.topnavlist li a {\r\n    color: black;\r\n}\r\n\r\n.topnavlist li a:hover {\r\n    color: #ae275f;\r\n}\r\n\r\n.sidenavlist li a {\r\n    color: black;\r\n}\r\n\r\n.sidenavlist li a:hover {\r\n    color: #ae275f;\r\n}\r\n\r\n.headsearch {\r\n    border: 1px solid #ae275f;\r\n    outline: none;\r\n    background-color: #ae275f;\r\n    font-family: 'Times New Roman', Times, serif;\r\n    font-size: 14px;\r\n    color: #ffffff;\r\n    padding: 0px 15px;\r\n    width: 400px;\r\n    height: 36px;\r\n    /* background-image: url(/img/Sprite_Homepage_miscellaneous.png); */\r\n    background-repeat: no-repeat;\r\n    background-position: 428px -808px;\r\n}\r\n\r\n#groups {\r\n    margin-left: 0px;\r\n}\r\n\r\n#services {\r\n    margin-left: 20px;\r\n}\r\n\r\n.login {\r\n\r\n    border: 1px solid #ae275f;\r\n    outline: none;\r\n    background-color: #ae275f;\r\n    font-family: 'Times New Roman', Times, serif;\r\n    font-size: 14px;\r\n    color: #ffffff;\r\n    padding: 0px 15px;\r\n    width: 200px;\r\n    height: 36px;\r\n\r\n}\r\n\r\n.inner-addon {\r\n    position: relative;\r\n}\r\n\r\n/* style icon */\r\n\r\n.inner-addon .glyphicon {\r\n    position: absolute;\r\n    padding: 10px;\r\n    pointer-events: none;\r\n}\r\n\r\n/* align icon */\r\n\r\n/* .left-addon .glyphicon  { left:  0px;} */\r\n\r\n.right-addon .glyphicon {\r\n    right: 0px;\r\n}\r\n\r\n/* add padding  */\r\n\r\n/* .left-addon input  { padding-left:  30px; } */\r\n\r\n.right-addon input {\r\n    padding-right: 30px;\r\n}\r\n\r\ninput[type=text], input[type=password],  input[type=date]{\r\nwidth: 100%;\r\npadding: 12px 20px;\r\nmargin: 8px 0;\r\ndisplay: inline-block;\r\nborder: 1px solid #ccc;\r\nbox-sizing: border-box;\r\n}\r\n\r\nbutton {\r\nbackground-color: #d9534f;\r\ncolor: white;\r\npadding: 14px 20px;\r\nmargin: 8px 0;\r\nborder: none;\r\ncursor: pointer;\r\nwidth: 100%;\r\n}\r\n\r\nbutton:hover {\r\nopacity: 0.8;\r\n}\r\n\r\n.cancelbtn {\r\nwidth: auto;\r\npadding: 10px 18px;\r\nbackground-color: #ae275f;\r\n}\r\n\r\n.imgcontainer {\r\ntext-align: center;\r\nmargin: 24px 0 12px 0;\r\n}\r\n\r\nimg.avatar {\r\nwidth: 40%;\r\nborder-radius: 50%;\r\n}\r\n\r\n.container {\r\npadding: 16px;\r\n}\r\n\r\nspan.psw {\r\nfloat: right;\r\npadding-top: 16px;\r\n}\r\n\r\n.formcontainer{\r\nwidth : 40%;\r\nmargin-left: 375px;\r\n\r\n}\r\n\r\n.book{\r\nwidth:150px;\r\nfloat:right;\r\n}\r\n\r\n#footer-contentportfolio {\r\n    background: black;\r\n    text-align: center;\r\n    color: white;\r\n    height: 50px;\r\n    position: fixed;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    padding: 0.5rem;\r\n    border-top-width: 5px;\r\n    border-top-style: solid;\r\n    border-top-color:#d9534f;\r\n}\r\n"

/***/ }),

/***/ "./src/app/bookaride/bookaride.component.html":
/*!****************************************************!*\
  !*** ./src/app/bookaride/bookaride.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<br>\n<br>\n<div class=\"formcontainer\">\n  <h2 style=\"color:#d9534f;font-family:'Galada'\">Find a Ride</h2>\n  <form id=\"bookarideform\">\n    <!-- action=\"/action_page.php\"  -->\n    <label for=\"leavingfrom\" style=\"font-size:15px;\">\n      <b>Leaving From:</b>\n    </label>\n    <br>\n    <input type=\"text\" [(ngModel)]=\"leavingfrom\" placeholder=\"Enter pick up location\" style=\"height:30px;\" name=\"leavingfrom\"\n      id=\"leavingfrom\">\n    <br>\n    <label for=\"leavingfrom\" style=\"font-size:15px;\">\n      <b>Leaving To:\n        <b>\n          <!-- </label> -->\n          <br>\n          <input type=\"text\" [(ngModel)]=\"leavingto\" placeholder=\"Enter drop off location\" style=\"height:30px;\" name=\"leavingto\" id=\"leavingto\">\n          <br>\n          <label for=\"date\" style=\"font-size:15px;\">\n            <b>Date:</b>\n          </label>\n          <br>\n          <input type=\"date\" [(ngModel)]=\"date\" placeholder=\"Enter the date\" style=\"height:30px;\" name=\"date\" id=\"date\">\n          <br>\n          <br>\n          <input type=\"button\" (click)=\"searchRides()\" value=\"Search\">\n\n\n          <div style=\"margin-left:10%;margin-right:10%\" *ngIf=\"showResults\">\n            <table class=\"table\">\n              <thead>\n                <tr>\n                  <th>Leaving From</th>\n                  <th>Leaving To</th>\n                  <th>Departure</th>\n                  <th>Seats Available</th>\n                  <th>Price</th>\n                  <th>Comment</th>\n                </tr>\n              </thead>\n              <tbody>\n\n                <tr *ngFor='let ride of availablerides'>\n                  <td>{{ride.pickup}}</td>\n                  <td>{{ride.dropoff}}</td>\n                  <td>{{ride.departure | date: 'medium'}}</td>\n                  <td>{{ride.seats}}</td>\n                  <td>{{ride.price}}</td>\n                  <td>{{ride.comment}}</td>\n                  <td>\n                    <input class=\"btn btn-danger\" type=\"button\" value=\"BOOK\" (click)=\"bookaride(ride)\">\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n\n\n          <div id=\"data\" style=\"width:80%;margin-left: 150px;\"></div>"

/***/ }),

/***/ "./src/app/bookaride/bookaride.component.ts":
/*!**************************************************!*\
  !*** ./src/app/bookaride/bookaride.component.ts ***!
  \**************************************************/
/*! exports provided: BookarideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookarideComponent", function() { return BookarideComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BookarideComponent = /** @class */ (function () {
    function BookarideComponent(appService) {
        this.appService = appService;
        this.showResults = false;
    }
    BookarideComponent.prototype.ngOnInit = function () {
    };
    BookarideComponent.prototype.searchRides = function () {
        var _this = this;
        this.appService.searchRides(this.leavingfrom, this.leavingto, this.date).subscribe(function (res) {
            _this.showResults = true;
            console.log("List of available rides:" + JSON.stringify(res));
            _this.availablerides = res;
        });
    };
    BookarideComponent.prototype.bookaride = function (ride) {
        console.log("Booking the seat -> " + JSON.stringify(ride));
        ride.seats = ride.seats - 1;
        console.log("Subtracting the seat -> " + JSON.stringify(ride));
        this.appService.bookRide(ride).subscribe(function (res) {
        });
        var userseatconfirmation = {
            pickup: ride.pickup,
            dropoff: ride.dropoff,
            departure: ride.departure,
            price: ride.price,
            seats: 1,
            UserId: this.appService.currentUserId
        };
        this.appService.confirmTransaction(userseatconfirmation).subscribe(function (res) {
        });
    };
    BookarideComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bookaride',
            template: __webpack_require__(/*! ./bookaride.component.html */ "./src/app/bookaride/bookaride.component.html"),
            styles: [__webpack_require__(/*! ./bookaride.component.css */ "./src/app/bookaride/bookaride.component.css")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]])
    ], BookarideComponent);
    return BookarideComponent;
}());



/***/ }),

/***/ "./src/app/choice/choice.component.css":
/*!*********************************************!*\
  !*** ./src/app/choice/choice.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n    font-family: 'Times New Roman', Times, serif;\r\n}\r\n\r\n#header {\r\n    margin-top: 10px;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n#logo {\r\n    color: #ae275f;\r\n    font-size: 15px;\r\n\r\n}\r\n\r\nul,\r\nli {\r\n    padding: 0;\r\n}\r\n\r\nli {\r\n    display: inline;\r\n    margin: 5px;\r\n    font-size: 20px;\r\n    line-height: 18px;\r\n\r\n}\r\n\r\n.topnavlist li a {\r\n    color: black;\r\n}\r\n\r\n.topnavlist li a:hover {\r\n    color: #ae275f;\r\n}\r\n\r\n.sidenavlist li a {\r\n    color: black;\r\n}\r\n\r\n.sidenavlist li a:hover {\r\n    color: #ae275f;\r\n}\r\n\r\n.headsearch {\r\n    border: 1px solid #ae275f;\r\n    outline: none;\r\n    background-color: #ae275f;\r\n    font-family: 'Times New Roman', Times, serif;\r\n    font-size: 14px;\r\n    color: #ffffff;\r\n    padding: 0px 15px;\r\n    width: 400px;\r\n    height: 36px;\r\n    /* background-image: url(/img/Sprite_Homepage_miscellaneous.png); */\r\n    background-repeat: no-repeat;\r\n    background-position: 428px -808px;\r\n}\r\n\r\n#groups {\r\n    margin-left: 0px;\r\n}\r\n\r\n#services {\r\n    margin-left: 20px;\r\n}\r\n\r\n.login {\r\n\r\n    border: 1px solid #ae275f;\r\n    outline: none;\r\n    background-color: #ae275f;\r\n    font-family: 'Times New Roman', Times, serif;\r\n    font-size: 14px;\r\n    color: #ffffff;\r\n    padding: 0px 15px;\r\n    width: 200px;\r\n    height: 36px;\r\n\r\n}\r\n\r\n.inner-addon {\r\n    position: relative;\r\n}\r\n\r\n/* style icon */\r\n\r\n.inner-addon .glyphicon {\r\n    position: absolute;\r\n    padding: 10px;\r\n    pointer-events: none;\r\n}\r\n\r\n/* align icon */\r\n\r\n/* .left-addon .glyphicon  { left:  0px;} */\r\n\r\n.right-addon .glyphicon {\r\n    right: 0px;\r\n}\r\n\r\n/* add padding  */\r\n\r\n/* .left-addon input  { padding-left:  30px; } */\r\n\r\n.right-addon input {\r\n    padding-right: 30px;\r\n}\r\n\r\ninput[type=text], input[type=password] {\r\nwidth: 100%;\r\npadding: 12px 20px;\r\nmargin: 8px 0;\r\ndisplay: inline-block;\r\nborder: 1px solid #ccc;\r\nbox-sizing: border-box;\r\n}\r\n\r\nbutton {\r\nbackground-color: #d9534f;\r\ncolor: white;\r\npadding: 14px 20px;\r\nmargin: 8px 0;\r\nborder: none;\r\ncursor: pointer;\r\nwidth: 100%;\r\nfont-size: 18px;\r\n}\r\n\r\nbutton:hover {\r\nopacity: 0.8;\r\n}\r\n\r\n.cancelbtn {\r\nwidth: auto;\r\npadding: 10px 18px;\r\nbackground-color: #ae275f;\r\n}\r\n\r\n.imgcontainer {\r\ntext-align: center;\r\nmargin: 24px 0 12px 0;\r\n}\r\n\r\nimg.avatar {\r\nwidth: 40%;\r\nborder-radius: 50%;\r\n}\r\n\r\n.container {\r\npadding: 16px;\r\n}\r\n\r\nspan.psw {\r\nfloat: right;\r\npadding-top: 16px;\r\n}\r\n\r\n.formcontainer{\r\nwidth : 40%;\r\nmargin-left: 375px;\r\n}\r\n\r\n#footer-contentportfolio {\r\n    background: black;\r\n    text-align: center;\r\n    color: white;\r\n    height: 50px;\r\n    position: fixed;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    padding: 0.5rem;\r\n    border-top-width: 5px;\r\n    border-top-style: solid;\r\n    border-top-color:#d9534f;\r\n}"

/***/ }),

/***/ "./src/app/choice/choice.component.html":
/*!**********************************************!*\
  !*** ./src/app/choice/choice.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<br>\n<br>\n<div id=\"form\">\n  <flash-messages></flash-messages>\n  <form id=\"choice\">\n\n    <div class=\"formcontainer\">\n      <h2 style=\"color:#d9534f;font-family:'Galada'\">What do you want to do?</h2>\n      <br>\n      <button type=\"button\" class=\"button\" value=\"Offer a ride\" [routerLink]=\"['/offeraride']\">Offer a Ride</button>\n      <button type=\"button\" class=\"button\" value=\"Book a ride\" [routerLink]=\"['/bookaride']\">Book a Ride</button>\n      <button type=\"button\" class=\"button\" value=\"View rides offered by you\" [routerLink]=\"['/viewridesofferedbyyou']\">View rides offered by you</button>\n      <button type=\"button\" class=\"button\" value=\"View rides travelled by you\" [routerLink]=\"['/viewridestravelledbyyou']\">View rides travelled by you</button>\n      <button type=\"button\" class=\"button\" [routerLink]=\"['/']\">Log Out</button>\n\n      <br>\n    </div>\n\n\n    <br>\n\n  </form>\n</div>\n\n<!-- <script src=\"js/login.js\" type=\"text/javascript\"></script> -->"

/***/ }),

/***/ "./src/app/choice/choice.component.ts":
/*!********************************************!*\
  !*** ./src/app/choice/choice.component.ts ***!
  \********************************************/
/*! exports provided: ChoiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChoiceComponent", function() { return ChoiceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChoiceComponent = /** @class */ (function () {
    function ChoiceComponent(appService) {
        this.appService = appService;
        console.log("@choice.. USER ID:" + appService.currentUserId);
    }
    ChoiceComponent.prototype.ngOnInit = function () {
    };
    ChoiceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-choice',
            template: __webpack_require__(/*! ./choice.component.html */ "./src/app/choice/choice.component.html"),
            styles: [__webpack_require__(/*! ./choice.component.css */ "./src/app/choice/choice.component.css")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]])
    ], ChoiceComponent);
    return ChoiceComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n    font-family: 'Times New Roman', Times, serif;\r\n}\r\n\r\n#header {\r\n    margin-top: 10px;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n#logo {\r\n    color: #ae275f;\r\n    font-size: 15px;\r\n\r\n}\r\n\r\nul,\r\nli {\r\n    padding: 0;\r\n}\r\n\r\nli {\r\n    display: inline;\r\n    margin: 5px;\r\n    font-size: 20px;\r\n    line-height: 18px;\r\n\r\n}\r\n\r\n.topnavlist li a {\r\n    color: black;\r\n}\r\n\r\n.topnavlist li a:hover {\r\n    color: #ae275f;\r\n}\r\n\r\n.sidenavlist li a {\r\n    color: black;\r\n}\r\n\r\n.sidenavlist li a:hover {\r\n    color: #ae275f;\r\n}\r\n\r\n.headsearch {\r\n    border: 1px solid #ae275f;\r\n    outline: none;\r\n    background-color: #ae275f;\r\n    font-family: 'Times New Roman', Times, serif;\r\n    font-size: 14px;\r\n    color: #ffffff;\r\n    padding: 0px 15px;\r\n    width: 400px;\r\n    height: 36px;\r\n    /* background-image: url(/img/Sprite_Homepage_miscellaneous.png); */\r\n    background-repeat: no-repeat;\r\n    background-position: 428px -808px;\r\n}\r\n\r\n#groups {\r\n    margin-left: 0px;\r\n}\r\n\r\n#services {\r\n    margin-left: 20px;\r\n}\r\n\r\n.login {\r\n\r\n    border: 1px solid #ae275f;\r\n    outline: none;\r\n    background-color: #ae275f;\r\n    font-family: 'Times New Roman', Times, serif;\r\n    font-size: 14px;\r\n    color: #ffffff;\r\n    padding: 0px 15px;\r\n    width: 200px;\r\n    height: 36px;\r\n\r\n}\r\n\r\n.inner-addon {\r\n    position: relative;\r\n}\r\n\r\n/* style icon */\r\n\r\n.inner-addon .glyphicon {\r\n    position: absolute;\r\n    padding: 10px;\r\n    pointer-events: none;\r\n}\r\n\r\n/* align icon */\r\n\r\n/* .left-addon .glyphicon  { left:  0px;} */\r\n\r\n.right-addon .glyphicon {\r\n    right: 0px;\r\n}\r\n\r\n/* add padding  */\r\n\r\n/* .left-addon input  { padding-left:  30px; } */\r\n\r\n.right-addon input {\r\n    padding-right: 30px;\r\n}\r\n\r\ninput[type=text], input[type=password] {\r\nwidth: 100%;\r\npadding: 12px 20px;\r\nmargin: 8px 0;\r\ndisplay: inline-block;\r\nborder: 1px solid #ccc;\r\nbox-sizing: border-box;\r\n}\r\n\r\nbutton {\r\nbackground-color: #d9534f;\r\ncolor: white;\r\npadding: 14px 20px;\r\nmargin: 8px 0;\r\nborder: none;\r\ncursor: pointer;\r\nwidth: 100%;\r\n}\r\n\r\nbutton:hover {\r\nopacity: 0.8;\r\n}\r\n\r\n.cancelbtn {\r\nwidth: auto;\r\npadding: 10px 18px;\r\nbackground-color: #ae275f;\r\n}\r\n\r\n.imgcontainer {\r\ntext-align: center;\r\nmargin: 24px 0 12px 0;\r\n}\r\n\r\nimg.avatar {\r\nwidth: 40%;\r\nborder-radius: 50%;\r\n}\r\n\r\n.container {\r\npadding: 16px;\r\n}\r\n\r\nspan.psw {\r\nfloat: right;\r\npadding-top: 16px;\r\n}\r\n\r\n.formcontainer{\r\nwidth : 40%;\r\nmargin-left: 375px;\r\n}\r\n\r\n#footer-contentportfolio {\r\n    background: black;\r\n    text-align: center;\r\n    color: white;\r\n    height: 50px;\r\n    position: fixed;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    padding: 0.5rem;\r\n    border-top-width: 5px;\r\n    border-top-style: solid;\r\n    border-top-color:#d9534f;\r\n}"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<br>\n<br>\n<div id=\"form\">\n  <flash-messages></flash-messages>\n  <form (submit)=validateUser() id=\"loginform\" method=\"post\">\n    <div class=\"formcontainer\">\n      <h2 style=\"color:#d9534f;font-family:'Galada'\">Log In Form</h2>\n      <br>\n      <label for=\"username\" style=\"font-size:15px;\">\n        <b>Username:</b>\n      </label>\n      <input type=\"text\" placeholder=\"Enter username\" [(ngModel)]=\"username\" style=\"height:30px;\" id=\"username\" name=\"username\"\n        required>\n      <label for=\"password\" style=\"font-size:15px;\">\n        <b>Password:</b>\n      </label>\n      <input type=\"password\" placeholder=\"Enter password\" [(ngModel)]=\"password\" style=\"height:30px;\" id=\"password\" name=\"password\"\n        required>\n      <button type=\"submit\" class=\"button\" value=\"Submit\">Login</button>\n      <br>\n    </div>\n    <br>\n\n  </form>\n</div>\n<!-- <script src=\"js/login.js\" type=\"text/javascript\"></script> -->"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(appService, router, flashMsgService) {
        this.appService = appService;
        this.router = router;
        this.flashMsgService = flashMsgService;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.validateUser = function () {
        var _this = this;
        console.log("VALIDATING User");
        if (this.username == undefined || this.password == undefined) {
            this.flashMsgService.show("Please enter both Username and Password", { cssClass: 'alert-danger', timeout: 3000 });
        }
        else {
            this.appService.getUserId(this.username).subscribe(function (res) {
                console.log("RESPONSE" + JSON.stringify(res));
                _this.appService.currentUserId = res.id;
                console.log("@Login SETTING USer id :" + _this.appService.currentUserId);
                _this.router.navigate(["/choice"]);
            });
        }
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/offeraride/offeraride.component.css":
/*!*****************************************************!*\
  !*** ./src/app/offeraride/offeraride.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n    font-family: 'Times New Roman', Times, serif;\r\n}\r\n\r\n#header {\r\n    margin-top: 10px;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n#logo {\r\n    color: #ae275f;\r\n    font-size: 15px;\r\n\r\n}\r\n\r\nul,\r\nli {\r\n    padding: 0;\r\n}\r\n\r\nli {\r\n    display: inline;\r\n    margin: 5px;\r\n    font-size: 20px;\r\n    line-height: 18px;\r\n\r\n}\r\n\r\n.topnavlist li a {\r\n    color: black;\r\n}\r\n\r\n.topnavlist li a:hover {\r\n    color: #ae275f;\r\n}\r\n\r\n.sidenavlist li a {\r\n    color: black;\r\n}\r\n\r\n.sidenavlist li a:hover {\r\n    color: #ae275f;\r\n}\r\n\r\n.headsearch {\r\n    border: 1px solid #ae275f;\r\n    outline: none;\r\n    background-color: #ae275f;\r\n    font-family: 'Times New Roman', Times, serif;\r\n    font-size: 14px;\r\n    color: #ffffff;\r\n    padding: 0px 15px;\r\n    width: 400px;\r\n    height: 36px;\r\n    /* background-image: url(/img/Sprite_Homepage_miscellaneous.png); */\r\n    background-repeat: no-repeat;\r\n    background-position: 428px -808px;\r\n}\r\n\r\n#groups {\r\n    margin-left: 0px;\r\n}\r\n\r\n#services {\r\n    margin-left: 20px;\r\n}\r\n\r\n.login {\r\n\r\n    border: 1px solid #ae275f;\r\n    outline: none;\r\n    background-color: #ae275f;\r\n    font-family: 'Times New Roman', Times, serif;\r\n    font-size: 14px;\r\n    color: #ffffff;\r\n    padding: 0px 15px;\r\n    width: 200px;\r\n    height: 36px;\r\n\r\n}\r\n\r\n.inner-addon {\r\n    position: relative;\r\n}\r\n\r\n/* style icon */\r\n\r\n.inner-addon .glyphicon {\r\n    position: absolute;\r\n    padding: 10px;\r\n    pointer-events: none;\r\n}\r\n\r\n/* align icon */\r\n\r\n/* .left-addon .glyphicon  { left:  0px;} */\r\n\r\n.right-addon .glyphicon {\r\n    right: 0px;\r\n}\r\n\r\n/* add padding  */\r\n\r\n/* .left-addon input  { padding-left:  30px; } */\r\n\r\n.right-addon input {\r\n    padding-right: 30px;\r\n}\r\n\r\ninput[type=text], input[type=password]  {\r\nwidth: 100%;\r\npadding: 12px 20px;\r\nmargin: 8px 0;\r\ndisplay: inline-block;\r\nborder: 1px solid #ccc;\r\nbox-sizing: border-box;\r\n}\r\n\r\ninput[type=datetime-local] {\r\n    width: 100%;\r\n    padding: 12px 20px;\r\n    margin: 8px 0;\r\n    display: inline-block;\r\n    border: 1px solid #ccc;\r\n    box-sizing: border-box;\r\n    }\r\n\r\nbutton {\r\nbackground-color: #d9534f;\r\ncolor: white;\r\npadding: 14px 20px;\r\nmargin: 8px 0;\r\nborder: none;\r\ncursor: pointer;\r\nwidth: 100%;\r\n}\r\n\r\nbutton:hover {\r\nopacity: 0.8;\r\n}\r\n\r\n.cancelbtn {\r\nwidth: auto;\r\npadding: 10px 18px;\r\nbackground-color: #ae275f;\r\n}\r\n\r\n.imgcontainer {\r\ntext-align: center;\r\nmargin: 24px 0 12px 0;\r\n}\r\n\r\nimg.avatar {\r\nwidth: 40%;\r\nborder-radius: 50%;\r\n}\r\n\r\n.container {\r\npadding: 16px;\r\n}\r\n\r\nspan.psw {\r\nfloat: right;\r\npadding-top: 16px;\r\n}\r\n\r\n.formcontainer{\r\nwidth : 40%;\r\nmargin-left: 100px;\r\nmargin-right: 100px;\r\nfloat: left;\r\n}\r\n\r\n#map\r\n{\r\n    margin-top: 70px;\r\n    height: 400px;\r\n    width: 400px;\r\n}\r\n\r\n/* .map{\r\n    width:40%;\r\n} */\r\n\r\n#footer-contentportfolio {\r\n    background: black;\r\n    text-align: center;\r\n    color: white;\r\n    height: 50px;\r\n    position: fixed;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    padding: 0.5rem;\r\n    border-top-width: 5px;\r\n    border-top-style: solid;\r\n    border-top-color:#d9534f;\r\n}\r\n"

/***/ }),

/***/ "./src/app/offeraride/offeraride.component.html":
/*!******************************************************!*\
  !*** ./src/app/offeraride/offeraride.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<br>\n<div id=\"form\">\n\n    <form (submit)=createRide()>\n        <div class=\"formcontainer\">\n            <flash-messages></flash-messages>\n            <h2 style=\"color:#d9534f;font-family:'Galada'\">Post a Ride</h2>\n            <!-- <input type=\"text\" value=\"\" (blur)=\"calcNewRoute(27.9944116,-82.5943676,30.3446913,-81.9633031)\"> -->\n\n            <label for=\"pickup\" style=\"font-size:15px;\">\n                <b>Pick Up Location:</b>\n            </label>\n            <input type=\"text\" [(ngModel)]=\"pickup\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"off\" placeholder=\"Enter pick up location\"\n                style=\"height:30px;\" id=\"pickup\" name=\"pickup\" required #pickupLocation>\n            <label for=\"dropoff\" style=\"font-size:15px;\">\n                <b>Drop off Location:</b>\n            </label>\n            <input type=\"text\" [(ngModel)]=\"dropoff\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"off\" placeholder=\"Enter drop off location\"\n                style=\"height:30px;\" id=\"dropoff\" name=\"dropoff\" required #dropOffLocation>\n            <label for=\"departure\" style=\"font-size:15px;\">\n                <b>Date and Time:</b>\n            </label>\n            <br>\n            <input type=\"datetime-local\" [(ngModel)]=\"departure\" placeholder=\"Enter date and time in mm/dd/yyyy hh:mm:AM/PM format\" style=\"height:30px;\"\n                id=\"departure\" name=\"departure\" required>\n            <br>\n            <label for=\"price\" style=\"font-size:15px;\">\n                <b>Price per traveller:</b>\n            </label>\n            <input type=\"text\" [(ngModel)]=\"price\" placeholder=\"Enter price per traveller\" style=\"height:30px;\" id=\"price\" name=\"price\"\n                required>\n            <label for=\"seats\" style=\"font-size:15px;\">\n                <b>Number of seats available:</b>\n            </label>\n            <input type=\"text\" [(ngModel)]=\"seats\" placeholder=\"Enter number of seats available\" style=\"height:30px;\" id=\"seats\" name=\"quantity\"\n                min=\"1\" max=\"4\" required>\n            <label for=\"comment\" style=\"font-size:15px;\">\n                <b>Comments:</b>\n            </label>\n            <input type=\"text\" [(ngModel)]=\"comment\" placeholder=\"Enter comments if any\" style=\"height:30px;\" id=\"comment\" name=\"comment\">\n            <button type=\"submit\" value=\"Submit\">Submit</button>\n            <br>\n\n        </div>\n        <br>\n    </form>\n\n</div>\n\n<div class=\"map\">\n    <div id=\"map\"></div>\n</div>\n<br>\n<br>\n<br>\n<br>\n\n<script async defer src=\"https://maps.googleapis.com/maps/api/js?key=AIzaSyBaRjCn1ljM2OIHAs2_qa_4P4p-ypv-kCg&callback=initMap\">\n</script>\n\n<!-- <script src=\"js/offeraride.js\" type=\"text/javascript\"></script> -->"

/***/ }),

/***/ "./src/app/offeraride/offeraride.component.ts":
/*!****************************************************!*\
  !*** ./src/app/offeraride/offeraride.component.ts ***!
  \****************************************************/
/*! exports provided: OfferarideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfferarideComponent", function() { return OfferarideComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var OfferarideComponent = /** @class */ (function () {
    function OfferarideComponent(appService, router, flashMsgService, mapsapiloader, ngZone) {
        this.appService = appService;
        this.router = router;
        this.flashMsgService = flashMsgService;
        this.mapsapiloader = mapsapiloader;
        this.ngZone = ngZone;
        this.latitude = 28.4865289;
        this.longitude = -81.3906764;
        // initial center position for the map
        this.lat = 28.4865289;
        this.lng = -80.3906764;
        this.zoom = 4;
        this.ticks = 5;
        console.log("@offerride.. USER ID:" + appService.currentUserId);
    }
    OfferarideComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.timer = rxjs_Rx__WEBPACK_IMPORTED_MODULE_6__["Observable"].interval(1000);
        //create search FormControl
        this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        //set current position
        this.chooseFromTo();
        this.mapsapiloader.load().then(function () {
            var autocomplete = new google.maps.places.Autocomplete(_this.pickupElem.nativeElement, { types: ["address"] });
            autocomplete.addListener("place changed", function () {
                console.log("autocomplete1:" + autocomplete);
                _this.ngZone.run(function () {
                    var place = autocomplete.getPlace();
                    //set latitude, longitude and zoom
                    _this.latitude = place.geometry.location.lat();
                    _this.longitude = place.geometry.location.lng();
                    _this.fromLat = place.geometry.location.lat();
                    _this.fromLong = place.geometry.location.lng();
                    _this.zoom = 12;
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                });
            });
            var autocomplete2 = new google.maps.places.Autocomplete(_this.dropoffElem.nativeElement, { types: ["address"] });
            autocomplete2.addListener("place changed", function () {
                console.log("autocomplete2:" + autocomplete);
                _this.ngZone.run(function () {
                    var place = autocomplete2.getPlace();
                    _this.dropLat = place.geometry.location.lat();
                    _this.dropLong = place.geometry.location.lng();
                    console.log("place2" + place);
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                });
            });
        });
    };
    OfferarideComponent.prototype.createRide = function () {
        var newRide = {
            pickup: this.pickup,
            dropoff: this.dropoff,
            departure: this.departure,
            price: this.price,
            seats: this.seats,
            comment: this.comment,
            UserId: this.appService.currentUserId
        };
        console.log("New Ride Details:" + JSON.stringify(newRide));
        this.appService.registerNewRide(newRide);
        this.flashMsgService.show("Ride posted successfully", { cssClass: 'alert-danger', timeout: 3000 });
        this.countdown();
    };
    OfferarideComponent.prototype.chooseFromTo = function () {
        var _this = this;
        /*     this.latitude = event.coords.lat;
            this.longitude = event.coords.lng; */
        //this.calcNewRoute(27.9944116,-82.5943676,30.3446913,-81.9633031);
        console.log("from to");
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.latitude = position.coords.latitude;
                _this.longitude = position.coords.longitude;
                _this.zoom = 12;
            });
        }
    };
    OfferarideComponent.prototype.calcNewRoute = function () {
        console.log("CALC new route:");
        var directionsDisplay;
        var directionsService = new google.maps.DirectionsService();
        directionsDisplay = new google.maps.DirectionsRenderer();
        var latlng = new google.maps.LatLng(39.305, -76.617);
        var map = new google.maps.Map(document.getElementById('map'), {
            center: latlng,
            zoom: 12
        });
        var start = new google.maps.LatLng(this.fromLat, this.fromLong);
        var end = new google.maps.LatLng(this.dropLat, this.dropLong);
        var request = {
            origin: start,
            destination: end,
            travelMode: google.maps.TravelMode.DRIVING
        };
        /*     directionsService.route(request, function (response, status) {
              if (status == google.maps.DirectionsStatus.OK) {
                directionsDisplay.setDirections(response);
                directionsDisplay.setMap(map);
              } else {
                alert("Directions Request from " + start.toUrlValue(6) + " to " + end.toUrlValue(6) + " failed: " + status);
              }
            });
         */
    };
    OfferarideComponent.prototype.countdown = function () {
        var _this = this;
        this.triggerTimer = this.timer.subscribe(function (t) {
            console.log(_this.ticks);
            _this.ticks--;
            if (_this.ticks === 0) {
                _this.ticks = 5;
                _this.router.navigate(['/choice']);
            }
        });
    };
    OfferarideComponent.prototype.ngOnDestroy = function () {
        this.triggerTimer.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('pickupLocation'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], OfferarideComponent.prototype, "pickupElem", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('dropOffLocation'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], OfferarideComponent.prototype, "dropoffElem", void 0);
    OfferarideComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-offeraride',
            template: __webpack_require__(/*! ./offeraride.component.html */ "./src/app/offeraride/offeraride.component.html"),
            styles: [__webpack_require__(/*! ./offeraride.component.css */ "./src/app/offeraride/offeraride.component.css")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"], _agm_core__WEBPACK_IMPORTED_MODULE_3__["MapsAPILoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], OfferarideComponent);
    return OfferarideComponent;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/*!*********************************************!*\
  !*** ./src/app/signup/signup.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n    font-family: 'Times New Roman', Times, serif;\r\n}\r\n\r\n#header {\r\n    margin-top: 10px;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n#logo {\r\n    color: #ae275f;\r\n    font-size: 15px;\r\n\r\n}\r\n\r\nul,\r\nli {\r\n    padding: 0;\r\n}\r\n\r\nli {\r\n    display: inline;\r\n    margin: 5px;\r\n    font-size: 20px;\r\n    line-height: 18px;\r\n\r\n}\r\n\r\n.topnavlist li a {\r\n    color: black;\r\n}\r\n\r\n.topnavlist li a:hover {\r\n    color: #ae275f;\r\n}\r\n\r\n.sidenavlist li a {\r\n    color: black;\r\n}\r\n\r\n.sidenavlist li a:hover {\r\n    color: #ae275f;\r\n}\r\n\r\n.headsearch {\r\n    border: 1px solid #ae275f;\r\n    outline: none;\r\n    background-color: #ae275f;\r\n    font-family: 'Times New Roman', Times, serif;\r\n    font-size: 14px;\r\n    color: #ffffff;\r\n    padding: 0px 15px;\r\n    width: 400px;\r\n    height: 36px;\r\n    /* background-image: url(/img/Sprite_Homepage_miscellaneous.png); */\r\n    background-repeat: no-repeat;\r\n    background-position: 428px -808px;\r\n}\r\n\r\n#groups {\r\n    margin-left: 0px;\r\n}\r\n\r\n#services {\r\n    margin-left: 20px;\r\n}\r\n\r\n.login {\r\n\r\n    border: 1px solid #ae275f;\r\n    outline: none;\r\n    background-color: #ae275f;\r\n    font-family: 'Times New Roman', Times, serif;\r\n    font-size: 14px;\r\n    color: #ffffff;\r\n    padding: 0px 15px;\r\n    width: 200px;\r\n    height: 36px;\r\n\r\n}\r\n\r\n.inner-addon {\r\n    position: relative;\r\n}\r\n\r\n/* style icon */\r\n\r\n.inner-addon .glyphicon {\r\n    position: absolute;\r\n    padding: 10px;\r\n    pointer-events: none;\r\n}\r\n\r\n/* align icon */\r\n\r\n/* .left-addon .glyphicon  { left:  0px;} */\r\n\r\n.right-addon .glyphicon {\r\n    right: 0px;\r\n}\r\n\r\n/* add padding  */\r\n\r\n/* .left-addon input  { padding-left:  30px; } */\r\n\r\n.right-addon input {\r\n    padding-right: 30px;\r\n}\r\n\r\ninput[type=text], input[type=password] {\r\nwidth: 100%;\r\npadding: 12px 20px;\r\nmargin: 8px 0;\r\ndisplay: inline-block;\r\nborder: 1px solid #ccc;\r\nbox-sizing: border-box;\r\n}\r\n\r\nbutton {\r\nbackground-color: #d9534f;\r\ncolor: white;\r\npadding: 14px 20px;\r\nmargin: 8px 0;\r\nborder: none;\r\ncursor: pointer;\r\nwidth: 100%;\r\n}\r\n\r\nbutton:hover {\r\nopacity: 0.8;\r\n}\r\n\r\n.cancelbtn {\r\nwidth: auto;\r\npadding: 10px 18px;\r\nbackground-color: #ae275f;\r\n}\r\n\r\n.imgcontainer {\r\ntext-align: center;\r\nmargin: 24px 0 12px 0;\r\n}\r\n\r\nimg.avatar {\r\nwidth: 40%;\r\nborder-radius: 50%;\r\n}\r\n\r\n.container {\r\npadding: 16px;\r\n}\r\n\r\nspan.psw {\r\nfloat: right;\r\npadding-top: 16px;\r\n}\r\n\r\n.formcontainer{\r\nwidth : 40%;\r\nmargin-left: 375px;\r\n}\r\n\r\n#footer-contentportfolio {\r\n    background: black;\r\n    text-align: center;\r\n    color: white;\r\n    height: 50px;\r\n    position: fixed;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    padding: 0.5rem;\r\n    border-top-width: 5px;\r\n    border-top-style: solid;\r\n    border-top-color:#d9534f;\r\n}"

/***/ }),

/***/ "./src/app/signup/signup.component.html":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<br>\n<div id=\"form\">\n  <form (submit)=forRegistration()>\n    <div class=\"formcontainer\">\n      <flash-messages></flash-messages>\n      <h2 style=\"color:#d9534f;font-family:'Galada'\">Sign Up Form</h2>\n      <label for=\"firstname\" style=\"font-size:15px;\">\n        <b>First Name:</b>\n      </label>\n      <input type=\"text\" placeholder=\"Enter firstname\" style=\"height:30px;\" [(ngModel)]=\"firstname\" id=\"firstname\" name=\"firstname\"\n        required>\n      <label for=\"lastname\" style=\"font-size:15px;\">\n        <b>Last Name:</b>\n      </label>\n      <input type=\"text\" placeholder=\"Enter lastname\" style=\"height:30px;\" [(ngModel)]=\"lastname\" id=\"lastname\" name=\"lastname\"\n        required>\n      <label for=\"licensenumber\" style=\"font-size:15px;\">\n        <b>License Number:</b>\n      </label>\n      <input type=\"text\" placeholder=\"Enter License Number\" style=\"height:30px;\" [(ngModel)]=\"licensenumber\" id=\"licensenumber\"\n        name=\"licensenumber\" required>\n      <label for=\"email\" style=\"font-size:15px;\">\n        <b>Email:</b>\n      </label>\n      <input type=\"text\" placeholder=\"Enter email\" style=\"height:30px;\" [(ngModel)]=\"email\" id=\"email\" name=\"email\" required>\n      <label for=\"username\" style=\"font-size:15px;\">\n        <b>Username:</b>\n      </label>\n      <input type=\"text\" placeholder=\"Enter username\" style=\"height:30px;\" [(ngModel)]=\"username\" id=\"username\" name=\"username\"\n        required>\n      <label for=\"password\" style=\"font-size:15px;\">\n        <b>Password:</b>\n      </label>\n      <input type=\"password\" placeholder=\"Enter password\" style=\"height:30px;\" [(ngModel)]=\"password\" id=\"password\" name=\"password\"\n        required>\n      <button type=\"submit\" value=\"Submit\">Submit</button>\n      <br>\n    </div>\n    <br>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignupComponent = /** @class */ (function () {
    function SignupComponent(appService, router, flashMsgService) {
        this.appService = appService;
        this.router = router;
        this.flashMsgService = flashMsgService;
        this.ticks = 5;
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.timer = rxjs_Rx__WEBPACK_IMPORTED_MODULE_4__["Observable"].interval(1000);
    };
    SignupComponent.prototype.forRegistration = function () {
        if (this.firstname == undefined || this.lastname == undefined || this.licensenumber == undefined || this.email == undefined || this.username == undefined || this.password == undefined) {
            this.flashMsgService.show("Please fill in all the fields", { cssClass: 'alert-danger', timeout: 3000 });
        }
        else if (!this.validateemail(this.email)) {
            this.flashMsgService.show("Please enter a valid email id", { cssClass: 'alert-danger', timeout: 3000 });
        }
        else {
            var newUser = {
                firstname: this.firstname,
                lastname: this.lastname,
                licensenumber: this.licensenumber,
                email: this.email,
                username: this.username,
                password: this.password
            };
            console.log("UsER to be registered:" + JSON.stringify(newUser));
            this.appService.registerNewUser(newUser);
            this.flashMsgService.show("User has been registered successfully. Please login to continue.", { cssClass: 'alert-success', timeout: 6000 });
            this.firstname = "";
            this.lastname = "";
            this.licensenumber = "";
            this.email = "";
            this.username = "";
            this.password = "";
            this.countdown();
        }
    };
    SignupComponent.prototype.validateemail = function (emailid) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(emailid).toLowerCase());
    };
    SignupComponent.prototype.countdown = function () {
        var _this = this;
        this.triggerTimer = this.timer.subscribe(function (t) {
            console.log(_this.ticks);
            _this.ticks--;
            if (_this.ticks === 0) {
                _this.ticks = 10;
                _this.router.navigate(['/welcome']);
            }
        });
    };
    SignupComponent.prototype.ngOnDestroy = function () {
        this.triggerTimer.unsubscribe();
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/viewridesofferedbyyou/viewridesofferedbyyou.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/viewridesofferedbyyou/viewridesofferedbyyou.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n    font-family: 'Times New Roman', Times, serif;\r\n}\r\n\r\n#header {\r\n    margin-top: 10px;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n#logo {\r\n    color: #ae275f;\r\n    font-size: 15px;\r\n\r\n}\r\n\r\nul,\r\nli {\r\n    padding: 0;\r\n}\r\n\r\nli {\r\n    display: inline;\r\n    margin: 5px;\r\n    font-size: 20px;\r\n    line-height: 18px;\r\n\r\n}\r\n\r\n.topnavlist li a {\r\n    color: black;\r\n}\r\n\r\n.topnavlist li a:hover {\r\n    color: #ae275f;\r\n}\r\n\r\n.sidenavlist li a {\r\n    color: black;\r\n}\r\n\r\n.sidenavlist li a:hover {\r\n    color: #ae275f;\r\n}\r\n\r\n.headsearch {\r\n    border: 1px solid #ae275f;\r\n    outline: none;\r\n    background-color: #ae275f;\r\n    font-family: 'Times New Roman', Times, serif;\r\n    font-size: 14px;\r\n    color: #ffffff;\r\n    padding: 0px 15px;\r\n    width: 400px;\r\n    height: 36px;\r\n    /* background-image: url(/img/Sprite_Homepage_miscellaneous.png); */\r\n    background-repeat: no-repeat;\r\n    background-position: 428px -808px;\r\n}\r\n\r\n#groups {\r\n    margin-left: 0px;\r\n}\r\n\r\n#services {\r\n    margin-left: 20px;\r\n}\r\n\r\n.login {\r\n\r\n    border: 1px solid #ae275f;\r\n    outline: none;\r\n    background-color: #ae275f;\r\n    font-family: 'Times New Roman', Times, serif;\r\n    font-size: 14px;\r\n    color: #ffffff;\r\n    padding: 0px 15px;\r\n    width: 200px;\r\n    height: 36px;\r\n\r\n}\r\n\r\n.inner-addon {\r\n    position: relative;\r\n}\r\n\r\n/* style icon */\r\n\r\n.inner-addon .glyphicon {\r\n    position: absolute;\r\n    padding: 10px;\r\n    pointer-events: none;\r\n}\r\n\r\n/* align icon */\r\n\r\n/* .left-addon .glyphicon  { left:  0px;} */\r\n\r\n.right-addon .glyphicon {\r\n    right: 0px;\r\n}\r\n\r\n/* add padding  */\r\n\r\n/* .left-addon input  { padding-left:  30px; } */\r\n\r\n.right-addon input {\r\n    padding-right: 30px;\r\n}\r\n\r\ninput[type=text], input[type=password],  input[type=date]{\r\nwidth: 100%;\r\npadding: 12px 20px;\r\nmargin: 8px 0;\r\ndisplay: inline-block;\r\nborder: 1px solid #ccc;\r\nbox-sizing: border-box;\r\n}\r\n\r\nbutton {\r\nbackground-color: #d9534f;\r\ncolor: white;\r\npadding: 14px 20px;\r\nmargin: 8px 0;\r\nborder: none;\r\ncursor: pointer;\r\nwidth: 100%;\r\n}\r\n\r\nbutton:hover {\r\nopacity: 0.8;\r\n}\r\n\r\n.cancelbtn {\r\nwidth: auto;\r\npadding: 10px 18px;\r\nbackground-color: #ae275f;\r\n}\r\n\r\n.imgcontainer {\r\ntext-align: center;\r\nmargin: 24px 0 12px 0;\r\n}\r\n\r\nimg.avatar {\r\nwidth: 40%;\r\nborder-radius: 50%;\r\n}\r\n\r\n.container {\r\npadding: 16px;\r\n}\r\n\r\nspan.psw {\r\nfloat: right;\r\npadding-top: 16px;\r\n}\r\n\r\n.formcontainer{\r\nwidth : 40%;\r\nmargin-left: 375px;\r\n\r\n}\r\n\r\n.book{\r\nwidth:150px;\r\nfloat:right;\r\n}\r\n\r\n.btn-danger{\r\nmargin-left: 10px;\r\nmargin-right: 10px;\r\nfloat: right;\r\nmargin-bottom:10px;\r\n}\r\n\r\n#footer-contentportfolio {\r\n    background: black;\r\n    text-align: center;\r\n    color: white;\r\n    height: 50px;\r\n    position: fixed;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    padding: 0.5rem;\r\n    border-top-width: 5px;\r\n    border-top-style: solid;\r\n    border-top-color:#d9534f;\r\n}\r\n"

/***/ }),

/***/ "./src/app/viewridesofferedbyyou/viewridesofferedbyyou.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/viewridesofferedbyyou/viewridesofferedbyyou.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<br>\n<br>\n<h2 style=\"color:#d9534f;font-family:'Galada';\">Rides Offered By You!</h2>\n<br>\n<br>\n<!-- <div id=\"ridesofferedbyyou\" style=\"width:80%;margin-left: 150px;\"> -->\n<flash-messages></flash-messages>\n<div style=\"margin-left:10%;margin-right:10%\">\n\n    <table class=\"table\">\n        <thead>\n            <tr>\n                <th>Pickup</th>\n                <th>Dropoff</th>\n                <th>Departure</th>\n                <th>Comment</th>\n                <th>Price</th>\n                <th>Seats</th>\n            </tr>\n        </thead>\n        <tbody>\n\n            <tr *ngFor='let ride of viewRidesOfferedList'>\n                <td>{{ride.pickup}}</td>\n                <td>{{ride.dropoff}}</td>\n                <td>{{ride.departure | date: 'medium'}}</td>\n                <td>{{ride.comment}}</td>\n                <td>{{ride.price}}</td>\n                <td>{{ride.seats}}</td>\n                <td>\n                    <input class=\"btn btn-danger\" type=\"button\" value=\"DELETE\" (click)=\"deleteofferedride(ride)\">\n                </td>\n            </tr>\n\n        </tbody>\n    </table>\n</div>\n<!-- <script src=\"js/viewridesofferedbyyou.js\" type=\"text/javascript\"></script> -->\n\n\n<!-- Pickup: {{ride.pickup}} Dropoff:{{ride.dropoff}} Departure:{{ride.departure}} Comment:{{ride.comment}} Price:{{ride.price}} Seats:{{ride.seats}}\n        <input type=\"button\" value=\"DELETE\" (click)=\"deleteofferedride(ride)\"> -->\n\n<!--         <div class=\"panel panel-default\">\n            <div class=\"panel-heading\">\n                <b>Pickup</b>: {{ride.pickup}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Dropoff: {{ride.dropoff}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n                Departure:{{ride.departure}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n                <input class=\"btn btn-danger\" type=\"button\" value=\"DELETE\" (click)=\"deleteofferedride(ride)\">\n            </div>\n            <div class=\"panel-body\">\n                Price:{{ride.price}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n                <br> Seats:{{ride.seats}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n                <br> Comment:{{ride.comment}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n            </div>\n        </div> -->"

/***/ }),

/***/ "./src/app/viewridesofferedbyyou/viewridesofferedbyyou.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/viewridesofferedbyyou/viewridesofferedbyyou.component.ts ***!
  \**************************************************************************/
/*! exports provided: ViewridesofferedbyyouComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewridesofferedbyyouComponent", function() { return ViewridesofferedbyyouComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ViewridesofferedbyyouComponent = /** @class */ (function () {
    function ViewridesofferedbyyouComponent(appService, flashMsgService) {
        this.appService = appService;
        this.flashMsgService = flashMsgService;
        console.log("@ViewOfferedrides.. USER ID:" + appService.currentUserId);
        this.getRidesOffered();
    }
    ViewridesofferedbyyouComponent.prototype.ngOnInit = function () {
    };
    ViewridesofferedbyyouComponent.prototype.getRidesOffered = function () {
        var _this = this;
        this.appService.ridesOffered().subscribe(function (res) {
            console.log("RESPONSE for ridesOFfere:" + JSON.stringify(res));
            _this.viewRidesOfferedList = res;
        });
    };
    ViewridesofferedbyyouComponent.prototype.deleteofferedride = function (cancelride) {
        var _this = this;
        console.log("RIDE to be deleted:" + JSON.stringify(cancelride));
        this.appService.deleteride(cancelride).subscribe(function (res) {
            console.log("RIDE Deleted and response:" + JSON.stringify(res));
            _this.flashMsgService.show("Ride deleted successfully", { cssClass: 'alert-danger', timeout: 3000 });
            _this.getRidesOffered();
        });
    };
    ViewridesofferedbyyouComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-viewridesofferedbyyou',
            template: __webpack_require__(/*! ./viewridesofferedbyyou.component.html */ "./src/app/viewridesofferedbyyou/viewridesofferedbyyou.component.html"),
            styles: [__webpack_require__(/*! ./viewridesofferedbyyou.component.css */ "./src/app/viewridesofferedbyyou/viewridesofferedbyyou.component.css")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"], angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"]])
    ], ViewridesofferedbyyouComponent);
    return ViewridesofferedbyyouComponent;
}());



/***/ }),

/***/ "./src/app/viewridestravelledbyyou/viewridestravelledbyyou.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/viewridestravelledbyyou/viewridestravelledbyyou.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n    font-family: 'Times New Roman', Times, serif;\r\n}\r\n\r\n#header {\r\n    margin-top: 10px;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n#logo {\r\n    color: #ae275f;\r\n    font-size: 15px;\r\n\r\n}\r\n\r\nul,\r\nli {\r\n    padding: 0;\r\n}\r\n\r\nli {\r\n    display: inline;\r\n    margin: 5px;\r\n    font-size: 20px;\r\n    line-height: 18px;\r\n\r\n}\r\n\r\n.topnavlist li a {\r\n    color: black;\r\n}\r\n\r\n.topnavlist li a:hover {\r\n    color: #ae275f;\r\n}\r\n\r\n.sidenavlist li a {\r\n    color: black;\r\n}\r\n\r\n.sidenavlist li a:hover {\r\n    color: #ae275f;\r\n}\r\n\r\n.headsearch {\r\n    border: 1px solid #ae275f;\r\n    outline: none;\r\n    background-color: #ae275f;\r\n    font-family: 'Times New Roman', Times, serif;\r\n    font-size: 14px;\r\n    color: #ffffff;\r\n    padding: 0px 15px;\r\n    width: 400px;\r\n    height: 36px;\r\n    /* background-image: url(/img/Sprite_Homepage_miscellaneous.png); */\r\n    background-repeat: no-repeat;\r\n    background-position: 428px -808px;\r\n}\r\n\r\n#groups {\r\n    margin-left: 0px;\r\n}\r\n\r\n#services {\r\n    margin-left: 20px;\r\n}\r\n\r\n.login {\r\n\r\n    border: 1px solid #ae275f;\r\n    outline: none;\r\n    background-color: #ae275f;\r\n    font-family: 'Times New Roman', Times, serif;\r\n    font-size: 14px;\r\n    color: #ffffff;\r\n    padding: 0px 15px;\r\n    width: 200px;\r\n    height: 36px;\r\n\r\n}\r\n\r\n.inner-addon {\r\n    position: relative;\r\n}\r\n\r\n/* style icon */\r\n\r\n.inner-addon .glyphicon {\r\n    position: absolute;\r\n    padding: 10px;\r\n    pointer-events: none;\r\n}\r\n\r\n/* align icon */\r\n\r\n/* .left-addon .glyphicon  { left:  0px;} */\r\n\r\n.right-addon .glyphicon {\r\n    right: 0px;\r\n}\r\n\r\n/* add padding  */\r\n\r\n/* .left-addon input  { padding-left:  30px; } */\r\n\r\n.right-addon input {\r\n    padding-right: 30px;\r\n}\r\n\r\ninput[type=text], input[type=password],  input[type=date]{\r\nwidth: 100%;\r\npadding: 12px 20px;\r\nmargin: 8px 0;\r\ndisplay: inline-block;\r\nborder: 1px solid #ccc;\r\nbox-sizing: border-box;\r\n}\r\n\r\nbutton {\r\nbackground-color: #d9534f;\r\ncolor: white;\r\npadding: 14px 20px;\r\nmargin: 8px 0;\r\nborder: none;\r\ncursor: pointer;\r\nwidth: 100%;\r\n}\r\n\r\nbutton:hover {\r\nopacity: 0.8;\r\n}\r\n\r\n.cancelbtn {\r\nwidth: auto;\r\npadding: 10px 18px;\r\nbackground-color: #ae275f;\r\n}\r\n\r\n.imgcontainer {\r\ntext-align: center;\r\nmargin: 24px 0 12px 0;\r\n}\r\n\r\nimg.avatar {\r\nwidth: 40%;\r\nborder-radius: 50%;\r\n}\r\n\r\n.container {\r\npadding: 16px;\r\n}\r\n\r\nspan.psw {\r\nfloat: right;\r\npadding-top: 16px;\r\n}\r\n\r\n.formcontainer{\r\nwidth : 40%;\r\nmargin-left: 375px;\r\n\r\n}\r\n\r\n.book{\r\nwidth:150px;\r\nfloat:right;\r\n}\r\n\r\n.btn{\r\nmargin-left: 10px;\r\nmargin-right: 10px;\r\nfloat: right;\r\n}\r\n\r\n#footer-contentportfolio {\r\n    background: black;\r\n    text-align: center;\r\n    color: white;\r\n    height: 50px;\r\n    position: fixed;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    padding: 0.5rem;\r\n    border-top-width: 5px;\r\n    border-top-style: solid;\r\n    border-top-color:#d9534f;\r\n}"

/***/ }),

/***/ "./src/app/viewridestravelledbyyou/viewridestravelledbyyou.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/viewridestravelledbyyou/viewridestravelledbyyou.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<br>\n<br>\n<h2 style=\"color:#d9534f;font-family:'Galada';\">Rides Travelled By You!</h2>\n<br>\n<br>\n\n<div style=\"margin-left:10%;margin-right:10%\">\n    <table class=\"table\">\n        <thead>\n            <tr>\n                <th>Pickup</th>\n                <th>Dropoff</th>\n                <!-- <th>Comment</th> -->\n                <th>Price</th>\n                <th>Seats</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr *ngFor='let ride of viewRidesTravelledList'>\n                <td>{{ride.pickup}}</td>\n                <td>{{ride.dropoff}}</td>\n                <!-- <td>{{ride.comment}}</td> -->\n                <td>{{ride.price}}</td>\n                <td>{{ride.seats}}</td>\n                <td>\n                    <input class=\"btn btn-danger\" type=\"button\" value=\"DELETE\" (click)=\"deletetravelledride(ride)\">\n                </td>\n            </tr>\n\n        </tbody>\n    </table>\n</div>\n\n<!-- <div id=\"ridestravelledbyyou\" style=\"width:80%;margin-left: 150px;\">\n    <!-- style=\"width:40%;margin-left: 375px; -->\n<!-- <div *ngFor='let ride of viewRidesTravelledList'> -->\n<!-- Pickup : {{ride.pickup}} Dropoff:{{ride.dropoff}} Price:{{ride.price}} Seats:{{ride.seats}} -->\n<!-- <input type=\"button\" value=\"DELETE\" (click)=\"deletetravelledride(ride)\"> -->\n<!-- </div> -->\n<!-- </div>  -->\n\n<!-- <script src=\"js/viewridestravelledbyyou.js\" type=\"text/javascript\"></script> -->"

/***/ }),

/***/ "./src/app/viewridestravelledbyyou/viewridestravelledbyyou.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/viewridestravelledbyyou/viewridestravelledbyyou.component.ts ***!
  \******************************************************************************/
/*! exports provided: ViewridestravelledbyyouComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewridestravelledbyyouComponent", function() { return ViewridestravelledbyyouComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ViewridestravelledbyyouComponent = /** @class */ (function () {
    function ViewridestravelledbyyouComponent(appService) {
        this.appService = appService;
        console.log("@ViewOfferedrides.. USER ID:" + appService.currentUserId);
        this.getRidesTravelled();
    }
    ViewridestravelledbyyouComponent.prototype.ngOnInit = function () {
    };
    ViewridestravelledbyyouComponent.prototype.getRidesTravelled = function () {
        var _this = this;
        this.appService.ridesTravelled().subscribe(function (res) {
            console.log("RESPONSE for ridesOFfere:" + JSON.stringify(res));
            _this.viewRidesTravelledList = res;
        });
    };
    ViewridestravelledbyyouComponent.prototype.deletetravelledride = function (cancelride) {
        console.log("RIDE to be deleted:" + JSON.stringify(cancelride));
        this.appService.deletetravel(cancelride).subscribe(function (res) {
        });
    };
    ViewridestravelledbyyouComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-viewridestravelledbyyou',
            template: __webpack_require__(/*! ./viewridestravelledbyyou.component.html */ "./src/app/viewridestravelledbyyou/viewridestravelledbyyou.component.html"),
            styles: [__webpack_require__(/*! ./viewridestravelledbyyou.component.css */ "./src/app/viewridestravelledbyyou/viewridestravelledbyyou.component.css")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]])
    ], ViewridestravelledbyyouComponent);
    return ViewridestravelledbyyouComponent;
}());



/***/ }),

/***/ "./src/app/welcome/welcome.component.css":
/*!***********************************************!*\
  !*** ./src/app/welcome/welcome.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n    font-family: 'Times New Roman', Times, serif;\r\n\r\n  }\r\n  .background-image {\r\n    background: url('image.jpg') no-repeat center center;\r\n    background-size: cover;\r\n\r\n    position: fixed;\r\n    width: 100%;\r\n    height: 350px;\r\n    /*same height as jumbotron */\r\n    top: 0;\r\n    left: 0;\r\n    z-index: -1;\r\n  }\r\n  .jumbotron {\r\n    margin-bottom: 0px;\r\n    height: 350px;\r\n    color: black;\r\n    background-color: #000000;\r\n\r\n  }\r\n  .img-container {\r\n    background-color: #000000;\r\n    background-size: cover;\r\n  }\r\n  .img-container img {\r\n    opacity: 0.4;\r\n    width: 100%;\r\n    height: 700px;\r\n  }\r\n  .centered {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n    color: white;\r\n    font-size: 50px;\r\n  }\r\n  .centeredd {\r\n    position: absolute;\r\n    top: 60%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n    color: white;\r\n    font-size: 30px;\r\n  }\r\n  .save {\r\n    float: right;\r\n  }\r\n  .delete {\r\n    float: right;\r\n  }\r\n  .note {\r\n    float: right;\r\n  }\r\n  #footer-contentportfolio {\r\n    background: black;\r\n    text-align: center;\r\n    color: white;\r\n    height: 50px;\r\n    position: fixed;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    padding: 0.5rem;\r\n    border-top-width: 5px;\r\n    border-top-style: solid;\r\n    border-top-color:#d9534f;\r\n}"

/***/ }),

/***/ "./src/app/welcome/welcome.component.html":
/*!************************************************!*\
  !*** ./src/app/welcome/welcome.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" href=\"#\" style=\"font-size:28px;color:#d9534f;font-family:'Galada';\">\n\n        <span class=\"glyphicon glyphicon-share-alt\"></span> HOP IN</a>\n    </div>\n    <ul class=\"nav navbar-nav\">\n      <li>\n        <a class=\"btn btn-danger\" id=\"signup\" [routerLink]=\"['/signup']\" style=\"font-size:20px;color:white;width:150px;margin-right:10px;font-family:'Galada'\">New User</a>\n      </li>\n      <li>\n        <a class=\"btn btn-danger\" id=\"login\" [routerLink]=\"['/login']\" style=\"font-size:20px;color:white;width:150px;font-family:'Galada'\">Log In</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n<div class=\"jumbotron text-center\">\n  <div class=\"img-container\">\n    <img src=\"../../assets/images/image.jpg\">\n  </div>\n  <div class=\"container\">\n    <div class=\"centered\" style=\"font-family: 'Satisfy';font-size: 40px;\">Share your ride with peers!</div>\n    <!-- <div class=\"centeredd\">New York Times Edition</div> -->\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/welcome/welcome.component.ts":
/*!**********************************************!*\
  !*** ./src/app/welcome/welcome.component.ts ***!
  \**********************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent(flashmsgservice) {
        this.flashmsgservice = flashmsgservice;
    }
    WelcomeComponent.prototype.ngOnInit = function () {
    };
    WelcomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-welcome',
            template: __webpack_require__(/*! ./welcome.component.html */ "./src/app/welcome/welcome.component.html"),
            styles: [__webpack_require__(/*! ./welcome.component.css */ "./src/app/welcome/welcome.component.css")]
        }),
        __metadata("design:paramtypes", [angular2_flash_messages__WEBPACK_IMPORTED_MODULE_1__["FlashMessagesService"]])
    ], WelcomeComponent);
    return WelcomeComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\mkuma\Documents\UCF\Project\hopin\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map