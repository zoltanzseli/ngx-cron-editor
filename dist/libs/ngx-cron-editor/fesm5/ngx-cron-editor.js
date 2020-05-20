import { ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵɵproperty, ɵɵadvance, ɵɵtextInterpolate, ɵɵelementContainerStart, ɵɵtemplate, ɵɵelementContainerEnd, ɵɵnextContext, ɵɵelement, ɵɵdirectiveInject, ɵɵdefineComponent, ɵɵProvidersFeature, ɵsetClassMetadata, Component, Input, ɵɵtextInterpolate1, forwardRef, ɵɵlistener, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { ControlContainer, NgControlStatusGroup, FormGroupDirective, NgControlStatus, FormControlName, NG_VALUE_ACCESSOR, FormControl, FormBuilder, FormGroupName, NgSelectOption, ɵangular_packages_forms_forms_x, DefaultValueAccessor, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { __generator, __spread, __awaiter, __read } from 'tslib';
import { NgIf, NgForOf, NgClass, CommonModule } from '@angular/common';
import { MatFormField, MatLabel, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import { MatOption, MAT_LABEL_GLOBAL_OPTIONS } from '@angular/material/core';
import { MatTabGroup, MatTab, MatTabsModule } from '@angular/material/tabs';
import { MatRadioGroup, MatRadioButton, MatRadioModule } from '@angular/material/radio';
import { MatCheckbox, MatCheckboxModule } from '@angular/material/checkbox';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';

function TimePickerComponent_ng_container_1_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-option", 4);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var hour_r5 = ctx.$implicit;
    ɵɵproperty("value", hour_r5);
    ɵɵadvance(1);
    ɵɵtextInterpolate(hour_r5);
} }
function TimePickerComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "mat-form-field");
    ɵɵelementStart(2, "mat-label");
    ɵɵtext(3, "Hour(s)");
    ɵɵelementEnd();
    ɵɵelementStart(4, "mat-select", 2);
    ɵɵtemplate(5, TimePickerComponent_ng_container_1_mat_option_5_Template, 2, 2, "mat-option", 3);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r0 = ɵɵnextContext();
    ɵɵadvance(5);
    ɵɵproperty("ngForOf", ctx_r0.hours);
} }
function TimePickerComponent_ng_container_2_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1, ":");
    ɵɵelementEnd();
} }
function TimePickerComponent_ng_container_2_mat_option_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-option", 4);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var minute_r8 = ctx.$implicit;
    ɵɵproperty("value", minute_r8);
    ɵɵadvance(1);
    ɵɵtextInterpolate(minute_r8);
} }
function TimePickerComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TimePickerComponent_ng_container_2_span_1_Template, 2, 0, "span", 1);
    ɵɵelementStart(2, "mat-form-field");
    ɵɵelementStart(3, "mat-label");
    ɵɵtext(4, "Minute(s)");
    ɵɵelementEnd();
    ɵɵelementStart(5, "mat-select", 5);
    ɵɵtemplate(6, TimePickerComponent_ng_container_2_mat_option_6_Template, 2, 2, "mat-option", 3);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r1 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r1.hideHours);
    ɵɵadvance(5);
    ɵɵproperty("ngForOf", ctx_r1.minutes);
} }
function TimePickerComponent_ng_container_3_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1, ":");
    ɵɵelementEnd();
} }
function TimePickerComponent_ng_container_3_mat_option_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-option", 4);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var second_r11 = ctx.$implicit;
    ɵɵproperty("value", second_r11);
    ɵɵadvance(1);
    ɵɵtextInterpolate(second_r11);
} }
function TimePickerComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TimePickerComponent_ng_container_3_span_1_Template, 2, 0, "span", 1);
    ɵɵelementStart(2, "mat-form-field");
    ɵɵelementStart(3, "mat-label");
    ɵɵtext(4, "Second(s)");
    ɵɵelementEnd();
    ɵɵelementStart(5, "mat-select", 6);
    ɵɵtemplate(6, TimePickerComponent_ng_container_3_mat_option_6_Template, 2, 2, "mat-option", 3);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r2 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r2.hideMinutes);
    ɵɵadvance(5);
    ɵɵproperty("ngForOf", ctx_r2.seconds);
} }
function TimePickerComponent_ng_container_4_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-option", 4);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var hourType_r13 = ctx.$implicit;
    ɵɵproperty("value", hourType_r13);
    ɵɵadvance(1);
    ɵɵtextInterpolate(hourType_r13);
} }
function TimePickerComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "span");
    ɵɵtext(2, ". ");
    ɵɵelementStart(3, "mat-form-field");
    ɵɵelementStart(4, "mat-select", 7);
    ɵɵtemplate(5, TimePickerComponent_ng_container_4_mat_option_5_Template, 2, 2, "mat-option", 3);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r3 = ɵɵnextContext();
    ɵɵadvance(5);
    ɵɵproperty("ngForOf", ctx_r3.hourTypes);
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
    /** @nocollapse */ TimePickerComponent.ɵfac = function TimePickerComponent_Factory(t) { return new (t || TimePickerComponent)(ɵɵdirectiveInject(ControlContainer)); };
    /** @nocollapse */ TimePickerComponent.ɵcmp = ɵɵdefineComponent({ type: TimePickerComponent, selectors: [["cron-time-picker"]], inputs: { disabled: "disabled", use24HourTime: "use24HourTime", hideHours: "hideHours", hideMinutes: "hideMinutes", hideSeconds: "hideSeconds" }, features: [ɵɵProvidersFeature([])], decls: 5, vars: 5, consts: [[3, "formGroup"], [4, "ngIf"], ["formControlName", "hours"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["formControlName", "minutes"], ["formControlName", "seconds"], ["formControlName", "hourType"]], template: function TimePickerComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "span", 0);
            ɵɵtemplate(1, TimePickerComponent_ng_container_1_Template, 6, 1, "ng-container", 1);
            ɵɵtemplate(2, TimePickerComponent_ng_container_2_Template, 7, 2, "ng-container", 1);
            ɵɵtemplate(3, TimePickerComponent_ng_container_3_Template, 7, 2, "ng-container", 1);
            ɵɵtemplate(4, TimePickerComponent_ng_container_4_Template, 6, 1, "ng-container", 1);
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵproperty("formGroup", ctx.parent.control);
            ɵɵadvance(1);
            ɵɵproperty("ngIf", !ctx.hideHours);
            ɵɵadvance(1);
            ɵɵproperty("ngIf", !ctx.hideMinutes);
            ɵɵadvance(1);
            ɵɵproperty("ngIf", !ctx.hideSeconds);
            ɵɵadvance(1);
            ɵɵproperty("ngIf", !ctx.use24HourTime);
        } }, directives: [NgControlStatusGroup, FormGroupDirective, NgIf, MatFormField, MatLabel, MatSelect, NgControlStatus, FormControlName, NgForOf, MatOption], encapsulation: 2 });
    return TimePickerComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(TimePickerComponent, [{
        type: Component,
        args: [{
                selector: 'cron-time-picker',
                templateUrl: './cron-time-picker.template.html',
                providers: []
            }]
    }], function () { return [{ type: ControlContainer }]; }, { disabled: [{
            type: Input
        }], use24HourTime: [{
            type: Input
        }], hideHours: [{
            type: Input
        }], hideMinutes: [{
            type: Input
        }], hideSeconds: [{
            type: Input
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
var Months;
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
})(Months || (Months = {}));
;

function CronGenComponent_mat_tab_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-tab", 9);
    ɵɵelementStart(1, "div", 10);
    ɵɵelementStart(2, "span", 11);
    ɵɵtext(3, "Every ");
    ɵɵelementEnd();
    ɵɵelement(4, "cron-time-picker", 12);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = ɵɵnextContext();
    ɵɵadvance(4);
    ɵɵproperty("formGroup", ctx_r0.minutesForm)("use24HourTime", ctx_r0.options.use24HourTime)("hideHours", true)("hideSeconds", ctx_r0.options.hideSeconds || !ctx_r0.isCronFlavorQuartz);
} }
function CronGenComponent_mat_tab_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-tab", 13);
    ɵɵelementStart(1, "div", 10);
    ɵɵelementStart(2, "span", 11);
    ɵɵtext(3, "Every ");
    ɵɵelementEnd();
    ɵɵelement(4, "cron-time-picker", 14);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1 = ɵɵnextContext();
    ɵɵadvance(4);
    ɵɵproperty("formGroup", ctx_r1.hourlyForm)("use24HourTime", ctx_r1.options.use24HourTime)("hideSeconds", ctx_r1.options.hideSeconds || !ctx_r1.isCronFlavorQuartz);
} }
function CronGenComponent_mat_tab_4_mat_option_10_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-option", 25);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var monthDay_r8 = ctx.$implicit;
    ɵɵproperty("value", monthDay_r8);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", monthDay_r8, " ");
} }
function CronGenComponent_mat_tab_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-tab", 15);
    ɵɵelementStart(1, "div", 16);
    ɵɵelementStart(2, "mat-radio-group", 17);
    ɵɵelementStart(3, "mat-radio-button", 18);
    ɵɵelementStart(4, "span", 11);
    ɵɵtext(5, "Every ");
    ɵɵelementEnd();
    ɵɵelementStart(6, "mat-form-field", 19);
    ɵɵelementStart(7, "mat-label");
    ɵɵtext(8, "Day(s)");
    ɵɵelementEnd();
    ɵɵelementStart(9, "mat-select", 20);
    ɵɵtemplate(10, CronGenComponent_mat_tab_4_mat_option_10_Template, 2, 2, "mat-option", 21);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵtext(11, " at ");
    ɵɵelement(12, "cron-time-picker", 22);
    ɵɵelementEnd();
    ɵɵelementStart(13, "mat-radio-button", 23);
    ɵɵelementStart(14, "span");
    ɵɵtext(15, "Week Day (MON-FRI) at ");
    ɵɵelementEnd();
    ɵɵelement(16, "cron-time-picker", 24);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("formGroup", ctx_r2.dailyForm);
    ɵɵadvance(9);
    ɵɵproperty("ngForOf", ctx_r2.selectOptions.monthDays);
    ɵɵadvance(2);
    ɵɵproperty("use24HourTime", ctx_r2.options.use24HourTime)("hideSeconds", ctx_r2.options.hideSeconds || !ctx_r2.isCronFlavorQuartz);
    ɵɵadvance(4);
    ɵɵproperty("use24HourTime", ctx_r2.options.use24HourTime)("hideSeconds", ctx_r2.options.hideSeconds || !ctx_r2.isCronFlavorQuartz);
} }
function CronGenComponent_mat_tab_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-tab", 26);
    ɵɵelementStart(1, "div", 10);
    ɵɵelementStart(2, "span", 11);
    ɵɵtext(3, "Every ");
    ɵɵelementEnd();
    ɵɵelementStart(4, "div", 27);
    ɵɵelementStart(5, "mat-checkbox", 28);
    ɵɵtext(6, "Monday");
    ɵɵelementEnd();
    ɵɵelementStart(7, "mat-checkbox", 29);
    ɵɵtext(8, "Tuesday");
    ɵɵelementEnd();
    ɵɵelementStart(9, "mat-checkbox", 30);
    ɵɵtext(10, "Wednesday");
    ɵɵelementEnd();
    ɵɵelementStart(11, "mat-checkbox", 31);
    ɵɵtext(12, "Thursday");
    ɵɵelementEnd();
    ɵɵelementStart(13, "mat-checkbox", 32);
    ɵɵtext(14, "Friday");
    ɵɵelementEnd();
    ɵɵelementStart(15, "mat-checkbox", 33);
    ɵɵtext(16, "Saturday");
    ɵɵelementEnd();
    ɵɵelementStart(17, "mat-checkbox", 34);
    ɵɵtext(18, "Sunday");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(19, "span", 11);
    ɵɵtext(20, "at time ");
    ɵɵelementEnd();
    ɵɵelement(21, "cron-time-picker", 14);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r3 = ɵɵnextContext();
    ɵɵadvance(4);
    ɵɵproperty("formGroup", ctx_r3.weeklyForm);
    ɵɵadvance(17);
    ɵɵproperty("formGroup", ctx_r3.weeklyForm)("use24HourTime", ctx_r3.options.use24HourTime)("hideSeconds", ctx_r3.options.hideSeconds || !ctx_r3.isCronFlavorQuartz);
} }
function CronGenComponent_mat_tab_6_ng_container_6_option_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "option", 25);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var monthDaysWithLast_r16 = ctx.$implicit;
    var ctx_r15 = ɵɵnextContext(3);
    ɵɵproperty("value", monthDaysWithLast_r16);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r15.monthDayDisplay(monthDaysWithLast_r16), " ");
} }
function CronGenComponent_mat_tab_6_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "mat-form-field");
    ɵɵelementStart(2, "mat-label");
    ɵɵtext(3, "Day");
    ɵɵelementEnd();
    ɵɵelementStart(4, "mat-select", 47);
    ɵɵtemplate(5, CronGenComponent_mat_tab_6_ng_container_6_option_5_Template, 2, 2, "option", 21);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r9 = ɵɵnextContext(2);
    ɵɵadvance(5);
    ɵɵproperty("ngForOf", ctx_r9.selectOptions.monthDaysWithLasts);
} }
function CronGenComponent_mat_tab_6_ng_container_7_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-option", 25);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var monthDaysWithOutLast_r18 = ctx.$implicit;
    var ctx_r17 = ɵɵnextContext(3);
    ɵɵproperty("value", monthDaysWithOutLast_r18);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r17.monthDayDisplay(monthDaysWithOutLast_r18), " ");
} }
function CronGenComponent_mat_tab_6_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "mat-form-field");
    ɵɵelementStart(2, "mat-label");
    ɵɵtext(3, "Day");
    ɵɵelementEnd();
    ɵɵelementStart(4, "mat-select", 47);
    ɵɵtemplate(5, CronGenComponent_mat_tab_6_ng_container_7_mat_option_5_Template, 2, 2, "mat-option", 21);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r10 = ɵɵnextContext(2);
    ɵɵadvance(5);
    ɵɵproperty("ngForOf", ctx_r10.selectOptions.monthDaysWithOutLasts);
} }
function CronGenComponent_mat_tab_6_mat_option_14_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-option", 25);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var month_r19 = ctx.$implicit;
    ɵɵproperty("value", month_r19);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", month_r19, " ");
} }
function CronGenComponent_mat_tab_6_mat_option_24_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-option", 25);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var monthWeek_r20 = ctx.$implicit;
    var ctx_r12 = ɵɵnextContext(2);
    ɵɵproperty("value", monthWeek_r20);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r12.monthWeekDisplay(monthWeek_r20), " ");
} }
function CronGenComponent_mat_tab_6_mat_option_29_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-option", 25);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var day_r21 = ctx.$implicit;
    var ctx_r13 = ɵɵnextContext(2);
    ɵɵproperty("value", day_r21);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r13.dayDisplay(day_r21), " ");
} }
function CronGenComponent_mat_tab_6_mat_option_35_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-option", 25);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var month_r22 = ctx.$implicit;
    ɵɵproperty("value", month_r22);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", month_r22, " ");
} }
function CronGenComponent_mat_tab_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-tab", 35);
    ɵɵelementStart(1, "div", 16);
    ɵɵelementStart(2, "mat-radio-group", 36);
    ɵɵelementStart(3, "mat-radio-button", 37);
    ɵɵelementStart(4, "span", 38);
    ɵɵtext(5, " On the ");
    ɵɵtemplate(6, CronGenComponent_mat_tab_6_ng_container_6_Template, 6, 1, "ng-container", 39);
    ɵɵtemplate(7, CronGenComponent_mat_tab_6_ng_container_7_Template, 6, 1, "ng-container", 39);
    ɵɵtext(8, " of every ");
    ɵɵelementContainerStart(9);
    ɵɵelementStart(10, "mat-form-field");
    ɵɵelementStart(11, "mat-label");
    ɵɵtext(12, "Month");
    ɵɵelementEnd();
    ɵɵelementStart(13, "mat-select", 40);
    ɵɵtemplate(14, CronGenComponent_mat_tab_6_mat_option_14_Template, 2, 2, "mat-option", 21);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
    ɵɵtext(15, " at time ");
    ɵɵelement(16, "cron-time-picker", 41);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(17, "mat-radio-button", 42);
    ɵɵelementStart(18, "span", 43);
    ɵɵtext(19, " On the ");
    ɵɵelementStart(20, "mat-form-field");
    ɵɵelementStart(21, "mat-label");
    ɵɵtext(22, "Week");
    ɵɵelementEnd();
    ɵɵelementStart(23, "mat-select", 44);
    ɵɵtemplate(24, CronGenComponent_mat_tab_6_mat_option_24_Template, 2, 2, "mat-option", 21);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(25, "mat-form-field");
    ɵɵelementStart(26, "mat-label");
    ɵɵtext(27, "Day");
    ɵɵelementEnd();
    ɵɵelementStart(28, "mat-select", 45);
    ɵɵtemplate(29, CronGenComponent_mat_tab_6_mat_option_29_Template, 2, 2, "mat-option", 21);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵtext(30, " of every ");
    ɵɵelementStart(31, "mat-form-field");
    ɵɵelementStart(32, "mat-label");
    ɵɵtext(33, "Month");
    ɵɵelementEnd();
    ɵɵelementStart(34, "mat-select", 46);
    ɵɵtemplate(35, CronGenComponent_mat_tab_6_mat_option_35_Template, 2, 2, "mat-option", 21);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵtext(36, " at time ");
    ɵɵelement(37, "cron-time-picker", 14);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r4 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("formGroup", ctx_r4.monthlyForm);
    ɵɵadvance(5);
    ɵɵproperty("ngIf", ctx_r4.options.cronFlavor === "quartz");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r4.options.cronFlavor === "standard");
    ɵɵadvance(6);
    ɵɵproperty("ngClass", ctx_r4.options.formSelectClass);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r4.selectOptions.months);
    ɵɵadvance(2);
    ɵɵproperty("disabled", ctx_r4.disabled)("formGroup", ctx_r4.monthlyForm.controls.specificDay)("use24HourTime", ctx_r4.options.use24HourTime)("hideSeconds", ctx_r4.options.hideSeconds || !ctx_r4.isCronFlavorQuartz);
    ɵɵadvance(7);
    ɵɵproperty("ngClass", ctx_r4.options.formSelectClass);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r4.selectOptions.monthWeeks);
    ɵɵadvance(4);
    ɵɵproperty("ngClass", ctx_r4.options.formSelectClass);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r4.selectOptions.days);
    ɵɵadvance(6);
    ɵɵproperty("ngForOf", ctx_r4.selectOptions.months);
    ɵɵadvance(2);
    ɵɵproperty("formGroup", ctx_r4.monthlyForm.controls.specificWeekDay)("use24HourTime", ctx_r4.options.use24HourTime)("hideSeconds", ctx_r4.options.hideSeconds || !ctx_r4.isCronFlavorQuartz);
} }
function CronGenComponent_mat_tab_7_mat_form_field_5_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-option", 25);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var monthDaysWithLast_r30 = ctx.$implicit;
    var ctx_r29 = ɵɵnextContext(3);
    ɵɵproperty("value", monthDaysWithLast_r30);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r29.monthDayDisplay(monthDaysWithLast_r30), " ");
} }
function CronGenComponent_mat_tab_7_mat_form_field_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-form-field", 51);
    ɵɵelementStart(1, "mat-label");
    ɵɵtext(2, "Day");
    ɵɵelementEnd();
    ɵɵelementStart(3, "mat-select", 47);
    ɵɵtemplate(4, CronGenComponent_mat_tab_7_mat_form_field_5_mat_option_4_Template, 2, 2, "mat-option", 21);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r23 = ɵɵnextContext(2);
    ɵɵadvance(4);
    ɵɵproperty("ngForOf", ctx_r23.selectOptions.monthDaysWithLasts);
} }
function CronGenComponent_mat_tab_7_mat_form_field_6_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-option", 25);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var monthDaysWithOutLast_r32 = ctx.$implicit;
    var ctx_r31 = ɵɵnextContext(3);
    ɵɵproperty("value", monthDaysWithOutLast_r32);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r31.monthDayDisplay(monthDaysWithOutLast_r32), " ");
} }
function CronGenComponent_mat_tab_7_mat_form_field_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-form-field", 51);
    ɵɵelementStart(1, "mat-label");
    ɵɵtext(2, "Day");
    ɵɵelementEnd();
    ɵɵelementStart(3, "mat-select", 47);
    ɵɵtemplate(4, CronGenComponent_mat_tab_7_mat_form_field_6_mat_option_4_Template, 2, 2, "mat-option", 21);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r24 = ɵɵnextContext(2);
    ɵɵadvance(4);
    ɵɵproperty("ngForOf", ctx_r24.selectOptions.monthDaysWithOutLasts);
} }
function CronGenComponent_mat_tab_7_mat_option_12_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-option", 25);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var month_r33 = ctx.$implicit;
    var ctx_r25 = ɵɵnextContext(2);
    ɵɵproperty("value", month_r33);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r25.monthDisplay(month_r33), " ");
} }
function CronGenComponent_mat_tab_7_mat_option_21_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-option", 25);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var monthWeek_r34 = ctx.$implicit;
    var ctx_r26 = ɵɵnextContext(2);
    ɵɵproperty("value", monthWeek_r34);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r26.monthWeekDisplay(monthWeek_r34), " ");
} }
function CronGenComponent_mat_tab_7_mat_option_26_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-option", 25);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var day_r35 = ctx.$implicit;
    var ctx_r27 = ɵɵnextContext(2);
    ɵɵproperty("value", day_r35);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r27.dayDisplay(day_r35), " ");
} }
function CronGenComponent_mat_tab_7_mat_option_32_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-option", 25);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var month_r36 = ctx.$implicit;
    var ctx_r28 = ɵɵnextContext(2);
    ɵɵproperty("value", month_r36);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r28.monthDisplay(month_r36), " ");
} }
function CronGenComponent_mat_tab_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-tab", 48);
    ɵɵelementStart(1, "div", 16);
    ɵɵelementStart(2, "mat-radio-group", 36);
    ɵɵelementStart(3, "mat-radio-button", 49);
    ɵɵtext(4, " On the ");
    ɵɵtemplate(5, CronGenComponent_mat_tab_7_mat_form_field_5_Template, 5, 1, "mat-form-field", 50);
    ɵɵtemplate(6, CronGenComponent_mat_tab_7_mat_form_field_6_Template, 5, 1, "mat-form-field", 50);
    ɵɵtext(7, " of ");
    ɵɵelementStart(8, "mat-form-field", 51);
    ɵɵelementStart(9, "mat-label");
    ɵɵtext(10, "Month");
    ɵɵelementEnd();
    ɵɵelementStart(11, "mat-select", 52);
    ɵɵtemplate(12, CronGenComponent_mat_tab_7_mat_option_12_Template, 2, 2, "mat-option", 21);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵtext(13, " at time ");
    ɵɵelement(14, "cron-time-picker", 41);
    ɵɵelementEnd();
    ɵɵelementStart(15, "mat-radio-button", 53);
    ɵɵtext(16, " On the ");
    ɵɵelementStart(17, "mat-form-field", 54);
    ɵɵelementStart(18, "mat-label");
    ɵɵtext(19, "Week");
    ɵɵelementEnd();
    ɵɵelementStart(20, "mat-select", 55);
    ɵɵtemplate(21, CronGenComponent_mat_tab_7_mat_option_21_Template, 2, 2, "mat-option", 21);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(22, "mat-form-field", 54);
    ɵɵelementStart(23, "mat-label");
    ɵɵtext(24, "Day");
    ɵɵelementEnd();
    ɵɵelementStart(25, "mat-select", 56);
    ɵɵtemplate(26, CronGenComponent_mat_tab_7_mat_option_26_Template, 2, 2, "mat-option", 21);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵtext(27, " of ");
    ɵɵelementStart(28, "mat-form-field", 54);
    ɵɵelementStart(29, "mat-label");
    ɵɵtext(30, "Month");
    ɵɵelementEnd();
    ɵɵelementStart(31, "mat-select", 52);
    ɵɵtemplate(32, CronGenComponent_mat_tab_7_mat_option_32_Template, 2, 2, "mat-option", 21);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵtext(33, " at time ");
    ɵɵelement(34, "cron-time-picker", 41);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r5 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("formGroup", ctx_r5.yearlyForm);
    ɵɵadvance(4);
    ɵɵproperty("ngIf", ctx_r5.options.cronFlavor === "quartz");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r5.options.cronFlavor === "standard");
    ɵɵadvance(6);
    ɵɵproperty("ngForOf", ctx_r5.selectOptions.months);
    ɵɵadvance(2);
    ɵɵproperty("disabled", ctx_r5.disabled)("formGroup", ctx_r5.yearlyForm.controls.specificMonthDay)("use24HourTime", ctx_r5.options.use24HourTime)("hideSeconds", ctx_r5.options.hideSeconds || !ctx_r5.isCronFlavorQuartz);
    ɵɵadvance(1);
    ɵɵproperty("ngClass", ctx_r5.state.formRadioClass);
    ɵɵadvance(6);
    ɵɵproperty("ngForOf", ctx_r5.selectOptions.monthWeeks);
    ɵɵadvance(5);
    ɵɵproperty("ngForOf", ctx_r5.selectOptions.days);
    ɵɵadvance(6);
    ɵɵproperty("ngForOf", ctx_r5.selectOptions.months);
    ɵɵadvance(2);
    ɵɵproperty("disabled", ctx_r5.disabled)("formGroup", ctx_r5.yearlyForm.controls.specificMonthWeek)("use24HourTime", ctx_r5.options.use24HourTime)("hideSeconds", ctx_r5.options.hideSeconds || !ctx_r5.isCronFlavorQuartz);
} }
function CronGenComponent_mat_tab_8_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-tab", 57);
    ɵɵelementStart(1, "div", 16);
    ɵɵelementStart(2, "mat-form-field");
    ɵɵelementStart(3, "mat-label");
    ɵɵtext(4, "Expression");
    ɵɵelementEnd();
    ɵɵelement(5, "input", 58);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r6 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("formGroup", ctx_r6.advancedForm);
} }
var CRON_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return CronGenComponent; }),
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
                this.cronForm = new FormControl('0 0 1/1 * *');
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
        return Months[month];
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
    /** @nocollapse */ CronGenComponent.ɵfac = function CronGenComponent_Factory(t) { return new (t || CronGenComponent)(ɵɵdirectiveInject(FormBuilder)); };
    /** @nocollapse */ CronGenComponent.ɵcmp = ɵɵdefineComponent({ type: CronGenComponent, selectors: [["cron-editor"]], inputs: { backgroundColor: "backgroundColor", color: "color", disabled: "disabled", options: "options", cron: "cron" }, features: [ɵɵProvidersFeature([CRON_VALUE_ACCESSOR])], decls: 9, vars: 9, consts: [[1, "cron-editor-main"], [1, "cron-editor-container", 3, "backgroundColor", "color", "selectedIndexChange"], ["class", "cron-editor-tab", "label", "Minutes", 4, "ngIf"], ["class", "cron-editor-tab", "label", "Hourly", 4, "ngIf"], ["class", "cron-editor-tab", "label", "Daily", 4, "ngIf"], ["class", "cron-editor-tab", "label", "Weekly", 4, "ngIf"], ["class", "cron-editor-tab", "label", "Monthly", 4, "ngIf"], ["class", "cron-editor-tab", "label", "Yearly", 4, "ngIf"], ["class", "cron-editor-tab", "label", "Advanced", 4, "ngIf"], ["label", "Minutes", 1, "cron-editor-tab"], [1, "cron-editor-tab-content"], [1, "cron-form-label"], [3, "formGroup", "use24HourTime", "hideHours", "hideSeconds"], ["label", "Hourly", 1, "cron-editor-tab"], [3, "formGroup", "use24HourTime", "hideSeconds"], ["label", "Daily", 1, "cron-editor-tab"], [1, "cron-editor-tab-content", 3, "formGroup"], ["formControlName", "subTab", 1, "cron-editor-radio-group"], ["name", "subTab", "value", "everyDays", "checked", "checked", 1, "cron-editor-radio-button"], ["formGroupName", "everyDays"], ["formControlName", "days"], [3, "value", 4, "ngFor", "ngForOf"], ["formGroupName", "everyDays", 3, "use24HourTime", "hideSeconds"], ["name", "subTab", "value", "everyWeekDay", 1, "cron-editor-radio-button"], ["formGroupName", "everyWeekDay", 3, "use24HourTime", "hideSeconds"], [3, "value"], ["label", "Weekly", 1, "cron-editor-tab"], [3, "formGroup"], ["formControlName", "MON", 1, "checkbox-margin"], ["formControlName", "TUE", 1, "checkbox-margin"], ["formControlName", "WED", 1, "checkbox-margin"], ["formControlName", "THU", 1, "checkbox-margin"], ["formControlName", "FRI", 1, "checkbox-margin"], ["formControlName", "SAT", 1, "checkbox-margin"], ["formControlName", "SUN", 1, "checkbox-margin"], ["label", "Monthly", 1, "cron-editor-tab"], ["formControlName", "subTab"], ["name", "monthly-radio", "value", "specificDay"], ["formGroupName", "specificDay"], [4, "ngIf"], ["formControlName", "months", 1, "months-small", 3, "ngClass"], [3, "disabled", "formGroup", "use24HourTime", "hideSeconds"], ["name", "monthly-radio", "value", "specificWeekDay"], ["formGroupName", "specificWeekDay"], ["formControlName", "monthWeek", 1, "day-order-in-month", 3, "ngClass"], ["formControlName", "day", 1, "week-days", 3, "ngClass"], ["formControlName", "months", 1, "months-small"], ["formControlName", "day", 1, "month-days"], ["label", "Yearly", 1, "cron-editor-tab"], ["name", "yearly-radio", "value", "specificMonthDay"], ["formGroupName", "specificMonthDay", 4, "ngIf"], ["formGroupName", "specificMonthDay"], ["formControlName", "month", 1, "months"], ["name", "yearly-radio", "value", "specificMonthWeek", 3, "ngClass"], ["formGroupName", "specificMonthWeek"], ["formControlName", "monthWeek", 1, "day-order-in-month"], ["formControlName", "day", 1, "week-days"], ["label", "Advanced", 1, "cron-editor-tab"], ["matInput", "", "type", "text", "formControlName", "expression", 1, "advanced-cron-editor-input"]], template: function CronGenComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "section", 0);
            ɵɵelementStart(1, "mat-tab-group", 1);
            ɵɵlistener("selectedIndexChange", function CronGenComponent_Template_mat_tab_group_selectedIndexChange_1_listener($event) { return ctx.onTabFocus($event); });
            ɵɵtemplate(2, CronGenComponent_mat_tab_2_Template, 5, 4, "mat-tab", 2);
            ɵɵtemplate(3, CronGenComponent_mat_tab_3_Template, 5, 3, "mat-tab", 3);
            ɵɵtemplate(4, CronGenComponent_mat_tab_4_Template, 17, 6, "mat-tab", 4);
            ɵɵtemplate(5, CronGenComponent_mat_tab_5_Template, 22, 4, "mat-tab", 5);
            ɵɵtemplate(6, CronGenComponent_mat_tab_6_Template, 38, 17, "mat-tab", 6);
            ɵɵtemplate(7, CronGenComponent_mat_tab_7_Template, 35, 16, "mat-tab", 7);
            ɵɵtemplate(8, CronGenComponent_mat_tab_8_Template, 6, 1, "mat-tab", 8);
            ɵɵelementEnd();
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵadvance(1);
            ɵɵproperty("backgroundColor", ctx.backgroundColor)("color", ctx.color);
            ɵɵadvance(1);
            ɵɵproperty("ngIf", !ctx.options.hideMinutesTab);
            ɵɵadvance(1);
            ɵɵproperty("ngIf", !ctx.options.hideHourlyTab);
            ɵɵadvance(1);
            ɵɵproperty("ngIf", !ctx.options.hideDailyTab);
            ɵɵadvance(1);
            ɵɵproperty("ngIf", !ctx.options.hideWeeklyTab);
            ɵɵadvance(1);
            ɵɵproperty("ngIf", !ctx.options.hideMonthlyTab);
            ɵɵadvance(1);
            ɵɵproperty("ngIf", !ctx.options.hideYearlyTab);
            ɵɵadvance(1);
            ɵɵproperty("ngIf", !ctx.options.hideAdvancedTab);
        } }, directives: [MatTabGroup, NgIf, MatTab, TimePickerComponent, NgControlStatusGroup, FormGroupDirective, MatRadioGroup, NgControlStatus, FormControlName, MatRadioButton, MatFormField, FormGroupName, MatLabel, MatSelect, NgForOf, MatOption, MatCheckbox, NgClass, NgSelectOption, ɵangular_packages_forms_forms_x, MatInput, DefaultValueAccessor], styles: [".cron-editor-main[_ngcontent-%COMP%]{@include mat-elevation(1);}.cron-editor-tab-content[_ngcontent-%COMP%]{height:200px;margin-top:24px;border-radius:8px}.cron-editor-main[_ngcontent-%COMP%]   .cron-editor-container[_ngcontent-%COMP%]   .cron-editor-radio[_ngcontent-%COMP%]{width:20px;display:inline-block}.cron-editor-main[_ngcontent-%COMP%]   .cron-editor-container[_ngcontent-%COMP%]   .cron-editor-checkbox[_ngcontent-%COMP%], .cron-editor-main[_ngcontent-%COMP%]   .cron-editor-container[_ngcontent-%COMP%]   .cron-editor-input[_ngcontent-%COMP%], .cron-editor-main[_ngcontent-%COMP%]   .cron-editor-container[_ngcontent-%COMP%]   .cron-editor-select[_ngcontent-%COMP%]{display:inline-block}.cron-editor-main[_ngcontent-%COMP%]   .cron-editor-container[_ngcontent-%COMP%]   .well-time-wrapper[_ngcontent-%COMP%]{padding-left:20px}.cron-editor-main[_ngcontent-%COMP%]   .cron-editor-container[_ngcontent-%COMP%]   .inline-block[_ngcontent-%COMP%]{display:inline-block}.cron-editor-main[_ngcontent-%COMP%]   .cron-editor-container[_ngcontent-%COMP%]   .hour-types[_ngcontent-%COMP%]{width:70px}.nav-tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{cursor:pointer}.cron-editor-radio-group[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin:15px 0}.cron-editor-radio-button[_ngcontent-%COMP%]{margin:5px}.checkbox-margin[_ngcontent-%COMP%]{margin:0 10px}"] });
    return CronGenComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(CronGenComponent, [{
        type: Component,
        args: [{
                selector: 'cron-editor',
                templateUrl: './cron-editor.template.html',
                styleUrls: ['./cron-editor.component.css'],
                providers: [CRON_VALUE_ACCESSOR]
            }]
    }], function () { return [{ type: FormBuilder }]; }, { backgroundColor: [{
            type: Input
        }], color: [{
            type: Input
        }], disabled: [{
            type: Input
        }], options: [{
            type: Input
        }], cron: [{
            type: Input
        }] }); })();

var CronEditorModule = /** @class */ (function () {
    function CronEditorModule() {
    }
    /** @nocollapse */ CronEditorModule.ɵmod = ɵɵdefineNgModule({ type: CronEditorModule });
    /** @nocollapse */ CronEditorModule.ɵinj = ɵɵdefineInjector({ factory: function CronEditorModule_Factory(t) { return new (t || CronEditorModule)(); }, providers: [
            { provide: MAT_LABEL_GLOBAL_OPTIONS, useValue: { float: 'always' } },
            { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'outline' } }
        ], imports: [[
                CommonModule,
                FormsModule,
                ReactiveFormsModule,
                MatTabsModule,
                MatListModule,
                MatSelectModule,
                MatInputModule,
                MatRadioModule,
                MatCheckboxModule
            ]] });
    return CronEditorModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(CronEditorModule, { declarations: [TimePickerComponent, CronGenComponent], imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatTabsModule,
        MatListModule,
        MatSelectModule,
        MatInputModule,
        MatRadioModule,
        MatCheckboxModule], exports: [TimePickerComponent, CronGenComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(CronEditorModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule,
                    MatTabsModule,
                    MatListModule,
                    MatSelectModule,
                    MatInputModule,
                    MatRadioModule,
                    MatCheckboxModule
                ],
                exports: [TimePickerComponent, CronGenComponent],
                declarations: [TimePickerComponent, CronGenComponent],
                providers: [
                    { provide: MAT_LABEL_GLOBAL_OPTIONS, useValue: { float: 'always' } },
                    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'outline' } }
                ]
            }]
    }], null, null); })();

/*
 * Public API Surface of pmsys
 */

/**
 * Generated bundle index. Do not edit.
 */

export { CRON_VALUE_ACCESSOR, CronEditorModule, CronGenComponent, Days, MonthWeeks, Months, TimePickerComponent };
//# sourceMappingURL=ngx-cron-editor.js.map
