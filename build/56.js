webpackJsonp([56],{

/***/ 2063:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCommentsViewerPageModule", function() { return CoreCommentsViewerPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__viewer__ = __webpack_require__(2212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_components_module__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__directives_directives_module__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pipes_pipes_module__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_components_module__ = __webpack_require__(283);
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








var CoreCommentsViewerPageModule = /** @class */ (function () {
    function CoreCommentsViewerPageModule() {
    }
    CoreCommentsViewerPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__viewer__["a" /* CoreCommentsViewerPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__components_components_module__["a" /* CoreComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_5__directives_directives_module__["a" /* CoreDirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_6__pipes_pipes_module__["a" /* CorePipesModule */],
                __WEBPACK_IMPORTED_MODULE_7__components_components_module__["a" /* CoreCommentsComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__viewer__["a" /* CoreCommentsViewerPage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], CoreCommentsViewerPageModule);
    return CoreCommentsViewerPageModule;
}());

//# sourceMappingURL=viewer.module.js.map

/***/ }),

/***/ 2212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreCommentsViewerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__classes_animations__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_sites__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_utils_dom__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_utils_text__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_utils_time__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_events__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__core_user_providers_user__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_comments__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_offline__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_sync__ = __webpack_require__(456);
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
 * Page that displays comments.
 */
var CoreCommentsViewerPage = /** @class */ (function () {
    function CoreCommentsViewerPage(navParams, sitesProvider, userProvider, domUtils, translate, modalCtrl, commentsProvider, offlineComments, eventsProvider, commentsSync, textUtils, timeUtils) {
        var _this = this;
        this.sitesProvider = sitesProvider;
        this.userProvider = userProvider;
        this.domUtils = domUtils;
        this.translate = translate;
        this.modalCtrl = modalCtrl;
        this.commentsProvider = commentsProvider;
        this.offlineComments = offlineComments;
        this.commentsSync = commentsSync;
        this.textUtils = textUtils;
        this.timeUtils = timeUtils;
        this.comments = [];
        this.commentsLoaded = false;
        this.canLoadMore = false;
        this.loadMoreError = false;
        this.canAddComments = false;
        this.canDeleteComments = false;
        this.showDelete = false;
        this.hasOffline = false;
        this.refreshIcon = 'spinner';
        this.syncIcon = 'spinner';
        this.addDeleteCommentsAvailable = false;
        this.contextLevel = navParams.get('contextLevel');
        this.instanceId = navParams.get('instanceId');
        this.componentName = navParams.get('componentName');
        this.itemId = navParams.get('itemId');
        this.area = navParams.get('area') || '';
        this.title = navParams.get('title') || this.translate.instant('core.comments.comments');
        this.page = 0;
        // Refresh data if comments are synchronized automatically.
        this.syncObserver = eventsProvider.on(__WEBPACK_IMPORTED_MODULE_12__providers_sync__["a" /* CoreCommentsSyncProvider */].AUTO_SYNCED, function (data) {
            if (data.contextLevel == _this.contextLevel && data.instanceId == _this.instanceId &&
                data.componentName == _this.componentName && data.itemId == _this.itemId && data.area == _this.area) {
                // Show the sync warnings.
                _this.showSyncWarnings(data.warnings);
                // Refresh the data.
                _this.commentsLoaded = false;
                _this.refreshIcon = 'spinner';
                _this.syncIcon = 'spinner';
                _this.domUtils.scrollToTop(_this.content);
                _this.page = 0;
                _this.comments = [];
                _this.fetchComments(false);
            }
        }, sitesProvider.getCurrentSiteId());
    }
    /**
     * View loaded.
     */
    CoreCommentsViewerPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.commentsProvider.isAddCommentsAvailable().then(function (enabled) {
            // Is implicit the user can delete if he can add.
            _this.addDeleteCommentsAvailable = enabled;
        });
        this.currentUserId = this.sitesProvider.getCurrentSiteUserId();
        this.fetchComments(true);
    };
    /**
     * Fetches the comments.
     *
     * @param  {boolean} sync         When to resync comments.
     * @param  {boolean} [showErrors] When to display errors or not.
     * @return {Promise<any>} Resolved when done.
     */
    CoreCommentsViewerPage.prototype.fetchComments = function (sync, showErrors) {
        var _this = this;
        this.loadMoreError = false;
        var promise = sync ? this.syncComments(showErrors) : Promise.resolve();
        return promise.catch(function () {
            // Ignore errors.
        }).then(function () {
            return _this.offlineComments.getComment(_this.contextLevel, _this.instanceId, _this.componentName, _this.itemId, _this.area).then(function (offlineComment) {
                _this.offlineComment = offlineComment;
                if (offlineComment && !_this.currentUser) {
                    return _this.userProvider.getProfile(_this.currentUserId, undefined, true).then(function (user) {
                        _this.currentUser = user;
                        _this.offlineComment.profileimageurl = user.profileimageurl;
                        _this.offlineComment.fullname = user.fullname;
                        _this.offlineComment.userid = user.id;
                    }).catch(function () {
                        // Ignore errors.
                    });
                }
                else if (offlineComment) {
                    _this.offlineComment.profileimageurl = _this.currentUser.profileimageurl;
                    _this.offlineComment.fullname = _this.currentUser.fullname;
                    _this.offlineComment.userid = _this.currentUser.id;
                }
                return _this.offlineComments.getDeletedComments(_this.contextLevel, _this.instanceId, _this.componentName, _this.itemId, _this.area);
            });
        }).then(function (deletedComments) {
            _this.hasOffline = !!_this.offlineComment || deletedComments.length > 0;
            // Get comments data.
            return _this.commentsProvider.getComments(_this.contextLevel, _this.instanceId, _this.componentName, _this.itemId, _this.area, _this.page).then(function (response) {
                _this.canAddComments = _this.addDeleteCommentsAvailable && response.canpost;
                var comments = response.comments.sort(function (a, b) { return b.timecreated - a.timecreated; });
                _this.canLoadMore = comments.length > 0 && comments.length >= __WEBPACK_IMPORTED_MODULE_10__providers_comments__["a" /* CoreCommentsProvider */].pageSize;
                return Promise.all(comments.map(function (comment) {
                    // Get the user profile image.
                    return _this.userProvider.getProfile(comment.userid, undefined, true).then(function (user) {
                        comment.profileimageurl = user.profileimageurl;
                        return comment;
                    }).catch(function () {
                        // Ignore errors.
                        return comment;
                    });
                }));
            }).then(function (comments) {
                _this.comments = _this.comments.concat(comments);
                deletedComments && deletedComments.forEach(function (deletedComment) {
                    var comment = _this.comments.find(function (comment) {
                        return comment.id == deletedComment.commentid;
                    });
                    if (comment) {
                        comment.deleted = deletedComment.deleted;
                    }
                });
                _this.canDeleteComments = _this.addDeleteCommentsAvailable && (_this.hasOffline || _this.comments.some(function (comment) {
                    return !!comment.delete;
                }));
            });
        }).catch(function (error) {
            _this.loadMoreError = true; // Set to prevent infinite calls with infinite-loading.
            if (error && _this.componentName == 'assignsubmission_comments') {
                _this.domUtils.showAlertTranslated('core.notice', 'core.comments.commentsnotworking');
            }
            else {
                _this.domUtils.showErrorModalDefault(error, _this.translate.instant('core.error') + ': get_comments');
            }
        }).finally(function () {
            _this.commentsLoaded = true;
            _this.refreshIcon = 'refresh';
            _this.syncIcon = 'sync';
        });
    };
    /**
     * Function to load more commemts.
     *
     * @param {any} [infiniteComplete] Infinite scroll complete function. Only used from core-infinite-loading.
     * @return {Promise<any>} Resolved when done.
     */
    CoreCommentsViewerPage.prototype.loadMore = function (infiniteComplete) {
        this.page++;
        this.canLoadMore = false;
        return this.fetchComments(true).finally(function () {
            infiniteComplete && infiniteComplete();
        });
    };
    /**
     * Refresh the comments.
     *
     * @param {boolean} showErrors Whether to display errors or not.
     * @param {any} [refresher] Refresher.
     * @return {Promise<any>} Resolved when done.
     */
    CoreCommentsViewerPage.prototype.refreshComments = function (showErrors, refresher) {
        var _this = this;
        this.refreshIcon = 'spinner';
        this.syncIcon = 'spinner';
        return this.commentsProvider.invalidateCommentsData(this.contextLevel, this.instanceId, this.componentName, this.itemId, this.area).finally(function () {
            _this.page = 0;
            _this.comments = [];
            return _this.fetchComments(true, showErrors).finally(function () {
                refresher && refresher.complete();
            });
        });
    };
    /**
     * Show sync warnings if any.
     *
     * @param {string[]} warnings the warnings
     */
    CoreCommentsViewerPage.prototype.showSyncWarnings = function (warnings) {
        var message = this.textUtils.buildMessage(warnings);
        if (message) {
            this.domUtils.showErrorModal(message);
        }
    };
    /**
     * Tries to synchronize comments.
     *
     * @param  {boolean} showErrors Whether to display errors or not.
     * @return {Promise<any>}       Promise resolved if sync is successful, rejected otherwise.
     */
    CoreCommentsViewerPage.prototype.syncComments = function (showErrors) {
        var _this = this;
        return this.commentsSync.syncComments(this.contextLevel, this.instanceId, this.componentName, this.itemId, this.area).then(function (warnings) {
            _this.showSyncWarnings(warnings);
        }).catch(function (error) {
            if (showErrors) {
                _this.domUtils.showErrorModalDefault(error, 'core.errorsync', true);
            }
            return Promise.reject(null);
        });
    };
    /**
     * Add a new comment to the list.
     *
     * @param {Event} e Event.
     */
    CoreCommentsViewerPage.prototype.addComment = function (e) {
        var _this = this;
        e.preventDefault();
        e.stopPropagation();
        var params = {
            contextLevel: this.contextLevel,
            instanceId: this.instanceId,
            componentName: this.componentName,
            itemId: this.itemId,
            area: this.area,
            content: this.hasOffline ? this.offlineComment.content : ''
        };
        var modal = this.modalCtrl.create('CoreCommentsAddPage', params);
        modal.onDidDismiss(function (data) {
            if (data && data.comments) {
                _this.comments = data.comments.concat(_this.comments);
                _this.canDeleteComments = _this.addDeleteCommentsAvailable;
            }
            else if (data && !data.comments) {
                _this.fetchComments(false);
            }
        });
        modal.present();
    };
    /**
     * Delete a comment.
     *
     * @param {Event} e     Click event.
     * @param {any} comment Comment to delete.
     */
    CoreCommentsViewerPage.prototype.deleteComment = function (e, comment) {
        var _this = this;
        e.preventDefault();
        e.stopPropagation();
        var time = this.timeUtils.userDate((comment.lastmodified || comment.timecreated) * 1000, 'core.strftimerecentfull');
        comment.contextlevel = this.contextLevel;
        comment.instanceid = this.instanceId;
        comment.component = this.componentName;
        comment.itemid = this.itemId;
        comment.area = this.area;
        this.domUtils.showConfirm(this.translate.instant('core.comments.deletecommentbyon', { $a: { user: comment.fullname || '', time: time } })).then(function () {
            _this.commentsProvider.deleteComment(comment).then(function () {
                _this.showDelete = false;
                _this.refreshComments(true);
                _this.domUtils.showToast('core.comments.eventcommentdeleted', true, 3000);
            }).catch(function (error) {
                _this.domUtils.showErrorModalDefault(error, 'Delete comment failed.');
            });
        }).catch(function () {
            // User cancelled, nothing to do.
        });
    };
    /**
     * Restore a comment.
     *
     * @param {Event} e Click event.
     * @param {any} comment Comment to delete.
     */
    CoreCommentsViewerPage.prototype.undoDeleteComment = function (e, comment) {
        var _this = this;
        e.preventDefault();
        e.stopPropagation();
        this.offlineComments.undoDeleteComment(comment.id).then(function () {
            comment.deleted = false;
            _this.showDelete = false;
        });
    };
    /**
     * Toggle delete.
     */
    CoreCommentsViewerPage.prototype.toggleDelete = function () {
        this.showDelete = !this.showDelete;
    };
    /**
     * Page destroyed.
     */
    CoreCommentsViewerPage.prototype.ngOnDestroy = function () {
        this.syncObserver && this.syncObserver.off();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */])
    ], CoreCommentsViewerPage.prototype, "content", void 0);
    CoreCommentsViewerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-core-comments-viewer',template:/*ion-inline-start:"/Users/user/Documents/GitHub/moodlemobile2/src/core/comments/pages/viewer/viewer.html"*/'<ion-header>\n    <ion-navbar core-back-button>\n        <ion-title><core-format-text [text]="title"></core-format-text></ion-title>\n        <ion-buttons end>\n            <button *ngIf="canDeleteComments" item-end ion-button icon-only clear (click)="toggleDelete($event)" [attr.aria-label]="\'core.delete\' | translate">\n                <ion-icon name="create" ios="md-create"></ion-icon>\n            </button>\n            <core-context-menu>\n                <core-context-menu-item [hidden]="!(commentsLoaded && !hasOffline)" [priority]="100" [content]="\'core.refresh\' | translate" (action)="refreshComments(false)" [iconAction]="refreshIcon" [closeOnClick]="true"></core-context-menu-item>\n                <core-context-menu-item [hidden]="!(commentsLoaded && hasOffline)" [priority]="100" [content]="\'core.settings.synchronizenow\' | translate" (action)="refreshComments(true)" [iconAction]="syncIcon" [closeOnClick]="false"></core-context-menu-item>\n            </core-context-menu>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n<ion-content>\n    <ion-refresher [enabled]="commentsLoaded" (ionRefresh)="refreshComments(false, $event)">\n        <ion-refresher-content pullingText="{{ \'core.pulltorefresh\' | translate }}"></ion-refresher-content>\n    </ion-refresher>\n    <core-loading [hideUntil]="commentsLoaded">\n        <core-empty-box *ngIf="!comments || !comments.length" icon="chatbubbles" [message]="\'core.comments.nocomments\' | translate"></core-empty-box>\n\n        <div class="core-warning-card" icon-start *ngIf="hasOffline">\n            <ion-icon name="warning"></ion-icon>\n            {{ \'core.thereisdatatosync\' | translate:{$a: \'core.comments.comments\' | translate | lowercase } }}\n        </div>\n\n        <ion-card *ngIf="offlineComment" (click)="addComment($event)">\n            <ion-item text-wrap>\n                <ion-avatar core-user-avatar [user]="offlineComment" item-start></ion-avatar>\n                <h2>{{ offlineComment.fullname }}</h2>\n                <p>\n                    <ion-icon name="time"></ion-icon> {{ \'core.notsent\' | translate }}\n                </p>\n                <button *ngIf="showDelete" item-end ion-button icon-only clear [@coreSlideInOut]="\'fromRight\'" color="danger" (click)="deleteComment($event, offlineComment)" [attr.aria-label]="\'core.delete\' | translate">\n                    <ion-icon name="trash"></ion-icon>\n                </button>\n            </ion-item>\n            <ion-item text-wrap>\n                <core-format-text clean="true" [text]="offlineComment.content"></core-format-text>\n            </ion-item>\n        </ion-card>\n\n        <ion-card *ngFor="let comment of comments">\n            <ion-item text-wrap>\n                <ion-avatar core-user-avatar [user]="comment" item-start></ion-avatar>\n                <h2>{{ comment.fullname }}</h2>\n                <p *ngIf="!comment.deleted">{{ comment.timecreated * 1000 | coreFormatDate: \'strftimerecentfull\' }}</p>\n                <p *ngIf="comment.deleted">\n                    <ion-icon name="trash"></ion-icon> <span text-wrap>{{ \'core.deletedoffline\' | translate }}</span>\n                </p>\n                <button *ngIf="showDelete && !comment.deleted && comment.delete" item-end ion-button icon-only clear [@coreSlideInOut]="\'fromRight\'" color="danger" (click)="deleteComment($event, comment)" [attr.aria-label]="\'core.delete\' | translate">\n                    <ion-icon name="trash"></ion-icon>\n                </button>\n                <button *ngIf="showDelete && comment.deleted" item-end ion-button icon-only clear color="danger" (click)="undoDeleteComment($event, comment)" [attr.aria-label]="\'core.restore\' | translate">\n                    <ion-icon name="undo"></ion-icon>\n                </button>\n            </ion-item>\n            <ion-item text-wrap>\n                <core-format-text clean="true" [text]="comment.content"></core-format-text>\n            </ion-item>\n        </ion-card>\n\n        <core-infinite-loading [enabled]="canLoadMore" (action)="loadMore($event)" [error]="loadMoreError"></core-infinite-loading>\n    </core-loading>\n\n    <ion-fab core-fab bottom end *ngIf="canAddComments">\n        <button ion-fab (click)="addComment($event)" [attr.aria-label]="\'core.comments.addcomment\' | translate">\n            <ion-icon name="add"></ion-icon>\n        </button>\n    </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/Users/user/Documents/GitHub/moodlemobile2/src/core/comments/pages/viewer/viewer.html"*/,
            animations: [__WEBPACK_IMPORTED_MODULE_3__classes_animations__["b" /* coreSlideInOut */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_sites__["a" /* CoreSitesProvider */], __WEBPACK_IMPORTED_MODULE_9__core_user_providers_user__["a" /* CoreUserProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_utils_dom__["a" /* CoreDomUtilsProvider */], __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_10__providers_comments__["a" /* CoreCommentsProvider */], __WEBPACK_IMPORTED_MODULE_11__providers_offline__["a" /* CoreCommentsOfflineProvider */],
            __WEBPACK_IMPORTED_MODULE_8__providers_events__["a" /* CoreEventsProvider */], __WEBPACK_IMPORTED_MODULE_12__providers_sync__["a" /* CoreCommentsSyncProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_utils_text__["a" /* CoreTextUtilsProvider */], __WEBPACK_IMPORTED_MODULE_7__providers_utils_time__["a" /* CoreTimeUtilsProvider */]])
    ], CoreCommentsViewerPage);
    return CoreCommentsViewerPage;
}());

//# sourceMappingURL=viewer.js.map

/***/ })

});
//# sourceMappingURL=56.js.map