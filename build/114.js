webpackJsonp([114],{

/***/ 1987:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/@angular/core/esm5/core.js
var core = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/ionic-angular/index.js + 3 modules
var ionic_angular = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/index.js + 1 modules
var _ngx_translate_core = __webpack_require__(3);

// EXTERNAL MODULE: ./src/components/components.module.ts
var components_module = __webpack_require__(29);

// EXTERNAL MODULE: ./src/directives/directives.module.ts + 2 modules
var directives_module = __webpack_require__(31);

// EXTERNAL MODULE: ./src/pipes/pipes.module.ts + 2 modules
var pipes_module = __webpack_require__(109);

// EXTERNAL MODULE: ./src/addon/mod/chat/components/components.module.ts
var components_components_module = __webpack_require__(721);

// EXTERNAL MODULE: ./src/components/split-view/split-view.ts
var split_view = __webpack_require__(25);

// EXTERNAL MODULE: ./src/core/user/providers/user.ts
var user = __webpack_require__(43);

// EXTERNAL MODULE: ./src/providers/groups.ts
var groups = __webpack_require__(67);

// EXTERNAL MODULE: ./src/providers/utils/dom.ts
var dom = __webpack_require__(4);

// EXTERNAL MODULE: ./src/providers/utils/utils.ts
var utils = __webpack_require__(2);

// EXTERNAL MODULE: ./src/addon/mod/chat/providers/chat.ts
var chat = __webpack_require__(274);

// CONCATENATED MODULE: ./src/addon/mod/chat/pages/sessions/sessions.ts
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
 * Page that displays list of chat sessions.
 */
var sessions_AddonModChatSessionsPage = /** @class */ (function () {
    function AddonModChatSessionsPage(navParams, chatProvider, domUtils, userProvider, groupsProvider, translate, utils) {
        var _this = this;
        this.chatProvider = chatProvider;
        this.domUtils = domUtils;
        this.userProvider = userProvider;
        this.groupsProvider = groupsProvider;
        this.translate = translate;
        this.utils = utils;
        this.loaded = false;
        this.showAll = false;
        this.groupId = 0;
        this.sessions = [];
        this.courseId = navParams.get('courseId');
        this.cmId = navParams.get('cmId');
        this.chatId = navParams.get('chatId');
        this.fetchSessions().then(function () {
            if (_this.splitviewCtrl.isOn() && _this.sessions.length > 0) {
                _this.openSession(_this.sessions[0]);
            }
        });
    }
    /**
     * Fetch chat sessions.
     *
     * @param {number} [showLoading] Display a loading modal.
     * @return {Promise<any>} Promise resolved when done.
     */
    AddonModChatSessionsPage.prototype.fetchSessions = function (showLoading) {
        var _this = this;
        var modal = showLoading ? this.domUtils.showModalLoading() : null;
        return this.groupsProvider.getActivityGroupInfo(this.cmId, false).then(function (groupInfo) {
            _this.groupInfo = groupInfo;
            _this.groupId = _this.groupsProvider.validateGroupId(_this.groupId, groupInfo);
            return _this.chatProvider.getSessions(_this.chatId, _this.groupId, _this.showAll);
        }).then(function (sessions) {
            // Fetch user profiles.
            var promises = [];
            sessions.forEach(function (session) {
                session.duration = session.sessionend - session.sessionstart;
                session.sessionusers.forEach(function (sessionUser) {
                    if (!sessionUser.userfullname) {
                        // The WS does not return the user name, fetch user profile.
                        promises.push(_this.userProvider.getProfile(sessionUser.userid, _this.courseId, true).then(function (user) {
                            sessionUser.userfullname = user.fullname;
                        }).catch(function () {
                            // Error getting profile, most probably the user is deleted.
                            sessionUser.userfullname = _this.translate.instant('core.deleteduser') + ' ' + sessionUser.userid;
                        }));
                    }
                });
                // If session has more than 4 users we display a "Show more" link.
                session.allsessionusers = session.sessionusers;
                if (session.sessionusers.length > 4) {
                    session.sessionusers = session.allsessionusers.slice(0, 3);
                }
            });
            return Promise.all(promises).then(function () {
                _this.sessions = sessions;
            });
        }).catch(function (error) {
            _this.domUtils.showErrorModalDefault(error, 'core.errorloadingcontent', true);
        }).finally(function () {
            _this.loaded = true;
            modal && modal.dismiss();
        });
    };
    /**
     * Refresh chat sessions.
     *
     * @param {any} refresher Refresher.
     */
    AddonModChatSessionsPage.prototype.refreshSessions = function (refresher) {
        var _this = this;
        var promises = [
            this.groupsProvider.invalidateActivityGroupInfo(this.cmId),
            this.chatProvider.invalidateSessions(this.chatId, this.groupId, this.showAll)
        ];
        this.utils.allPromises(promises).finally(function () {
            _this.fetchSessions().finally(function () {
                refresher.complete();
            });
        });
    };
    /**
     * Navigate to a session.
     *
     * @param {any} session Chat session.
     */
    AddonModChatSessionsPage.prototype.openSession = function (session) {
        this.selectedSessionStart = session.sessionstart;
        this.selectedSessionGroupId = this.groupId;
        var params = {
            courseId: this.courseId,
            chatId: this.chatId,
            groupId: this.groupId,
            sessionStart: session.sessionstart,
            sessionEnd: session.sessionend
        };
        this.splitviewCtrl.push('AddonModChatSessionMessagesPage', params);
    };
    /**
     * Show more session users.
     *
     * @param {any} session Chat session.
     * @param {Event} $event The event.
     */
    AddonModChatSessionsPage.prototype.showMoreUsers = function (session, $event) {
        session.sessionusers = session.allsessionusers;
        $event.stopPropagation();
    };
    __decorate([
        Object(core["_9" /* ViewChild */])(split_view["a" /* CoreSplitViewComponent */]),
        __metadata("design:type", split_view["a" /* CoreSplitViewComponent */])
    ], AddonModChatSessionsPage.prototype, "splitviewCtrl", void 0);
    AddonModChatSessionsPage = __decorate([
        Object(core["m" /* Component */])({
            selector: 'page-addon-mod-chat-sessions',
            templateUrl: 'sessions.html',
        }),
        __metadata("design:paramtypes", [ionic_angular["t" /* NavParams */], chat["a" /* AddonModChatProvider */], dom["a" /* CoreDomUtilsProvider */],
            user["a" /* CoreUserProvider */], groups["a" /* CoreGroupsProvider */],
            _ngx_translate_core["c" /* TranslateService */], utils["a" /* CoreUtilsProvider */]])
    ], AddonModChatSessionsPage);
    return AddonModChatSessionsPage;
}());

//# sourceMappingURL=sessions.js.map
// CONCATENATED MODULE: ./src/addon/mod/chat/pages/sessions/sessions.module.ts
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
var sessions_module___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var sessions_module_AddonModChatSessionsPageModule = /** @class */ (function () {
    function AddonModChatSessionsPageModule() {
    }
    AddonModChatSessionsPageModule = sessions_module___decorate([
        Object(core["I" /* NgModule */])({
            declarations: [
                sessions_AddonModChatSessionsPage,
            ],
            imports: [
                components_module["a" /* CoreComponentsModule */],
                directives_module["a" /* CoreDirectivesModule */],
                pipes_module["a" /* CorePipesModule */],
                components_components_module["a" /* AddonModChatComponentsModule */],
                ionic_angular["l" /* IonicPageModule */].forChild(sessions_AddonModChatSessionsPage),
                _ngx_translate_core["b" /* TranslateModule */].forChild()
            ],
        })
    ], AddonModChatSessionsPageModule);
    return AddonModChatSessionsPageModule;
}());

//# sourceMappingURL=sessions.module.js.map
// EXTERNAL MODULE: ./node_modules/ionic-angular/components/action-sheet/action-sheet-component.ngfactory.js
var action_sheet_component_ngfactory = __webpack_require__(1471);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/alert/alert-component.ngfactory.js
var alert_component_ngfactory = __webpack_require__(1472);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/app/app-root.ngfactory.js
var app_root_ngfactory = __webpack_require__(1473);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/loading/loading-component.ngfactory.js
var loading_component_ngfactory = __webpack_require__(1474);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/modal/modal-component.ngfactory.js
var modal_component_ngfactory = __webpack_require__(1475);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/picker/picker-component.ngfactory.js + 1 modules
var picker_component_ngfactory = __webpack_require__(1476);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/popover/popover-component.ngfactory.js
var popover_component_ngfactory = __webpack_require__(1477);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/select/select-popover-component.ngfactory.js
var select_popover_component_ngfactory = __webpack_require__(1478);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toast/toast-component.ngfactory.js
var toast_component_ngfactory = __webpack_require__(1479);

// EXTERNAL MODULE: ./src/components/context-menu/context-menu-popover.ngfactory.js
var context_menu_popover_ngfactory = __webpack_require__(1480);

// EXTERNAL MODULE: ./src/components/course-picker-menu/course-picker-menu-popover.ngfactory.js
var course_picker_menu_popover_ngfactory = __webpack_require__(1481);

// EXTERNAL MODULE: ./src/components/recaptcha/recaptchamodal.ngfactory.js
var recaptchamodal_ngfactory = __webpack_require__(1482);

// EXTERNAL MODULE: ./src/components/bs-tooltip/bs-tooltip.ngfactory.js
var bs_tooltip_ngfactory = __webpack_require__(1483);

// EXTERNAL MODULE: ./src/core/block/components/only-title-block/only-title-block.ngfactory.js
var only_title_block_ngfactory = __webpack_require__(1486);

// EXTERNAL MODULE: ./src/core/block/components/pre-rendered-block/pre-rendered-block.ngfactory.js
var pre_rendered_block_ngfactory = __webpack_require__(1487);

// EXTERNAL MODULE: ./src/core/block/components/course-blocks/course-blocks.ngfactory.js
var course_blocks_ngfactory = __webpack_require__(1484);

// EXTERNAL MODULE: ./src/core/course/components/unsupported-module/unsupported-module.ngfactory.js
var unsupported_module_ngfactory = __webpack_require__(1485);

// EXTERNAL MODULE: ./src/core/course/components/tag-area/tag-area.ngfactory.js
var tag_area_ngfactory = __webpack_require__(1488);

// EXTERNAL MODULE: ./src/addon/mod/chat/components/index/index.ngfactory.js
var index_ngfactory = __webpack_require__(1508);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/label/label.js
var label = __webpack_require__(63);

// EXTERNAL MODULE: ./node_modules/ionic-angular/config/config.js
var config = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/src/translate.pipe.js
var translate_pipe = __webpack_require__(27);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/src/translate.service.js
var translate_service = __webpack_require__(18);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/option/option.js
var option_option = __webpack_require__(102);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/item/item.ngfactory.js + 1 modules
var item_ngfactory = __webpack_require__(30);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/item/item.js
var item = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/ionic-angular/util/form.js
var util_form = __webpack_require__(20);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/item/item-reorder.js + 1 modules
var item_reorder = __webpack_require__(28);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/item/item-content.js
var item_content = __webpack_require__(32);

// EXTERNAL MODULE: ./node_modules/@angular/common/esm5/common.js
var common = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/select/select.ngfactory.js
var select_ngfactory = __webpack_require__(120);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/select/select.js
var select_select = __webpack_require__(103);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/app/app.js + 3 modules
var app = __webpack_require__(34);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/deep-linker.js
var deep_linker = __webpack_require__(55);

// EXTERNAL MODULE: ./node_modules/@angular/forms/esm5/forms.js
var esm5_forms = __webpack_require__(22);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/button/button.ngfactory.js
var button_ngfactory = __webpack_require__(44);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/button/button.js
var button_button = __webpack_require__(42);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/card/card.js
var card = __webpack_require__(83);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/card/card-content.js
var card_content = __webpack_require__(374);

// EXTERNAL MODULE: ./src/components/empty-box/empty-box.ngfactory.js
var empty_box_ngfactory = __webpack_require__(121);

// EXTERNAL MODULE: ./src/components/empty-box/empty-box.ts
var empty_box = __webpack_require__(110);

// EXTERNAL MODULE: ./src/pipes/format-date.ts
var format_date = __webpack_require__(246);

// EXTERNAL MODULE: ./src/providers/logger.ts
var logger = __webpack_require__(5);

// EXTERNAL MODULE: ./src/providers/utils/time.ts
var time = __webpack_require__(24);

// EXTERNAL MODULE: ./src/pipes/duration.ts
var duration = __webpack_require__(1527);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar-header.js
var toolbar_header = __webpack_require__(365);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/view-controller.js
var view_controller = __webpack_require__(38);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/navbar.ngfactory.js
var navbar_ngfactory = __webpack_require__(713);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/navbar.js
var navbar = __webpack_require__(209);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/nav-controller.js
var nav_controller = __webpack_require__(19);

// EXTERNAL MODULE: ./src/directives/back-button.ts
var back_button = __webpack_require__(471);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/platform.js + 1 modules
var platform = __webpack_require__(16);

// EXTERNAL MODULE: ./src/providers/events.ts
var events = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory.js
var toolbar_title_ngfactory = __webpack_require__(714);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar-title.js
var toolbar_title = __webpack_require__(307);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar.js
var toolbar = __webpack_require__(245);

// EXTERNAL MODULE: ./src/components/split-view/split-view.ngfactory.js
var split_view_ngfactory = __webpack_require__(472);

// EXTERNAL MODULE: ./src/core/fileuploader/providers/fileuploader.ts
var fileuploader = __webpack_require__(68);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/content/content.ngfactory.js
var content_ngfactory = __webpack_require__(178);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/content/content.js
var content = __webpack_require__(26);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/dom-controller.js
var dom_controller = __webpack_require__(33);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/keyboard.js
var keyboard = __webpack_require__(101);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/refresher/refresher.js
var refresher = __webpack_require__(151);

// EXTERNAL MODULE: ./node_modules/ionic-angular/gestures/gesture-controller.js
var gesture_controller = __webpack_require__(39);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/refresher/refresher-content.ngfactory.js
var refresher_content_ngfactory = __webpack_require__(210);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/refresher/refresher-content.js
var refresher_content = __webpack_require__(167);

// EXTERNAL MODULE: ./src/components/loading/loading.ngfactory.js
var loading_ngfactory = __webpack_require__(50);

// EXTERNAL MODULE: ./src/components/loading/loading.ts
var loading = __webpack_require__(47);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toggle/toggle.ngfactory.js
var toggle_ngfactory = __webpack_require__(1489);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toggle/toggle.js + 1 modules
var toggle = __webpack_require__(368);

// EXTERNAL MODULE: ./node_modules/ionic-angular/tap-click/haptic.js
var haptic = __webpack_require__(194);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/nav-params.js
var nav_params = __webpack_require__(71);

// CONCATENATED MODULE: ./src/addon/mod/chat/pages/sessions/sessions.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 





























































var styles_AddonModChatSessionsPage = [];
var RenderType_AddonModChatSessionsPage = core["_29" /* ɵcrt */]({ encapsulation: 2, styles: styles_AddonModChatSessionsPage, data: {} });

function View_AddonModChatSessionsPage_2(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 3, "ion-label", [["id", "addon-chat-groupslabel"]], null, null, null, null, null)), core["_30" /* ɵdid */](1, 16384, [[2, 4]], 0, label["a" /* Label */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [8, null], [8, null], [8, null], [8, null]], { id: [0, "id"] }, null), (_l()(), core["_55" /* ɵted */](2, null, ["", ""])), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]])], function (_ck, _v) { var currVal_0 = "addon-chat-groupslabel"; _ck(_v, 1, 0, currVal_0); }, function (_ck, _v) { var currVal_1 = core["_56" /* ɵunv */](_v, 2, 0, core["_44" /* ɵnov */](_v, 3).transform("core.groupsseparate")); _ck(_v, 2, 0, currVal_1); }); }
function View_AddonModChatSessionsPage_3(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 3, "ion-label", [["id", "addon-chat-groupslabel"]], null, null, null, null, null)), core["_30" /* ɵdid */](1, 16384, [[2, 4]], 0, label["a" /* Label */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [8, null], [8, null], [8, null], [8, null]], { id: [0, "id"] }, null), (_l()(), core["_55" /* ɵted */](2, null, ["", ""])), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]])], function (_ck, _v) { var currVal_0 = "addon-chat-groupslabel"; _ck(_v, 1, 0, currVal_0); }, function (_ck, _v) { var currVal_1 = core["_56" /* ɵunv */](_v, 2, 0, core["_44" /* ɵnov */](_v, 3).transform("core.groupsvisible")); _ck(_v, 2, 0, currVal_1); }); }
function View_AddonModChatSessionsPage_4(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 2, "ion-option", [], null, null, null, null, null)), core["_30" /* ɵdid */](1, 16384, [[5, 4]], 0, option_option["a" /* Option */], [core["t" /* ElementRef */]], { value: [0, "value"] }, null), (_l()(), core["_55" /* ɵted */](2, null, ["", ""]))], function (_ck, _v) { var currVal_0 = _v.context.$implicit.id; _ck(_v, 1, 0, currVal_0); }, function (_ck, _v) { var currVal_1 = _v.context.$implicit.name; _ck(_v, 2, 0, currVal_1); }); }
function View_AddonModChatSessionsPage_1(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 24, "ion-item", [["class", "item item-block"], ["text-wrap", ""]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_30" /* ɵdid */](1, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_52" /* ɵqud */](603979776, 2, { contentLabel: 0 }), core["_52" /* ɵqud */](603979776, 3, { _buttons: 1 }), core["_52" /* ɵqud */](603979776, 4, { _icons: 1 }), core["_30" /* ɵdid */](5, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_26" /* ɵand */](16777216, null, 1, 1, null, View_AddonModChatSessionsPage_2)), core["_30" /* ɵdid */](8, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_26" /* ɵand */](16777216, null, 1, 1, null, View_AddonModChatSessionsPage_3)), core["_30" /* ɵdid */](11, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_31" /* ɵeld */](13, 0, null, 3, 10, "ion-select", [["aria-labelledby", "addon-chat-groupslabel"], ["interface", "action-sheet"]], [[2, "select-disabled", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "ionChange"], [null, "click"], [null, "keyup.space"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (core["_44" /* ɵnov */](_v, 14)._click($event) !== false);
        ad = (pd_0 && ad);
    } if (("keyup.space" === en)) {
        var pd_1 = (core["_44" /* ɵnov */](_v, 14)._keyup() !== false);
        ad = (pd_1 && ad);
    } if (("ngModelChange" === en)) {
        var pd_2 = ((_co.groupId = $event) !== false);
        ad = (pd_2 && ad);
    } if (("ionChange" === en)) {
        var pd_3 = (_co.fetchSessions(true) !== false);
        ad = (pd_3 && ad);
    } return ad; }, select_ngfactory["b" /* View_Select_0 */], select_ngfactory["a" /* RenderType_Select */])), core["_30" /* ɵdid */](14, 1228800, null, 1, select_select["a" /* Select */], [app["a" /* App */], util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item["a" /* Item */]], deep_linker["a" /* DeepLinker */]], { interface: [0, "interface"] }, { ionChange: "ionChange" }), core["_52" /* ɵqud */](603979776, 5, { options: 1 }), core["_50" /* ɵprd */](1024, null, esm5_forms["l" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [select_select["a" /* Select */]]), core["_30" /* ɵdid */](17, 671744, null, 0, esm5_forms["q" /* NgModel */], [[8, null], [8, null], [8, null], [2, esm5_forms["l" /* NG_VALUE_ACCESSOR */]]], { model: [0, "model"] }, { update: "ngModelChange" }), core["_50" /* ɵprd */](2048, null, esm5_forms["m" /* NgControl */], null, [esm5_forms["q" /* NgModel */]]), core["_30" /* ɵdid */](19, 16384, null, 0, esm5_forms["n" /* NgControlStatus */], [esm5_forms["m" /* NgControl */]], null, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                    "])), (_l()(), core["_26" /* ɵand */](16777216, null, null, 1, null, View_AddonModChatSessionsPage_4)), core["_30" /* ɵdid */](22, 802816, null, 0, common["j" /* NgForOf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */], core["E" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n            "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.groupInfo.separateGroups; _ck(_v, 8, 0, currVal_0); var currVal_1 = _co.groupInfo.visibleGroups; _ck(_v, 11, 0, currVal_1); var currVal_10 = "action-sheet"; _ck(_v, 14, 0, currVal_10); var currVal_11 = _co.groupId; _ck(_v, 17, 0, currVal_11); var currVal_12 = _co.groupInfo.groups; _ck(_v, 22, 0, currVal_12); }, function (_ck, _v) { var currVal_2 = core["_44" /* ɵnov */](_v, 14)._disabled; var currVal_3 = core["_44" /* ɵnov */](_v, 19).ngClassUntouched; var currVal_4 = core["_44" /* ɵnov */](_v, 19).ngClassTouched; var currVal_5 = core["_44" /* ɵnov */](_v, 19).ngClassPristine; var currVal_6 = core["_44" /* ɵnov */](_v, 19).ngClassDirty; var currVal_7 = core["_44" /* ɵnov */](_v, 19).ngClassValid; var currVal_8 = core["_44" /* ɵnov */](_v, 19).ngClassInvalid; var currVal_9 = core["_44" /* ɵnov */](_v, 19).ngClassPending; _ck(_v, 13, 0, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9); }); }
function View_AddonModChatSessionsPage_6(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 2, "p", [], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](1, null, ["", ""])), core["_49" /* ɵppd */](2, 1)], null, function (_ck, _v) { var currVal_0 = core["_56" /* ɵunv */](_v, 1, 0, _ck(_v, 2, 0, core["_44" /* ɵnov */](_v.parent.parent, 1), _v.parent.context.$implicit.duration)); _ck(_v, 1, 0, currVal_0); }); }
function View_AddonModChatSessionsPage_8(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](1, null, ["(", ")"]))], null, function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit.messagecount; _ck(_v, 1, 0, currVal_0); }); }
function View_AddonModChatSessionsPage_7(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 4, "p", [], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](1, null, ["\n                        ", " "])), (_l()(), core["_26" /* ɵand */](16777216, null, null, 1, null, View_AddonModChatSessionsPage_8)), core["_30" /* ɵdid */](3, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                    "]))], function (_ck, _v) { var currVal_1 = _v.context.$implicit.messagecount; _ck(_v, 3, 0, currVal_1); }, function (_ck, _v) { var currVal_0 = _v.context.$implicit.userfullname; _ck(_v, 1, 0, currVal_0); }); }
function View_AddonModChatSessionsPage_9(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 6, "div", [], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                    "])), (_l()(), core["_31" /* ɵeld */](2, 0, null, null, 3, "button", [["clear", ""], ["ion-button", ""]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.showMoreUsers(_v.parent.context.$implicit, $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, button_ngfactory["b" /* View_Button_0 */], button_ngfactory["a" /* RenderType_Button */])), core["_30" /* ɵdid */](3, 1097728, null, 0, button_button["a" /* Button */], [[8, ""], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */]], { clear: [0, "clear"] }, null), (_l()(), core["_55" /* ɵted */](4, 0, ["\n                        ", "\n                    "])), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                "]))], function (_ck, _v) { var currVal_0 = ""; _ck(_v, 3, 0, currVal_0); }, function (_ck, _v) { var currVal_1 = core["_56" /* ɵunv */](_v, 4, 0, core["_44" /* ɵnov */](_v, 5).transform("core.showmore")); _ck(_v, 4, 0, currVal_1); }); }
function View_AddonModChatSessionsPage_5(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 27, "ion-card", [], [[2, "addon-mod-chat-session-selected", null], [2, "addon-mod-chat-session-show-more", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.openSession(_v.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), core["_30" /* ɵdid */](1, 16384, null, 0, card["a" /* Card */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */]], null, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_31" /* ɵeld */](3, 0, null, null, 13, "ion-item", [["class", "item item-block"], ["text-wrap", ""]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_30" /* ɵdid */](4, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_52" /* ɵqud */](335544320, 9, { contentLabel: 0 }), core["_52" /* ɵqud */](603979776, 10, { _buttons: 1 }), core["_52" /* ɵqud */](603979776, 11, { _icons: 1 }), core["_30" /* ɵdid */](8, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n                    "])), (_l()(), core["_31" /* ɵeld */](10, 0, null, 2, 2, "h2", [], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](11, null, ["", ""])), core["_49" /* ɵppd */](12, 1), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n                    "])), (_l()(), core["_26" /* ɵand */](16777216, null, 2, 1, null, View_AddonModChatSessionsPage_6)), core["_30" /* ɵdid */](15, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_31" /* ɵeld */](18, 0, null, null, 5, "ion-card-content", [], null, null, null, null, null)), core["_30" /* ɵdid */](19, 16384, null, 0, card_content["a" /* CardContent */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */]], null, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                    "])), (_l()(), core["_26" /* ɵand */](16777216, null, null, 1, null, View_AddonModChatSessionsPage_7)), core["_30" /* ɵdid */](22, 802816, null, 0, common["j" /* NgForOf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */], core["E" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_26" /* ɵand */](16777216, null, null, 1, null, View_AddonModChatSessionsPage_9)), core["_30" /* ɵdid */](26, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n            "]))], function (_ck, _v) { var currVal_3 = _v.context.$implicit.duration; _ck(_v, 15, 0, currVal_3); var currVal_4 = _v.context.$implicit.sessionusers; _ck(_v, 22, 0, currVal_4); var currVal_5 = (_v.context.$implicit.sessionusers.length < _v.context.$implicit.allsessionusers.length); _ck(_v, 26, 0, currVal_5); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_v.context.$implicit.sessionstart == _co.selectedSessionStart) && (_co.groupId == _co.selectedSessionGroupId)); var currVal_1 = (_v.context.$implicit.sessionusers.length < _v.context.$implicit.allsessionusers.length); _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_2 = core["_56" /* ɵunv */](_v, 11, 0, _ck(_v, 12, 0, core["_44" /* ɵnov */](_v.parent, 0), (_v.context.$implicit.sessionstart * 1000))); _ck(_v, 11, 0, currVal_2); }); }
function View_AddonModChatSessionsPage_10(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 3, "core-empty-box", [["icon", "chatbubbles"]], null, null, null, empty_box_ngfactory["b" /* View_CoreEmptyBoxComponent_0 */], empty_box_ngfactory["a" /* RenderType_CoreEmptyBoxComponent */])), core["_30" /* ɵdid */](1, 49152, null, 0, empty_box["a" /* CoreEmptyBoxComponent */], [], { message: [0, "message"], icon: [1, "icon"] }, null), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, 0, ["\n            "]))], function (_ck, _v) { var currVal_0 = core["_56" /* ɵunv */](_v, 1, 0, core["_44" /* ɵnov */](_v, 2).transform("addon.mod_chat.nosessionsfound")); var currVal_1 = "chatbubbles"; _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_AddonModChatSessionsPage_0(_l) { return core["_57" /* ɵvid */](0, [core["_47" /* ɵpid */](0, format_date["a" /* CoreFormatDatePipe */], [logger["a" /* CoreLoggerProvider */], time["a" /* CoreTimeUtilsProvider */]]), core["_47" /* ɵpid */](0, duration["a" /* CoreDurationPipe */], [logger["a" /* CoreLoggerProvider */], time["a" /* CoreTimeUtilsProvider */]]), core["_52" /* ɵqud */](402653184, 1, { splitviewCtrl: 0 }), (_l()(), core["_31" /* ɵeld */](3, 0, null, null, 12, "ion-header", [], null, null, null, null, null)), core["_30" /* ɵdid */](4, 16384, null, 0, toolbar_header["a" /* Header */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, view_controller["a" /* ViewController */]]], null, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["_31" /* ɵeld */](6, 0, null, null, 8, "ion-navbar", [["class", "toolbar"], ["core-back-button", ""]], [[8, "hidden", 0], [2, "statusbar-padding", null]], null, null, navbar_ngfactory["b" /* View_Navbar_0 */], navbar_ngfactory["a" /* RenderType_Navbar */])), core["_30" /* ɵdid */](7, 49152, null, 0, navbar["a" /* Navbar */], [app["a" /* App */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */]], null, null), core["_30" /* ɵdid */](8, 212992, null, 0, back_button["a" /* CoreBackButtonDirective */], [navbar["a" /* Navbar */], platform["a" /* Platform */], translate_service["a" /* TranslateService */], events["a" /* CoreEventsProvider */]], null, null), (_l()(), core["_55" /* ɵted */](-1, 3, ["\n        "])), (_l()(), core["_31" /* ɵeld */](10, 0, null, 3, 3, "ion-title", [], null, null, null, toolbar_title_ngfactory["b" /* View_ToolbarTitle_0 */], toolbar_title_ngfactory["a" /* RenderType_ToolbarTitle */])), core["_30" /* ɵdid */](11, 49152, null, 0, toolbar_title["a" /* ToolbarTitle */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, toolbar["a" /* Toolbar */]], [2, navbar["a" /* Navbar */]]], null, null), (_l()(), core["_55" /* ɵted */](12, 0, ["", ""])), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, 3, ["\n    "])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n"])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n"])), (_l()(), core["_31" /* ɵeld */](17, 0, null, null, 47, "core-split-view", [], null, null, null, split_view_ngfactory["b" /* View_CoreSplitViewComponent_0 */], split_view_ngfactory["a" /* RenderType_CoreSplitViewComponent */])), core["_30" /* ɵdid */](18, 245760, [[1, 4]], 0, split_view["a" /* CoreSplitViewComponent */], [[2, nav_controller["a" /* NavController */]], core["t" /* ElementRef */], fileuploader["a" /* CoreFileUploaderProvider */], platform["a" /* Platform */], translate_service["a" /* TranslateService */]], null, null), (_l()(), core["_55" /* ɵted */](-1, 0, ["\n    "])), (_l()(), core["_31" /* ɵeld */](20, 0, null, 0, 43, "ion-content", [], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, content_ngfactory["b" /* View_Content_0 */], content_ngfactory["a" /* RenderType_Content */])), core["_30" /* ɵdid */](21, 4374528, null, 0, content["a" /* Content */], [config["a" /* Config */], platform["a" /* Platform */], dom_controller["a" /* DomController */], core["t" /* ElementRef */], core["V" /* Renderer */], app["a" /* App */], keyboard["a" /* Keyboard */], core["M" /* NgZone */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]]], null, null), (_l()(), core["_55" /* ɵted */](-1, 1, ["\n        "])), (_l()(), core["_31" /* ɵeld */](23, 0, null, 2, 6, "ion-refresher", [], [[2, "refresher-active", null], [4, "top", null]], [[null, "ionRefresh"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("ionRefresh" === en)) {
        var pd_0 = (_co.refreshSessions($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), core["_30" /* ɵdid */](24, 212992, null, 0, refresher["a" /* Refresher */], [platform["a" /* Platform */], content["a" /* Content */], core["M" /* NgZone */], gesture_controller["l" /* GestureController */]], { enabled: [0, "enabled"] }, { ionRefresh: "ionRefresh" }), (_l()(), core["_55" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_31" /* ɵeld */](26, 0, null, null, 2, "ion-refresher-content", [], [[1, "state", 0]], null, null, refresher_content_ngfactory["b" /* View_RefresherContent_0 */], refresher_content_ngfactory["a" /* RenderType_RefresherContent */])), core["_30" /* ɵdid */](27, 114688, null, 0, refresher_content["a" /* RefresherContent */], [refresher["a" /* Refresher */], config["a" /* Config */]], { pullingText: [0, "pullingText"] }, null), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_55" /* ɵted */](-1, 1, ["\n        "])), (_l()(), core["_31" /* ɵeld */](31, 0, null, 1, 31, "core-loading", [], null, null, null, loading_ngfactory["b" /* View_CoreLoadingComponent_0 */], loading_ngfactory["a" /* RenderType_CoreLoadingComponent */])), core["_30" /* ɵdid */](32, 638976, null, 0, loading["a" /* CoreLoadingComponent */], [translate_service["a" /* TranslateService */], core["t" /* ElementRef */], events["a" /* CoreEventsProvider */], utils["a" /* CoreUtilsProvider */]], { hideUntil: [0, "hideUntil"] }, null), (_l()(), core["_55" /* ɵted */](-1, 0, ["\n            "])), (_l()(), core["_26" /* ɵand */](16777216, null, 0, 1, null, View_AddonModChatSessionsPage_1)), core["_30" /* ɵdid */](35, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ɵted */](-1, 0, ["\n            "])), (_l()(), core["_31" /* ɵeld */](37, 0, null, 0, 18, "ion-item", [["class", "item item-block"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_30" /* ɵdid */](38, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_52" /* ɵqud */](335544320, 6, { contentLabel: 0 }), core["_52" /* ɵqud */](603979776, 7, { _buttons: 1 }), core["_52" /* ɵqud */](603979776, 8, { _icons: 1 }), core["_30" /* ɵdid */](42, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_31" /* ɵeld */](44, 0, null, 1, 3, "ion-label", [["id", "addon-chat-showalllabel"]], null, null, null, null, null)), core["_30" /* ɵdid */](45, 16384, [[6, 4]], 0, label["a" /* Label */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [8, null], [8, null], [8, null], [8, null]], { id: [0, "id"] }, null), (_l()(), core["_55" /* ɵted */](46, null, ["", ""])), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_31" /* ɵeld */](49, 0, null, 4, 5, "ion-toggle", [["aria-labelledby", "addon-chat-showalllabel"]], [[2, "toggle-disabled", null], [2, "toggle-checked", null], [2, "toggle-activated", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "ionChange"], [null, "keyup"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("keyup" === en)) {
        var pd_0 = (core["_44" /* ɵnov */](_v, 50)._keyup($event) !== false);
        ad = (pd_0 && ad);
    } if (("ngModelChange" === en)) {
        var pd_1 = ((_co.showAll = $event) !== false);
        ad = (pd_1 && ad);
    } if (("ionChange" === en)) {
        var pd_2 = (_co.fetchSessions(true) !== false);
        ad = (pd_2 && ad);
    } return ad; }, toggle_ngfactory["b" /* View_Toggle_0 */], toggle_ngfactory["a" /* RenderType_Toggle */])), core["_30" /* ɵdid */](50, 1228800, null, 0, toggle["a" /* Toggle */], [util_form["a" /* Form */], config["a" /* Config */], platform["a" /* Platform */], core["t" /* ElementRef */], core["V" /* Renderer */], haptic["a" /* Haptic */], [2, item["a" /* Item */]], gesture_controller["l" /* GestureController */], dom_controller["a" /* DomController */], core["M" /* NgZone */]], null, { ionChange: "ionChange" }), core["_50" /* ɵprd */](1024, null, esm5_forms["l" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [toggle["a" /* Toggle */]]), core["_30" /* ɵdid */](52, 671744, null, 0, esm5_forms["q" /* NgModel */], [[8, null], [8, null], [8, null], [2, esm5_forms["l" /* NG_VALUE_ACCESSOR */]]], { model: [0, "model"] }, { update: "ngModelChange" }), core["_50" /* ɵprd */](2048, null, esm5_forms["m" /* NgControl */], null, [esm5_forms["q" /* NgModel */]]), core["_30" /* ɵdid */](54, 16384, null, 0, esm5_forms["n" /* NgControlStatus */], [esm5_forms["m" /* NgControl */]], null, null), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_55" /* ɵted */](-1, 0, ["\n            "])), (_l()(), core["_26" /* ɵand */](16777216, null, 0, 1, null, View_AddonModChatSessionsPage_5)), core["_30" /* ɵdid */](58, 802816, null, 0, common["j" /* NgForOf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */], core["E" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), core["_55" /* ɵted */](-1, 0, ["\n            "])), (_l()(), core["_26" /* ɵand */](16777216, null, 0, 1, null, View_AddonModChatSessionsPage_10)), core["_30" /* ɵdid */](61, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ɵted */](-1, 0, ["\n        "])), (_l()(), core["_55" /* ɵted */](-1, 1, ["\n    "])), (_l()(), core["_55" /* ɵted */](-1, 0, ["\n"])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; _ck(_v, 8, 0); _ck(_v, 18, 0); var currVal_7 = _co.loaded; _ck(_v, 24, 0, currVal_7); var currVal_9 = core["_34" /* ɵinlineInterpolate */](1, "", core["_56" /* ɵunv */](_v, 27, 0, core["_44" /* ɵnov */](_v, 28).transform("core.pulltorefresh")), ""); _ck(_v, 27, 0, currVal_9); var currVal_10 = _co.loaded; _ck(_v, 32, 0, currVal_10); var currVal_11 = (_co.groupInfo && (_co.groupInfo.separateGroups || _co.groupInfo.visibleGroups)); _ck(_v, 35, 0, currVal_11); var currVal_12 = "addon-chat-showalllabel"; _ck(_v, 45, 0, currVal_12); var currVal_24 = _co.showAll; _ck(_v, 52, 0, currVal_24); var currVal_25 = _co.sessions; _ck(_v, 58, 0, currVal_25); var currVal_26 = (_co.sessions.length == 0); _ck(_v, 61, 0, currVal_26); }, function (_ck, _v) { var currVal_0 = core["_44" /* ɵnov */](_v, 7)._hidden; var currVal_1 = core["_44" /* ɵnov */](_v, 7)._sbPadding; _ck(_v, 6, 0, currVal_0, currVal_1); var currVal_2 = core["_56" /* ɵunv */](_v, 12, 0, core["_44" /* ɵnov */](_v, 13).transform("addon.mod_chat.chatreport")); _ck(_v, 12, 0, currVal_2); var currVal_3 = core["_44" /* ɵnov */](_v, 21).statusbarPadding; var currVal_4 = core["_44" /* ɵnov */](_v, 21)._hasRefresher; _ck(_v, 20, 0, currVal_3, currVal_4); var currVal_5 = (core["_44" /* ɵnov */](_v, 24).state !== "inactive"); var currVal_6 = core["_44" /* ɵnov */](_v, 24)._top; _ck(_v, 23, 0, currVal_5, currVal_6); var currVal_8 = core["_44" /* ɵnov */](_v, 27).r.state; _ck(_v, 26, 0, currVal_8); var currVal_13 = core["_56" /* ɵunv */](_v, 46, 0, core["_44" /* ɵnov */](_v, 47).transform("addon.mod_chat.showincompletesessions")); _ck(_v, 46, 0, currVal_13); var currVal_14 = core["_44" /* ɵnov */](_v, 50)._disabled; var currVal_15 = core["_44" /* ɵnov */](_v, 50)._value; var currVal_16 = core["_44" /* ɵnov */](_v, 50)._activated; var currVal_17 = core["_44" /* ɵnov */](_v, 54).ngClassUntouched; var currVal_18 = core["_44" /* ɵnov */](_v, 54).ngClassTouched; var currVal_19 = core["_44" /* ɵnov */](_v, 54).ngClassPristine; var currVal_20 = core["_44" /* ɵnov */](_v, 54).ngClassDirty; var currVal_21 = core["_44" /* ɵnov */](_v, 54).ngClassValid; var currVal_22 = core["_44" /* ɵnov */](_v, 54).ngClassInvalid; var currVal_23 = core["_44" /* ɵnov */](_v, 54).ngClassPending; _ck(_v, 49, 0, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23); }); }
function View_AddonModChatSessionsPage_Host_0(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 1, "page-addon-mod-chat-sessions", [], null, null, null, View_AddonModChatSessionsPage_0, RenderType_AddonModChatSessionsPage)), core["_30" /* ɵdid */](1, 49152, null, 0, sessions_AddonModChatSessionsPage, [nav_params["a" /* NavParams */], chat["a" /* AddonModChatProvider */], dom["a" /* CoreDomUtilsProvider */], user["a" /* CoreUserProvider */], groups["a" /* CoreGroupsProvider */], translate_service["a" /* TranslateService */], utils["a" /* CoreUtilsProvider */]], null, null)], null, null); }
var AddonModChatSessionsPageNgFactory = core["_27" /* ɵccf */]("page-addon-mod-chat-sessions", sessions_AddonModChatSessionsPage, View_AddonModChatSessionsPage_Host_0, {}, {}, []);

//# sourceMappingURL=sessions.ngfactory.js.map
// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/src/translate.loader.js
var translate_loader = __webpack_require__(361);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/src/translate.compiler.js
var translate_compiler = __webpack_require__(362);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/src/translate.parser.js
var translate_parser = __webpack_require__(364);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/src/missing-translation-handler.js
var missing_translation_handler = __webpack_require__(363);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/src/translate.store.js
var translate_store = __webpack_require__(470);

// EXTERNAL MODULE: ./node_modules/ionic-angular/module.js
var ionic_angular_module = __webpack_require__(712);

// EXTERNAL MODULE: ./src/core/block/components/components.module.ts
var block_components_components_module = __webpack_require__(269);

// EXTERNAL MODULE: ./src/core/course/components/components.module.ts
var course_components_components_module = __webpack_require__(70);

// EXTERNAL MODULE: ./node_modules/ionic-angular/util/module-loader.js
var module_loader = __webpack_require__(268);

// CONCATENATED MODULE: ./src/addon/mod/chat/pages/sessions/sessions.module.ngfactory.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModChatSessionsPageModuleNgFactory", function() { return AddonModChatSessionsPageModuleNgFactory; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 








































var AddonModChatSessionsPageModuleNgFactory = core["_28" /* ɵcmf */](sessions_module_AddonModChatSessionsPageModule, [], function (_l) { return core["_40" /* ɵmod */]([core["_41" /* ɵmpd */](512, core["o" /* ComponentFactoryResolver */], core["_21" /* ɵCodegenComponentFactoryResolver */], [[8, [action_sheet_component_ngfactory["a" /* ActionSheetCmpNgFactory */], alert_component_ngfactory["a" /* AlertCmpNgFactory */], app_root_ngfactory["a" /* IonicAppNgFactory */], loading_component_ngfactory["a" /* LoadingCmpNgFactory */], modal_component_ngfactory["a" /* ModalCmpNgFactory */], picker_component_ngfactory["a" /* PickerCmpNgFactory */], popover_component_ngfactory["a" /* PopoverCmpNgFactory */], select_popover_component_ngfactory["a" /* SelectPopoverNgFactory */], toast_component_ngfactory["a" /* ToastCmpNgFactory */], context_menu_popover_ngfactory["a" /* CoreContextMenuPopoverComponentNgFactory */], course_picker_menu_popover_ngfactory["a" /* CoreCoursePickerMenuPopoverComponentNgFactory */], recaptchamodal_ngfactory["a" /* CoreRecaptchaModalComponentNgFactory */], bs_tooltip_ngfactory["a" /* CoreBSTooltipComponentNgFactory */], only_title_block_ngfactory["a" /* CoreBlockOnlyTitleComponentNgFactory */], pre_rendered_block_ngfactory["a" /* CoreBlockPreRenderedComponentNgFactory */], course_blocks_ngfactory["a" /* CoreBlockCourseBlocksComponentNgFactory */], unsupported_module_ngfactory["a" /* CoreCourseUnsupportedModuleComponentNgFactory */], tag_area_ngfactory["a" /* CoreCourseTagAreaComponentNgFactory */], index_ngfactory["a" /* AddonModChatIndexComponentNgFactory */], AddonModChatSessionsPageNgFactory]], [3, core["o" /* ComponentFactoryResolver */]], core["K" /* NgModuleRef */]]), core["_41" /* ɵmpd */](4608, common["m" /* NgLocalization */], common["l" /* NgLocaleLocalization */], [core["G" /* LOCALE_ID */], [2, common["w" /* ɵa */]]]), core["_41" /* ɵmpd */](4608, esm5_forms["x" /* ɵi */], esm5_forms["x" /* ɵi */], []), core["_41" /* ɵmpd */](4608, esm5_forms["d" /* FormBuilder */], esm5_forms["d" /* FormBuilder */], []), core["_41" /* ɵmpd */](4608, translate_loader["b" /* TranslateLoader */], translate_loader["a" /* TranslateFakeLoader */], []), core["_41" /* ɵmpd */](4608, translate_compiler["a" /* TranslateCompiler */], translate_compiler["b" /* TranslateFakeCompiler */], []), core["_41" /* ɵmpd */](4608, translate_parser["b" /* TranslateParser */], translate_parser["a" /* TranslateDefaultParser */], []), core["_41" /* ɵmpd */](4608, missing_translation_handler["b" /* MissingTranslationHandler */], missing_translation_handler["a" /* FakeMissingTranslationHandler */], []), core["_41" /* ɵmpd */](4608, translate_service["a" /* TranslateService */], translate_service["a" /* TranslateService */], [translate_store["a" /* TranslateStore */], translate_loader["b" /* TranslateLoader */], translate_compiler["a" /* TranslateCompiler */], translate_parser["b" /* TranslateParser */], missing_translation_handler["b" /* MissingTranslationHandler */], translate_service["b" /* USE_DEFAULT_LANG */], translate_service["c" /* USE_STORE */]]), core["_41" /* ɵmpd */](512, common["b" /* CommonModule */], common["b" /* CommonModule */], []), core["_41" /* ɵmpd */](512, esm5_forms["v" /* ɵba */], esm5_forms["v" /* ɵba */], []), core["_41" /* ɵmpd */](512, esm5_forms["i" /* FormsModule */], esm5_forms["i" /* FormsModule */], []), core["_41" /* ɵmpd */](512, esm5_forms["s" /* ReactiveFormsModule */], esm5_forms["s" /* ReactiveFormsModule */], []), core["_41" /* ɵmpd */](512, ionic_angular_module["a" /* IonicModule */], ionic_angular_module["a" /* IonicModule */], []), core["_41" /* ɵmpd */](512, _ngx_translate_core["b" /* TranslateModule */], _ngx_translate_core["b" /* TranslateModule */], []), core["_41" /* ɵmpd */](512, directives_module["a" /* CoreDirectivesModule */], directives_module["a" /* CoreDirectivesModule */], []), core["_41" /* ɵmpd */](512, pipes_module["a" /* CorePipesModule */], pipes_module["a" /* CorePipesModule */], []), core["_41" /* ɵmpd */](512, components_module["a" /* CoreComponentsModule */], components_module["a" /* CoreComponentsModule */], []), core["_41" /* ɵmpd */](512, block_components_components_module["a" /* CoreBlockComponentsModule */], block_components_components_module["a" /* CoreBlockComponentsModule */], []), core["_41" /* ɵmpd */](512, course_components_components_module["a" /* CoreCourseComponentsModule */], course_components_components_module["a" /* CoreCourseComponentsModule */], []), core["_41" /* ɵmpd */](512, components_components_module["a" /* AddonModChatComponentsModule */], components_components_module["a" /* AddonModChatComponentsModule */], []), core["_41" /* ɵmpd */](512, ionic_angular_module["b" /* IonicPageModule */], ionic_angular_module["b" /* IonicPageModule */], []), core["_41" /* ɵmpd */](512, sessions_module_AddonModChatSessionsPageModule, sessions_module_AddonModChatSessionsPageModule, []), core["_41" /* ɵmpd */](256, translate_service["c" /* USE_STORE */], undefined, []), core["_41" /* ɵmpd */](256, translate_service["b" /* USE_DEFAULT_LANG */], undefined, []), core["_41" /* ɵmpd */](256, module_loader["a" /* LAZY_LOADED_TOKEN */], sessions_AddonModChatSessionsPage, [])]); });

//# sourceMappingURL=sessions.module.ngfactory.js.map

/***/ })

});
//# sourceMappingURL=114.js.map