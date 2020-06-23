function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _question_question_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./question/question.component */
    "./src/app/question/question.component.ts");

    var routes = [{
      path: '',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }, {
      path: 'home',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }, {
      path: 'question',
      component: _question_question_component__WEBPACK_IMPORTED_MODULE_3__["QuestionComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'hw-glasses';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: [".container {\n  max-width: 1920px;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saWJlcmVzX2xvL3Byb2plY3QvaHctZ2xhc3Nlcy9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2FzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyXG4gICAgbWF4LXdpZHRoOiAxOTIwcHhcbiAgICBtYXJnaW46IDAgYXV0byIsIi5jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDE5MjBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59Il19 */"],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.sass'],
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./nav-bar/nav-bar.component */
    "./src/app/nav-bar/nav-bar.component.ts");
    /* harmony import */


    var _banner_banner_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./banner/banner.component */
    "./src/app/banner/banner.component.ts");
    /* harmony import */


    var _introduction_introduction_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./introduction/introduction.component */
    "./src/app/introduction/introduction.component.ts");
    /* harmony import */


    var _classic_classic_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./classic/classic.component */
    "./src/app/classic/classic.component.ts");
    /* harmony import */


    var _crossover_crossover_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./crossover/crossover.component */
    "./src/app/crossover/crossover.component.ts");
    /* harmony import */


    var _question_question_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./question/question.component */
    "./src/app/question/question.component.ts");
    /* harmony import */


    var _contant_us_contant_us_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./contant-us/contant-us.component */
    "./src/app/contant-us/contant-us.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"], _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_4__["NavBarComponent"], _banner_banner_component__WEBPACK_IMPORTED_MODULE_5__["BannerComponent"], _introduction_introduction_component__WEBPACK_IMPORTED_MODULE_6__["IntroductionComponent"], _classic_classic_component__WEBPACK_IMPORTED_MODULE_7__["ClassicComponent"], _crossover_crossover_component__WEBPACK_IMPORTED_MODULE_8__["CrossoverComponent"], _question_question_component__WEBPACK_IMPORTED_MODULE_9__["QuestionComponent"], _contant_us_contant_us_component__WEBPACK_IMPORTED_MODULE_10__["ContantUsComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"], _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_4__["NavBarComponent"], _banner_banner_component__WEBPACK_IMPORTED_MODULE_5__["BannerComponent"], _introduction_introduction_component__WEBPACK_IMPORTED_MODULE_6__["IntroductionComponent"], _classic_classic_component__WEBPACK_IMPORTED_MODULE_7__["ClassicComponent"], _crossover_crossover_component__WEBPACK_IMPORTED_MODULE_8__["CrossoverComponent"], _question_question_component__WEBPACK_IMPORTED_MODULE_9__["QuestionComponent"], _contant_us_contant_us_component__WEBPACK_IMPORTED_MODULE_10__["ContantUsComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/banner/banner.component.ts":
  /*!********************************************!*\
    !*** ./src/app/banner/banner.component.ts ***!
    \********************************************/

  /*! exports provided: BannerComponent */

  /***/
  function srcAppBannerBannerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BannerComponent", function () {
      return BannerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var BannerComponent = /*#__PURE__*/function () {
      function BannerComponent() {
        _classCallCheck(this, BannerComponent);
      }

      _createClass(BannerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BannerComponent;
    }();

    BannerComponent.ɵfac = function BannerComponent_Factory(t) {
      return new (t || BannerComponent)();
    };

    BannerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BannerComponent,
      selectors: [["app-banner"]],
      decls: 7,
      vars: 0,
      consts: [[1, "banner"], [1, "container"], [1, "banner-text"]],
      template: function BannerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Promise-Desert 2020 \u65E9\u6625\u7CFB\u5217");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u770B\u5F97\u6E05\uFF0C\u624D\u80FD\u770B\u5F97\u9060");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".container[_ngcontent-%COMP%] {\n  height: 840px;\n  background: url(/./assets/img/68.png);\n  position: relative;\n}\n@media (max-width: 768px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 100%;\n    background-position: center;\n  }\n}\n.banner-text[_ngcontent-%COMP%] {\n  color: #650300;\n  position: absolute;\n  top: 350px;\n  right: 360px;\n  text-align: right;\n}\n.banner-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 64px;\n  color: #650300;\n  font-family: PingFangTC-Medium, sans-serif;\n  letter-spacing: 0px;\n}\n.banner-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 36px;\n  color: #650300;\n  font-family: PingFangTC-Medium, sans-serif;\n  margin-bottom: 16px;\n}\n@media (max-width: 768px) {\n  .banner-text[_ngcontent-%COMP%] {\n    right: 48px;\n  }\n}\n.banner-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 48px;\n  color: #650300;\n  font-family: PingFangTC-Medium, sans-serif;\n}\n.banner-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #650300;\n  font-family: PingFangTC-Medium, sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saWJlcmVzX2xvL3Byb2plY3QvaHctZ2xhc3Nlcy9zcmMvYXBwL2Jhbm5lci9iYW5uZXIuY29tcG9uZW50LnNhc3MiLCJzcmMvYXBwL2Jhbm5lci9iYW5uZXIuY29tcG9uZW50LnNhc3MiLCIvVXNlcnMvbGliZXJlc19sby9wcm9qZWN0L2h3LWdsYXNzZXMvc3JjL3Nhc3MvX21peGluLnNhc3MiLCIvVXNlcnMvbGliZXJlc19sby9wcm9qZWN0L2h3LWdsYXNzZXMvc3JjL3Nhc3MvX3ZhcmlhYmxlLnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDSSxhQUFBO0VBQ0EscUNBQUE7RUFDQSxrQkFBQTtBQ0ZKO0FDSEk7RUZFSjtJQUtRLGVBQUE7SUFDQSwyQkFBQTtFQ0FOO0FBQ0Y7QURDQTtFQUNJLGNHRlc7RUhHWCxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNFSjtBRERJO0VFUEEsZUZRd0I7RUVQeEIsY0NEVztFREVYLDBDQUFBO0VGT0ksbUJBQUE7QUNLUjtBREhJO0VFREEsZUZFd0I7RUVEeEIsY0NYVztFRFlYLDBDQUFBO0VGQ0ksbUJBQUE7QUNPUjtBQzdCSTtFRlVKO0lBY1EsV0FBQTtFQ1NOO0FBQ0Y7QURUSTtFRWhCQSxlRmlCd0I7RUVoQnhCLGNDRFc7RURFWCwwQ0FBQTtBRDRCSjtBRFpJO0VFUkEsZUZTd0I7RUVSeEIsY0NYVztFRFlYLDBDQUFBO0FEdUJKIiwiZmlsZSI6InNyYy9hcHAvYmFubmVyL2Jhbm5lci5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3ZhcmlhYmxlLnNhc3MnXG5AaW1wb3J0ICdtaXhpbi5zYXNzJ1xuXG4uY29udGFpbmVyIFxuICAgIGhlaWdodDogODQwcHhcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLy4vYXNzZXRzL2ltZy82OC5wbmcpXG4gICAgcG9zaXRpb246IHJlbGF0aXZlXG4gICAgQGluY2x1ZGUgcGFkIFxuICAgICAgICBtYXgtd2lkdGg6IDEwMCVcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyXG5cbi5iYW5uZXItdGV4dCAgIFxuICAgIGNvbG9yOiAkdGV4dC1wcmltYWV5XG4gICAgcG9zaXRpb246IGFic29sdXRlXG4gICAgdG9wOiAzNTBweFxuICAgIHJpZ2h0OiAzNjBweFxuICAgIHRleHQtYWxpZ246IHJpZ2h0XG4gICAgJiBoMVxuICAgICAgICBAaW5jbHVkZSBmb250TGFyZ2UoIDY0cHggKVxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMHB4XG4gICAgICAgIFxuICAgICYgcFxuICAgICAgICBAaW5jbHVkZSBmb250U21hbGwoIDM2cHggKSAgXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHhcbiAgICBAaW5jbHVkZSBwYWQgXG4gICAgICAgIHJpZ2h0OiA0OHB4XG4gICAgJiBoMVxuICAgICAgICBAaW5jbHVkZSBmb250TGFyZ2UoIDQ4cHggKVxuICAgICYgcFxuICAgICAgICBAaW5jbHVkZSBmb250U21hbGwoIDIwcHggKVxuXG4iLCIuY29udGFpbmVyIHtcbiAgaGVpZ2h0OiA4NDBweDtcbiAgYmFja2dyb3VuZDogdXJsKC8uL2Fzc2V0cy9pbWcvNjgucG5nKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIH1cbn1cblxuLmJhbm5lci10ZXh0IHtcbiAgY29sb3I6ICM2NTAzMDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzNTBweDtcbiAgcmlnaHQ6IDM2MHB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5iYW5uZXItdGV4dCBoMSB7XG4gIGZvbnQtc2l6ZTogNjRweDtcbiAgY29sb3I6ICM2NTAzMDA7XG4gIGZvbnQtZmFtaWx5OiBQaW5nRmFuZ1RDLU1lZGl1bSwgc2Fucy1zZXJpZjtcbiAgbGV0dGVyLXNwYWNpbmc6IDBweDtcbn1cbi5iYW5uZXItdGV4dCBwIHtcbiAgZm9udC1zaXplOiAzNnB4O1xuICBjb2xvcjogIzY1MDMwMDtcbiAgZm9udC1mYW1pbHk6IFBpbmdGYW5nVEMtTWVkaXVtLCBzYW5zLXNlcmlmO1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5iYW5uZXItdGV4dCB7XG4gICAgcmlnaHQ6IDQ4cHg7XG4gIH1cbn1cbi5iYW5uZXItdGV4dCBoMSB7XG4gIGZvbnQtc2l6ZTogNDhweDtcbiAgY29sb3I6ICM2NTAzMDA7XG4gIGZvbnQtZmFtaWx5OiBQaW5nRmFuZ1RDLU1lZGl1bSwgc2Fucy1zZXJpZjtcbn1cbi5iYW5uZXItdGV4dCBwIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogIzY1MDMwMDtcbiAgZm9udC1mYW1pbHk6IFBpbmdGYW5nVEMtTWVkaXVtLCBzYW5zLXNlcmlmO1xufSIsIkBtaXhpbiBwYWRcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpXG4gICAgICAgIEBjb250ZW50XG5cbkBtaXhpbiBtb2JpbGVcbiAgICBAbWVkaWEgKG1heC13aWR0aDogMzc1cHgpXG4gICAgICAgIEBjb250ZW50ICAgICAgICBcbiAgICBcbiAgICBcbkBtaXhpbiBmb250TGFyZ2UoJHNpemUpICAgIFxuICAgIGZvbnQtc2l6ZTogJHNpemVcbiAgICBjb2xvcjogJHRleHQtcHJpbWFleVxuICAgIGZvbnQtZmFtaWx5OiBQaW5nRmFuZ1RDLU1lZGl1bSwgc2Fucy1zZXJpZlxuXG5AbWl4aW4gZm9udE1pZCgkc2l6ZSlcbiAgICBmb250LXNpemU6ICRzaXplXG4gICAgY29sb3I6ICR0ZXh0LXByaW1hZXlcbiAgICBmb250LWZhbWlseTogUGluZ0ZhbmdUQy1TZW1pYm9sZCwgc2Fucy1zZXJpZlxuXG5AbWl4aW4gZm9udFNtYWxsKCRzaXplKVxuICAgIGZvbnQtc2l6ZTogJHNpemVcbiAgICBjb2xvcjogJHRleHQtcHJpbWFleVxuICAgIGZvbnQtZmFtaWx5OiBQaW5nRmFuZ1RDLU1lZGl1bSwgc2Fucy1zZXJpZlxuXG5AbWl4aW4gZm9udEV4dHJhU3Ryb25nKCRzaXplKVxuICAgIGZvbnQtc2l6ZTogJHNpemVcbiAgICBjb2xvcjogJHRleHQtcHJpbWFleVxuICAgIGZvbnQtZmFtaWx5OiBQaW5nRmFuZ1RDLU1lZGl1bSwgc2Fucy1zZXJpZlxuXG5AbWl4aW4gZm9udFNlYygkc2l6ZSlcbiAgICBmb250LXNpemU6ICRzaXplXG4gICAgY29sb3I6ICR0ZXh0LXNlY29uZGFyeVxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG9cbiAgICAvLyBmb250LXdlaWdodDogYm9sZFxuXG5AbWl4aW4gZm9udHRleHQoJHNpemUpXG4gICAgZm9udC1zaXplOiAkc2l6ZVxuICAgIGNvbG9yOiAjMDAwMDAwXG4gICAgZm9udC1mYW1pbHk6IFBpbmdGYW5nVEMtUmVndWxhciwgc2Fucy1zZXJpZiIsIiRiZy1wcmltYXJ5OiAjQUEwNjAxXG4kYmctc2Vjb25kYXJ5IDogI0ZCRjJGMVxuJGJnLXRoaXJkbHkgOiAjRjJGMkYyXG4kYmctZm91cnRobHkgOiAjZGNkY2RjXG4kYmctd2hpdGUgOiAjZmZmXG4kYmctYmxhY2sgOiAjMDAwXG4kYmctaG92ZXIgOiAjOGEwNzAyXG5cblxuXG4kdGV4dC1wcmltYWV5OiAjNjUwMzAwICAgIFxuJHRleHQtc2Vjb25kYXJ5IDogI0FBMDYwMVxuJHRleHQtdGhpcmRseTogIzIxMjUyOVxuJHRleHQtZm91cnRobHk6ICM3MDcwNzBcbiR0ZXh0LWJsb2ctdHh0OiAjNTU1NTU1XG4kdGV4dC1ibG9nLWRhdGE6ICM2YzZjNmMiXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BannerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-banner',
          templateUrl: './banner.component.html',
          styleUrls: ['./banner.component.sass']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/classic/classic.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/classic/classic.component.ts ***!
    \**********************************************/

  /*! exports provided: ClassicComponent */

  /***/
  function srcAppClassicClassicComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClassicComponent", function () {
      return ClassicComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ClassicComponent = /*#__PURE__*/function () {
      function ClassicComponent() {
        _classCallCheck(this, ClassicComponent);
      }

      _createClass(ClassicComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ClassicComponent;
    }();

    ClassicComponent.ɵfac = function ClassicComponent_Factory(t) {
      return new (t || ClassicComponent)();
    };

    ClassicComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ClassicComponent,
      selectors: [["app-classic"]],
      decls: 25,
      vars: 0,
      consts: [[1, "classic"], [1, "container"], [1, "classic-title"], [1, "product-box"], [1, "product-pic"], ["src", "assets/img/8.png", "alt", ""], [1, "product-text"], ["src", "assets/img/iconfinder_44.svg", "alt", ""], [1, "product-box", "row-reverse"], ["src", "assets/img/15_2.png", "alt", ""], [1, "product-text--left"], ["src", "assets/img/Layer_1.svg", "alt", ""], ["src", "assets/img/28.png", "alt", ""], ["src", "assets/img/Page-1.svg", "alt", ""]],
      template: function ClassicComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \u7D93\u5178\u7CFB\u5217\u93E1\u6846 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "optical");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "sunglasses");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "functional");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".classic[_ngcontent-%COMP%] {\n  padding: 64px;\n}\n@media (max-width: 768px) {\n  .classic[_ngcontent-%COMP%] {\n    padding: 40px 48px;\n  }\n}\n.classic-title[_ngcontent-%COMP%] {\n  font-size: 48px;\n  color: #650300;\n  font-family: PingFangTC-Medium, sans-serif;\n  text-align: center;\n  margin-bottom: 60px;\n}\n@media (max-width: 768px) {\n  .classic-title[_ngcontent-%COMP%] {\n    font-size: 32px;\n    color: #650300;\n    font-family: PingFangTC-Medium, sans-serif;\n    margin-bottom: 32px;\n  }\n}\n.container[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 1140px;\n  margin-right: auto;\n  margin-left: auto;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n.product-box[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  margin-right: -15px;\n  margin-left: -15px;\n  align-items: center;\n  margin-bottom: 32px;\n}\n@media (max-width: 768px) {\n  .product-box[_ngcontent-%COMP%] {\n    margin-bottom: 8px;\n  }\n}\n.row-reverse[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n@media (max-width: 768px) {\n  .row-reverse[_ngcontent-%COMP%] {\n    flex-direction: row;\n  }\n}\n.product-pic[_ngcontent-%COMP%] {\n  flex: 0 2 auto;\n}\n@media (max-width: 768px) {\n  .product-pic[_ngcontent-%COMP%] {\n    max-width: 90%;\n    flex: 0 0 59%;\n  }\n}\n.product-text[_ngcontent-%COMP%] {\n  margin-left: 24px;\n}\n.product-text[_ngcontent-%COMP%], .product-text--left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n@media (max-width: 768px) {\n  .product-text[_ngcontent-%COMP%], .product-text--left[_ngcontent-%COMP%] {\n    margin: 0 auto;\n  }\n}\n.product-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .product-text--left[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 48px;\n  color: #AA0601;\n  font-family: Roboto;\n  text-transform: uppercase;\n  margin-left: 8px;\n  margin-right: 24px;\n  font-style: italic;\n  font-weight: bold;\n}\n@media (max-width: 768px) {\n  .product-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .product-text--left[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 28px;\n    color: #AA0601;\n    font-family: Roboto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saWJlcmVzX2xvL3Byb2plY3QvaHctZ2xhc3Nlcy9zcmMvYXBwL2NsYXNzaWMvY2xhc3NpYy5jb21wb25lbnQuc2FzcyIsInNyYy9hcHAvY2xhc3NpYy9jbGFzc2ljLmNvbXBvbmVudC5zYXNzIiwiL1VzZXJzL2xpYmVyZXNfbG8vcHJvamVjdC9ody1nbGFzc2VzL3NyYy9zYXNzL19taXhpbi5zYXNzIiwiL1VzZXJzL2xpYmVyZXNfbG8vcHJvamVjdC9ody1nbGFzc2VzL3NyYy9zYXNzL192YXJpYWJsZS5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0ksYUFBQTtBQ0ZKO0FDREk7RUZFSjtJQUdRLGtCQUFBO0VDQU47QUFDRjtBRENBO0VFRUksZUZEb0I7RUVFcEIsY0NEVztFREVYLDBDQUFBO0VGRkEsa0JBQUE7RUFDQSxtQkFBQTtBQ0lKO0FDZEk7RUZPSjtJRUVJLGVGR3dCO0lFRnhCLGNDRFc7SURFWCwwQ0FBQTtJRkVJLG1CQUFBO0VDUU47QUFDRjtBRFBBO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNVSjtBRFJBO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ1dKO0FDeENJO0VGdUJKO0lBUVEsa0JBQUE7RUNhTjtBQUNGO0FEWkE7RUFDSSwyQkFBQTtBQ2VKO0FDakRJO0VGaUNKO0lBR1EsbUJBQUE7RUNpQk47QUFDRjtBRGhCQTtFQUNJLGNBQUE7QUNtQko7QUMxREk7RUZzQ0o7SUFHUSxjQUFBO0lBQ0EsYUFBQTtFQ3FCTjtBQUNGO0FEcEJBO0VBQ0ksaUJBQUE7QUN1Qko7QURyQkE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUN3Qko7QUN6RUk7RUYrQ0o7SUFJUSxjQUFBO0VDMEJOO0FBQ0Y7QUR2QkE7RUUxQkksZUYyQmtCO0VFMUJsQixjQ3BCYztFRHFCZCxtQkFBQTtFRjBCQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDNEJKO0FDekZJO0VGdURKO0lFMUJJLGVGa0NzQjtJRWpDdEIsY0NwQmM7SURxQmQsbUJBQUE7RURnRUY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NsYXNzaWMvY2xhc3NpYy5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3ZhcmlhYmxlLnNhc3MnXG5AaW1wb3J0ICdtaXhpbi5zYXNzJ1xuXG4uY2xhc3NpY1xuICAgIHBhZGRpbmc6IDY0cHhcbiAgICBAaW5jbHVkZSBwYWRcbiAgICAgICAgcGFkZGluZzogNDBweCA0OHB4XG5cbi5jbGFzc2ljLXRpdGxlXG4gICAgQGluY2x1ZGUgZm9udExhcmdlKCA0OHB4IClcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXJcbiAgICBtYXJnaW4tYm90dG9tOiA2MHB4XG4gICAgQGluY2x1ZGUgcGFkXG4gICAgICAgIEBpbmNsdWRlIGZvbnRMYXJnZSggMzJweCApXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMycHhcblxuLmNvbnRhaW5lclxuICAgIHdpZHRoOiAxMDAlXG4gICAgbWF4LXdpZHRoOiAxMTQwcHhcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG9cbiAgICBtYXJnaW4tbGVmdDogYXV0b1xuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHhcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHggICAgXG5cbi5wcm9kdWN0LWJveFxuICAgIGRpc3BsYXk6IGZsZXhcbiAgICBmbGV4LXdyYXA6IHdyYXBcbiAgICBtYXJnaW4tcmlnaHQ6IC0xNXB4XG4gICAgbWFyZ2luLWxlZnQ6IC0xNXB4XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlclxuICAgIG1hcmdpbi1ib3R0b206IDMycHhcbiAgICBAaW5jbHVkZSBwYWRcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4XG5cbi5yb3ctcmV2ZXJzZVxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZVxuICAgIEBpbmNsdWRlIHBhZFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93XG4gICAgXG4ucHJvZHVjdC1waWNcbiAgICBmbGV4OiAwIDIgYXV0byBcbiAgICBAaW5jbHVkZSBwYWRcbiAgICAgICAgbWF4LXdpZHRoOiA5MCVcbiAgICAgICAgZmxleDogMCAwIDU5JVxuXG4ucHJvZHVjdC10ZXh0XG4gICAgbWFyZ2luLWxlZnQ6IDI0cHhcbiAgICBcbi5wcm9kdWN0LXRleHQsIC5wcm9kdWN0LXRleHQtLWxlZnRcbiAgICBkaXNwbGF5OiBmbGV4XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlclxuICAgIEBpbmNsdWRlIHBhZFxuICAgICAgICBtYXJnaW46IDAgYXV0b1xuICAgICAgICAvLyB0ZXh0LWFsaWduOiByaWdodFxuICAgICAgICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlclxuXG4ucHJvZHVjdC10ZXh0IHNwYW4sIC5wcm9kdWN0LXRleHQtLWxlZnQgc3BhblxuICAgIEBpbmNsdWRlIGZvbnRTZWMoIDQ4cHggKVxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2VcbiAgICBtYXJnaW4tbGVmdDogOHB4XG4gICAgbWFyZ2luLXJpZ2h0OiAyNHB4IFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpY1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkXG4gICAgQGluY2x1ZGUgcGFkXG4gICAgICAgIEBpbmNsdWRlIGZvbnRTZWMoIDI4cHggKVxuXG4iLCIuY2xhc3NpYyB7XG4gIHBhZGRpbmc6IDY0cHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmNsYXNzaWMge1xuICAgIHBhZGRpbmc6IDQwcHggNDhweDtcbiAgfVxufVxuXG4uY2xhc3NpYy10aXRsZSB7XG4gIGZvbnQtc2l6ZTogNDhweDtcbiAgY29sb3I6ICM2NTAzMDA7XG4gIGZvbnQtZmFtaWx5OiBQaW5nRmFuZ1RDLU1lZGl1bSwgc2Fucy1zZXJpZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiA2MHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jbGFzc2ljLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDMycHg7XG4gICAgY29sb3I6ICM2NTAzMDA7XG4gICAgZm9udC1mYW1pbHk6IFBpbmdGYW5nVEMtTWVkaXVtLCBzYW5zLXNlcmlmO1xuICAgIG1hcmdpbi1ib3R0b206IDMycHg7XG4gIH1cbn1cblxuLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDExNDBweDtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xufVxuXG4ucHJvZHVjdC1ib3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIG1hcmdpbi1yaWdodDogLTE1cHg7XG4gIG1hcmdpbi1sZWZ0OiAtMTVweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMzJweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAucHJvZHVjdC1ib3gge1xuICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgfVxufVxuXG4ucm93LXJldmVyc2Uge1xuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnJvdy1yZXZlcnNlIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB9XG59XG5cbi5wcm9kdWN0LXBpYyB7XG4gIGZsZXg6IDAgMiBhdXRvO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5wcm9kdWN0LXBpYyB7XG4gICAgbWF4LXdpZHRoOiA5MCU7XG4gICAgZmxleDogMCAwIDU5JTtcbiAgfVxufVxuXG4ucHJvZHVjdC10ZXh0IHtcbiAgbWFyZ2luLWxlZnQ6IDI0cHg7XG59XG5cbi5wcm9kdWN0LXRleHQsIC5wcm9kdWN0LXRleHQtLWxlZnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5wcm9kdWN0LXRleHQsIC5wcm9kdWN0LXRleHQtLWxlZnQge1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG59XG5cbi5wcm9kdWN0LXRleHQgc3BhbiwgLnByb2R1Y3QtdGV4dC0tbGVmdCBzcGFuIHtcbiAgZm9udC1zaXplOiA0OHB4O1xuICBjb2xvcjogI0FBMDYwMTtcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgbWFyZ2luLXJpZ2h0OiAyNHB4O1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5wcm9kdWN0LXRleHQgc3BhbiwgLnByb2R1Y3QtdGV4dC0tbGVmdCBzcGFuIHtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gICAgY29sb3I6ICNBQTA2MDE7XG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgfVxufSIsIkBtaXhpbiBwYWRcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpXG4gICAgICAgIEBjb250ZW50XG5cbkBtaXhpbiBtb2JpbGVcbiAgICBAbWVkaWEgKG1heC13aWR0aDogMzc1cHgpXG4gICAgICAgIEBjb250ZW50ICAgICAgICBcbiAgICBcbiAgICBcbkBtaXhpbiBmb250TGFyZ2UoJHNpemUpICAgIFxuICAgIGZvbnQtc2l6ZTogJHNpemVcbiAgICBjb2xvcjogJHRleHQtcHJpbWFleVxuICAgIGZvbnQtZmFtaWx5OiBQaW5nRmFuZ1RDLU1lZGl1bSwgc2Fucy1zZXJpZlxuXG5AbWl4aW4gZm9udE1pZCgkc2l6ZSlcbiAgICBmb250LXNpemU6ICRzaXplXG4gICAgY29sb3I6ICR0ZXh0LXByaW1hZXlcbiAgICBmb250LWZhbWlseTogUGluZ0ZhbmdUQy1TZW1pYm9sZCwgc2Fucy1zZXJpZlxuXG5AbWl4aW4gZm9udFNtYWxsKCRzaXplKVxuICAgIGZvbnQtc2l6ZTogJHNpemVcbiAgICBjb2xvcjogJHRleHQtcHJpbWFleVxuICAgIGZvbnQtZmFtaWx5OiBQaW5nRmFuZ1RDLU1lZGl1bSwgc2Fucy1zZXJpZlxuXG5AbWl4aW4gZm9udEV4dHJhU3Ryb25nKCRzaXplKVxuICAgIGZvbnQtc2l6ZTogJHNpemVcbiAgICBjb2xvcjogJHRleHQtcHJpbWFleVxuICAgIGZvbnQtZmFtaWx5OiBQaW5nRmFuZ1RDLU1lZGl1bSwgc2Fucy1zZXJpZlxuXG5AbWl4aW4gZm9udFNlYygkc2l6ZSlcbiAgICBmb250LXNpemU6ICRzaXplXG4gICAgY29sb3I6ICR0ZXh0LXNlY29uZGFyeVxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG9cbiAgICAvLyBmb250LXdlaWdodDogYm9sZFxuXG5AbWl4aW4gZm9udHRleHQoJHNpemUpXG4gICAgZm9udC1zaXplOiAkc2l6ZVxuICAgIGNvbG9yOiAjMDAwMDAwXG4gICAgZm9udC1mYW1pbHk6IFBpbmdGYW5nVEMtUmVndWxhciwgc2Fucy1zZXJpZiIsIiRiZy1wcmltYXJ5OiAjQUEwNjAxXG4kYmctc2Vjb25kYXJ5IDogI0ZCRjJGMVxuJGJnLXRoaXJkbHkgOiAjRjJGMkYyXG4kYmctZm91cnRobHkgOiAjZGNkY2RjXG4kYmctd2hpdGUgOiAjZmZmXG4kYmctYmxhY2sgOiAjMDAwXG4kYmctaG92ZXIgOiAjOGEwNzAyXG5cblxuXG4kdGV4dC1wcmltYWV5OiAjNjUwMzAwICAgIFxuJHRleHQtc2Vjb25kYXJ5IDogI0FBMDYwMVxuJHRleHQtdGhpcmRseTogIzIxMjUyOVxuJHRleHQtZm91cnRobHk6ICM3MDcwNzBcbiR0ZXh0LWJsb2ctdHh0OiAjNTU1NTU1XG4kdGV4dC1ibG9nLWRhdGE6ICM2YzZjNmMiXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClassicComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-classic',
          templateUrl: './classic.component.html',
          styleUrls: ['./classic.component.sass']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/contant-us/contant-us.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/contant-us/contant-us.component.ts ***!
    \****************************************************/

  /*! exports provided: ContantUsComponent */

  /***/
  function srcAppContantUsContantUsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContantUsComponent", function () {
      return ContantUsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ContantUsComponent = /*#__PURE__*/function () {
      function ContantUsComponent() {
        _classCallCheck(this, ContantUsComponent);
      }

      _createClass(ContantUsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ContantUsComponent;
    }();

    ContantUsComponent.ɵfac = function ContantUsComponent_Factory(t) {
      return new (t || ContantUsComponent)();
    };

    ContantUsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ContantUsComponent,
      selectors: [["app-contant-us"]],
      decls: 25,
      vars: 0,
      consts: [[1, "call"], [1, "container"], [1, "call-title"], [1, "form-title"], ["for", "name"], ["type", "text", "name", "name", "placeholder", "\u9673\u5C0F\u660E", 1, "forminput"], ["for", "phone"], ["type", "text", "name", "phone", "placeholder", "0912-345-678", 1, "forminput"], ["for", "mail"], ["type", "text", "name", "mail", "placeholder", "example@email.com", 1, "forminput"], ["for", "feedback"], ["name", "feedback", "id", "", "cols", "30", "rows", "5", "placeholder", "\u8ACB\u8F38\u5165\u60A8\u7684\u610F\u898B", 1, "forminput"], ["for", "agree", 1, "formcheck"], ["type", "checkbox"], [1, "btn"], ["type", "submit", 1, "submit"]],
      template: function ContantUsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u806F\u7D61\u6211\u5011");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " \u6211\u5011\u76F8\u7576\u91CD\u8996\u60A8\u7684\u610F\u898B\uFF0C\u82E5\u60A8\u6709\u4EFB\u4F55\u7591\u554F\uFF0C\u53EF\u5148\u53C3\u8003\u300C\u5E38\u898B\u554F\u984C\u300D\uFF0C\u82E5\u4ECD\u6709\u4EFB\u4F55\u554F\u984C\uFF0C\u8ACB\u586B\u59A5\u4EE5\u4E0B\u8CC7\u6599\uFF0C\u6211\u5011\u6703\u5728\u8FD1\u671F\u8207\u60A8\u806F\u7E6B\u3002 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u59D3\u540D");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u806F\u7D61\u96FB\u8A71");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u96FB\u5B50\u90F5\u4EF6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u610F\u898B\u53CD\u61C9");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "textarea", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " \u6211\u540C\u610F\u96B1\u79C1\u6B0A\u653F\u7B56\uFF0C\u4E26\u540C\u610F\u4F9D\u96B1\u79C1\u6B0A\u653F\u7B56\u4E2D\u6240\u8FF0\u7684\u65B9\u5F0F\u8655\u7406\u81EA\u5DF1\u7684\u8CC7\u6599\u3002 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\u78BA\u8A8D\u9001\u51FA");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".call[_ngcontent-%COMP%] {\n  background-color: #AA06010D;\n  padding: 64px;\n  margin-right: auto;\n  margin-left: auto;\n}\n@media (max-width: 768px) {\n  .call[_ngcontent-%COMP%] {\n    padding: 40px 135px;\n  }\n}\n.container[_ngcontent-%COMP%] {\n  max-width: 792px;\n  width: 100%;\n}\n.call-title[_ngcontent-%COMP%] {\n  font-size: 48px;\n  color: #650300;\n  font-family: PingFangTC-Semibold, sans-serif;\n  color: #000000;\n  text-align: center;\n}\n.form-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin-top: 24px;\n  margin-bottom: 20px;\n  line-height: 1.5;\n  text-align: left;\n}\n.forminput[_ngcontent-%COMP%] {\n  outline: none;\n  width: 100%;\n  background-color: transparent;\n  border-style: none;\n  border: 1px solid #000;\n  padding: 14px 16px;\n  margin: 4px 0 16px 0;\n}\n.formcheck[_ngcontent-%COMP%] {\n  outline: none;\n  width: 100%;\n  background-color: transparent;\n  border-style: none;\n}\n.formcheck[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  margin-right: 4px;\n  border: 1px solid #000000;\n}\n.submit[_ngcontent-%COMP%] {\n  background: #AA0601;\n  color: #ffffff;\n  border: none;\n  padding: 16px 52px;\n}\n.btn[_ngcontent-%COMP%] {\n  margin-top: 42px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saWJlcmVzX2xvL3Byb2plY3QvaHctZ2xhc3Nlcy9zcmMvYXBwL2NvbnRhbnQtdXMvY29udGFudC11cy5jb21wb25lbnQuc2FzcyIsInNyYy9hcHAvY29udGFudC11cy9jb250YW50LXVzLmNvbXBvbmVudC5zYXNzIiwiL1VzZXJzL2xpYmVyZXNfbG8vcHJvamVjdC9ody1nbGFzc2VzL3NyYy9zYXNzL19taXhpbi5zYXNzIiwiL1VzZXJzL2xpYmVyZXNfbG8vcHJvamVjdC9ody1nbGFzc2VzL3NyYy9zYXNzL19jb2xvci5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0ksMkJBQUE7RUFFQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ0pKO0FDSkk7RUZHSjtJQU9RLG1CQUFBO0VDRk47QUFDRjtBREdBO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0FDQUo7QURFQTtFRUZJLGVGR2tCO0VFRmxCLGNDZlc7RURnQlgsNENBQUE7RUZFQSxjQUFBO0VBQ0Esa0JBQUE7QUNHSjtBRERBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDSUo7QURGQTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQ0tKO0FESEE7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7QUNNSjtBREhBO0VBQ0ksaUJBQUE7RUFDQSx5QkFBQTtBQ01KO0FESkE7RUFDSSxtQkdsRFk7RUhtRFosY0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ09KO0FETEE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0FDUUoiLCJmaWxlIjoic3JjL2FwcC9jb250YW50LXVzL2NvbnRhbnQtdXMuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICd2YXJpYWJsZS5zYXNzJ1xuQGltcG9ydCAnY29sb3Iuc2FzcydcbkBpbXBvcnQgJ21peGluLnNhc3MnXG5cbi5jYWxsXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0FBMDYwMTBEXG4gICAgLy8gaGVpZ2h0OiA5MDBweFxuICAgIHBhZGRpbmc6IDY0cHhcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG9cbiAgICBtYXJnaW4tbGVmdDogYXV0b1xuICAgIEBpbmNsdWRlIHBhZFxuICAgICAgICBwYWRkaW5nOiA0MHB4IDEzNXB4XG5cbi5jb250YWluZXJcbiAgICBtYXgtd2lkdGg6IDc5MnB4XG4gICAgd2lkdGg6IDEwMCVcblxuLmNhbGwtdGl0bGVcbiAgICBAaW5jbHVkZSBmb250TWlkKCA0OHB4ICkgICAgXG4gICAgY29sb3I6ICMwMDAwMDAgICAgXG4gICAgdGV4dC1hbGlnbjogY2VudGVyXG5cbi5mb3JtLXRpdGxlXG4gICAgZm9udC1zaXplOiAyMHB4XG4gICAgbWFyZ2luLXRvcDogMjRweCAgICBcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4XG4gICAgbGluZS1oZWlnaHQ6IDEuNVxuICAgIHRleHQtYWxpZ246IGxlZnRcblxuLmZvcm1pbnB1dFxuICAgIG91dGxpbmU6IG5vbmVcbiAgICB3aWR0aDogMTAwJVxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50XG4gICAgYm9yZGVyLXN0eWxlOiBub25lXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMFxuICAgIHBhZGRpbmc6IDE0cHggMTZweCAgICBcbiAgICBtYXJnaW46IDRweCAwIDE2cHggMFxuXG4uZm9ybWNoZWNrXG4gICAgb3V0bGluZTogbm9uZVxuICAgIHdpZHRoOiAxMDAlXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnRcbiAgICBib3JkZXItc3R5bGU6IG5vbmVcbiAgICAvLyBwYWRkaW5nOiAxNHB4IDE2cHggICAgXG4gICAgLy8gbWFyZ2luOiA0cHggMCAxNnB4IDQycHggICAgXG4uZm9ybWNoZWNrIGlucHV0XG4gICAgbWFyZ2luLXJpZ2h0OiA0cHhcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwXG5cbi5zdWJtaXRcbiAgICBiYWNrZ3JvdW5kOiAkY29sb3ItcHJpbWFyeVxuICAgIGNvbG9yOiAjZmZmZmZmXG4gICAgYm9yZGVyOiBub25lXG4gICAgcGFkZGluZzogMTZweCA1MnB4XG5cbi5idG5cbiAgICBtYXJnaW4tdG9wOiA0MnB4XG4gICAgdGV4dC1hbGlnbjogY2VudGVyICAgICBcbiAgICAvLyBtYXJnaW4tYm90dG9tOiA5MnB4IiwiLmNhbGwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQUEwNjAxMEQ7XG4gIHBhZGRpbmc6IDY0cHg7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmNhbGwge1xuICAgIHBhZGRpbmc6IDQwcHggMTM1cHg7XG4gIH1cbn1cblxuLmNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogNzkycHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY2FsbC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogNDhweDtcbiAgY29sb3I6ICM2NTAzMDA7XG4gIGZvbnQtZmFtaWx5OiBQaW5nRmFuZ1RDLVNlbWlib2xkLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzAwMDAwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZm9ybS10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luLXRvcDogMjRweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmZvcm1pbnB1dCB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xuICBwYWRkaW5nOiAxNHB4IDE2cHg7XG4gIG1hcmdpbjogNHB4IDAgMTZweCAwO1xufVxuXG4uZm9ybWNoZWNrIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXItc3R5bGU6IG5vbmU7XG59XG5cbi5mb3JtY2hlY2sgaW5wdXQge1xuICBtYXJnaW4tcmlnaHQ6IDRweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDtcbn1cblxuLnN1Ym1pdCB7XG4gIGJhY2tncm91bmQ6ICNBQTA2MDE7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDE2cHggNTJweDtcbn1cblxuLmJ0biB7XG4gIG1hcmdpbi10b3A6IDQycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iLCJAbWl4aW4gcGFkXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KVxuICAgICAgICBAY29udGVudFxuXG5AbWl4aW4gbW9iaWxlXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDM3NXB4KVxuICAgICAgICBAY29udGVudCAgICAgICAgXG4gICAgXG4gICAgXG5AbWl4aW4gZm9udExhcmdlKCRzaXplKSAgICBcbiAgICBmb250LXNpemU6ICRzaXplXG4gICAgY29sb3I6ICR0ZXh0LXByaW1hZXlcbiAgICBmb250LWZhbWlseTogUGluZ0ZhbmdUQy1NZWRpdW0sIHNhbnMtc2VyaWZcblxuQG1peGluIGZvbnRNaWQoJHNpemUpXG4gICAgZm9udC1zaXplOiAkc2l6ZVxuICAgIGNvbG9yOiAkdGV4dC1wcmltYWV5XG4gICAgZm9udC1mYW1pbHk6IFBpbmdGYW5nVEMtU2VtaWJvbGQsIHNhbnMtc2VyaWZcblxuQG1peGluIGZvbnRTbWFsbCgkc2l6ZSlcbiAgICBmb250LXNpemU6ICRzaXplXG4gICAgY29sb3I6ICR0ZXh0LXByaW1hZXlcbiAgICBmb250LWZhbWlseTogUGluZ0ZhbmdUQy1NZWRpdW0sIHNhbnMtc2VyaWZcblxuQG1peGluIGZvbnRFeHRyYVN0cm9uZygkc2l6ZSlcbiAgICBmb250LXNpemU6ICRzaXplXG4gICAgY29sb3I6ICR0ZXh0LXByaW1hZXlcbiAgICBmb250LWZhbWlseTogUGluZ0ZhbmdUQy1NZWRpdW0sIHNhbnMtc2VyaWZcblxuQG1peGluIGZvbnRTZWMoJHNpemUpXG4gICAgZm9udC1zaXplOiAkc2l6ZVxuICAgIGNvbG9yOiAkdGV4dC1zZWNvbmRhcnlcbiAgICBmb250LWZhbWlseTogUm9ib3RvXG4gICAgLy8gZm9udC13ZWlnaHQ6IGJvbGRcblxuQG1peGluIGZvbnR0ZXh0KCRzaXplKVxuICAgIGZvbnQtc2l6ZTogJHNpemVcbiAgICBjb2xvcjogIzAwMDAwMFxuICAgIGZvbnQtZmFtaWx5OiBQaW5nRmFuZ1RDLVJlZ3VsYXIsIHNhbnMtc2VyaWYiLCIkY29sb3ItcHJpbWFyeTogI0FBMDYwMVxuJHRleHQtcHJpbWFleTogIzY1MDMwMCAgICAiXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContantUsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-contant-us',
          templateUrl: './contant-us.component.html',
          styleUrls: ['./contant-us.component.sass']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/crossover/crossover.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/crossover/crossover.component.ts ***!
    \**************************************************/

  /*! exports provided: CrossoverComponent */

  /***/
  function srcAppCrossoverCrossoverComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CrossoverComponent", function () {
      return CrossoverComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CrossoverComponent = /*#__PURE__*/function () {
      function CrossoverComponent() {
        _classCallCheck(this, CrossoverComponent);
      }

      _createClass(CrossoverComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CrossoverComponent;
    }();

    CrossoverComponent.ɵfac = function CrossoverComponent_Factory(t) {
      return new (t || CrossoverComponent)();
    };

    CrossoverComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CrossoverComponent,
      selectors: [["app-crossover"]],
      decls: 71,
      vars: 0,
      consts: [[1, "crossover"], [1, "container"], [1, "crossover-title"], [1, "crossover-row"], [1, "col-4", "crossover-list"], ["src", "assets/img/zac-wolff.png", "alt", ""], [1, "col-8--right", "crossover-list"], ["src", "assets/img/61.png", "alt", ""], [1, "crossover-item"], ["src", "assets/img/24.png", "alt", ""], [1, "crossover-pic"], ["src", "assets/img/34.png", "alt", ""], [1, "crossover-more"], ["src", "assets/img/5.png", "alt", ""], [1, "more-text"], ["src", "assets/img/ic_arrow_forward_24px.svg", "alt", ""], [1, "crossover-mid"], ["src", "assets/img/14.png", "alt", ""], ["src", "assets/img/39.png", "alt", ""], [1, "recommed"], [1, "content"], [1, "recommed-title"], [1, "recommed-list"], [1, "card"], ["src", "assets/img/18.png", "alt", ""], [1, "card-content"], [1, "card-title"], [1, "card-text"], [1, "card-footer"], ["src", "assets/img/25.png", "alt", ""], ["src", "assets/img/36.png", "alt", ""], ["src", "assets/img/45.png", "alt", ""]],
      template: function CrossoverComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u806F\u540D\u8A2D\u8A08\u93E1\u6846");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "MORE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Double A+");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "YOUTH");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " \u9867\u5BA2\u63A8\u85A6 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "ul", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h3", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Jessy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "This is a wider card with supporting text below as a natural lead-in to additional content.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Last updated 3 mins ago");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "img", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h3", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Karen");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "This is a wider card with supporting text below as a natural lead-in to additional content.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Last updated 3 mins ago");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "li", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "img", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "h3", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Chelsea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "This is a wider card with supporting text below as a natural lead-in to additional content.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Last updated 3 mins ago");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "li", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "img", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "h3", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Jane");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "p", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "This is a wider card with supporting text below as a natural lead-in to additional content.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Last updated 3 mins ago");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".container[_ngcontent-%COMP%] {\n  max-width: 100%;\n  background: url(/./assets/img/nic-visuals.png);\n  background-repeat: no-repeat;\n  padding: 64px;\n  position: relative;\n}\n\n.crossover-title[_ngcontent-%COMP%] {\n  font-size: 48px;\n  color: #650300;\n  font-family: PingFangTC-Semibold, sans-serif;\n  color: #ffffff;\n  text-align: center;\n  margin-bottom: 60px;\n}\n\n.crossover-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.crossover-row[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-left: 0;\n  max-width: 100%;\n  height: auto;\n}\n\n.col-8--right[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n\n@media (max-width: 768px) {\n  .col-8--right[_ngcontent-%COMP%] {\n    margin-left: 3px;\n  }\n}\n\n.crossover-item[_ngcontent-%COMP%] {\n  margin-top: 6px;\n  position: relative;\n}\n\n@media (max-width: 768px) {\n  .crossover-item[_ngcontent-%COMP%] {\n    margin-top: 0px;\n  }\n}\n\n.crossover-pic[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n\n@media (max-width: 768px) {\n  .crossover-pic[_ngcontent-%COMP%] {\n    margin-left: 3px;\n    z-index: 2;\n  }\n}\n\n.crossover-more[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  position: absolute;\n  right: 78px;\n  bottom: 0;\n}\n\n@media (max-width: 768px) {\n  .crossover-more[_ngcontent-%COMP%] {\n    margin-top: 1px;\n    margin-left: 3px;\n    right: 56px;\n    width: 130px;\n    z-index: 0;\n  }\n}\n\n.more-text[_ngcontent-%COMP%] {\n  background-color: #fff;\n  display: flex;\n  position: absolute;\n  right: 0;\n  bottom: 32px;\n  z-index: 3;\n  padding: 16px 22px;\n}\n\n@media (max-width: 768px) {\n  .more-text[_ngcontent-%COMP%] {\n    padding: 8px 10px;\n    bottom: 12px;\n  }\n}\n\n.more-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 72px;\n  color: #AA0601;\n  font-family: Roboto;\n  font-weight: bold;\n  color: #AA0601;\n  margin-right: 16px;\n}\n\n@media (max-width: 768px) {\n  .more-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 40px;\n    color: #AA0601;\n    font-family: Roboto;\n  }\n}\n\n.more-text[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  height: auto;\n}\n\n@media (max-width: 768px) {\n  .more-text[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 28px;\n  }\n}\n\n.crossover-mid[_ngcontent-%COMP%] {\n  margin-top: 60px;\n  position: relative;\n  margin-right: 30px;\n  margin-top: 40px;\n  margin-top-margin-right: 24px;\n}\n\n.crossover-mid[_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n}\n\n.crossover-mid[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 72px;\n  color: #AA0601;\n  font-family: Roboto;\n  font-weight: bold;\n  position: absolute;\n  top: 46%;\n  left: 25%;\n  z-index: 3;\n}\n\n@media (max-width: 768px) {\n  .crossover-mid[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 40px;\n    color: #AA0601;\n    font-family: Roboto;\n  }\n}\n\n.crossover-mid[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  background-color: #fff;\n  display: block;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  opacity: 0.5;\n}\n\n.content[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 1140px;\n  margin-right: auto;\n  margin-left: auto;\n  margin-top: 144px;\n}\n\n@media (max-width: 768px) {\n  .content[_ngcontent-%COMP%] {\n    margin-top: 40px;\n  }\n}\n\n.recommed-title[_ngcontent-%COMP%] {\n  font-size: 48px;\n  color: #650300;\n  font-family: PingFangTC-Semibold, sans-serif;\n  color: #ffffff;\n  text-align: center;\n  margin-bottom: 60px;\n}\n\n@media (max-width: 768px) {\n  .recommed-title[_ngcontent-%COMP%] {\n    margin-bottom: 32px;\n  }\n}\n\n.recommed-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.card[_ngcontent-%COMP%] {\n  width: 24.5%;\n  background-color: #fff;\n}\n\n@media (max-width: 768px) {\n  .card[_ngcontent-%COMP%] {\n    width: 48%;\n    max-width: 100%;\n    margin-bottom: 24px;\n  }\n}\n\n.card-content[_ngcontent-%COMP%] {\n  max-width: 100%;\n  line-height: 1.5;\n  border: 1px solid #DEE2E6;\n  padding: 16px;\n  margin-top: -2px;\n}\n\n.card-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #AA0601;\n  font-family: Roboto;\n  color: #212529;\n  font-weight: bold;\n}\n\n.card-text[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #AA0601;\n  font-family: Roboto;\n  color: #212529;\n  margin-top: 16px;\n}\n\n.card-footer[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #AA0601;\n  font-family: Roboto;\n  color: #707070;\n  margin-top: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saWJlcmVzX2xvL3Byb2plY3QvaHctZ2xhc3Nlcy9zcmMvYXBwL2Nyb3Nzb3Zlci9jcm9zc292ZXIuY29tcG9uZW50LnNhc3MiLCJzcmMvYXBwL2Nyb3Nzb3Zlci9jcm9zc292ZXIuY29tcG9uZW50LnNhc3MiLCIvVXNlcnMvbGliZXJlc19sby9wcm9qZWN0L2h3LWdsYXNzZXMvc3JjL3Nhc3MvX21peGluLnNhc3MiLCIvVXNlcnMvbGliZXJlc19sby9wcm9qZWN0L2h3LWdsYXNzZXMvc3JjL3Nhc3MvX2NvbG9yLnNhc3MiLCIvVXNlcnMvbGliZXJlc19sby9wcm9qZWN0L2h3LWdsYXNzZXMvc3JjL3Nhc3MvX3ZhcmlhYmxlLnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0E7RUFDSSxlQUFBO0VBQ0EsOENBQUE7RUFDQSw0QkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ05KOztBRFFBO0VFQ0ksZUFBQTtFQUNBLGNDZlc7RURnQlgsNENBQUE7RUZEQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0hKOztBREtBO0VBQ0ksYUFBQTtFQUVBLHVCQUFBO0FDSEo7O0FES0E7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNGSjs7QURLQTtFQUNJLGdCQUFBO0FDRko7O0FDN0JJO0VGOEJKO0lBR1EsZ0JBQUE7RUNBTjtBQUNGOztBRENBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0FDRUo7O0FDdkNJO0VGbUNKO0lBSVEsZUFBQTtFQ0lOO0FBQ0Y7O0FESEE7RUFDSSxnQkFBQTtBQ01KOztBQ2hESTtFRnlDSjtJQUdRLGdCQUFBO0lBQ0EsVUFBQTtFQ1FOO0FBQ0Y7O0FEUEE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQ1VKOztBQzdESTtFRitDSjtJQU9RLGVBQUE7SUFDQSxnQkFBQTtJQUNBLFdBQUE7SUFFQSxZQUFBO0lBRUEsVUFBQTtFQ1NOO0FBQ0Y7O0FEUEE7RUFDSSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FDVUo7O0FDaEZJO0VGK0RKO0lBU1EsaUJBQUE7SUFDQSxZQUFBO0VDWU47QUFDRjs7QURWQTtFRS9DSSxlRmdEa0I7RUUvQ2xCLGNFcEJjO0VGcUJkLG1CQUFBO0VGK0NBLGlCQUFBO0VBQ0EsY0doRlk7RUhpRlosa0JBQUE7QUNlSjs7QUMvRkk7RUY0RUo7SUUvQ0ksZUZxRHNCO0lFcER0QixjRXBCYztJRnFCZCxtQkFBQTtFRHNFRjtBQUNGOztBRGxCQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0FDcUJKOztBQzNHSTtFRm9GSjtJQUlRLFdBQUE7RUN1Qk47QUFDRjs7QUR0QkE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFJQSxnQkFBQTtFQUNJLDZCQUFBO0FDc0JSOztBRDFCSTtFQUNJLGVBQUE7QUM0QlI7O0FEdkJBO0VFdkVJLGVGd0VrQjtFRXZFbEIsY0VwQmM7RUZxQmQsbUJBQUE7RUZ1RUEsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQzJCSjs7QUNySUk7RUZvR0o7SUV2RUksZUYrRXNCO0lFOUV0QixjRXBCYztJRnFCZCxtQkFBQTtFRDRHRjtBQUNGOztBRDlCQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0FDaUNKOztBRDlCQTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ2lDSjs7QUNoS0k7RUYwSEo7SUFPUSxnQkFBQTtFQ21DTjtBQUNGOztBRGxDQTtFRXJISSxlRnNIa0I7RUVySGxCLGNDZlc7RURnQlgsNENBQUE7RUZxSEEsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUN1Q0o7O0FDOUtJO0VGbUlKO0lBTVEsbUJBQUE7RUN5Q047QUFDRjs7QUR4Q0E7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUMyQ0o7O0FEdkNBO0VBQ0ksWUFBQTtFQUNBLHNCQUFBO0FDMENKOztBQy9MSTtFRm1KSjtJQUlRLFVBQUE7SUFDQSxlQUFBO0lBQ0EsbUJBQUE7RUM0Q047QUFDRjs7QUQzQ0E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQzhDSjs7QUQ1Q0E7RUVySUksZUZzSW1CO0VFckluQixjRXBCYztFRnFCZCxtQkFBQTtFRnFJQSxjQUFBO0VBQ0EsaUJBQUE7QUNpREo7O0FEL0NBO0VFMUlJLGVGMkltQjtFRTFJbkIsY0VwQmM7RUZxQmQsbUJBQUE7RUYwSUEsY0FBQTtFQUNBLGdCQUFBO0FDb0RKOztBRGxEQTtFRS9JSSxlRmdKbUI7RUUvSW5CLGNFcEJjO0VGcUJkLG1CQUFBO0VGK0lBLGNBQUE7RUFDQSxnQkFBQTtBQ3VESiIsImZpbGUiOiJzcmMvYXBwL2Nyb3Nzb3Zlci9jcm9zc292ZXIuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICd2YXJpYWJsZS5zYXNzJ1xuQGltcG9ydCAnY29sb3Iuc2FzcydcbkBpbXBvcnQgJ21peGluLnNhc3MnXG5cbi5jcm9zc292ZXJcbiAgICAvLyBwYWRkaW5nLWJvdHRvbTogODBweCAgICBcblxuLmNvbnRhaW5lclxuICAgIG1heC13aWR0aDogMTAwJVxuICAgIGJhY2tncm91bmQ6IHVybCgvLi9hc3NldHMvaW1nL25pYy12aXN1YWxzLnBuZykgXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdFxuICAgIHBhZGRpbmc6IDY0cHggICAgXG4gICAgcG9zaXRpb246IHJlbGF0aXZlXG5cbi5jcm9zc292ZXItdGl0bGVcbiAgICBAaW5jbHVkZSBmb250TWlkKCA0OHB4ICkgICAgXG4gICAgY29sb3I6ICNmZmZmZmZcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXJcbiAgICBtYXJnaW4tYm90dG9tOiA2MHB4XG5cbi5jcm9zc292ZXItcm93XG4gICAgZGlzcGxheTogZmxleFxuICAgIC8vIGZsZXgtd3JhcDogd3JhcCAgICBcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlclxuXG4uY3Jvc3NvdmVyLXJvdyBpbWcgICAgXG4gICAgbWFyZ2luLWxlZnQ6IDBcbiAgICBtYXgtd2lkdGg6IDEwMCVcbiAgICBoZWlnaHQ6IGF1dG9cbiAgICBcblxuLmNvbC04LS1yaWdodFxuICAgIG1hcmdpbi1sZWZ0OiA4cHhcbiAgICBAaW5jbHVkZSBwYWQgICAgXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzcHhcblxuLmNyb3Nzb3Zlci1pdGVtXG4gICAgbWFyZ2luLXRvcDogNnB4XG4gICAgcG9zaXRpb246IHJlbGF0aXZlXG4gICAgQGluY2x1ZGUgcGFkICAgIFxuICAgICAgICBtYXJnaW4tdG9wOiAwcHhcblxuLmNyb3Nzb3Zlci1waWNcbiAgICBtYXJnaW4tbGVmdDogOHB4XG4gICAgQGluY2x1ZGUgcGFkICAgIFxuICAgICAgICBtYXJnaW4tbGVmdDogM3B4XG4gICAgICAgIHotaW5kZXg6IDJcblxuLmNyb3Nzb3Zlci1tb3JlXG4gICAgbWFyZ2luLXRvcDogOHB4XG4gICAgcG9zaXRpb246IGFic29sdXRlXG4gICAgcmlnaHQ6IDc4cHhcbiAgICBib3R0b206IDBcbiAgICAvLyBtYXgtd2lkdGg6IDEwMCVcbiAgICBAaW5jbHVkZSBwYWQgICAgXG4gICAgICAgIG1hcmdpbi10b3A6IDFweFxuICAgICAgICBtYXJnaW4tbGVmdDogM3B4XG4gICAgICAgIHJpZ2h0OiA1NnB4XG4gICAgICAgIC8vIGJvdHRvbTogMFxuICAgICAgICB3aWR0aDogMTMwcHhcbiAgICAgICAgLy8gaGVpZ2h0OiAyN3B4XG4gICAgICAgIHotaW5kZXg6IDBcblxuXG4ubW9yZS10ZXh0XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZlxuICAgIGRpc3BsYXk6IGZsZXhcbiAgICBwb3NpdGlvbjogYWJzb2x1dGVcbiAgICByaWdodDogMFxuICAgIGJvdHRvbTogMzJweFxuICAgIHotaW5kZXg6IDNcbiAgICBwYWRkaW5nOiAxNnB4IDIycHhcbiAgICBAaW5jbHVkZSBwYWQgXG4gICAgICAgIHBhZGRpbmc6IDhweCAxMHB4XG4gICAgICAgIGJvdHRvbTogMTJweFxuICAgICAgICBcblxuLm1vcmUtdGV4dCBwXG4gICAgQGluY2x1ZGUgZm9udFNlYyggNzJweCApXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRcbiAgICBjb2xvcjogJGNvbG9yLXByaW1hcnkgICAgXG4gICAgbWFyZ2luLXJpZ2h0OiAxNnB4XG4gICAgQGluY2x1ZGUgcGFkXG4gICAgICAgIEBpbmNsdWRlIGZvbnRTZWMoIDQwcHggKVxuXG4ubW9yZS10ZXh0IGltZ1xuICAgIG1heC13aWR0aDogMTAwJVxuICAgIGhlaWdodDogYXV0byAgXG4gICAgQGluY2x1ZGUgcGFkXG4gICAgICAgIHdpZHRoOiAyOHB4XG5cbi5jcm9zc292ZXItbWlkXG4gICAgbWFyZ2luLXRvcDogNjBweFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxuICAgIG1hcmdpbi1yaWdodDogMzBweFxuICAgICY6bGFzdC1jaGlsZFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDBcbiAgICBAaW5jbHVkZSBwYWRcbiAgICBtYXJnaW4tdG9wOiA0MHB4XG4gICAgICAgIG1hcmdpbi1yaWdodDogMjRweFxuICAgIFxuLmNyb3Nzb3Zlci1taWQgc3BhblxuICAgIEBpbmNsdWRlIGZvbnRTZWMoIDcycHggKSBcbiAgICBmb250LXdlaWdodDogYm9sZFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZVxuICAgIHRvcDogNDYlXG4gICAgbGVmdDogMjUlXG4gICAgei1pbmRleDogM1xuICAgIEBpbmNsdWRlIHBhZFxuICAgICAgICBAaW5jbHVkZSBmb250U2VjKCA0MHB4IClcblxuLmNyb3Nzb3Zlci1taWQ6OmFmdGVyXG4gICAgY29udGVudDogXCJcIlxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZVxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZcbiAgICBkaXNwbGF5OiBibG9ja1xuICAgIGxlZnQ6IDBcbiAgICByaWdodDogMFxuICAgIHRvcDogMFxuICAgIGJvdHRvbTogMFxuICAgIG9wYWNpdHk6IDAuNVxuXG4vLyDpoaflrqLmjqjolqYgICAgXG4uY29udGVudFxuICAgIHdpZHRoOiAxMDAlXG4gICAgbWF4LXdpZHRoOiAxMTQwcHhcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG9cbiAgICBtYXJnaW4tbGVmdDogYXV0b1xuICAgIG1hcmdpbi10b3A6IDE0NHB4XG4gICAgQGluY2x1ZGUgcGFkXG4gICAgICAgIG1hcmdpbi10b3A6IDQwcHhcblxuLnJlY29tbWVkLXRpdGxlXG4gICAgQGluY2x1ZGUgZm9udE1pZCggNDhweCApICAgIFxuICAgIGNvbG9yOiAjZmZmZmZmXG4gICAgdGV4dC1hbGlnbjogY2VudGVyXG4gICAgbWFyZ2luLWJvdHRvbTogNjBweCAgIFxuICAgIEBpbmNsdWRlIHBhZFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMnB4ICBcblxuLnJlY29tbWVkLWxpc3RcbiAgICBkaXNwbGF5OiBmbGV4XG4gICAgZmxleC13cmFwOiB3cmFwXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlblxuXG5cblxuLmNhcmRcbiAgICB3aWR0aDogMjQuNSVcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmXG4gICAgQGluY2x1ZGUgcGFkXG4gICAgICAgIHdpZHRoOiA0OCVcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI0cHhcblxuLmNhcmQtY29udGVudFxuICAgIG1heC13aWR0aDogMTAwJVxuICAgIGxpbmUtaGVpZ2h0OiAxLjUgXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0RFRTJFNlxuICAgIHBhZGRpbmc6IDE2cHhcbiAgICBtYXJnaW4tdG9wOiAtMnB4IFxuXG4uY2FyZC10aXRsZVxuICAgIEBpbmNsdWRlIGZvbnRTZWMgKCAxNnB4ICkgICAgXG4gICAgY29sb3I6ICMyMTI1MjlcbiAgICBmb250LXdlaWdodDogYm9sZFxuXG4uY2FyZC10ZXh0XG4gICAgQGluY2x1ZGUgZm9udFNlYyAoIDE2cHggKVxuICAgIGNvbG9yOiAjMjEyNTI5XG4gICAgbWFyZ2luLXRvcDogMTZweFxuXG4uY2FyZC1mb290ZXJcbiAgICBAaW5jbHVkZSBmb250U2VjICggMTZweCApXG4gICAgY29sb3I6ICM3MDcwNzAgICAgICAgIFxuICAgIG1hcmdpbi10b3A6IDE2cHgiLCIuY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiB1cmwoLy4vYXNzZXRzL2ltZy9uaWMtdmlzdWFscy5wbmcpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBwYWRkaW5nOiA2NHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jcm9zc292ZXItdGl0bGUge1xuICBmb250LXNpemU6IDQ4cHg7XG4gIGNvbG9yOiAjNjUwMzAwO1xuICBmb250LWZhbWlseTogUGluZ0ZhbmdUQy1TZW1pYm9sZCwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogNjBweDtcbn1cblxuLmNyb3Nzb3Zlci1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNyb3Nzb3Zlci1yb3cgaW1nIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4uY29sLTgtLXJpZ2h0IHtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuY29sLTgtLXJpZ2h0IHtcbiAgICBtYXJnaW4tbGVmdDogM3B4O1xuICB9XG59XG5cbi5jcm9zc292ZXItaXRlbSB7XG4gIG1hcmdpbi10b3A6IDZweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jcm9zc292ZXItaXRlbSB7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICB9XG59XG5cbi5jcm9zc292ZXItcGljIHtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuY3Jvc3NvdmVyLXBpYyB7XG4gICAgbWFyZ2luLWxlZnQ6IDNweDtcbiAgICB6LWluZGV4OiAyO1xuICB9XG59XG5cbi5jcm9zc292ZXItbW9yZSB7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogNzhweDtcbiAgYm90dG9tOiAwO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jcm9zc292ZXItbW9yZSB7XG4gICAgbWFyZ2luLXRvcDogMXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAzcHg7XG4gICAgcmlnaHQ6IDU2cHg7XG4gICAgd2lkdGg6IDEzMHB4O1xuICAgIHotaW5kZXg6IDA7XG4gIH1cbn1cblxuLm1vcmUtdGV4dCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMzJweDtcbiAgei1pbmRleDogMztcbiAgcGFkZGluZzogMTZweCAyMnB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5tb3JlLXRleHQge1xuICAgIHBhZGRpbmc6IDhweCAxMHB4O1xuICAgIGJvdHRvbTogMTJweDtcbiAgfVxufVxuXG4ubW9yZS10ZXh0IHAge1xuICBmb250LXNpemU6IDcycHg7XG4gIGNvbG9yOiAjQUEwNjAxO1xuICBmb250LWZhbWlseTogUm9ib3RvO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICNBQTA2MDE7XG4gIG1hcmdpbi1yaWdodDogMTZweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAubW9yZS10ZXh0IHAge1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICBjb2xvcjogI0FBMDYwMTtcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xuICB9XG59XG5cbi5tb3JlLXRleHQgaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLm1vcmUtdGV4dCBpbWcge1xuICAgIHdpZHRoOiAyOHB4O1xuICB9XG59XG5cbi5jcm9zc292ZXItbWlkIHtcbiAgbWFyZ2luLXRvcDogNjBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG4gIG1hcmdpbi10b3AtbWFyZ2luLXJpZ2h0OiAyNHB4O1xufVxuLmNyb3Nzb3Zlci1taWQ6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cbi5jcm9zc292ZXItbWlkIHNwYW4ge1xuICBmb250LXNpemU6IDcycHg7XG4gIGNvbG9yOiAjQUEwNjAxO1xuICBmb250LWZhbWlseTogUm9ib3RvO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDQ2JTtcbiAgbGVmdDogMjUlO1xuICB6LWluZGV4OiAzO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jcm9zc292ZXItbWlkIHNwYW4ge1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICBjb2xvcjogI0FBMDYwMTtcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xuICB9XG59XG5cbi5jcm9zc292ZXItbWlkOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgb3BhY2l0eTogMC41O1xufVxuXG4uY29udGVudCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDExNDBweDtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXRvcDogMTQ0cHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmNvbnRlbnQge1xuICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gIH1cbn1cblxuLnJlY29tbWVkLXRpdGxlIHtcbiAgZm9udC1zaXplOiA0OHB4O1xuICBjb2xvcjogIzY1MDMwMDtcbiAgZm9udC1mYW1pbHk6IFBpbmdGYW5nVEMtU2VtaWJvbGQsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDYwcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnJlY29tbWVkLXRpdGxlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAzMnB4O1xuICB9XG59XG5cbi5yZWNvbW1lZC1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5jYXJkIHtcbiAgd2lkdGg6IDI0LjUlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jYXJkIHtcbiAgICB3aWR0aDogNDglO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICB9XG59XG5cbi5jYXJkLWNvbnRlbnQge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNERUUyRTY7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIG1hcmdpbi10b3A6IC0ycHg7XG59XG5cbi5jYXJkLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogI0FBMDYwMTtcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgY29sb3I6ICMyMTI1Mjk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uY2FyZC10ZXh0IHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogI0FBMDYwMTtcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgY29sb3I6ICMyMTI1Mjk7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG59XG5cbi5jYXJkLWZvb3RlciB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICNBQTA2MDE7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gIGNvbG9yOiAjNzA3MDcwO1xuICBtYXJnaW4tdG9wOiAxNnB4O1xufSIsIkBtaXhpbiBwYWRcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpXG4gICAgICAgIEBjb250ZW50XG5cbkBtaXhpbiBtb2JpbGVcbiAgICBAbWVkaWEgKG1heC13aWR0aDogMzc1cHgpXG4gICAgICAgIEBjb250ZW50ICAgICAgICBcbiAgICBcbiAgICBcbkBtaXhpbiBmb250TGFyZ2UoJHNpemUpICAgIFxuICAgIGZvbnQtc2l6ZTogJHNpemVcbiAgICBjb2xvcjogJHRleHQtcHJpbWFleVxuICAgIGZvbnQtZmFtaWx5OiBQaW5nRmFuZ1RDLU1lZGl1bSwgc2Fucy1zZXJpZlxuXG5AbWl4aW4gZm9udE1pZCgkc2l6ZSlcbiAgICBmb250LXNpemU6ICRzaXplXG4gICAgY29sb3I6ICR0ZXh0LXByaW1hZXlcbiAgICBmb250LWZhbWlseTogUGluZ0ZhbmdUQy1TZW1pYm9sZCwgc2Fucy1zZXJpZlxuXG5AbWl4aW4gZm9udFNtYWxsKCRzaXplKVxuICAgIGZvbnQtc2l6ZTogJHNpemVcbiAgICBjb2xvcjogJHRleHQtcHJpbWFleVxuICAgIGZvbnQtZmFtaWx5OiBQaW5nRmFuZ1RDLU1lZGl1bSwgc2Fucy1zZXJpZlxuXG5AbWl4aW4gZm9udEV4dHJhU3Ryb25nKCRzaXplKVxuICAgIGZvbnQtc2l6ZTogJHNpemVcbiAgICBjb2xvcjogJHRleHQtcHJpbWFleVxuICAgIGZvbnQtZmFtaWx5OiBQaW5nRmFuZ1RDLU1lZGl1bSwgc2Fucy1zZXJpZlxuXG5AbWl4aW4gZm9udFNlYygkc2l6ZSlcbiAgICBmb250LXNpemU6ICRzaXplXG4gICAgY29sb3I6ICR0ZXh0LXNlY29uZGFyeVxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG9cbiAgICAvLyBmb250LXdlaWdodDogYm9sZFxuXG5AbWl4aW4gZm9udHRleHQoJHNpemUpXG4gICAgZm9udC1zaXplOiAkc2l6ZVxuICAgIGNvbG9yOiAjMDAwMDAwXG4gICAgZm9udC1mYW1pbHk6IFBpbmdGYW5nVEMtUmVndWxhciwgc2Fucy1zZXJpZiIsIiRjb2xvci1wcmltYXJ5OiAjQUEwNjAxXG4kdGV4dC1wcmltYWV5OiAjNjUwMzAwICAgICIsIiRiZy1wcmltYXJ5OiAjQUEwNjAxXG4kYmctc2Vjb25kYXJ5IDogI0ZCRjJGMVxuJGJnLXRoaXJkbHkgOiAjRjJGMkYyXG4kYmctZm91cnRobHkgOiAjZGNkY2RjXG4kYmctd2hpdGUgOiAjZmZmXG4kYmctYmxhY2sgOiAjMDAwXG4kYmctaG92ZXIgOiAjOGEwNzAyXG5cblxuXG4kdGV4dC1wcmltYWV5OiAjNjUwMzAwICAgIFxuJHRleHQtc2Vjb25kYXJ5IDogI0FBMDYwMVxuJHRleHQtdGhpcmRseTogIzIxMjUyOVxuJHRleHQtZm91cnRobHk6ICM3MDcwNzBcbiR0ZXh0LWJsb2ctdHh0OiAjNTU1NTU1XG4kdGV4dC1ibG9nLWRhdGE6ICM2YzZjNmMiXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CrossoverComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-crossover',
          templateUrl: './crossover.component.html',
          styleUrls: ['./crossover.component.sass']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/footer/footer.component.ts":
  /*!********************************************!*\
    !*** ./src/app/footer/footer.component.ts ***!
    \********************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 41,
      vars: 0,
      consts: [[1, "footer"], [1, "container"], [1, "footer-box"], [1, "footer-box--left"], [1, "footer-list"], [1, "phone"], ["src", "assets/img/ic_phone_48px.svg", "alt", ""], [1, "mail"], ["src", "assets/img/ic_mail_outline_24px.svg", "alt", ""], [1, "footer-box--right"], [1, "footer-icon"], [1, "icon-list"], ["src", "assets/img/ic_social_fb.svg", "alt", ""], ["src", "assets/img/ic_social_ig.svg", "alt", ""], ["src", "assets/img/ic_social_line.svg", "alt", ""], [1, "fotter-bottom"], ["src", "assets/img/logo-new_1-1.png", "alt", "", 1, "footer-logo"], [1, "copyight"], [1, "bottom-text"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u9996\u9801");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u7CFB\u5217\u93E1\u6846");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u9580\u5E02\u64DA\u9EDE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u90E8\u843D\u683C");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u5E38\u898B\u554F\u984C");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "0800000000");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "glasses@business.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ul", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Copyright \xA9 2020 Glasses.All rights reserved.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "\u96B1\u79C1\u6B0A\u653F\u7B56");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "\u670D\u52D9\u689D\u6B3E");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".footer[_ngcontent-%COMP%] {\n  background: #AA0601;\n  color: #ffffff;\n}\n\n.container[_ngcontent-%COMP%] {\n  max-width: 1140px;\n  margin-right: auto;\n  margin-left: auto;\n  padding: 48px;\n}\n\n.footer-box[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.footer-box--left[_ngcontent-%COMP%] {\n  width: calc( 100% / 12 * 9 );\n}\n\n.footer-box--right[_ngcontent-%COMP%] {\n  width: calc( 100% / 12 * 3 );\n}\n\n.footer-list[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.footer-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-right: 48px;\n}\n\n@media (max-width: 768px) {\n  .footer-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    margin-right: 40px;\n  }\n}\n\n.phone[_ngcontent-%COMP%] {\n  display: flex;\n  margin-top: 32px;\n  align-items: center;\n}\n\n@media (max-width: 768px) {\n  .phone[_ngcontent-%COMP%] {\n    margin-top: 12px;\n    width: 32px;\n  }\n}\n\n.phone[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 36px;\n  margin-left: 12px;\n}\n\n@media (max-width: 768px) {\n  .phone[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}\n\n.mail[_ngcontent-%COMP%] {\n  display: flex;\n  margin-top: 32px;\n  align-items: center;\n}\n\n@media (max-width: 768px) {\n  .mail[_ngcontent-%COMP%] {\n    margin-top: 12px;\n    width: 32px;\n  }\n}\n\n.mail[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 36px;\n  margin-left: 12px;\n}\n\n@media (max-width: 768px) {\n  .mail[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}\n\n.icon-list[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.icon-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-left: 32px;\n}\n\n@media (max-width: 768px) {\n  .icon-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    margin-left: 24px;\n  }\n}\n\n.fotter-bottom[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  border-top: 1px solid #ffffff;\n  margin-top: 24px;\n  padding-top: 24px;\n  align-items: center;\n}\n\n@media (max-width: 768px) {\n  .footer-logo[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n.copyight[_ngcontent-%COMP%] {\n  margin-left: 38px;\n}\n\n@media (max-width: 768px) {\n  .copyight[_ngcontent-%COMP%] {\n    font-size: 16px;\n    margin-left: 0;\n  }\n}\n\n.bottom-text[_ngcontent-%COMP%] {\n  display: flex;\n  margin-left: auto;\n  justify-content: space-between;\n  font-size: 14px;\n}\n\n.bottom-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-left: 38px;\n}\n\n@media (max-width: 768px) {\n  .bottom-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin-left: 24px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saWJlcmVzX2xvL3Byb2plY3QvaHctZ2xhc3Nlcy9zcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNhc3MiLCIvVXNlcnMvbGliZXJlc19sby9wcm9qZWN0L2h3LWdsYXNzZXMvc3JjL3Nhc3MvX2NvbG9yLnNhc3MiLCJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNhc3MiLCIvVXNlcnMvbGliZXJlc19sby9wcm9qZWN0L2h3LWdsYXNzZXMvc3JjL3Nhc3MvX21peGluLnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDSSxtQkNMWTtFRE1aLGNBQUE7QUVISjs7QUZLQTtFQUVJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7QUVISjs7QUZLQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0FFRko7O0FGSUE7RUFDSSw0QkFBQTtBRURKOztBRkdBO0VBQ0ksNEJBQUE7QUVBSjs7QUZFQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBRUNKOztBRkNBO0VBQ0ksa0JBQUE7QUVFSjs7QUMvQkk7RUg0Qko7SUFHUSxrQkFBQTtFRUlOO0FBQ0Y7O0FGSEE7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBRU1KOztBQzFDSTtFSGlDSjtJQUtRLGdCQUFBO0lBQ0EsV0FBQTtFRVFOO0FBQ0Y7O0FGUEk7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUVTUjs7QUNwREk7RUh5Q0E7SUFJUSxlQUFBO0VFV1Y7QUFDRjs7QUZWQTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FFYUo7O0FDL0RJO0VIK0NKO0lBS1EsZ0JBQUE7SUFDQSxXQUFBO0VFZU47QUFDRjs7QUZmSTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBRWlCUjs7QUN6RUk7RUhzREE7SUFJUSxlQUFBO0VFbUJWO0FBQ0Y7O0FGbEJBO0VBQ0ksYUFBQTtFQUNBLHlCQUFBO0FFcUJKOztBRm5CQTtFQUNJLGlCQUFBO0FFc0JKOztBQ3ZGSTtFSGdFSjtJQUdRLGlCQUFBO0VFd0JOO0FBQ0Y7O0FGdkJBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBRTBCSjs7QUNyR0k7RUg2RUo7SUFFUSxhQUFBO0VFMkJOO0FBQ0Y7O0FGMUJBO0VBQ0ksaUJBQUE7QUU2Qko7O0FDL0dJO0VIaUZKO0lBR1EsZUFBQTtJQUNBLGNBQUE7RUUrQk47QUFDRjs7QUY5QkE7RUFDSSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7QUVpQ0o7O0FGaENJO0VBQ0ksaUJBQUE7QUVrQ1I7O0FDL0hJO0VINEZBO0lBR1EsaUJBQUE7RUVvQ1Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICd2YXJpYWJsZS5zYXNzJ1xuQGltcG9ydCAnY29sb3Iuc2FzcydcbkBpbXBvcnQgJ21peGluLnNhc3MnXG5cbi5mb290ZXJcbiAgICBiYWNrZ3JvdW5kOiAkY29sb3ItcHJpbWFyeVxuICAgIGNvbG9yOiAjZmZmZmZmXG5cbi5jb250YWluZXJcbiAgICAvLyB3aWR0aDogMTAwJVxuICAgIG1heC13aWR0aDogMTE0MHB4XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG9cbiAgICBwYWRkaW5nOiA0OHB4XG5cbi5mb290ZXItYm94XG4gICAgZGlzcGxheTogZmxleFxuICAgIGZsZXgtd3JhcDogd3JhcFxuXG4uZm9vdGVyLWJveC0tbGVmdCBcbiAgICB3aWR0aDogY2FsYyggMTAwJSAvIDEyICogOSApXG5cbi5mb290ZXItYm94LS1yaWdodFxuICAgIHdpZHRoOiBjYWxjKCAxMDAlIC8gMTIgKiAzIClcblxuLmZvb3Rlci1saXN0XG4gICAgZGlzcGxheTogZmxleFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXJcblxuLmZvb3Rlci1saXN0IGxpXG4gICAgbWFyZ2luLXJpZ2h0OiA0OHB4ICAgXG4gICAgQGluY2x1ZGUgcGFkXG4gICAgICAgIG1hcmdpbi1yaWdodDogNDBweFxuXG4ucGhvbmVcbiAgICBkaXNwbGF5OiBmbGV4XG4gICAgbWFyZ2luLXRvcDogMzJweFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXJcbiAgICBAaW5jbHVkZSBwYWRcbiAgICAgICAgbWFyZ2luLXRvcDogMTJweFxuICAgICAgICB3aWR0aDogMzJweFxuXG4gICAgJiBwXG4gICAgICAgIGZvbnQtc2l6ZTogMzZweFxuICAgICAgICBtYXJnaW4tbGVmdDogMTJweFxuICAgICAgICBAaW5jbHVkZSBwYWRcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweFxuXG4ubWFpbFxuICAgIGRpc3BsYXk6IGZsZXhcbiAgICBtYXJnaW4tdG9wOiAzMnB4XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlclxuICAgIEBpbmNsdWRlIHBhZFxuICAgICAgICBtYXJnaW4tdG9wOiAxMnB4XG4gICAgICAgIHdpZHRoOiAzMnB4XG4gICAgJiBwXG4gICAgICAgIGZvbnQtc2l6ZTogMzZweFxuICAgICAgICBtYXJnaW4tbGVmdDogMTJweCAgXG4gICAgICAgIEBpbmNsdWRlIHBhZFxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4ICAgICAgXG5cbi5pY29uLWxpc3RcbiAgICBkaXNwbGF5OiBmbGV4XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZCAgICBcblxuLmljb24tbGlzdCBsaVxuICAgIG1hcmdpbi1sZWZ0OiAzMnB4ICAgIFxuICAgIEBpbmNsdWRlIHBhZFxuICAgICAgICBtYXJnaW4tbGVmdDogMjRweFxuXG4uZm90dGVyLWJvdHRvbVxuICAgIHdpZHRoOiAxMDAlXG4gICAgZGlzcGxheTogZmxleCAgICBcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2ZmZmZmZiBcbiAgICBtYXJnaW4tdG9wOiAyNHB4XG4gICAgcGFkZGluZy10b3A6IDI0cHhcbiAgICBhbGlnbi1pdGVtczogY2VudGVyXG4gICAgXG4uZm9vdGVyLWxvZ28gICAgXG4gICAgQGluY2x1ZGUgcGFkXG4gICAgICAgIGRpc3BsYXk6IG5vbmVcblxuLmNvcHlpZ2h0XG4gICAgbWFyZ2luLWxlZnQ6IDM4cHhcbiAgICBAaW5jbHVkZSBwYWRcbiAgICAgICAgZm9udC1zaXplOiAxNnB4XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwXG5cbi5ib3R0b20tdGV4dFxuICAgIGRpc3BsYXk6IGZsZXhcbiAgICBtYXJnaW4tbGVmdDogYXV0b1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlblxuICAgIGZvbnQtc2l6ZTogMTRweFxuICAgICYgcFxuICAgICAgICBtYXJnaW4tbGVmdDogMzhweFxuICAgICAgICBAaW5jbHVkZSBwYWRcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyNHB4IiwiJGNvbG9yLXByaW1hcnk6ICNBQTA2MDFcbiR0ZXh0LXByaW1hZXk6ICM2NTAzMDAgICAgIiwiLmZvb3RlciB7XG4gIGJhY2tncm91bmQ6ICNBQTA2MDE7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiAxMTQwcHg7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIHBhZGRpbmc6IDQ4cHg7XG59XG5cbi5mb290ZXItYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4uZm9vdGVyLWJveC0tbGVmdCB7XG4gIHdpZHRoOiBjYWxjKCAxMDAlIC8gMTIgKiA5ICk7XG59XG5cbi5mb290ZXItYm94LS1yaWdodCB7XG4gIHdpZHRoOiBjYWxjKCAxMDAlIC8gMTIgKiAzICk7XG59XG5cbi5mb290ZXItbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5mb290ZXItbGlzdCBsaSB7XG4gIG1hcmdpbi1yaWdodDogNDhweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuZm9vdGVyLWxpc3QgbGkge1xuICAgIG1hcmdpbi1yaWdodDogNDBweDtcbiAgfVxufVxuXG4ucGhvbmUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tdG9wOiAzMnB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5waG9uZSB7XG4gICAgbWFyZ2luLXRvcDogMTJweDtcbiAgICB3aWR0aDogMzJweDtcbiAgfVxufVxuLnBob25lIHAge1xuICBmb250LXNpemU6IDM2cHg7XG4gIG1hcmdpbi1sZWZ0OiAxMnB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5waG9uZSBwIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cbn1cblxuLm1haWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tdG9wOiAzMnB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5tYWlsIHtcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xuICAgIHdpZHRoOiAzMnB4O1xuICB9XG59XG4ubWFpbCBwIHtcbiAgZm9udC1zaXplOiAzNnB4O1xuICBtYXJnaW4tbGVmdDogMTJweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAubWFpbCBwIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cbn1cblxuLmljb24tbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbi5pY29uLWxpc3QgbGkge1xuICBtYXJnaW4tbGVmdDogMzJweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuaWNvbi1saXN0IGxpIHtcbiAgICBtYXJnaW4tbGVmdDogMjRweDtcbiAgfVxufVxuXG4uZm90dGVyLWJvdHRvbSB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2ZmZmZmZjtcbiAgbWFyZ2luLXRvcDogMjRweDtcbiAgcGFkZGluZy10b3A6IDI0cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuZm9vdGVyLWxvZ28ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuLmNvcHlpZ2h0IHtcbiAgbWFyZ2luLWxlZnQ6IDM4cHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmNvcHlpZ2h0IHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gIH1cbn1cblxuLmJvdHRvbS10ZXh0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLmJvdHRvbS10ZXh0IHAge1xuICBtYXJnaW4tbGVmdDogMzhweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuYm90dG9tLXRleHQgcCB7XG4gICAgbWFyZ2luLWxlZnQ6IDI0cHg7XG4gIH1cbn0iLCJAbWl4aW4gcGFkXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KVxuICAgICAgICBAY29udGVudFxuXG5AbWl4aW4gbW9iaWxlXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDM3NXB4KVxuICAgICAgICBAY29udGVudCAgICAgICAgXG4gICAgXG4gICAgXG5AbWl4aW4gZm9udExhcmdlKCRzaXplKSAgICBcbiAgICBmb250LXNpemU6ICRzaXplXG4gICAgY29sb3I6ICR0ZXh0LXByaW1hZXlcbiAgICBmb250LWZhbWlseTogUGluZ0ZhbmdUQy1NZWRpdW0sIHNhbnMtc2VyaWZcblxuQG1peGluIGZvbnRNaWQoJHNpemUpXG4gICAgZm9udC1zaXplOiAkc2l6ZVxuICAgIGNvbG9yOiAkdGV4dC1wcmltYWV5XG4gICAgZm9udC1mYW1pbHk6IFBpbmdGYW5nVEMtU2VtaWJvbGQsIHNhbnMtc2VyaWZcblxuQG1peGluIGZvbnRTbWFsbCgkc2l6ZSlcbiAgICBmb250LXNpemU6ICRzaXplXG4gICAgY29sb3I6ICR0ZXh0LXByaW1hZXlcbiAgICBmb250LWZhbWlseTogUGluZ0ZhbmdUQy1NZWRpdW0sIHNhbnMtc2VyaWZcblxuQG1peGluIGZvbnRFeHRyYVN0cm9uZygkc2l6ZSlcbiAgICBmb250LXNpemU6ICRzaXplXG4gICAgY29sb3I6ICR0ZXh0LXByaW1hZXlcbiAgICBmb250LWZhbWlseTogUGluZ0ZhbmdUQy1NZWRpdW0sIHNhbnMtc2VyaWZcblxuQG1peGluIGZvbnRTZWMoJHNpemUpXG4gICAgZm9udC1zaXplOiAkc2l6ZVxuICAgIGNvbG9yOiAkdGV4dC1zZWNvbmRhcnlcbiAgICBmb250LWZhbWlseTogUm9ib3RvXG4gICAgLy8gZm9udC13ZWlnaHQ6IGJvbGRcblxuQG1peGluIGZvbnR0ZXh0KCRzaXplKVxuICAgIGZvbnQtc2l6ZTogJHNpemVcbiAgICBjb2xvcjogIzAwMDAwMFxuICAgIGZvbnQtZmFtaWx5OiBQaW5nRmFuZ1RDLVJlZ3VsYXIsIHNhbnMtc2VyaWYiXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.sass']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../nav-bar/nav-bar.component */
    "./src/app/nav-bar/nav-bar.component.ts");
    /* harmony import */


    var _banner_banner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../banner/banner.component */
    "./src/app/banner/banner.component.ts");
    /* harmony import */


    var _introduction_introduction_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../introduction/introduction.component */
    "./src/app/introduction/introduction.component.ts");
    /* harmony import */


    var _classic_classic_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../classic/classic.component */
    "./src/app/classic/classic.component.ts");
    /* harmony import */


    var _crossover_crossover_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../crossover/crossover.component */
    "./src/app/crossover/crossover.component.ts");
    /* harmony import */


    var _contant_us_contant_us_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../contant-us/contant-us.component */
    "./src/app/contant-us/contant-us.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../footer/footer.component */
    "./src/app/footer/footer.component.ts");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)();
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 7,
      vars: 0,
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav-bar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-banner");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-introduction");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-classic");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-crossover");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-contant-us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-footer");
        }
      },
      directives: [_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__["NavBarComponent"], _banner_banner_component__WEBPACK_IMPORTED_MODULE_2__["BannerComponent"], _introduction_introduction_component__WEBPACK_IMPORTED_MODULE_3__["IntroductionComponent"], _classic_classic_component__WEBPACK_IMPORTED_MODULE_4__["ClassicComponent"], _crossover_crossover_component__WEBPACK_IMPORTED_MODULE_5__["CrossoverComponent"], _contant_us_contant_us_component__WEBPACK_IMPORTED_MODULE_6__["ContantUsComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2FzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.sass']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/introduction/introduction.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/introduction/introduction.component.ts ***!
    \********************************************************/

  /*! exports provided: IntroductionComponent */

  /***/
  function srcAppIntroductionIntroductionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IntroductionComponent", function () {
      return IntroductionComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var IntroductionComponent = /*#__PURE__*/function () {
      function IntroductionComponent() {
        _classCallCheck(this, IntroductionComponent);
      }

      _createClass(IntroductionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return IntroductionComponent;
    }();

    IntroductionComponent.ɵfac = function IntroductionComponent_Factory(t) {
      return new (t || IntroductionComponent)();
    };

    IntroductionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IntroductionComponent,
      selectors: [["app-introduction"]],
      decls: 29,
      vars: 0,
      consts: [[1, "features"], [1, "container"], [1, "features-title"], [1, "features-box"], [1, "features-item"], ["src", "assets/img/iconfinder_circle-dollar.svg", "alt", ""], ["src", "assets/img/iconfinder_clock.svg", "alt", ""], ["src", "assets/img/iconfinder_heart.svg", "alt", ""], ["src", "assets/img/iconfinder_glasses.svg", "alt", ""]],
      template: function IntroductionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u7528\u5C08\u696D\u7684\u5FC3\uFF0C\u505A\u5C08\u696D\u7684\u4E8B");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u55AE\u4E00\u50F9\u683C");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u7121\u8AD6\u4EFB\u4F55\u5EA6\u6578\u7686\u4E0D\u9700\u8FFD\u52A0\u8CBB\u7528\u5373\u53EF\u64C1\u6709\u9069\u5408\u81EA\u5DF1\u7684\u8584\u578B\u7403\u9762\u93E1\u7247\u3002");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "20 \u5206\u9418\u5373\u53EF\u53D6\u4EF6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u70BA\u4E86\u60A8\u7684\u5BF6\u8CB4\u6642\u9593\u8457\u60F3\uFF0C\u4EE5\u8C50\u5BCC\u5C08\u696D\u77E5\u8B58\u8207\u6280\u8853\u5C07\u7D50\u5E33\u5230\u4EA4\u4EF6\u7684\u6642\u9593\u7E2E\u6E1B\u81F3\u6700\u5FEB 20 \u5206\u9418\u5373\u53EF\u5B8C\u6210\u3002");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\u5B89\u5FC3\u552E\u5F8C\u670D\u52D9");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\u6211\u5011\u63D0\u4F9B\u9577\u9054 120 \u5929\u7684\u4FDD\u56FA\u552E\u5F8C\u670D\u52D9\uFF0C\u4E0D\u9650\u6703\u54E1\u8CC7\u683C\u7686\u4EAB\u6709\u514D\u8CBB\u6DF1\u5C64\u4FDD\u990A\u53CA\u5C08\u696D\u7DAD\u4FEE\u670D\u52D9\u3002");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\u95DC\u65BC\u93E1\u7247");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\u4F7F\u7528\u4E16\u754C\u77E5\u540D\u9802\u7D1A\u54C1\u724C\uFF0C\u6297UV\u3001\u9632\u6C59\u934D\u819C\u8584\u578B\u975E\u7403\u9762\u93E1\u7247\u3002");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".features[_ngcontent-%COMP%] {\n  background-color: #AA06010D;\n}\n\n.container[_ngcontent-%COMP%] {\n  max-width: 1140px;\n  margin-right: auto;\n  margin-left: auto;\n  padding-right: 15px;\n  padding-left: 15px;\n  padding: 64px;\n}\n\n@media (max-width: 768px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 768px;\n    padding: 48px 64px;\n  }\n}\n\n.features-title[_ngcontent-%COMP%] {\n  font-size: 48px;\n  color: #650300;\n  font-family: PingFangTC-Medium, sans-serif;\n  text-align: center;\n}\n\n@media (max-width: 768px) {\n  .features-title[_ngcontent-%COMP%] {\n    font-size: 32px;\n    color: #650300;\n    font-family: PingFangTC-Medium, sans-serif;\n  }\n}\n\n.features-box[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  margin-top: 44px;\n  margin-right: -15px;\n  margin-left: -15px;\n}\n\n@media (max-width: 768px) {\n  .features-box[_ngcontent-%COMP%] {\n    margin: 12px 0 20px 26px;\n    align-items: center;\n    justify-content: center;\n  }\n}\n\n.features-item[_ngcontent-%COMP%] {\n  flex-basis: 0;\n  flex-grow: 1;\n  max-width: 100%;\n  min-height: 1px;\n  text-align: center;\n  align-items: center;\n  padding: 0 37px;\n}\n\n@media (max-width: 768px) {\n  .features-item[_ngcontent-%COMP%] {\n    flex: 0 0 33.33333%;\n    margin-left: 24px;\n  }\n}\n\n.features-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  max-width: 100%;\n}\n\n.features-item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: #650300;\n  font-family: PingFangTC-Medium, sans-serif;\n  margin-top: 44px;\n}\n\n@media (max-width: 768px) {\n  .features-item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 20px;\n    color: #650300;\n    font-family: PingFangTC-Medium, sans-serif;\n    margin-top: 16px;\n  }\n}\n\n.features-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #000000;\n  font-family: PingFangTC-Regular, sans-serif;\n  margin-top: 4px;\n  text-align: left;\n  line-height: 1.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saWJlcmVzX2xvL3Byb2plY3QvaHctZ2xhc3Nlcy9zcmMvYXBwL2ludHJvZHVjdGlvbi9pbnRyb2R1Y3Rpb24uY29tcG9uZW50LnNhc3MiLCJzcmMvYXBwL2ludHJvZHVjdGlvbi9pbnRyb2R1Y3Rpb24uY29tcG9uZW50LnNhc3MiLCIvVXNlcnMvbGliZXJlc19sby9wcm9qZWN0L2h3LWdsYXNzZXMvc3JjL3Nhc3MvX21peGluLnNhc3MiLCIvVXNlcnMvbGliZXJlc19sby9wcm9qZWN0L2h3LWdsYXNzZXMvc3JjL3Nhc3MvX3ZhcmlhYmxlLnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDSSwyQkFBQTtBQ0ZKOztBRElBO0VBRUksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUNGSjs7QUNWSTtFRktKO0lBU1EsZ0JBQUE7SUFDQSxrQkFBQTtFQ0FOO0FBQ0Y7O0FERUE7RUVUSSxlRlVvQjtFRVRwQixjQ0RXO0VERVgsMENBQUE7RUZTQSxrQkFBQTtBQ0dKOztBQ3ZCSTtFRmtCSjtJRVRJLGVGYXdCO0lFWnhCLGNDRFc7SURFWCwwQ0FBQTtFRGtCRjtBQUNGOztBRE5BO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNTSjs7QUN0Q0k7RUZ3Qko7SUFPUSx3QkFBQTtJQUNBLG1CQUFBO0lBQ0EsdUJBQUE7RUNXTjtBQUNGOztBRFRBO0VBRUksYUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDV0o7O0FDdkRJO0VGb0NKO0lBVVEsbUJBQUE7SUFFQSxpQkFBQTtFQ1lOO0FBQ0Y7O0FEVEE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7QUNZSjs7QURWQTtFRWhDSSxlRmlDMEI7RUVoQzFCLGNDaEJXO0VEaUJYLDBDQUFBO0VGZ0NBLGdCQUFBO0FDZUo7O0FDekVJO0VGd0RKO0lFaENJLGVGb0M4QjtJRW5DOUIsY0NoQlc7SURpQlgsMENBQUE7SUZtQ0ksZ0JBQUE7RUNtQk47QUFDRjs7QURsQkE7RUU1QkksZUY2Qm1CO0VFNUJuQixjQUFBO0VBQ0EsMkNBQUE7RUY0QkEsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUN1QkoiLCJmaWxlIjoic3JjL2FwcC9pbnRyb2R1Y3Rpb24vaW50cm9kdWN0aW9uLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAndmFyaWFibGUuc2FzcydcbkBpbXBvcnQgJ21peGluLnNhc3MnXG5cbi5mZWF0dXJlc1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNBQTA2MDEwRFxuXG4uY29udGFpbmVyXG4gICAgLy8gd2lkdGg6IDEwMCVcbiAgICBtYXgtd2lkdGg6IDExNDBweFxuICAgIG1hcmdpbi1yaWdodDogYXV0b1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvXG4gICAgcGFkZGluZy1yaWdodDogMTVweFxuICAgIHBhZGRpbmctbGVmdDogMTVweFxuICAgIHBhZGRpbmc6IDY0cHhcbiAgICBAaW5jbHVkZSBwYWRcbiAgICAgICAgbWF4LXdpZHRoOiA3NjhweFxuICAgICAgICBwYWRkaW5nOiA0OHB4IDY0cHhcbiAgICAgICAgXG5cbi5mZWF0dXJlcy10aXRsZVxuICAgIEBpbmNsdWRlIGZvbnRMYXJnZSggNDhweCApXG4gICAgdGV4dC1hbGlnbjogY2VudGVyXG4gICAgQGluY2x1ZGUgcGFkXG4gICAgICAgIEBpbmNsdWRlIGZvbnRMYXJnZSggMzJweCApXG5cbi5mZWF0dXJlcy1ib3hcbiAgICBkaXNwbGF5OiBmbGV4XG4gICAgZmxleC13cmFwOiB3cmFwXG4gICAgbWFyZ2luLXRvcDogNDRweFxuICAgIG1hcmdpbi1yaWdodDogLTE1cHhcbiAgICBtYXJnaW4tbGVmdDogLTE1cHhcbiAgICBAaW5jbHVkZSBwYWRcbiAgICAgICAgbWFyZ2luOiAxMnB4IDAgMjBweCAyNnB4XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXJcblxuXG4uZmVhdHVyZXMtaXRlbVxuICAgIC8vIHBvc2l0aW9uOiByZWxhdGl2ZVxuICAgIGZsZXgtYmFzaXM6IDBcbiAgICBmbGV4LWdyb3c6IDFcbiAgICBtYXgtd2lkdGg6IDEwMCVcbiAgICBtaW4taGVpZ2h0OiAxcHhcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyXG4gICAgcGFkZGluZzogMCAzN3B4XG4gICAgQGluY2x1ZGUgcGFkXG4gICAgICAgIGZsZXg6IDAgMCAzMy4zMzMzMyVcbiAgICAgICAgLy8gbWF4LXdpZHRoOiAzMyVcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDI0cHggIFxuXG5cblxuLmZlYXR1cmVzLWl0ZW0gaW1nXG4gICAgbWFyZ2luLXRvcDogMTZweCAgXG4gICAgbWF4LXdpZHRoOiAxMDAlXG5cbi5mZWF0dXJlcy1pdGVtIGgzXG4gICAgQGluY2x1ZGUgZm9udEV4dHJhU3Ryb25nKCAyNHB4IClcbiAgICBtYXJnaW4tdG9wOiA0NHB4XG4gICAgQGluY2x1ZGUgcGFkXG4gICAgICAgIEBpbmNsdWRlIGZvbnRFeHRyYVN0cm9uZyggMjBweCApXG4gICAgICAgIG1hcmdpbi10b3A6IDE2cHhcblxuLmZlYXR1cmVzLWl0ZW0gcCAgIFxuICAgIEBpbmNsdWRlIGZvbnR0ZXh0KCAxNnB4ICkgICAgIFxuICAgIG1hcmdpbi10b3A6IDRweFxuICAgIHRleHQtYWxpZ246IGxlZnRcbiAgICBsaW5lLWhlaWdodDogMS41IiwiLmZlYXR1cmVzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0FBMDYwMTBEO1xufVxuXG4uY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiAxMTQwcHg7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgcGFkZGluZzogNjRweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDc2OHB4O1xuICAgIHBhZGRpbmc6IDQ4cHggNjRweDtcbiAgfVxufVxuXG4uZmVhdHVyZXMtdGl0bGUge1xuICBmb250LXNpemU6IDQ4cHg7XG4gIGNvbG9yOiAjNjUwMzAwO1xuICBmb250LWZhbWlseTogUGluZ0ZhbmdUQy1NZWRpdW0sIHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuZmVhdHVyZXMtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICBjb2xvcjogIzY1MDMwMDtcbiAgICBmb250LWZhbWlseTogUGluZ0ZhbmdUQy1NZWRpdW0sIHNhbnMtc2VyaWY7XG4gIH1cbn1cblxuLmZlYXR1cmVzLWJveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgbWFyZ2luLXRvcDogNDRweDtcbiAgbWFyZ2luLXJpZ2h0OiAtMTVweDtcbiAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5mZWF0dXJlcy1ib3gge1xuICAgIG1hcmdpbjogMTJweCAwIDIwcHggMjZweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG59XG5cbi5mZWF0dXJlcy1pdGVtIHtcbiAgZmxleC1iYXNpczogMDtcbiAgZmxleC1ncm93OiAxO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDFweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAwIDM3cHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmZlYXR1cmVzLWl0ZW0ge1xuICAgIGZsZXg6IDAgMCAzMy4zMzMzMyU7XG4gICAgbWFyZ2luLWxlZnQ6IDI0cHg7XG4gIH1cbn1cblxuLmZlYXR1cmVzLWl0ZW0gaW1nIHtcbiAgbWFyZ2luLXRvcDogMTZweDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG4uZmVhdHVyZXMtaXRlbSBoMyB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6ICM2NTAzMDA7XG4gIGZvbnQtZmFtaWx5OiBQaW5nRmFuZ1RDLU1lZGl1bSwgc2Fucy1zZXJpZjtcbiAgbWFyZ2luLXRvcDogNDRweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuZmVhdHVyZXMtaXRlbSBoMyB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGNvbG9yOiAjNjUwMzAwO1xuICAgIGZvbnQtZmFtaWx5OiBQaW5nRmFuZ1RDLU1lZGl1bSwgc2Fucy1zZXJpZjtcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICB9XG59XG5cbi5mZWF0dXJlcy1pdGVtIHAge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBmb250LWZhbWlseTogUGluZ0ZhbmdUQy1SZWd1bGFyLCBzYW5zLXNlcmlmO1xuICBtYXJnaW4tdG9wOiA0cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG59IiwiQG1peGluIHBhZFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweClcbiAgICAgICAgQGNvbnRlbnRcblxuQG1peGluIG1vYmlsZVxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAzNzVweClcbiAgICAgICAgQGNvbnRlbnQgICAgICAgIFxuICAgIFxuICAgIFxuQG1peGluIGZvbnRMYXJnZSgkc2l6ZSkgICAgXG4gICAgZm9udC1zaXplOiAkc2l6ZVxuICAgIGNvbG9yOiAkdGV4dC1wcmltYWV5XG4gICAgZm9udC1mYW1pbHk6IFBpbmdGYW5nVEMtTWVkaXVtLCBzYW5zLXNlcmlmXG5cbkBtaXhpbiBmb250TWlkKCRzaXplKVxuICAgIGZvbnQtc2l6ZTogJHNpemVcbiAgICBjb2xvcjogJHRleHQtcHJpbWFleVxuICAgIGZvbnQtZmFtaWx5OiBQaW5nRmFuZ1RDLVNlbWlib2xkLCBzYW5zLXNlcmlmXG5cbkBtaXhpbiBmb250U21hbGwoJHNpemUpXG4gICAgZm9udC1zaXplOiAkc2l6ZVxuICAgIGNvbG9yOiAkdGV4dC1wcmltYWV5XG4gICAgZm9udC1mYW1pbHk6IFBpbmdGYW5nVEMtTWVkaXVtLCBzYW5zLXNlcmlmXG5cbkBtaXhpbiBmb250RXh0cmFTdHJvbmcoJHNpemUpXG4gICAgZm9udC1zaXplOiAkc2l6ZVxuICAgIGNvbG9yOiAkdGV4dC1wcmltYWV5XG4gICAgZm9udC1mYW1pbHk6IFBpbmdGYW5nVEMtTWVkaXVtLCBzYW5zLXNlcmlmXG5cbkBtaXhpbiBmb250U2VjKCRzaXplKVxuICAgIGZvbnQtc2l6ZTogJHNpemVcbiAgICBjb2xvcjogJHRleHQtc2Vjb25kYXJ5XG4gICAgZm9udC1mYW1pbHk6IFJvYm90b1xuICAgIC8vIGZvbnQtd2VpZ2h0OiBib2xkXG5cbkBtaXhpbiBmb250dGV4dCgkc2l6ZSlcbiAgICBmb250LXNpemU6ICRzaXplXG4gICAgY29sb3I6ICMwMDAwMDBcbiAgICBmb250LWZhbWlseTogUGluZ0ZhbmdUQy1SZWd1bGFyLCBzYW5zLXNlcmlmIiwiJGJnLXByaW1hcnk6ICNBQTA2MDFcbiRiZy1zZWNvbmRhcnkgOiAjRkJGMkYxXG4kYmctdGhpcmRseSA6ICNGMkYyRjJcbiRiZy1mb3VydGhseSA6ICNkY2RjZGNcbiRiZy13aGl0ZSA6ICNmZmZcbiRiZy1ibGFjayA6ICMwMDBcbiRiZy1ob3ZlciA6ICM4YTA3MDJcblxuXG5cbiR0ZXh0LXByaW1hZXk6ICM2NTAzMDAgICAgXG4kdGV4dC1zZWNvbmRhcnkgOiAjQUEwNjAxXG4kdGV4dC10aGlyZGx5OiAjMjEyNTI5XG4kdGV4dC1mb3VydGhseTogIzcwNzA3MFxuJHRleHQtYmxvZy10eHQ6ICM1NTU1NTVcbiR0ZXh0LWJsb2ctZGF0YTogIzZjNmM2YyJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IntroductionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-introduction',
          templateUrl: './introduction.component.html',
          styleUrls: ['./introduction.component.sass']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/nav-bar/nav-bar.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/nav-bar/nav-bar.component.ts ***!
    \**********************************************/

  /*! exports provided: NavBarComponent */

  /***/
  function srcAppNavBarNavBarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavBarComponent", function () {
      return NavBarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var NavBarComponent = /*#__PURE__*/function () {
      function NavBarComponent() {
        _classCallCheck(this, NavBarComponent);
      }

      _createClass(NavBarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NavBarComponent;
    }();

    NavBarComponent.ɵfac = function NavBarComponent_Factory(t) {
      return new (t || NavBarComponent)();
    };

    NavBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavBarComponent,
      selectors: [["app-nav-bar"]],
      decls: 17,
      vars: 0,
      consts: [[1, "header"], [1, "logo"], ["routerLink", "/home"], ["src", "assets/img/logo-new_1.png", "alt", ""], [1, "menu"], [1, "menu-list"], ["href", "#"], ["routerLink", "/question"]],
      template: function NavBarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u7CFB\u5217\u93E1\u6846");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u9580\u5E02\u64DA\u9EDE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u90E8\u843D\u683C");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u5E38\u898B\u554F\u984C");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: [".header[_ngcontent-%COMP%] {\n  background-color: #AA0601;\n  display: flex;\n  justify-content: space-between;\n  padding: 30px 88px;\n}\n@media (max-width: 768px) {\n  .header[_ngcontent-%COMP%] {\n    max-width: 100%;\n    padding: 30px 48px;\n  }\n}\n.menu[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.menu-list[_ngcontent-%COMP%] {\n  margin-left: 60px;\n}\n.menu-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-size: 20px;\n}\n@media (max-width: 768px) {\n  .menu-list[_ngcontent-%COMP%] {\n    margin-left: 40px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saWJlcmVzX2xvL3Byb2plY3QvaHctZ2xhc3Nlcy9zcmMvYXBwL25hdi1iYXIvbmF2LWJhci5jb21wb25lbnQuc2FzcyIsIi9Vc2Vycy9saWJlcmVzX2xvL3Byb2plY3QvaHctZ2xhc3Nlcy9zcmMvc2Fzcy9fdmFyaWFibGUuc2FzcyIsInNyYy9hcHAvbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5zYXNzIiwiL1VzZXJzL2xpYmVyZXNfbG8vcHJvamVjdC9ody1nbGFzc2VzL3NyYy9zYXNzL19taXhpbi5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0kseUJDSlM7RURLVCxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtBRUZKO0FDSkk7RUhFSjtJQU9RLGVBQUE7SUFDQSxrQkFBQTtFRUROO0FBQ0Y7QUZFQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FFQ0o7QUZFQTtFQUNJLGlCQUFBO0FFQ0o7QUZBSTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FFRVI7QUN4Qkk7RUhrQko7SUFNUSxpQkFBQTtFRUlOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9uYXYtYmFyL25hdi1iYXIuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICd2YXJpYWJsZS5zYXNzJ1xuQGltcG9ydCAnbWl4aW4uc2FzcydcblxuLmhlYWRlclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRiZy1wcmltYXJ5XG4gICAgZGlzcGxheTogZmxleFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlblxuICAgIHBhZGRpbmc6IDMwcHggODhweFxuXG4gICAgQGluY2x1ZGUgcGFkIFxuICAgICAgICBtYXgtd2lkdGg6IDEwMCVcbiAgICAgICAgcGFkZGluZzogMzBweCA0OHB4XG5cbi5tZW51XG4gICAgZGlzcGxheTogZmxleFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlblxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXJcbiAgICBcblxuLm1lbnUtbGlzdCAgICBcbiAgICBtYXJnaW4tbGVmdDogNjBweFxuICAgICYgYVxuICAgICAgICBjb2xvcjogI2ZmZmZmZlxuICAgICAgICBmb250LXNpemU6IDIwcHhcbiAgICBAaW5jbHVkZSBwYWQgXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA0MHB4XG5cblxuIiwiJGJnLXByaW1hcnk6ICNBQTA2MDFcbiRiZy1zZWNvbmRhcnkgOiAjRkJGMkYxXG4kYmctdGhpcmRseSA6ICNGMkYyRjJcbiRiZy1mb3VydGhseSA6ICNkY2RjZGNcbiRiZy13aGl0ZSA6ICNmZmZcbiRiZy1ibGFjayA6ICMwMDBcbiRiZy1ob3ZlciA6ICM4YTA3MDJcblxuXG5cbiR0ZXh0LXByaW1hZXk6ICM2NTAzMDAgICAgXG4kdGV4dC1zZWNvbmRhcnkgOiAjQUEwNjAxXG4kdGV4dC10aGlyZGx5OiAjMjEyNTI5XG4kdGV4dC1mb3VydGhseTogIzcwNzA3MFxuJHRleHQtYmxvZy10eHQ6ICM1NTU1NTVcbiR0ZXh0LWJsb2ctZGF0YTogIzZjNmM2YyIsIi5oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQUEwNjAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDMwcHggODhweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuaGVhZGVyIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMzBweCA0OHB4O1xuICB9XG59XG5cbi5tZW51IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubWVudS1saXN0IHtcbiAgbWFyZ2luLWxlZnQ6IDYwcHg7XG59XG4ubWVudS1saXN0IGEge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5tZW51LWxpc3Qge1xuICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xuICB9XG59IiwiQG1peGluIHBhZFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweClcbiAgICAgICAgQGNvbnRlbnRcblxuQG1peGluIG1vYmlsZVxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAzNzVweClcbiAgICAgICAgQGNvbnRlbnQgICAgICAgIFxuICAgIFxuICAgIFxuQG1peGluIGZvbnRMYXJnZSgkc2l6ZSkgICAgXG4gICAgZm9udC1zaXplOiAkc2l6ZVxuICAgIGNvbG9yOiAkdGV4dC1wcmltYWV5XG4gICAgZm9udC1mYW1pbHk6IFBpbmdGYW5nVEMtTWVkaXVtLCBzYW5zLXNlcmlmXG5cbkBtaXhpbiBmb250TWlkKCRzaXplKVxuICAgIGZvbnQtc2l6ZTogJHNpemVcbiAgICBjb2xvcjogJHRleHQtcHJpbWFleVxuICAgIGZvbnQtZmFtaWx5OiBQaW5nRmFuZ1RDLVNlbWlib2xkLCBzYW5zLXNlcmlmXG5cbkBtaXhpbiBmb250U21hbGwoJHNpemUpXG4gICAgZm9udC1zaXplOiAkc2l6ZVxuICAgIGNvbG9yOiAkdGV4dC1wcmltYWV5XG4gICAgZm9udC1mYW1pbHk6IFBpbmdGYW5nVEMtTWVkaXVtLCBzYW5zLXNlcmlmXG5cbkBtaXhpbiBmb250RXh0cmFTdHJvbmcoJHNpemUpXG4gICAgZm9udC1zaXplOiAkc2l6ZVxuICAgIGNvbG9yOiAkdGV4dC1wcmltYWV5XG4gICAgZm9udC1mYW1pbHk6IFBpbmdGYW5nVEMtTWVkaXVtLCBzYW5zLXNlcmlmXG5cbkBtaXhpbiBmb250U2VjKCRzaXplKVxuICAgIGZvbnQtc2l6ZTogJHNpemVcbiAgICBjb2xvcjogJHRleHQtc2Vjb25kYXJ5XG4gICAgZm9udC1mYW1pbHk6IFJvYm90b1xuICAgIC8vIGZvbnQtd2VpZ2h0OiBib2xkXG5cbkBtaXhpbiBmb250dGV4dCgkc2l6ZSlcbiAgICBmb250LXNpemU6ICRzaXplXG4gICAgY29sb3I6ICMwMDAwMDBcbiAgICBmb250LWZhbWlseTogUGluZ0ZhbmdUQy1SZWd1bGFyLCBzYW5zLXNlcmlmIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-nav-bar',
          templateUrl: './nav-bar.component.html',
          styleUrls: ['./nav-bar.component.sass']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/question/question.component.ts":
  /*!************************************************!*\
    !*** ./src/app/question/question.component.ts ***!
    \************************************************/

  /*! exports provided: QuestionComponent */

  /***/
  function srcAppQuestionQuestionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuestionComponent", function () {
      return QuestionComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../nav-bar/nav-bar.component */
    "./src/app/nav-bar/nav-bar.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../footer/footer.component */
    "./src/app/footer/footer.component.ts");

    var QuestionComponent = /*#__PURE__*/function () {
      function QuestionComponent() {
        _classCallCheck(this, QuestionComponent);
      }

      _createClass(QuestionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return QuestionComponent;
    }();

    QuestionComponent.ɵfac = function QuestionComponent_Factory(t) {
      return new (t || QuestionComponent)();
    };

    QuestionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: QuestionComponent,
      selectors: [["app-question"]],
      decls: 36,
      vars: 0,
      consts: [[1, "qa-banner"], [1, "container"], [1, "qa-text"], ["src", "/assets/img/help-circle-sharp.svg", "alt", ""], [1, "qa-contant"], [1, "collapse-title"], [1, "collapse"], ["for", "tab1"], [1, "box"], ["type", "checkbox", "name", "tab", "id", "tab1"], [1, "content"], [1, "content-text"], ["for", "tab2"], ["type", "checkbox", "name", "tab", "id", "tab2"], ["for", "tab3"], ["type", "checkbox", "name", "tab", "id", "tab3"], ["for", "tab4"], ["type", "checkbox", "name", "tab", "id", "tab4"], ["type", "checkbox", "name", "tab", "id", "tab5"]],
      template: function QuestionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav-bar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " \u5E38\u898B\u554F\u984C ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u6211\u60F3\u8A62\u554F\u914D\u93E1\u554F\u984C");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Q1.\u8ACB\u554F\u53EF\u5426\u81EA\u5099\u93E1\u6846\u55AE\u914D\u93E1\u7247\uFF1F");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " A1.\u6211\u724C\u93E1\u6846\u642D\u914D\u8584\u578B\u975E\u7403\u9762\u93E1\u72471480\u5143\uFF0C\u642D\u914D\u529F\u80FD\u578B\u93E1\u7247\u5247\u4F9D\u93E1\u7247\u7A2E\u985E\u52A0\u50F9\u8CFC\u8CB7\u3002 \u7576\u65E5\u8CFC\u8CB7JINS\u76D2\u88DD\u773C\u93E1\uFF0C\u642D\u914D\u8584\u578B\u975E\u7403\u9762\u93E1\u7247980\u5143(\u9694\u65E5\u5F8C\u5247\u70BA1480\u5143)\uFF0C\u642D\u914D\u529F\u80FD\u578B\u93E1\u7247\u5247\u4F9D\u93E1\u7247\u7A2E\u985E\u52A0\u50F9\u8CFC\u8CB7\u3002 \u4ED6\u724C\u93E1\u6846\uFF0C\u642D\u914D\u8584\u578B\u975E\u7403\u9762\u93E1\u72471980\u5143\uFF0C\u642D\u914D\u529F\u80FD\u578B\u93E1\u7247\u5247\u4F9D\u93E1\u7247\u7A2E\u985E\u52A0\u50F9\u8CFC\u8CB7\u3002 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Q2.\u773C\u93E1\u90FD\u53EF\u4EE520\u5206\u9418\u53D6\u4EF6\u55CE\uFF1F");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " A1.\u6211\u724C\u93E1\u6846\u642D\u914D\u8584\u578B\u975E\u7403\u9762\u93E1\u72471480\u5143\uFF0C\u642D\u914D\u529F\u80FD\u578B\u93E1\u7247\u5247\u4F9D\u93E1\u7247\u7A2E\u985E\u52A0\u50F9\u8CFC\u8CB7\u3002 \u7576\u65E5\u8CFC\u8CB7JINS\u76D2\u88DD\u773C\u93E1\uFF0C\u642D\u914D\u8584\u578B\u975E\u7403\u9762\u93E1\u7247980\u5143(\u9694\u65E5\u5F8C\u5247\u70BA1480\u5143)\uFF0C\u642D\u914D\u529F\u80FD\u578B\u93E1\u7247\u5247\u4F9D\u93E1\u7247\u7A2E\u985E\u52A0\u50F9\u8CFC\u8CB7\u3002 \u4ED6\u724C\u93E1\u6846\uFF0C\u642D\u914D\u8584\u578B\u975E\u7403\u9762\u93E1\u72471980\u5143\uFF0C\u642D\u914D\u529F\u80FD\u578B\u93E1\u7247\u5247\u4F9D\u93E1\u7247\u7A2E\u985E\u52A0\u50F9\u8CFC\u8CB7\u3002 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Q3.\u6563\u5149\u93E1\u7247\u9700\u8981\u984D\u5916\u52A0\u50F9\u55CE\uFF1F");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Q4.\u6211\u53EF\u4EE5\u4F7F\u7528\u820A\u773C\u93E1\u7684\u5EA6\u6578\u914D\u93E1\u7247\u55CE\uFF1F");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Q5.\u8ACB\u554F\u53EF\u4EE5\u55AE\u8CFC\u8CB7\u93E1\u6846\u55CE\uFF1F");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "app-footer");
        }
      },
      directives: [_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__["NavBarComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]],
      styles: [".qa-banner[_ngcontent-%COMP%] {\n  max-width: 100%;\n  height: 304px;\n  background: url(/./assets/img/72.png);\n  position: relative;\n}\n\n.container[_ngcontent-%COMP%] {\n  width: 1200px;\n  margin: 0 auto;\n}\n\n.qa-text[_ngcontent-%COMP%] {\n  font-size: 64px;\n  color: #650300;\n  font-family: PingFangTC-Medium, sans-serif;\n  color: #000000;\n  position: absolute;\n  bottom: 8px;\n}\n\n.qa-contant[_ngcontent-%COMP%] {\n  padding: 88px 0;\n  width: 1200px;\n  margin: 0 auto;\n}\n\n.collapse-title[_ngcontent-%COMP%] {\n  font-size: 32px;\n  margin-bottom: 16px;\n}\n\n.collapse[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  cursor: pointer;\n  border: 1px solid #000000;\n  padding: 22px 38px;\n  font-size: 20px;\n  box-sizing: border-box;\n}\n\n.icon-down[_ngcontent-%COMP%], .icon-up[_ngcontent-%COMP%] {\n  text-align: right;\n  margin-left: 800px;\n  transition: 0.5s;\n}\n\n.content[_ngcontent-%COMP%] {\n  height: 0;\n  overflow: hidden;\n  transition: 0.5s;\n}\n\n.content-text[_ngcontent-%COMP%] {\n  width: 80%;\n  padding: 22px 38px;\n  line-height: 1.5;\n  font-size: 16px;\n  background-color: yellow;\n}\n\n.icon-down[_ngcontent-%COMP%] {\n  display: none;\n}\n\ninput[type=checkbox][_ngcontent-%COMP%]:checked    + .content[_ngcontent-%COMP%] {\n  height: 125px;\n  width: 100%;\n  border-right: 1px solid #000000;\n  border-left: 1px solid #000000;\n  padding-right: -2px;\n}\n\ninput[type=checkbox][_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saWJlcmVzX2xvL3Byb2plY3QvaHctZ2xhc3Nlcy9zcmMvYXBwL3F1ZXN0aW9uL3F1ZXN0aW9uLmNvbXBvbmVudC5zYXNzIiwic3JjL2FwcC9xdWVzdGlvbi9xdWVzdGlvbi5jb21wb25lbnQuc2FzcyIsIi9Vc2Vycy9saWJlcmVzX2xvL3Byb2plY3QvaHctZ2xhc3Nlcy9zcmMvc2Fzcy9fbWl4aW4uc2FzcyIsIi9Vc2Vycy9saWJlcmVzX2xvL3Byb2plY3QvaHctZ2xhc3Nlcy9zcmMvc2Fzcy9fY29sb3Iuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNJLGVBQUE7RUFDQSxhQUFBO0VBQ0EscUNBQUE7RUFDQSxrQkFBQTtBQ0hKOztBREtBO0VBQ0ksYUFBQTtFQUNBLGNBQUE7QUNGSjs7QURLQTtFRUxJLGVGTW9CO0VFTHBCLGNDVlc7RURXWCwwQ0FBQTtFRktBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNBSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNFSjs7QURBQTtFQUNJLFNBQUE7RUFFQSxnQkFBQTtFQUNBLGdCQUFBO0FDRUo7O0FERUE7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtBQ0NKOztBREVJO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSwrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUNDUjs7QURRQTtFQUNJLGFBQUE7QUNMSiIsImZpbGUiOiJzcmMvYXBwL3F1ZXN0aW9uL3F1ZXN0aW9uLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAndmFyaWFibGUuc2FzcydcbkBpbXBvcnQgJ2NvbG9yLnNhc3MnXG5AaW1wb3J0ICdtaXhpbi5zYXNzJ1xuXG4ucWEtYmFubmVyXG4gICAgbWF4LXdpZHRoOiAxMDAlXG4gICAgaGVpZ2h0OiAzMDRweFxuICAgIGJhY2tncm91bmQ6IHVybCgvLi9hc3NldHMvaW1nLzcyLnBuZykgXG4gICAgcG9zaXRpb246IHJlbGF0aXZlXG5cbi5jb250YWluZXJcbiAgICB3aWR0aDogMTIwMHB4XG4gICAgbWFyZ2luOiAwIGF1dG9cbiAgICBcblxuLnFhLXRleHRcbiAgICBAaW5jbHVkZSBmb250TGFyZ2UoIDY0cHggKSAgICAgXG4gICAgY29sb3I6ICMwMDAwMDBcbiAgICBwb3NpdGlvbjogYWJzb2x1dGVcbiAgICBib3R0b206IDhweFxuXG4ucWEtY29udGFudFxuICAgIHBhZGRpbmc6IDg4cHggMFxuICAgIHdpZHRoOiAxMjAwcHhcbiAgICBtYXJnaW46IDAgYXV0b1xuICAgIFxuXG4uY29sbGFwc2UtdGl0bGVcbiAgICBmb250LXNpemU6IDMycHhcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4XG5cblxuLmNvbGxhcHNlIGxhYmVsXG4gICAgZGlzcGxheTogYmxvY2tcbiAgICB3aWR0aDogMTAwJVxuICAgIGN1cnNvcjogcG9pbnRlclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDBcbiAgICBwYWRkaW5nOiAyMnB4IDM4cHhcbiAgICBmb250LXNpemU6IDIwcHggXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveFxuXG4uaWNvbi1kb3duLCAuaWNvbi11cFxuICAgIHRleHQtYWxpZ246IHJpZ2h0ICAgICAgICBcbiAgICBtYXJnaW4tbGVmdDogODAwcHhcbiAgICB0cmFuc2l0aW9uOiAwLjVzXG5cbi5jb250ZW50XG4gICAgaGVpZ2h0OiAwXG4gICAgLy8gd2lkdGg6IDEwMCVcbiAgICBvdmVyZmxvdzogaGlkZGVuXG4gICAgdHJhbnNpdGlvbjogMC41cyAgICBcbiAgICBcblxuXG4uY29udGVudC10ZXh0XG4gICAgd2lkdGg6IDgwJVxuICAgIHBhZGRpbmc6IDIycHggMzhweFxuICAgIGxpbmUtaGVpZ2h0OiAxLjVcbiAgICBmb250LXNpemU6IDE2cHggXG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93XG4gICAgLy8gYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMFxuXG4uaWNvbi1kb3duXG4gICAgZGlzcGxheTogbm9uZSAgICAgICAgXG5cbmlucHV0W3R5cGU9Y2hlY2tib3hdOmNoZWNrZWQgXG4gICAgKyAuY29udGVudFxuICAgICAgICBoZWlnaHQ6IDEyNXB4XG4gICAgICAgIHdpZHRoOiAxMDAlXG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMwMDAwMDBcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjMDAwMDAwXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IC0ycHhcbiAgICAvLyArIC5pY29uLWRvd25cbiAgICAvLyAgICAgZGlzcGxheTogYmxvY2tcbiAgICAvLyAgICAgdHJhbnNpdGlvbjogMC41c1xuICAgIC8vICsgLmljb24tdXBcbiAgICAvLyAgICAgZGlzcGxheTogbm9uZVxuICAgIC8vICAgICB0cmFuc2l0aW9uOiAwLjVzICAgIFxuXG5cdFx0XG5pbnB1dFt0eXBlPWNoZWNrYm94XVxuICAgIGRpc3BsYXk6IG5vbmUiLCIucWEtYmFubmVyIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMwNHB4O1xuICBiYWNrZ3JvdW5kOiB1cmwoLy4vYXNzZXRzL2ltZy83Mi5wbmcpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jb250YWluZXIge1xuICB3aWR0aDogMTIwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLnFhLXRleHQge1xuICBmb250LXNpemU6IDY0cHg7XG4gIGNvbG9yOiAjNjUwMzAwO1xuICBmb250LWZhbWlseTogUGluZ0ZhbmdUQy1NZWRpdW0sIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogOHB4O1xufVxuXG4ucWEtY29udGFudCB7XG4gIHBhZGRpbmc6IDg4cHggMDtcbiAgd2lkdGg6IDEyMDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5jb2xsYXBzZS10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cblxuLmNvbGxhcHNlIGxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDA7XG4gIHBhZGRpbmc6IDIycHggMzhweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uaWNvbi1kb3duLCAuaWNvbi11cCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBtYXJnaW4tbGVmdDogODAwcHg7XG4gIHRyYW5zaXRpb246IDAuNXM7XG59XG5cbi5jb250ZW50IHtcbiAgaGVpZ2h0OiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuXG4uY29udGVudC10ZXh0IHtcbiAgd2lkdGg6IDgwJTtcbiAgcGFkZGluZzogMjJweCAzOHB4O1xuICBsaW5lLWhlaWdodDogMS41O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcbn1cblxuLmljb24tZG93biB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbmlucHV0W3R5cGU9Y2hlY2tib3hdOmNoZWNrZWQgKyAuY29udGVudCB7XG4gIGhlaWdodDogMTI1cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMDAwMDAwO1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICMwMDAwMDA7XG4gIHBhZGRpbmctcmlnaHQ6IC0ycHg7XG59XG5cbmlucHV0W3R5cGU9Y2hlY2tib3hdIHtcbiAgZGlzcGxheTogbm9uZTtcbn0iLCJAbWl4aW4gcGFkXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KVxuICAgICAgICBAY29udGVudFxuXG5AbWl4aW4gbW9iaWxlXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDM3NXB4KVxuICAgICAgICBAY29udGVudCAgICAgICAgXG4gICAgXG4gICAgXG5AbWl4aW4gZm9udExhcmdlKCRzaXplKSAgICBcbiAgICBmb250LXNpemU6ICRzaXplXG4gICAgY29sb3I6ICR0ZXh0LXByaW1hZXlcbiAgICBmb250LWZhbWlseTogUGluZ0ZhbmdUQy1NZWRpdW0sIHNhbnMtc2VyaWZcblxuQG1peGluIGZvbnRNaWQoJHNpemUpXG4gICAgZm9udC1zaXplOiAkc2l6ZVxuICAgIGNvbG9yOiAkdGV4dC1wcmltYWV5XG4gICAgZm9udC1mYW1pbHk6IFBpbmdGYW5nVEMtU2VtaWJvbGQsIHNhbnMtc2VyaWZcblxuQG1peGluIGZvbnRTbWFsbCgkc2l6ZSlcbiAgICBmb250LXNpemU6ICRzaXplXG4gICAgY29sb3I6ICR0ZXh0LXByaW1hZXlcbiAgICBmb250LWZhbWlseTogUGluZ0ZhbmdUQy1NZWRpdW0sIHNhbnMtc2VyaWZcblxuQG1peGluIGZvbnRFeHRyYVN0cm9uZygkc2l6ZSlcbiAgICBmb250LXNpemU6ICRzaXplXG4gICAgY29sb3I6ICR0ZXh0LXByaW1hZXlcbiAgICBmb250LWZhbWlseTogUGluZ0ZhbmdUQy1NZWRpdW0sIHNhbnMtc2VyaWZcblxuQG1peGluIGZvbnRTZWMoJHNpemUpXG4gICAgZm9udC1zaXplOiAkc2l6ZVxuICAgIGNvbG9yOiAkdGV4dC1zZWNvbmRhcnlcbiAgICBmb250LWZhbWlseTogUm9ib3RvXG4gICAgLy8gZm9udC13ZWlnaHQ6IGJvbGRcblxuQG1peGluIGZvbnR0ZXh0KCRzaXplKVxuICAgIGZvbnQtc2l6ZTogJHNpemVcbiAgICBjb2xvcjogIzAwMDAwMFxuICAgIGZvbnQtZmFtaWx5OiBQaW5nRmFuZ1RDLVJlZ3VsYXIsIHNhbnMtc2VyaWYiLCIkY29sb3ItcHJpbWFyeTogI0FBMDYwMVxuJHRleHQtcHJpbWFleTogIzY1MDMwMCAgICAiXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuestionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-question',
          templateUrl: './question.component.html',
          styleUrls: ['./question.component.sass']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/liberes_lo/project/hw-glasses/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map