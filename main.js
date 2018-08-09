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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page{\n    height:100vh;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page\">\n  <app-hello></app-hello>\n</div>\n<!-- <app-bio></app-bio> -->"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _hello_hello_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hello/hello.component */ "./src/app/hello/hello.component.ts");
/* harmony import */ var _bio_bio_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bio/bio.component */ "./src/app/bio/bio.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _hello_hello_component__WEBPACK_IMPORTED_MODULE_4__["HelloComponent"],
                _bio_bio_component__WEBPACK_IMPORTED_MODULE_5__["BioComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/bio/bio.component.css":
/*!***************************************!*\
  !*** ./src/app/bio/bio.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h4{\n    font-family: 'Cera GR Medium', Fallback, sans-serif !important;\n    font-size: .75rem;\n    color: #F38181;\n    letter-spacing: .2rem;\n    text-align: right;\n  height:auto;\n    width: 19%;\n    float:left;\n  border:none;\n}\n\np{\n    float:right;\n    font-weight: 300;\n    font-size: 1rem;\n    width: 80%;\n    border:none;\n    font-family: 'Cera GR Light', Fallback, sans-serif !important;\n    font-size: 1rem;\n    color: #353535;\n    text-align: left;\n}\n\n.bio-title{\n    flex-shrink: 0;\n    width: 200px;\n    margin-right: 70px;\n    font-family: 'Cera GR Medium', Fallback, sans-serif !important;\n    font-size: .75rem;\n    color: #F38181;\n    text-transform: uppercase;\n    text-align: right;\n    font-weight: 700;\n    letter-spacing: 2px;\n}\n\n.bio-content{\n    font-weight: 300;\n    font-size: 1rem;\n    width: 100%;\n    max-width: 650px;\n}\n\n.bio{\n    display: flex;\n    justify-content: center;\n    padding: 100px 50px 100px 300px;\n    /* height: 100vh; */\n}\n\n@media screen and (max-width: 1280px){\n    .bio {\n        padding: 100px;\n    }\n}\n\n@media screen and (max-width: 1024px){\n    .bio {\n        padding: 50px;\n    }\n}\n\n@media screen and (max-width: 768px){\n    .bio {\n        display:block;\n    }\n}\n\n@media screen and (max-width: 480px){\n    .bio {\n        padding:50px 35px;;\n    }\n}"

/***/ }),

/***/ "./src/app/bio/bio.component.html":
/*!****************************************!*\
  !*** ./src/app/bio/bio.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bio\">\n  <div style='float:left'>\n    <h4>BACKGROUND</h4>\n    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at nibh egestas, consequat dui ac, sagittis dolor.\n      Suspendisse mollis ipsum ac orci vulputate interdum. Etiam id laoreet ligula. Sed nec est maximus, lobortis urna sit\n      amet, molestie purus. Donec tristique tempus quam, in cursus erat lacinia ut. Duis tempor justo et pharetra laoreet.\n      Phasellus maximus, nunc lobortis ultrices maximus, purus justo bibendum erat, ut tincidunt elit urna eu purus. Donec\n      at mauris pretium, pulvinar mi at, pretium velit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam\n      ut nulla eu justo </p>\n  </div>\n</div>\n<div class=\"bio\">\n\n  <div style='float:left'>\n    <h4>SKILLS</h4>\n    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at nibh egestas, consequat dui ac, sagittis dolor.\n      Suspendisse mollis ipsum ac orci vulputate interdum. Etiam id laoreet ligula. Sed nec est maximus, lobortis urna sit\n      amet, molestie purus. Donec tristique tempus quam, in cursus erat lacinia ut. Duis tempor justo et pharetra laoreet.\n      Phasellus maximus, nunc lobortis ultrices maximus, purus justo bibendum erat, ut tincidunt elit urna eu purus. Donec\n      at mauris pretium, pulvinar mi at, pretium velit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam\n      ut nulla eu justo </p>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/bio/bio.component.ts":
/*!**************************************!*\
  !*** ./src/app/bio/bio.component.ts ***!
  \**************************************/
/*! exports provided: BioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BioComponent", function() { return BioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BioComponent = /** @class */ (function () {
    function BioComponent() {
    }
    BioComponent.prototype.ngOnInit = function () {
    };
    BioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bio',
            template: __webpack_require__(/*! ./bio.component.html */ "./src/app/bio/bio.component.html"),
            styles: [__webpack_require__(/*! ./bio.component.css */ "./src/app/bio/bio.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BioComponent);
    return BioComponent;
}());



/***/ }),

/***/ "./src/app/hello/hello.component.css":
/*!*******************************************!*\
  !*** ./src/app/hello/hello.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n    font-family: 'Cera GR Medium', Fallback, sans-serif !important;\n    color: #5B5B5B;\n    font-size: 2rem;\n}\n\nh2{\n    font-family: 'Cera GR Regular', Fallback, sans-serif !important;\n    font-size:1rem;\n    color: #F38181;\n    word-spacing: 2vw;\n    text-align: left;\n}\n\na{\n    text-decoration: none;\n    color: inherit;\n}\n\na:hover{\n    text-decoration: none;\n    color: #3375AE;\n}\n\n.greeting{\n    font-family: 'Cera GR Regular', Fallback, sans-serif !important;\n    max-width: 600px;\n    line-height: 1.5;\n    text-align: left;\n}\n\n.hello-container{\n    height:100%;\n    width:100%;\n}\n\n#name{\n    font-family: 'Cera GR Bold', Fallback, sans-serif !important;\n}\n\n#intro{\n    padding: 15vh 8vw 0 8vw;\n}\n\n#credit{\n    font-family: 'Cera GR Light', Fallback, sans-serif !important;\n    position:absolute;\n    bottom: 0px;\n    right: 32px;\n    font-size: .8rem;\n    color: #797979;\n    text-align: right;\n}\n\n"

/***/ }),

/***/ "./src/app/hello/hello.component.html":
/*!********************************************!*\
  !*** ./src/app/hello/hello.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"hello-container\">\n  <div id=\"intro\">\n    <h1 id=\"hello\">hello!</h1>\n    <h1 class=\"greeting\">i’m\n      <span id=\"name\">Kevin Tran</span>, a full stack developer with interests in web development, UX/UI, and machine learning.</h1>\n\n    <h2>\n      <a href=\"mailto:kevin.tran.kt@gmail.com\" target=\"_blank\">email</a>\n      <a href=\"\" target=\"_blank\"> resume</a>\n      <a href=\"https://github.com/kevintrankt/\" target=\"_blank\"> github</a>\n      <a href=\"https://www.linkedin.com/in/kevintrankt/\" target=\"_blank\"> linkedin</a>\n      <a href=\"https://www.instagram.com/poop.js/\" target=\"_blank\"> instagram</a>\n    </h2>\n  </div>\n\n  <h3 id=\"credit\">(under construction) designed & developed by kevin tran 2018</h3>\n\n</div>"

/***/ }),

/***/ "./src/app/hello/hello.component.ts":
/*!******************************************!*\
  !*** ./src/app/hello/hello.component.ts ***!
  \******************************************/
/*! exports provided: HelloComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelloComponent", function() { return HelloComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HelloComponent = /** @class */ (function () {
    function HelloComponent() {
    }
    HelloComponent.prototype.ngOnInit = function () {
    };
    HelloComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hello',
            template: __webpack_require__(/*! ./hello.component.html */ "./src/app/hello/hello.component.html"),
            styles: [__webpack_require__(/*! ./hello.component.css */ "./src/app/hello/hello.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HelloComponent);
    return HelloComponent;
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

module.exports = __webpack_require__(/*! /Users/hmmm/Documents/GitHub/kevintrankt/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map