(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@angular/common'), require('@angular/material/form-field'), require('@angular/material/select'), require('@angular/material/core'), require('@angular/material/tabs'), require('@angular/material/radio'), require('@angular/material/checkbox'), require('@angular/material/input'), require('@angular/material/list')) :
    typeof define === 'function' && define.amd ? define('ngx-cron-editor', ['exports', '@angular/core', '@angular/forms', '@angular/common', '@angular/material/form-field', '@angular/material/select', '@angular/material/core', '@angular/material/tabs', '@angular/material/radio', '@angular/material/checkbox', '@angular/material/input', '@angular/material/list'], factory) :
    (global = global || self, factory(global['ngx-cron-editor'] = {}, global.ng.core, global.ng.forms, global.ng.common, global.ng.material['form-field'], global.ng.material.select, global.ng.material.core, global.ng.material.tabs, global.ng.material.radio, global.ng.material.checkbox, global.ng.material.input, global.ng.material.list));
}(this, (function (exports, core, forms, common, formField, select, core$1, tabs, radio, checkbox, input, list) { 'use strict';

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

    function TimePickerComponent_ng_container_1_mat_option_5_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "mat-option", 4);
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var hour_r5 = ctx.$implicit;
        core.ɵɵproperty("value", hour_r5);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate(hour_r5);
    } }
    function TimePickerComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵelementStart(1, "mat-form-field");
        core.ɵɵelementStart(2, "mat-label");
        core.ɵɵtext(3, "Hour(s)");
        core.ɵɵelementEnd();
        core.ɵɵelementStart(4, "mat-select", 2);
        core.ɵɵtemplate(5, TimePickerComponent_ng_container_1_mat_option_5_Template, 2, 2, "mat-option", 3);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r0 = core.ɵɵnextContext();
        core.ɵɵadvance(5);
        core.ɵɵproperty("ngForOf", ctx_r0.hours);
    } }
    function TimePickerComponent_ng_container_2_span_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "span");
        core.ɵɵtext(1, ":");
        core.ɵɵelementEnd();
    } }
    function TimePickerComponent_ng_container_2_mat_option_6_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "mat-option", 4);
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var minute_r8 = ctx.$implicit;
        core.ɵɵproperty("value", minute_r8);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate(minute_r8);
    } }
    function TimePickerComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtemplate(1, TimePickerComponent_ng_container_2_span_1_Template, 2, 0, "span", 1);
        core.ɵɵelementStart(2, "mat-form-field");
        core.ɵɵelementStart(3, "mat-label");
        core.ɵɵtext(4, "Minute(s)");
        core.ɵɵelementEnd();
        core.ɵɵelementStart(5, "mat-select", 5);
        core.ɵɵtemplate(6, TimePickerComponent_ng_container_2_mat_option_6_Template, 2, 2, "mat-option", 3);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r1 = core.ɵɵnextContext();
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", !ctx_r1.hideHours);
        core.ɵɵadvance(5);
        core.ɵɵproperty("ngForOf", ctx_r1.minutes);
    } }
    function TimePickerComponent_ng_container_3_span_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "span");
        core.ɵɵtext(1, ":");
        core.ɵɵelementEnd();
    } }
    function TimePickerComponent_ng_container_3_mat_option_6_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "mat-option", 4);
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var second_r11 = ctx.$implicit;
        core.ɵɵproperty("value", second_r11);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate(second_r11);
    } }
    function TimePickerComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtemplate(1, TimePickerComponent_ng_container_3_span_1_Template, 2, 0, "span", 1);
        core.ɵɵelementStart(2, "mat-form-field");
        core.ɵɵelementStart(3, "mat-label");
        core.ɵɵtext(4, "Second(s)");
        core.ɵɵelementEnd();
        core.ɵɵelementStart(5, "mat-select", 6);
        core.ɵɵtemplate(6, TimePickerComponent_ng_container_3_mat_option_6_Template, 2, 2, "mat-option", 3);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r2 = core.ɵɵnextContext();
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", !ctx_r2.hideMinutes);
        core.ɵɵadvance(5);
        core.ɵɵproperty("ngForOf", ctx_r2.seconds);
    } }
    function TimePickerComponent_ng_container_4_mat_option_5_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "mat-option", 4);
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var hourType_r13 = ctx.$implicit;
        core.ɵɵproperty("value", hourType_r13);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate(hourType_r13);
    } }
    function TimePickerComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵelement(1, "span");
        core.ɵɵtext(2, ". ");
        core.ɵɵelementStart(3, "mat-form-field");
        core.ɵɵelementStart(4, "mat-select", 7);
        core.ɵɵtemplate(5, TimePickerComponent_ng_container_4_mat_option_5_Template, 2, 2, "mat-option", 3);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r3 = core.ɵɵnextContext();
        core.ɵɵadvance(5);
        core.ɵɵproperty("ngForOf", ctx_r3.hourTypes);
    } }
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
            get: function () {
                return this.use24HourTime ? __spread(range(0, 23)) : __spread(range(0, 12));
            },
            enumerable: true,
            configurable: true
        });
        /** @nocollapse */ TimePickerComponent.ɵfac = function TimePickerComponent_Factory(t) { return new (t || TimePickerComponent)(core.ɵɵdirectiveInject(forms.ControlContainer)); };
        /** @nocollapse */ TimePickerComponent.ɵcmp = core.ɵɵdefineComponent({ type: TimePickerComponent, selectors: [["cron-time-picker"]], inputs: { disabled: "disabled", use24HourTime: "use24HourTime", hideHours: "hideHours", hideMinutes: "hideMinutes", hideSeconds: "hideSeconds" }, features: [core.ɵɵProvidersFeature([])], decls: 5, vars: 5, consts: [[3, "formGroup"], [4, "ngIf"], ["formControlName", "hours"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["formControlName", "minutes"], ["formControlName", "seconds"], ["formControlName", "hourType"]], template: function TimePickerComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelementStart(0, "span", 0);
                core.ɵɵtemplate(1, TimePickerComponent_ng_container_1_Template, 6, 1, "ng-container", 1);
                core.ɵɵtemplate(2, TimePickerComponent_ng_container_2_Template, 7, 2, "ng-container", 1);
                core.ɵɵtemplate(3, TimePickerComponent_ng_container_3_Template, 7, 2, "ng-container", 1);
                core.ɵɵtemplate(4, TimePickerComponent_ng_container_4_Template, 6, 1, "ng-container", 1);
                core.ɵɵelementEnd();
            } if (rf & 2) {
                core.ɵɵproperty("formGroup", ctx.parent.control);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", !ctx.hideHours);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", !ctx.hideMinutes);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", !ctx.hideSeconds);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", !ctx.use24HourTime);
            } }, directives: [forms.NgControlStatusGroup, forms.FormGroupDirective, common.NgIf, formField.MatFormField, formField.MatLabel, select.MatSelect, forms.NgControlStatus, forms.FormControlName, common.NgForOf, core$1.MatOption], encapsulation: 2 });
        return TimePickerComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(TimePickerComponent, [{
            type: core.Component,
            args: [{
                    selector: 'cron-time-picker',
                    templateUrl: './cron-time-picker.template.html',
                    providers: []
                }]
        }], function () { return [{ type: forms.ControlContainer }]; }, { disabled: [{
                type: core.Input
            }], use24HourTime: [{
                type: core.Input
            }], hideHours: [{
                type: core.Input
            }], hideMinutes: [{
                type: core.Input
            }], hideSeconds: [{
                type: core.Input
            }] }); })();

    var Days = {
        'SUN': "Sunday",
        'MON': "Monday",
        'TUE': "Tuesday",
        'WED': "Wednesday",
        'THU': "Thursday",
        'FRI': "Friday",
        'SAT': "Saturday"
    };
    var MonthWeeks = {
        '#1': "First",
        '#2': "Second",
        '#3': "Third",
        '#4': "Fourth",
        '#5': "Fifth",
        'L': "Last"
    };

    (function (Months) {
        Months[Months["January"] = 1] = "January";
        Months[Months["February"] = 2] = "February";
        Months[Months["March"] = 3] = "March";
        Months[Months["April"] = 4] = "April";
        Months[Months["May"] = 5] = "May";
        Months[Months["June"] = 6] = "June";
        Months[Months["July"] = 7] = "July";
        Months[Months["August"] = 8] = "August";
        Months[Months["September"] = 9] = "September";
        Months[Months["October"] = 10] = "October";
        Months[Months["November"] = 11] = "November";
        Months[Months["December"] = 12] = "December";
    })(exports.Months || (exports.Months = {}));
    ;

    function CronGenComponent_mat_tab_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "mat-tab", 9);
        core.ɵɵelementStart(1, "div", 10);
        core.ɵɵelementStart(2, "span", 11);
        core.ɵɵtext(3, "Every ");
        core.ɵɵelementEnd();
        core.ɵɵelement(4, "cron-time-picker", 12);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r0 = core.ɵɵnextContext();
        core.ɵɵadvance(4);
        core.ɵɵproperty("formGroup", ctx_r0.minutesForm)("use24HourTime", ctx_r0.options.use24HourTime)("hideHours", true)("hideSeconds", ctx_r0.options.hideSeconds || !ctx_r0.isCronFlavorQuartz);
    } }
    function CronGenComponent_mat_tab_3_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "mat-tab", 13);
        core.ɵɵelementStart(1, "div", 10);
        core.ɵɵelementStart(2, "span", 11);
        core.ɵɵtext(3, "Every ");
        core.ɵɵelementEnd();
        core.ɵɵelement(4, "cron-time-picker", 14);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r1 = core.ɵɵnextContext();
        core.ɵɵadvance(4);
        core.ɵɵproperty("formGroup", ctx_r1.hourlyForm)("use24HourTime", ctx_r1.options.use24HourTime)("hideSeconds", ctx_r1.options.hideSeconds || !ctx_r1.isCronFlavorQuartz);
    } }
    function CronGenComponent_mat_tab_4_mat_option_10_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "mat-option", 25);
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var monthDay_r8 = ctx.$implicit;
        core.ɵɵproperty("value", monthDay_r8);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", monthDay_r8, " ");
    } }
    function CronGenComponent_mat_tab_4_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "mat-tab", 15);
        core.ɵɵelementStart(1, "div", 16);
        core.ɵɵelementStart(2, "mat-radio-group", 17);
        core.ɵɵelementStart(3, "mat-radio-button", 18);
        core.ɵɵelementStart(4, "span", 11);
        core.ɵɵtext(5, "Every ");
        core.ɵɵelementEnd();
        core.ɵɵelementStart(6, "mat-form-field", 19);
        core.ɵɵelementStart(7, "mat-label");
        core.ɵɵtext(8, "Day(s)");
        core.ɵɵelementEnd();
        core.ɵɵelementStart(9, "mat-select", 20);
        core.ɵɵtemplate(10, CronGenComponent_mat_tab_4_mat_option_10_Template, 2, 2, "mat-option", 21);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵtext(11, " at ");
        core.ɵɵelement(12, "cron-time-picker", 22);
        core.ɵɵelementEnd();
        core.ɵɵelementStart(13, "mat-radio-button", 23);
        core.ɵɵelementStart(14, "span");
        core.ɵɵtext(15, "Week Day (MON-FRI) at ");
        core.ɵɵelementEnd();
        core.ɵɵelement(16, "cron-time-picker", 24);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r2 = core.ɵɵnextContext();
        core.ɵɵadvance(1);
        core.ɵɵproperty("formGroup", ctx_r2.dailyForm);
        core.ɵɵadvance(9);
        core.ɵɵproperty("ngForOf", ctx_r2.selectOptions.monthDays);
        core.ɵɵadvance(2);
        core.ɵɵproperty("use24HourTime", ctx_r2.options.use24HourTime)("hideSeconds", ctx_r2.options.hideSeconds || !ctx_r2.isCronFlavorQuartz);
        core.ɵɵadvance(4);
        core.ɵɵproperty("use24HourTime", ctx_r2.options.use24HourTime)("hideSeconds", ctx_r2.options.hideSeconds || !ctx_r2.isCronFlavorQuartz);
    } }
    function CronGenComponent_mat_tab_5_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "mat-tab", 26);
        core.ɵɵelementStart(1, "div", 10);
        core.ɵɵelementStart(2, "span", 11);
        core.ɵɵtext(3, "Every ");
        core.ɵɵelementEnd();
        core.ɵɵelementStart(4, "div", 27);
        core.ɵɵelementStart(5, "mat-checkbox", 28);
        core.ɵɵtext(6, "Monday");
        core.ɵɵelementEnd();
        core.ɵɵelementStart(7, "mat-checkbox", 29);
        core.ɵɵtext(8, "Tuesday");
        core.ɵɵelementEnd();
        core.ɵɵelementStart(9, "mat-checkbox", 30);
        core.ɵɵtext(10, "Wednesday");
        core.ɵɵelementEnd();
        core.ɵɵelementStart(11, "mat-checkbox", 31);
        core.ɵɵtext(12, "Thursday");
        core.ɵɵelementEnd();
        core.ɵɵelementStart(13, "mat-checkbox", 32);
        core.ɵɵtext(14, "Friday");
        core.ɵɵelementEnd();
        core.ɵɵelementStart(15, "mat-checkbox", 33);
        core.ɵɵtext(16, "Saturday");
        core.ɵɵelementEnd();
        core.ɵɵelementStart(17, "mat-checkbox", 34);
        core.ɵɵtext(18, "Sunday");
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementStart(19, "span", 11);
        core.ɵɵtext(20, "at time ");
        core.ɵɵelementEnd();
        core.ɵɵelement(21, "cron-time-picker", 14);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r3 = core.ɵɵnextContext();
        core.ɵɵadvance(4);
        core.ɵɵproperty("formGroup", ctx_r3.weeklyForm);
        core.ɵɵadvance(17);
        core.ɵɵproperty("formGroup", ctx_r3.weeklyForm)("use24HourTime", ctx_r3.options.use24HourTime)("hideSeconds", ctx_r3.options.hideSeconds || !ctx_r3.isCronFlavorQuartz);
    } }
    function CronGenComponent_mat_tab_6_ng_container_6_option_5_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "option", 25);
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var monthDaysWithLast_r16 = ctx.$implicit;
        var ctx_r15 = core.ɵɵnextContext(3);
        core.ɵɵproperty("value", monthDaysWithLast_r16);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", ctx_r15.monthDayDisplay(monthDaysWithLast_r16), " ");
    } }
    function CronGenComponent_mat_tab_6_ng_container_6_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵelementStart(1, "mat-form-field");
        core.ɵɵelementStart(2, "mat-label");
        core.ɵɵtext(3, "Day");
        core.ɵɵelementEnd();
        core.ɵɵelementStart(4, "mat-select", 47);
        core.ɵɵtemplate(5, CronGenComponent_mat_tab_6_ng_container_6_option_5_Template, 2, 2, "option", 21);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r9 = core.ɵɵnextContext(2);
        core.ɵɵadvance(5);
        core.ɵɵproperty("ngForOf", ctx_r9.selectOptions.monthDaysWithLasts);
    } }
    function CronGenComponent_mat_tab_6_ng_container_7_mat_option_5_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "mat-option", 25);
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var monthDaysWithOutLast_r18 = ctx.$implicit;
        var ctx_r17 = core.ɵɵnextContext(3);
        core.ɵɵproperty("value", monthDaysWithOutLast_r18);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", ctx_r17.monthDayDisplay(monthDaysWithOutLast_r18), " ");
    } }
    function CronGenComponent_mat_tab_6_ng_container_7_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵelementStart(1, "mat-form-field");
        core.ɵɵelementStart(2, "mat-label");
        core.ɵɵtext(3, "Day");
        core.ɵɵelementEnd();
        core.ɵɵelementStart(4, "mat-select", 47);
        core.ɵɵtemplate(5, CronGenComponent_mat_tab_6_ng_container_7_mat_option_5_Template, 2, 2, "mat-option", 21);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r10 = core.ɵɵnextContext(2);
        core.ɵɵadvance(5);
        core.ɵɵproperty("ngForOf", ctx_r10.selectOptions.monthDaysWithOutLasts);
    } }
    function CronGenComponent_mat_tab_6_mat_option_14_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "mat-option", 25);
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var month_r19 = ctx.$implicit;
        core.ɵɵproperty("value", month_r19);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", month_r19, " ");
    } }
    function CronGenComponent_mat_tab_6_mat_option_24_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "mat-option", 25);
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var monthWeek_r20 = ctx.$implicit;
        var ctx_r12 = core.ɵɵnextContext(2);
        core.ɵɵproperty("value", monthWeek_r20);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", ctx_r12.monthWeekDisplay(monthWeek_r20), " ");
    } }
    function CronGenComponent_mat_tab_6_mat_option_29_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "mat-option", 25);
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var day_r21 = ctx.$implicit;
        var ctx_r13 = core.ɵɵnextContext(2);
        core.ɵɵproperty("value", day_r21);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", ctx_r13.dayDisplay(day_r21), " ");
    } }
    function CronGenComponent_mat_tab_6_mat_option_35_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "mat-option", 25);
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var month_r22 = ctx.$implicit;
        core.ɵɵproperty("value", month_r22);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", month_r22, " ");
    } }
    function CronGenComponent_mat_tab_6_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "mat-tab", 35);
        core.ɵɵelementStart(1, "div", 16);
        core.ɵɵelementStart(2, "mat-radio-group", 36);
        core.ɵɵelementStart(3, "mat-radio-button", 37);
        core.ɵɵelementStart(4, "span", 38);
        core.ɵɵtext(5, " On the ");
        core.ɵɵtemplate(6, CronGenComponent_mat_tab_6_ng_container_6_Template, 6, 1, "ng-container", 39);
        core.ɵɵtemplate(7, CronGenComponent_mat_tab_6_ng_container_7_Template, 6, 1, "ng-container", 39);
        core.ɵɵtext(8, " of every ");
        core.ɵɵelementContainerStart(9);
        core.ɵɵelementStart(10, "mat-form-field");
        core.ɵɵelementStart(11, "mat-label");
        core.ɵɵtext(12, "Month");
        core.ɵɵelementEnd();
        core.ɵɵelementStart(13, "mat-select", 40);
        core.ɵɵtemplate(14, CronGenComponent_mat_tab_6_mat_option_14_Template, 2, 2, "mat-option", 21);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementContainerEnd();
        core.ɵɵtext(15, " at time ");
        core.ɵɵelement(16, "cron-time-picker", 41);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementStart(17, "mat-radio-button", 42);
        core.ɵɵelementStart(18, "span", 43);
        core.ɵɵtext(19, " On the ");
        core.ɵɵelementStart(20, "mat-form-field");
        core.ɵɵelementStart(21, "mat-label");
        core.ɵɵtext(22, "Week");
        core.ɵɵelementEnd();
        core.ɵɵelementStart(23, "mat-select", 44);
        core.ɵɵtemplate(24, CronGenComponent_mat_tab_6_mat_option_24_Template, 2, 2, "mat-option", 21);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementStart(25, "mat-form-field");
        core.ɵɵelementStart(26, "mat-label");
        core.ɵɵtext(27, "Day");
        core.ɵɵelementEnd();
        core.ɵɵelementStart(28, "mat-select", 45);
        core.ɵɵtemplate(29, CronGenComponent_mat_tab_6_mat_option_29_Template, 2, 2, "mat-option", 21);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵtext(30, " of every ");
        core.ɵɵelementStart(31, "mat-form-field");
        core.ɵɵelementStart(32, "mat-label");
        core.ɵɵtext(33, "Month");
        core.ɵɵelementEnd();
        core.ɵɵelementStart(34, "mat-select", 46);
        core.ɵɵtemplate(35, CronGenComponent_mat_tab_6_mat_option_35_Template, 2, 2, "mat-option", 21);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵtext(36, " at time ");
        core.ɵɵelement(37, "cron-time-picker", 14);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r4 = core.ɵɵnextContext();
        core.ɵɵadvance(1);
        core.ɵɵproperty("formGroup", ctx_r4.monthlyForm);
        core.ɵɵadvance(5);
        core.ɵɵproperty("ngIf", ctx_r4.options.cronFlavor === "quartz");
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r4.options.cronFlavor === "standard");
        core.ɵɵadvance(6);
        core.ɵɵproperty("ngClass", ctx_r4.options.formSelectClass);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngForOf", ctx_r4.selectOptions.months);
        core.ɵɵadvance(2);
        core.ɵɵproperty("disabled", ctx_r4.disabled)("formGroup", ctx_r4.monthlyForm.controls.specificDay)("use24HourTime", ctx_r4.options.use24HourTime)("hideSeconds", ctx_r4.options.hideSeconds || !ctx_r4.isCronFlavorQuartz);
        core.ɵɵadvance(7);
        core.ɵɵproperty("ngClass", ctx_r4.options.formSelectClass);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngForOf", ctx_r4.selectOptions.monthWeeks);
        core.ɵɵadvance(4);
        core.ɵɵproperty("ngClass", ctx_r4.options.formSelectClass);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngForOf", ctx_r4.selectOptions.days);
        core.ɵɵadvance(6);
        core.ɵɵproperty("ngForOf", ctx_r4.selectOptions.months);
        core.ɵɵadvance(2);
        core.ɵɵproperty("formGroup", ctx_r4.monthlyForm.controls.specificWeekDay)("use24HourTime", ctx_r4.options.use24HourTime)("hideSeconds", ctx_r4.options.hideSeconds || !ctx_r4.isCronFlavorQuartz);
    } }
    function CronGenComponent_mat_tab_7_mat_form_field_5_mat_option_4_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "mat-option", 25);
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var monthDaysWithLast_r30 = ctx.$implicit;
        var ctx_r29 = core.ɵɵnextContext(3);
        core.ɵɵproperty("value", monthDaysWithLast_r30);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", ctx_r29.monthDayDisplay(monthDaysWithLast_r30), " ");
    } }
    function CronGenComponent_mat_tab_7_mat_form_field_5_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "mat-form-field", 51);
        core.ɵɵelementStart(1, "mat-label");
        core.ɵɵtext(2, "Day");
        core.ɵɵelementEnd();
        core.ɵɵelementStart(3, "mat-select", 47);
        core.ɵɵtemplate(4, CronGenComponent_mat_tab_7_mat_form_field_5_mat_option_4_Template, 2, 2, "mat-option", 21);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r23 = core.ɵɵnextContext(2);
        core.ɵɵadvance(4);
        core.ɵɵproperty("ngForOf", ctx_r23.selectOptions.monthDaysWithLasts);
    } }
    function CronGenComponent_mat_tab_7_mat_form_field_6_mat_option_4_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "mat-option", 25);
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var monthDaysWithOutLast_r32 = ctx.$implicit;
        var ctx_r31 = core.ɵɵnextContext(3);
        core.ɵɵproperty("value", monthDaysWithOutLast_r32);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", ctx_r31.monthDayDisplay(monthDaysWithOutLast_r32), " ");
    } }
    function CronGenComponent_mat_tab_7_mat_form_field_6_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "mat-form-field", 51);
        core.ɵɵelementStart(1, "mat-label");
        core.ɵɵtext(2, "Day");
        core.ɵɵelementEnd();
        core.ɵɵelementStart(3, "mat-select", 47);
        core.ɵɵtemplate(4, CronGenComponent_mat_tab_7_mat_form_field_6_mat_option_4_Template, 2, 2, "mat-option", 21);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r24 = core.ɵɵnextContext(2);
        core.ɵɵadvance(4);
        core.ɵɵproperty("ngForOf", ctx_r24.selectOptions.monthDaysWithOutLasts);
    } }
    function CronGenComponent_mat_tab_7_mat_option_12_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "mat-option", 25);
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var month_r33 = ctx.$implicit;
        var ctx_r25 = core.ɵɵnextContext(2);
        core.ɵɵproperty("value", month_r33);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", ctx_r25.monthDisplay(month_r33), " ");
    } }
    function CronGenComponent_mat_tab_7_mat_option_21_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "mat-option", 25);
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var monthWeek_r34 = ctx.$implicit;
        var ctx_r26 = core.ɵɵnextContext(2);
        core.ɵɵproperty("value", monthWeek_r34);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", ctx_r26.monthWeekDisplay(monthWeek_r34), " ");
    } }
    function CronGenComponent_mat_tab_7_mat_option_26_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "mat-option", 25);
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var day_r35 = ctx.$implicit;
        var ctx_r27 = core.ɵɵnextContext(2);
        core.ɵɵproperty("value", day_r35);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", ctx_r27.dayDisplay(day_r35), " ");
    } }
    function CronGenComponent_mat_tab_7_mat_option_32_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "mat-option", 25);
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var month_r36 = ctx.$implicit;
        var ctx_r28 = core.ɵɵnextContext(2);
        core.ɵɵproperty("value", month_r36);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", ctx_r28.monthDisplay(month_r36), " ");
    } }
    function CronGenComponent_mat_tab_7_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "mat-tab", 48);
        core.ɵɵelementStart(1, "div", 16);
        core.ɵɵelementStart(2, "mat-radio-group", 36);
        core.ɵɵelementStart(3, "mat-radio-button", 49);
        core.ɵɵtext(4, " On the ");
        core.ɵɵtemplate(5, CronGenComponent_mat_tab_7_mat_form_field_5_Template, 5, 1, "mat-form-field", 50);
        core.ɵɵtemplate(6, CronGenComponent_mat_tab_7_mat_form_field_6_Template, 5, 1, "mat-form-field", 50);
        core.ɵɵtext(7, " of ");
        core.ɵɵelementStart(8, "mat-form-field", 51);
        core.ɵɵelementStart(9, "mat-label");
        core.ɵɵtext(10, "Month");
        core.ɵɵelementEnd();
        core.ɵɵelementStart(11, "mat-select", 52);
        core.ɵɵtemplate(12, CronGenComponent_mat_tab_7_mat_option_12_Template, 2, 2, "mat-option", 21);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵtext(13, " at time ");
        core.ɵɵelement(14, "cron-time-picker", 41);
        core.ɵɵelementEnd();
        core.ɵɵelementStart(15, "mat-radio-button", 53);
        core.ɵɵtext(16, " On the ");
        core.ɵɵelementStart(17, "mat-form-field", 54);
        core.ɵɵelementStart(18, "mat-label");
        core.ɵɵtext(19, "Week");
        core.ɵɵelementEnd();
        core.ɵɵelementStart(20, "mat-select", 55);
        core.ɵɵtemplate(21, CronGenComponent_mat_tab_7_mat_option_21_Template, 2, 2, "mat-option", 21);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementStart(22, "mat-form-field", 54);
        core.ɵɵelementStart(23, "mat-label");
        core.ɵɵtext(24, "Day");
        core.ɵɵelementEnd();
        core.ɵɵelementStart(25, "mat-select", 56);
        core.ɵɵtemplate(26, CronGenComponent_mat_tab_7_mat_option_26_Template, 2, 2, "mat-option", 21);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵtext(27, " of ");
        core.ɵɵelementStart(28, "mat-form-field", 54);
        core.ɵɵelementStart(29, "mat-label");
        core.ɵɵtext(30, "Month");
        core.ɵɵelementEnd();
        core.ɵɵelementStart(31, "mat-select", 52);
        core.ɵɵtemplate(32, CronGenComponent_mat_tab_7_mat_option_32_Template, 2, 2, "mat-option", 21);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵtext(33, " at time ");
        core.ɵɵelement(34, "cron-time-picker", 41);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r5 = core.ɵɵnextContext();
        core.ɵɵadvance(1);
        core.ɵɵproperty("formGroup", ctx_r5.yearlyForm);
        core.ɵɵadvance(4);
        core.ɵɵproperty("ngIf", ctx_r5.options.cronFlavor === "quartz");
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r5.options.cronFlavor === "standard");
        core.ɵɵadvance(6);
        core.ɵɵproperty("ngForOf", ctx_r5.selectOptions.months);
        core.ɵɵadvance(2);
        core.ɵɵproperty("disabled", ctx_r5.disabled)("formGroup", ctx_r5.yearlyForm.controls.specificMonthDay)("use24HourTime", ctx_r5.options.use24HourTime)("hideSeconds", ctx_r5.options.hideSeconds || !ctx_r5.isCronFlavorQuartz);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngClass", ctx_r5.state.formRadioClass);
        core.ɵɵadvance(6);
        core.ɵɵproperty("ngForOf", ctx_r5.selectOptions.monthWeeks);
        core.ɵɵadvance(5);
        core.ɵɵproperty("ngForOf", ctx_r5.selectOptions.days);
        core.ɵɵadvance(6);
        core.ɵɵproperty("ngForOf", ctx_r5.selectOptions.months);
        core.ɵɵadvance(2);
        core.ɵɵproperty("disabled", ctx_r5.disabled)("formGroup", ctx_r5.yearlyForm.controls.specificMonthWeek)("use24HourTime", ctx_r5.options.use24HourTime)("hideSeconds", ctx_r5.options.hideSeconds || !ctx_r5.isCronFlavorQuartz);
    } }
    function CronGenComponent_mat_tab_8_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "mat-tab", 57);
        core.ɵɵelementStart(1, "div", 16);
        core.ɵɵelementStart(2, "mat-form-field");
        core.ɵɵelementStart(3, "mat-label");
        core.ɵɵtext(4, "Expression");
        core.ɵɵelementEnd();
        core.ɵɵelement(5, "input", 58);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r6 = core.ɵɵnextContext();
        core.ɵɵadvance(1);
        core.ɵɵproperty("formGroup", ctx_r6.advancedForm);
    } }
    var CRON_VALUE_ACCESSOR = {
        provide: forms.NG_VALUE_ACCESSOR,
        useExisting: core.forwardRef(function () { return CronGenComponent; }),
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
            this.onChange = function (_) {
            };
            this.onTouched = function () {
            };
        }
        Object.defineProperty(CronGenComponent.prototype, "cron", {
            get: function () {
                return this.localCron;
            },
            set: function (value) {
                this.localCron = value;
                this.onChange(value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CronGenComponent.prototype, "isCronFlavorQuartz", {
            get: function () {
                return this.options.cronFlavor === 'quartz';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CronGenComponent.prototype, "isCronFlavorStandard", {
            get: function () {
                return this.options.cronFlavor === 'standard';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CronGenComponent.prototype, "yearDefaultChar", {
            get: function () {
                return this.options.cronFlavor === 'quartz' ? '*' : '';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CronGenComponent.prototype, "weekDayDefaultChar", {
            get: function () {
                return this.options.cronFlavor === 'quartz' ? '?' : '*';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CronGenComponent.prototype, "monthDayDefaultChar", {
            get: function () {
                return this.options.cronFlavor === 'quartz' ? '?' : '*';
            },
            enumerable: true,
            configurable: true
        });
        /* Update the cron output to that of the selected tab.
         * The cron output value is updated whenever a form is updated. To make it change in response to tab selection, we simply reset
         * the value of the form that goes into focus. */
        CronGenComponent.prototype.onTabFocus = function (idx) {
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
        CronGenComponent.prototype.ngOnInit = function () {
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
                    this.minutesForm.valueChanges.subscribe(function (value) { return _this.computeMinutesCron(value); });
                    this.hourlyForm = this.fb.group({
                        hours: [1],
                        minutes: [0],
                        seconds: [0]
                    });
                    this.hourlyForm.valueChanges.subscribe(function (value) { return _this.computeHourlyCron(value); });
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
                    this.dailyForm.valueChanges.subscribe(function (value) { return _this.computeDailyCron(value); });
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
                    this.weeklyForm.valueChanges.subscribe(function (next) { return _this.computeWeeklyCron(next); });
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
                    this.monthlyForm.valueChanges.subscribe(function (next) { return _this.computeMonthlyCron(next); });
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
                    this.yearlyForm.valueChanges.subscribe(function (next) { return _this.computeYearlyCron(next); });
                    this.advancedForm = this.fb.group({
                        expression: [this.isCronFlavorQuartz ? '0 15 10 L-2 * ? *' : '15 10 2 * *']
                    });
                    this.advancedForm.controls.expression.valueChanges.subscribe(function (next) { return _this.computeAdvancedExpression(next); });
                    return [2 /*return*/];
                });
            });
        };
        CronGenComponent.prototype.computeMinutesCron = function (state) {
            this.cron = ((this.isCronFlavorQuartz ? state.seconds : '') + " 0/" + state.minutes + " * 1/1 * " + this.weekDayDefaultChar + " " + this.yearDefaultChar).trim();
            this.cronForm.setValue(this.cron);
        };
        CronGenComponent.prototype.computeHourlyCron = function (state) {
            this.cron = ((this.isCronFlavorQuartz ? state.seconds : '') + " " + state.minutes + " 0/" + state.hours + " 1/1 * " + this.weekDayDefaultChar + " " + this.yearDefaultChar).trim();
            this.cronForm.setValue(this.cron);
        };
        CronGenComponent.prototype.computeDailyCron = function (state) {
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
        CronGenComponent.prototype.computeWeeklyCron = function (state) {
            var days = this.selectOptions.days
                .reduce(function (acc, day) { return state[day] ? acc.concat([day]) : acc; }, [])
                .join(',');
            this.cron = ((this.isCronFlavorQuartz ? state.seconds : '') + " " + state.minutes + " " + this.hourToCron(state.hours, state.hourType) + " " + this.monthDayDefaultChar + " * " + days + " " + this.yearDefaultChar).trim();
            this.cronForm.setValue(this.cron);
        };
        CronGenComponent.prototype.computeMonthlyCron = function (state) {
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
        CronGenComponent.prototype.computeYearlyCron = function (state) {
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
        CronGenComponent.prototype.computeAdvancedExpression = function (expression) {
            this.cron = expression;
            this.cronForm.setValue(this.cron);
        };
        CronGenComponent.prototype.dayDisplay = function (day) {
            return Days[day];
        };
        CronGenComponent.prototype.monthWeekDisplay = function (monthWeekNumber) {
            return MonthWeeks[monthWeekNumber];
        };
        CronGenComponent.prototype.monthDisplay = function (month) {
            return exports.Months[month];
        };
        CronGenComponent.prototype.monthDayDisplay = function (month) {
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
        CronGenComponent.prototype.getAmPmHour = function (hour) {
            return this.options.use24HourTime ? hour : (hour + 11) % 12 + 1;
        };
        CronGenComponent.prototype.getHourType = function (hour) {
            return this.options.use24HourTime ? undefined : (hour >= 12 ? 'PM' : 'AM');
        };
        CronGenComponent.prototype.hourToCron = function (hour, hourType) {
            if (this.options.use24HourTime) {
                return hour;
            }
            else {
                return hourType === 'AM' ? (hour === 12 ? 0 : hour) : (hour === 12 ? 12 : hour + 12);
            }
        };
        CronGenComponent.prototype.handleModelChange = function (cron) {
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
                var parsedHours = parseInt(hours, 10);
                this.state.daily.everyDays.hours = this.getAmPmHour(parsedHours);
                this.state.daily.everyDays.hourType = this.getHourType(parsedHours);
                this.state.daily.everyDays.minutes = parseInt(minutes, 10);
                this.state.daily.everyDays.seconds = parseInt(seconds, 10);
            }
            else if (cron.match(/\d+ \d+ \d+ [\?\*] \* MON-FRI \*/)) {
                this.activeTab = 'daily';
                this.state.daily.subTab = 'everyWeekDay';
                var parsedHours = parseInt(hours, 10);
                this.state.daily.everyWeekDay.hours = this.getAmPmHour(parsedHours);
                this.state.daily.everyWeekDay.hourType = this.getHourType(parsedHours);
                this.state.daily.everyWeekDay.minutes = parseInt(minutes, 10);
                this.state.daily.everyWeekDay.seconds = parseInt(seconds, 10);
            }
            else if (cron.match(/\d+ \d+ \d+ [\?\*] \* (MON|TUE|WED|THU|FRI|SAT|SUN)(,(MON|TUE|WED|THU|FRI|SAT|SUN))* \*/)) {
                this.activeTab = 'weekly';
                this.selectOptions.days.forEach(function (weekDay) { return _this.state.weekly[weekDay] = false; });
                dayOfWeek.split(',').forEach(function (weekDay) { return _this.state.weekly[weekDay] = true; });
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
                var parsedHours = parseInt(hours, 10);
                this.state.monthly.specificDay.hours = this.getAmPmHour(parsedHours);
                this.state.monthly.specificDay.hourType = this.getHourType(parsedHours);
                this.state.monthly.specificDay.minutes = parseInt(minutes, 10);
                this.state.monthly.specificDay.seconds = parseInt(seconds, 10);
            }
            else if (cron.match(/\d+ \d+ \d+ [\?\*] 1\/\d+ (MON|TUE|WED|THU|FRI|SAT|SUN)((#[1-5])|L) \*/)) {
                var day = dayOfWeek.substr(0, 3);
                var monthWeek = dayOfWeek.substr(3);
                this.activeTab = 'monthly';
                this.state.monthly.subTab = 'specificWeekDay';
                this.state.monthly.specificWeekDay.monthWeek = monthWeek;
                this.state.monthly.specificWeekDay.day = day;
                this.state.monthly.specificWeekDay.months = parseInt(month.substring(2), 10);
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
                var parsedHours = parseInt(hours, 10);
                this.state.yearly.specificMonthDay.hours = this.getAmPmHour(parsedHours);
                this.state.yearly.specificMonthDay.hourType = this.getHourType(parsedHours);
                this.state.yearly.specificMonthDay.minutes = parseInt(minutes, 10);
                this.state.yearly.specificMonthDay.seconds = parseInt(seconds, 10);
            }
            else if (cron.match(/\d+ \d+ \d+ [\?\*] \d+ (MON|TUE|WED|THU|FRI|SAT|SUN)((#[1-5])|L) \*/)) {
                var day = dayOfWeek.substr(0, 3);
                var monthWeek = dayOfWeek.substr(3);
                this.activeTab = 'yearly';
                this.state.yearly.subTab = 'specificMonthWeek';
                this.state.yearly.specificMonthWeek.monthWeek = monthWeek;
                this.state.yearly.specificMonthWeek.day = day;
                this.state.yearly.specificMonthWeek.month = parseInt(month, 10);
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
        CronGenComponent.prototype.cronIsValid = function (cron) {
            if (cron) {
                var cronParts = cron.split(' ');
                return (this.isCronFlavorQuartz && (cronParts.length === 6
                    || cronParts.length === 7)
                    || (this.isCronFlavorStandard && cronParts.length === 5));
            }
            return false;
        };
        CronGenComponent.prototype.getDefaultState = function () {
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
        CronGenComponent.prototype.getOrdinalSuffix = function (value) {
            if (value.length > 1) {
                var secondToLastDigit = value.charAt(value.length - 2);
                if (secondToLastDigit === '1') {
                    return 'th';
                }
            }
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
        CronGenComponent.prototype.getSelectOptions = function () {
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
        CronGenComponent.prototype.getRange = function (start, end) {
            var length = end - start + 1;
            return Array.apply(null, Array(length)).map(function (_, i) { return i + start; });
        };
        CronGenComponent.prototype.writeValue = function (obj) {
            this.cron = obj;
        };
        CronGenComponent.prototype.registerOnChange = function (fn) {
            this.onChange = fn;
        };
        CronGenComponent.prototype.registerOnTouched = function (fn) {
            this.onTouched = fn;
        };
        CronGenComponent.prototype.setDisabledState = function (isDisabled) {
            this.disabled = isDisabled;
        };
        /** @nocollapse */ CronGenComponent.ɵfac = function CronGenComponent_Factory(t) { return new (t || CronGenComponent)(core.ɵɵdirectiveInject(forms.FormBuilder)); };
        /** @nocollapse */ CronGenComponent.ɵcmp = core.ɵɵdefineComponent({ type: CronGenComponent, selectors: [["cron-editor"]], inputs: { backgroundColor: "backgroundColor", color: "color", disabled: "disabled", options: "options", cron: "cron" }, features: [core.ɵɵProvidersFeature([CRON_VALUE_ACCESSOR])], decls: 9, vars: 9, consts: [[1, "cron-editor-main"], [1, "cron-editor-container", 3, "backgroundColor", "color", "selectedIndexChange"], ["class", "cron-editor-tab", "label", "Minutes", 4, "ngIf"], ["class", "cron-editor-tab", "label", "Hourly", 4, "ngIf"], ["class", "cron-editor-tab", "label", "Daily", 4, "ngIf"], ["class", "cron-editor-tab", "label", "Weekly", 4, "ngIf"], ["class", "cron-editor-tab", "label", "Monthly", 4, "ngIf"], ["class", "cron-editor-tab", "label", "Yearly", 4, "ngIf"], ["class", "cron-editor-tab", "label", "Advanced", 4, "ngIf"], ["label", "Minutes", 1, "cron-editor-tab"], [1, "cron-editor-tab-content"], [1, "cron-form-label"], [3, "formGroup", "use24HourTime", "hideHours", "hideSeconds"], ["label", "Hourly", 1, "cron-editor-tab"], [3, "formGroup", "use24HourTime", "hideSeconds"], ["label", "Daily", 1, "cron-editor-tab"], [1, "cron-editor-tab-content", 3, "formGroup"], ["formControlName", "subTab", 1, "cron-editor-radio-group"], ["name", "subTab", "value", "everyDays", "checked", "checked", 1, "cron-editor-radio-button"], ["formGroupName", "everyDays"], ["formControlName", "days"], [3, "value", 4, "ngFor", "ngForOf"], ["formGroupName", "everyDays", 3, "use24HourTime", "hideSeconds"], ["name", "subTab", "value", "everyWeekDay", 1, "cron-editor-radio-button"], ["formGroupName", "everyWeekDay", 3, "use24HourTime", "hideSeconds"], [3, "value"], ["label", "Weekly", 1, "cron-editor-tab"], [3, "formGroup"], ["formControlName", "MON", 1, "checkbox-margin"], ["formControlName", "TUE", 1, "checkbox-margin"], ["formControlName", "WED", 1, "checkbox-margin"], ["formControlName", "THU", 1, "checkbox-margin"], ["formControlName", "FRI", 1, "checkbox-margin"], ["formControlName", "SAT", 1, "checkbox-margin"], ["formControlName", "SUN", 1, "checkbox-margin"], ["label", "Monthly", 1, "cron-editor-tab"], ["formControlName", "subTab"], ["name", "monthly-radio", "value", "specificDay"], ["formGroupName", "specificDay"], [4, "ngIf"], ["formControlName", "months", 1, "months-small", 3, "ngClass"], [3, "disabled", "formGroup", "use24HourTime", "hideSeconds"], ["name", "monthly-radio", "value", "specificWeekDay"], ["formGroupName", "specificWeekDay"], ["formControlName", "monthWeek", 1, "day-order-in-month", 3, "ngClass"], ["formControlName", "day", 1, "week-days", 3, "ngClass"], ["formControlName", "months", 1, "months-small"], ["formControlName", "day", 1, "month-days"], ["label", "Yearly", 1, "cron-editor-tab"], ["name", "yearly-radio", "value", "specificMonthDay"], ["formGroupName", "specificMonthDay", 4, "ngIf"], ["formGroupName", "specificMonthDay"], ["formControlName", "month", 1, "months"], ["name", "yearly-radio", "value", "specificMonthWeek", 3, "ngClass"], ["formGroupName", "specificMonthWeek"], ["formControlName", "monthWeek", 1, "day-order-in-month"], ["formControlName", "day", 1, "week-days"], ["label", "Advanced", 1, "cron-editor-tab"], ["matInput", "", "type", "text", "formControlName", "expression", 1, "advanced-cron-editor-input"]], template: function CronGenComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelementStart(0, "section", 0);
                core.ɵɵelementStart(1, "mat-tab-group", 1);
                core.ɵɵlistener("selectedIndexChange", function CronGenComponent_Template_mat_tab_group_selectedIndexChange_1_listener($event) { return ctx.onTabFocus($event); });
                core.ɵɵtemplate(2, CronGenComponent_mat_tab_2_Template, 5, 4, "mat-tab", 2);
                core.ɵɵtemplate(3, CronGenComponent_mat_tab_3_Template, 5, 3, "mat-tab", 3);
                core.ɵɵtemplate(4, CronGenComponent_mat_tab_4_Template, 17, 6, "mat-tab", 4);
                core.ɵɵtemplate(5, CronGenComponent_mat_tab_5_Template, 22, 4, "mat-tab", 5);
                core.ɵɵtemplate(6, CronGenComponent_mat_tab_6_Template, 38, 17, "mat-tab", 6);
                core.ɵɵtemplate(7, CronGenComponent_mat_tab_7_Template, 35, 16, "mat-tab", 7);
                core.ɵɵtemplate(8, CronGenComponent_mat_tab_8_Template, 6, 1, "mat-tab", 8);
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
            } if (rf & 2) {
                core.ɵɵadvance(1);
                core.ɵɵproperty("backgroundColor", ctx.backgroundColor)("color", ctx.color);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", !ctx.options.hideMinutesTab);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", !ctx.options.hideHourlyTab);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", !ctx.options.hideDailyTab);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", !ctx.options.hideWeeklyTab);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", !ctx.options.hideMonthlyTab);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", !ctx.options.hideYearlyTab);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", !ctx.options.hideAdvancedTab);
            } }, directives: [tabs.MatTabGroup, common.NgIf, tabs.MatTab, TimePickerComponent, forms.NgControlStatusGroup, forms.FormGroupDirective, radio.MatRadioGroup, forms.NgControlStatus, forms.FormControlName, radio.MatRadioButton, formField.MatFormField, forms.FormGroupName, formField.MatLabel, select.MatSelect, common.NgForOf, core$1.MatOption, checkbox.MatCheckbox, common.NgClass, forms.NgSelectOption, forms.ɵangular_packages_forms_forms_x, input.MatInput, forms.DefaultValueAccessor], styles: [".cron-editor-main[_ngcontent-%COMP%]{@include mat-elevation(1);}.cron-editor-tab-content[_ngcontent-%COMP%]{height:200px;margin-top:24px;border-radius:8px}.cron-editor-main[_ngcontent-%COMP%]   .cron-editor-container[_ngcontent-%COMP%]   .cron-editor-radio[_ngcontent-%COMP%]{width:20px;display:inline-block}.cron-editor-main[_ngcontent-%COMP%]   .cron-editor-container[_ngcontent-%COMP%]   .cron-editor-checkbox[_ngcontent-%COMP%], .cron-editor-main[_ngcontent-%COMP%]   .cron-editor-container[_ngcontent-%COMP%]   .cron-editor-input[_ngcontent-%COMP%], .cron-editor-main[_ngcontent-%COMP%]   .cron-editor-container[_ngcontent-%COMP%]   .cron-editor-select[_ngcontent-%COMP%]{display:inline-block}.cron-editor-main[_ngcontent-%COMP%]   .cron-editor-container[_ngcontent-%COMP%]   .well-time-wrapper[_ngcontent-%COMP%]{padding-left:20px}.cron-editor-main[_ngcontent-%COMP%]   .cron-editor-container[_ngcontent-%COMP%]   .inline-block[_ngcontent-%COMP%]{display:inline-block}.cron-editor-main[_ngcontent-%COMP%]   .cron-editor-container[_ngcontent-%COMP%]   .hour-types[_ngcontent-%COMP%]{width:70px}.nav-tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{cursor:pointer}.cron-editor-radio-group[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin:15px 0}.cron-editor-radio-button[_ngcontent-%COMP%]{margin:5px}.checkbox-margin[_ngcontent-%COMP%]{margin:0 10px}"] });
        return CronGenComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(CronGenComponent, [{
            type: core.Component,
            args: [{
                    selector: 'cron-editor',
                    templateUrl: './cron-editor.template.html',
                    styleUrls: ['./cron-editor.component.css'],
                    providers: [CRON_VALUE_ACCESSOR]
                }]
        }], function () { return [{ type: forms.FormBuilder }]; }, { backgroundColor: [{
                type: core.Input
            }], color: [{
                type: core.Input
            }], disabled: [{
                type: core.Input
            }], options: [{
                type: core.Input
            }], cron: [{
                type: core.Input
            }] }); })();

    var CronEditorModule = /** @class */ (function () {
        function CronEditorModule() {
        }
        /** @nocollapse */ CronEditorModule.ɵmod = core.ɵɵdefineNgModule({ type: CronEditorModule });
        /** @nocollapse */ CronEditorModule.ɵinj = core.ɵɵdefineInjector({ factory: function CronEditorModule_Factory(t) { return new (t || CronEditorModule)(); }, providers: [
                { provide: core$1.MAT_LABEL_GLOBAL_OPTIONS, useValue: { float: 'always' } },
                { provide: formField.MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'outline' } }
            ], imports: [[
                    common.CommonModule,
                    forms.FormsModule,
                    forms.ReactiveFormsModule,
                    tabs.MatTabsModule,
                    list.MatListModule,
                    select.MatSelectModule,
                    input.MatInputModule,
                    radio.MatRadioModule,
                    checkbox.MatCheckboxModule
                ]] });
        return CronEditorModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core.ɵɵsetNgModuleScope(CronEditorModule, { declarations: [TimePickerComponent, CronGenComponent], imports: [common.CommonModule,
            forms.FormsModule,
            forms.ReactiveFormsModule,
            tabs.MatTabsModule,
            list.MatListModule,
            select.MatSelectModule,
            input.MatInputModule,
            radio.MatRadioModule,
            checkbox.MatCheckboxModule], exports: [TimePickerComponent, CronGenComponent] }); })();
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(CronEditorModule, [{
            type: core.NgModule,
            args: [{
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
                        { provide: core$1.MAT_LABEL_GLOBAL_OPTIONS, useValue: { float: 'always' } },
                        { provide: formField.MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'outline' } }
                    ]
                }]
        }], null, null); })();

    exports.CRON_VALUE_ACCESSOR = CRON_VALUE_ACCESSOR;
    exports.CronEditorModule = CronEditorModule;
    exports.CronGenComponent = CronGenComponent;
    exports.Days = Days;
    exports.MonthWeeks = MonthWeeks;
    exports.TimePickerComponent = TimePickerComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-cron-editor.umd.js.map
