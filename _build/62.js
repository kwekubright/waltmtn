webpackJsonp([62],{

/***/ 2002:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonNotesAddPageModule", function() { return AddonNotesAddPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add__ = __webpack_require__(2148);
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





var AddonNotesAddPageModule = /** @class */ (function () {
    function AddonNotesAddPageModule() {
    }
    AddonNotesAddPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__add__["a" /* AddonNotesAddPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__["a" /* CoreDirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add__["a" /* AddonNotesAddPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ]
        })
    ], AddonNotesAddPageModule);
    return AddonNotesAddPageModule;
}());

//# sourceMappingURL=add.module.js.map

/***/ }),

/***/ 2148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddonNotesAddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_app__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_utils_dom__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_notes__ = __webpack_require__(195);
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
 * Component that displays a text area for composing a note.
 */
var AddonNotesAddPage = /** @class */ (function () {
    function AddonNotesAddPage(params, viewCtrl, appProvider, domUtils, notesProvider) {
        this.viewCtrl = viewCtrl;
        this.appProvider = appProvider;
        this.domUtils = domUtils;
        this.notesProvider = notesProvider;
        this.type = 'personal';
        this.text = '';
        this.processing = false;
        this.userId = params.get('userId');
        this.courseId = params.get('courseId');
        this.type = params.get('type') || 'personal';
    }
    /**
     * Send the note or store it offline.
     *
     * @param {Event} e Event.
     */
    AddonNotesAddPage.prototype.addNote = function (e) {
        var _this = this;
        e.preventDefault();
        e.stopPropagation();
        this.appProvider.closeKeyboard();
        var loadingModal = this.domUtils.showModalLoading('core.sending', true);
        // Freeze the add note button.
        this.processing = true;
        this.notesProvider.addNote(this.userId, this.courseId, this.type, this.text).then(function (sent) {
            _this.viewCtrl.dismiss({ type: _this.type, sent: true }).finally(function () {
                _this.domUtils.showToast(sent ? 'addon.notes.eventnotecreated' : 'core.datastoredoffline', true, 3000);
            });
        }).catch(function (error) {
            _this.domUtils.showErrorModal(error);
            _this.processing = false;
        }).finally(function () {
            loadingModal.dismiss();
        });
    };
    /**
     * Close modal.
     */
    AddonNotesAddPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss({ type: this.type });
    };
    AddonNotesAddPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addon-notes-add',template:/*ion-inline-start:"/Users/user/Documents/GitHub/moodlemobile2/src/addon/notes/pages/add/add.html"*/'<ion-header>\n    <ion-navbar core-back-button>\n        <ion-title>{{ \'addon.notes.addnewnote\' | translate }}</ion-title>\n        <ion-buttons end>\n            <button ion-button icon-only (click)="closeModal()" [attr.aria-label]="\'core.close\' | translate">\n                <ion-icon name="close"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n<ion-content>\n    <form name="itemEdit" (ngSubmit)="addNote($event)">\n        <ion-item>\n            <ion-label>{{ \'addon.notes.publishstate\' | translate }}</ion-label>\n            <ion-select [(ngModel)]="type" name="publishState" interface="popover">\n                <ion-option value="personal">{{ \'addon.notes.personalnotes\' | translate }}</ion-option>\n                <ion-option value="course">{{ \'addon.notes.coursenotes\' | translate }}</ion-option>\n                <ion-option value="site">{{ \'addon.notes.sitenotes\' | translate }}</ion-option>\n            </ion-select>\n        </ion-item>\n        <ion-item>\n            <ion-textarea placeholder="{{ \'addon.notes.note\' | translate }}" rows="5" [(ngModel)]="text" name="text" required="required"></ion-textarea>\n        </ion-item>\n        <div padding>\n            <button ion-button block type="submit" [disabled]="processing || text.length < 2">\n                {{ \'addon.notes.addnewnote\' | translate }}\n            </button>\n        </div>\n    </form>\n</ion-content>\n'/*ion-inline-end:"/Users/user/Documents/GitHub/moodlemobile2/src/addon/notes/pages/add/add.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["G" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__providers_app__["a" /* CoreAppProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_utils_dom__["a" /* CoreDomUtilsProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_notes__["a" /* AddonNotesProvider */]])
    ], AddonNotesAddPage);
    return AddonNotesAddPage;
}());

//# sourceMappingURL=add.js.map

/***/ })

});
//# sourceMappingURL=62.js.map