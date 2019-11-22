webpackJsonp([108],{

/***/ 1968:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModChatSessionMessagesPageModule", function() { return AddonModChatSessionMessagesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pipes_pipes_module__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_components_module__ = __webpack_require__(979);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__session_messages__ = __webpack_require__(2114);
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








var AddonModChatSessionMessagesPageModule = /** @class */ (function () {
    function AddonModChatSessionMessagesPageModule() {
    }
    AddonModChatSessionMessagesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__session_messages__["a" /* AddonModChatSessionMessagesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* CoreComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__["a" /* CoreDirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_5__pipes_pipes_module__["a" /* CorePipesModule */],
                __WEBPACK_IMPORTED_MODULE_6__components_components_module__["a" /* AddonModChatComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_7__session_messages__["a" /* AddonModChatSessionMessagesPage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], AddonModChatSessionMessagesPageModule);
    return AddonModChatSessionMessagesPageModule;
}());

//# sourceMappingURL=session-messages.module.js.map

/***/ }),

/***/ 2114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddonModChatSessionMessagesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_utils_dom__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_chat__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
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
 * Page that displays list of chat session messages.
 */
var AddonModChatSessionMessagesPage = /** @class */ (function () {
    function AddonModChatSessionMessagesPage(navParams, domUtils, chatProvider) {
        this.domUtils = domUtils;
        this.chatProvider = chatProvider;
        this.loaded = false;
        this.messages = [];
        this.courseId = navParams.get('courseId');
        this.chatId = navParams.get('chatId');
        this.groupId = navParams.get('groupId');
        this.sessionStart = navParams.get('sessionStart');
        this.sessionEnd = navParams.get('sessionEnd');
        this.fetchMessages();
    }
    /**
     * Fetch session messages.
     *
     * @return {Promise<any>} Promise resolved when done.
     */
    AddonModChatSessionMessagesPage.prototype.fetchMessages = function () {
        var _this = this;
        return this.chatProvider.getSessionMessages(this.chatId, this.sessionStart, this.sessionEnd, this.groupId)
            .then(function (messages) {
            return _this.chatProvider.getMessagesUserData(messages, _this.courseId).then(function (messages) {
                _this.messages = messages;
            });
        }).catch(function (error) {
            _this.domUtils.showErrorModalDefault(error, 'core.errorloadingcontent', true);
        }).finally(function () {
            _this.loaded = true;
        });
    };
    /**
     * Refresh session messages.
     *
     * @param {any} refresher Refresher.
     */
    AddonModChatSessionMessagesPage.prototype.refreshMessages = function (refresher) {
        var _this = this;
        this.chatProvider.invalidateSessionMessages(this.chatId, this.sessionStart, this.groupId).finally(function () {
            _this.fetchMessages().finally(function () {
                refresher.complete();
            });
        });
    };
    /**
     * Check if the date should be displayed between messages (when the day changes at midnight for example).
     *
     * @param  {any} message     New message object.
     * @param  {any} prevMessage Previous message object.
     * @return {boolean} True if messages are from diferent days, false othetwise.
     */
    AddonModChatSessionMessagesPage.prototype.showDate = function (message, prevMessage) {
        if (!prevMessage) {
            return true;
        }
        // Check if day has changed.
        return !__WEBPACK_IMPORTED_MODULE_4_moment__(message.timestamp * 1000).isSame(prevMessage.timestamp * 1000, 'day');
    };
    AddonModChatSessionMessagesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addon-mod-chat-session-messages',template:/*ion-inline-start:"/Users/user/Documents/GitHub/moodlemobile2/src/addon/mod/chat/pages/session-messages/session-messages.html"*/'<ion-header>\n    <ion-navbar core-back-button>\n        <ion-title>{{ \'addon.mod_chat.messages\' | translate }}</ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content>\n    <ion-refresher [enabled]="loaded" (ionRefresh)="refreshMessages($event)">\n        <ion-refresher-content pullingText="{{ \'core.pulltorefresh\' | translate }}"></ion-refresher-content>\n    </ion-refresher>\n    <core-loading [hideUntil]="loaded">\n        <div *ngFor="let message of messages; index as index; last as last">\n            <div text-center *ngIf="showDate(messages[index], messages[index - 1])" class="addon-mod-chat-notice">\n                <ion-badge text-wrap color="light">\n                    <span>{{ message.timestamp * 1000 | coreFormatDate:"strftimedayshort" }}</span>\n                </ion-badge>\n            </div>\n\n            <div text-center *ngIf="message.issystem && message.message == \'enter\'" class="addon-mod-chat-notice">\n                <ion-badge text-wrap color="light">\n                    <span>{{ message.timestamp * 1000 | coreFormatDate:"strftimetime" }} {{ \'addon.mod_chat.messageenter\' | translate:{$a: message.userfullname} }}</span>\n                </ion-badge>\n            </div>\n\n            <div text-center *ngIf="message.issystem && message.message == \'exit\'" class="addon-mod-chat-notice">\n                <ion-badge text-wrap color="light">\n                    <span>{{ message.timestamp * 1000 | coreFormatDate:"strftimetime" }} {{ \'addon.mod_chat.messageexit\' | translate:{$a: message.userfullname} }}</span>\n                </ion-badge>\n            </div>\n\n            <ion-item text-wrap *ngIf="!message.issystem && message.message.substr(0, 4) != \'beep\'" class="addon-mod-chat-message">\n                <ion-avatar core-user-avatar [user]="message" item-start></ion-avatar>\n                <h2>\n                    <p float-end>{{ message.timestamp * 1000 | coreFormatDate:"strftimetime" }}</p>\n                    <core-format-text [text]="message.userfullname"></core-format-text>\n                </h2>\n                <core-format-text [text]="message.message"></core-format-text>\n            </ion-item>\n        </div>\n    </core-loading>\n</ion-content>\n'/*ion-inline-end:"/Users/user/Documents/GitHub/moodlemobile2/src/addon/mod/chat/pages/session-messages/session-messages.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_utils_dom__["a" /* CoreDomUtilsProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_chat__["a" /* AddonModChatProvider */]])
    ], AddonModChatSessionMessagesPage);
    return AddonModChatSessionMessagesPage;
}());

//# sourceMappingURL=session-messages.js.map

/***/ })

});
//# sourceMappingURL=108.js.map