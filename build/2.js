webpackJsonp([2],{

/***/ 1978:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/@angular/core/esm5/core.js
var core = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/ionic-angular/index.js + 3 modules
var ionic_angular = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/index.js + 1 modules
var _ngx_translate_core = __webpack_require__(3);

// EXTERNAL MODULE: ./src/providers/events.ts
var events = __webpack_require__(11);

// EXTERNAL MODULE: ./src/providers/sites.ts
var sites = __webpack_require__(1);

// EXTERNAL MODULE: ./src/addon/messages/providers/messages.ts
var messages = __webpack_require__(153);

// EXTERNAL MODULE: ./src/components/split-view/split-view.ts
var split_view = __webpack_require__(25);

// EXTERNAL MODULE: ./src/components/tabs/tabs.ts
var tabs = __webpack_require__(173);

// CONCATENATED MODULE: ./src/addon/messages/pages/index/index.ts
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
 * Page that displays the messages index page.
 */
var index_AddonMessagesIndexPage = /** @class */ (function () {
    function AddonMessagesIndexPage(eventsProvider, sitesProvider) {
        var _this = this;
        this.siteId = sitesProvider.getCurrentSiteId();
        // Update split view or navigate.
        this.loadSplitViewObserver = eventsProvider.on(messages["a" /* AddonMessagesProvider */].SPLIT_VIEW_LOAD_EVENT, function (data) {
            if (data.discussion && (_this.splitviewCtrl.isOn() || !data.onlyWithSplitView)) {
                _this.gotoDiscussion(data.discussion, data.message);
            }
        }, this.siteId);
    }
    /**
     * Navigate to a particular discussion.
     *
     * @param {number} discussionUserId Discussion Id to load.
     * @param {number} [messageId]      Message to scroll after loading the discussion. Used when searching.
     */
    AddonMessagesIndexPage.prototype.gotoDiscussion = function (discussionUserId, messageId) {
        var params = {
            userId: discussionUserId
        };
        if (messageId) {
            params['message'] = messageId;
        }
        this.splitviewCtrl.push('AddonMessagesDiscussionPage', params);
    };
    /**
     * User entered the page.
     */
    AddonMessagesIndexPage.prototype.ionViewDidEnter = function () {
        this.tabsComponent && this.tabsComponent.ionViewDidEnter();
    };
    /**
     * User left the page.
     */
    AddonMessagesIndexPage.prototype.ionViewDidLeave = function () {
        this.tabsComponent && this.tabsComponent.ionViewDidLeave();
    };
    /**
     * Page destroyed.
     */
    AddonMessagesIndexPage.prototype.ngOnDestroy = function () {
        this.loadSplitViewObserver && this.loadSplitViewObserver.off();
    };
    __decorate([
        Object(core["_9" /* ViewChild */])(split_view["a" /* CoreSplitViewComponent */]),
        __metadata("design:type", split_view["a" /* CoreSplitViewComponent */])
    ], AddonMessagesIndexPage.prototype, "splitviewCtrl", void 0);
    __decorate([
        Object(core["_9" /* ViewChild */])(tabs["a" /* CoreTabsComponent */]),
        __metadata("design:type", tabs["a" /* CoreTabsComponent */])
    ], AddonMessagesIndexPage.prototype, "tabsComponent", void 0);
    AddonMessagesIndexPage = __decorate([
        Object(core["m" /* Component */])({
            selector: 'page-addon-messages-index',
            templateUrl: 'index.html',
        }),
        __metadata("design:paramtypes", [events["a" /* CoreEventsProvider */], sites["a" /* CoreSitesProvider */]])
    ], AddonMessagesIndexPage);
    return AddonMessagesIndexPage;
}());

//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ./src/components/components.module.ts
var components_module = __webpack_require__(29);

// EXTERNAL MODULE: ./src/directives/directives.module.ts + 2 modules
var directives_module = __webpack_require__(31);

// EXTERNAL MODULE: ./src/addon/messages/components/components.module.ts
var components_components_module = __webpack_require__(2103);

// CONCATENATED MODULE: ./src/addon/messages/pages/index/index.module.ts
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
var index_module___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var index_module_AddonMessagesIndexPageModule = /** @class */ (function () {
    function AddonMessagesIndexPageModule() {
    }
    AddonMessagesIndexPageModule = index_module___decorate([
        Object(core["I" /* NgModule */])({
            declarations: [
                index_AddonMessagesIndexPage,
            ],
            imports: [
                components_module["a" /* CoreComponentsModule */],
                directives_module["a" /* CoreDirectivesModule */],
                components_components_module["a" /* AddonMessagesComponentsModule */],
                ionic_angular["l" /* IonicPageModule */].forChild(index_AddonMessagesIndexPage),
                _ngx_translate_core["b" /* TranslateModule */].forChild()
            ],
        })
    ], AddonMessagesIndexPageModule);
    return AddonMessagesIndexPageModule;
}());

//# sourceMappingURL=index.module.js.map
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

// EXTERNAL MODULE: ./src/components/search-box/search-box.ngfactory.js
var search_box_ngfactory = __webpack_require__(1500);

// EXTERNAL MODULE: ./src/components/search-box/search-box.ts
var search_box = __webpack_require__(485);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/src/translate.service.js
var translate_service = __webpack_require__(18);

// EXTERNAL MODULE: ./src/providers/utils/utils.ts
var utils = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/src/translate.pipe.js
var translate_pipe = __webpack_require__(27);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/item/item.ngfactory.js + 1 modules
var item_ngfactory = __webpack_require__(30);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/item/item.js
var item = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/ionic-angular/util/form.js
var util_form = __webpack_require__(20);

// EXTERNAL MODULE: ./node_modules/ionic-angular/config/config.js
var config = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/item/item-reorder.js + 1 modules
var item_reorder = __webpack_require__(28);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/item/item-content.js
var item_content = __webpack_require__(32);

// EXTERNAL MODULE: ./src/components/user-avatar/user-avatar.ngfactory.js
var user_avatar_ngfactory = __webpack_require__(211);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/avatar/avatar.js
var avatar = __webpack_require__(152);

// EXTERNAL MODULE: ./src/components/user-avatar/user-avatar.ts
var user_avatar = __webpack_require__(179);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/nav-controller.js
var nav_controller = __webpack_require__(19);

// EXTERNAL MODULE: ./src/providers/app.ts
var app = __webpack_require__(9);

// EXTERNAL MODULE: ./src/directives/format-text.ts
var format_text = __webpack_require__(41);

// EXTERNAL MODULE: ./src/providers/utils/dom.ts
var dom = __webpack_require__(4);

// EXTERNAL MODULE: ./src/providers/utils/text.ts
var utils_text = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/platform.js + 1 modules
var platform = __webpack_require__(16);

// EXTERNAL MODULE: ./src/providers/utils/url.ts
var url = __webpack_require__(23);

// EXTERNAL MODULE: ./src/providers/logger.ts
var logger = __webpack_require__(5);

// EXTERNAL MODULE: ./src/providers/filepool.ts
var filepool = __webpack_require__(17);

// EXTERNAL MODULE: ./src/core/contentlinks/providers/helper.ts
var helper = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/content/content.js
var content = __webpack_require__(26);

// EXTERNAL MODULE: ./src/providers/utils/iframe.ts
var iframe = __webpack_require__(37);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/list/list.js + 1 modules
var list = __webpack_require__(82);

// EXTERNAL MODULE: ./node_modules/ionic-angular/gestures/gesture-controller.js
var gesture_controller = __webpack_require__(39);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/dom-controller.js
var dom_controller = __webpack_require__(33);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/item/item-divider.js
var item_divider = __webpack_require__(93);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/note/note.js
var note = __webpack_require__(223);

// EXTERNAL MODULE: ./node_modules/@angular/common/esm5/common.js
var common = __webpack_require__(8);

// EXTERNAL MODULE: ./src/components/empty-box/empty-box.ngfactory.js
var empty_box_ngfactory = __webpack_require__(121);

// EXTERNAL MODULE: ./src/components/empty-box/empty-box.ts
var empty_box = __webpack_require__(110);

// EXTERNAL MODULE: ./src/pipes/date-day-or-time.ts
var date_day_or_time = __webpack_require__(309);

// EXTERNAL MODULE: ./src/providers/utils/time.ts
var time = __webpack_require__(24);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/content/content.ngfactory.js
var content_ngfactory = __webpack_require__(178);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/app/app.js + 3 modules
var app_app = __webpack_require__(34);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/keyboard.js
var keyboard = __webpack_require__(101);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/view-controller.js
var view_controller = __webpack_require__(38);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/refresher/refresher.js
var refresher = __webpack_require__(151);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/refresher/refresher-content.ngfactory.js
var refresher_content_ngfactory = __webpack_require__(210);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/refresher/refresher-content.js
var refresher_content = __webpack_require__(168);

// EXTERNAL MODULE: ./src/components/loading/loading.ngfactory.js
var loading_ngfactory = __webpack_require__(50);

// EXTERNAL MODULE: ./src/components/loading/loading.ts
var loading = __webpack_require__(47);

// EXTERNAL MODULE: ./src/addon/messages/components/discussions/discussions.ts
var discussions = __webpack_require__(2104);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/nav-params.js
var nav_params = __webpack_require__(71);

// EXTERNAL MODULE: ./src/core/pushnotifications/providers/delegate.ts
var delegate = __webpack_require__(136);

// CONCATENATED MODULE: ./src/addon/messages/components/discussions/discussions.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 





















































var styles_AddonMessagesDiscussionsComponent = [];
var RenderType_AddonMessagesDiscussionsComponent = core["_29" /* ɵcrt */]({ encapsulation: 2, styles: styles_AddonMessagesDiscussionsComponent, data: {} });

function View_AddonMessagesDiscussionsComponent_1(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 2, "core-search-box", [["autocorrect", "off"], ["lengthCheck", "2"], ["spellcheck", "false"]], null, [[null, "onSubmit"], [null, "onClear"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("onSubmit" === en)) {
        var pd_0 = (_co.searchMessage($event) !== false);
        ad = (pd_0 && ad);
    } if (("onClear" === en)) {
        var pd_1 = (_co.clearSearch($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, search_box_ngfactory["b" /* View_CoreSearchBoxComponent_0 */], search_box_ngfactory["a" /* RenderType_CoreSearchBoxComponent */])), core["_30" /* ɵdid */](1, 114688, null, 0, search_box["a" /* CoreSearchBoxComponent */], [translate_service["a" /* TranslateService */], utils["a" /* CoreUtilsProvider */]], { placeholder: [0, "placeholder"], autocorrect: [1, "autocorrect"], spellcheck: [2, "spellcheck"], lengthCheck: [3, "lengthCheck"], disabled: [4, "disabled"] }, { onSubmit: "onSubmit", onClear: "onClear" }), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]])], function (_ck, _v) { var _co = _v.component; var currVal_0 = core["_56" /* ɵunv */](_v, 1, 0, core["_44" /* ɵnov */](_v, 2).transform("addon.messages.message")); var currVal_1 = "off"; var currVal_2 = "false"; var currVal_3 = "2"; var currVal_4 = !_co.loaded; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4); }, null); }
function View_AddonMessagesDiscussionsComponent_3(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 18, "a", [["class", "addon-message-discussion item item-block"], ["ion-item", ""], ["text-wrap", ""]], [[8, "title", 0], [2, "core-split-item-selected", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.gotoDiscussion(_v.context.$implicit.userid, _v.context.$implicit.messageid) !== false);
        ad = (pd_0 && ad);
    } return ad; }, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_30" /* ɵdid */](1, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_52" /* ɵqud */](335544320, 4, { contentLabel: 0 }), core["_52" /* ɵqud */](603979776, 5, { _buttons: 1 }), core["_52" /* ɵqud */](603979776, 6, { _icons: 1 }), core["_30" /* ɵdid */](5, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_31" /* ɵeld */](7, 0, null, 0, 2, "ion-avatar", [["core-user-avatar", ""], ["item-start", ""]], null, null, null, user_avatar_ngfactory["b" /* View_CoreUserAvatarComponent_0 */], user_avatar_ngfactory["a" /* RenderType_CoreUserAvatarComponent */])), core["_30" /* ɵdid */](8, 16384, null, 0, avatar["a" /* Avatar */], [], null, null), core["_30" /* ɵdid */](9, 770048, null, 0, user_avatar["a" /* CoreUserAvatarComponent */], [nav_controller["a" /* NavController */], sites["a" /* CoreSitesProvider */], utils["a" /* CoreUtilsProvider */], app["a" /* CoreAppProvider */], events["a" /* CoreEventsProvider */], [2, split_view["a" /* CoreSplitViewComponent */]]], { user: [0, "user"], checkOnline: [1, "checkOnline"] }, null), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_31" /* ɵeld */](11, 0, null, 2, 2, "h2", [], null, null, null, null, null)), (_l()(), core["_31" /* ɵeld */](12, 0, null, null, 1, "core-format-text", [], null, null, null, null, null)), core["_30" /* ɵdid */](13, 540672, null, 0, format_text["a" /* CoreFormatTextDirective */], [core["t" /* ElementRef */], sites["a" /* CoreSitesProvider */], dom["a" /* CoreDomUtilsProvider */], utils_text["a" /* CoreTextUtilsProvider */], translate_service["a" /* TranslateService */], platform["a" /* Platform */], utils["a" /* CoreUtilsProvider */], url["a" /* CoreUrlUtilsProvider */], logger["a" /* CoreLoggerProvider */], filepool["a" /* CoreFilepoolProvider */], app["a" /* CoreAppProvider */], helper["a" /* CoreContentLinksHelperProvider */], [2, nav_controller["a" /* NavController */]], [2, content["a" /* Content */]], [2, split_view["a" /* CoreSplitViewComponent */]], iframe["a" /* CoreIframeUtilsProvider */], events["a" /* CoreEventsProvider */]], { text: [0, "text"] }, null), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_31" /* ɵeld */](15, 0, null, 2, 2, "p", [], null, null, null, null, null)), (_l()(), core["_31" /* ɵeld */](16, 0, null, null, 1, "core-format-text", [["clean", "true"], ["singleLine", "true"]], null, null, null, null, null)), core["_30" /* ɵdid */](17, 540672, null, 0, format_text["a" /* CoreFormatTextDirective */], [core["t" /* ElementRef */], sites["a" /* CoreSitesProvider */], dom["a" /* CoreDomUtilsProvider */], utils_text["a" /* CoreTextUtilsProvider */], translate_service["a" /* TranslateService */], platform["a" /* Platform */], utils["a" /* CoreUtilsProvider */], url["a" /* CoreUrlUtilsProvider */], logger["a" /* CoreLoggerProvider */], filepool["a" /* CoreFilepoolProvider */], app["a" /* CoreAppProvider */], helper["a" /* CoreContentLinksHelperProvider */], [2, nav_controller["a" /* NavController */]], [2, content["a" /* Content */]], [2, split_view["a" /* CoreSplitViewComponent */]], iframe["a" /* CoreIframeUtilsProvider */], events["a" /* CoreEventsProvider */]], { text: [0, "text"], clean: [1, "clean"], singleLine: [2, "singleLine"] }, null), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n            "]))], function (_ck, _v) { var currVal_2 = _v.context.$implicit; var currVal_3 = _v.context.$implicit.showonlinestatus; _ck(_v, 9, 0, currVal_2, currVal_3); var currVal_4 = _v.context.$implicit.fullname; _ck(_v, 13, 0, currVal_4); var currVal_5 = _v.context.$implicit.lastmessage; var currVal_6 = "true"; var currVal_7 = "true"; _ck(_v, 17, 0, currVal_5, currVal_6, currVal_7); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _v.context.$implicit.fullname; var currVal_1 = (_v.context.$implicit.userid == _co.discussionUserId); _ck(_v, 0, 0, currVal_0, currVal_1); }); }
function View_AddonMessagesDiscussionsComponent_2(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 21, "ion-list", [["no-margin", ""]], null, null, null, null, null)), core["_30" /* ɵdid */](1, 16384, null, 0, list["a" /* List */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], platform["a" /* Platform */], gesture_controller["l" /* GestureController */], dom_controller["a" /* DomController */]], null, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_31" /* ɵeld */](3, 0, null, null, 14, "ion-item-divider", [["class", "item item-divider"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_30" /* ɵdid */](4, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_52" /* ɵqud */](335544320, 1, { contentLabel: 0 }), core["_52" /* ɵqud */](603979776, 2, { _buttons: 1 }), core["_52" /* ɵqud */](603979776, 3, { _icons: 1 }), core["_30" /* ɵdid */](8, 16384, null, 0, item_divider["a" /* ItemDivider */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */]], null, null), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_31" /* ɵeld */](10, 0, null, 2, 2, "h2", [], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](11, null, ["", ""])), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_31" /* ɵeld */](14, 0, null, 4, 2, "ion-note", [["item-end", ""]], null, null, null, null, null)), core["_30" /* ɵdid */](15, 16384, null, 0, note["a" /* Note */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */]], null, null), (_l()(), core["_55" /* ɵted */](16, null, ["", ""])), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_26" /* ɵand */](16777216, null, null, 1, null, View_AddonMessagesDiscussionsComponent_3)), core["_30" /* ɵdid */](20, 802816, null, 0, common["j" /* NgForOf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */], core["E" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n        "]))], function (_ck, _v) { var _co = _v.component; var currVal_2 = _co.search.results; _ck(_v, 20, 0, currVal_2); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = core["_56" /* ɵunv */](_v, 11, 0, core["_44" /* ɵnov */](_v, 12).transform("core.searchresults")); _ck(_v, 11, 0, currVal_0); var currVal_1 = _co.search.results.length; _ck(_v, 16, 0, currVal_1); }); }
function View_AddonMessagesDiscussionsComponent_7(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 0, "span", [["class", "core-primary-circle"]], null, null, null, null, null))], null, null); }
function View_AddonMessagesDiscussionsComponent_8(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](1, null, ["", ""])), core["_49" /* ɵppd */](2, 1)], null, function (_ck, _v) { var currVal_0 = core["_56" /* ɵunv */](_v, 1, 0, _ck(_v, 2, 0, core["_44" /* ɵnov */](_v.parent.parent.parent.parent, 0), (_v.parent.parent.context.$implicit.message.timecreated / 1000))); _ck(_v, 1, 0, currVal_0); }); }
function View_AddonMessagesDiscussionsComponent_6(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 8, "ion-note", [], null, null, null, null, null)), core["_30" /* ɵdid */](1, 16384, null, 0, note["a" /* Note */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */]], null, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                    "])), (_l()(), core["_26" /* ɵand */](16777216, null, null, 1, null, View_AddonMessagesDiscussionsComponent_7)), core["_30" /* ɵdid */](4, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                    "])), (_l()(), core["_26" /* ɵand */](16777216, null, null, 1, null, View_AddonMessagesDiscussionsComponent_8)), core["_30" /* ɵdid */](7, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                "]))], function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit.unread; _ck(_v, 4, 0, currVal_0); var currVal_1 = (_v.parent.context.$implicit.message.timecreated > 0); _ck(_v, 7, 0, currVal_1); }, null); }
function View_AddonMessagesDiscussionsComponent_5(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 23, "a", [["class", "addon-message-discussion item item-block"], ["ion-item", ""], ["text-wrap", ""]], [[8, "title", 0], [2, "core-split-item-selected", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.gotoDiscussion(_v.context.$implicit.message.user) !== false);
        ad = (pd_0 && ad);
    } return ad; }, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_30" /* ɵdid */](1, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_52" /* ɵqud */](335544320, 7, { contentLabel: 0 }), core["_52" /* ɵqud */](603979776, 8, { _buttons: 1 }), core["_52" /* ɵqud */](603979776, 9, { _icons: 1 }), core["_30" /* ɵdid */](5, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_31" /* ɵeld */](7, 0, null, 0, 2, "ion-avatar", [["core-user-avatar", ""], ["item-start", ""]], null, null, null, user_avatar_ngfactory["b" /* View_CoreUserAvatarComponent_0 */], user_avatar_ngfactory["a" /* RenderType_CoreUserAvatarComponent */])), core["_30" /* ɵdid */](8, 16384, null, 0, avatar["a" /* Avatar */], [], null, null), core["_30" /* ɵdid */](9, 770048, null, 0, user_avatar["a" /* CoreUserAvatarComponent */], [nav_controller["a" /* NavController */], sites["a" /* CoreSitesProvider */], utils["a" /* CoreUtilsProvider */], app["a" /* CoreAppProvider */], events["a" /* CoreEventsProvider */], [2, split_view["a" /* CoreSplitViewComponent */]]], { user: [0, "user"], checkOnline: [1, "checkOnline"] }, null), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_31" /* ɵeld */](11, 0, null, 2, 4, "h2", [], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                    "])), (_l()(), core["_31" /* ɵeld */](13, 0, null, null, 1, "core-format-text", [], null, null, null, null, null)), core["_30" /* ɵdid */](14, 540672, null, 0, format_text["a" /* CoreFormatTextDirective */], [core["t" /* ElementRef */], sites["a" /* CoreSitesProvider */], dom["a" /* CoreDomUtilsProvider */], utils_text["a" /* CoreTextUtilsProvider */], translate_service["a" /* TranslateService */], platform["a" /* Platform */], utils["a" /* CoreUtilsProvider */], url["a" /* CoreUrlUtilsProvider */], logger["a" /* CoreLoggerProvider */], filepool["a" /* CoreFilepoolProvider */], app["a" /* CoreAppProvider */], helper["a" /* CoreContentLinksHelperProvider */], [2, nav_controller["a" /* NavController */]], [2, content["a" /* Content */]], [2, split_view["a" /* CoreSplitViewComponent */]], iframe["a" /* CoreIframeUtilsProvider */], events["a" /* CoreEventsProvider */]], { text: [0, "text"] }, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_26" /* ɵand */](16777216, null, 2, 1, null, View_AddonMessagesDiscussionsComponent_6)), core["_30" /* ɵdid */](18, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_31" /* ɵeld */](20, 0, null, 2, 2, "p", [], null, null, null, null, null)), (_l()(), core["_31" /* ɵeld */](21, 0, null, null, 1, "core-format-text", [["clean", "true"], ["singleLine", "true"]], null, null, null, null, null)), core["_30" /* ɵdid */](22, 540672, null, 0, format_text["a" /* CoreFormatTextDirective */], [core["t" /* ElementRef */], sites["a" /* CoreSitesProvider */], dom["a" /* CoreDomUtilsProvider */], utils_text["a" /* CoreTextUtilsProvider */], translate_service["a" /* TranslateService */], platform["a" /* Platform */], utils["a" /* CoreUtilsProvider */], url["a" /* CoreUrlUtilsProvider */], logger["a" /* CoreLoggerProvider */], filepool["a" /* CoreFilepoolProvider */], app["a" /* CoreAppProvider */], helper["a" /* CoreContentLinksHelperProvider */], [2, nav_controller["a" /* NavController */]], [2, content["a" /* Content */]], [2, split_view["a" /* CoreSplitViewComponent */]], iframe["a" /* CoreIframeUtilsProvider */], events["a" /* CoreEventsProvider */]], { text: [0, "text"], clean: [1, "clean"], singleLine: [2, "singleLine"] }, null), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n            "]))], function (_ck, _v) { var currVal_2 = _v.context.$implicit; var currVal_3 = _v.context.$implicit.showonlinestatus; _ck(_v, 9, 0, currVal_2, currVal_3); var currVal_4 = _v.context.$implicit.fullname; _ck(_v, 14, 0, currVal_4); var currVal_5 = ((_v.context.$implicit.message.timecreated > 0) || _v.context.$implicit.unread); _ck(_v, 18, 0, currVal_5); var currVal_6 = _v.context.$implicit.message.message; var currVal_7 = "true"; var currVal_8 = "true"; _ck(_v, 22, 0, currVal_6, currVal_7, currVal_8); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _v.context.$implicit.fullname; var currVal_1 = (_v.context.$implicit.message.user == _co.discussionUserId); _ck(_v, 0, 0, currVal_0, currVal_1); }); }
function View_AddonMessagesDiscussionsComponent_4(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 5, "ion-list", [["no-margin", ""]], null, null, null, null, null)), core["_30" /* ɵdid */](1, 16384, null, 0, list["a" /* List */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], platform["a" /* Platform */], gesture_controller["l" /* GestureController */], dom_controller["a" /* DomController */]], null, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_26" /* ɵand */](16777216, null, null, 1, null, View_AddonMessagesDiscussionsComponent_5)), core["_30" /* ɵdid */](4, 802816, null, 0, common["j" /* NgForOf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */], core["E" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n        "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.discussions; _ck(_v, 4, 0, currVal_0); }, null); }
function View_AddonMessagesDiscussionsComponent_9(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 2, "core-empty-box", [["icon", "chatbubbles"]], null, null, null, empty_box_ngfactory["b" /* View_CoreEmptyBoxComponent_0 */], empty_box_ngfactory["a" /* RenderType_CoreEmptyBoxComponent */])), core["_30" /* ɵdid */](1, 49152, null, 0, empty_box["a" /* CoreEmptyBoxComponent */], [], { message: [0, "message"], icon: [1, "icon"] }, null), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]])], function (_ck, _v) { var currVal_0 = core["_56" /* ɵunv */](_v, 1, 0, core["_44" /* ɵnov */](_v, 2).transform("addon.messages.nomessagesfound")); var currVal_1 = "chatbubbles"; _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_AddonMessagesDiscussionsComponent_10(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 2, "core-empty-box", [["icon", "search"]], null, null, null, empty_box_ngfactory["b" /* View_CoreEmptyBoxComponent_0 */], empty_box_ngfactory["a" /* RenderType_CoreEmptyBoxComponent */])), core["_30" /* ɵdid */](1, 49152, null, 0, empty_box["a" /* CoreEmptyBoxComponent */], [], { message: [0, "message"], icon: [1, "icon"] }, null), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]])], function (_ck, _v) { var currVal_0 = core["_56" /* ɵunv */](_v, 1, 0, core["_44" /* ɵnov */](_v, 2).transform("core.noresults")); var currVal_1 = "search"; _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_AddonMessagesDiscussionsComponent_0(_l) { return core["_57" /* ɵvid */](0, [core["_47" /* ɵpid */](0, date_day_or_time["a" /* CoreDateDayOrTimePipe */], [logger["a" /* CoreLoggerProvider */], translate_service["a" /* TranslateService */], time["a" /* CoreTimeUtilsProvider */]]), (_l()(), core["_31" /* ɵeld */](1, 0, null, null, 29, "ion-content", [], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, content_ngfactory["b" /* View_Content_0 */], content_ngfactory["a" /* RenderType_Content */])), core["_30" /* ɵdid */](2, 4374528, null, 0, content["a" /* Content */], [config["a" /* Config */], platform["a" /* Platform */], dom_controller["a" /* DomController */], core["t" /* ElementRef */], core["V" /* Renderer */], app_app["a" /* App */], keyboard["a" /* Keyboard */], core["M" /* NgZone */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]]], null, null), (_l()(), core["_55" /* ɵted */](-1, 1, ["\n    "])), (_l()(), core["_31" /* ɵeld */](4, 0, null, 2, 6, "ion-refresher", [], [[2, "refresher-active", null], [4, "top", null]], [[null, "ionRefresh"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("ionRefresh" === en)) {
        var pd_0 = (_co.refreshData($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), core["_30" /* ɵdid */](5, 212992, null, 0, refresher["a" /* Refresher */], [platform["a" /* Platform */], content["a" /* Content */], core["M" /* NgZone */], gesture_controller["l" /* GestureController */]], { enabled: [0, "enabled"] }, { ionRefresh: "ionRefresh" }), (_l()(), core["_55" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_31" /* ɵeld */](7, 0, null, null, 2, "ion-refresher-content", [], [[1, "state", 0]], null, null, refresher_content_ngfactory["b" /* View_RefresherContent_0 */], refresher_content_ngfactory["a" /* RenderType_RefresherContent */])), core["_30" /* ɵdid */](8, 114688, null, 0, refresher_content["a" /* RefresherContent */], [refresher["a" /* Refresher */], config["a" /* Config */]], { pullingText: [0, "pullingText"] }, null), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["_55" /* ɵted */](-1, 1, ["\n\n    "])), (_l()(), core["_26" /* ɵand */](16777216, null, 1, 1, null, View_AddonMessagesDiscussionsComponent_1)), core["_30" /* ɵdid */](13, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ɵted */](-1, 1, ["\n\n    "])), (_l()(), core["_31" /* ɵeld */](15, 0, null, 1, 14, "core-loading", [], null, null, null, loading_ngfactory["b" /* View_CoreLoadingComponent_0 */], loading_ngfactory["a" /* RenderType_CoreLoadingComponent */])), core["_30" /* ɵdid */](16, 638976, null, 0, loading["a" /* CoreLoadingComponent */], [translate_service["a" /* TranslateService */], core["t" /* ElementRef */], events["a" /* CoreEventsProvider */], utils["a" /* CoreUtilsProvider */]], { hideUntil: [0, "hideUntil"], message: [1, "message"] }, null), (_l()(), core["_55" /* ɵted */](-1, 0, ["\n\n        "])), (_l()(), core["_26" /* ɵand */](16777216, null, 0, 1, null, View_AddonMessagesDiscussionsComponent_2)), core["_30" /* ɵdid */](19, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ɵted */](-1, 0, ["\n\n        "])), (_l()(), core["_26" /* ɵand */](16777216, null, 0, 1, null, View_AddonMessagesDiscussionsComponent_4)), core["_30" /* ɵdid */](22, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ɵted */](-1, 0, ["\n\n        "])), (_l()(), core["_26" /* ɵand */](16777216, null, 0, 1, null, View_AddonMessagesDiscussionsComponent_9)), core["_30" /* ɵdid */](25, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ɵted */](-1, 0, ["\n\n        "])), (_l()(), core["_26" /* ɵand */](16777216, null, 0, 1, null, View_AddonMessagesDiscussionsComponent_10)), core["_30" /* ɵdid */](28, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ɵted */](-1, 0, ["\n    "])), (_l()(), core["_55" /* ɵted */](-1, 1, ["\n"])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_4 = _co.loaded; _ck(_v, 5, 0, currVal_4); var currVal_6 = core["_34" /* ɵinlineInterpolate */](1, "", core["_56" /* ɵunv */](_v, 8, 0, core["_44" /* ɵnov */](_v, 9).transform("core.pulltorefresh")), ""); _ck(_v, 8, 0, currVal_6); var currVal_7 = _co.search.enabled; _ck(_v, 13, 0, currVal_7); var currVal_8 = _co.loaded; var currVal_9 = _co.loadingMessage; _ck(_v, 16, 0, currVal_8, currVal_9); var currVal_10 = _co.search.showResults; _ck(_v, 19, 0, currVal_10); var currVal_11 = !_co.search.showResults; _ck(_v, 22, 0, currVal_11); var currVal_12 = ((!_co.discussions || (_co.discussions.length <= 0)) && !_co.search.showResults); _ck(_v, 25, 0, currVal_12); var currVal_13 = ((!_co.search.results || (_co.search.results.length <= 0)) && _co.search.showResults); _ck(_v, 28, 0, currVal_13); }, function (_ck, _v) { var currVal_0 = core["_44" /* ɵnov */](_v, 2).statusbarPadding; var currVal_1 = core["_44" /* ɵnov */](_v, 2)._hasRefresher; _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_2 = (core["_44" /* ɵnov */](_v, 5).state !== "inactive"); var currVal_3 = core["_44" /* ɵnov */](_v, 5)._top; _ck(_v, 4, 0, currVal_2, currVal_3); var currVal_5 = core["_44" /* ɵnov */](_v, 8).r.state; _ck(_v, 7, 0, currVal_5); }); }
function View_AddonMessagesDiscussionsComponent_Host_0(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 1, "addon-messages-discussions", [], null, null, null, View_AddonMessagesDiscussionsComponent_0, RenderType_AddonMessagesDiscussionsComponent)), core["_30" /* ɵdid */](1, 245760, null, 0, discussions["a" /* AddonMessagesDiscussionsComponent */], [events["a" /* CoreEventsProvider */], sites["a" /* CoreSitesProvider */], translate_service["a" /* TranslateService */], messages["a" /* AddonMessagesProvider */], dom["a" /* CoreDomUtilsProvider */], nav_params["a" /* NavParams */], app["a" /* CoreAppProvider */], platform["a" /* Platform */], utils["a" /* CoreUtilsProvider */], delegate["a" /* CorePushNotificationsDelegate */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var AddonMessagesDiscussionsComponentNgFactory = core["_27" /* ɵccf */]("addon-messages-discussions", discussions["a" /* AddonMessagesDiscussionsComponent */], View_AddonMessagesDiscussionsComponent_Host_0, {}, {}, []);

//# sourceMappingURL=discussions.ngfactory.js.map
// EXTERNAL MODULE: ./src/addon/messages/components/contacts/contacts.ts
var contacts = __webpack_require__(2107);

// CONCATENATED MODULE: ./src/addon/messages/components/contacts/contacts.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 


















































var styles_AddonMessagesContactsComponent = [];
var RenderType_AddonMessagesContactsComponent = core["_29" /* ɵcrt */]({ encapsulation: 2, styles: styles_AddonMessagesContactsComponent, data: {} });

function View_AddonMessagesContactsComponent_1(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 2, "core-empty-box", [["icon", "person"]], null, null, null, empty_box_ngfactory["b" /* View_CoreEmptyBoxComponent_0 */], empty_box_ngfactory["a" /* RenderType_CoreEmptyBoxComponent */])), core["_30" /* ɵdid */](1, 49152, null, 0, empty_box["a" /* CoreEmptyBoxComponent */], [], { message: [0, "message"], icon: [1, "icon"] }, null), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]])], function (_ck, _v) { var currVal_0 = core["_56" /* ɵunv */](_v, 1, 0, core["_44" /* ɵnov */](_v, 2).transform("addon.messages.contactlistempty")); var currVal_1 = "person"; _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_AddonMessagesContactsComponent_2(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 2, "core-empty-box", [["icon", "person"]], null, null, null, empty_box_ngfactory["b" /* View_CoreEmptyBoxComponent_0 */], empty_box_ngfactory["a" /* RenderType_CoreEmptyBoxComponent */])), core["_30" /* ɵdid */](1, 49152, null, 0, empty_box["a" /* CoreEmptyBoxComponent */], [], { message: [0, "message"], icon: [1, "icon"] }, null), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]])], function (_ck, _v) { var currVal_0 = core["_56" /* ɵunv */](_v, 1, 0, core["_44" /* ɵnov */](_v, 2).transform("addon.messages.nousersfound")); var currVal_1 = "person"; _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_AddonMessagesContactsComponent_6(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 14, "a", [["class", "addon-messages-conversation-item item item-block"], ["ion-item", ""], ["text-wrap", ""]], [[8, "title", 0], [2, "core-split-item-selected", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.gotoDiscussion(_v.parent.context.$implicit.id) !== false);
        ad = (pd_0 && ad);
    } return ad; }, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_30" /* ɵdid */](1, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_52" /* ɵqud */](335544320, 4, { contentLabel: 0 }), core["_52" /* ɵqud */](603979776, 5, { _buttons: 1 }), core["_52" /* ɵqud */](603979776, 6, { _icons: 1 }), core["_30" /* ɵdid */](5, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n                        "])), (_l()(), core["_31" /* ɵeld */](7, 0, null, 0, 2, "ion-avatar", [["core-user-avatar", ""], ["item-start", ""]], null, null, null, user_avatar_ngfactory["b" /* View_CoreUserAvatarComponent_0 */], user_avatar_ngfactory["a" /* RenderType_CoreUserAvatarComponent */])), core["_30" /* ɵdid */](8, 16384, null, 0, avatar["a" /* Avatar */], [], null, null), core["_30" /* ɵdid */](9, 770048, null, 0, user_avatar["a" /* CoreUserAvatarComponent */], [nav_controller["a" /* NavController */], sites["a" /* CoreSitesProvider */], utils["a" /* CoreUtilsProvider */], app["a" /* CoreAppProvider */], events["a" /* CoreEventsProvider */], [2, split_view["a" /* CoreSplitViewComponent */]]], { user: [0, "user"], checkOnline: [1, "checkOnline"] }, null), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n                        "])), (_l()(), core["_31" /* ɵeld */](11, 0, null, 2, 2, "h2", [], null, null, null, null, null)), (_l()(), core["_31" /* ɵeld */](12, 0, null, null, 1, "core-format-text", [], null, null, null, null, null)), core["_30" /* ɵdid */](13, 540672, null, 0, format_text["a" /* CoreFormatTextDirective */], [core["t" /* ElementRef */], sites["a" /* CoreSitesProvider */], dom["a" /* CoreDomUtilsProvider */], utils_text["a" /* CoreTextUtilsProvider */], translate_service["a" /* TranslateService */], platform["a" /* Platform */], utils["a" /* CoreUtilsProvider */], url["a" /* CoreUrlUtilsProvider */], logger["a" /* CoreLoggerProvider */], filepool["a" /* CoreFilepoolProvider */], app["a" /* CoreAppProvider */], helper["a" /* CoreContentLinksHelperProvider */], [2, nav_controller["a" /* NavController */]], [2, content["a" /* Content */]], [2, split_view["a" /* CoreSplitViewComponent */]], iframe["a" /* CoreIframeUtilsProvider */], events["a" /* CoreEventsProvider */]], { text: [0, "text"] }, null), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n                    "]))], function (_ck, _v) { var currVal_2 = _v.parent.context.$implicit; var currVal_3 = _v.parent.context.$implicit.showonlinestatus; _ck(_v, 9, 0, currVal_2, currVal_3); var currVal_4 = _v.parent.context.$implicit.fullname; _ck(_v, 13, 0, currVal_4); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _v.parent.context.$implicit.fullname; var currVal_1 = (_v.parent.context.$implicit.id == _co.discussionUserId); _ck(_v, 0, 0, currVal_0, currVal_1); }); }
function View_AddonMessagesContactsComponent_5(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 5, null, null, null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                    "])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                    "])), (_l()(), core["_26" /* ɵand */](16777216, null, null, 1, null, View_AddonMessagesContactsComponent_6)), core["_30" /* ɵdid */](4, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                "]))], function (_ck, _v) { var currVal_0 = (_v.context.$implicit.profileimageurl || _v.context.$implicit.profileimageurlsmall); _ck(_v, 4, 0, currVal_0); }, null); }
function View_AddonMessagesContactsComponent_4(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 20, null, null, null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_31" /* ɵeld */](2, 0, null, null, 14, "ion-item-divider", [["class", "item item-divider"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_30" /* ɵdid */](3, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_52" /* ɵqud */](335544320, 1, { contentLabel: 0 }), core["_52" /* ɵqud */](603979776, 2, { _buttons: 1 }), core["_52" /* ɵqud */](603979776, 3, { _icons: 1 }), core["_30" /* ɵdid */](7, 16384, null, 0, item_divider["a" /* ItemDivider */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */]], null, null), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n                    "])), (_l()(), core["_31" /* ɵeld */](9, 0, null, 2, 2, "h2", [], null, null, null, null, null)), (_l()(), core["_55" /* ɵted */](10, null, ["", ""])), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n                    "])), (_l()(), core["_31" /* ɵeld */](13, 0, null, 4, 2, "ion-note", [["item-end", ""]], null, null, null, null, null)), core["_30" /* ɵdid */](14, 16384, null, 0, note["a" /* Note */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */]], null, null), (_l()(), core["_55" /* ɵted */](15, null, ["", ""])), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_26" /* ɵand */](16777216, null, null, 1, null, View_AddonMessagesContactsComponent_5)), core["_30" /* ɵdid */](19, 802816, null, 0, common["j" /* NgForOf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */], core["E" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n            "]))], function (_ck, _v) { var _co = _v.component; var currVal_2 = _co.contacts[_v.parent.context.$implicit]; _ck(_v, 19, 0, currVal_2); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = core["_56" /* ɵunv */](_v, 10, 0, core["_44" /* ɵnov */](_v, 11).transform(("addon.messages.type_" + _v.parent.context.$implicit))); _ck(_v, 10, 0, currVal_0); var currVal_1 = _co.contacts[_v.parent.context.$implicit].length; _ck(_v, 15, 0, currVal_1); }); }
function View_AddonMessagesContactsComponent_3(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 5, "ion-list", [["no-margin", ""]], null, null, null, null, null)), core["_30" /* ɵdid */](1, 16384, null, 0, list["a" /* List */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], platform["a" /* Platform */], gesture_controller["l" /* GestureController */], dom_controller["a" /* DomController */]], null, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_26" /* ɵand */](16777216, null, null, 1, null, View_AddonMessagesContactsComponent_4)), core["_30" /* ɵdid */](4, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n        "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.contacts[_v.context.$implicit] && ((_co.contacts[_v.context.$implicit].length > 0) || (_v.context.$implicit === _co.searchType))); _ck(_v, 4, 0, currVal_0); }, null); }
function View_AddonMessagesContactsComponent_0(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 27, "ion-content", [], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, content_ngfactory["b" /* View_Content_0 */], content_ngfactory["a" /* RenderType_Content */])), core["_30" /* ɵdid */](1, 4374528, null, 0, content["a" /* Content */], [config["a" /* Config */], platform["a" /* Platform */], dom_controller["a" /* DomController */], core["t" /* ElementRef */], core["V" /* Renderer */], app_app["a" /* App */], keyboard["a" /* Keyboard */], core["M" /* NgZone */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]]], null, null), (_l()(), core["_55" /* ɵted */](-1, 1, ["\n    "])), (_l()(), core["_31" /* ɵeld */](3, 0, null, 2, 6, "ion-refresher", [], [[2, "refresher-active", null], [4, "top", null]], [[null, "ionRefresh"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("ionRefresh" === en)) {
        var pd_0 = (_co.refreshData($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), core["_30" /* ɵdid */](4, 212992, null, 0, refresher["a" /* Refresher */], [platform["a" /* Platform */], content["a" /* Content */], core["M" /* NgZone */], gesture_controller["l" /* GestureController */]], { enabled: [0, "enabled"] }, { ionRefresh: "ionRefresh" }), (_l()(), core["_55" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_31" /* ɵeld */](6, 0, null, null, 2, "ion-refresher-content", [], [[1, "state", 0]], null, null, refresher_content_ngfactory["b" /* View_RefresherContent_0 */], refresher_content_ngfactory["a" /* RenderType_RefresherContent */])), core["_30" /* ɵdid */](7, 114688, null, 0, refresher_content["a" /* RefresherContent */], [refresher["a" /* Refresher */], config["a" /* Config */]], { pullingText: [0, "pullingText"] }, null), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["_55" /* ɵted */](-1, 1, ["\n\n    "])), (_l()(), core["_31" /* ɵeld */](11, 0, null, 1, 2, "core-search-box", [["autocorrect", "off"], ["lengthCheck", "2"], ["spellcheck", "false"]], null, [[null, "onSubmit"], [null, "onClear"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("onSubmit" === en)) {
        var pd_0 = (_co.search($event) !== false);
        ad = (pd_0 && ad);
    } if (("onClear" === en)) {
        var pd_1 = (_co.clearSearch($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, search_box_ngfactory["b" /* View_CoreSearchBoxComponent_0 */], search_box_ngfactory["a" /* RenderType_CoreSearchBoxComponent */])), core["_30" /* ɵdid */](12, 114688, null, 0, search_box["a" /* CoreSearchBoxComponent */], [translate_service["a" /* TranslateService */], utils["a" /* CoreUtilsProvider */]], { placeholder: [0, "placeholder"], autocorrect: [1, "autocorrect"], spellcheck: [2, "spellcheck"], lengthCheck: [3, "lengthCheck"], disabled: [4, "disabled"] }, { onSubmit: "onSubmit", onClear: "onClear" }), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, 1, ["\n\n    "])), (_l()(), core["_31" /* ɵeld */](15, 0, null, 1, 11, "core-loading", [], null, null, null, loading_ngfactory["b" /* View_CoreLoadingComponent_0 */], loading_ngfactory["a" /* RenderType_CoreLoadingComponent */])), core["_30" /* ɵdid */](16, 638976, null, 0, loading["a" /* CoreLoadingComponent */], [translate_service["a" /* TranslateService */], core["t" /* ElementRef */], events["a" /* CoreEventsProvider */], utils["a" /* CoreUtilsProvider */]], { hideUntil: [0, "hideUntil"], message: [1, "message"] }, null), (_l()(), core["_55" /* ɵted */](-1, 0, ["\n        "])), (_l()(), core["_26" /* ɵand */](16777216, null, 0, 1, null, View_AddonMessagesContactsComponent_1)), core["_30" /* ɵdid */](19, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ɵted */](-1, 0, ["\n\n        "])), (_l()(), core["_26" /* ɵand */](16777216, null, 0, 1, null, View_AddonMessagesContactsComponent_2)), core["_30" /* ɵdid */](22, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ɵted */](-1, 0, ["\n\n        "])), (_l()(), core["_26" /* ɵand */](16777216, null, 0, 1, null, View_AddonMessagesContactsComponent_3)), core["_30" /* ɵdid */](25, 802816, null, 0, common["j" /* NgForOf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */], core["E" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), core["_55" /* ɵted */](-1, 0, ["\n    "])), (_l()(), core["_55" /* ɵted */](-1, 1, ["\n"])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_4 = _co.loaded; _ck(_v, 4, 0, currVal_4); var currVal_6 = core["_34" /* ɵinlineInterpolate */](1, "", core["_56" /* ɵunv */](_v, 7, 0, core["_44" /* ɵnov */](_v, 8).transform("core.pulltorefresh")), ""); _ck(_v, 7, 0, currVal_6); var currVal_7 = core["_56" /* ɵunv */](_v, 12, 0, core["_44" /* ɵnov */](_v, 13).transform("addon.messages.contactname")); var currVal_8 = "off"; var currVal_9 = "false"; var currVal_10 = "2"; var currVal_11 = !_co.loaded; _ck(_v, 12, 0, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11); var currVal_12 = _co.loaded; var currVal_13 = _co.loadingMessage; _ck(_v, 16, 0, currVal_12, currVal_13); var currVal_14 = (!_co.hasContacts && (_co.searchString == "")); _ck(_v, 19, 0, currVal_14); var currVal_15 = (!_co.hasContacts && (_co.searchString != "")); _ck(_v, 22, 0, currVal_15); var currVal_16 = _co.contactTypes; _ck(_v, 25, 0, currVal_16); }, function (_ck, _v) { var currVal_0 = core["_44" /* ɵnov */](_v, 1).statusbarPadding; var currVal_1 = core["_44" /* ɵnov */](_v, 1)._hasRefresher; _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_2 = (core["_44" /* ɵnov */](_v, 4).state !== "inactive"); var currVal_3 = core["_44" /* ɵnov */](_v, 4)._top; _ck(_v, 3, 0, currVal_2, currVal_3); var currVal_5 = core["_44" /* ɵnov */](_v, 7).r.state; _ck(_v, 6, 0, currVal_5); }); }
function View_AddonMessagesContactsComponent_Host_0(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 1, "addon-messages-contacts", [], null, null, null, View_AddonMessagesContactsComponent_0, RenderType_AddonMessagesContactsComponent)), core["_30" /* ɵdid */](1, 245760, null, 0, contacts["a" /* AddonMessagesContactsComponent */], [sites["a" /* CoreSitesProvider */], translate_service["a" /* TranslateService */], app["a" /* CoreAppProvider */], messages["a" /* AddonMessagesProvider */], dom["a" /* CoreDomUtilsProvider */], nav_params["a" /* NavParams */], events["a" /* CoreEventsProvider */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var AddonMessagesContactsComponentNgFactory = core["_27" /* ɵccf */]("addon-messages-contacts", contacts["a" /* AddonMessagesContactsComponent */], View_AddonMessagesContactsComponent_Host_0, {}, {}, []);

//# sourceMappingURL=contacts.ngfactory.js.map
// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar-header.js
var toolbar_header = __webpack_require__(365);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/navbar.ngfactory.js
var navbar_ngfactory = __webpack_require__(713);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/navbar.js
var navbar = __webpack_require__(209);

// EXTERNAL MODULE: ./src/directives/back-button.ts
var back_button = __webpack_require__(471);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory.js
var toolbar_title_ngfactory = __webpack_require__(714);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar-title.js
var toolbar_title = __webpack_require__(307);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar.js
var toolbar = __webpack_require__(245);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar-item.js
var toolbar_item = __webpack_require__(366);

// EXTERNAL MODULE: ./src/components/context-menu/context-menu.ngfactory.js
var context_menu_ngfactory = __webpack_require__(85);

// EXTERNAL MODULE: ./src/components/context-menu/context-menu.ts
var context_menu = __webpack_require__(74);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/popover/popover-controller.js
var popover_controller = __webpack_require__(65);

// EXTERNAL MODULE: ./src/components/tabs/tab.ts
var tab = __webpack_require__(72);

// EXTERNAL MODULE: ./src/components/split-view/split-view.ngfactory.js
var split_view_ngfactory = __webpack_require__(472);

// EXTERNAL MODULE: ./src/core/fileuploader/providers/fileuploader.ts
var fileuploader = __webpack_require__(68);

// EXTERNAL MODULE: ./src/components/tabs/tabs.ngfactory.js
var tabs_ngfactory = __webpack_require__(478);

// EXTERNAL MODULE: ./src/components/tabs/tab.ngfactory.js
var tab_ngfactory = __webpack_require__(479);

// CONCATENATED MODULE: ./src/addon/messages/pages/index/index.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 











































var styles_AddonMessagesIndexPage = [];
var RenderType_AddonMessagesIndexPage = core["_29" /* ɵcrt */]({ encapsulation: 2, styles: styles_AddonMessagesIndexPage, data: {} });

function View_AddonMessagesIndexPage_1(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_55" /* ɵted */](-1, null, ["\n                    "])), (_l()(), core["_31" /* ɵeld */](1, 0, null, null, 1, "addon-messages-discussions", [], null, null, null, View_AddonMessagesDiscussionsComponent_0, RenderType_AddonMessagesDiscussionsComponent)), core["_30" /* ɵdid */](2, 245760, null, 0, discussions["a" /* AddonMessagesDiscussionsComponent */], [events["a" /* CoreEventsProvider */], sites["a" /* CoreSitesProvider */], translate_service["a" /* TranslateService */], messages["a" /* AddonMessagesProvider */], dom["a" /* CoreDomUtilsProvider */], nav_params["a" /* NavParams */], app["a" /* CoreAppProvider */], platform["a" /* Platform */], utils["a" /* CoreUtilsProvider */], delegate["a" /* CorePushNotificationsDelegate */]], null, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                "]))], function (_ck, _v) { _ck(_v, 2, 0); }, null); }
function View_AddonMessagesIndexPage_2(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_55" /* ɵted */](-1, null, ["\n                    "])), (_l()(), core["_31" /* ɵeld */](1, 0, null, null, 1, "addon-messages-contacts", [], null, null, null, View_AddonMessagesContactsComponent_0, RenderType_AddonMessagesContactsComponent)), core["_30" /* ɵdid */](2, 245760, null, 0, contacts["a" /* AddonMessagesContactsComponent */], [sites["a" /* CoreSitesProvider */], translate_service["a" /* TranslateService */], app["a" /* CoreAppProvider */], messages["a" /* AddonMessagesProvider */], dom["a" /* CoreDomUtilsProvider */], nav_params["a" /* NavParams */], events["a" /* CoreEventsProvider */]], null, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                "]))], function (_ck, _v) { _ck(_v, 2, 0); }, null); }
function View_AddonMessagesIndexPage_0(_l) { return core["_57" /* ɵvid */](0, [core["_52" /* ɵqud */](402653184, 1, { splitviewCtrl: 0 }), core["_52" /* ɵqud */](402653184, 2, { tabsComponent: 0 }), (_l()(), core["_31" /* ɵeld */](2, 0, null, null, 21, "ion-header", [], null, null, null, null, null)), core["_30" /* ɵdid */](3, 16384, null, 0, toolbar_header["a" /* Header */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, view_controller["a" /* ViewController */]]], null, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["_31" /* ɵeld */](5, 0, null, null, 17, "ion-navbar", [["class", "toolbar"], ["core-back-button", ""]], [[8, "hidden", 0], [2, "statusbar-padding", null]], null, null, navbar_ngfactory["b" /* View_Navbar_0 */], navbar_ngfactory["a" /* RenderType_Navbar */])), core["_30" /* ɵdid */](6, 49152, null, 0, navbar["a" /* Navbar */], [app_app["a" /* App */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */]], null, null), core["_30" /* ɵdid */](7, 212992, null, 0, back_button["a" /* CoreBackButtonDirective */], [navbar["a" /* Navbar */], platform["a" /* Platform */], translate_service["a" /* TranslateService */], events["a" /* CoreEventsProvider */]], null, null), (_l()(), core["_55" /* ɵted */](-1, 3, ["\n        "])), (_l()(), core["_31" /* ɵeld */](9, 0, null, 3, 3, "ion-title", [], null, null, null, toolbar_title_ngfactory["b" /* View_ToolbarTitle_0 */], toolbar_title_ngfactory["a" /* RenderType_ToolbarTitle */])), core["_30" /* ɵdid */](10, 49152, null, 0, toolbar_title["a" /* ToolbarTitle */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, toolbar["a" /* Toolbar */]], [2, navbar["a" /* Navbar */]]], null, null), (_l()(), core["_55" /* ɵted */](11, 0, ["", ""])), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, 3, ["\n        "])), (_l()(), core["_31" /* ɵeld */](14, 0, null, 2, 7, "ion-buttons", [["end", ""]], null, null, null, null, null)), core["_30" /* ɵdid */](15, 16384, null, 1, toolbar_item["a" /* ToolbarItem */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, toolbar["a" /* Toolbar */]], [2, navbar["a" /* Navbar */]]], null, null), core["_52" /* ɵqud */](603979776, 3, { _buttons: 1 }), (_l()(), core["_55" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_31" /* ɵeld */](19, 0, null, null, 1, "core-context-menu", [], null, null, null, context_menu_ngfactory["b" /* View_CoreContextMenuComponent_0 */], context_menu_ngfactory["a" /* RenderType_CoreContextMenuComponent */])), core["_30" /* ɵdid */](20, 245760, null, 0, context_menu["a" /* CoreContextMenuComponent */], [translate_service["a" /* TranslateService */], popover_controller["a" /* PopoverController */], core["t" /* ElementRef */], dom["a" /* CoreDomUtilsProvider */], [2, tab["a" /* CoreTabComponent */]], utils["a" /* CoreUtilsProvider */]], null, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_55" /* ɵted */](-1, 3, ["\n    "])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n"])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n"])), (_l()(), core["_31" /* ɵeld */](25, 0, null, null, 28, "core-split-view", [], null, null, null, split_view_ngfactory["b" /* View_CoreSplitViewComponent_0 */], split_view_ngfactory["a" /* RenderType_CoreSplitViewComponent */])), core["_30" /* ɵdid */](26, 245760, [[1, 4]], 0, split_view["a" /* CoreSplitViewComponent */], [[2, nav_controller["a" /* NavController */]], core["t" /* ElementRef */], fileuploader["a" /* CoreFileUploaderProvider */], platform["a" /* Platform */], translate_service["a" /* TranslateService */]], null, null), (_l()(), core["_55" /* ɵted */](-1, 0, ["\n    "])), (_l()(), core["_31" /* ɵeld */](28, 0, null, 0, 24, "ion-content", [], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, content_ngfactory["b" /* View_Content_0 */], content_ngfactory["a" /* RenderType_Content */])), core["_30" /* ɵdid */](29, 4374528, null, 0, content["a" /* Content */], [config["a" /* Config */], platform["a" /* Platform */], dom_controller["a" /* DomController */], core["t" /* ElementRef */], core["V" /* Renderer */], app_app["a" /* App */], keyboard["a" /* Keyboard */], core["M" /* NgZone */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]]], null, null), (_l()(), core["_55" /* ɵted */](-1, 1, ["\n        "])), (_l()(), core["_31" /* ɵeld */](31, 0, null, 1, 20, "core-tabs", [], null, null, null, tabs_ngfactory["b" /* View_CoreTabsComponent_0 */], tabs_ngfactory["a" /* RenderType_CoreTabsComponent */])), core["_30" /* ɵdid */](32, 4964352, [[2, 4]], 0, tabs["a" /* CoreTabsComponent */], [core["t" /* ElementRef */], content["a" /* Content */], dom["a" /* CoreDomUtilsProvider */], app["a" /* CoreAppProvider */], platform["a" /* Platform */], translate_service["a" /* TranslateService */]], null, null), (_l()(), core["_55" /* ɵted */](-1, 0, ["\n            "])), (_l()(), core["_31" /* ɵeld */](34, 0, null, 0, 7, "core-tab", [["icon", "chatbubbles"]], null, null, null, tab_ngfactory["b" /* View_CoreTabComponent_0 */], tab_ngfactory["a" /* RenderType_CoreTabComponent */])), core["_30" /* ɵdid */](35, 245760, null, 2, tab["a" /* CoreTabComponent */], [tabs["a" /* CoreTabsComponent */], core["t" /* ElementRef */], dom["a" /* CoreDomUtilsProvider */], utils["a" /* CoreUtilsProvider */]], { title: [0, "title"], icon: [1, "icon"] }, null), core["_52" /* ɵqud */](335544320, 4, { template: 0 }), core["_52" /* ɵqud */](335544320, 5, { content: 0 }), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_26" /* ɵand */](0, [[4, 2]], null, 0, null, View_AddonMessagesIndexPage_1)), (_l()(), core["_55" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_55" /* ɵted */](-1, 0, ["\n            "])), (_l()(), core["_31" /* ɵeld */](43, 0, null, 0, 7, "core-tab", [["icon", "person"]], null, null, null, tab_ngfactory["b" /* View_CoreTabComponent_0 */], tab_ngfactory["a" /* RenderType_CoreTabComponent */])), core["_30" /* ɵdid */](44, 245760, null, 2, tab["a" /* CoreTabComponent */], [tabs["a" /* CoreTabsComponent */], core["t" /* ElementRef */], dom["a" /* CoreDomUtilsProvider */], utils["a" /* CoreUtilsProvider */]], { title: [0, "title"], icon: [1, "icon"] }, null), core["_52" /* ɵqud */](335544320, 6, { template: 0 }), core["_52" /* ɵqud */](335544320, 7, { content: 0 }), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_26" /* ɵand */](0, [[6, 2]], null, 0, null, View_AddonMessagesIndexPage_2)), (_l()(), core["_55" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_55" /* ɵted */](-1, 0, ["\n        "])), (_l()(), core["_55" /* ɵted */](-1, 1, ["\n    "])), (_l()(), core["_55" /* ɵted */](-1, 0, ["\n"]))], function (_ck, _v) { _ck(_v, 7, 0); _ck(_v, 20, 0); _ck(_v, 26, 0); _ck(_v, 32, 0); var currVal_5 = core["_56" /* ɵunv */](_v, 35, 0, core["_44" /* ɵnov */](_v, 38).transform("addon.messages.messages")); var currVal_6 = "chatbubbles"; _ck(_v, 35, 0, currVal_5, currVal_6); var currVal_7 = core["_56" /* ɵunv */](_v, 44, 0, core["_44" /* ɵnov */](_v, 47).transform("addon.messages.contacts")); var currVal_8 = "person"; _ck(_v, 44, 0, currVal_7, currVal_8); }, function (_ck, _v) { var currVal_0 = core["_44" /* ɵnov */](_v, 6)._hidden; var currVal_1 = core["_44" /* ɵnov */](_v, 6)._sbPadding; _ck(_v, 5, 0, currVal_0, currVal_1); var currVal_2 = core["_56" /* ɵunv */](_v, 11, 0, core["_44" /* ɵnov */](_v, 12).transform("addon.messages.messages")); _ck(_v, 11, 0, currVal_2); var currVal_3 = core["_44" /* ɵnov */](_v, 29).statusbarPadding; var currVal_4 = core["_44" /* ɵnov */](_v, 29)._hasRefresher; _ck(_v, 28, 0, currVal_3, currVal_4); }); }
function View_AddonMessagesIndexPage_Host_0(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 1, "page-addon-messages-index", [], null, null, null, View_AddonMessagesIndexPage_0, RenderType_AddonMessagesIndexPage)), core["_30" /* ɵdid */](1, 180224, null, 0, index_AddonMessagesIndexPage, [events["a" /* CoreEventsProvider */], sites["a" /* CoreSitesProvider */]], null, null)], null, null); }
var AddonMessagesIndexPageNgFactory = core["_27" /* ɵccf */]("page-addon-messages-index", index_AddonMessagesIndexPage, View_AddonMessagesIndexPage_Host_0, {}, {}, []);

//# sourceMappingURL=index.ngfactory.js.map
// EXTERNAL MODULE: ./node_modules/@angular/forms/esm5/forms.js
var esm5_forms = __webpack_require__(22);

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

// EXTERNAL MODULE: ./src/pipes/pipes.module.ts + 2 modules
var pipes_module = __webpack_require__(109);

// EXTERNAL MODULE: ./node_modules/ionic-angular/util/module-loader.js
var module_loader = __webpack_require__(268);

// CONCATENATED MODULE: ./src/addon/messages/pages/index/index.module.ngfactory.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonMessagesIndexPageModuleNgFactory", function() { return AddonMessagesIndexPageModuleNgFactory; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
































var AddonMessagesIndexPageModuleNgFactory = core["_28" /* ɵcmf */](index_module_AddonMessagesIndexPageModule, [], function (_l) { return core["_40" /* ɵmod */]([core["_41" /* ɵmpd */](512, core["o" /* ComponentFactoryResolver */], core["_21" /* ɵCodegenComponentFactoryResolver */], [[8, [action_sheet_component_ngfactory["a" /* ActionSheetCmpNgFactory */], alert_component_ngfactory["a" /* AlertCmpNgFactory */], app_root_ngfactory["a" /* IonicAppNgFactory */], loading_component_ngfactory["a" /* LoadingCmpNgFactory */], modal_component_ngfactory["a" /* ModalCmpNgFactory */], picker_component_ngfactory["a" /* PickerCmpNgFactory */], popover_component_ngfactory["a" /* PopoverCmpNgFactory */], select_popover_component_ngfactory["a" /* SelectPopoverNgFactory */], toast_component_ngfactory["a" /* ToastCmpNgFactory */], context_menu_popover_ngfactory["a" /* CoreContextMenuPopoverComponentNgFactory */], course_picker_menu_popover_ngfactory["a" /* CoreCoursePickerMenuPopoverComponentNgFactory */], recaptchamodal_ngfactory["a" /* CoreRecaptchaModalComponentNgFactory */], bs_tooltip_ngfactory["a" /* CoreBSTooltipComponentNgFactory */], AddonMessagesIndexPageNgFactory]], [3, core["o" /* ComponentFactoryResolver */]], core["K" /* NgModuleRef */]]), core["_41" /* ɵmpd */](4608, common["m" /* NgLocalization */], common["l" /* NgLocaleLocalization */], [core["G" /* LOCALE_ID */], [2, common["w" /* ɵa */]]]), core["_41" /* ɵmpd */](4608, esm5_forms["x" /* ɵi */], esm5_forms["x" /* ɵi */], []), core["_41" /* ɵmpd */](4608, esm5_forms["d" /* FormBuilder */], esm5_forms["d" /* FormBuilder */], []), core["_41" /* ɵmpd */](4608, translate_loader["b" /* TranslateLoader */], translate_loader["a" /* TranslateFakeLoader */], []), core["_41" /* ɵmpd */](4608, translate_compiler["a" /* TranslateCompiler */], translate_compiler["b" /* TranslateFakeCompiler */], []), core["_41" /* ɵmpd */](4608, translate_parser["b" /* TranslateParser */], translate_parser["a" /* TranslateDefaultParser */], []), core["_41" /* ɵmpd */](4608, missing_translation_handler["b" /* MissingTranslationHandler */], missing_translation_handler["a" /* FakeMissingTranslationHandler */], []), core["_41" /* ɵmpd */](4608, translate_service["a" /* TranslateService */], translate_service["a" /* TranslateService */], [translate_store["a" /* TranslateStore */], translate_loader["b" /* TranslateLoader */], translate_compiler["a" /* TranslateCompiler */], translate_parser["b" /* TranslateParser */], missing_translation_handler["b" /* MissingTranslationHandler */], translate_service["b" /* USE_DEFAULT_LANG */], translate_service["c" /* USE_STORE */]]), core["_41" /* ɵmpd */](512, common["b" /* CommonModule */], common["b" /* CommonModule */], []), core["_41" /* ɵmpd */](512, esm5_forms["v" /* ɵba */], esm5_forms["v" /* ɵba */], []), core["_41" /* ɵmpd */](512, esm5_forms["i" /* FormsModule */], esm5_forms["i" /* FormsModule */], []), core["_41" /* ɵmpd */](512, esm5_forms["s" /* ReactiveFormsModule */], esm5_forms["s" /* ReactiveFormsModule */], []), core["_41" /* ɵmpd */](512, ionic_angular_module["a" /* IonicModule */], ionic_angular_module["a" /* IonicModule */], []), core["_41" /* ɵmpd */](512, _ngx_translate_core["b" /* TranslateModule */], _ngx_translate_core["b" /* TranslateModule */], []), core["_41" /* ɵmpd */](512, directives_module["a" /* CoreDirectivesModule */], directives_module["a" /* CoreDirectivesModule */], []), core["_41" /* ɵmpd */](512, pipes_module["a" /* CorePipesModule */], pipes_module["a" /* CorePipesModule */], []), core["_41" /* ɵmpd */](512, components_module["a" /* CoreComponentsModule */], components_module["a" /* CoreComponentsModule */], []), core["_41" /* ɵmpd */](512, components_components_module["a" /* AddonMessagesComponentsModule */], components_components_module["a" /* AddonMessagesComponentsModule */], []), core["_41" /* ɵmpd */](512, ionic_angular_module["b" /* IonicPageModule */], ionic_angular_module["b" /* IonicPageModule */], []), core["_41" /* ɵmpd */](512, index_module_AddonMessagesIndexPageModule, index_module_AddonMessagesIndexPageModule, []), core["_41" /* ɵmpd */](256, translate_service["c" /* USE_STORE */], undefined, []), core["_41" /* ɵmpd */](256, translate_service["b" /* USE_DEFAULT_LANG */], undefined, []), core["_41" /* ɵmpd */](256, module_loader["a" /* LAZY_LOADED_TOKEN */], index_AddonMessagesIndexPage, [])]); });

//# sourceMappingURL=index.module.ngfactory.js.map

/***/ }),

/***/ 2103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddonMessagesComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_components_module__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__directives_directives_module__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pipes_pipes_module__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_discussions_discussions__ = __webpack_require__(2104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_confirmed_contacts_confirmed_contacts__ = __webpack_require__(2105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_contact_requests_contact_requests__ = __webpack_require__(2106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_contacts_contacts__ = __webpack_require__(2107);
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











var AddonMessagesComponentsModule = /** @class */ (function () {
    function AddonMessagesComponentsModule() {
    }
    AddonMessagesComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__components_discussions_discussions__["a" /* AddonMessagesDiscussionsComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_confirmed_contacts_confirmed_contacts__["a" /* AddonMessagesConfirmedContactsComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_contact_requests_contact_requests__["a" /* AddonMessagesContactRequestsComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_contacts_contacts__["a" /* AddonMessagesContactsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* IonicModule */],
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_4__components_components_module__["a" /* CoreComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_5__directives_directives_module__["a" /* CoreDirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_6__pipes_pipes_module__["a" /* CorePipesModule */]
            ],
            providers: [],
            exports: [
                __WEBPACK_IMPORTED_MODULE_7__components_discussions_discussions__["a" /* AddonMessagesDiscussionsComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_confirmed_contacts_confirmed_contacts__["a" /* AddonMessagesConfirmedContactsComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_contact_requests_contact_requests__["a" /* AddonMessagesContactRequestsComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_contacts_contacts__["a" /* AddonMessagesContactsComponent */]
            ]
        })
    ], AddonMessagesComponentsModule);
    return AddonMessagesComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 2104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddonMessagesDiscussionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_events__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_sites__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_messages__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_utils_dom__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_utils_utils__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_app__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__core_pushnotifications_providers_delegate__ = __webpack_require__(136);
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
 * Component that displays the list of discussions.
 */
var AddonMessagesDiscussionsComponent = /** @class */ (function () {
    function AddonMessagesDiscussionsComponent(eventsProvider, sitesProvider, translate, messagesProvider, domUtils, navParams, appProvider, platform, utils, pushNotificationsDelegate) {
        var _this = this;
        this.eventsProvider = eventsProvider;
        this.messagesProvider = messagesProvider;
        this.domUtils = domUtils;
        this.appProvider = appProvider;
        this.utils = utils;
        this.loaded = false;
        this.search = {
            enabled: false,
            showResults: false,
            results: [],
            loading: '',
            text: ''
        };
        this.search.loading = translate.instant('core.searching');
        this.loadingMessages = translate.instant('core.loading');
        this.siteId = sitesProvider.getCurrentSiteId();
        // Update discussions when new message is received.
        this.newMessagesObserver = eventsProvider.on(__WEBPACK_IMPORTED_MODULE_5__providers_messages__["a" /* AddonMessagesProvider */].NEW_MESSAGE_EVENT, function (data) {
            if (data.userId && _this.discussions) {
                var discussion = _this.discussions.find(function (disc) {
                    return disc.message.user == data.userId;
                });
                if (typeof discussion == 'undefined') {
                    _this.loaded = false;
                    _this.refreshData().finally(function () {
                        _this.loaded = true;
                    });
                }
                else {
                    // An existing discussion has a new message, update the last message.
                    discussion.message.message = data.message;
                    discussion.message.timecreated = data.timecreated;
                }
            }
        }, this.siteId);
        // Update discussions when a message is read.
        this.readChangedObserver = eventsProvider.on(__WEBPACK_IMPORTED_MODULE_5__providers_messages__["a" /* AddonMessagesProvider */].READ_CHANGED_EVENT, function (data) {
            if (data.userId && _this.discussions) {
                var discussion = _this.discussions.find(function (disc) {
                    return disc.message.user == data.userId;
                });
                if (typeof discussion != 'undefined') {
                    // A discussion has been read reset counter.
                    discussion.unread = false;
                    // Conversations changed, invalidate them and refresh unread counts.
                    _this.messagesProvider.invalidateConversations(_this.siteId);
                    _this.messagesProvider.refreshUnreadConversationCounts(_this.siteId);
                }
            }
        }, this.siteId);
        // Refresh the view when the app is resumed.
        this.appResumeSubscription = platform.resume.subscribe(function () {
            if (!_this.loaded) {
                return;
            }
            _this.loaded = false;
            _this.refreshData();
        });
        this.discussionUserId = navParams.get('discussionUserId') || false;
        // If a message push notification is received, refresh the view.
        this.pushObserver = pushNotificationsDelegate.on('receive').subscribe(function (notification) {
            // New message received. If it's from current site, refresh the data.
            if (utils.isFalseOrZero(notification.notif) && notification.site == _this.siteId) {
                // Don't refresh unread counts, it's refreshed from the main menu handler in this case.
                _this.refreshData(null, false);
            }
        });
    }
    /**
     * Component loaded.
     */
    AddonMessagesDiscussionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.discussionUserId) {
            // There is a discussion to load, open the discussion in a new state.
            this.gotoDiscussion(this.discussionUserId);
        }
        this.fetchData().then(function () {
            if (!_this.discussionUserId && _this.discussions.length > 0) {
                // Take first and load it.
                _this.gotoDiscussion(_this.discussions[0].message.user, undefined, true);
            }
        });
    };
    /**
     * Refresh the data.
     *
     * @param {any} [refresher] Refresher.
     * @param {boolean} [refreshUnreadCounts=true] Whteher to refresh unread counts.
     * @return {Promise<any>} Promise resolved when done.
     */
    AddonMessagesDiscussionsComponent.prototype.refreshData = function (refresher, refreshUnreadCounts) {
        var _this = this;
        if (refreshUnreadCounts === void 0) { refreshUnreadCounts = true; }
        var promises = [];
        promises.push(this.messagesProvider.invalidateDiscussionsCache(this.siteId));
        if (refreshUnreadCounts) {
            promises.push(this.messagesProvider.invalidateUnreadConversationCounts(this.siteId));
        }
        return this.utils.allPromises(promises).finally(function () {
            return _this.fetchData().finally(function () {
                if (refresher) {
                    refresher.complete();
                }
            });
        });
    };
    /**
     * Fetch discussions.
     *
     * @return {Promise<any>} Promise resolved when done.
     */
    AddonMessagesDiscussionsComponent.prototype.fetchData = function () {
        var _this = this;
        this.loadingMessage = this.loadingMessages;
        this.search.enabled = this.messagesProvider.isSearchMessagesEnabled();
        var promises = [];
        promises.push(this.messagesProvider.getDiscussions(this.siteId).then(function (discussions) {
            // Convert to an array for sorting.
            var discussionsSorted = [];
            for (var userId in discussions) {
                discussions[userId].unread = !!discussions[userId].unread;
                discussionsSorted.push(discussions[userId]);
            }
            _this.discussions = discussionsSorted.sort(function (a, b) {
                return b.message.timecreated - a.message.timecreated;
            });
        }));
        promises.push(this.messagesProvider.getUnreadConversationCounts(this.siteId));
        return Promise.all(promises).catch(function (error) {
            _this.domUtils.showErrorModalDefault(error, 'addon.messages.errorwhileretrievingdiscussions', true);
        }).finally(function () {
            _this.loaded = true;
        });
    };
    /**
     * Clear search and show discussions again.
     */
    AddonMessagesDiscussionsComponent.prototype.clearSearch = function () {
        var _this = this;
        this.loaded = false;
        this.search.showResults = false;
        this.search.text = ''; // Reset searched string.
        this.fetchData().finally(function () {
            _this.loaded = true;
        });
    };
    /**
     * Search messages cotaining text.
     *
     * @param  {string}       query Text to search for.
     * @return {Promise<any>}       Resolved when done.
     */
    AddonMessagesDiscussionsComponent.prototype.searchMessage = function (query) {
        var _this = this;
        this.appProvider.closeKeyboard();
        this.loaded = false;
        this.loadingMessage = this.search.loading;
        return this.messagesProvider.searchMessages(query, undefined, undefined, undefined, this.siteId).then(function (searchResults) {
            _this.search.showResults = true;
            _this.search.results = searchResults.messages;
        }).catch(function (error) {
            _this.domUtils.showErrorModalDefault(error, 'addon.messages.errorwhileretrievingmessages', true);
        }).finally(function () {
            _this.loaded = true;
        });
    };
    /**
     * Navigate to a particular discussion.
     *
     * @param {number} discussionUserId Discussion Id to load.
     * @param {number} [messageId]      Message to scroll after loading the discussion. Used when searching.
     * @param {boolean} [onlyWithSplitView=false]  Only go to Discussion if split view is on.
     */
    AddonMessagesDiscussionsComponent.prototype.gotoDiscussion = function (discussionUserId, messageId, onlyWithSplitView) {
        if (onlyWithSplitView === void 0) { onlyWithSplitView = false; }
        this.discussionUserId = discussionUserId;
        var params = {
            discussion: discussionUserId,
            onlyWithSplitView: onlyWithSplitView
        };
        if (messageId) {
            params['message'] = messageId;
        }
        this.eventsProvider.trigger(__WEBPACK_IMPORTED_MODULE_5__providers_messages__["a" /* AddonMessagesProvider */].SPLIT_VIEW_LOAD_EVENT, params, this.siteId);
    };
    /**
     * Component destroyed.
     */
    AddonMessagesDiscussionsComponent.prototype.ngOnDestroy = function () {
        this.newMessagesObserver && this.newMessagesObserver.off();
        this.readChangedObserver && this.readChangedObserver.off();
        this.cronObserver && this.cronObserver.off();
        this.appResumeSubscription && this.appResumeSubscription.unsubscribe();
        this.pushObserver && this.pushObserver.unsubscribe();
    };
    AddonMessagesDiscussionsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'addon-messages-discussions',
            templateUrl: 'addon-messages-discussions.html',
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_events__["a" /* CoreEventsProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_sites__["a" /* CoreSitesProvider */], __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_5__providers_messages__["a" /* AddonMessagesProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_utils_dom__["a" /* CoreDomUtilsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_8__providers_app__["a" /* CoreAppProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* Platform */], __WEBPACK_IMPORTED_MODULE_7__providers_utils_utils__["a" /* CoreUtilsProvider */],
            __WEBPACK_IMPORTED_MODULE_9__core_pushnotifications_providers_delegate__["a" /* CorePushNotificationsDelegate */]])
    ], AddonMessagesDiscussionsComponent);
    return AddonMessagesDiscussionsComponent;
}());

//# sourceMappingURL=discussions.js.map

/***/ }),

/***/ 2105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddonMessagesConfirmedContactsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_events__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_sites__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_messages__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_utils_dom__ = __webpack_require__(4);
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
 * Component that displays the list of confirmed contacts.
 */
var AddonMessagesConfirmedContactsComponent = /** @class */ (function () {
    function AddonMessagesConfirmedContactsComponent(domUtils, eventsProvider, sitesProvider, messagesProvider) {
        var _this = this;
        this.domUtils = domUtils;
        this.messagesProvider = messagesProvider;
        this.onUserSelected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.loaded = false;
        this.canLoadMore = false;
        this.loadMoreError = false;
        this.contacts = [];
        this.onUserSelected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        // Update block status of a user.
        this.memberInfoObserver = eventsProvider.on(__WEBPACK_IMPORTED_MODULE_4__providers_messages__["a" /* AddonMessagesProvider */].MEMBER_INFO_CHANGED_EVENT, function (data) {
            if (data.userBlocked || data.userUnblocked) {
                var user = _this.contacts.find(function (user) { return user.id == data.userId; });
                if (user) {
                    user.isblocked = data.userBlocked;
                }
            }
            else if (data.contactRemoved) {
                var index = _this.contacts.findIndex(function (contact) { return contact.id == data.userId; });
                if (index >= 0) {
                    _this.contacts.splice(index, 1);
                }
            }
            else if (data.contactRequestConfirmed) {
                _this.refreshData();
            }
        }, sitesProvider.getCurrentSiteId());
    }
    /**
     * Component loaded.
     */
    AddonMessagesConfirmedContactsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fetchData().then(function () {
            if (_this.contacts.length) {
                _this.selectUser(_this.contacts[0].id, true);
            }
        }).finally(function () {
            _this.loaded = true;
        });
        // Workaround for infinite scrolling.
        this.content.resize();
    };
    /**
     * Fetch contacts.
     *
     * @param {boolean} [refresh=false] True if we are refreshing contacts, false if we are loading more.
     * @return {Promise<any>} Promise resolved when done.
     */
    AddonMessagesConfirmedContactsComponent.prototype.fetchData = function (refresh) {
        var _this = this;
        if (refresh === void 0) { refresh = false; }
        this.loadMoreError = false;
        var limitFrom = refresh ? 0 : this.contacts.length;
        var promise;
        if (limitFrom === 0) {
            // Always try to get latest data from server.
            promise = this.messagesProvider.invalidateUserContacts().catch(function () {
                // Shouldn't happen.
            });
        }
        else {
            promise = Promise.resolve();
        }
        return promise.then(function () {
            return _this.messagesProvider.getUserContacts(limitFrom);
        }).then(function (result) {
            _this.contacts = refresh ? result.contacts : _this.contacts.concat(result.contacts);
            _this.canLoadMore = result.canLoadMore;
        }).catch(function (error) {
            _this.loadMoreError = true;
            _this.domUtils.showErrorModalDefault(error, 'addon.messages.errorwhileretrievingcontacts', true);
        });
    };
    /**
     * Refresh contacts.
     *
     * @param {any} [refresher] Refresher.
     * @return {Promise<any>} Promise resolved when done.
     */
    AddonMessagesConfirmedContactsComponent.prototype.refreshData = function (refresher) {
        // No need to invalidate contacts, we always try to get the latest.
        return this.fetchData(true).finally(function () {
            refresher && refresher.complete();
        });
    };
    /**
     * Load more contacts.
     *
     * @param {any} [infiniteComplete] Infinite scroll complete function. Only used from core-infinite-loading.
     * @return {Promise<any>} Resolved when done.
     */
    AddonMessagesConfirmedContactsComponent.prototype.loadMore = function (infiniteComplete) {
        return this.fetchData().finally(function () {
            infiniteComplete && infiniteComplete();
        });
    };
    /**
     * Notify that a contact has been selected.
     *
     * @param {number} userId User id.
     * @param {boolean} [onInit=false] Whether the contact is selected on initial load.
     */
    AddonMessagesConfirmedContactsComponent.prototype.selectUser = function (userId, onInit) {
        if (onInit === void 0) { onInit = false; }
        this.selectedUserId = userId;
        this.onUserSelected.emit({ userId: userId, onInit: onInit });
    };
    /**
     * Component destroyed.
     */
    AddonMessagesConfirmedContactsComponent.prototype.ngOnDestroy = function () {
        this.memberInfoObserver && this.memberInfoObserver.off();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", Object)
    ], AddonMessagesConfirmedContactsComponent.prototype, "onUserSelected", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */])
    ], AddonMessagesConfirmedContactsComponent.prototype, "content", void 0);
    AddonMessagesConfirmedContactsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'addon-messages-confirmed-contacts',
            templateUrl: 'addon-messages-confirmed-contacts.html',
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__providers_utils_dom__["a" /* CoreDomUtilsProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_events__["a" /* CoreEventsProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_sites__["a" /* CoreSitesProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_messages__["a" /* AddonMessagesProvider */]])
    ], AddonMessagesConfirmedContactsComponent);
    return AddonMessagesConfirmedContactsComponent;
}());

//# sourceMappingURL=confirmed-contacts.js.map

/***/ }),

/***/ 2106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddonMessagesContactRequestsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_events__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_sites__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_messages__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_utils_dom__ = __webpack_require__(4);
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
 * Component that displays the list of contact requests.
 */
var AddonMessagesContactRequestsComponent = /** @class */ (function () {
    function AddonMessagesContactRequestsComponent(domUtils, eventsProvider, sitesProvider, messagesProvider) {
        var _this = this;
        this.domUtils = domUtils;
        this.messagesProvider = messagesProvider;
        this.onUserSelected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.loaded = false;
        this.canLoadMore = false;
        this.loadMoreError = false;
        this.requests = [];
        // Hide the "Would like to contact you" message when a contact request is confirmed.
        this.memberInfoObserver = eventsProvider.on(__WEBPACK_IMPORTED_MODULE_4__providers_messages__["a" /* AddonMessagesProvider */].MEMBER_INFO_CHANGED_EVENT, function (data) {
            if (data.contactRequestConfirmed || data.contactRequestDeclined) {
                var index = _this.requests.findIndex(function (request) { return request.id == data.userId; });
                if (index >= 0) {
                    _this.requests.splice(index, 1);
                }
            }
        }, sitesProvider.getCurrentSiteId());
    }
    /**
     * Component loaded.
     */
    AddonMessagesContactRequestsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fetchData().then(function () {
            if (_this.requests.length) {
                _this.selectUser(_this.requests[0].id, true);
            }
        }).finally(function () {
            _this.loaded = true;
        });
        // Workaround for infinite scrolling.
        this.content.resize();
    };
    /**
     * Fetch contact requests.
     *
     * @param {boolean} [refresh=false] True if we are refreshing contact requests, false if we are loading more.
     * @return {Promise<any>} Promise resolved when done.
     */
    AddonMessagesContactRequestsComponent.prototype.fetchData = function (refresh) {
        var _this = this;
        if (refresh === void 0) { refresh = false; }
        this.loadMoreError = false;
        var limitFrom = refresh ? 0 : this.requests.length;
        var promise;
        if (limitFrom === 0) {
            // Always try to get latest data from server.
            promise = this.messagesProvider.invalidateContactRequestsCache().catch(function () {
                // Shouldn't happen.
            });
        }
        else {
            promise = Promise.resolve();
        }
        return promise.then(function () {
            return _this.messagesProvider.getContactRequests(limitFrom);
        }).then(function (result) {
            _this.requests = refresh ? result.requests : _this.requests.concat(result.requests);
            _this.canLoadMore = result.canLoadMore;
        }).catch(function (error) {
            _this.loadMoreError = true;
            _this.domUtils.showErrorModalDefault(error, 'addon.messages.errorwhileretrievingcontacts', true);
        });
    };
    /**
     * Refresh contact requests.
     *
     * @param {any} [refresher] Refresher.
     * @return {Promise<any>} Promise resolved when done.
     */
    AddonMessagesContactRequestsComponent.prototype.refreshData = function (refresher) {
        // Refresh the number of contacts requests to update badges.
        this.messagesProvider.refreshContactRequestsCount();
        // No need to invalidate contact requests, we always try to get the latest.
        return this.fetchData(true).finally(function () {
            refresher && refresher.complete();
        });
    };
    /**
     * Load more contact requests.
     *
     * @param {any} [infiniteComplete] Infinite scroll complete function. Only used from core-infinite-loading.
     * @return {Promise<any>} Resolved when done.
     */
    AddonMessagesContactRequestsComponent.prototype.loadMore = function (infiniteComplete) {
        return this.fetchData().finally(function () {
            infiniteComplete && infiniteComplete();
        });
    };
    /**
     * Notify that a contact has been selected.
     *
     * @param {number} userId User id.
     * @param {boolean} [onInit=false] Whether the contact is selected on initial load.
     */
    AddonMessagesContactRequestsComponent.prototype.selectUser = function (userId, onInit) {
        if (onInit === void 0) { onInit = false; }
        this.selectedUserId = userId;
        this.onUserSelected.emit({ userId: userId, onInit: onInit });
    };
    /**
     * Component destroyed.
     */
    AddonMessagesContactRequestsComponent.prototype.ngOnDestroy = function () {
        this.memberInfoObserver && this.memberInfoObserver.off();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", Object)
    ], AddonMessagesContactRequestsComponent.prototype, "onUserSelected", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */])
    ], AddonMessagesContactRequestsComponent.prototype, "content", void 0);
    AddonMessagesContactRequestsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'addon-messages-contact-requests',
            templateUrl: 'addon-messages-contact-requests.html',
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__providers_utils_dom__["a" /* CoreDomUtilsProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_events__["a" /* CoreEventsProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_sites__["a" /* CoreSitesProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_messages__["a" /* AddonMessagesProvider */]])
    ], AddonMessagesContactRequestsComponent);
    return AddonMessagesContactRequestsComponent;
}());

//# sourceMappingURL=contact-requests.js.map

/***/ }),

/***/ 2107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddonMessagesContactsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_sites__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_messages__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_utils_dom__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_app__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_events__ = __webpack_require__(11);
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
 * Component that displays the list of contacts.
 */
var AddonMessagesContactsComponent = /** @class */ (function () {
    function AddonMessagesContactsComponent(sitesProvider, translate, appProvider, messagesProvider, domUtils, navParams, eventsProvider) {
        var _this = this;
        this.appProvider = appProvider;
        this.messagesProvider = messagesProvider;
        this.domUtils = domUtils;
        this.eventsProvider = eventsProvider;
        this.noSearchTypes = ['online', 'offline', 'blocked', 'strangers'];
        this.loaded = false;
        this.contactTypes = this.noSearchTypes;
        this.searchType = 'search';
        this.loadingMessage = '';
        this.hasContacts = false;
        this.contacts = {
            search: []
        };
        this.searchString = '';
        this.currentUserId = sitesProvider.getCurrentSiteUserId();
        this.siteId = sitesProvider.getCurrentSiteId();
        this.searchingMessages = translate.instant('core.searching');
        this.loadingMessages = translate.instant('core.loading');
        this.loadingMessage = this.loadingMessages;
        this.discussionUserId = navParams.get('discussionUserId') || false;
        // Refresh the list when a contact request is confirmed.
        this.memberInfoObserver = eventsProvider.on(__WEBPACK_IMPORTED_MODULE_4__providers_messages__["a" /* AddonMessagesProvider */].MEMBER_INFO_CHANGED_EVENT, function (data) {
            if (data.contactRequestConfirmed) {
                _this.refreshData();
            }
        }, sitesProvider.getCurrentSiteId());
    }
    /**
     * Component loaded.
     */
    AddonMessagesContactsComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.discussionUserId) {
            // There is a discussion to load, open the discussion in a new state.
            this.gotoDiscussion(this.discussionUserId);
        }
        this.fetchData().then(function () {
            if (!_this.discussionUserId && _this.hasContacts) {
                var contact = void 0;
                for (var x in _this.contacts) {
                    if (_this.contacts[x].length > 0) {
                        contact = _this.contacts[x][0];
                        break;
                    }
                }
                if (contact) {
                    // Take first and load it.
                    _this.gotoDiscussion(contact.id, true);
                }
            }
        }).finally(function () {
            _this.loaded = true;
        });
    };
    /**
     * Refresh the data.
     *
     * @param {any} [refresher] Refresher.
     * @return {Promise<any>} Promise resolved when done.
     */
    AddonMessagesContactsComponent.prototype.refreshData = function (refresher) {
        var _this = this;
        var promise;
        if (this.searchString) {
            // User has searched, update the search.
            promise = this.performSearch(this.searchString);
        }
        else {
            // Update contacts.
            promise = this.messagesProvider.invalidateAllContactsCache(this.currentUserId).then(function () {
                return _this.fetchData();
            });
        }
        return promise.finally(function () {
            refresher.complete();
        });
    };
    /**
     * Fetch contacts.
     *
     * @return {Promise<any>} Promise resolved when done.
     */
    AddonMessagesContactsComponent.prototype.fetchData = function () {
        var _this = this;
        this.loadingMessage = this.loadingMessages;
        return this.messagesProvider.getAllContacts().then(function (contacts) {
            for (var x in contacts) {
                if (contacts[x].length > 0) {
                    _this.contacts[x] = _this.sortUsers(contacts[x]);
                }
                else {
                    _this.contacts[x] = [];
                }
            }
            _this.clearSearch();
        }).catch(function (error) {
            _this.domUtils.showErrorModalDefault(error, 'addon.messages.errorwhileretrievingcontacts', true);
        });
    };
    /**
     * Sort user list by fullname
     * @param  {any[]} list List to sort.
     * @return {any[]}      Sorted list.
     */
    AddonMessagesContactsComponent.prototype.sortUsers = function (list) {
        return list.sort(function (a, b) {
            var compareA = a.fullname.toLowerCase(), compareB = b.fullname.toLowerCase();
            return compareA.localeCompare(compareB);
        });
    };
    /**
     * Clear search and show all contacts again.
     */
    AddonMessagesContactsComponent.prototype.clearSearch = function () {
        this.searchString = ''; // Reset searched string.
        this.contactTypes = this.noSearchTypes;
        this.hasContacts = false;
        for (var x in this.contacts) {
            if (this.contacts[x].length > 0) {
                this.hasContacts = true;
                return;
            }
        }
    };
    /**
     * Search users from the UI.
     *
     * @param  {string}       query Text to search for.
     * @return {Promise<any>}       Resolved when done.
     */
    AddonMessagesContactsComponent.prototype.search = function (query) {
        var _this = this;
        this.appProvider.closeKeyboard();
        this.loaded = false;
        this.loadingMessage = this.searchingMessages;
        return this.performSearch(query).finally(function () {
            _this.loaded = true;
        });
    };
    /**
     * Perform the search of users.
     *
     * @param  {string}       query Text to search for.
     * @return {Promise<any>}       Resolved when done.
     */
    AddonMessagesContactsComponent.prototype.performSearch = function (query) {
        var _this = this;
        return this.messagesProvider.searchContacts(query).then(function (result) {
            _this.hasContacts = result.length > 0;
            _this.searchString = query;
            _this.contactTypes = ['search'];
            _this.contacts['search'] = _this.sortUsers(result);
        }).catch(function (error) {
            _this.domUtils.showErrorModalDefault(error, 'addon.messages.errorwhileretrievingcontacts', true);
        });
    };
    /**
     * Navigate to a particular discussion.
     *
     * @param {number} discussionUserId Discussion Id to load.
     * @param {boolean} [onlyWithSplitView=false]  Only go to Discussion if split view is on.
     */
    AddonMessagesContactsComponent.prototype.gotoDiscussion = function (discussionUserId, onlyWithSplitView) {
        if (onlyWithSplitView === void 0) { onlyWithSplitView = false; }
        this.discussionUserId = discussionUserId;
        var params = {
            discussion: discussionUserId,
            onlyWithSplitView: onlyWithSplitView
        };
        this.eventsProvider.trigger(__WEBPACK_IMPORTED_MODULE_4__providers_messages__["a" /* AddonMessagesProvider */].SPLIT_VIEW_LOAD_EVENT, params, this.siteId);
    };
    /**
     * Component destroyed.
     */
    AddonMessagesContactsComponent.prototype.ngOnDestroy = function () {
        this.memberInfoObserver && this.memberInfoObserver.off();
    };
    AddonMessagesContactsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'addon-messages-contacts',
            templateUrl: 'addon-messages-contacts.html',
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_sites__["a" /* CoreSitesProvider */], __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_6__providers_app__["a" /* CoreAppProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_messages__["a" /* AddonMessagesProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_utils_dom__["a" /* CoreDomUtilsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_7__providers_events__["a" /* CoreEventsProvider */]])
    ], AddonMessagesContactsComponent);
    return AddonMessagesContactsComponent;
}());

//# sourceMappingURL=contacts.js.map

/***/ })

});
//# sourceMappingURL=2.js.map