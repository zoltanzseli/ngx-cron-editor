(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@angular/material/tabs'), require('@angular/material/list'), require('@angular/material/select'), require('@angular/material/input'), require('@angular/material/radio'), require('@angular/common'), require('@angular/material/checkbox'), require('@angular/material/core'), require('@angular/material/form-field')) :
    typeof define === 'function' && define.amd ? define('ngx-cron-editor', ['exports', '@angular/core', '@angular/forms', '@angular/material/tabs', '@angular/material/list', '@angular/material/select', '@angular/material/input', '@angular/material/radio', '@angular/common', '@angular/material/checkbox', '@angular/material/core', '@angular/material/form-field'], factory) :
    (global = global || self, factory(global['ngx-cron-editor'] = {}, global.ng.core, global.ng.forms, global.ng.material.tabs, global.ng.material.list, global.ng.material.select, global.ng.material.input, global.ng.material.radio, global.ng.common, global.ng.material.checkbox, global.ng.material.core, global.ng.material['form-field']));
}(this, (function (exports, core, forms, tabs, list, select, input, radio, common, checkbox, core$1, formField) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: src/cron-time-picker.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function TimePickerModel() { }
    if (false) {
        /** @type {?} */
        TimePickerModel.prototype.days;
        /** @type {?} */
        TimePickerModel.prototype.hours;
        /** @type {?} */
        TimePickerModel.prototype.minutes;
        /** @type {?} */
        TimePickerModel.prototype.seconds;
    }
    /**
     * @param {?} start
     * @param {?} end
     * @return {?}
     */
    function range(start, end) {
        var i;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    i = start;
                    _a.label = 1;
                case 1:
                    if (!(i <= end)) return [3 /*break*/, 4];
                    return [4 /*yield*/, i];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    i++;
                    return [3 /*break*/, 1];
                case 4: return [2 /*return*/];
            }
        });
    }
    var TimePickerComponent = /** @class */ (function () {
        function TimePickerComponent(parent) {
            this.parent = parent;
            this.use24HourTime = true;
            this.hideHours = false;
            this.hideMinutes = false;
            this.hideSeconds = true;
            this.minutes = __spread(range(0, 59));
            this.seconds = __spread(range(0, 59));
            this.hourTypes = ['AM', 'PM'];
        }
        Object.defineProperty(TimePickerComponent.prototype, "hours", {
            get: /**
             * @return {?}
             */
            function () {
                return this.use24HourTime ? __spread(range(0, 23)) : __spread(range(0, 12));
            },
            enumerable: true,
            configurable: true
        });
        TimePickerComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'cron-time-picker',
                        template: "<span [formGroup]=\"parent.control\">\n\n  <ng-container *ngIf=\"!hideHours\">\n    <mat-form-field>\n      <mat-label>Hour(s)</mat-label>\n      <mat-select formControlName=\"hours\">\n        <mat-option *ngFor=\"let hour of hours\" [value]=\"hour\">{{hour}}</mat-option>\n      </mat-select>\n    </mat-form-field>\n  </ng-container>\n  <ng-container *ngIf=\"!hideMinutes\">\n    <span *ngIf=\"!hideHours\">:</span>\n    <mat-form-field>\n      <mat-label>Minute(s)</mat-label>\n      <mat-select formControlName=\"minutes\">\n        <mat-option *ngFor=\"let minute of minutes\" [value]=\"minute\">{{minute}}</mat-option>\n      </mat-select>\n    </mat-form-field>\n  </ng-container>\n\n  <ng-container *ngIf=\"!hideSeconds\">\n    <span *ngIf=\"!hideMinutes\">:</span>\n    <mat-form-field>\n      <mat-label>Second(s)</mat-label>\n      <mat-select formControlName=\"seconds\">\n        <mat-option *ngFor=\"let second of seconds\" [value]=\"second\">{{second}}</mat-option>\n      </mat-select>\n    </mat-form-field>\n  </ng-container>\n\n  <ng-container *ngIf=\"!use24HourTime\">\n    <span></span>.\n    <mat-form-field>\n      <mat-select formControlName=\"hourType\">\n        <mat-option *ngFor=\"let hourType of hourTypes\" [value]=\"hourType\">{{hourType}}</mat-option>\n      </mat-select>\n    </mat-form-field>\n  </ng-container>\n</span>\n",
                        providers: []
                    }] }
        ];
        /** @nocollapse */
        TimePickerComponent.ctorParameters = function () { return [
            { type: forms.ControlContainer }
        ]; };
        TimePickerComponent.propDecorators = {
            disabled: [{ type: core.Input }],
            use24HourTime: [{ type: core.Input }],
            hideHours: [{ type: core.Input }],
            hideMinutes: [{ type: core.Input }],
            hideSeconds: [{ type: core.Input }]
        };
        return TimePickerComponent;
    }());
    if (false) {
        /** @type {?} */
        TimePickerComponent.prototype.disabled;
        /** @type {?} */
        TimePickerComponent.prototype.use24HourTime;
        /** @type {?} */
        TimePickerComponent.prototype.hideHours;
        /** @type {?} */
        TimePickerComponent.prototype.hideMinutes;
        /** @type {?} */
        TimePickerComponent.prototype.hideSeconds;
        /** @type {?} */
        TimePickerComponent.prototype.minutes;
        /** @type {?} */
        TimePickerComponent.prototype.seconds;
        /** @type {?} */
        TimePickerComponent.prototype.hourTypes;
        /** @type {?} */
        TimePickerComponent.prototype.parent;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: src/enums.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var Days = {
        'SUN': "Sunday",
        'MON': "Monday",
        'TUE': "Tuesday",
        'WED': "Wednesday",
        'THU': "Thursday",
        'FRI': "Friday",
        'SAT': "Saturday"
    };
    /** @type {?} */
    var MonthWeeks = {
        '#1': "First",
        '#2': "Second",
        '#3': "Third",
        '#4': "Fourth",
        '#5': "Fifth",
        'L': "Last"
    };
    /** @enum {number} */
    var Months = {
        January: 1,
        February: 2,
        March: 3,
        April: 4,
        May: 5,
        June: 6,
        July: 7,
        August: 8,
        September: 9,
        October: 10,
        November: 11,
        December: 12,
    };
    Months[Months.January] = 'January';
    Months[Months.February] = 'February';
    Months[Months.March] = 'March';
    Months[Months.April] = 'April';
    Months[Months.May] = 'May';
    Months[Months.June] = 'June';
    Months[Months.July] = 'July';
    Months[Months.August] = 'August';
    Months[Months.September] = 'September';
    Months[Months.October] = 'October';
    Months[Months.November] = 'November';
    Months[Months.December] = 'December';
    ;

    /**
     * @fileoverview added by tsickle
     * Generated from: src/cron-editor.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var CRON_VALUE_ACCESSOR = {
        provide: forms.NG_VALUE_ACCESSOR,
        useExisting: core.forwardRef((/**
         * @return {?}
         */
        function () { return CronGenComponent; })),
        multi: true,
    };
    var CronGenComponent = /** @class */ (function () {
        function CronGenComponent(fb) {
            this.fb = fb;
            this.selectOptions = this.getSelectOptions();
            this.localCron = '0 0 1/1 * *';
            /*
               * ControlValueAccessor
               */
            this.onChange = (/**
             * @param {?} _
             * @return {?}
             */
            function (_) {
            });
            this.onTouched = (/**
             * @return {?}
             */
            function () {
            });
        }
        Object.defineProperty(CronGenComponent.prototype, "cron", {
            get: /**
             * @return {?}
             */
            function () {
                return this.localCron;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this.localCron = value;
                this.onChange(value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CronGenComponent.prototype, "isCronFlavorQuartz", {
            get: /**
             * @return {?}
             */
            function () {
                return this.options.cronFlavor === 'quartz';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CronGenComponent.prototype, "isCronFlavorStandard", {
            get: /**
             * @return {?}
             */
            function () {
                return this.options.cronFlavor === 'standard';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CronGenComponent.prototype, "yearDefaultChar", {
            get: /**
             * @return {?}
             */
            function () {
                return this.options.cronFlavor === 'quartz' ? '*' : '';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CronGenComponent.prototype, "weekDayDefaultChar", {
            get: /**
             * @return {?}
             */
            function () {
                return this.options.cronFlavor === 'quartz' ? '?' : '*';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CronGenComponent.prototype, "monthDayDefaultChar", {
            get: /**
             * @return {?}
             */
            function () {
                return this.options.cronFlavor === 'quartz' ? '?' : '*';
            },
            enumerable: true,
            configurable: true
        });
        /* Update the cron output to that of the selected tab.
         * The cron output value is updated whenever a form is updated. To make it change in response to tab selection, we simply reset
         * the value of the form that goes into focus. */
        /* Update the cron output to that of the selected tab.
           * The cron output value is updated whenever a form is updated. To make it change in response to tab selection, we simply reset
           * the value of the form that goes into focus. */
        /**
         * @param {?} idx
         * @return {?}
         */
        CronGenComponent.prototype.onTabFocus = /* Update the cron output to that of the selected tab.
           * The cron output value is updated whenever a form is updated. To make it change in response to tab selection, we simply reset
           * the value of the form that goes into focus. */
        /**
         * @param {?} idx
         * @return {?}
         */
        function (idx) {
            switch (idx) {
                case 0:
                    this.minutesForm.setValue(this.minutesForm.value);
                    break;
                case 1:
                    this.hourlyForm.setValue(this.hourlyForm.value);
                    break;
                case 2:
                    this.dailyForm.setValue(this.dailyForm.value);
                    break;
                case 3:
                    this.weeklyForm.setValue(this.weeklyForm.value);
                    break;
                case 4:
                    this.monthlyForm.setValue(this.monthlyForm.value);
                    break;
                case 5:
                    this.yearlyForm.setValue(this.yearlyForm.value);
                    break;
                case 6:
                    this.advancedForm.setValue(this.advancedForm.value);
                    break;
                default:
                    throw (new Error('Invalid tab selected'));
            }
        };
        /**
         * @return {?}
         */
        CronGenComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a, defaultHours, defaultMinutes, defaultSeconds;
                var _this = this;
                return __generator(this, function (_b) {
                    this.state = this.getDefaultState();
                    this.handleModelChange(this.cron);
                    _a = __read(this.options.defaultTime.split(':').map(Number), 3), defaultHours = _a[0], defaultMinutes = _a[1], defaultSeconds = _a[2];
                    this.cronForm = new forms.FormControl('0 0 1/1 * *');
                    this.minutesForm = this.fb.group({
                        hours: [0],
                        minutes: [1],
                        seconds: [0]
                    });
                    this.minutesForm.valueChanges.subscribe((/**
                     * @param {?} value
                     * @return {?}
                     */
                    function (value) { return _this.computeMinutesCron(value); }));
                    this.hourlyForm = this.fb.group({
                        hours: [1],
                        minutes: [0],
                        seconds: [0]
                    });
                    this.hourlyForm.valueChanges.subscribe((/**
                     * @param {?} value
                     * @return {?}
                     */
                    function (value) { return _this.computeHourlyCron(value); }));
                    this.dailyForm = this.fb.group({
                        subTab: ['everyDays'],
                        everyDays: this.fb.group({
                            days: [1],
                            hours: [this.getAmPmHour(1)],
                            minutes: [0],
                            seconds: [0],
                            hourType: [this.getHourType(0)]
                        }),
                        everyWeekDay: this.fb.group({
                            days: [0],
                            hours: [this.getAmPmHour(1)],
                            minutes: [0],
                            seconds: [0],
                            hourType: [this.getHourType(0)]
                        })
                    });
                    this.dailyForm.valueChanges.subscribe((/**
                     * @param {?} value
                     * @return {?}
                     */
                    function (value) { return _this.computeDailyCron(value); }));
                    this.weeklyForm = this.fb.group({
                        MON: [true],
                        TUE: [false],
                        WED: [false],
                        THU: [false],
                        FRI: [false],
                        SAT: [false],
                        SUN: [false],
                        hours: [this.getAmPmHour(defaultHours)],
                        minutes: [defaultMinutes],
                        seconds: [defaultSeconds],
                        hourType: [this.getHourType(defaultHours)]
                    });
                    this.weeklyForm.valueChanges.subscribe((/**
                     * @param {?} next
                     * @return {?}
                     */
                    function (next) { return _this.computeWeeklyCron(next); }));
                    this.monthlyForm = this.fb.group({
                        subTab: ['specificDay'],
                        specificDay: this.fb.group({
                            day: ['1'],
                            months: [1],
                            hours: [this.getAmPmHour(defaultHours)],
                            minutes: [defaultMinutes],
                            seconds: [defaultSeconds],
                            hourType: [this.getHourType(defaultHours)]
                        }),
                        specificWeekDay: this.fb.group({
                            monthWeek: ['#1'],
                            day: ['MON'],
                            months: [1],
                            hours: [this.getAmPmHour(defaultHours)],
                            minutes: [defaultMinutes],
                            seconds: [defaultSeconds],
                            hourType: [this.getHourType(defaultHours)]
                        })
                    });
                    this.monthlyForm.valueChanges.subscribe((/**
                     * @param {?} next
                     * @return {?}
                     */
                    function (next) { return _this.computeMonthlyCron(next); }));
                    this.yearlyForm = this.fb.group({
                        subTab: ['specificMonthDay'],
                        specificMonthDay: this.fb.group({
                            month: [1],
                            day: ['1'],
                            hours: [this.getAmPmHour(defaultHours)],
                            minutes: [defaultMinutes],
                            seconds: [defaultSeconds],
                            hourType: [this.getHourType(defaultHours)]
                        }),
                        specificMonthWeek: this.fb.group({
                            monthWeek: ['#1'],
                            day: ['MON'],
                            month: [1],
                            hours: [this.getAmPmHour(defaultHours)],
                            minutes: [defaultMinutes],
                            seconds: [defaultSeconds],
                            hourType: [this.getHourType(defaultHours)]
                        })
                    });
                    this.yearlyForm.valueChanges.subscribe((/**
                     * @param {?} next
                     * @return {?}
                     */
                    function (next) { return _this.computeYearlyCron(next); }));
                    this.advancedForm = this.fb.group({
                        expression: [this.isCronFlavorQuartz ? '0 15 10 L-2 * ? *' : '15 10 2 * *']
                    });
                    this.advancedForm.controls.expression.valueChanges.subscribe((/**
                     * @param {?} next
                     * @return {?}
                     */
                    function (next) { return _this.computeAdvancedExpression(next); }));
                    return [2 /*return*/];
                });
            });
        };
        /**
         * @private
         * @param {?} state
         * @return {?}
         */
        CronGenComponent.prototype.computeMinutesCron = /**
         * @private
         * @param {?} state
         * @return {?}
         */
        function (state) {
            this.cron = ((this.isCronFlavorQuartz ? state.seconds : '') + " 0/" + state.minutes + " * 1/1 * " + this.weekDayDefaultChar + " " + this.yearDefaultChar).trim();
            this.cronForm.setValue(this.cron);
        };
        /**
         * @private
         * @param {?} state
         * @return {?}
         */
        CronGenComponent.prototype.computeHourlyCron = /**
         * @private
         * @param {?} state
         * @return {?}
         */
        function (state) {
            this.cron = ((this.isCronFlavorQuartz ? state.seconds : '') + " " + state.minutes + " 0/" + state.hours + " 1/1 * " + this.weekDayDefaultChar + " " + this.yearDefaultChar).trim();
            this.cronForm.setValue(this.cron);
        };
        /**
         * @private
         * @param {?} state
         * @return {?}
         */
        CronGenComponent.prototype.computeDailyCron = /**
         * @private
         * @param {?} state
         * @return {?}
         */
        function (state) {
            switch (state.subTab) {
                case 'everyDays':
                    this.cron = ((this.isCronFlavorQuartz ? state.everyDays.seconds : '') + " " + state.everyDays.minutes + " " + this.hourToCron(state.everyDays.hours, state.everyDays.hourType) + " 1/" + state.everyDays.days + " * " + this.weekDayDefaultChar + " " + this.yearDefaultChar).trim();
                    break;
                case 'everyWeekDay':
                    this.cron = ((this.isCronFlavorQuartz ? state.everyWeekDay.seconds : '') + " " + state.everyWeekDay.minutes + " " + this.hourToCron(state.everyWeekDay.hours, state.everyWeekDay.hourType) + " " + this.monthDayDefaultChar + " * MON-FRI " + this.yearDefaultChar).trim();
                    break;
                default:
                    throw new Error('Invalid cron daily subtab selection');
            }
            this.cronForm.setValue(this.cron);
        };
        /**
         * @private
         * @param {?} state
         * @return {?}
         */
        CronGenComponent.prototype.computeWeeklyCron = /**
         * @private
         * @param {?} state
         * @return {?}
         */
        function (state) {
            /** @type {?} */
            var days = this.selectOptions.days
                .reduce((/**
             * @param {?} acc
             * @param {?} day
             * @return {?}
             */
            function (acc, day) { return state[day] ? acc.concat([day]) : acc; }), [])
                .join(',');
            this.cron = ((this.isCronFlavorQuartz ? state.seconds : '') + " " + state.minutes + " " + this.hourToCron(state.hours, state.hourType) + " " + this.monthDayDefaultChar + " * " + days + " " + this.yearDefaultChar).trim();
            this.cronForm.setValue(this.cron);
        };
        /**
         * @private
         * @param {?} state
         * @return {?}
         */
        CronGenComponent.prototype.computeMonthlyCron = /**
         * @private
         * @param {?} state
         * @return {?}
         */
        function (state) {
            switch (state.subTab) {
                case 'specificDay':
                    this.cron = ((this.isCronFlavorQuartz ? state.specificDay.seconds : '') + " " + state.specificDay.minutes + " " + this.hourToCron(state.specificDay.hours, state.specificDay.hourType) + " " + state.specificDay.day + " 1/" + state.specificDay.months + " " + this.weekDayDefaultChar + " " + this.yearDefaultChar).trim();
                    break;
                case 'specificWeekDay':
                    this.cron = ((this.isCronFlavorQuartz ? state.specificWeekDay.seconds : '') + " " + state.specificWeekDay.minutes + " " + this.hourToCron(state.specificWeekDay.hours, state.specificWeekDay.hourType) + " " + this.monthDayDefaultChar + " 1/" + state.specificWeekDay.months + " " + state.specificWeekDay.day + state.specificWeekDay.monthWeek + " " + this.yearDefaultChar).trim();
                    break;
                default:
                    throw new Error('Invalid cron montly subtab selection');
            }
            this.cronForm.setValue(this.cron);
        };
        /**
         * @private
         * @param {?} state
         * @return {?}
         */
        CronGenComponent.prototype.computeYearlyCron = /**
         * @private
         * @param {?} state
         * @return {?}
         */
        function (state) {
            switch (state.subTab) {
                case 'specificMonthDay':
                    this.cron = ((this.isCronFlavorQuartz ? state.specificMonthDay.seconds : '') + " " + state.specificMonthDay.minutes + " " + this.hourToCron(state.specificMonthDay.hours, state.specificMonthDay.hourType) + " " + state.specificMonthDay.day + " " + state.specificMonthDay.month + " " + this.weekDayDefaultChar + " " + this.yearDefaultChar).trim();
                    break;
                case 'specificMonthWeek':
                    this.cron = ((this.isCronFlavorQuartz ? state.specificMonthWeek.seconds : '') + " " + state.specificMonthWeek.minutes + " " + this.hourToCron(state.specificMonthWeek.hours, state.specificMonthWeek.hourType) + " " + this.monthDayDefaultChar + " " + state.specificMonthWeek.month + " " + state.specificMonthWeek.day + state.specificMonthWeek.monthWeek + " " + this.yearDefaultChar).trim();
                    break;
                default:
                    throw new Error('Invalid cron yearly subtab selection');
            }
            this.cronForm.setValue(this.cron);
        };
        /**
         * @private
         * @param {?} expression
         * @return {?}
         */
        CronGenComponent.prototype.computeAdvancedExpression = /**
         * @private
         * @param {?} expression
         * @return {?}
         */
        function (expression) {
            this.cron = expression;
            this.cronForm.setValue(this.cron);
        };
        /**
         * @param {?} day
         * @return {?}
         */
        CronGenComponent.prototype.dayDisplay = /**
         * @param {?} day
         * @return {?}
         */
        function (day) {
            return Days[day];
        };
        /**
         * @param {?} monthWeekNumber
         * @return {?}
         */
        CronGenComponent.prototype.monthWeekDisplay = /**
         * @param {?} monthWeekNumber
         * @return {?}
         */
        function (monthWeekNumber) {
            return MonthWeeks[monthWeekNumber];
        };
        /**
         * @param {?} month
         * @return {?}
         */
        CronGenComponent.prototype.monthDisplay = /**
         * @param {?} month
         * @return {?}
         */
        function (month) {
            return Months[month];
        };
        /**
         * @param {?} month
         * @return {?}
         */
        CronGenComponent.prototype.monthDayDisplay = /**
         * @param {?} month
         * @return {?}
         */
        function (month) {
            if (month === 'L') {
                return 'Last Day';
            }
            else if (month === 'LW') {
                return 'Last Weekday';
            }
            else if (month === '1W') {
                return 'First Weekday';
            }
            else {
                return "" + month + this.getOrdinalSuffix(month);
            }
        };
        /**
         * @private
         * @param {?} hour
         * @return {?}
         */
        CronGenComponent.prototype.getAmPmHour = /**
         * @private
         * @param {?} hour
         * @return {?}
         */
        function (hour) {
            return this.options.use24HourTime ? hour : (hour + 11) % 12 + 1;
        };
        /**
         * @private
         * @param {?} hour
         * @return {?}
         */
        CronGenComponent.prototype.getHourType = /**
         * @private
         * @param {?} hour
         * @return {?}
         */
        function (hour) {
            return this.options.use24HourTime ? undefined : (hour >= 12 ? 'PM' : 'AM');
        };
        /**
         * @private
         * @param {?} hour
         * @param {?} hourType
         * @return {?}
         */
        CronGenComponent.prototype.hourToCron = /**
         * @private
         * @param {?} hour
         * @param {?} hourType
         * @return {?}
         */
        function (hour, hourType) {
            if (this.options.use24HourTime) {
                return hour;
            }
            else {
                return hourType === 'AM' ? (hour === 12 ? 0 : hour) : (hour === 12 ? 12 : hour + 12);
            }
        };
        /**
         * @private
         * @param {?} cron
         * @return {?}
         */
        CronGenComponent.prototype.handleModelChange = /**
         * @private
         * @param {?} cron
         * @return {?}
         */
        function (cron) {
            var _this = this;
            if (this.isDirty) {
                this.isDirty = false;
                return;
            }
            else {
                this.isDirty = false;
            }
            if (!this.cronIsValid(cron)) {
                if (this.isCronFlavorQuartz) {
                    throw new Error('Invalid cron expression, there must be 6 or 7 segments');
                }
                if (this.isCronFlavorStandard) {
                    throw new Error('Invalid cron expression, there must be 5 segments');
                }
            }
            /** @type {?} */
            var origCron = cron;
            if (cron.split(' ').length === 5 && this.isCronFlavorStandard) {
                cron = "0 " + cron + " *";
            }
            var _a = __read(cron.split(' '), 6), seconds = _a[0], minutes = _a[1], hours = _a[2], dayOfMonth = _a[3], month = _a[4], dayOfWeek = _a[5];
            if (cron.match(/\d+ 0\/\d+ \* 1\/1 \* [\?\*] \*/)) {
                this.activeTab = 'minutes';
                this.state.minutes.minutes = parseInt(minutes.substring(2), 10);
                this.state.minutes.seconds = parseInt(seconds, 10);
            }
            else if (cron.match(/\d+ \d+ 0\/\d+ 1\/1 \* [\?\*] \*/)) {
                this.activeTab = 'hourly';
                this.state.hourly.hours = parseInt(hours.substring(2), 10);
                this.state.hourly.minutes = parseInt(minutes, 10);
                this.state.hourly.seconds = parseInt(seconds, 10);
            }
            else if (cron.match(/\d+ \d+ \d+ 1\/\d+ \* [\?\*] \*/)) {
                this.activeTab = 'daily';
                this.state.daily.subTab = 'everyDays';
                this.state.daily.everyDays.days = parseInt(dayOfMonth.substring(2), 10);
                /** @type {?} */
                var parsedHours = parseInt(hours, 10);
                this.state.daily.everyDays.hours = this.getAmPmHour(parsedHours);
                this.state.daily.everyDays.hourType = this.getHourType(parsedHours);
                this.state.daily.everyDays.minutes = parseInt(minutes, 10);
                this.state.daily.everyDays.seconds = parseInt(seconds, 10);
            }
            else if (cron.match(/\d+ \d+ \d+ [\?\*] \* MON-FRI \*/)) {
                this.activeTab = 'daily';
                this.state.daily.subTab = 'everyWeekDay';
                /** @type {?} */
                var parsedHours = parseInt(hours, 10);
                this.state.daily.everyWeekDay.hours = this.getAmPmHour(parsedHours);
                this.state.daily.everyWeekDay.hourType = this.getHourType(parsedHours);
                this.state.daily.everyWeekDay.minutes = parseInt(minutes, 10);
                this.state.daily.everyWeekDay.seconds = parseInt(seconds, 10);
            }
            else if (cron.match(/\d+ \d+ \d+ [\?\*] \* (MON|TUE|WED|THU|FRI|SAT|SUN)(,(MON|TUE|WED|THU|FRI|SAT|SUN))* \*/)) {
                this.activeTab = 'weekly';
                this.selectOptions.days.forEach((/**
                 * @param {?} weekDay
                 * @return {?}
                 */
                function (weekDay) { return _this.state.weekly[weekDay] = false; }));
                dayOfWeek.split(',').forEach((/**
                 * @param {?} weekDay
                 * @return {?}
                 */
                function (weekDay) { return _this.state.weekly[weekDay] = true; }));
                /** @type {?} */
                var parsedHours = parseInt(hours, 10);
                this.state.weekly.hours = this.getAmPmHour(parsedHours);
                this.state.weekly.hourType = this.getHourType(parsedHours);
                this.state.weekly.minutes = parseInt(minutes, 10);
                this.state.weekly.seconds = parseInt(seconds, 10);
            }
            else if (cron.match(/\d+ \d+ \d+ (\d+|L|LW|1W) 1\/\d+ [\?\*] \*/)) {
                this.activeTab = 'monthly';
                this.state.monthly.subTab = 'specificDay';
                this.state.monthly.specificDay.day = dayOfMonth;
                this.state.monthly.specificDay.months = parseInt(month.substring(2), 10);
                /** @type {?} */
                var parsedHours = parseInt(hours, 10);
                this.state.monthly.specificDay.hours = this.getAmPmHour(parsedHours);
                this.state.monthly.specificDay.hourType = this.getHourType(parsedHours);
                this.state.monthly.specificDay.minutes = parseInt(minutes, 10);
                this.state.monthly.specificDay.seconds = parseInt(seconds, 10);
            }
            else if (cron.match(/\d+ \d+ \d+ [\?\*] 1\/\d+ (MON|TUE|WED|THU|FRI|SAT|SUN)((#[1-5])|L) \*/)) {
                /** @type {?} */
                var day = dayOfWeek.substr(0, 3);
                /** @type {?} */
                var monthWeek = dayOfWeek.substr(3);
                this.activeTab = 'monthly';
                this.state.monthly.subTab = 'specificWeekDay';
                this.state.monthly.specificWeekDay.monthWeek = monthWeek;
                this.state.monthly.specificWeekDay.day = day;
                this.state.monthly.specificWeekDay.months = parseInt(month.substring(2), 10);
                /** @type {?} */
                var parsedHours = parseInt(hours, 10);
                this.state.monthly.specificWeekDay.hours = this.getAmPmHour(parsedHours);
                this.state.monthly.specificWeekDay.hourType = this.getHourType(parsedHours);
                this.state.monthly.specificWeekDay.minutes = parseInt(minutes, 10);
                this.state.monthly.specificWeekDay.seconds = parseInt(seconds, 10);
            }
            else if (cron.match(/\d+ \d+ \d+ (\d+|L|LW|1W) \d+ [\?\*] \*/)) {
                this.activeTab = 'yearly';
                this.state.yearly.subTab = 'specificMonthDay';
                this.state.yearly.specificMonthDay.month = parseInt(month, 10);
                this.state.yearly.specificMonthDay.day = dayOfMonth;
                /** @type {?} */
                var parsedHours = parseInt(hours, 10);
                this.state.yearly.specificMonthDay.hours = this.getAmPmHour(parsedHours);
                this.state.yearly.specificMonthDay.hourType = this.getHourType(parsedHours);
                this.state.yearly.specificMonthDay.minutes = parseInt(minutes, 10);
                this.state.yearly.specificMonthDay.seconds = parseInt(seconds, 10);
            }
            else if (cron.match(/\d+ \d+ \d+ [\?\*] \d+ (MON|TUE|WED|THU|FRI|SAT|SUN)((#[1-5])|L) \*/)) {
                /** @type {?} */
                var day = dayOfWeek.substr(0, 3);
                /** @type {?} */
                var monthWeek = dayOfWeek.substr(3);
                this.activeTab = 'yearly';
                this.state.yearly.subTab = 'specificMonthWeek';
                this.state.yearly.specificMonthWeek.monthWeek = monthWeek;
                this.state.yearly.specificMonthWeek.day = day;
                this.state.yearly.specificMonthWeek.month = parseInt(month, 10);
                /** @type {?} */
                var parsedHours = parseInt(hours, 10);
                this.state.yearly.specificMonthWeek.hours = this.getAmPmHour(parsedHours);
                this.state.yearly.specificMonthWeek.hourType = this.getHourType(parsedHours);
                this.state.yearly.specificMonthWeek.minutes = parseInt(minutes, 10);
                this.state.yearly.specificMonthWeek.seconds = parseInt(seconds, 10);
            }
            else {
                this.activeTab = 'advanced';
                this.state.advanced.expression = origCron;
            }
        };
        /**
         * @private
         * @param {?} cron
         * @return {?}
         */
        CronGenComponent.prototype.cronIsValid = /**
         * @private
         * @param {?} cron
         * @return {?}
         */
        function (cron) {
            if (cron) {
                /** @type {?} */
                var cronParts = cron.split(' ');
                return (this.isCronFlavorQuartz && (cronParts.length === 6
                    || cronParts.length === 7)
                    || (this.isCronFlavorStandard && cronParts.length === 5));
            }
            return false;
        };
        /**
         * @private
         * @return {?}
         */
        CronGenComponent.prototype.getDefaultState = /**
         * @private
         * @return {?}
         */
        function () {
            var _a = __read(this.options.defaultTime.split(':').map(Number), 3), defaultHours = _a[0], defaultMinutes = _a[1], defaultSeconds = _a[2];
            return {
                minutes: {
                    minutes: 1,
                    seconds: 0
                },
                hourly: {
                    hours: 1,
                    minutes: 0,
                    seconds: 0
                },
                daily: {
                    subTab: 'everyDays',
                    everyDays: {
                        days: 1,
                        hours: this.getAmPmHour(defaultHours),
                        minutes: defaultMinutes,
                        seconds: defaultSeconds,
                        hourType: this.getHourType(defaultHours)
                    },
                    everyWeekDay: {
                        hours: this.getAmPmHour(defaultHours),
                        minutes: defaultMinutes,
                        seconds: defaultSeconds,
                        hourType: this.getHourType(defaultHours)
                    }
                },
                weekly: {
                    MON: true,
                    TUE: false,
                    WED: false,
                    THU: false,
                    FRI: false,
                    SAT: false,
                    SUN: false,
                    hours: this.getAmPmHour(defaultHours),
                    minutes: defaultMinutes,
                    seconds: defaultSeconds,
                    hourType: this.getHourType(defaultHours)
                },
                monthly: {
                    subTab: 'specificDay',
                    specificDay: {
                        day: '1',
                        months: 1,
                        hours: this.getAmPmHour(defaultHours),
                        minutes: defaultMinutes,
                        seconds: defaultSeconds,
                        hourType: this.getHourType(defaultHours)
                    },
                    specificWeekDay: {
                        monthWeek: '#1',
                        day: 'MON',
                        months: 1,
                        hours: this.getAmPmHour(defaultHours),
                        minutes: defaultMinutes,
                        seconds: defaultSeconds,
                        hourType: this.getHourType(defaultHours)
                    }
                },
                yearly: {
                    subTab: 'specificMonthDay',
                    specificMonthDay: {
                        month: 1,
                        day: '1',
                        hours: this.getAmPmHour(defaultHours),
                        minutes: defaultMinutes,
                        seconds: defaultSeconds,
                        hourType: this.getHourType(defaultHours)
                    },
                    specificMonthWeek: {
                        monthWeek: '#1',
                        day: 'MON',
                        month: 1,
                        hours: this.getAmPmHour(defaultHours),
                        minutes: defaultMinutes,
                        seconds: defaultSeconds,
                        hourType: this.getHourType(defaultHours)
                    }
                },
                advanced: {
                    expression: this.isCronFlavorQuartz ? '0 15 10 L-2 * ? *' : '15 10 2 * *'
                }
            };
        };
        /**
         * @private
         * @param {?} value
         * @return {?}
         */
        CronGenComponent.prototype.getOrdinalSuffix = /**
         * @private
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value.length > 1) {
                /** @type {?} */
                var secondToLastDigit = value.charAt(value.length - 2);
                if (secondToLastDigit === '1') {
                    return 'th';
                }
            }
            /** @type {?} */
            var lastDigit = value.charAt(value.length - 1);
            switch (lastDigit) {
                case '1':
                    return 'st';
                case '2':
                    return 'nd';
                case '3':
                    return 'rd';
                default:
                    return 'th';
            }
        };
        /**
         * @private
         * @return {?}
         */
        CronGenComponent.prototype.getSelectOptions = /**
         * @private
         * @return {?}
         */
        function () {
            return {
                months: this.getRange(1, 12),
                monthWeeks: ['#1', '#2', '#3', '#4', '#5', 'L'],
                days: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
                minutes: this.getRange(0, 59),
                fullMinutes: this.getRange(0, 59),
                seconds: this.getRange(0, 59),
                hours: this.getRange(1, 23),
                monthDays: this.getRange(1, 31),
                monthDaysWithLasts: __spread(['1W'], __spread(this.getRange(1, 31).map(String)), ['LW', 'L']),
                monthDaysWithOutLasts: __spread(this.getRange(1, 31).map(String)),
                hourTypes: ['AM', 'PM']
            };
        };
        /**
         * @private
         * @param {?} start
         * @param {?} end
         * @return {?}
         */
        CronGenComponent.prototype.getRange = /**
         * @private
         * @param {?} start
         * @param {?} end
         * @return {?}
         */
        function (start, end) {
            /** @type {?} */
            var length = end - start + 1;
            return Array.apply(null, Array(length)).map((/**
             * @param {?} _
             * @param {?} i
             * @return {?}
             */
            function (_, i) { return i + start; }));
        };
        /**
         * @param {?} obj
         * @return {?}
         */
        CronGenComponent.prototype.writeValue = /**
         * @param {?} obj
         * @return {?}
         */
        function (obj) {
            this.cron = obj;
        };
        /**
         * @param {?} fn
         * @return {?}
         */
        CronGenComponent.prototype.registerOnChange = /**
         * @param {?} fn
         * @return {?}
         */
        function (fn) {
            this.onChange = fn;
        };
        /**
         * @param {?} fn
         * @return {?}
         */
        CronGenComponent.prototype.registerOnTouched = /**
         * @param {?} fn
         * @return {?}
         */
        function (fn) {
            this.onTouched = fn;
        };
        /**
         * @param {?} isDisabled
         * @return {?}
         */
        CronGenComponent.prototype.setDisabledState = /**
         * @param {?} isDisabled
         * @return {?}
         */
        function (isDisabled) {
            this.disabled = isDisabled;
        };
        CronGenComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'cron-editor',
                        template: "<section class=\"cron-editor-main\">\n    <mat-tab-group class=\"cron-editor-container\" (selectedIndexChange)=\"onTabFocus($event)\" [backgroundColor]=\"backgroundColor\" [color]=\"color\">\n\n      <!-- Minute -->\n      <mat-tab class=\"cron-editor-tab\" label=\"Minutes\" *ngIf=\"!options.hideMinutesTab\">\n        <div class=\"cron-editor-tab-content\">\n\n          <span class=\"cron-form-label\">Every </span>\n\n            <cron-time-picker\n              [formGroup]=\"minutesForm\"\n              [use24HourTime]=\"options.use24HourTime\"\n              [hideHours]=\"true\"\n              [hideSeconds]=\"options.hideSeconds || !isCronFlavorQuartz\">\n            </cron-time-picker>\n        </div>\n      </mat-tab>\n\n      <!-- Hourly -->\n      <mat-tab class=\"cron-editor-tab\" label=\"Hourly\" *ngIf=\"!options.hideHourlyTab\">\n        <div class=\"cron-editor-tab-content\">\n          <span class=\"cron-form-label\">Every </span>\n\n          <cron-time-picker [formGroup]=\"hourlyForm\"\n                              [use24HourTime]=\"options.use24HourTime\"\n                              [hideSeconds]=\"options.hideSeconds ||  !isCronFlavorQuartz\">\n          </cron-time-picker>\n        </div>\n      </mat-tab>\n\n\n      <!-- Daily-->\n      <mat-tab class=\"cron-editor-tab\" label=\"Daily\" *ngIf=\"!options.hideDailyTab\">\n        <div class=\"cron-editor-tab-content\" [formGroup]=\"dailyForm\">\n\n          <mat-radio-group class=\"cron-editor-radio-group\" formControlName=\"subTab\">\n            <mat-radio-button name=\"subTab\" class=\"cron-editor-radio-button\" value=\"everyDays\" checked=\"checked\">\n\n              <span class=\"cron-form-label\">Every </span>\n\n              <mat-form-field formGroupName=\"everyDays\">\n                <mat-label>Day(s)</mat-label>\n                <mat-select formControlName=\"days\">\n                  <mat-option *ngFor=\"let monthDay of selectOptions.monthDays\" [value]=\"monthDay\">\n                    {{monthDay}}\n                  </mat-option>\n                </mat-select>\n              </mat-form-field>\n\n               at\n\n              <cron-time-picker\n                formGroupName=\"everyDays\"\n                [use24HourTime]=\"options.use24HourTime\"\n                [hideSeconds]=\"options.hideSeconds || !isCronFlavorQuartz\">\n              </cron-time-picker>\n\n            </mat-radio-button>\n\n            <mat-radio-button name=\"subTab\" class=\"cron-editor-radio-button\" value=\"everyWeekDay\">\n\n              <span>Week Day (MON-FRI) at </span>\n\n              <cron-time-picker\n                formGroupName=\"everyWeekDay\"\n                [use24HourTime]=\"options.use24HourTime\"\n                [hideSeconds]=\"options.hideSeconds || !isCronFlavorQuartz\">\n              </cron-time-picker>\n\n            </mat-radio-button>\n          </mat-radio-group>\n          </div>\n      </mat-tab>\n\n      <!-- Weekly-->\n      <mat-tab  class=\"cron-editor-tab\" label=\"Weekly\" *ngIf=\"!options.hideWeeklyTab\">\n        <div class=\"cron-editor-tab-content\">\n\n          <span class=\"cron-form-label\">Every </span>\n\n          <div [formGroup]=\"weeklyForm\">\n            <mat-checkbox class=\"checkbox-margin\" formControlName=\"MON\">Monday</mat-checkbox>\n            <mat-checkbox class=\"checkbox-margin\" formControlName=\"TUE\">Tuesday</mat-checkbox>\n            <mat-checkbox class=\"checkbox-margin\" formControlName=\"WED\">Wednesday</mat-checkbox>\n            <mat-checkbox class=\"checkbox-margin\" formControlName=\"THU\">Thursday</mat-checkbox>\n            <mat-checkbox class=\"checkbox-margin\" formControlName=\"FRI\">Friday</mat-checkbox>\n            <mat-checkbox class=\"checkbox-margin\" formControlName=\"SAT\">Saturday</mat-checkbox>\n            <mat-checkbox class=\"checkbox-margin\" formControlName=\"SUN\">Sunday</mat-checkbox>\n          </div>\n\n\n          <span class=\"cron-form-label\">at time </span>\n\n          <cron-time-picker [formGroup]=\"weeklyForm\"\n                            [use24HourTime]=\"options.use24HourTime\"\n                            [hideSeconds]=\"options.hideSeconds|| !isCronFlavorQuartz\">\n          </cron-time-picker>\n        </div>\n\n    </mat-tab>\n\n      <!-- Monthly-->\n      <mat-tab class=\"cron-editor-tab\" label=\"Monthly\" *ngIf=\"!options.hideMonthlyTab\">\n\n        <div class=\"cron-editor-tab-content\" [formGroup]=\"monthlyForm\">\n\n\n          <mat-radio-group formControlName=\"subTab\">\n\n            <mat-radio-button  name=\"monthly-radio\" value=\"specificDay\" >\n\n              <!-- Spesific day -->\n              <span formGroupName=\"specificDay\">\n\n                On the\n\n                <ng-container *ngIf=\"options.cronFlavor === 'quartz'\">\n                  <mat-form-field>\n                    <mat-label>Day</mat-label>\n                    <mat-select class=\"month-days\" formControlName=\"day\">\n                      <option *ngFor=\"let monthDaysWithLast of selectOptions.monthDaysWithLasts\" [value]=\"monthDaysWithLast\">\n                        {{monthDayDisplay(monthDaysWithLast)}}\n                      </option>\n                    </mat-select>\n                  </mat-form-field>\n                </ng-container>\n\n                <ng-container *ngIf=\"options.cronFlavor === 'standard'\">\n                  <mat-form-field>\n                    <mat-label>Day</mat-label>\n                    <mat-select class=\"month-days\"  formControlName=\"day\">\n                      <mat-option *ngFor=\"let monthDaysWithOutLast of selectOptions.monthDaysWithOutLasts\" [value]=\"monthDaysWithOutLast\">\n                        {{monthDayDisplay(monthDaysWithOutLast)}}\n                      </mat-option>\n                    </mat-select>\n                  </mat-form-field>\n                </ng-container>\n\n                of every\n\n                <ng-container>\n                  <mat-form-field>\n                    <mat-label>Month</mat-label>\n                    <mat-select class=\"months-small\" formControlName=\"months\" [ngClass]=\"options.formSelectClass\">\n                      <mat-option *ngFor=\"let month of selectOptions.months\" [value]=\"month\">\n                        {{month}}\n                      </mat-option>\n                    </mat-select>\n                  </mat-form-field>\n                </ng-container>\n\n                at time\n\n                <cron-time-picker [disabled]=\"disabled\" [formGroup]=\"monthlyForm.controls.specificDay\"\n                                  [use24HourTime]=\"options.use24HourTime\"\n                                  [hideSeconds]=\"options.hideSeconds || !isCronFlavorQuartz\">\n                </cron-time-picker>\n              </span>\n\n\n            </mat-radio-button>\n\n            <mat-radio-button  name=\"monthly-radio\" value=\"specificWeekDay\">\n\n              <!-- Spesific Week day -->\n              <span formGroupName=\"specificWeekDay\">\n\n                On the\n\n                <mat-form-field>\n                  <mat-label>Week</mat-label>\n                  <mat-select class=\"day-order-in-month\" formControlName=\"monthWeek\" [ngClass]=\"options.formSelectClass\">\n                    <mat-option *ngFor=\"let monthWeek of selectOptions.monthWeeks\" [value]=\"monthWeek\">\n                      {{monthWeekDisplay(monthWeek)}}\n                    </mat-option>\n                  </mat-select>\n                </mat-form-field>\n\n                <mat-form-field>\n                  <mat-label>Day</mat-label>\n                  <mat-select class=\"week-days\" formControlName=\"day\" [ngClass]=\"options.formSelectClass\">\n                    <mat-option *ngFor=\"let day of selectOptions.days\" [value]=\"day\">\n                      {{dayDisplay(day)}}\n                    </mat-option>\n                  </mat-select>\n                </mat-form-field>\n\n                of every\n\n                <mat-form-field>\n                  <mat-label>Month</mat-label>\n                  <mat-select class=\"months-small\" formControlName=\"months\">\n                    <mat-option *ngFor=\"let month of selectOptions.months\" [value]=\"month\">\n                      {{month}}\n                    </mat-option>\n                  </mat-select>\n                </mat-form-field>\n\n                at time\n\n                <cron-time-picker [formGroup]=\"monthlyForm.controls.specificWeekDay\"\n                                  [use24HourTime]=\"options.use24HourTime\"\n                                  [hideSeconds]=\"options.hideSeconds || !isCronFlavorQuartz\">\n\n                </cron-time-picker>\n\n\n              </span>\n            </mat-radio-button>\n\n          </mat-radio-group>\n\n        </div>\n      </mat-tab>\n\n      <!-- Yearly-->\n      <mat-tab class=\"cron-editor-tab\"  label=\"Yearly\" *ngIf=\"!options.hideYearlyTab\">\n\n        <div class=\"cron-editor-tab-content\" [formGroup]=\"yearlyForm\">\n\n          <mat-radio-group formControlName=\"subTab\">\n\n            <mat-radio-button name=\"yearly-radio\" value=\"specificMonthDay\">\n\n              On the\n\n              <mat-form-field formGroupName=\"specificMonthDay\" *ngIf=\"options.cronFlavor === 'quartz'\">\n                <mat-label>Day</mat-label>\n                <mat-select class=\"month-days\" formControlName=\"day\">\n                  <mat-option *ngFor=\"let monthDaysWithLast of selectOptions.monthDaysWithLasts\" [value]=\"monthDaysWithLast\">\n                    {{monthDayDisplay(monthDaysWithLast)}}\n                  </mat-option>\n                </mat-select>\n              </mat-form-field>\n\n              <mat-form-field formGroupName=\"specificMonthDay\" *ngIf=\"options.cronFlavor === 'standard'\">\n                <mat-label>Day</mat-label>\n                <mat-select class=\"month-days\" formControlName=\"day\" >\n                  <mat-option *ngFor=\"let monthDaysWithOutLast of selectOptions.monthDaysWithOutLasts\" [value]=\"monthDaysWithOutLast\">\n                    {{monthDayDisplay(monthDaysWithOutLast)}}\n                  </mat-option>\n                </mat-select>\n              </mat-form-field>\n\n              of\n\n              <mat-form-field formGroupName=\"specificMonthDay\">\n                <mat-label>Month</mat-label>\n                <mat-select class=\"months\" formControlName=\"month\">\n                  <mat-option *ngFor=\"let month of selectOptions.months\" [value]=\"month\">\n                    {{monthDisplay(month)}}\n                  </mat-option>\n                </mat-select>\n              </mat-form-field>\n\n              at time\n\n              <cron-time-picker [disabled]=\"disabled\"\n                                [formGroup]=\"yearlyForm.controls.specificMonthDay\"\n                                [use24HourTime]=\"options.use24HourTime\"\n                                [hideSeconds]=\"options.hideSeconds || !isCronFlavorQuartz\">\n              </cron-time-picker>\n            </mat-radio-button>\n\n            <mat-radio-button name=\"yearly-radio\" value=\"specificMonthWeek\" [ngClass]=\"state.formRadioClass\">\n\n              On the\n\n              <mat-form-field formGroupName=\"specificMonthWeek\">\n                <mat-label>Week</mat-label>\n                <mat-select class=\"day-order-in-month\" formControlName=\"monthWeek\" >\n                  <mat-option *ngFor=\"let monthWeek of selectOptions.monthWeeks\" [value]=\"monthWeek\">\n                    {{monthWeekDisplay(monthWeek)}}\n                  </mat-option>\n                </mat-select>\n              </mat-form-field>\n\n              <mat-form-field formGroupName=\"specificMonthWeek\">\n                <mat-label>Day</mat-label>\n                <mat-select class=\"week-days\"  formControlName=\"day\" >\n                  <mat-option *ngFor=\"let day of selectOptions.days\" [value]=\"day\">\n                    {{dayDisplay(day)}}\n                  </mat-option>\n                </mat-select>\n              </mat-form-field>\n\n              of\n\n              <mat-form-field formGroupName=\"specificMonthWeek\">\n                <mat-label>Month</mat-label>\n                <mat-select class=\"months\" formControlName=\"month\">\n                  <mat-option *ngFor=\"let month of selectOptions.months\" [value]=\"month\">\n                    {{monthDisplay(month)}}\n                  </mat-option>\n                </mat-select>\n              </mat-form-field>\n\n              at time\n\n              <cron-time-picker [disabled]=\"disabled\"\n                                [formGroup]=\"yearlyForm.controls.specificMonthWeek\"\n                                [use24HourTime]=\"options.use24HourTime\"\n                                [hideSeconds]=\"options.hideSeconds || !isCronFlavorQuartz\">\n              </cron-time-picker>\n            </mat-radio-button>\n          </mat-radio-group>\n        </div>\n      </mat-tab>\n\n      <!-- Advanced-->\n      <mat-tab class=\"cron-editor-tab\" label=\"Advanced\" *ngIf=\"!options.hideAdvancedTab\">\n        <div class=\"cron-editor-tab-content\" [formGroup]=\"advancedForm\">\n\n          <mat-form-field>\n            <mat-label>Expression</mat-label>\n            <input matInput type=\"text\" class=\"advanced-cron-editor-input\" formControlName=\"expression\">\n          </mat-form-field>\n        </div>\n      </mat-tab>\n    </mat-tab-group>\n</section>\n",
                        providers: [CRON_VALUE_ACCESSOR],
                        styles: [".cron-editor-main{@include mat-elevation(1);}.cron-editor-tab-content{height:200px;margin-top:24px;border-radius:8px}.cron-editor-main .cron-editor-container .cron-editor-radio{width:20px;display:inline-block}.cron-editor-main .cron-editor-container .cron-editor-checkbox,.cron-editor-main .cron-editor-container .cron-editor-input,.cron-editor-main .cron-editor-container .cron-editor-select{display:inline-block}.cron-editor-main .cron-editor-container .well-time-wrapper{padding-left:20px}.cron-editor-main .cron-editor-container .inline-block{display:inline-block}.cron-editor-main .cron-editor-container .hour-types{width:70px}.nav-tabs li a{cursor:pointer}.cron-editor-radio-group{display:flex;flex-direction:column;margin:15px 0}.cron-editor-radio-button{margin:5px}.checkbox-margin{margin:0 10px}"]
                    }] }
        ];
        /** @nocollapse */
        CronGenComponent.ctorParameters = function () { return [
            { type: forms.FormBuilder }
        ]; };
        CronGenComponent.propDecorators = {
            backgroundColor: [{ type: core.Input }],
            color: [{ type: core.Input }],
            disabled: [{ type: core.Input }],
            options: [{ type: core.Input }],
            cron: [{ type: core.Input }]
        };
        return CronGenComponent;
    }());
    if (false) {
        /** @type {?} */
        CronGenComponent.prototype.backgroundColor;
        /** @type {?} */
        CronGenComponent.prototype.color;
        /** @type {?} */
        CronGenComponent.prototype.disabled;
        /** @type {?} */
        CronGenComponent.prototype.options;
        /** @type {?} */
        CronGenComponent.prototype.activeTab;
        /** @type {?} */
        CronGenComponent.prototype.selectOptions;
        /** @type {?} */
        CronGenComponent.prototype.state;
        /**
         * @type {?}
         * @private
         */
        CronGenComponent.prototype.localCron;
        /**
         * @type {?}
         * @private
         */
        CronGenComponent.prototype.isDirty;
        /** @type {?} */
        CronGenComponent.prototype.cronForm;
        /** @type {?} */
        CronGenComponent.prototype.minutesForm;
        /** @type {?} */
        CronGenComponent.prototype.hourlyForm;
        /** @type {?} */
        CronGenComponent.prototype.dailyForm;
        /** @type {?} */
        CronGenComponent.prototype.weeklyForm;
        /** @type {?} */
        CronGenComponent.prototype.monthlyForm;
        /** @type {?} */
        CronGenComponent.prototype.yearlyForm;
        /** @type {?} */
        CronGenComponent.prototype.advancedForm;
        /** @type {?} */
        CronGenComponent.prototype.onChange;
        /** @type {?} */
        CronGenComponent.prototype.onTouched;
        /**
         * @type {?}
         * @private
         */
        CronGenComponent.prototype.fb;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: src/cron-editor.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ɵ0 = { float: 'always' }, ɵ1 = { appearance: 'outline' };
    var CronEditorModule = /** @class */ (function () {
        function CronEditorModule() {
        }
        CronEditorModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            forms.FormsModule,
                            forms.ReactiveFormsModule,
                            tabs.MatTabsModule,
                            list.MatListModule,
                            select.MatSelectModule,
                            input.MatInputModule,
                            radio.MatRadioModule,
                            checkbox.MatCheckboxModule
                        ],
                        exports: [TimePickerComponent, CronGenComponent],
                        declarations: [TimePickerComponent, CronGenComponent],
                        providers: [
                            { provide: core$1.MAT_LABEL_GLOBAL_OPTIONS, useValue: ɵ0 },
                            { provide: formField.MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: ɵ1 }
                        ]
                    },] }
        ];
        return CronEditorModule;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: src/CronOptions.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function CronOptions() { }
    if (false) {
        /** @type {?} */
        CronOptions.prototype.formInputClass;
        /** @type {?} */
        CronOptions.prototype.formSelectClass;
        /** @type {?} */
        CronOptions.prototype.formRadioClass;
        /** @type {?} */
        CronOptions.prototype.formCheckboxClass;
        /** @type {?} */
        CronOptions.prototype.defaultTime;
        /** @type {?} */
        CronOptions.prototype.hideMinutesTab;
        /** @type {?} */
        CronOptions.prototype.hideHourlyTab;
        /** @type {?} */
        CronOptions.prototype.hideDailyTab;
        /** @type {?} */
        CronOptions.prototype.hideWeeklyTab;
        /** @type {?} */
        CronOptions.prototype.hideMonthlyTab;
        /** @type {?} */
        CronOptions.prototype.hideYearlyTab;
        /** @type {?} */
        CronOptions.prototype.hideAdvancedTab;
        /** @type {?} */
        CronOptions.prototype.hideSpecificWeekDayTab;
        /** @type {?} */
        CronOptions.prototype.hideSpecificMonthWeekTab;
        /** @type {?} */
        CronOptions.prototype.use24HourTime;
        /** @type {?} */
        CronOptions.prototype.hideSeconds;
        /** @type {?} */
        CronOptions.prototype.cronFlavor;
    }

    exports.CRON_VALUE_ACCESSOR = CRON_VALUE_ACCESSOR;
    exports.CronEditorModule = CronEditorModule;
    exports.CronGenComponent = CronGenComponent;
    exports.Days = Days;
    exports.MonthWeeks = MonthWeeks;
    exports.Months = Months;
    exports.TimePickerComponent = TimePickerComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-cron-editor.umd.js.map
