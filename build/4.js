webpackJsonp([4],{

/***/ 2047:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonCalendarIndexPageModule", function() { return AddonCalendarIndexPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pipes_pipes_module__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_components_module__ = __webpack_require__(2193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__index__ = __webpack_require__(2194);
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








var AddonCalendarIndexPageModule = /** @class */ (function () {
    function AddonCalendarIndexPageModule() {
    }
    AddonCalendarIndexPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__index__["a" /* AddonCalendarIndexPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* CoreComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__["a" /* CoreDirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_5__pipes_pipes_module__["a" /* CorePipesModule */],
                __WEBPACK_IMPORTED_MODULE_6__components_components_module__["a" /* AddonCalendarComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_7__index__["a" /* AddonCalendarIndexPage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], AddonCalendarIndexPageModule);
    return AddonCalendarIndexPageModule;
}());

//# sourceMappingURL=index.module.js.map

/***/ }),

/***/ 2091:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddonCalendarCalendarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_events__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_local_notifications__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_sites__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_utils_dom__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_utils_time__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_utils_utils__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_calendar__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_helper__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_calendar_offline__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__core_courses_providers_courses__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_app__ = __webpack_require__(9);
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
 * Component that displays a calendar.
 */
var AddonCalendarCalendarComponent = /** @class */ (function () {
    function AddonCalendarCalendarComponent(eventsProvider, sitesProvider, localNotificationsProvider, calendarProvider, calendarHelper, calendarOffline, domUtils, timeUtils, utils, coursesProvider, appProvider) {
        var _this = this;
        this.calendarProvider = calendarProvider;
        this.calendarHelper = calendarHelper;
        this.calendarOffline = calendarOffline;
        this.domUtils = domUtils;
        this.timeUtils = timeUtils;
        this.utils = utils;
        this.coursesProvider = coursesProvider;
        this.appProvider = appProvider;
        this.onEventClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.onDayClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.loaded = false;
        this.categoriesRetrieved = false;
        this.categories = {};
        this.offlineEvents = {}; // Offline events classified in month & day.
        this.offlineEditedEventsIds = []; // IDs of events edited in offline.
        this.deletedEvents = []; // Events deleted in offline.
        this.currentSiteId = sitesProvider.getCurrentSiteId();
        if (localNotificationsProvider.isAvailable()) {
            // Re-schedule events if default time changes.
            this.obsDefaultTimeChange = eventsProvider.on(__WEBPACK_IMPORTED_MODULE_7__providers_calendar__["a" /* AddonCalendarProvider */].DEFAULT_NOTIFICATION_TIME_CHANGED, function () {
                _this.weeks.forEach(function (week) {
                    week.days.forEach(function (day) {
                        calendarProvider.scheduleEventsNotifications(day.events);
                    });
                });
            }, this.currentSiteId);
        }
        // Listen for events "undeleted" (offline).
        this.undeleteEventObserver = eventsProvider.on(__WEBPACK_IMPORTED_MODULE_7__providers_calendar__["a" /* AddonCalendarProvider */].UNDELETED_EVENT_EVENT, function (data) {
            if (data && data.eventId) {
                // Mark it as undeleted, no need to refresh.
                _this.undeleteEvent(data.eventId);
                // Remove it from the list of deleted events if it's there.
                var index = _this.deletedEvents.indexOf(data.eventId);
                if (index != -1) {
                    _this.deletedEvents.splice(index, 1);
                }
            }
        }, this.currentSiteId);
    }
    /**
     * Component loaded.
     */
    AddonCalendarCalendarComponent.prototype.ngOnInit = function () {
        var now = new Date();
        this.year = this.initialYear ? Number(this.initialYear) : now.getFullYear();
        this.month = this.initialMonth ? Number(this.initialMonth) : now.getMonth() + 1;
        this.calculateIsCurrentMonth();
        this.fetchData();
    };
    /**
     * Detect changes on input properties.
     */
    AddonCalendarCalendarComponent.prototype.ngOnChanges = function (changes) {
        this.canNavigate = typeof this.canNavigate == 'undefined' ? true : this.utils.isTrueOrOne(this.canNavigate);
        this.displayNavButtons = typeof this.displayNavButtons == 'undefined' ? true :
            this.utils.isTrueOrOne(this.displayNavButtons);
        if ((changes.courseId || changes.categoryId) && this.weeks) {
            this.filterEvents();
        }
    };
    /**
     * Fetch contacts.
     *
     * @param {boolean} [refresh=false] True if we are refreshing events.
     * @return {Promise<any>} Promise resolved when done.
     */
    AddonCalendarCalendarComponent.prototype.fetchData = function (refresh) {
        var _this = this;
        if (refresh === void 0) { refresh = false; }
        var promises = [];
        promises.push(this.loadCategories());
        // Get offline events.
        promises.push(this.calendarOffline.getAllEditedEvents().then(function (events) {
            // Format data.
            events.forEach(function (event) {
                event.offline = true;
                _this.calendarHelper.formatEventData(event);
            });
            // Classify them by month.
            _this.offlineEvents = _this.calendarHelper.classifyIntoMonths(events);
            // Get the IDs of events edited in offline.
            var filtered = events.filter(function (event) {
                return event.id > 0;
            });
            _this.offlineEditedEventsIds = filtered.map(function (event) {
                return event.id;
            });
        }));
        // Get events deleted in offline.
        promises.push(this.calendarOffline.getAllDeletedEventsIds().then(function (ids) {
            _this.deletedEvents = ids;
        }));
        // Get time format to use.
        promises.push(this.calendarProvider.getCalendarTimeFormat().then(function (value) {
            _this.timeFormat = value;
        }));
        return Promise.all(promises).then(function () {
            return _this.fetchEvents();
        }).catch(function (error) {
            _this.domUtils.showErrorModalDefault(error, 'addon.calendar.errorloadevents', true);
        }).finally(function () {
            _this.loaded = true;
        });
    };
    /**
     * Fetch the events for current month.
     *
     * @return {Promise<any>} Promise resolved when done.
     */
    AddonCalendarCalendarComponent.prototype.fetchEvents = function () {
        var _this = this;
        // Don't pass courseId and categoryId, we'll filter them locally.
        return this.calendarProvider.getMonthlyEvents(this.year, this.month).catch(function (error) {
            if (!_this.appProvider.isOnline()) {
                // Allow navigating to non-cached months in offline (behave as if using emergency cache).
                return _this.calendarHelper.getOfflineMonthWeeks(_this.year, _this.month);
            }
            else {
                return Promise.reject(error);
            }
        }).then(function (result) {
            // Calculate the period name. We don't use the one in result because it's in server's language.
            _this.periodName = _this.timeUtils.userDate(new Date(_this.year, _this.month - 1).getTime(), 'core.strftimemonthyear');
            _this.weekDays = _this.calendarProvider.getWeekDays(result.daynames[0].dayno);
            _this.weeks = result.weeks;
            _this.calculateIsCurrentMonth();
            if (_this.isCurrentMonth) {
                var currentDay_1 = new Date().getDate();
                var isPast_1 = true;
                _this.weeks.forEach(function (week) {
                    week.days.some(function (day) {
                        day.istoday = day.mday == currentDay_1;
                        day.ispast = isPast_1 && !day.istoday;
                        isPast_1 = day.ispast;
                        if (day.istoday) {
                            day.events.forEach(function (event) {
                                event.ispast = _this.isEventPast(event);
                            });
                            return true;
                        }
                        return day.istoday;
                    });
                });
            }
            // Merge the online events with offline data.
            _this.mergeEvents();
            // Filter events by course.
            _this.filterEvents();
        });
    };
    /**
     * Load categories to be able to filter events.
     *
     * @return {Promise<any>} Promise resolved when done.
     */
    AddonCalendarCalendarComponent.prototype.loadCategories = function () {
        var _this = this;
        if (this.categoriesRetrieved) {
            // Already retrieved, stop.
            return Promise.resolve();
        }
        return this.coursesProvider.getCategories(0, true).then(function (cats) {
            _this.categoriesRetrieved = true;
            _this.categories = {};
            // Index categories by ID.
            cats.forEach(function (category) {
                _this.categories[category.id] = category;
            });
        }).catch(function () {
            // Ignore errors.
        });
    };
    /**
     * Filter events to only display events belonging to a certain course.
     */
    AddonCalendarCalendarComponent.prototype.filterEvents = function () {
        var _this = this;
        var courseId = this.courseId ? Number(this.courseId) : undefined, categoryId = this.categoryId ? Number(this.categoryId) : undefined;
        this.weeks.forEach(function (week) {
            week.days.forEach(function (day) {
                if (!courseId || courseId < 0) {
                    day.filteredEvents = day.events;
                }
                else {
                    day.filteredEvents = day.events.filter(function (event) {
                        return _this.calendarHelper.shouldDisplayEvent(event, courseId, categoryId, _this.categories);
                    });
                }
                // Re-calculate some properties.
                _this.calendarHelper.calculateDayData(day, day.filteredEvents);
            });
        });
    };
    /**
     * Refresh events.
     *
     * @param {boolean} [afterChange] Whether the refresh is done after an event has changed or has been synced.
     * @return {Promise<any>} Promise resolved when done.
     */
    AddonCalendarCalendarComponent.prototype.refreshData = function (afterChange) {
        var _this = this;
        var promises = [];
        // Don't invalidate monthly events after a change, it has already been handled.
        if (!afterChange) {
            promises.push(this.calendarProvider.invalidateMonthlyEvents(this.year, this.month));
        }
        promises.push(this.coursesProvider.invalidateCategories(0, true));
        promises.push(this.calendarProvider.invalidateTimeFormat());
        this.categoriesRetrieved = false; // Get categories again.
        return Promise.all(promises).then(function () {
            return _this.fetchData(true);
        });
    };
    /**
     * Load next month.
     */
    AddonCalendarCalendarComponent.prototype.loadNext = function () {
        var _this = this;
        this.increaseMonth();
        this.loaded = false;
        this.fetchEvents().catch(function (error) {
            _this.domUtils.showErrorModalDefault(error, 'addon.calendar.errorloadevents', true);
            _this.decreaseMonth();
        }).finally(function () {
            _this.loaded = true;
        });
    };
    /**
     * Load previous month.
     */
    AddonCalendarCalendarComponent.prototype.loadPrevious = function () {
        var _this = this;
        this.decreaseMonth();
        this.loaded = false;
        this.fetchEvents().catch(function (error) {
            _this.domUtils.showErrorModalDefault(error, 'addon.calendar.errorloadevents', true);
            _this.increaseMonth();
        }).finally(function () {
            _this.loaded = true;
        });
    };
    /**
     * An event was clicked.
     *
     * @param {any} calendarEvent Calendar event..
     * @param {MouseEvent} event Mouse event.
     */
    AddonCalendarCalendarComponent.prototype.eventClicked = function (calendarEvent, event) {
        this.onEventClicked.emit(calendarEvent.id);
        event.stopPropagation();
    };
    /**
     * A day was clicked.
     *
     * @param {number} day Day.
     */
    AddonCalendarCalendarComponent.prototype.dayClicked = function (day) {
        this.onDayClicked.emit({ day: day, month: this.month, year: this.year });
    };
    /**
     * Check if user is viewing the current month.
     */
    AddonCalendarCalendarComponent.prototype.calculateIsCurrentMonth = function () {
        var now = new Date();
        this.currentTime = this.timeUtils.timestamp();
        this.isCurrentMonth = this.year == now.getFullYear() && this.month == now.getMonth() + 1;
        this.isPastMonth = this.year < now.getFullYear() || (this.year == now.getFullYear() && this.month < now.getMonth() + 1);
    };
    /**
     * Go to current month.
     */
    AddonCalendarCalendarComponent.prototype.goToCurrentMonth = function () {
        var _this = this;
        var now = new Date(), initialMonth = this.month, initialYear = this.year;
        this.month = now.getMonth() + 1;
        this.year = now.getFullYear();
        this.loaded = false;
        this.fetchEvents().then(function () {
            _this.isCurrentMonth = true;
        }).catch(function (error) {
            _this.domUtils.showErrorModalDefault(error, 'addon.calendar.errorloadevents', true);
            _this.year = initialYear;
            _this.month = initialMonth;
        }).finally(function () {
            _this.loaded = true;
        });
    };
    /**
     * Decrease the current month.
     */
    AddonCalendarCalendarComponent.prototype.decreaseMonth = function () {
        if (this.month === 1) {
            this.month = 12;
            this.year--;
        }
        else {
            this.month--;
        }
    };
    /**
     * Increase the current month.
     */
    AddonCalendarCalendarComponent.prototype.increaseMonth = function () {
        if (this.month === 12) {
            this.month = 1;
            this.year++;
        }
        else {
            this.month++;
        }
    };
    /**
     * Merge online events with the offline events of that period.
     */
    AddonCalendarCalendarComponent.prototype.mergeEvents = function () {
        var _this = this;
        var monthOfflineEvents = this.offlineEvents[this.calendarHelper.getMonthId(this.year, this.month)];
        this.weeks.forEach(function (week) {
            week.days.forEach(function (day) {
                // Format online events.
                day.events.forEach(_this.calendarHelper.formatEventData.bind(_this.calendarHelper));
                // Schedule notifications for the events retrieved (only future events will be scheduled).
                _this.calendarProvider.scheduleEventsNotifications(day.events);
                if (monthOfflineEvents || _this.deletedEvents.length) {
                    // There is offline data, merge it.
                    if (_this.deletedEvents.length) {
                        // Mark as deleted the events that were deleted in offline.
                        day.events.forEach(function (event) {
                            event.deleted = _this.deletedEvents.indexOf(event.id) != -1;
                        });
                    }
                    if (_this.offlineEditedEventsIds.length) {
                        // Remove the online events that were modified in offline.
                        day.events = day.events.filter(function (event) {
                            return _this.offlineEditedEventsIds.indexOf(event.id) == -1;
                        });
                    }
                    if (monthOfflineEvents && monthOfflineEvents[day.mday]) {
                        // Add the offline events (either new or edited).
                        day.events = _this.sortEvents(day.events.concat(monthOfflineEvents[day.mday]));
                    }
                }
            });
        });
    };
    /**
     * Sort events by timestart.
     *
     * @param {any[]} events List to sort.
     */
    AddonCalendarCalendarComponent.prototype.sortEvents = function (events) {
        return events.sort(function (a, b) {
            if (a.timestart == b.timestart) {
                return a.timeduration - b.timeduration;
            }
            return a.timestart - b.timestart;
        });
    };
    /**
     * Undelete a certain event.
     *
     * @param {number} eventId Event ID.
     */
    AddonCalendarCalendarComponent.prototype.undeleteEvent = function (eventId) {
        if (!this.weeks) {
            return;
        }
        this.weeks.forEach(function (week) {
            week.days.forEach(function (day) {
                var event = day.events.find(function (event) {
                    return event.id == eventId;
                });
                if (event) {
                    event.deleted = false;
                }
            });
        });
    };
    /**
     * Returns if the event is in the past or not.
     * @param  {any}     event Event object.
     * @return {boolean}       True if it's in the past.
     */
    AddonCalendarCalendarComponent.prototype.isEventPast = function (event) {
        return (event.timestart + event.timeduration) < this.currentTime;
    };
    /**
     * Component destroyed.
     */
    AddonCalendarCalendarComponent.prototype.ngOnDestroy = function () {
        this.undeleteEventObserver && this.undeleteEventObserver.off();
        this.obsDefaultTimeChange && this.obsDefaultTimeChange.off();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], AddonCalendarCalendarComponent.prototype, "initialYear", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], AddonCalendarCalendarComponent.prototype, "initialMonth", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], AddonCalendarCalendarComponent.prototype, "courseId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], AddonCalendarCalendarComponent.prototype, "categoryId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], AddonCalendarCalendarComponent.prototype, "canNavigate", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], AddonCalendarCalendarComponent.prototype, "displayNavButtons", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", Object)
    ], AddonCalendarCalendarComponent.prototype, "onEventClicked", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", Object)
    ], AddonCalendarCalendarComponent.prototype, "onDayClicked", void 0);
    AddonCalendarCalendarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'addon-calendar-calendar',template:/*ion-inline-start:"/Users/user/Documents/GitHub/moodlemobile2/src/addon/calendar/components/calendar/addon-calendar-calendar.html"*/'\n<!-- Add buttons to the nav bar. -->\n<core-navbar-buttons end prepend>\n    <core-context-menu>\n        <core-context-menu-item *ngIf="canNavigate && !isCurrentMonth && displayNavButtons" [priority]="900" [content]="\'addon.calendar.currentmonth\' | translate" [iconAction]="\'fa-calendar-times-o\'" (action)="goToCurrentMonth()"></core-context-menu-item>\n    </core-context-menu>\n</core-navbar-buttons>\n\n<core-loading [hideUntil]="loaded" class="core-loading-center">\n    <!-- Period name and arrows to navigate. -->\n    <ion-grid no-padding class="addon-calendar-navigation">\n        <ion-row align-items-center>\n            <ion-col text-start *ngIf="canNavigate">\n                <a ion-button icon-only clear (click)="loadPrevious()" [title]="\'core.previous\' | translate">\n                    <ion-icon name="arrow-back" md="ios-arrow-back"></ion-icon>\n                </a>\n            </ion-col>\n            <ion-col text-center class="addon-calendar-period">\n                <h3>{{ periodName }}</h3>\n            </ion-col>\n            <ion-col text-end *ngIf="canNavigate">\n                <a ion-button icon-only clear (click)="loadNext()" [title]="\'core.next\' | translate">\n                    <ion-icon name="arrow-forward" md="ios-arrow-forward"></ion-icon>\n                </a>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n\n    <!-- Calendar view. -->\n    <ion-grid class="addon-calendar-months">\n        <!-- List of days. -->\n        <ion-row>\n            <ion-col text-center *ngFor="let day of weekDays" class="addon-calendar-weekday">\n                <span class="hidden-tablet" [title]="day.fullname | translate">{{ day.shortname | translate }}</span>\n                <span class="hidden-phone">{{ day.fullname | translate }}</span>\n            </ion-col>\n        </ion-row>\n\n        <!-- Weeks. -->\n        <ion-row *ngFor="let week of weeks" class="addon-calendar-week">\n            <ion-col *ngFor="let value of week.prepadding" class="dayblank addon-calendar-day"></ion-col> <!-- Empty slots (first week). -->\n            <ion-col text-center *ngFor="let day of week.days"  (click)="dayClicked(day.mday)" [ngClass]=\'{"hasevents": day.hasevents, "today": isCurrentMonth && day.istoday, "weekend": day.isweekend, "duration_finish": day.haslastdayofevent}\' class="addon-calendar-day" [class.addon-calendar-event-past-day]="isPastMonth || day.ispast">\n                <p class="addon-calendar-day-number"><span>{{ day.mday }}</span></p>\n\n                <!-- In phone, display some dots to indicate the type of events. -->\n                <p class="hidden-tablet addon-calendar-dot-types"><span *ngFor="let type of day.calendareventtypes" class="calendar_event_type calendar_event_{{type}}"></span></p>\n\n                <!-- In tablet, display list of events. -->\n                <div class="hidden-phone addon-calendar-day-events">\n                    <ng-container *ngFor="let event of day.filteredEvents | slice:0:4; let index = index">\n                        <p *ngIf="index < 3 || day.filteredEvents.length == 4" class="addon-calendar-event" (click)="eventClicked(event, $event)" [class.addon-calendar-event-past]="event.ispast">\n                            <span class="calendar_event_type calendar_event_{{event.formattedType}}"></span>\n                            <ion-icon *ngIf="event.offline && !event.deleted" name="time"></ion-icon>\n                            <ion-icon *ngIf="event.deleted" name="trash"></ion-icon>\n                            <span class="addon-calendar-event-time">{{ event.timestart * 1000 | coreFormatDate: timeFormat }}</span>\n                            <img *ngIf="event.moduleIcon" src="{{event.moduleIcon}}" alt="" role="presentation" class="core-module-icon">\n                            <span class="addon-calendar-event-name">{{event.name}}</span>\n                        </p>\n                    </ng-container>\n                    <p *ngIf="day.filteredEvents.length > 4" class="addon-calendar-day-more"><b>{{ \'core.nummore\' | translate:{$a: day.filteredEvents.length - 3} }}</b></p>\n                </div>\n            </ion-col>\n            <ion-col *ngFor="let value of week.postpadding" class="dayblank addon-calendar-day"></ion-col> <!-- Empty slots (last week). -->\n        </ion-row>\n    </ion-grid>\n\n</core-loading>\n'/*ion-inline-end:"/Users/user/Documents/GitHub/moodlemobile2/src/addon/calendar/components/calendar/addon-calendar-calendar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_events__["a" /* CoreEventsProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_sites__["a" /* CoreSitesProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_local_notifications__["a" /* CoreLocalNotificationsProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_calendar__["a" /* AddonCalendarProvider */],
            __WEBPACK_IMPORTED_MODULE_8__providers_helper__["a" /* AddonCalendarHelperProvider */],
            __WEBPACK_IMPORTED_MODULE_9__providers_calendar_offline__["a" /* AddonCalendarOfflineProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_utils_dom__["a" /* CoreDomUtilsProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_utils_time__["a" /* CoreTimeUtilsProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_utils_utils__["a" /* CoreUtilsProvider */],
            __WEBPACK_IMPORTED_MODULE_10__core_courses_providers_courses__["a" /* CoreCoursesProvider */],
            __WEBPACK_IMPORTED_MODULE_11__providers_app__["a" /* CoreAppProvider */]])
    ], AddonCalendarCalendarComponent);
    return AddonCalendarCalendarComponent;
}());

//# sourceMappingURL=calendar.js.map

/***/ }),

/***/ 2092:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddonCalendarUpcomingEventsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_events__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_local_notifications__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_sites__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_utils_dom__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_calendar__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_helper__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_calendar_offline__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__core_courses_providers_courses__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__core_constants__ = __webpack_require__(20);
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
 * Component that displays upcoming events.
 */
var AddonCalendarUpcomingEventsComponent = /** @class */ (function () {
    function AddonCalendarUpcomingEventsComponent(eventsProvider, sitesProvider, localNotificationsProvider, calendarProvider, calendarHelper, calendarOffline, domUtils, coursesProvider) {
        var _this = this;
        this.calendarProvider = calendarProvider;
        this.calendarHelper = calendarHelper;
        this.calendarOffline = calendarOffline;
        this.domUtils = domUtils;
        this.coursesProvider = coursesProvider;
        this.onEventClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.filteredEvents = [];
        this.loaded = false;
        this.categoriesRetrieved = false;
        this.categories = {};
        this.events = []; // Events (both online and offline).
        this.onlineEvents = [];
        this.offlineEvents = []; // Offline events.
        this.deletedEvents = []; // Events deleted in offline.
        this.currentSiteId = sitesProvider.getCurrentSiteId();
        if (localNotificationsProvider.isAvailable()) {
            // Re-schedule events if default time changes.
            this.obsDefaultTimeChange = eventsProvider.on(__WEBPACK_IMPORTED_MODULE_5__providers_calendar__["a" /* AddonCalendarProvider */].DEFAULT_NOTIFICATION_TIME_CHANGED, function () {
                calendarProvider.scheduleEventsNotifications(_this.onlineEvents);
            }, this.currentSiteId);
        }
        // Listen for events "undeleted" (offline).
        this.undeleteEventObserver = eventsProvider.on(__WEBPACK_IMPORTED_MODULE_5__providers_calendar__["a" /* AddonCalendarProvider */].UNDELETED_EVENT_EVENT, function (data) {
            if (data && data.eventId) {
                // Mark it as undeleted, no need to refresh.
                _this.undeleteEvent(data.eventId);
                // Remove it from the list of deleted events if it's there.
                var index = _this.deletedEvents.indexOf(data.eventId);
                if (index != -1) {
                    _this.deletedEvents.splice(index, 1);
                }
            }
        }, this.currentSiteId);
    }
    /**
     * Component loaded.
     */
    AddonCalendarUpcomingEventsComponent.prototype.ngOnInit = function () {
        this.fetchData();
    };
    /**
     * Detect changes on input properties.
     */
    AddonCalendarUpcomingEventsComponent.prototype.ngOnChanges = function (changes) {
        if (changes.courseId || changes.categoryId) {
            this.filterEvents();
        }
    };
    /**
     * Fetch data.
     *
     * @param {boolean} [refresh=false] True if we are refreshing events.
     * @return {Promise<any>} Promise resolved when done.
     */
    AddonCalendarUpcomingEventsComponent.prototype.fetchData = function (refresh) {
        var _this = this;
        if (refresh === void 0) { refresh = false; }
        var promises = [];
        promises.push(this.loadCategories());
        // Get offline events.
        promises.push(this.calendarOffline.getAllEditedEvents().then(function (events) {
            // Format data.
            events.forEach(function (event) {
                event.offline = true;
                _this.calendarHelper.formatEventData(event);
            });
            _this.offlineEvents = _this.sortEvents(events);
        }));
        // Get events deleted in offline.
        promises.push(this.calendarOffline.getAllDeletedEventsIds().then(function (ids) {
            _this.deletedEvents = ids;
        }));
        // Get user preferences.
        promises.push(this.calendarProvider.getCalendarLookAhead().then(function (value) {
            _this.lookAhead = value;
        }));
        promises.push(this.calendarProvider.getCalendarTimeFormat().then(function (value) {
            _this.timeFormat = value;
        }));
        return Promise.all(promises).then(function () {
            return _this.fetchEvents();
        }).catch(function (error) {
            _this.domUtils.showErrorModalDefault(error, 'addon.calendar.errorloadevents', true);
        }).finally(function () {
            _this.loaded = true;
        });
    };
    /**
     * Fetch upcoming events.
     *
     * @return {Promise<any>} Promise resolved when done.
     */
    AddonCalendarUpcomingEventsComponent.prototype.fetchEvents = function () {
        var _this = this;
        // Don't pass courseId and categoryId, we'll filter them locally.
        return this.calendarProvider.getUpcomingEvents().then(function (result) {
            var promises = [];
            _this.onlineEvents = result.events;
            _this.onlineEvents.forEach(_this.calendarHelper.formatEventData.bind(_this.calendarHelper));
            // Schedule notifications for the events retrieved.
            _this.calendarProvider.scheduleEventsNotifications(_this.onlineEvents);
            // Merge the online events with offline data.
            _this.events = _this.mergeEvents();
            // Filter events by course.
            _this.filterEvents();
            // Re-calculate the formatted time so it uses the device date.
            _this.events.forEach(function (event) {
                promises.push(_this.calendarProvider.formatEventTime(event, _this.timeFormat).then(function (time) {
                    event.formattedtime = time;
                }));
            });
            return Promise.all(promises);
        });
    };
    /**
     * Load categories to be able to filter events.
     *
     * @return {Promise<any>} Promise resolved when done.
     */
    AddonCalendarUpcomingEventsComponent.prototype.loadCategories = function () {
        var _this = this;
        if (this.categoriesRetrieved) {
            // Already retrieved, stop.
            return Promise.resolve();
        }
        return this.coursesProvider.getCategories(0, true).then(function (cats) {
            _this.categoriesRetrieved = true;
            _this.categories = {};
            // Index categories by ID.
            cats.forEach(function (category) {
                _this.categories[category.id] = category;
            });
        }).catch(function () {
            // Ignore errors.
        });
    };
    /**
     * Filter events to only display events belonging to a certain course.
     */
    AddonCalendarUpcomingEventsComponent.prototype.filterEvents = function () {
        var _this = this;
        var courseId = this.courseId ? Number(this.courseId) : undefined, categoryId = this.categoryId ? Number(this.categoryId) : undefined;
        if (!courseId || courseId < 0) {
            this.filteredEvents = this.events;
        }
        else {
            this.filteredEvents = this.events.filter(function (event) {
                return _this.calendarHelper.shouldDisplayEvent(event, courseId, categoryId, _this.categories);
            });
        }
    };
    /**
     * Refresh events.
     *
     * @param {boolean} [afterChange] Whether the refresh is done after an event has changed or has been synced.
     * @return {Promise<any>} Promise resolved when done.
     */
    AddonCalendarUpcomingEventsComponent.prototype.refreshData = function (afterChange) {
        var _this = this;
        var promises = [];
        // Don't invalidate upcoming events after a change, it has already been handled.
        if (!afterChange) {
            promises.push(this.calendarProvider.invalidateAllUpcomingEvents());
        }
        promises.push(this.coursesProvider.invalidateCategories(0, true));
        promises.push(this.calendarProvider.invalidateLookAhead());
        promises.push(this.calendarProvider.invalidateTimeFormat());
        this.categoriesRetrieved = false; // Get categories again.
        return Promise.all(promises).then(function () {
            return _this.fetchData(true);
        });
    };
    /**
     * An event was clicked.
     *
     * @param {any} event Event.
     */
    AddonCalendarUpcomingEventsComponent.prototype.eventClicked = function (event) {
        this.onEventClicked.emit(event.id);
    };
    /**
     * Merge online events with the offline events of that period.
     *
     * @return {any[]} Merged events.
     */
    AddonCalendarUpcomingEventsComponent.prototype.mergeEvents = function () {
        var _this = this;
        if (!this.offlineEvents.length && !this.deletedEvents.length) {
            // No offline events, nothing to merge.
            return this.onlineEvents;
        }
        var start = Date.now() / 1000, end = start + (__WEBPACK_IMPORTED_MODULE_9__core_constants__["a" /* CoreConstants */].SECONDS_DAY * this.lookAhead);
        var result = this.onlineEvents;
        if (this.deletedEvents.length) {
            // Mark as deleted the events that were deleted in offline.
            result.forEach(function (event) {
                event.deleted = _this.deletedEvents.indexOf(event.id) != -1;
            });
        }
        if (this.offlineEvents.length) {
            // Remove the online events that were modified in offline.
            result = result.filter(function (event) {
                var offlineEvent = _this.offlineEvents.find(function (ev) {
                    return ev.id == event.id;
                });
                return !offlineEvent;
            });
        }
        // Now get the offline events that belong to this period.
        var periodOfflineEvents = this.offlineEvents.filter(function (event) {
            return (event.timestart >= start || event.timestart + event.timeduration >= start) && event.timestart <= end;
        });
        // Merge both arrays and sort them.
        result = result.concat(periodOfflineEvents);
        return this.sortEvents(result);
    };
    /**
     * Sort events by timestart.
     *
     * @param {any[]} events List to sort.
     */
    AddonCalendarUpcomingEventsComponent.prototype.sortEvents = function (events) {
        return events.sort(function (a, b) {
            if (a.timestart == b.timestart) {
                return a.timeduration - b.timeduration;
            }
            return a.timestart - b.timestart;
        });
    };
    /**
     * Undelete a certain event.
     *
     * @param {number} eventId Event ID.
     */
    AddonCalendarUpcomingEventsComponent.prototype.undeleteEvent = function (eventId) {
        var event = this.onlineEvents.find(function (event) {
            return event.id == eventId;
        });
        if (event) {
            event.deleted = false;
        }
    };
    /**
     * Component destroyed.
     */
    AddonCalendarUpcomingEventsComponent.prototype.ngOnDestroy = function () {
        this.undeleteEventObserver && this.undeleteEventObserver.off();
        this.obsDefaultTimeChange && this.obsDefaultTimeChange.off();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], AddonCalendarUpcomingEventsComponent.prototype, "courseId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], AddonCalendarUpcomingEventsComponent.prototype, "categoryId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", Object)
    ], AddonCalendarUpcomingEventsComponent.prototype, "onEventClicked", void 0);
    AddonCalendarUpcomingEventsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'addon-calendar-upcoming-events',template:/*ion-inline-start:"/Users/user/Documents/GitHub/moodlemobile2/src/addon/calendar/components/upcoming-events/addon-calendar-upcoming-events.html"*/'<core-loading [hideUntil]="loaded" class="core-loading-center">\n    <core-empty-box *ngIf="!filteredEvents || !filteredEvents.length" icon="calendar" [message]="\'addon.calendar.noevents\' | translate">\n    </core-empty-box>\n\n    <ion-list *ngIf="filteredEvents && filteredEvents.length" no-margin>\n        <ng-container *ngFor="let event of filteredEvents">\n            <a ion-item text-wrap [title]="event.name" (click)="eventClicked(event)" [class.core-split-item-selected]="event.id == eventId" class="addon-calendar-event" [ngClass]="[\'addon-calendar-eventtype-\'+event.eventtype]">\n                <img *ngIf="event.moduleIcon" src="{{event.moduleIcon}}" item-start class="core-module-icon">\n                <core-icon *ngIf="event.icon && !event.moduleIcon" [name]="event.icon" item-start></core-icon>\n                <h2><core-format-text [text]="event.name"></core-format-text></h2>\n                <p><core-format-text [text]="event.formattedtime"></core-format-text></p>\n                <ion-note *ngIf="event.offline && !event.deleted" item-end>\n                    <ion-icon name="time"></ion-icon>\n                    <span text-wrap>{{ \'core.notsent\' | translate }}</span>\n                </ion-note>\n                <ion-note *ngIf="event.deleted" item-end>\n                    <ion-icon name="trash"></ion-icon>\n                    <span text-wrap>{{ \'core.deletedoffline\' | translate }}</span>\n                </ion-note>\n            </a>\n        </ng-container>\n    </ion-list>\n\n</core-loading>\n'/*ion-inline-end:"/Users/user/Documents/GitHub/moodlemobile2/src/addon/calendar/components/upcoming-events/addon-calendar-upcoming-events.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_events__["a" /* CoreEventsProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_sites__["a" /* CoreSitesProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_local_notifications__["a" /* CoreLocalNotificationsProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_calendar__["a" /* AddonCalendarProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_helper__["a" /* AddonCalendarHelperProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_calendar_offline__["a" /* AddonCalendarOfflineProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_utils_dom__["a" /* CoreDomUtilsProvider */],
            __WEBPACK_IMPORTED_MODULE_8__core_courses_providers_courses__["a" /* CoreCoursesProvider */]])
    ], AddonCalendarUpcomingEventsComponent);
    return AddonCalendarUpcomingEventsComponent;
}());

//# sourceMappingURL=upcoming-events.js.map

/***/ }),

/***/ 2193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddonCalendarComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_components_module__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__directives_directives_module__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pipes_pipes_module__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_calendar_calendar__ = __webpack_require__(2091);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_upcoming_events_upcoming_events__ = __webpack_require__(2092);
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









var AddonCalendarComponentsModule = /** @class */ (function () {
    function AddonCalendarComponentsModule() {
    }
    AddonCalendarComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__components_calendar_calendar__["a" /* AddonCalendarCalendarComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_upcoming_events_upcoming_events__["a" /* AddonCalendarUpcomingEventsComponent */]
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
                __WEBPACK_IMPORTED_MODULE_7__components_calendar_calendar__["a" /* AddonCalendarCalendarComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_upcoming_events_upcoming_events__["a" /* AddonCalendarUpcomingEventsComponent */]
            ]
        })
    ], AddonCalendarComponentsModule);
    return AddonCalendarComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 2194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddonCalendarIndexPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_app__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_events__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_local_notifications__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_sites__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_utils_dom__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_calendar__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_calendar_offline__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_helper__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_calendar_calendar__ = __webpack_require__(2091);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_upcoming_events_upcoming_events__ = __webpack_require__(2092);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_calendar_sync__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__core_courses_providers_helper__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_network__ = __webpack_require__(135);
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
// WITHOUT WARRANTIES OR CONDITIONS OFx ANY KIND, either express or implied.
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
 * Page that displays the calendar events.
 */
var AddonCalendarIndexPage = /** @class */ (function () {
    function AddonCalendarIndexPage(localNotificationsProvider, navParams, network, zone, sitesProvider, navCtrl, domUtils, calendarProvider, calendarOffline, calendarHelper, calendarSync, eventsProvider, coursesHelper, appProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.domUtils = domUtils;
        this.calendarProvider = calendarProvider;
        this.calendarOffline = calendarOffline;
        this.calendarHelper = calendarHelper;
        this.calendarSync = calendarSync;
        this.eventsProvider = eventsProvider;
        this.coursesHelper = coursesHelper;
        this.appProvider = appProvider;
        this.canCreate = false;
        this.notificationsEnabled = false;
        this.loaded = false;
        this.hasOffline = false;
        this.isOnline = false;
        this.showCalendar = true;
        this.loadUpcoming = false;
        this.courseId = navParams.get('courseId');
        this.eventId = navParams.get('eventId') || false;
        this.year = navParams.get('year');
        this.month = navParams.get('month');
        this.notificationsEnabled = localNotificationsProvider.isAvailable();
        this.currentSiteId = sitesProvider.getCurrentSiteId();
        this.loadUpcoming = !!navParams.get('upcoming');
        this.showCalendar = !this.loadUpcoming;
        // Listen for events added. When an event is added, reload the data.
        this.newEventObserver = eventsProvider.on(__WEBPACK_IMPORTED_MODULE_7__providers_calendar__["a" /* AddonCalendarProvider */].NEW_EVENT_EVENT, function (data) {
            if (data && data.event) {
                _this.loaded = false;
                _this.refreshData(true, false, true);
            }
        }, this.currentSiteId);
        // Listen for new event discarded event. When it does, reload the data.
        this.discardedObserver = eventsProvider.on(__WEBPACK_IMPORTED_MODULE_7__providers_calendar__["a" /* AddonCalendarProvider */].NEW_EVENT_DISCARDED_EVENT, function () {
            _this.loaded = false;
            _this.refreshData(true, false, true);
        }, this.currentSiteId);
        // Listen for events edited. When an event is edited, reload the data.
        this.editEventObserver = eventsProvider.on(__WEBPACK_IMPORTED_MODULE_7__providers_calendar__["a" /* AddonCalendarProvider */].EDIT_EVENT_EVENT, function (data) {
            if (data && data.event) {
                _this.loaded = false;
                _this.refreshData(true, false, true);
            }
        }, this.currentSiteId);
        // Refresh data if calendar events are synchronized automatically.
        this.syncObserver = eventsProvider.on(__WEBPACK_IMPORTED_MODULE_12__providers_calendar_sync__["a" /* AddonCalendarSyncProvider */].AUTO_SYNCED, function (data) {
            _this.loaded = false;
            _this.refreshData(false, false, true);
        }, this.currentSiteId);
        // Refresh data if calendar events are synchronized manually but not by this page.
        this.manualSyncObserver = eventsProvider.on(__WEBPACK_IMPORTED_MODULE_12__providers_calendar_sync__["a" /* AddonCalendarSyncProvider */].MANUAL_SYNCED, function (data) {
            if (data && data.source != 'index') {
                _this.loaded = false;
                _this.refreshData(false, false, true);
            }
        }, this.currentSiteId);
        // Update the events when an event is deleted.
        this.deleteEventObserver = eventsProvider.on(__WEBPACK_IMPORTED_MODULE_7__providers_calendar__["a" /* AddonCalendarProvider */].DELETED_EVENT_EVENT, function (data) {
            _this.loaded = false;
            _this.refreshData(false, false, true);
        }, this.currentSiteId);
        // Update the "hasOffline" property if an event deleted in offline is restored.
        this.undeleteEventObserver = eventsProvider.on(__WEBPACK_IMPORTED_MODULE_7__providers_calendar__["a" /* AddonCalendarProvider */].UNDELETED_EVENT_EVENT, function (data) {
            _this.calendarOffline.hasOfflineData().then(function (hasOffline) {
                _this.hasOffline = hasOffline;
            });
        }, this.currentSiteId);
        // Refresh online status when changes.
        this.onlineObserver = network.onchange().subscribe(function () {
            // Execute the callback in the Angular zone, so change detection doesn't stop working.
            zone.run(function () {
                _this.isOnline = _this.appProvider.isOnline();
            });
        });
    }
    /**
     * View loaded.
     */
    AddonCalendarIndexPage.prototype.ngOnInit = function () {
        if (this.eventId) {
            // There is an event to load, open the event in a new state.
            this.gotoEvent(this.eventId);
        }
        this.fetchData(true, false);
    };
    /**
     * Fetch all the data required for the view.
     *
     * @param {boolean} [sync] Whether it should try to synchronize offline events.
     * @param {boolean} [showErrors] Whether to show sync errors to the user.
     * @return {Promise<any>} Promise resolved when done.
     */
    AddonCalendarIndexPage.prototype.fetchData = function (sync, showErrors) {
        var _this = this;
        this.syncIcon = 'spinner';
        this.isOnline = this.appProvider.isOnline();
        var promise;
        if (sync) {
            // Try to synchronize offline events.
            promise = this.calendarSync.syncEvents().then(function (result) {
                if (result.warnings && result.warnings.length) {
                    _this.domUtils.showErrorModal(result.warnings[0]);
                }
                if (result.updated) {
                    // Trigger a manual sync event.
                    result.source = 'index';
                    _this.eventsProvider.trigger(__WEBPACK_IMPORTED_MODULE_12__providers_calendar_sync__["a" /* AddonCalendarSyncProvider */].MANUAL_SYNCED, result, _this.currentSiteId);
                }
            }).catch(function (error) {
                if (showErrors) {
                    _this.domUtils.showErrorModalDefault(error, 'core.errorsync', true);
                }
            });
        }
        else {
            promise = Promise.resolve();
        }
        return promise.then(function () {
            var promises = [];
            _this.hasOffline = false;
            // Load courses for the popover.
            promises.push(_this.coursesHelper.getCoursesForPopover(_this.courseId).then(function (data) {
                _this.courses = data.courses;
                _this.categoryId = data.categoryId;
            }));
            // Check if user can create events.
            promises.push(_this.calendarHelper.canEditEvents(_this.courseId).then(function (canEdit) {
                _this.canCreate = canEdit;
            }));
            // Check if there is offline data.
            promises.push(_this.calendarOffline.hasOfflineData().then(function (hasOffline) {
                _this.hasOffline = hasOffline;
            }));
            return Promise.all(promises);
        }).catch(function (error) {
            _this.domUtils.showErrorModalDefault(error, 'addon.calendar.errorloadevents', true);
        }).finally(function () {
            _this.loaded = true;
            _this.syncIcon = 'sync';
        });
    };
    /**
     * Refresh the data.
     *
     * @param {any} [refresher] Refresher.
     * @param {Function} [done] Function to call when done.
     * @param {boolean} [showErrors] Whether to show sync errors to the user.
     * @return {Promise<any>} Promise resolved when done.
     */
    AddonCalendarIndexPage.prototype.doRefresh = function (refresher, done, showErrors) {
        if (this.loaded) {
            return this.refreshData(true, showErrors).finally(function () {
                refresher && refresher.complete();
                done && done();
            });
        }
        return Promise.resolve();
    };
    /**
     * Refresh the data.
     *
     * @param {boolean} [sync] Whether it should try to synchronize offline events.
     * @param {boolean} [showErrors] Whether to show sync errors to the user.
     * @param {boolean} [afterChange] Whether the refresh is done after an event has changed or has been synced.
     * @return {Promise<any>} Promise resolved when done.
     */
    AddonCalendarIndexPage.prototype.refreshData = function (sync, showErrors, afterChange) {
        var _this = this;
        this.syncIcon = 'spinner';
        var promises = [];
        promises.push(this.calendarProvider.invalidateAllowedEventTypes());
        // Refresh the sub-component.
        if (this.showCalendar && this.calendarComponent) {
            promises.push(this.calendarComponent.refreshData(afterChange));
        }
        else if (!this.showCalendar && this.upcomingEventsComponent) {
            promises.push(this.upcomingEventsComponent.refreshData(afterChange));
        }
        return Promise.all(promises).finally(function () {
            return _this.fetchData(sync, showErrors);
        });
    };
    /**
     * Navigate to a particular event.
     *
     * @param {number} eventId Event to load.
     */
    AddonCalendarIndexPage.prototype.gotoEvent = function (eventId) {
        if (eventId < 0) {
            // It's an offline event, go to the edit page.
            this.openEdit(eventId);
        }
        else {
            this.navCtrl.push('AddonCalendarEventPage', {
                id: eventId
            });
        }
    };
    /**
     * View a certain day.
     *
     * @param {any} data Data with the year, month and day.
     */
    AddonCalendarIndexPage.prototype.gotoDay = function (data) {
        var params = {
            day: data.day,
            month: data.month,
            year: data.year
        };
        if (this.courseId) {
            params.courseId = this.courseId;
        }
        this.navCtrl.push('AddonCalendarDayPage', params);
    };
    /**
     * Show the context menu.
     *
     * @param {MouseEvent} event Event.
     */
    AddonCalendarIndexPage.prototype.openCourseFilter = function (event) {
        var _this = this;
        this.coursesHelper.selectCourse(event, this.courses, this.courseId).then(function (result) {
            if (typeof result.courseId != 'undefined') {
                _this.courseId = result.courseId > 0 ? result.courseId : undefined;
                _this.categoryId = result.courseId > 0 ? result.categoryId : undefined;
                // Course viewed has changed, check if the user can create events for this course calendar.
                _this.calendarHelper.canEditEvents(_this.courseId).then(function (canEdit) {
                    _this.canCreate = canEdit;
                });
            }
        });
    };
    /**
     * Open page to create/edit an event.
     *
     * @param {number} [eventId] Event ID to edit.
     */
    AddonCalendarIndexPage.prototype.openEdit = function (eventId) {
        var params = {};
        if (eventId) {
            params.eventId = eventId;
        }
        if (this.courseId) {
            params.courseId = this.courseId;
        }
        this.navCtrl.push('AddonCalendarEditEventPage', params);
    };
    /**
     * Open calendar events settings.
     */
    AddonCalendarIndexPage.prototype.openSettings = function () {
        this.navCtrl.push('AddonCalendarSettingsPage');
    };
    /**
     * Toogle display: monthly view or upcoming events.
     */
    AddonCalendarIndexPage.prototype.toggleDisplay = function () {
        this.showCalendar = !this.showCalendar;
        if (!this.showCalendar) {
            this.loadUpcoming = true;
        }
    };
    /**
     * Page destroyed.
     */
    AddonCalendarIndexPage.prototype.ngOnDestroy = function () {
        this.newEventObserver && this.newEventObserver.off();
        this.discardedObserver && this.discardedObserver.off();
        this.editEventObserver && this.editEventObserver.off();
        this.deleteEventObserver && this.deleteEventObserver.off();
        this.undeleteEventObserver && this.undeleteEventObserver.off();
        this.syncObserver && this.syncObserver.off();
        this.manualSyncObserver && this.manualSyncObserver.off();
        this.onlineObserver && this.onlineObserver.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_10__components_calendar_calendar__["a" /* AddonCalendarCalendarComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_10__components_calendar_calendar__["a" /* AddonCalendarCalendarComponent */])
    ], AddonCalendarIndexPage.prototype, "calendarComponent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_11__components_upcoming_events_upcoming_events__["a" /* AddonCalendarUpcomingEventsComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_11__components_upcoming_events_upcoming_events__["a" /* AddonCalendarUpcomingEventsComponent */])
    ], AddonCalendarIndexPage.prototype, "upcomingEventsComponent", void 0);
    AddonCalendarIndexPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addon-calendar-index',template:/*ion-inline-start:"/Users/user/Documents/GitHub/moodlemobile2/src/addon/calendar/pages/index/index.html"*/'<ion-header>\n    <ion-navbar core-back-button>\n        <ion-title>{{ (showCalendar ? \'addon.calendar.calendarevents\' : \'addon.calendar.upcomingevents\') | translate }}</ion-title>\n        <ion-buttons end>\n            <button *ngIf="courses && courses.length" ion-button icon-only (click)="openCourseFilter($event)" [attr.aria-label]="\'core.courses.filter\' | translate">\n                <ion-icon name="funnel" *ngIf="courseId"></ion-icon>\n                <ion-icon name="ios-funnel-outline" *ngIf="!courseId"></ion-icon>\n            </button>\n            <core-context-menu>\n                <core-context-menu-item *ngIf="showCalendar" [priority]="800" [content]="\'addon.calendar.upcomingevents\' | translate" [iconAction]="\'list\'" (action)="toggleDisplay()"></core-context-menu-item>\n                <core-context-menu-item *ngIf="!showCalendar" [priority]="800" [content]="\'addon.calendar.monthlyview\' | translate" [iconAction]="\'fa-calendar-o\'" (action)="toggleDisplay()"></core-context-menu-item>\n                <core-context-menu-item [hidden]="!notificationsEnabled" [priority]="600" [content]="\'core.settings.settings\' | translate" (action)="openSettings()" [iconAction]="\'cog\'"></core-context-menu-item>\n                <core-context-menu-item [hidden]="!loaded || !hasOffline || !isOnline"  [priority]="400" [content]="\'core.settings.synchronizenow\' | translate" (action)="doRefresh(null, $event, true)" [iconAction]="syncIcon" [closeOnClick]="false"></core-context-menu-item>\n            </core-context-menu>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n<ion-content>\n    <ion-refresher [enabled]="loaded" (ionRefresh)="doRefresh($event)">\n        <ion-refresher-content pullingText="{{ \'core.pulltorefresh\' | translate }}"></ion-refresher-content>\n    </ion-refresher>\n\n    <!-- There is data to be synchronized -->\n    <ion-card class="core-warning-card" icon-start *ngIf="hasOffline">\n        <ion-icon name="warning"></ion-icon> {{ \'core.hasdatatosync\' | translate:{$a: \'addon.calendar.calendar\' | translate} }}\n    </ion-card>\n\n    <addon-calendar-calendar [hidden]="!showCalendar" [initialYear]="year" [initialMonth]="month" [courseId]="courseId" [categoryId]="categoryId" [displayNavButtons]="showCalendar" (onEventClicked)="gotoEvent($event)" (onDayClicked)="gotoDay($event)"></addon-calendar-calendar>\n\n    <addon-calendar-upcoming-events *ngIf="loadUpcoming" [hidden]="showCalendar" [courseId]="courseId" [categoryId]="categoryId" (onEventClicked)="gotoEvent($event)"></addon-calendar-upcoming-events>\n\n    <!-- Create a calendar event. -->\n    <ion-fab core-fab bottom end *ngIf="canCreate">\n        <button ion-fab (click)="openEdit()" [attr.aria-label]="\'addon.calendar.newevent\' | translate">\n            <ion-icon name="add"></ion-icon>\n        </button>\n    </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/Users/user/Documents/GitHub/moodlemobile2/src/addon/calendar/pages/index/index.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_local_notifications__["a" /* CoreLocalNotificationsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_14__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_5__providers_sites__["a" /* CoreSitesProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_utils_dom__["a" /* CoreDomUtilsProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_calendar__["a" /* AddonCalendarProvider */],
            __WEBPACK_IMPORTED_MODULE_8__providers_calendar_offline__["a" /* AddonCalendarOfflineProvider */],
            __WEBPACK_IMPORTED_MODULE_9__providers_helper__["a" /* AddonCalendarHelperProvider */],
            __WEBPACK_IMPORTED_MODULE_12__providers_calendar_sync__["a" /* AddonCalendarSyncProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_events__["a" /* CoreEventsProvider */],
            __WEBPACK_IMPORTED_MODULE_13__core_courses_providers_helper__["a" /* CoreCoursesHelperProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_app__["a" /* CoreAppProvider */]])
    ], AddonCalendarIndexPage);
    return AddonCalendarIndexPage;
}());

//# sourceMappingURL=index.js.map

/***/ })

});
//# sourceMappingURL=4.js.map