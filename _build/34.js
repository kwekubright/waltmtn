webpackJsonp([34],{

/***/ 2023:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreLoginSiteErrorPageModule", function() { return CoreLoginSiteErrorPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__site_error__ = __webpack_require__(2169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__ = __webpack_require__(14);
// (C) Copyright 2015 Martin Dougiamas
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var CoreLoginSiteErrorPageModule = /** @class */ (function () {
    function CoreLoginSiteErrorPageModule() {
    }
    CoreLoginSiteErrorPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__site_error__["a" /* CoreLoginSiteErrorPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__["a" /* CoreDirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__site_error__["a" /* CoreLoginSiteErrorPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ]
        })
    ], CoreLoginSiteErrorPageModule);
    return CoreLoginSiteErrorPageModule;
}());

//# sourceMappingURL=site-error.module.js.map

/***/ }),

/***/ 2169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreLoginSiteErrorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
// (C) Copyright 2015 Martin Dougiamas
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Component that displays an error when trying to connect to a site.
 */
var CoreLoginSiteErrorPage = /** @class */ (function () {
    function CoreLoginSiteErrorPage(viewCtrl, params) {
        this.viewCtrl = viewCtrl;
        this.siteUrl = params.get('siteUrl');
        this.issue = params.get('issue');
    }
    /**
     * Close modal.
     */
    CoreLoginSiteErrorPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    CoreLoginSiteErrorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-core-login-site-error',template:/*ion-inline-start:"/Users/user/Documents/GitHub/moodlemobile2/src/core/login/pages/site-error/site-error.html"*/'<ion-header>\n    <ion-navbar core-back-button>\n        <ion-title>{{ \'core.error\' | translate }}</ion-title>\n\n        <ion-buttons end>\n            <button ion-button icon-only (click)="closeModal()" [attr.aria-label]="\'core.close\' | translate">\n                <ion-icon name="close"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n<ion-content padding>\n    <h3>{{ \'core.whoops\' | translate }}</h3>\n    <p>{{ \'core.login.problemconnectingerror\' | translate }}</p>\n    <p padding>{{siteUrl}}</p>\n    <p>{{ \'core.login.problemconnectingerrorcontinue\' | translate }}</p>\n    <button ion-button block (click)="closeModal()">{{ \'core.tryagain\' | translate }}</button>\n    <h3>{{ \'core.login.stillcantconnect\' | translate }}</h3>\n    <p>{{ \'core.login.contactyouradministrator\' | translate }}</p>\n    <p *ngIf="issue">\n        {{ \'core.login.contactyouradministratorissue\' | translate:{$a: \'\'} }}\n    </p>\n    <p *ngIf="issue" margin-bottom>\n        <core-format-text [text]="issue"></core-format-text>\n    </p>\n</ion-content>\n\n'/*ion-inline-end:"/Users/user/Documents/GitHub/moodlemobile2/src/core/login/pages/site-error/site-error.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["G" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */]])
    ], CoreLoginSiteErrorPage);
    return CoreLoginSiteErrorPage;
}());

//# sourceMappingURL=site-error.js.map

/***/ })

});
//# sourceMappingURL=34.js.map