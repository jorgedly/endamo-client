(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-empresa-home-empresa-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/home-empresa/home-empresa.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/home-empresa/home-empresa.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>home-empresa</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/home-empresa/home-empresa-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/home-empresa/home-empresa-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: HomeEmpresaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeEmpresaPageRoutingModule", function() { return HomeEmpresaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_empresa_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-empresa.page */ "./src/app/pages/home-empresa/home-empresa.page.ts");




const routes = [
    {
        path: '',
        component: _home_empresa_page__WEBPACK_IMPORTED_MODULE_3__["HomeEmpresaPage"]
    }
];
let HomeEmpresaPageRoutingModule = class HomeEmpresaPageRoutingModule {
};
HomeEmpresaPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HomeEmpresaPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/home-empresa/home-empresa.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/home-empresa/home-empresa.module.ts ***!
  \***********************************************************/
/*! exports provided: HomeEmpresaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeEmpresaPageModule", function() { return HomeEmpresaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _home_empresa_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-empresa-routing.module */ "./src/app/pages/home-empresa/home-empresa-routing.module.ts");
/* harmony import */ var _home_empresa_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-empresa.page */ "./src/app/pages/home-empresa/home-empresa.page.ts");







let HomeEmpresaPageModule = class HomeEmpresaPageModule {
};
HomeEmpresaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _home_empresa_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomeEmpresaPageRoutingModule"]
        ],
        declarations: [_home_empresa_page__WEBPACK_IMPORTED_MODULE_6__["HomeEmpresaPage"]]
    })
], HomeEmpresaPageModule);



/***/ }),

/***/ "./src/app/pages/home-empresa/home-empresa.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/home-empresa/home-empresa.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUtZW1wcmVzYS9ob21lLWVtcHJlc2EucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/home-empresa/home-empresa.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/home-empresa/home-empresa.page.ts ***!
  \*********************************************************/
/*! exports provided: HomeEmpresaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeEmpresaPage", function() { return HomeEmpresaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeEmpresaPage = class HomeEmpresaPage {
    constructor() { }
    ngOnInit() {
    }
};
HomeEmpresaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home-empresa',
        template: __webpack_require__(/*! raw-loader!./home-empresa.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/home-empresa/home-empresa.page.html"),
        styles: [__webpack_require__(/*! ./home-empresa.page.scss */ "./src/app/pages/home-empresa/home-empresa.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], HomeEmpresaPage);



/***/ })

}]);
//# sourceMappingURL=pages-home-empresa-home-empresa-module-es2015.js.map