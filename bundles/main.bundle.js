webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__page_not_found_page_not_found_component__ = __webpack_require__("./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__education_education_component__ = __webpack_require__("./src/app/education/education.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var appRoutes = [
    { path: "home", component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */], data: { title: "Home" } },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: "education", component: __WEBPACK_IMPORTED_MODULE_4__education_education_component__["a" /* EducationComponent */], data: { title: "Education" } },
    { path: "**", component: __WEBPACK_IMPORTED_MODULE_3__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */], data: { title: "404" } }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n                <h3>Dennis Tanghe</h3>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n                <nav>\r\n                    <ul class=\"nav nav-pills float-right\">\r\n                        <li class=\"nav-item\">\r\n                            <span class=\"badge badge-secondary\"><a class=\"nav-link\" [class.active]=\"activeUrl === 'Home'\" routerLink=\"/home\">Home</a></span>&nbsp;\r\n                        </li>\r\n                        <li class=\"nav-item\">\r\n                            <span class=\"badge badge-secondary\"><a class=\"nav-link\" [class.active]=\"activeUrl === 'About'\" routerLink=\"/education\">Education</a></span>&nbsp;\r\n                        </li>\r\n                        <li class=\"nav-item\">\r\n                            <span class=\"badge badge-secondary\"><a class=\"nav-link\" [class.active]=\"activeUrl === 'Skills'\" routerLink=\"/skills\">Skills</a></span>&nbsp;\r\n                        </li>\r\n                        <li class=\"nav-item\">\r\n                            <span class=\"badge badge-secondary\"><a class=\"nav-link\" [class.active]=\"activeUrl === 'Career'\" routerLink=\"/experiences\">Experiences</a></span>\r\n                        </li>\r\n                    </ul>\r\n                </nav>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</header>\r\n\r\n<router-outlet></router-outlet>\r\n\r\n<footer class=\"footer\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col\">\r\n                &copy; Dennis Tanghe 1981<br />\r\n                <span class=\"badge badge-secondary\"><a href=\"https://github.com/DennisTanghe/GitHubSite/blob/master/LICENSE\">MIT License</a> - <a href=\"https://github.com/dennistanghe/GitHubSite\">GitHub</a></span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</footer>"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ":host > header {\n  margin: 10px 0; }\n\n:host > footer {\n  background-color: #6E8894;\n  bottom: 0;\n  height: 50px;\n  position: fixed;\n  text-align: center;\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__page_not_found_page_not_found_component__ = __webpack_require__("./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__education_education_component__ = __webpack_require__("./src/app/education/education.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_5__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_6__education_education_component__["a" /* EducationComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/education/education.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <main>\r\n        <div class=\"jumbotron\">\r\n            <h1>Education</h1>\r\n            <p class=\"lead\">\r\n                Never to old to learn more.\r\n            </p>\r\n        </div>\r\n    </main>\r\n\r\n    <article>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <header>\r\n                    <h2>2013</h2>\r\n                </header>\r\n                <section>\r\n                    <h3>Developing Microsoft SharePoint 2013 Solutions: Advanced</h3>\r\n                    <p>\r\n                        Course at <a href=\"https://www.u2u.be/\" target=\"_blank\">U2U</a>.\r\n                    </p>\r\n                </section>\r\n                <footer></footer>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <header>\r\n                    <h2>2010</h2>\r\n                </header>\r\n                <section>\r\n                    <h3>Upgrade to Microsoft SharePoint 2010</h3>\r\n                    <p>\r\n                        Course at <a href=\"https://www.u2u.be/\" target=\"_blank\">U2U</a>.\r\n                    </p>\r\n                </section>\r\n                <footer></footer>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <header>\r\n                    <h2>2007</h2>\r\n                </header>\r\n                <section>\r\n                    <h3>Developing Microsoft SharePoint 2007 Solutions: Advanced</h3>\r\n                    <p>\r\n                        Course at <a href=\"https://www.u2u.be/\" target=\"_blank\">U2U</a>.\r\n                    </p>\r\n                </section>\r\n                <footer></footer>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <header>\r\n                    <h2>2007</h2>\r\n                </header>\r\n                <section>\r\n                    <h3>Developing Microsoft SharePoint 2007 Solutions: Essentials</h3>\r\n                    <p>\r\n                        Course at <a href=\"https://www.u2u.be/\" target=\"_blank\">U2U</a>.\r\n                    </p>\r\n                </section>\r\n                <footer></footer>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <header>\r\n                    <h2>2006</h2>\r\n                </header>\r\n                <section>\r\n                    <h3>Programming with C#</h3>\r\n                    <p>\r\n                        Course at work by <a href=\"http://www.telindus.com\" target=\"_blank\">Telindus</a>.\r\n                    </p>\r\n                </section>\r\n                <footer></footer>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <header>\r\n                    <h2>2003</h2>\r\n                </header>\r\n                <section>\r\n                    <h3>Visual Basic .Net</h3>\r\n                    <p>\r\n                        Evening class at <a href=\"http://www.cvo3hofsteden.org\" target=\"_blank\">CVO 3 Hofsteden</a> in Izegem.\r\n                    </p>\r\n                </section>\r\n                <footer></footer>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <header>\r\n                    <h2>1999-2002</h2>\r\n                </header>\r\n                <section>\r\n                    <h3>Bachelor Multimedia and Communication Technology</h3>\r\n                    <p>\r\n                        3 accademy years at the <a href=\"https://www.howest.be\" target=\"_blank\">howest (department PIH)</a> in Kortrijk.\r\n                    </p>\r\n                </section>\r\n                <footer></footer>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <header>\r\n                    <h2>1995-1999</h2>\r\n                </header>\r\n                <section>\r\n                    <h3>Economics Mathematics</h3>\r\n                    <p>\r\n                        Secondary education (2nd and 3rd grade) at <a href=\"http://www.athena-school.be/onze-school/campus-pottelberg\" target=\"_blank\">Athena campus Pottelberg</a> in Kortrijk.\r\n                    </p>\r\n                </section>\r\n                <footer></footer>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <header>\r\n                    <h2>1993-1995</h2>\r\n                </header>\r\n                <section>\r\n                    <h3>Modern sciences</h3>\r\n                    <p>\r\n                        Secondary education (1st grade) at <a href=\"http://ab.bellevuescholen.be/\" target=\"_blank\">Atheneum Bellevue</a> in Izegem.\r\n                    </p>\r\n                </section>\r\n                <footer></footer>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <header>\r\n                    <h2>1987-1993</h2>\r\n                </header>\r\n                <section>\r\n                    <h3>Primary education</h3>\r\n                    <p>\r\n                        At <a href=\"https://www.regenboogingelmunster.be/\" target=\"_blank\">GO! basisschool Regenboog</a> in Ingelmunster.\r\n                    </p>\r\n                </section>\r\n                <footer></footer>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <header>\r\n                    <h2>1984-1987</h2>\r\n                </header>\r\n                <section>\r\n                    <h3>Kindergarten</h3>\r\n                    <p>\r\n                        Nursery school at <a href=\"https://www.regenboogingelmunster.be/\" target=\"_blank\">GO! basisschool Regenboog</a> in Ingelmunster.\r\n                    </p>\r\n                </section>\r\n                <footer></footer>\r\n            </div>\r\n        </div>\r\n    </article>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/education/education.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/education/education.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EducationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EducationComponent = /** @class */ (function () {
    function EducationComponent() {
    }
    EducationComponent.prototype.ngOnInit = function () {
    };
    EducationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-education',
            template: __webpack_require__("./src/app/education/education.component.html"),
            styles: [__webpack_require__("./src/app/education/education.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EducationComponent);
    return EducationComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <main>\r\n        <div class=\"jumbotron\">\r\n            <h1>Dennis Tanghe</h1>\r\n            <p class=\"lead\">\r\n                My personal space on the web.\r\n            </p>\r\n        </div>\r\n    </main>\r\n\r\n    <article>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <header>\r\n                    <h2>Hi</h2>\r\n                </header>\r\n                <section>\r\n                    <p>\r\n                        After studying Multimedia & Communication Technology I have specialized myself in developing applications and web applications.<br/>\r\n                        Currently I'm occupied with SharePoint and web development at the <a href=\"http://www.picanolgroup.com\" target=\"_blank\">Picanol Group</a>.<br/>\r\n                        The web development part is mainly writing rest APIs in the backend and Angular applications as frontend.<br/>\r\n                        With this site I try to keep up with Angular.\r\n                    </p>\r\n                </section>\r\n                <footer>\r\n                    Kr,<br/>\r\n                    Dennis Tanghe\r\n                </footer>\r\n            </div>\r\n        </div>\r\n    </article>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
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
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <main>\r\n        <div class=\"jumbotron text-center\">\r\n            <i class=\"fa fa-question fa-5x\" aria-hidden=\"true\"></i><br />\r\n            <p class=\"lead\">\r\n                Oops, there's no page at this URL.\r\n            </p>\r\n        </div>\r\n    </main>\r\n</div>"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page-not-found',
            template: __webpack_require__("./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__("./src/app/page-not-found/page-not-found.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map