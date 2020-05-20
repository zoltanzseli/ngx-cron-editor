import { __awaiter, __generator, __read, __spread } from "tslib";
import { Component, Input, forwardRef } from '@angular/core';
import { Days, MonthWeeks, Months } from './enums';
import { FormBuilder, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/material/tabs";
import * as i3 from "@angular/common";
import * as i4 from "./cron-time-picker.component";
import * as i5 from "@angular/material/radio";
import * as i6 from "@angular/material/form-field";
import * as i7 from "@angular/material/select";
import * as i8 from "@angular/material/core";
import * as i9 from "@angular/material/checkbox";
import * as i10 from "@angular/material/input";
function CronGenComponent_mat_tab_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-tab", 9);
    i0.ɵɵelementStart(1, "div", 10);
    i0.ɵɵelementStart(2, "span", 11);
    i0.ɵɵtext(3, "Every ");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "cron-time-picker", 12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("formGroup", ctx_r0.minutesForm)("use24HourTime", ctx_r0.options.use24HourTime)("hideHours", true)("hideSeconds", ctx_r0.options.hideSeconds || !ctx_r0.isCronFlavorQuartz);
} }
function CronGenComponent_mat_tab_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-tab", 13);
    i0.ɵɵelementStart(1, "div", 10);
    i0.ɵɵelementStart(2, "span", 11);
    i0.ɵɵtext(3, "Every ");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "cron-time-picker", 14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("formGroup", ctx_r1.hourlyForm)("use24HourTime", ctx_r1.options.use24HourTime)("hideSeconds", ctx_r1.options.hideSeconds || !ctx_r1.isCronFlavorQuartz);
} }
function CronGenComponent_mat_tab_4_mat_option_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 25);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var monthDay_r8 = ctx.$implicit;
    i0.ɵɵproperty("value", monthDay_r8);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", monthDay_r8, " ");
} }
function CronGenComponent_mat_tab_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-tab", 15);
    i0.ɵɵelementStart(1, "div", 16);
    i0.ɵɵelementStart(2, "mat-radio-group", 17);
    i0.ɵɵelementStart(3, "mat-radio-button", 18);
    i0.ɵɵelementStart(4, "span", 11);
    i0.ɵɵtext(5, "Every ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "mat-form-field", 19);
    i0.ɵɵelementStart(7, "mat-label");
    i0.ɵɵtext(8, "Day(s)");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "mat-select", 20);
    i0.ɵɵtemplate(10, CronGenComponent_mat_tab_4_mat_option_10_Template, 2, 2, "mat-option", 21);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtext(11, " at ");
    i0.ɵɵelement(12, "cron-time-picker", 22);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "mat-radio-button", 23);
    i0.ɵɵelementStart(14, "span");
    i0.ɵɵtext(15, "Week Day (MON-FRI) at ");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(16, "cron-time-picker", 24);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("formGroup", ctx_r2.dailyForm);
    i0.ɵɵadvance(9);
    i0.ɵɵproperty("ngForOf", ctx_r2.selectOptions.monthDays);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("use24HourTime", ctx_r2.options.use24HourTime)("hideSeconds", ctx_r2.options.hideSeconds || !ctx_r2.isCronFlavorQuartz);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("use24HourTime", ctx_r2.options.use24HourTime)("hideSeconds", ctx_r2.options.hideSeconds || !ctx_r2.isCronFlavorQuartz);
} }
function CronGenComponent_mat_tab_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-tab", 26);
    i0.ɵɵelementStart(1, "div", 10);
    i0.ɵɵelementStart(2, "span", 11);
    i0.ɵɵtext(3, "Every ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 27);
    i0.ɵɵelementStart(5, "mat-checkbox", 28);
    i0.ɵɵtext(6, "Monday");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "mat-checkbox", 29);
    i0.ɵɵtext(8, "Tuesday");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "mat-checkbox", 30);
    i0.ɵɵtext(10, "Wednesday");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "mat-checkbox", 31);
    i0.ɵɵtext(12, "Thursday");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "mat-checkbox", 32);
    i0.ɵɵtext(14, "Friday");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "mat-checkbox", 33);
    i0.ɵɵtext(16, "Saturday");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "mat-checkbox", 34);
    i0.ɵɵtext(18, "Sunday");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "span", 11);
    i0.ɵɵtext(20, "at time ");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(21, "cron-time-picker", 14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("formGroup", ctx_r3.weeklyForm);
    i0.ɵɵadvance(17);
    i0.ɵɵproperty("formGroup", ctx_r3.weeklyForm)("use24HourTime", ctx_r3.options.use24HourTime)("hideSeconds", ctx_r3.options.hideSeconds || !ctx_r3.isCronFlavorQuartz);
} }
function CronGenComponent_mat_tab_6_ng_container_6_option_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 25);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var monthDaysWithLast_r16 = ctx.$implicit;
    var ctx_r15 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("value", monthDaysWithLast_r16);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r15.monthDayDisplay(monthDaysWithLast_r16), " ");
} }
function CronGenComponent_mat_tab_6_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "mat-form-field");
    i0.ɵɵelementStart(2, "mat-label");
    i0.ɵɵtext(3, "Day");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "mat-select", 47);
    i0.ɵɵtemplate(5, CronGenComponent_mat_tab_6_ng_container_6_option_5_Template, 2, 2, "option", 21);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r9 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngForOf", ctx_r9.selectOptions.monthDaysWithLasts);
} }
function CronGenComponent_mat_tab_6_ng_container_7_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 25);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var monthDaysWithOutLast_r18 = ctx.$implicit;
    var ctx_r17 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("value", monthDaysWithOutLast_r18);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r17.monthDayDisplay(monthDaysWithOutLast_r18), " ");
} }
function CronGenComponent_mat_tab_6_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "mat-form-field");
    i0.ɵɵelementStart(2, "mat-label");
    i0.ɵɵtext(3, "Day");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "mat-select", 47);
    i0.ɵɵtemplate(5, CronGenComponent_mat_tab_6_ng_container_7_mat_option_5_Template, 2, 2, "mat-option", 21);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r10 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngForOf", ctx_r10.selectOptions.monthDaysWithOutLasts);
} }
function CronGenComponent_mat_tab_6_mat_option_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 25);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var month_r19 = ctx.$implicit;
    i0.ɵɵproperty("value", month_r19);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", month_r19, " ");
} }
function CronGenComponent_mat_tab_6_mat_option_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 25);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var monthWeek_r20 = ctx.$implicit;
    var ctx_r12 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("value", monthWeek_r20);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r12.monthWeekDisplay(monthWeek_r20), " ");
} }
function CronGenComponent_mat_tab_6_mat_option_29_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 25);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var day_r21 = ctx.$implicit;
    var ctx_r13 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("value", day_r21);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r13.dayDisplay(day_r21), " ");
} }
function CronGenComponent_mat_tab_6_mat_option_35_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 25);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var month_r22 = ctx.$implicit;
    i0.ɵɵproperty("value", month_r22);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", month_r22, " ");
} }
function CronGenComponent_mat_tab_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-tab", 35);
    i0.ɵɵelementStart(1, "div", 16);
    i0.ɵɵelementStart(2, "mat-radio-group", 36);
    i0.ɵɵelementStart(3, "mat-radio-button", 37);
    i0.ɵɵelementStart(4, "span", 38);
    i0.ɵɵtext(5, " On the ");
    i0.ɵɵtemplate(6, CronGenComponent_mat_tab_6_ng_container_6_Template, 6, 1, "ng-container", 39);
    i0.ɵɵtemplate(7, CronGenComponent_mat_tab_6_ng_container_7_Template, 6, 1, "ng-container", 39);
    i0.ɵɵtext(8, " of every ");
    i0.ɵɵelementContainerStart(9);
    i0.ɵɵelementStart(10, "mat-form-field");
    i0.ɵɵelementStart(11, "mat-label");
    i0.ɵɵtext(12, "Month");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "mat-select", 40);
    i0.ɵɵtemplate(14, CronGenComponent_mat_tab_6_mat_option_14_Template, 2, 2, "mat-option", 21);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
    i0.ɵɵtext(15, " at time ");
    i0.ɵɵelement(16, "cron-time-picker", 41);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "mat-radio-button", 42);
    i0.ɵɵelementStart(18, "span", 43);
    i0.ɵɵtext(19, " On the ");
    i0.ɵɵelementStart(20, "mat-form-field");
    i0.ɵɵelementStart(21, "mat-label");
    i0.ɵɵtext(22, "Week");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "mat-select", 44);
    i0.ɵɵtemplate(24, CronGenComponent_mat_tab_6_mat_option_24_Template, 2, 2, "mat-option", 21);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "mat-form-field");
    i0.ɵɵelementStart(26, "mat-label");
    i0.ɵɵtext(27, "Day");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "mat-select", 45);
    i0.ɵɵtemplate(29, CronGenComponent_mat_tab_6_mat_option_29_Template, 2, 2, "mat-option", 21);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtext(30, " of every ");
    i0.ɵɵelementStart(31, "mat-form-field");
    i0.ɵɵelementStart(32, "mat-label");
    i0.ɵɵtext(33, "Month");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(34, "mat-select", 46);
    i0.ɵɵtemplate(35, CronGenComponent_mat_tab_6_mat_option_35_Template, 2, 2, "mat-option", 21);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtext(36, " at time ");
    i0.ɵɵelement(37, "cron-time-picker", 14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("formGroup", ctx_r4.monthlyForm);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", ctx_r4.options.cronFlavor === "quartz");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.options.cronFlavor === "standard");
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngClass", ctx_r4.options.formSelectClass);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r4.selectOptions.months);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", ctx_r4.disabled)("formGroup", ctx_r4.monthlyForm.controls.specificDay)("use24HourTime", ctx_r4.options.use24HourTime)("hideSeconds", ctx_r4.options.hideSeconds || !ctx_r4.isCronFlavorQuartz);
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngClass", ctx_r4.options.formSelectClass);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r4.selectOptions.monthWeeks);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngClass", ctx_r4.options.formSelectClass);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r4.selectOptions.days);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngForOf", ctx_r4.selectOptions.months);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("formGroup", ctx_r4.monthlyForm.controls.specificWeekDay)("use24HourTime", ctx_r4.options.use24HourTime)("hideSeconds", ctx_r4.options.hideSeconds || !ctx_r4.isCronFlavorQuartz);
} }
function CronGenComponent_mat_tab_7_mat_form_field_5_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 25);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var monthDaysWithLast_r30 = ctx.$implicit;
    var ctx_r29 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("value", monthDaysWithLast_r30);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r29.monthDayDisplay(monthDaysWithLast_r30), " ");
} }
function CronGenComponent_mat_tab_7_mat_form_field_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-form-field", 51);
    i0.ɵɵelementStart(1, "mat-label");
    i0.ɵɵtext(2, "Day");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "mat-select", 47);
    i0.ɵɵtemplate(4, CronGenComponent_mat_tab_7_mat_form_field_5_mat_option_4_Template, 2, 2, "mat-option", 21);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r23 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngForOf", ctx_r23.selectOptions.monthDaysWithLasts);
} }
function CronGenComponent_mat_tab_7_mat_form_field_6_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 25);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var monthDaysWithOutLast_r32 = ctx.$implicit;
    var ctx_r31 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("value", monthDaysWithOutLast_r32);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r31.monthDayDisplay(monthDaysWithOutLast_r32), " ");
} }
function CronGenComponent_mat_tab_7_mat_form_field_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-form-field", 51);
    i0.ɵɵelementStart(1, "mat-label");
    i0.ɵɵtext(2, "Day");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "mat-select", 47);
    i0.ɵɵtemplate(4, CronGenComponent_mat_tab_7_mat_form_field_6_mat_option_4_Template, 2, 2, "mat-option", 21);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r24 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngForOf", ctx_r24.selectOptions.monthDaysWithOutLasts);
} }
function CronGenComponent_mat_tab_7_mat_option_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 25);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var month_r33 = ctx.$implicit;
    var ctx_r25 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("value", month_r33);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r25.monthDisplay(month_r33), " ");
} }
function CronGenComponent_mat_tab_7_mat_option_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 25);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var monthWeek_r34 = ctx.$implicit;
    var ctx_r26 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("value", monthWeek_r34);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r26.monthWeekDisplay(monthWeek_r34), " ");
} }
function CronGenComponent_mat_tab_7_mat_option_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 25);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var day_r35 = ctx.$implicit;
    var ctx_r27 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("value", day_r35);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r27.dayDisplay(day_r35), " ");
} }
function CronGenComponent_mat_tab_7_mat_option_32_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 25);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var month_r36 = ctx.$implicit;
    var ctx_r28 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("value", month_r36);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r28.monthDisplay(month_r36), " ");
} }
function CronGenComponent_mat_tab_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-tab", 48);
    i0.ɵɵelementStart(1, "div", 16);
    i0.ɵɵelementStart(2, "mat-radio-group", 36);
    i0.ɵɵelementStart(3, "mat-radio-button", 49);
    i0.ɵɵtext(4, " On the ");
    i0.ɵɵtemplate(5, CronGenComponent_mat_tab_7_mat_form_field_5_Template, 5, 1, "mat-form-field", 50);
    i0.ɵɵtemplate(6, CronGenComponent_mat_tab_7_mat_form_field_6_Template, 5, 1, "mat-form-field", 50);
    i0.ɵɵtext(7, " of ");
    i0.ɵɵelementStart(8, "mat-form-field", 51);
    i0.ɵɵelementStart(9, "mat-label");
    i0.ɵɵtext(10, "Month");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "mat-select", 52);
    i0.ɵɵtemplate(12, CronGenComponent_mat_tab_7_mat_option_12_Template, 2, 2, "mat-option", 21);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtext(13, " at time ");
    i0.ɵɵelement(14, "cron-time-picker", 41);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "mat-radio-button", 53);
    i0.ɵɵtext(16, " On the ");
    i0.ɵɵelementStart(17, "mat-form-field", 54);
    i0.ɵɵelementStart(18, "mat-label");
    i0.ɵɵtext(19, "Week");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "mat-select", 55);
    i0.ɵɵtemplate(21, CronGenComponent_mat_tab_7_mat_option_21_Template, 2, 2, "mat-option", 21);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "mat-form-field", 54);
    i0.ɵɵelementStart(23, "mat-label");
    i0.ɵɵtext(24, "Day");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "mat-select", 56);
    i0.ɵɵtemplate(26, CronGenComponent_mat_tab_7_mat_option_26_Template, 2, 2, "mat-option", 21);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtext(27, " of ");
    i0.ɵɵelementStart(28, "mat-form-field", 54);
    i0.ɵɵelementStart(29, "mat-label");
    i0.ɵɵtext(30, "Month");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(31, "mat-select", 52);
    i0.ɵɵtemplate(32, CronGenComponent_mat_tab_7_mat_option_32_Template, 2, 2, "mat-option", 21);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtext(33, " at time ");
    i0.ɵɵelement(34, "cron-time-picker", 41);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("formGroup", ctx_r5.yearlyForm);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", ctx_r5.options.cronFlavor === "quartz");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.options.cronFlavor === "standard");
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngForOf", ctx_r5.selectOptions.months);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", ctx_r5.disabled)("formGroup", ctx_r5.yearlyForm.controls.specificMonthDay)("use24HourTime", ctx_r5.options.use24HourTime)("hideSeconds", ctx_r5.options.hideSeconds || !ctx_r5.isCronFlavorQuartz);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", ctx_r5.state.formRadioClass);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngForOf", ctx_r5.selectOptions.monthWeeks);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngForOf", ctx_r5.selectOptions.days);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngForOf", ctx_r5.selectOptions.months);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", ctx_r5.disabled)("formGroup", ctx_r5.yearlyForm.controls.specificMonthWeek)("use24HourTime", ctx_r5.options.use24HourTime)("hideSeconds", ctx_r5.options.hideSeconds || !ctx_r5.isCronFlavorQuartz);
} }
function CronGenComponent_mat_tab_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-tab", 57);
    i0.ɵɵelementStart(1, "div", 16);
    i0.ɵɵelementStart(2, "mat-form-field");
    i0.ɵɵelementStart(3, "mat-label");
    i0.ɵɵtext(4, "Expression");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(5, "input", 58);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("formGroup", ctx_r6.advancedForm);
} }
export var CRON_VALUE_ACCESSOR = {
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
    /** @nocollapse */ CronGenComponent.ɵfac = function CronGenComponent_Factory(t) { return new (t || CronGenComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder)); };
    /** @nocollapse */ CronGenComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CronGenComponent, selectors: [["cron-editor"]], inputs: { backgroundColor: "backgroundColor", color: "color", disabled: "disabled", options: "options", cron: "cron" }, features: [i0.ɵɵProvidersFeature([CRON_VALUE_ACCESSOR])], decls: 9, vars: 9, consts: [[1, "cron-editor-main"], [1, "cron-editor-container", 3, "backgroundColor", "color", "selectedIndexChange"], ["class", "cron-editor-tab", "label", "Minutes", 4, "ngIf"], ["class", "cron-editor-tab", "label", "Hourly", 4, "ngIf"], ["class", "cron-editor-tab", "label", "Daily", 4, "ngIf"], ["class", "cron-editor-tab", "label", "Weekly", 4, "ngIf"], ["class", "cron-editor-tab", "label", "Monthly", 4, "ngIf"], ["class", "cron-editor-tab", "label", "Yearly", 4, "ngIf"], ["class", "cron-editor-tab", "label", "Advanced", 4, "ngIf"], ["label", "Minutes", 1, "cron-editor-tab"], [1, "cron-editor-tab-content"], [1, "cron-form-label"], [3, "formGroup", "use24HourTime", "hideHours", "hideSeconds"], ["label", "Hourly", 1, "cron-editor-tab"], [3, "formGroup", "use24HourTime", "hideSeconds"], ["label", "Daily", 1, "cron-editor-tab"], [1, "cron-editor-tab-content", 3, "formGroup"], ["formControlName", "subTab", 1, "cron-editor-radio-group"], ["name", "subTab", "value", "everyDays", "checked", "checked", 1, "cron-editor-radio-button"], ["formGroupName", "everyDays"], ["formControlName", "days"], [3, "value", 4, "ngFor", "ngForOf"], ["formGroupName", "everyDays", 3, "use24HourTime", "hideSeconds"], ["name", "subTab", "value", "everyWeekDay", 1, "cron-editor-radio-button"], ["formGroupName", "everyWeekDay", 3, "use24HourTime", "hideSeconds"], [3, "value"], ["label", "Weekly", 1, "cron-editor-tab"], [3, "formGroup"], ["formControlName", "MON", 1, "checkbox-margin"], ["formControlName", "TUE", 1, "checkbox-margin"], ["formControlName", "WED", 1, "checkbox-margin"], ["formControlName", "THU", 1, "checkbox-margin"], ["formControlName", "FRI", 1, "checkbox-margin"], ["formControlName", "SAT", 1, "checkbox-margin"], ["formControlName", "SUN", 1, "checkbox-margin"], ["label", "Monthly", 1, "cron-editor-tab"], ["formControlName", "subTab"], ["name", "monthly-radio", "value", "specificDay"], ["formGroupName", "specificDay"], [4, "ngIf"], ["formControlName", "months", 1, "months-small", 3, "ngClass"], [3, "disabled", "formGroup", "use24HourTime", "hideSeconds"], ["name", "monthly-radio", "value", "specificWeekDay"], ["formGroupName", "specificWeekDay"], ["formControlName", "monthWeek", 1, "day-order-in-month", 3, "ngClass"], ["formControlName", "day", 1, "week-days", 3, "ngClass"], ["formControlName", "months", 1, "months-small"], ["formControlName", "day", 1, "month-days"], ["label", "Yearly", 1, "cron-editor-tab"], ["name", "yearly-radio", "value", "specificMonthDay"], ["formGroupName", "specificMonthDay", 4, "ngIf"], ["formGroupName", "specificMonthDay"], ["formControlName", "month", 1, "months"], ["name", "yearly-radio", "value", "specificMonthWeek", 3, "ngClass"], ["formGroupName", "specificMonthWeek"], ["formControlName", "monthWeek", 1, "day-order-in-month"], ["formControlName", "day", 1, "week-days"], ["label", "Advanced", 1, "cron-editor-tab"], ["matInput", "", "type", "text", "formControlName", "expression", 1, "advanced-cron-editor-input"]], template: function CronGenComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "section", 0);
            i0.ɵɵelementStart(1, "mat-tab-group", 1);
            i0.ɵɵlistener("selectedIndexChange", function CronGenComponent_Template_mat_tab_group_selectedIndexChange_1_listener($event) { return ctx.onTabFocus($event); });
            i0.ɵɵtemplate(2, CronGenComponent_mat_tab_2_Template, 5, 4, "mat-tab", 2);
            i0.ɵɵtemplate(3, CronGenComponent_mat_tab_3_Template, 5, 3, "mat-tab", 3);
            i0.ɵɵtemplate(4, CronGenComponent_mat_tab_4_Template, 17, 6, "mat-tab", 4);
            i0.ɵɵtemplate(5, CronGenComponent_mat_tab_5_Template, 22, 4, "mat-tab", 5);
            i0.ɵɵtemplate(6, CronGenComponent_mat_tab_6_Template, 38, 17, "mat-tab", 6);
            i0.ɵɵtemplate(7, CronGenComponent_mat_tab_7_Template, 35, 16, "mat-tab", 7);
            i0.ɵɵtemplate(8, CronGenComponent_mat_tab_8_Template, 6, 1, "mat-tab", 8);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("backgroundColor", ctx.backgroundColor)("color", ctx.color);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.options.hideMinutesTab);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.options.hideHourlyTab);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.options.hideDailyTab);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.options.hideWeeklyTab);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.options.hideMonthlyTab);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.options.hideYearlyTab);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.options.hideAdvancedTab);
        } }, directives: [i2.MatTabGroup, i3.NgIf, i2.MatTab, i4.TimePickerComponent, i1.NgControlStatusGroup, i1.FormGroupDirective, i5.MatRadioGroup, i1.NgControlStatus, i1.FormControlName, i5.MatRadioButton, i6.MatFormField, i1.FormGroupName, i6.MatLabel, i7.MatSelect, i3.NgForOf, i8.MatOption, i9.MatCheckbox, i3.NgClass, i1.NgSelectOption, i1.ɵangular_packages_forms_forms_x, i10.MatInput, i1.DefaultValueAccessor], styles: [".cron-editor-main[_ngcontent-%COMP%]{@include mat-elevation(1);}.cron-editor-tab-content[_ngcontent-%COMP%]{height:200px;margin-top:24px;border-radius:8px}.cron-editor-main[_ngcontent-%COMP%]   .cron-editor-container[_ngcontent-%COMP%]   .cron-editor-radio[_ngcontent-%COMP%]{width:20px;display:inline-block}.cron-editor-main[_ngcontent-%COMP%]   .cron-editor-container[_ngcontent-%COMP%]   .cron-editor-checkbox[_ngcontent-%COMP%], .cron-editor-main[_ngcontent-%COMP%]   .cron-editor-container[_ngcontent-%COMP%]   .cron-editor-input[_ngcontent-%COMP%], .cron-editor-main[_ngcontent-%COMP%]   .cron-editor-container[_ngcontent-%COMP%]   .cron-editor-select[_ngcontent-%COMP%]{display:inline-block}.cron-editor-main[_ngcontent-%COMP%]   .cron-editor-container[_ngcontent-%COMP%]   .well-time-wrapper[_ngcontent-%COMP%]{padding-left:20px}.cron-editor-main[_ngcontent-%COMP%]   .cron-editor-container[_ngcontent-%COMP%]   .inline-block[_ngcontent-%COMP%]{display:inline-block}.cron-editor-main[_ngcontent-%COMP%]   .cron-editor-container[_ngcontent-%COMP%]   .hour-types[_ngcontent-%COMP%]{width:70px}.nav-tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{cursor:pointer}.cron-editor-radio-group[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin:15px 0}.cron-editor-radio-button[_ngcontent-%COMP%]{margin:5px}.checkbox-margin[_ngcontent-%COMP%]{margin:0 10px}"] });
    return CronGenComponent;
}());
export { CronGenComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CronGenComponent, [{
        type: Component,
        args: [{
                selector: 'cron-editor',
                templateUrl: './cron-editor.template.html',
                styleUrls: ['./cron-editor.component.css'],
                providers: [CRON_VALUE_ACCESSOR]
            }]
    }], function () { return [{ type: i1.FormBuilder }]; }, { backgroundColor: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3Jvbi1lZGl0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWNyb24tZWRpdG9yLyIsInNvdXJjZXMiOlsic3JjL2Nyb24tZWRpdG9yLmNvbXBvbmVudC50cyIsInNyYy9jcm9uLWVkaXRvci50ZW1wbGF0ZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBMEQsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRW5ILE9BQU8sRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBQyxNQUFNLFNBQVMsQ0FBQztBQUNqRCxPQUFPLEVBQXlDLFdBQVcsRUFBRSxXQUFXLEVBQWEsaUJBQWlCLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7Ozs7OztJQ0N4SCxrQ0FDRTtJQUFBLCtCQUVFO0lBQUEsZ0NBQThCO0lBQUEsc0JBQU07SUFBQSxpQkFBTztJQUV6Qyx1Q0FLbUI7SUFDdkIsaUJBQU07SUFDUixpQkFBVTs7O0lBTkYsZUFBeUI7SUFBekIsOENBQXlCLCtDQUFBLG1CQUFBLHlFQUFBOzs7SUFTakMsbUNBQ0U7SUFBQSwrQkFDRTtJQUFBLGdDQUE4QjtJQUFBLHNCQUFNO0lBQUEsaUJBQU87SUFFM0MsdUNBR21CO0lBQ3JCLGlCQUFNO0lBQ1IsaUJBQVU7OztJQUxZLGVBQXdCO0lBQXhCLDZDQUF3QiwrQ0FBQSx5RUFBQTs7O0lBb0JsQyxzQ0FDRTtJQUFBLFlBQ0Y7SUFBQSxpQkFBYTs7O0lBRmdELG1DQUFrQjtJQUM3RSxlQUNGO0lBREUsNENBQ0Y7OztJQWJaLG1DQUNFO0lBQUEsK0JBRUU7SUFBQSwyQ0FDRTtJQUFBLDRDQUVFO0lBQUEsZ0NBQThCO0lBQUEsc0JBQU07SUFBQSxpQkFBTztJQUUzQywwQ0FDRTtJQUFBLGlDQUFXO0lBQUEsc0JBQU07SUFBQSxpQkFBWTtJQUM3QixzQ0FDRTtJQUFBLDRGQUNFO0lBRUosaUJBQWE7SUFDZixpQkFBaUI7SUFF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bUJDLEFBbmxCRCxJQW1sQkM7U0E3a0JZLGdCQUFnQjtrREFBaEIsZ0JBQWdCO2NBTjVCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsYUFBYTtnQkFDdkIsV0FBVyxFQUFFLDZCQUE2QjtnQkFDMUMsU0FBUyxFQUFFLENBQUMsNkJBQTZCLENBQUM7Z0JBQzFDLFNBQVMsRUFBRSxDQUFDLG1CQUFtQixDQUFDO2FBQ2pDOztrQkFHRSxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFFTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIE9uSW5pdCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzLCBFdmVudEVtaXR0ZXIsIGZvcndhcmRSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDcm9uT3B0aW9uc30gZnJvbSAnLi9Dcm9uT3B0aW9ucyc7XG5pbXBvcnQge0RheXMsIE1vbnRoV2Vla3MsIE1vbnRoc30gZnJvbSAnLi9lbnVtcyc7XG5pbXBvcnQge0NvbnRyb2xDb250YWluZXIsIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBGb3JtQnVpbGRlciwgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCwgTkdfVkFMVUVfQUNDRVNTT1J9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7VGhlbWVQYWxldHRlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcblxuXG5leHBvcnQgY29uc3QgQ1JPTl9WQUxVRV9BQ0NFU1NPUjogYW55ID0ge1xuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQ3JvbkdlbkNvbXBvbmVudCksXG4gIG11bHRpOiB0cnVlLFxufTtcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjcm9uLWVkaXRvcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9jcm9uLWVkaXRvci50ZW1wbGF0ZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY3Jvbi1lZGl0b3IuY29tcG9uZW50LmNzcyddLFxuICBwcm92aWRlcnM6IFtDUk9OX1ZBTFVFX0FDQ0VTU09SXVxufSlcbmV4cG9ydCBjbGFzcyBDcm9uR2VuQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG5cbiAgQElucHV0KCkgcHVibGljIGJhY2tncm91bmRDb2xvcjogVGhlbWVQYWxldHRlO1xuICBASW5wdXQoKSBwdWJsaWMgY29sb3I6IFRoZW1lUGFsZXR0ZTtcbiAgQElucHV0KCkgcHVibGljIGRpc2FibGVkOiBib29sZWFuO1xuICBASW5wdXQoKSBwdWJsaWMgb3B0aW9uczogQ3Jvbk9wdGlvbnM7XG5cbiAgQElucHV0KCkgZ2V0IGNyb24oKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5sb2NhbENyb247XG4gIH1cblxuICBzZXQgY3Jvbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5sb2NhbENyb24gPSB2YWx1ZTtcbiAgICB0aGlzLm9uQ2hhbmdlKHZhbHVlKTtcbiAgfVxuXG4gIC8vIHRoZSBuYW1lIGlzIGFuIEFuZ3VsYXIgY29udmVudGlvbiwgQElucHV0IHZhcmlhYmxlIG5hbWUgKyBcIkNoYW5nZVwiIHN1ZmZpeFxuICAvLyBAT3V0cHV0KCkgY3JvbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBwdWJsaWMgYWN0aXZlVGFiOiBzdHJpbmc7XG4gIHB1YmxpYyBzZWxlY3RPcHRpb25zID0gdGhpcy5nZXRTZWxlY3RPcHRpb25zKCk7XG4gIHB1YmxpYyBzdGF0ZTogYW55O1xuXG4gIHByaXZhdGUgbG9jYWxDcm9uID0gJzAgMCAxLzEgKiAqJztcbiAgcHJpdmF0ZSBpc0RpcnR5OiBib29sZWFuO1xuXG4gIGNyb25Gb3JtOiBGb3JtQ29udHJvbDtcblxuICBtaW51dGVzRm9ybTogRm9ybUdyb3VwO1xuICBob3VybHlGb3JtOiBGb3JtR3JvdXA7XG4gIGRhaWx5Rm9ybTogRm9ybUdyb3VwO1xuICB3ZWVrbHlGb3JtOiBGb3JtR3JvdXA7XG4gIG1vbnRobHlGb3JtOiBGb3JtR3JvdXA7XG4gIHllYXJseUZvcm06IEZvcm1Hcm91cDtcbiAgYWR2YW5jZWRGb3JtOiBGb3JtR3JvdXA7XG5cblxuICBnZXQgaXNDcm9uRmxhdm9yUXVhcnR6KCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuY3JvbkZsYXZvciA9PT0gJ3F1YXJ0eic7XG4gIH1cblxuICBnZXQgaXNDcm9uRmxhdm9yU3RhbmRhcmQoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5jcm9uRmxhdm9yID09PSAnc3RhbmRhcmQnO1xuICB9XG5cbiAgZ2V0IHllYXJEZWZhdWx0Q2hhcigpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmNyb25GbGF2b3IgPT09ICdxdWFydHonID8gJyonIDogJyc7XG4gIH1cblxuICBnZXQgd2Vla0RheURlZmF1bHRDaGFyKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuY3JvbkZsYXZvciA9PT0gJ3F1YXJ0eicgPyAnPycgOiAnKic7XG4gIH1cblxuICBnZXQgbW9udGhEYXlEZWZhdWx0Q2hhcigpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmNyb25GbGF2b3IgPT09ICdxdWFydHonID8gJz8nIDogJyonO1xuICB9XG5cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZiOiBGb3JtQnVpbGRlcikge1xuICB9XG5cbiAgLyogVXBkYXRlIHRoZSBjcm9uIG91dHB1dCB0byB0aGF0IG9mIHRoZSBzZWxlY3RlZCB0YWIuXG4gICAqIFRoZSBjcm9uIG91dHB1dCB2YWx1ZSBpcyB1cGRhdGVkIHdoZW5ldmVyIGEgZm9ybSBpcyB1cGRhdGVkLiBUbyBtYWtlIGl0IGNoYW5nZSBpbiByZXNwb25zZSB0byB0YWIgc2VsZWN0aW9uLCB3ZSBzaW1wbHkgcmVzZXRcbiAgICogdGhlIHZhbHVlIG9mIHRoZSBmb3JtIHRoYXQgZ29lcyBpbnRvIGZvY3VzLiAqL1xuICBwdWJsaWMgb25UYWJGb2N1cyhpZHg6IG51bWJlcikge1xuXG4gICAgc3dpdGNoIChpZHgpIHtcbiAgICAgIGNhc2UgMDpcbiAgICAgICAgdGhpcy5taW51dGVzRm9ybS5zZXRWYWx1ZSh0aGlzLm1pbnV0ZXNGb3JtLnZhbHVlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHRoaXMuaG91cmx5Rm9ybS5zZXRWYWx1ZSh0aGlzLmhvdXJseUZvcm0udmFsdWUpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgdGhpcy5kYWlseUZvcm0uc2V0VmFsdWUodGhpcy5kYWlseUZvcm0udmFsdWUpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgdGhpcy53ZWVrbHlGb3JtLnNldFZhbHVlKHRoaXMud2Vla2x5Rm9ybS52YWx1ZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA0OlxuICAgICAgICB0aGlzLm1vbnRobHlGb3JtLnNldFZhbHVlKHRoaXMubW9udGhseUZvcm0udmFsdWUpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNTpcbiAgICAgICAgdGhpcy55ZWFybHlGb3JtLnNldFZhbHVlKHRoaXMueWVhcmx5Rm9ybS52YWx1ZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA2OlxuICAgICAgICB0aGlzLmFkdmFuY2VkRm9ybS5zZXRWYWx1ZSh0aGlzLmFkdmFuY2VkRm9ybS52YWx1ZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cobmV3IEVycm9yKCdJbnZhbGlkIHRhYiBzZWxlY3RlZCcpKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zdGF0ZSA9IHRoaXMuZ2V0RGVmYXVsdFN0YXRlKCk7XG5cbiAgICB0aGlzLmhhbmRsZU1vZGVsQ2hhbmdlKHRoaXMuY3Jvbik7XG5cbiAgICBjb25zdCBbZGVmYXVsdEhvdXJzLCBkZWZhdWx0TWludXRlcywgZGVmYXVsdFNlY29uZHNdID0gdGhpcy5vcHRpb25zLmRlZmF1bHRUaW1lLnNwbGl0KCc6JykubWFwKE51bWJlcik7XG5cbiAgICB0aGlzLmNyb25Gb3JtID0gbmV3IEZvcm1Db250cm9sKCcwIDAgMS8xICogKicpO1xuXG4gICAgdGhpcy5taW51dGVzRm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xuICAgICAgaG91cnM6IFswXSxcbiAgICAgIG1pbnV0ZXM6IFsxXSxcbiAgICAgIHNlY29uZHM6IFswXVxuICAgIH0pO1xuXG4gICAgdGhpcy5taW51dGVzRm9ybS52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKHZhbHVlID0+IHRoaXMuY29tcHV0ZU1pbnV0ZXNDcm9uKHZhbHVlKSk7XG5cbiAgICB0aGlzLmhvdXJseUZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcbiAgICAgIGhvdXJzOiBbMV0sXG4gICAgICBtaW51dGVzOiBbMF0sXG4gICAgICBzZWNvbmRzOiBbMF1cbiAgICB9KTtcbiAgICB0aGlzLmhvdXJseUZvcm0udmFsdWVDaGFuZ2VzLnN1YnNjcmliZSh2YWx1ZSA9PiB0aGlzLmNvbXB1dGVIb3VybHlDcm9uKHZhbHVlKSk7XG5cbiAgICB0aGlzLmRhaWx5Rm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xuICAgICAgc3ViVGFiOiBbJ2V2ZXJ5RGF5cyddLFxuICAgICAgZXZlcnlEYXlzOiB0aGlzLmZiLmdyb3VwKHtcbiAgICAgICAgZGF5czogWzFdLFxuICAgICAgICBob3VyczogW3RoaXMuZ2V0QW1QbUhvdXIoMSldLFxuICAgICAgICBtaW51dGVzOiBbMF0sXG4gICAgICAgIHNlY29uZHM6IFswXSxcbiAgICAgICAgaG91clR5cGU6IFt0aGlzLmdldEhvdXJUeXBlKDApXVxuICAgICAgfSksXG4gICAgICBldmVyeVdlZWtEYXk6IHRoaXMuZmIuZ3JvdXAoe1xuICAgICAgICBkYXlzOiBbMF0sXG4gICAgICAgIGhvdXJzOiBbdGhpcy5nZXRBbVBtSG91cigxKV0sXG4gICAgICAgIG1pbnV0ZXM6IFswXSxcbiAgICAgICAgc2Vjb25kczogWzBdLFxuICAgICAgICBob3VyVHlwZTogW3RoaXMuZ2V0SG91clR5cGUoMCldXG4gICAgICB9KVxuICAgIH0pO1xuICAgIHRoaXMuZGFpbHlGb3JtLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUodmFsdWUgPT4gdGhpcy5jb21wdXRlRGFpbHlDcm9uKHZhbHVlKSk7XG5cbiAgICB0aGlzLndlZWtseUZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcbiAgICAgIE1PTjogW3RydWVdLFxuICAgICAgVFVFOiBbZmFsc2VdLFxuICAgICAgV0VEOiBbZmFsc2VdLFxuICAgICAgVEhVOiBbZmFsc2VdLFxuICAgICAgRlJJOiBbZmFsc2VdLFxuICAgICAgU0FUOiBbZmFsc2VdLFxuICAgICAgU1VOOiBbZmFsc2VdLFxuICAgICAgaG91cnM6IFt0aGlzLmdldEFtUG1Ib3VyKGRlZmF1bHRIb3VycyldLFxuICAgICAgbWludXRlczogW2RlZmF1bHRNaW51dGVzXSxcbiAgICAgIHNlY29uZHM6IFtkZWZhdWx0U2Vjb25kc10sXG4gICAgICBob3VyVHlwZTogW3RoaXMuZ2V0SG91clR5cGUoZGVmYXVsdEhvdXJzKV1cbiAgICB9KTtcbiAgICB0aGlzLndlZWtseUZvcm0udmFsdWVDaGFuZ2VzLnN1YnNjcmliZShuZXh0ID0+IHRoaXMuY29tcHV0ZVdlZWtseUNyb24obmV4dCkpO1xuXG4gICAgdGhpcy5tb250aGx5Rm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xuICAgICAgc3ViVGFiOiBbJ3NwZWNpZmljRGF5J10sXG4gICAgICBzcGVjaWZpY0RheTogdGhpcy5mYi5ncm91cCh7XG4gICAgICAgIGRheTogWycxJ10sXG4gICAgICAgIG1vbnRoczogWzFdLFxuICAgICAgICBob3VyczogW3RoaXMuZ2V0QW1QbUhvdXIoZGVmYXVsdEhvdXJzKV0sXG4gICAgICAgIG1pbnV0ZXM6IFtkZWZhdWx0TWludXRlc10sXG4gICAgICAgIHNlY29uZHM6IFtkZWZhdWx0U2Vjb25kc10sXG4gICAgICAgIGhvdXJUeXBlOiBbdGhpcy5nZXRIb3VyVHlwZShkZWZhdWx0SG91cnMpXVxuICAgICAgfSksXG4gICAgICBzcGVjaWZpY1dlZWtEYXk6IHRoaXMuZmIuZ3JvdXAoe1xuICAgICAgICBtb250aFdlZWs6IFsnIzEnXSxcbiAgICAgICAgZGF5OiBbJ01PTiddLFxuICAgICAgICBtb250aHM6IFsxXSxcbiAgICAgICAgaG91cnM6IFt0aGlzLmdldEFtUG1Ib3VyKGRlZmF1bHRIb3VycyldLFxuICAgICAgICBtaW51dGVzOiBbZGVmYXVsdE1pbnV0ZXNdLFxuICAgICAgICBzZWNvbmRzOiBbZGVmYXVsdFNlY29uZHNdLFxuICAgICAgICBob3VyVHlwZTogW3RoaXMuZ2V0SG91clR5cGUoZGVmYXVsdEhvdXJzKV1cbiAgICAgIH0pXG4gICAgfSk7XG4gICAgdGhpcy5tb250aGx5Rm9ybS52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKG5leHQgPT4gdGhpcy5jb21wdXRlTW9udGhseUNyb24obmV4dCkpO1xuXG4gICAgdGhpcy55ZWFybHlGb3JtID0gdGhpcy5mYi5ncm91cCh7XG4gICAgICBzdWJUYWI6IFsnc3BlY2lmaWNNb250aERheSddLFxuICAgICAgc3BlY2lmaWNNb250aERheTogdGhpcy5mYi5ncm91cCh7XG4gICAgICAgIG1vbnRoOiBbMV0sXG4gICAgICAgIGRheTogWycxJ10sXG4gICAgICAgIGhvdXJzOiBbdGhpcy5nZXRBbVBtSG91cihkZWZhdWx0SG91cnMpXSxcbiAgICAgICAgbWludXRlczogW2RlZmF1bHRNaW51dGVzXSxcbiAgICAgICAgc2Vjb25kczogW2RlZmF1bHRTZWNvbmRzXSxcbiAgICAgICAgaG91clR5cGU6IFt0aGlzLmdldEhvdXJUeXBlKGRlZmF1bHRIb3VycyldXG4gICAgICB9KSxcbiAgICAgIHNwZWNpZmljTW9udGhXZWVrOiB0aGlzLmZiLmdyb3VwKHtcbiAgICAgICAgbW9udGhXZWVrOiBbJyMxJ10sXG4gICAgICAgIGRheTogWydNT04nXSxcbiAgICAgICAgbW9udGg6IFsxXSxcbiAgICAgICAgaG91cnM6IFt0aGlzLmdldEFtUG1Ib3VyKGRlZmF1bHRIb3VycyldLFxuICAgICAgICBtaW51dGVzOiBbZGVmYXVsdE1pbnV0ZXNdLFxuICAgICAgICBzZWNvbmRzOiBbZGVmYXVsdFNlY29uZHNdLFxuICAgICAgICBob3VyVHlwZTogW3RoaXMuZ2V0SG91clR5cGUoZGVmYXVsdEhvdXJzKV1cbiAgICAgIH0pXG4gICAgfSk7XG4gICAgdGhpcy55ZWFybHlGb3JtLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUobmV4dCA9PiB0aGlzLmNvbXB1dGVZZWFybHlDcm9uKG5leHQpKTtcblxuICAgIHRoaXMuYWR2YW5jZWRGb3JtID0gdGhpcy5mYi5ncm91cCh7XG4gICAgICBleHByZXNzaW9uOiBbdGhpcy5pc0Nyb25GbGF2b3JRdWFydHogPyAnMCAxNSAxMCBMLTIgKiA/IConIDogJzE1IDEwIDIgKiAqJ11cbiAgICB9KTtcbiAgICB0aGlzLmFkdmFuY2VkRm9ybS5jb250cm9scy5leHByZXNzaW9uLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUobmV4dCA9PiB0aGlzLmNvbXB1dGVBZHZhbmNlZEV4cHJlc3Npb24obmV4dCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBjb21wdXRlTWludXRlc0Nyb24oc3RhdGU6IGFueSkge1xuICAgIHRoaXMuY3JvbiA9IGAke3RoaXMuaXNDcm9uRmxhdm9yUXVhcnR6ID8gc3RhdGUuc2Vjb25kcyA6ICcnfSAwLyR7c3RhdGUubWludXRlc30gKiAxLzEgKiAke3RoaXMud2Vla0RheURlZmF1bHRDaGFyfSAke3RoaXMueWVhckRlZmF1bHRDaGFyfWAudHJpbSgpO1xuICAgIHRoaXMuY3JvbkZvcm0uc2V0VmFsdWUodGhpcy5jcm9uKTtcbiAgfVxuXG4gIHByaXZhdGUgY29tcHV0ZUhvdXJseUNyb24oc3RhdGU6IGFueSkge1xuICAgIHRoaXMuY3JvbiA9IGAke3RoaXMuaXNDcm9uRmxhdm9yUXVhcnR6ID8gc3RhdGUuc2Vjb25kcyA6ICcnfSAke3N0YXRlLm1pbnV0ZXN9IDAvJHtzdGF0ZS5ob3Vyc30gMS8xICogJHt0aGlzLndlZWtEYXlEZWZhdWx0Q2hhcn0gJHt0aGlzLnllYXJEZWZhdWx0Q2hhcn1gLnRyaW0oKTtcbiAgICB0aGlzLmNyb25Gb3JtLnNldFZhbHVlKHRoaXMuY3Jvbik7XG4gIH1cblxuICBwcml2YXRlIGNvbXB1dGVEYWlseUNyb24oc3RhdGU6IGFueSkge1xuICAgIHN3aXRjaCAoc3RhdGUuc3ViVGFiKSB7XG4gICAgICBjYXNlICdldmVyeURheXMnOlxuICAgICAgICB0aGlzLmNyb24gPSBgJHt0aGlzLmlzQ3JvbkZsYXZvclF1YXJ0eiA/IHN0YXRlLmV2ZXJ5RGF5cy5zZWNvbmRzIDogJyd9ICR7c3RhdGUuZXZlcnlEYXlzLm1pbnV0ZXN9ICR7dGhpcy5ob3VyVG9Dcm9uKHN0YXRlLmV2ZXJ5RGF5cy5ob3Vycywgc3RhdGUuZXZlcnlEYXlzLmhvdXJUeXBlKX0gMS8ke3N0YXRlLmV2ZXJ5RGF5cy5kYXlzfSAqICR7dGhpcy53ZWVrRGF5RGVmYXVsdENoYXJ9ICR7dGhpcy55ZWFyRGVmYXVsdENoYXJ9YC50cmltKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZXZlcnlXZWVrRGF5JzpcbiAgICAgICAgdGhpcy5jcm9uID0gYCR7dGhpcy5pc0Nyb25GbGF2b3JRdWFydHogPyBzdGF0ZS5ldmVyeVdlZWtEYXkuc2Vjb25kcyA6ICcnfSAke3N0YXRlLmV2ZXJ5V2Vla0RheS5taW51dGVzfSAke3RoaXMuaG91clRvQ3JvbihzdGF0ZS5ldmVyeVdlZWtEYXkuaG91cnMsIHN0YXRlLmV2ZXJ5V2Vla0RheS5ob3VyVHlwZSl9ICR7dGhpcy5tb250aERheURlZmF1bHRDaGFyfSAqIE1PTi1GUkkgJHt0aGlzLnllYXJEZWZhdWx0Q2hhcn1gLnRyaW0oKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgY3JvbiBkYWlseSBzdWJ0YWIgc2VsZWN0aW9uJyk7XG4gICAgfVxuICAgIHRoaXMuY3JvbkZvcm0uc2V0VmFsdWUodGhpcy5jcm9uKTtcbiAgfVxuXG4gIHByaXZhdGUgY29tcHV0ZVdlZWtseUNyb24oc3RhdGU6IGFueSkge1xuICAgIGNvbnN0IGRheXMgPSB0aGlzLnNlbGVjdE9wdGlvbnMuZGF5c1xuICAgICAgLnJlZHVjZSgoYWNjLCBkYXkpID0+IHN0YXRlW2RheV0gPyBhY2MuY29uY2F0KFtkYXldKSA6IGFjYywgW10pXG4gICAgICAuam9pbignLCcpO1xuICAgIHRoaXMuY3JvbiA9IGAke3RoaXMuaXNDcm9uRmxhdm9yUXVhcnR6ID8gc3RhdGUuc2Vjb25kcyA6ICcnfSAke3N0YXRlLm1pbnV0ZXN9ICR7dGhpcy5ob3VyVG9Dcm9uKHN0YXRlLmhvdXJzLCBzdGF0ZS5ob3VyVHlwZSl9ICR7dGhpcy5tb250aERheURlZmF1bHRDaGFyfSAqICR7ZGF5c30gJHt0aGlzLnllYXJEZWZhdWx0Q2hhcn1gLnRyaW0oKTtcbiAgICB0aGlzLmNyb25Gb3JtLnNldFZhbHVlKHRoaXMuY3Jvbik7XG4gIH1cblxuICBwcml2YXRlIGNvbXB1dGVNb250aGx5Q3JvbihzdGF0ZTogYW55KSB7XG4gICAgc3dpdGNoIChzdGF0ZS5zdWJUYWIpIHtcbiAgICAgIGNhc2UgJ3NwZWNpZmljRGF5JzpcbiAgICAgICAgdGhpcy5jcm9uID0gYCR7dGhpcy5pc0Nyb25GbGF2b3JRdWFydHogPyBzdGF0ZS5zcGVjaWZpY0RheS5zZWNvbmRzIDogJyd9ICR7c3RhdGUuc3BlY2lmaWNEYXkubWludXRlc30gJHt0aGlzLmhvdXJUb0Nyb24oc3RhdGUuc3BlY2lmaWNEYXkuaG91cnMsIHN0YXRlLnNwZWNpZmljRGF5LmhvdXJUeXBlKX0gJHtzdGF0ZS5zcGVjaWZpY0RheS5kYXl9IDEvJHtzdGF0ZS5zcGVjaWZpY0RheS5tb250aHN9ICR7dGhpcy53ZWVrRGF5RGVmYXVsdENoYXJ9ICR7dGhpcy55ZWFyRGVmYXVsdENoYXJ9YC50cmltKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnc3BlY2lmaWNXZWVrRGF5JzpcbiAgICAgICAgdGhpcy5jcm9uID0gYCR7dGhpcy5pc0Nyb25GbGF2b3JRdWFydHogPyBzdGF0ZS5zcGVjaWZpY1dlZWtEYXkuc2Vjb25kcyA6ICcnfSAke3N0YXRlLnNwZWNpZmljV2Vla0RheS5taW51dGVzfSAke3RoaXMuaG91clRvQ3JvbihzdGF0ZS5zcGVjaWZpY1dlZWtEYXkuaG91cnMsIHN0YXRlLnNwZWNpZmljV2Vla0RheS5ob3VyVHlwZSl9ICR7dGhpcy5tb250aERheURlZmF1bHRDaGFyfSAxLyR7c3RhdGUuc3BlY2lmaWNXZWVrRGF5Lm1vbnRoc30gJHtzdGF0ZS5zcGVjaWZpY1dlZWtEYXkuZGF5fSR7c3RhdGUuc3BlY2lmaWNXZWVrRGF5Lm1vbnRoV2Vla30gJHt0aGlzLnllYXJEZWZhdWx0Q2hhcn1gLnRyaW0oKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgY3JvbiBtb250bHkgc3VidGFiIHNlbGVjdGlvbicpO1xuICAgIH1cbiAgICB0aGlzLmNyb25Gb3JtLnNldFZhbHVlKHRoaXMuY3Jvbik7XG4gIH1cblxuICBwcml2YXRlIGNvbXB1dGVZZWFybHlDcm9uKHN0YXRlOiBhbnkpIHtcbiAgICBzd2l0Y2ggKHN0YXRlLnN1YlRhYikge1xuICAgICAgY2FzZSAnc3BlY2lmaWNNb250aERheSc6XG4gICAgICAgIHRoaXMuY3JvbiA9IGAke3RoaXMuaXNDcm9uRmxhdm9yUXVhcnR6ID8gc3RhdGUuc3BlY2lmaWNNb250aERheS5zZWNvbmRzIDogJyd9ICR7c3RhdGUuc3BlY2lmaWNNb250aERheS5taW51dGVzfSAke3RoaXMuaG91clRvQ3JvbihzdGF0ZS5zcGVjaWZpY01vbnRoRGF5LmhvdXJzLCBzdGF0ZS5zcGVjaWZpY01vbnRoRGF5LmhvdXJUeXBlKX0gJHtzdGF0ZS5zcGVjaWZpY01vbnRoRGF5LmRheX0gJHtzdGF0ZS5zcGVjaWZpY01vbnRoRGF5Lm1vbnRofSAke3RoaXMud2Vla0RheURlZmF1bHRDaGFyfSAke3RoaXMueWVhckRlZmF1bHRDaGFyfWAudHJpbSgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3NwZWNpZmljTW9udGhXZWVrJzpcbiAgICAgICAgdGhpcy5jcm9uID0gYCR7dGhpcy5pc0Nyb25GbGF2b3JRdWFydHogPyBzdGF0ZS5zcGVjaWZpY01vbnRoV2Vlay5zZWNvbmRzIDogJyd9ICR7c3RhdGUuc3BlY2lmaWNNb250aFdlZWsubWludXRlc30gJHt0aGlzLmhvdXJUb0Nyb24oc3RhdGUuc3BlY2lmaWNNb250aFdlZWsuaG91cnMsIHN0YXRlLnNwZWNpZmljTW9udGhXZWVrLmhvdXJUeXBlKX0gJHt0aGlzLm1vbnRoRGF5RGVmYXVsdENoYXJ9ICR7c3RhdGUuc3BlY2lmaWNNb250aFdlZWsubW9udGh9ICR7c3RhdGUuc3BlY2lmaWNNb250aFdlZWsuZGF5fSR7c3RhdGUuc3BlY2lmaWNNb250aFdlZWsubW9udGhXZWVrfSAke3RoaXMueWVhckRlZmF1bHRDaGFyfWAudHJpbSgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBjcm9uIHllYXJseSBzdWJ0YWIgc2VsZWN0aW9uJyk7XG4gICAgfVxuICAgIHRoaXMuY3JvbkZvcm0uc2V0VmFsdWUodGhpcy5jcm9uKTtcbiAgfVxuXG4gIHByaXZhdGUgY29tcHV0ZUFkdmFuY2VkRXhwcmVzc2lvbihleHByZXNzaW9uOiBhbnkpIHtcbiAgICB0aGlzLmNyb24gPSBleHByZXNzaW9uO1xuICAgIHRoaXMuY3JvbkZvcm0uc2V0VmFsdWUodGhpcy5jcm9uKTtcbiAgfVxuXG4gIHB1YmxpYyBkYXlEaXNwbGF5KGRheTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gRGF5c1tkYXldO1xuICB9XG5cbiAgcHVibGljIG1vbnRoV2Vla0Rpc3BsYXkobW9udGhXZWVrTnVtYmVyOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBNb250aFdlZWtzW21vbnRoV2Vla051bWJlcl07XG4gIH1cblxuICBwdWJsaWMgbW9udGhEaXNwbGF5KG1vbnRoOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIHJldHVybiBNb250aHNbbW9udGhdO1xuICB9XG5cbiAgcHVibGljIG1vbnRoRGF5RGlzcGxheShtb250aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBpZiAobW9udGggPT09ICdMJykge1xuICAgICAgcmV0dXJuICdMYXN0IERheSc7XG4gICAgfSBlbHNlIGlmIChtb250aCA9PT0gJ0xXJykge1xuICAgICAgcmV0dXJuICdMYXN0IFdlZWtkYXknO1xuICAgIH0gZWxzZSBpZiAobW9udGggPT09ICcxVycpIHtcbiAgICAgIHJldHVybiAnRmlyc3QgV2Vla2RheSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBgJHttb250aH0ke3RoaXMuZ2V0T3JkaW5hbFN1ZmZpeChtb250aCl9YDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldEFtUG1Ib3VyKGhvdXI6IG51bWJlcikge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMudXNlMjRIb3VyVGltZSA/IGhvdXIgOiAoaG91ciArIDExKSAlIDEyICsgMTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0SG91clR5cGUoaG91cjogbnVtYmVyKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy51c2UyNEhvdXJUaW1lID8gdW5kZWZpbmVkIDogKGhvdXIgPj0gMTIgPyAnUE0nIDogJ0FNJyk7XG4gIH1cblxuICBwcml2YXRlIGhvdXJUb0Nyb24oaG91cjogbnVtYmVyLCBob3VyVHlwZTogc3RyaW5nKSB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy51c2UyNEhvdXJUaW1lKSB7XG4gICAgICByZXR1cm4gaG91cjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGhvdXJUeXBlID09PSAnQU0nID8gKGhvdXIgPT09IDEyID8gMCA6IGhvdXIpIDogKGhvdXIgPT09IDEyID8gMTIgOiBob3VyICsgMTIpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlTW9kZWxDaGFuZ2UoY3Jvbjogc3RyaW5nKSB7XG4gICAgaWYgKHRoaXMuaXNEaXJ0eSkge1xuICAgICAgdGhpcy5pc0RpcnR5ID0gZmFsc2U7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaXNEaXJ0eSA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5jcm9uSXNWYWxpZChjcm9uKSkge1xuICAgICAgaWYgKHRoaXMuaXNDcm9uRmxhdm9yUXVhcnR6KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBjcm9uIGV4cHJlc3Npb24sIHRoZXJlIG11c3QgYmUgNiBvciA3IHNlZ21lbnRzJyk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmlzQ3JvbkZsYXZvclN0YW5kYXJkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBjcm9uIGV4cHJlc3Npb24sIHRoZXJlIG11c3QgYmUgNSBzZWdtZW50cycpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IG9yaWdDcm9uOiBzdHJpbmcgPSBjcm9uO1xuICAgIGlmIChjcm9uLnNwbGl0KCcgJykubGVuZ3RoID09PSA1ICYmIHRoaXMuaXNDcm9uRmxhdm9yU3RhbmRhcmQpIHtcbiAgICAgIGNyb24gPSBgMCAke2Nyb259ICpgO1xuICAgIH1cblxuICAgIGNvbnN0IFtzZWNvbmRzLCBtaW51dGVzLCBob3VycywgZGF5T2ZNb250aCwgbW9udGgsIGRheU9mV2Vla10gPSBjcm9uLnNwbGl0KCcgJyk7XG5cbiAgICBpZiAoY3Jvbi5tYXRjaCgvXFxkKyAwXFwvXFxkKyBcXCogMVxcLzEgXFwqIFtcXD9cXCpdIFxcKi8pKSB7XG4gICAgICB0aGlzLmFjdGl2ZVRhYiA9ICdtaW51dGVzJztcblxuICAgICAgdGhpcy5zdGF0ZS5taW51dGVzLm1pbnV0ZXMgPSBwYXJzZUludChtaW51dGVzLnN1YnN0cmluZygyKSwgMTApO1xuICAgICAgdGhpcy5zdGF0ZS5taW51dGVzLnNlY29uZHMgPSBwYXJzZUludChzZWNvbmRzLCAxMCk7XG4gICAgfSBlbHNlIGlmIChjcm9uLm1hdGNoKC9cXGQrIFxcZCsgMFxcL1xcZCsgMVxcLzEgXFwqIFtcXD9cXCpdIFxcKi8pKSB7XG4gICAgICB0aGlzLmFjdGl2ZVRhYiA9ICdob3VybHknO1xuXG4gICAgICB0aGlzLnN0YXRlLmhvdXJseS5ob3VycyA9IHBhcnNlSW50KGhvdXJzLnN1YnN0cmluZygyKSwgMTApO1xuICAgICAgdGhpcy5zdGF0ZS5ob3VybHkubWludXRlcyA9IHBhcnNlSW50KG1pbnV0ZXMsIDEwKTtcbiAgICAgIHRoaXMuc3RhdGUuaG91cmx5LnNlY29uZHMgPSBwYXJzZUludChzZWNvbmRzLCAxMCk7XG4gICAgfSBlbHNlIGlmIChjcm9uLm1hdGNoKC9cXGQrIFxcZCsgXFxkKyAxXFwvXFxkKyBcXCogW1xcP1xcKl0gXFwqLykpIHtcbiAgICAgIHRoaXMuYWN0aXZlVGFiID0gJ2RhaWx5JztcblxuICAgICAgdGhpcy5zdGF0ZS5kYWlseS5zdWJUYWIgPSAnZXZlcnlEYXlzJztcbiAgICAgIHRoaXMuc3RhdGUuZGFpbHkuZXZlcnlEYXlzLmRheXMgPSBwYXJzZUludChkYXlPZk1vbnRoLnN1YnN0cmluZygyKSwgMTApO1xuICAgICAgY29uc3QgcGFyc2VkSG91cnMgPSBwYXJzZUludChob3VycywgMTApO1xuICAgICAgdGhpcy5zdGF0ZS5kYWlseS5ldmVyeURheXMuaG91cnMgPSB0aGlzLmdldEFtUG1Ib3VyKHBhcnNlZEhvdXJzKTtcbiAgICAgIHRoaXMuc3RhdGUuZGFpbHkuZXZlcnlEYXlzLmhvdXJUeXBlID0gdGhpcy5nZXRIb3VyVHlwZShwYXJzZWRIb3Vycyk7XG4gICAgICB0aGlzLnN0YXRlLmRhaWx5LmV2ZXJ5RGF5cy5taW51dGVzID0gcGFyc2VJbnQobWludXRlcywgMTApO1xuICAgICAgdGhpcy5zdGF0ZS5kYWlseS5ldmVyeURheXMuc2Vjb25kcyA9IHBhcnNlSW50KHNlY29uZHMsIDEwKTtcbiAgICB9IGVsc2UgaWYgKGNyb24ubWF0Y2goL1xcZCsgXFxkKyBcXGQrIFtcXD9cXCpdIFxcKiBNT04tRlJJIFxcKi8pKSB7XG4gICAgICB0aGlzLmFjdGl2ZVRhYiA9ICdkYWlseSc7XG5cbiAgICAgIHRoaXMuc3RhdGUuZGFpbHkuc3ViVGFiID0gJ2V2ZXJ5V2Vla0RheSc7XG4gICAgICBjb25zdCBwYXJzZWRIb3VycyA9IHBhcnNlSW50KGhvdXJzLCAxMCk7XG4gICAgICB0aGlzLnN0YXRlLmRhaWx5LmV2ZXJ5V2Vla0RheS5ob3VycyA9IHRoaXMuZ2V0QW1QbUhvdXIocGFyc2VkSG91cnMpO1xuICAgICAgdGhpcy5zdGF0ZS5kYWlseS5ldmVyeVdlZWtEYXkuaG91clR5cGUgPSB0aGlzLmdldEhvdXJUeXBlKHBhcnNlZEhvdXJzKTtcbiAgICAgIHRoaXMuc3RhdGUuZGFpbHkuZXZlcnlXZWVrRGF5Lm1pbnV0ZXMgPSBwYXJzZUludChtaW51dGVzLCAxMCk7XG4gICAgICB0aGlzLnN0YXRlLmRhaWx5LmV2ZXJ5V2Vla0RheS5zZWNvbmRzID0gcGFyc2VJbnQoc2Vjb25kcywgMTApO1xuICAgIH0gZWxzZSBpZiAoY3Jvbi5tYXRjaCgvXFxkKyBcXGQrIFxcZCsgW1xcP1xcKl0gXFwqIChNT058VFVFfFdFRHxUSFV8RlJJfFNBVHxTVU4pKCwoTU9OfFRVRXxXRUR8VEhVfEZSSXxTQVR8U1VOKSkqIFxcKi8pKSB7XG4gICAgICB0aGlzLmFjdGl2ZVRhYiA9ICd3ZWVrbHknO1xuICAgICAgdGhpcy5zZWxlY3RPcHRpb25zLmRheXMuZm9yRWFjaCh3ZWVrRGF5ID0+IHRoaXMuc3RhdGUud2Vla2x5W3dlZWtEYXldID0gZmFsc2UpO1xuICAgICAgZGF5T2ZXZWVrLnNwbGl0KCcsJykuZm9yRWFjaCh3ZWVrRGF5ID0+IHRoaXMuc3RhdGUud2Vla2x5W3dlZWtEYXldID0gdHJ1ZSk7XG4gICAgICBjb25zdCBwYXJzZWRIb3VycyA9IHBhcnNlSW50KGhvdXJzLCAxMCk7XG4gICAgICB0aGlzLnN0YXRlLndlZWtseS5ob3VycyA9IHRoaXMuZ2V0QW1QbUhvdXIocGFyc2VkSG91cnMpO1xuICAgICAgdGhpcy5zdGF0ZS53ZWVrbHkuaG91clR5cGUgPSB0aGlzLmdldEhvdXJUeXBlKHBhcnNlZEhvdXJzKTtcbiAgICAgIHRoaXMuc3RhdGUud2Vla2x5Lm1pbnV0ZXMgPSBwYXJzZUludChtaW51dGVzLCAxMCk7XG4gICAgICB0aGlzLnN0YXRlLndlZWtseS5zZWNvbmRzID0gcGFyc2VJbnQoc2Vjb25kcywgMTApO1xuICAgIH0gZWxzZSBpZiAoY3Jvbi5tYXRjaCgvXFxkKyBcXGQrIFxcZCsgKFxcZCt8THxMV3wxVykgMVxcL1xcZCsgW1xcP1xcKl0gXFwqLykpIHtcbiAgICAgIHRoaXMuYWN0aXZlVGFiID0gJ21vbnRobHknO1xuICAgICAgdGhpcy5zdGF0ZS5tb250aGx5LnN1YlRhYiA9ICdzcGVjaWZpY0RheSc7XG4gICAgICB0aGlzLnN0YXRlLm1vbnRobHkuc3BlY2lmaWNEYXkuZGF5ID0gZGF5T2ZNb250aDtcbiAgICAgIHRoaXMuc3RhdGUubW9udGhseS5zcGVjaWZpY0RheS5tb250aHMgPSBwYXJzZUludChtb250aC5zdWJzdHJpbmcoMiksIDEwKTtcbiAgICAgIGNvbnN0IHBhcnNlZEhvdXJzID0gcGFyc2VJbnQoaG91cnMsIDEwKTtcbiAgICAgIHRoaXMuc3RhdGUubW9udGhseS5zcGVjaWZpY0RheS5ob3VycyA9IHRoaXMuZ2V0QW1QbUhvdXIocGFyc2VkSG91cnMpO1xuICAgICAgdGhpcy5zdGF0ZS5tb250aGx5LnNwZWNpZmljRGF5LmhvdXJUeXBlID0gdGhpcy5nZXRIb3VyVHlwZShwYXJzZWRIb3Vycyk7XG4gICAgICB0aGlzLnN0YXRlLm1vbnRobHkuc3BlY2lmaWNEYXkubWludXRlcyA9IHBhcnNlSW50KG1pbnV0ZXMsIDEwKTtcbiAgICAgIHRoaXMuc3RhdGUubW9udGhseS5zcGVjaWZpY0RheS5zZWNvbmRzID0gcGFyc2VJbnQoc2Vjb25kcywgMTApO1xuICAgIH0gZWxzZSBpZiAoY3Jvbi5tYXRjaCgvXFxkKyBcXGQrIFxcZCsgW1xcP1xcKl0gMVxcL1xcZCsgKE1PTnxUVUV8V0VEfFRIVXxGUkl8U0FUfFNVTikoKCNbMS01XSl8TCkgXFwqLykpIHtcbiAgICAgIGNvbnN0IGRheSA9IGRheU9mV2Vlay5zdWJzdHIoMCwgMyk7XG4gICAgICBjb25zdCBtb250aFdlZWsgPSBkYXlPZldlZWsuc3Vic3RyKDMpO1xuICAgICAgdGhpcy5hY3RpdmVUYWIgPSAnbW9udGhseSc7XG4gICAgICB0aGlzLnN0YXRlLm1vbnRobHkuc3ViVGFiID0gJ3NwZWNpZmljV2Vla0RheSc7XG4gICAgICB0aGlzLnN0YXRlLm1vbnRobHkuc3BlY2lmaWNXZWVrRGF5Lm1vbnRoV2VlayA9IG1vbnRoV2VlaztcbiAgICAgIHRoaXMuc3RhdGUubW9udGhseS5zcGVjaWZpY1dlZWtEYXkuZGF5ID0gZGF5O1xuICAgICAgdGhpcy5zdGF0ZS5tb250aGx5LnNwZWNpZmljV2Vla0RheS5tb250aHMgPSBwYXJzZUludChtb250aC5zdWJzdHJpbmcoMiksIDEwKTtcbiAgICAgIGNvbnN0IHBhcnNlZEhvdXJzID0gcGFyc2VJbnQoaG91cnMsIDEwKTtcbiAgICAgIHRoaXMuc3RhdGUubW9udGhseS5zcGVjaWZpY1dlZWtEYXkuaG91cnMgPSB0aGlzLmdldEFtUG1Ib3VyKHBhcnNlZEhvdXJzKTtcbiAgICAgIHRoaXMuc3RhdGUubW9udGhseS5zcGVjaWZpY1dlZWtEYXkuaG91clR5cGUgPSB0aGlzLmdldEhvdXJUeXBlKHBhcnNlZEhvdXJzKTtcbiAgICAgIHRoaXMuc3RhdGUubW9udGhseS5zcGVjaWZpY1dlZWtEYXkubWludXRlcyA9IHBhcnNlSW50KG1pbnV0ZXMsIDEwKTtcbiAgICAgIHRoaXMuc3RhdGUubW9udGhseS5zcGVjaWZpY1dlZWtEYXkuc2Vjb25kcyA9IHBhcnNlSW50KHNlY29uZHMsIDEwKTtcbiAgICB9IGVsc2UgaWYgKGNyb24ubWF0Y2goL1xcZCsgXFxkKyBcXGQrIChcXGQrfEx8TFd8MVcpIFxcZCsgW1xcP1xcKl0gXFwqLykpIHtcbiAgICAgIHRoaXMuYWN0aXZlVGFiID0gJ3llYXJseSc7XG4gICAgICB0aGlzLnN0YXRlLnllYXJseS5zdWJUYWIgPSAnc3BlY2lmaWNNb250aERheSc7XG4gICAgICB0aGlzLnN0YXRlLnllYXJseS5zcGVjaWZpY01vbnRoRGF5Lm1vbnRoID0gcGFyc2VJbnQobW9udGgsIDEwKTtcbiAgICAgIHRoaXMuc3RhdGUueWVhcmx5LnNwZWNpZmljTW9udGhEYXkuZGF5ID0gZGF5T2ZNb250aDtcbiAgICAgIGNvbnN0IHBhcnNlZEhvdXJzID0gcGFyc2VJbnQoaG91cnMsIDEwKTtcbiAgICAgIHRoaXMuc3RhdGUueWVhcmx5LnNwZWNpZmljTW9udGhEYXkuaG91cnMgPSB0aGlzLmdldEFtUG1Ib3VyKHBhcnNlZEhvdXJzKTtcbiAgICAgIHRoaXMuc3RhdGUueWVhcmx5LnNwZWNpZmljTW9udGhEYXkuaG91clR5cGUgPSB0aGlzLmdldEhvdXJUeXBlKHBhcnNlZEhvdXJzKTtcbiAgICAgIHRoaXMuc3RhdGUueWVhcmx5LnNwZWNpZmljTW9udGhEYXkubWludXRlcyA9IHBhcnNlSW50KG1pbnV0ZXMsIDEwKTtcbiAgICAgIHRoaXMuc3RhdGUueWVhcmx5LnNwZWNpZmljTW9udGhEYXkuc2Vjb25kcyA9IHBhcnNlSW50KHNlY29uZHMsIDEwKTtcbiAgICB9IGVsc2UgaWYgKGNyb24ubWF0Y2goL1xcZCsgXFxkKyBcXGQrIFtcXD9cXCpdIFxcZCsgKE1PTnxUVUV8V0VEfFRIVXxGUkl8U0FUfFNVTikoKCNbMS01XSl8TCkgXFwqLykpIHtcbiAgICAgIGNvbnN0IGRheSA9IGRheU9mV2Vlay5zdWJzdHIoMCwgMyk7XG4gICAgICBjb25zdCBtb250aFdlZWsgPSBkYXlPZldlZWsuc3Vic3RyKDMpO1xuICAgICAgdGhpcy5hY3RpdmVUYWIgPSAneWVhcmx5JztcbiAgICAgIHRoaXMuc3RhdGUueWVhcmx5LnN1YlRhYiA9ICdzcGVjaWZpY01vbnRoV2Vlayc7XG4gICAgICB0aGlzLnN0YXRlLnllYXJseS5zcGVjaWZpY01vbnRoV2Vlay5tb250aFdlZWsgPSBtb250aFdlZWs7XG4gICAgICB0aGlzLnN0YXRlLnllYXJseS5zcGVjaWZpY01vbnRoV2Vlay5kYXkgPSBkYXk7XG4gICAgICB0aGlzLnN0YXRlLnllYXJseS5zcGVjaWZpY01vbnRoV2Vlay5tb250aCA9IHBhcnNlSW50KG1vbnRoLCAxMCk7XG4gICAgICBjb25zdCBwYXJzZWRIb3VycyA9IHBhcnNlSW50KGhvdXJzLCAxMCk7XG4gICAgICB0aGlzLnN0YXRlLnllYXJseS5zcGVjaWZpY01vbnRoV2Vlay5ob3VycyA9IHRoaXMuZ2V0QW1QbUhvdXIocGFyc2VkSG91cnMpO1xuICAgICAgdGhpcy5zdGF0ZS55ZWFybHkuc3BlY2lmaWNNb250aFdlZWsuaG91clR5cGUgPSB0aGlzLmdldEhvdXJUeXBlKHBhcnNlZEhvdXJzKTtcbiAgICAgIHRoaXMuc3RhdGUueWVhcmx5LnNwZWNpZmljTW9udGhXZWVrLm1pbnV0ZXMgPSBwYXJzZUludChtaW51dGVzLCAxMCk7XG4gICAgICB0aGlzLnN0YXRlLnllYXJseS5zcGVjaWZpY01vbnRoV2Vlay5zZWNvbmRzID0gcGFyc2VJbnQoc2Vjb25kcywgMTApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFjdGl2ZVRhYiA9ICdhZHZhbmNlZCc7XG4gICAgICB0aGlzLnN0YXRlLmFkdmFuY2VkLmV4cHJlc3Npb24gPSBvcmlnQ3JvbjtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNyb25Jc1ZhbGlkKGNyb246IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmIChjcm9uKSB7XG4gICAgICBjb25zdCBjcm9uUGFydHMgPSBjcm9uLnNwbGl0KCcgJyk7XG4gICAgICByZXR1cm4gKHRoaXMuaXNDcm9uRmxhdm9yUXVhcnR6ICYmIChjcm9uUGFydHMubGVuZ3RoID09PSA2XG4gICAgICAgIHx8IGNyb25QYXJ0cy5sZW5ndGggPT09IDcpXG4gICAgICAgIHx8ICh0aGlzLmlzQ3JvbkZsYXZvclN0YW5kYXJkICYmIGNyb25QYXJ0cy5sZW5ndGggPT09IDUpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuXG4gIHByaXZhdGUgZ2V0RGVmYXVsdFN0YXRlKCkge1xuICAgIGNvbnN0IFtkZWZhdWx0SG91cnMsIGRlZmF1bHRNaW51dGVzLCBkZWZhdWx0U2Vjb25kc10gPSB0aGlzLm9wdGlvbnMuZGVmYXVsdFRpbWUuc3BsaXQoJzonKS5tYXAoTnVtYmVyKTtcblxuICAgIHJldHVybiB7XG4gICAgICBtaW51dGVzOiB7XG4gICAgICAgIG1pbnV0ZXM6IDEsXG4gICAgICAgIHNlY29uZHM6IDBcbiAgICAgIH0sXG4gICAgICBob3VybHk6IHtcbiAgICAgICAgaG91cnM6IDEsXG4gICAgICAgIG1pbnV0ZXM6IDAsXG4gICAgICAgIHNlY29uZHM6IDBcbiAgICAgIH0sXG4gICAgICBkYWlseToge1xuICAgICAgICBzdWJUYWI6ICdldmVyeURheXMnLFxuICAgICAgICBldmVyeURheXM6IHtcbiAgICAgICAgICBkYXlzOiAxLFxuICAgICAgICAgIGhvdXJzOiB0aGlzLmdldEFtUG1Ib3VyKGRlZmF1bHRIb3VycyksXG4gICAgICAgICAgbWludXRlczogZGVmYXVsdE1pbnV0ZXMsXG4gICAgICAgICAgc2Vjb25kczogZGVmYXVsdFNlY29uZHMsXG4gICAgICAgICAgaG91clR5cGU6IHRoaXMuZ2V0SG91clR5cGUoZGVmYXVsdEhvdXJzKVxuICAgICAgICB9LFxuICAgICAgICBldmVyeVdlZWtEYXk6IHtcbiAgICAgICAgICBob3VyczogdGhpcy5nZXRBbVBtSG91cihkZWZhdWx0SG91cnMpLFxuICAgICAgICAgIG1pbnV0ZXM6IGRlZmF1bHRNaW51dGVzLFxuICAgICAgICAgIHNlY29uZHM6IGRlZmF1bHRTZWNvbmRzLFxuICAgICAgICAgIGhvdXJUeXBlOiB0aGlzLmdldEhvdXJUeXBlKGRlZmF1bHRIb3VycylcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHdlZWtseToge1xuICAgICAgICBNT046IHRydWUsXG4gICAgICAgIFRVRTogZmFsc2UsXG4gICAgICAgIFdFRDogZmFsc2UsXG4gICAgICAgIFRIVTogZmFsc2UsXG4gICAgICAgIEZSSTogZmFsc2UsXG4gICAgICAgIFNBVDogZmFsc2UsXG4gICAgICAgIFNVTjogZmFsc2UsXG4gICAgICAgIGhvdXJzOiB0aGlzLmdldEFtUG1Ib3VyKGRlZmF1bHRIb3VycyksXG4gICAgICAgIG1pbnV0ZXM6IGRlZmF1bHRNaW51dGVzLFxuICAgICAgICBzZWNvbmRzOiBkZWZhdWx0U2Vjb25kcyxcbiAgICAgICAgaG91clR5cGU6IHRoaXMuZ2V0SG91clR5cGUoZGVmYXVsdEhvdXJzKVxuICAgICAgfSxcbiAgICAgIG1vbnRobHk6IHtcbiAgICAgICAgc3ViVGFiOiAnc3BlY2lmaWNEYXknLFxuICAgICAgICBzcGVjaWZpY0RheToge1xuICAgICAgICAgIGRheTogJzEnLFxuICAgICAgICAgIG1vbnRoczogMSxcbiAgICAgICAgICBob3VyczogdGhpcy5nZXRBbVBtSG91cihkZWZhdWx0SG91cnMpLFxuICAgICAgICAgIG1pbnV0ZXM6IGRlZmF1bHRNaW51dGVzLFxuICAgICAgICAgIHNlY29uZHM6IGRlZmF1bHRTZWNvbmRzLFxuICAgICAgICAgIGhvdXJUeXBlOiB0aGlzLmdldEhvdXJUeXBlKGRlZmF1bHRIb3VycylcbiAgICAgICAgfSxcbiAgICAgICAgc3BlY2lmaWNXZWVrRGF5OiB7XG4gICAgICAgICAgbW9udGhXZWVrOiAnIzEnLFxuICAgICAgICAgIGRheTogJ01PTicsXG4gICAgICAgICAgbW9udGhzOiAxLFxuICAgICAgICAgIGhvdXJzOiB0aGlzLmdldEFtUG1Ib3VyKGRlZmF1bHRIb3VycyksXG4gICAgICAgICAgbWludXRlczogZGVmYXVsdE1pbnV0ZXMsXG4gICAgICAgICAgc2Vjb25kczogZGVmYXVsdFNlY29uZHMsXG4gICAgICAgICAgaG91clR5cGU6IHRoaXMuZ2V0SG91clR5cGUoZGVmYXVsdEhvdXJzKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgeWVhcmx5OiB7XG4gICAgICAgIHN1YlRhYjogJ3NwZWNpZmljTW9udGhEYXknLFxuICAgICAgICBzcGVjaWZpY01vbnRoRGF5OiB7XG4gICAgICAgICAgbW9udGg6IDEsXG4gICAgICAgICAgZGF5OiAnMScsXG4gICAgICAgICAgaG91cnM6IHRoaXMuZ2V0QW1QbUhvdXIoZGVmYXVsdEhvdXJzKSxcbiAgICAgICAgICBtaW51dGVzOiBkZWZhdWx0TWludXRlcyxcbiAgICAgICAgICBzZWNvbmRzOiBkZWZhdWx0U2Vjb25kcyxcbiAgICAgICAgICBob3VyVHlwZTogdGhpcy5nZXRIb3VyVHlwZShkZWZhdWx0SG91cnMpXG4gICAgICAgIH0sXG4gICAgICAgIHNwZWNpZmljTW9udGhXZWVrOiB7XG4gICAgICAgICAgbW9udGhXZWVrOiAnIzEnLFxuICAgICAgICAgIGRheTogJ01PTicsXG4gICAgICAgICAgbW9udGg6IDEsXG4gICAgICAgICAgaG91cnM6IHRoaXMuZ2V0QW1QbUhvdXIoZGVmYXVsdEhvdXJzKSxcbiAgICAgICAgICBtaW51dGVzOiBkZWZhdWx0TWludXRlcyxcbiAgICAgICAgICBzZWNvbmRzOiBkZWZhdWx0U2Vjb25kcyxcbiAgICAgICAgICBob3VyVHlwZTogdGhpcy5nZXRIb3VyVHlwZShkZWZhdWx0SG91cnMpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBhZHZhbmNlZDoge1xuICAgICAgICBleHByZXNzaW9uOiB0aGlzLmlzQ3JvbkZsYXZvclF1YXJ0eiA/ICcwIDE1IDEwIEwtMiAqID8gKicgOiAnMTUgMTAgMiAqIConXG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0T3JkaW5hbFN1ZmZpeCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgaWYgKHZhbHVlLmxlbmd0aCA+IDEpIHtcbiAgICAgIGNvbnN0IHNlY29uZFRvTGFzdERpZ2l0ID0gdmFsdWUuY2hhckF0KHZhbHVlLmxlbmd0aCAtIDIpO1xuICAgICAgaWYgKHNlY29uZFRvTGFzdERpZ2l0ID09PSAnMScpIHtcbiAgICAgICAgcmV0dXJuICd0aCc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgbGFzdERpZ2l0ID0gdmFsdWUuY2hhckF0KHZhbHVlLmxlbmd0aCAtIDEpO1xuICAgIHN3aXRjaCAobGFzdERpZ2l0KSB7XG4gICAgICBjYXNlICcxJzpcbiAgICAgICAgcmV0dXJuICdzdCc7XG4gICAgICBjYXNlICcyJzpcbiAgICAgICAgcmV0dXJuICduZCc7XG4gICAgICBjYXNlICczJzpcbiAgICAgICAgcmV0dXJuICdyZCc7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gJ3RoJztcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldFNlbGVjdE9wdGlvbnMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1vbnRoczogdGhpcy5nZXRSYW5nZSgxLCAxMiksXG4gICAgICBtb250aFdlZWtzOiBbJyMxJywgJyMyJywgJyMzJywgJyM0JywgJyM1JywgJ0wnXSxcbiAgICAgIGRheXM6IFsnTU9OJywgJ1RVRScsICdXRUQnLCAnVEhVJywgJ0ZSSScsICdTQVQnLCAnU1VOJ10sXG4gICAgICBtaW51dGVzOiB0aGlzLmdldFJhbmdlKDAsIDU5KSxcbiAgICAgIGZ1bGxNaW51dGVzOiB0aGlzLmdldFJhbmdlKDAsIDU5KSxcbiAgICAgIHNlY29uZHM6IHRoaXMuZ2V0UmFuZ2UoMCwgNTkpLFxuICAgICAgaG91cnM6IHRoaXMuZ2V0UmFuZ2UoMSwgMjMpLFxuICAgICAgbW9udGhEYXlzOiB0aGlzLmdldFJhbmdlKDEsIDMxKSxcbiAgICAgIG1vbnRoRGF5c1dpdGhMYXN0czogWycxVycsIC4uLlsuLi50aGlzLmdldFJhbmdlKDEsIDMxKS5tYXAoU3RyaW5nKV0sICdMVycsICdMJ10sXG4gICAgICBtb250aERheXNXaXRoT3V0TGFzdHM6IFsuLi5bLi4udGhpcy5nZXRSYW5nZSgxLCAzMSkubWFwKFN0cmluZyldXSxcbiAgICAgIGhvdXJUeXBlczogWydBTScsICdQTSddXG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0UmFuZ2Uoc3RhcnQ6IG51bWJlciwgZW5kOiBudW1iZXIpOiBudW1iZXJbXSB7XG4gICAgY29uc3QgbGVuZ3RoID0gZW5kIC0gc3RhcnQgKyAxO1xuICAgIHJldHVybiBBcnJheS5hcHBseShudWxsLCBBcnJheShsZW5ndGgpKS5tYXAoKF8sIGkpID0+IGkgKyBzdGFydCk7XG4gIH1cblxuXG4gIC8qXG4gICAqIENvbnRyb2xWYWx1ZUFjY2Vzc29yXG4gICAqL1xuICBvbkNoYW5nZSA9IChfOiBhbnkpID0+IHtcbiAgfTtcbiAgb25Ub3VjaGVkID0gKCkgPT4ge1xuICB9O1xuXG4gIHdyaXRlVmFsdWUob2JqOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmNyb24gPSBvYmo7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xuICB9XG5cbn1cbiIsIjxzZWN0aW9uIGNsYXNzPVwiY3Jvbi1lZGl0b3ItbWFpblwiPlxuICAgIDxtYXQtdGFiLWdyb3VwIGNsYXNzPVwiY3Jvbi1lZGl0b3ItY29udGFpbmVyXCIgKHNlbGVjdGVkSW5kZXhDaGFuZ2UpPVwib25UYWJGb2N1cygkZXZlbnQpXCIgW2JhY2tncm91bmRDb2xvcl09XCJiYWNrZ3JvdW5kQ29sb3JcIiBbY29sb3JdPVwiY29sb3JcIj5cblxuICAgICAgPCEtLSBNaW51dGUgLS0+XG4gICAgICA8bWF0LXRhYiBjbGFzcz1cImNyb24tZWRpdG9yLXRhYlwiIGxhYmVsPVwiTWludXRlc1wiICpuZ0lmPVwiIW9wdGlvbnMuaGlkZU1pbnV0ZXNUYWJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNyb24tZWRpdG9yLXRhYi1jb250ZW50XCI+XG5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImNyb24tZm9ybS1sYWJlbFwiPkV2ZXJ5IDwvc3Bhbj5cblxuICAgICAgICAgICAgPGNyb24tdGltZS1waWNrZXJcbiAgICAgICAgICAgICAgW2Zvcm1Hcm91cF09XCJtaW51dGVzRm9ybVwiXG4gICAgICAgICAgICAgIFt1c2UyNEhvdXJUaW1lXT1cIm9wdGlvbnMudXNlMjRIb3VyVGltZVwiXG4gICAgICAgICAgICAgIFtoaWRlSG91cnNdPVwidHJ1ZVwiXG4gICAgICAgICAgICAgIFtoaWRlU2Vjb25kc109XCJvcHRpb25zLmhpZGVTZWNvbmRzIHx8ICFpc0Nyb25GbGF2b3JRdWFydHpcIj5cbiAgICAgICAgICAgIDwvY3Jvbi10aW1lLXBpY2tlcj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21hdC10YWI+XG5cbiAgICAgIDwhLS0gSG91cmx5IC0tPlxuICAgICAgPG1hdC10YWIgY2xhc3M9XCJjcm9uLWVkaXRvci10YWJcIiBsYWJlbD1cIkhvdXJseVwiICpuZ0lmPVwiIW9wdGlvbnMuaGlkZUhvdXJseVRhYlwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY3Jvbi1lZGl0b3ItdGFiLWNvbnRlbnRcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImNyb24tZm9ybS1sYWJlbFwiPkV2ZXJ5IDwvc3Bhbj5cblxuICAgICAgICAgIDxjcm9uLXRpbWUtcGlja2VyIFtmb3JtR3JvdXBdPVwiaG91cmx5Rm9ybVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbdXNlMjRIb3VyVGltZV09XCJvcHRpb25zLnVzZTI0SG91clRpbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2hpZGVTZWNvbmRzXT1cIm9wdGlvbnMuaGlkZVNlY29uZHMgfHwgICFpc0Nyb25GbGF2b3JRdWFydHpcIj5cbiAgICAgICAgICA8L2Nyb24tdGltZS1waWNrZXI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tYXQtdGFiPlxuXG5cbiAgICAgIDwhLS0gRGFpbHktLT5cbiAgICAgIDxtYXQtdGFiIGNsYXNzPVwiY3Jvbi1lZGl0b3ItdGFiXCIgbGFiZWw9XCJEYWlseVwiICpuZ0lmPVwiIW9wdGlvbnMuaGlkZURhaWx5VGFiXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjcm9uLWVkaXRvci10YWItY29udGVudFwiIFtmb3JtR3JvdXBdPVwiZGFpbHlGb3JtXCI+XG5cbiAgICAgICAgICA8bWF0LXJhZGlvLWdyb3VwIGNsYXNzPVwiY3Jvbi1lZGl0b3ItcmFkaW8tZ3JvdXBcIiBmb3JtQ29udHJvbE5hbWU9XCJzdWJUYWJcIj5cbiAgICAgICAgICAgIDxtYXQtcmFkaW8tYnV0dG9uIG5hbWU9XCJzdWJUYWJcIiBjbGFzcz1cImNyb24tZWRpdG9yLXJhZGlvLWJ1dHRvblwiIHZhbHVlPVwiZXZlcnlEYXlzXCIgY2hlY2tlZD1cImNoZWNrZWRcIj5cblxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNyb24tZm9ybS1sYWJlbFwiPkV2ZXJ5IDwvc3Bhbj5cblxuICAgICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgZm9ybUdyb3VwTmFtZT1cImV2ZXJ5RGF5c1wiPlxuICAgICAgICAgICAgICAgIDxtYXQtbGFiZWw+RGF5KHMpPC9tYXQtbGFiZWw+XG4gICAgICAgICAgICAgICAgPG1hdC1zZWxlY3QgZm9ybUNvbnRyb2xOYW1lPVwiZGF5c1wiPlxuICAgICAgICAgICAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IG1vbnRoRGF5IG9mIHNlbGVjdE9wdGlvbnMubW9udGhEYXlzXCIgW3ZhbHVlXT1cIm1vbnRoRGF5XCI+XG4gICAgICAgICAgICAgICAgICAgIHt7bW9udGhEYXl9fVxuICAgICAgICAgICAgICAgICAgPC9tYXQtb3B0aW9uPlxuICAgICAgICAgICAgICAgIDwvbWF0LXNlbGVjdD5cbiAgICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cblxuICAgICAgICAgICAgICAgYXRcblxuICAgICAgICAgICAgICA8Y3Jvbi10aW1lLXBpY2tlclxuICAgICAgICAgICAgICAgIGZvcm1Hcm91cE5hbWU9XCJldmVyeURheXNcIlxuICAgICAgICAgICAgICAgIFt1c2UyNEhvdXJUaW1lXT1cIm9wdGlvbnMudXNlMjRIb3VyVGltZVwiXG4gICAgICAgICAgICAgICAgW2hpZGVTZWNvbmRzXT1cIm9wdGlvbnMuaGlkZVNlY29uZHMgfHwgIWlzQ3JvbkZsYXZvclF1YXJ0elwiPlxuICAgICAgICAgICAgICA8L2Nyb24tdGltZS1waWNrZXI+XG5cbiAgICAgICAgICAgIDwvbWF0LXJhZGlvLWJ1dHRvbj5cblxuICAgICAgICAgICAgPG1hdC1yYWRpby1idXR0b24gbmFtZT1cInN1YlRhYlwiIGNsYXNzPVwiY3Jvbi1lZGl0b3ItcmFkaW8tYnV0dG9uXCIgdmFsdWU9XCJldmVyeVdlZWtEYXlcIj5cblxuICAgICAgICAgICAgICA8c3Bhbj5XZWVrIERheSAoTU9OLUZSSSkgYXQgPC9zcGFuPlxuXG4gICAgICAgICAgICAgIDxjcm9uLXRpbWUtcGlja2VyXG4gICAgICAgICAgICAgICAgZm9ybUdyb3VwTmFtZT1cImV2ZXJ5V2Vla0RheVwiXG4gICAgICAgICAgICAgICAgW3VzZTI0SG91clRpbWVdPVwib3B0aW9ucy51c2UyNEhvdXJUaW1lXCJcbiAgICAgICAgICAgICAgICBbaGlkZVNlY29uZHNdPVwib3B0aW9ucy5oaWRlU2Vjb25kcyB8fCAhaXNDcm9uRmxhdm9yUXVhcnR6XCI+XG4gICAgICAgICAgICAgIDwvY3Jvbi10aW1lLXBpY2tlcj5cblxuICAgICAgICAgICAgPC9tYXQtcmFkaW8tYnV0dG9uPlxuICAgICAgICAgIDwvbWF0LXJhZGlvLWdyb3VwPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgPC9tYXQtdGFiPlxuXG4gICAgICA8IS0tIFdlZWtseS0tPlxuICAgICAgPG1hdC10YWIgIGNsYXNzPVwiY3Jvbi1lZGl0b3ItdGFiXCIgbGFiZWw9XCJXZWVrbHlcIiAqbmdJZj1cIiFvcHRpb25zLmhpZGVXZWVrbHlUYWJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNyb24tZWRpdG9yLXRhYi1jb250ZW50XCI+XG5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImNyb24tZm9ybS1sYWJlbFwiPkV2ZXJ5IDwvc3Bhbj5cblxuICAgICAgICAgIDxkaXYgW2Zvcm1Hcm91cF09XCJ3ZWVrbHlGb3JtXCI+XG4gICAgICAgICAgICA8bWF0LWNoZWNrYm94IGNsYXNzPVwiY2hlY2tib3gtbWFyZ2luXCIgZm9ybUNvbnRyb2xOYW1lPVwiTU9OXCI+TW9uZGF5PC9tYXQtY2hlY2tib3g+XG4gICAgICAgICAgICA8bWF0LWNoZWNrYm94IGNsYXNzPVwiY2hlY2tib3gtbWFyZ2luXCIgZm9ybUNvbnRyb2xOYW1lPVwiVFVFXCI+VHVlc2RheTwvbWF0LWNoZWNrYm94PlxuICAgICAgICAgICAgPG1hdC1jaGVja2JveCBjbGFzcz1cImNoZWNrYm94LW1hcmdpblwiIGZvcm1Db250cm9sTmFtZT1cIldFRFwiPldlZG5lc2RheTwvbWF0LWNoZWNrYm94PlxuICAgICAgICAgICAgPG1hdC1jaGVja2JveCBjbGFzcz1cImNoZWNrYm94LW1hcmdpblwiIGZvcm1Db250cm9sTmFtZT1cIlRIVVwiPlRodXJzZGF5PC9tYXQtY2hlY2tib3g+XG4gICAgICAgICAgICA8bWF0LWNoZWNrYm94IGNsYXNzPVwiY2hlY2tib3gtbWFyZ2luXCIgZm9ybUNvbnRyb2xOYW1lPVwiRlJJXCI+RnJpZGF5PC9tYXQtY2hlY2tib3g+XG4gICAgICAgICAgICA8bWF0LWNoZWNrYm94IGNsYXNzPVwiY2hlY2tib3gtbWFyZ2luXCIgZm9ybUNvbnRyb2xOYW1lPVwiU0FUXCI+U2F0dXJkYXk8L21hdC1jaGVja2JveD5cbiAgICAgICAgICAgIDxtYXQtY2hlY2tib3ggY2xhc3M9XCJjaGVja2JveC1tYXJnaW5cIiBmb3JtQ29udHJvbE5hbWU9XCJTVU5cIj5TdW5kYXk8L21hdC1jaGVja2JveD5cbiAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJjcm9uLWZvcm0tbGFiZWxcIj5hdCB0aW1lIDwvc3Bhbj5cblxuICAgICAgICAgIDxjcm9uLXRpbWUtcGlja2VyIFtmb3JtR3JvdXBdPVwid2Vla2x5Rm9ybVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW3VzZTI0SG91clRpbWVdPVwib3B0aW9ucy51c2UyNEhvdXJUaW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbaGlkZVNlY29uZHNdPVwib3B0aW9ucy5oaWRlU2Vjb25kc3x8ICFpc0Nyb25GbGF2b3JRdWFydHpcIj5cbiAgICAgICAgICA8L2Nyb24tdGltZS1waWNrZXI+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgPC9tYXQtdGFiPlxuXG4gICAgICA8IS0tIE1vbnRobHktLT5cbiAgICAgIDxtYXQtdGFiIGNsYXNzPVwiY3Jvbi1lZGl0b3ItdGFiXCIgbGFiZWw9XCJNb250aGx5XCIgKm5nSWY9XCIhb3B0aW9ucy5oaWRlTW9udGhseVRhYlwiPlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjcm9uLWVkaXRvci10YWItY29udGVudFwiIFtmb3JtR3JvdXBdPVwibW9udGhseUZvcm1cIj5cblxuXG4gICAgICAgICAgPG1hdC1yYWRpby1ncm91cCBmb3JtQ29udHJvbE5hbWU9XCJzdWJUYWJcIj5cblxuICAgICAgICAgICAgPG1hdC1yYWRpby1idXR0b24gIG5hbWU9XCJtb250aGx5LXJhZGlvXCIgdmFsdWU9XCJzcGVjaWZpY0RheVwiID5cblxuICAgICAgICAgICAgICA8IS0tIFNwZXNpZmljIGRheSAtLT5cbiAgICAgICAgICAgICAgPHNwYW4gZm9ybUdyb3VwTmFtZT1cInNwZWNpZmljRGF5XCI+XG5cbiAgICAgICAgICAgICAgICBPbiB0aGVcblxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJvcHRpb25zLmNyb25GbGF2b3IgPT09ICdxdWFydHonXCI+XG4gICAgICAgICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgICAgICAgICAgICAgICAgIDxtYXQtbGFiZWw+RGF5PC9tYXQtbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxtYXQtc2VsZWN0IGNsYXNzPVwibW9udGgtZGF5c1wiIGZvcm1Db250cm9sTmFtZT1cImRheVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gKm5nRm9yPVwibGV0IG1vbnRoRGF5c1dpdGhMYXN0IG9mIHNlbGVjdE9wdGlvbnMubW9udGhEYXlzV2l0aExhc3RzXCIgW3ZhbHVlXT1cIm1vbnRoRGF5c1dpdGhMYXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7e21vbnRoRGF5RGlzcGxheShtb250aERheXNXaXRoTGFzdCl9fVxuICAgICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8L21hdC1zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIm9wdGlvbnMuY3JvbkZsYXZvciA9PT0gJ3N0YW5kYXJkJ1wiPlxuICAgICAgICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgICAgICAgICAgICAgICAgICA8bWF0LWxhYmVsPkRheTwvbWF0LWxhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8bWF0LXNlbGVjdCBjbGFzcz1cIm1vbnRoLWRheXNcIiAgZm9ybUNvbnRyb2xOYW1lPVwiZGF5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IG1vbnRoRGF5c1dpdGhPdXRMYXN0IG9mIHNlbGVjdE9wdGlvbnMubW9udGhEYXlzV2l0aE91dExhc3RzXCIgW3ZhbHVlXT1cIm1vbnRoRGF5c1dpdGhPdXRMYXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7e21vbnRoRGF5RGlzcGxheShtb250aERheXNXaXRoT3V0TGFzdCl9fVxuICAgICAgICAgICAgICAgICAgICAgIDwvbWF0LW9wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9tYXQtc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgIG9mIGV2ZXJ5XG5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgICAgICAgICAgICAgICAgICA8bWF0LWxhYmVsPk1vbnRoPC9tYXQtbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxtYXQtc2VsZWN0IGNsYXNzPVwibW9udGhzLXNtYWxsXCIgZm9ybUNvbnRyb2xOYW1lPVwibW9udGhzXCIgW25nQ2xhc3NdPVwib3B0aW9ucy5mb3JtU2VsZWN0Q2xhc3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgbW9udGggb2Ygc2VsZWN0T3B0aW9ucy5tb250aHNcIiBbdmFsdWVdPVwibW9udGhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7bW9udGh9fVxuICAgICAgICAgICAgICAgICAgICAgIDwvbWF0LW9wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9tYXQtc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgIGF0IHRpbWVcblxuICAgICAgICAgICAgICAgIDxjcm9uLXRpbWUtcGlja2VyIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiIFtmb3JtR3JvdXBdPVwibW9udGhseUZvcm0uY29udHJvbHMuc3BlY2lmaWNEYXlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt1c2UyNEhvdXJUaW1lXT1cIm9wdGlvbnMudXNlMjRIb3VyVGltZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2hpZGVTZWNvbmRzXT1cIm9wdGlvbnMuaGlkZVNlY29uZHMgfHwgIWlzQ3JvbkZsYXZvclF1YXJ0elwiPlxuICAgICAgICAgICAgICAgIDwvY3Jvbi10aW1lLXBpY2tlcj5cbiAgICAgICAgICAgICAgPC9zcGFuPlxuXG5cbiAgICAgICAgICAgIDwvbWF0LXJhZGlvLWJ1dHRvbj5cblxuICAgICAgICAgICAgPG1hdC1yYWRpby1idXR0b24gIG5hbWU9XCJtb250aGx5LXJhZGlvXCIgdmFsdWU9XCJzcGVjaWZpY1dlZWtEYXlcIj5cblxuICAgICAgICAgICAgICA8IS0tIFNwZXNpZmljIFdlZWsgZGF5IC0tPlxuICAgICAgICAgICAgICA8c3BhbiBmb3JtR3JvdXBOYW1lPVwic3BlY2lmaWNXZWVrRGF5XCI+XG5cbiAgICAgICAgICAgICAgICBPbiB0aGVcblxuICAgICAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICAgICAgICAgICAgICAgIDxtYXQtbGFiZWw+V2VlazwvbWF0LWxhYmVsPlxuICAgICAgICAgICAgICAgICAgPG1hdC1zZWxlY3QgY2xhc3M9XCJkYXktb3JkZXItaW4tbW9udGhcIiBmb3JtQ29udHJvbE5hbWU9XCJtb250aFdlZWtcIiBbbmdDbGFzc109XCJvcHRpb25zLmZvcm1TZWxlY3RDbGFzc1wiPlxuICAgICAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgbW9udGhXZWVrIG9mIHNlbGVjdE9wdGlvbnMubW9udGhXZWVrc1wiIFt2YWx1ZV09XCJtb250aFdlZWtcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7e21vbnRoV2Vla0Rpc3BsYXkobW9udGhXZWVrKX19XG4gICAgICAgICAgICAgICAgICAgIDwvbWF0LW9wdGlvbj5cbiAgICAgICAgICAgICAgICAgIDwvbWF0LXNlbGVjdD5cbiAgICAgICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxuXG4gICAgICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgICAgICAgICAgICAgICAgPG1hdC1sYWJlbD5EYXk8L21hdC1sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxtYXQtc2VsZWN0IGNsYXNzPVwid2Vlay1kYXlzXCIgZm9ybUNvbnRyb2xOYW1lPVwiZGF5XCIgW25nQ2xhc3NdPVwib3B0aW9ucy5mb3JtU2VsZWN0Q2xhc3NcIj5cbiAgICAgICAgICAgICAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IGRheSBvZiBzZWxlY3RPcHRpb25zLmRheXNcIiBbdmFsdWVdPVwiZGF5XCI+XG4gICAgICAgICAgICAgICAgICAgICAge3tkYXlEaXNwbGF5KGRheSl9fVxuICAgICAgICAgICAgICAgICAgICA8L21hdC1vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8L21hdC1zZWxlY3Q+XG4gICAgICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cblxuICAgICAgICAgICAgICAgIG9mIGV2ZXJ5XG5cbiAgICAgICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgICAgICAgICAgICAgICA8bWF0LWxhYmVsPk1vbnRoPC9tYXQtbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8bWF0LXNlbGVjdCBjbGFzcz1cIm1vbnRocy1zbWFsbFwiIGZvcm1Db250cm9sTmFtZT1cIm1vbnRoc1wiPlxuICAgICAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgbW9udGggb2Ygc2VsZWN0T3B0aW9ucy5tb250aHNcIiBbdmFsdWVdPVwibW9udGhcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7e21vbnRofX1cbiAgICAgICAgICAgICAgICAgICAgPC9tYXQtb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgPC9tYXQtc2VsZWN0PlxuICAgICAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG5cbiAgICAgICAgICAgICAgICBhdCB0aW1lXG5cbiAgICAgICAgICAgICAgICA8Y3Jvbi10aW1lLXBpY2tlciBbZm9ybUdyb3VwXT1cIm1vbnRobHlGb3JtLmNvbnRyb2xzLnNwZWNpZmljV2Vla0RheVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3VzZTI0SG91clRpbWVdPVwib3B0aW9ucy51c2UyNEhvdXJUaW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbaGlkZVNlY29uZHNdPVwib3B0aW9ucy5oaWRlU2Vjb25kcyB8fCAhaXNDcm9uRmxhdm9yUXVhcnR6XCI+XG5cbiAgICAgICAgICAgICAgICA8L2Nyb24tdGltZS1waWNrZXI+XG5cblxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L21hdC1yYWRpby1idXR0b24+XG5cbiAgICAgICAgICA8L21hdC1yYWRpby1ncm91cD5cblxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWF0LXRhYj5cblxuICAgICAgPCEtLSBZZWFybHktLT5cbiAgICAgIDxtYXQtdGFiIGNsYXNzPVwiY3Jvbi1lZGl0b3ItdGFiXCIgIGxhYmVsPVwiWWVhcmx5XCIgKm5nSWY9XCIhb3B0aW9ucy5oaWRlWWVhcmx5VGFiXCI+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNyb24tZWRpdG9yLXRhYi1jb250ZW50XCIgW2Zvcm1Hcm91cF09XCJ5ZWFybHlGb3JtXCI+XG5cbiAgICAgICAgICA8bWF0LXJhZGlvLWdyb3VwIGZvcm1Db250cm9sTmFtZT1cInN1YlRhYlwiPlxuXG4gICAgICAgICAgICA8bWF0LXJhZGlvLWJ1dHRvbiBuYW1lPVwieWVhcmx5LXJhZGlvXCIgdmFsdWU9XCJzcGVjaWZpY01vbnRoRGF5XCI+XG5cbiAgICAgICAgICAgICAgT24gdGhlXG5cbiAgICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGZvcm1Hcm91cE5hbWU9XCJzcGVjaWZpY01vbnRoRGF5XCIgKm5nSWY9XCJvcHRpb25zLmNyb25GbGF2b3IgPT09ICdxdWFydHonXCI+XG4gICAgICAgICAgICAgICAgPG1hdC1sYWJlbD5EYXk8L21hdC1sYWJlbD5cbiAgICAgICAgICAgICAgICA8bWF0LXNlbGVjdCBjbGFzcz1cIm1vbnRoLWRheXNcIiBmb3JtQ29udHJvbE5hbWU9XCJkYXlcIj5cbiAgICAgICAgICAgICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBtb250aERheXNXaXRoTGFzdCBvZiBzZWxlY3RPcHRpb25zLm1vbnRoRGF5c1dpdGhMYXN0c1wiIFt2YWx1ZV09XCJtb250aERheXNXaXRoTGFzdFwiPlxuICAgICAgICAgICAgICAgICAgICB7e21vbnRoRGF5RGlzcGxheShtb250aERheXNXaXRoTGFzdCl9fVxuICAgICAgICAgICAgICAgICAgPC9tYXQtb3B0aW9uPlxuICAgICAgICAgICAgICAgIDwvbWF0LXNlbGVjdD5cbiAgICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cblxuICAgICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgZm9ybUdyb3VwTmFtZT1cInNwZWNpZmljTW9udGhEYXlcIiAqbmdJZj1cIm9wdGlvbnMuY3JvbkZsYXZvciA9PT0gJ3N0YW5kYXJkJ1wiPlxuICAgICAgICAgICAgICAgIDxtYXQtbGFiZWw+RGF5PC9tYXQtbGFiZWw+XG4gICAgICAgICAgICAgICAgPG1hdC1zZWxlY3QgY2xhc3M9XCJtb250aC1kYXlzXCIgZm9ybUNvbnRyb2xOYW1lPVwiZGF5XCIgPlxuICAgICAgICAgICAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IG1vbnRoRGF5c1dpdGhPdXRMYXN0IG9mIHNlbGVjdE9wdGlvbnMubW9udGhEYXlzV2l0aE91dExhc3RzXCIgW3ZhbHVlXT1cIm1vbnRoRGF5c1dpdGhPdXRMYXN0XCI+XG4gICAgICAgICAgICAgICAgICAgIHt7bW9udGhEYXlEaXNwbGF5KG1vbnRoRGF5c1dpdGhPdXRMYXN0KX19XG4gICAgICAgICAgICAgICAgICA8L21hdC1vcHRpb24+XG4gICAgICAgICAgICAgICAgPC9tYXQtc2VsZWN0PlxuICAgICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxuXG4gICAgICAgICAgICAgIG9mXG5cbiAgICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGZvcm1Hcm91cE5hbWU9XCJzcGVjaWZpY01vbnRoRGF5XCI+XG4gICAgICAgICAgICAgICAgPG1hdC1sYWJlbD5Nb250aDwvbWF0LWxhYmVsPlxuICAgICAgICAgICAgICAgIDxtYXQtc2VsZWN0IGNsYXNzPVwibW9udGhzXCIgZm9ybUNvbnRyb2xOYW1lPVwibW9udGhcIj5cbiAgICAgICAgICAgICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBtb250aCBvZiBzZWxlY3RPcHRpb25zLm1vbnRoc1wiIFt2YWx1ZV09XCJtb250aFwiPlxuICAgICAgICAgICAgICAgICAgICB7e21vbnRoRGlzcGxheShtb250aCl9fVxuICAgICAgICAgICAgICAgICAgPC9tYXQtb3B0aW9uPlxuICAgICAgICAgICAgICAgIDwvbWF0LXNlbGVjdD5cbiAgICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cblxuICAgICAgICAgICAgICBhdCB0aW1lXG5cbiAgICAgICAgICAgICAgPGNyb24tdGltZS1waWNrZXIgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Zvcm1Hcm91cF09XCJ5ZWFybHlGb3JtLmNvbnRyb2xzLnNwZWNpZmljTW9udGhEYXlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbdXNlMjRIb3VyVGltZV09XCJvcHRpb25zLnVzZTI0SG91clRpbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbaGlkZVNlY29uZHNdPVwib3B0aW9ucy5oaWRlU2Vjb25kcyB8fCAhaXNDcm9uRmxhdm9yUXVhcnR6XCI+XG4gICAgICAgICAgICAgIDwvY3Jvbi10aW1lLXBpY2tlcj5cbiAgICAgICAgICAgIDwvbWF0LXJhZGlvLWJ1dHRvbj5cblxuICAgICAgICAgICAgPG1hdC1yYWRpby1idXR0b24gbmFtZT1cInllYXJseS1yYWRpb1wiIHZhbHVlPVwic3BlY2lmaWNNb250aFdlZWtcIiBbbmdDbGFzc109XCJzdGF0ZS5mb3JtUmFkaW9DbGFzc1wiPlxuXG4gICAgICAgICAgICAgIE9uIHRoZVxuXG4gICAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBmb3JtR3JvdXBOYW1lPVwic3BlY2lmaWNNb250aFdlZWtcIj5cbiAgICAgICAgICAgICAgICA8bWF0LWxhYmVsPldlZWs8L21hdC1sYWJlbD5cbiAgICAgICAgICAgICAgICA8bWF0LXNlbGVjdCBjbGFzcz1cImRheS1vcmRlci1pbi1tb250aFwiIGZvcm1Db250cm9sTmFtZT1cIm1vbnRoV2Vla1wiID5cbiAgICAgICAgICAgICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBtb250aFdlZWsgb2Ygc2VsZWN0T3B0aW9ucy5tb250aFdlZWtzXCIgW3ZhbHVlXT1cIm1vbnRoV2Vla1wiPlxuICAgICAgICAgICAgICAgICAgICB7e21vbnRoV2Vla0Rpc3BsYXkobW9udGhXZWVrKX19XG4gICAgICAgICAgICAgICAgICA8L21hdC1vcHRpb24+XG4gICAgICAgICAgICAgICAgPC9tYXQtc2VsZWN0PlxuICAgICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxuXG4gICAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBmb3JtR3JvdXBOYW1lPVwic3BlY2lmaWNNb250aFdlZWtcIj5cbiAgICAgICAgICAgICAgICA8bWF0LWxhYmVsPkRheTwvbWF0LWxhYmVsPlxuICAgICAgICAgICAgICAgIDxtYXQtc2VsZWN0IGNsYXNzPVwid2Vlay1kYXlzXCIgIGZvcm1Db250cm9sTmFtZT1cImRheVwiID5cbiAgICAgICAgICAgICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBkYXkgb2Ygc2VsZWN0T3B0aW9ucy5kYXlzXCIgW3ZhbHVlXT1cImRheVwiPlxuICAgICAgICAgICAgICAgICAgICB7e2RheURpc3BsYXkoZGF5KX19XG4gICAgICAgICAgICAgICAgICA8L21hdC1vcHRpb24+XG4gICAgICAgICAgICAgICAgPC9tYXQtc2VsZWN0PlxuICAgICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxuXG4gICAgICAgICAgICAgIG9mXG5cbiAgICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGZvcm1Hcm91cE5hbWU9XCJzcGVjaWZpY01vbnRoV2Vla1wiPlxuICAgICAgICAgICAgICAgIDxtYXQtbGFiZWw+TW9udGg8L21hdC1sYWJlbD5cbiAgICAgICAgICAgICAgICA8bWF0LXNlbGVjdCBjbGFzcz1cIm1vbnRoc1wiIGZvcm1Db250cm9sTmFtZT1cIm1vbnRoXCI+XG4gICAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgbW9udGggb2Ygc2VsZWN0T3B0aW9ucy5tb250aHNcIiBbdmFsdWVdPVwibW9udGhcIj5cbiAgICAgICAgICAgICAgICAgICAge3ttb250aERpc3BsYXkobW9udGgpfX1cbiAgICAgICAgICAgICAgICAgIDwvbWF0LW9wdGlvbj5cbiAgICAgICAgICAgICAgICA8L21hdC1zZWxlY3Q+XG4gICAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG5cbiAgICAgICAgICAgICAgYXQgdGltZVxuXG4gICAgICAgICAgICAgIDxjcm9uLXRpbWUtcGlja2VyIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtmb3JtR3JvdXBdPVwieWVhcmx5Rm9ybS5jb250cm9scy5zcGVjaWZpY01vbnRoV2Vla1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt1c2UyNEhvdXJUaW1lXT1cIm9wdGlvbnMudXNlMjRIb3VyVGltZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtoaWRlU2Vjb25kc109XCJvcHRpb25zLmhpZGVTZWNvbmRzIHx8ICFpc0Nyb25GbGF2b3JRdWFydHpcIj5cbiAgICAgICAgICAgICAgPC9jcm9uLXRpbWUtcGlja2VyPlxuICAgICAgICAgICAgPC9tYXQtcmFkaW8tYnV0dG9uPlxuICAgICAgICAgIDwvbWF0LXJhZGlvLWdyb3VwPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWF0LXRhYj5cblxuICAgICAgPCEtLSBBZHZhbmNlZC0tPlxuICAgICAgPG1hdC10YWIgY2xhc3M9XCJjcm9uLWVkaXRvci10YWJcIiBsYWJlbD1cIkFkdmFuY2VkXCIgKm5nSWY9XCIhb3B0aW9ucy5oaWRlQWR2YW5jZWRUYWJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNyb24tZWRpdG9yLXRhYi1jb250ZW50XCIgW2Zvcm1Hcm91cF09XCJhZHZhbmNlZEZvcm1cIj5cblxuICAgICAgICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICAgICAgICAgIDxtYXQtbGFiZWw+RXhwcmVzc2lvbjwvbWF0LWxhYmVsPlxuICAgICAgICAgICAgPGlucHV0IG1hdElucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJhZHZhbmNlZC1jcm9uLWVkaXRvci1pbnB1dFwiIGZvcm1Db250cm9sTmFtZT1cImV4cHJlc3Npb25cIj5cbiAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWF0LXRhYj5cbiAgICA8L21hdC10YWItZ3JvdXA+XG48L3NlY3Rpb24+XG4iXX0=