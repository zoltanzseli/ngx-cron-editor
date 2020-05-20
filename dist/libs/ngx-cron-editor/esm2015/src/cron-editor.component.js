import { __awaiter } from "tslib";
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
    const ctx_r0 = i0.ɵɵnextContext();
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
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("formGroup", ctx_r1.hourlyForm)("use24HourTime", ctx_r1.options.use24HourTime)("hideSeconds", ctx_r1.options.hideSeconds || !ctx_r1.isCronFlavorQuartz);
} }
function CronGenComponent_mat_tab_4_mat_option_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 25);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const monthDay_r8 = ctx.$implicit;
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
    const ctx_r2 = i0.ɵɵnextContext();
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
    const ctx_r3 = i0.ɵɵnextContext();
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
    const monthDaysWithLast_r16 = ctx.$implicit;
    const ctx_r15 = i0.ɵɵnextContext(3);
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
    const ctx_r9 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngForOf", ctx_r9.selectOptions.monthDaysWithLasts);
} }
function CronGenComponent_mat_tab_6_ng_container_7_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 25);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const monthDaysWithOutLast_r18 = ctx.$implicit;
    const ctx_r17 = i0.ɵɵnextContext(3);
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
    const ctx_r10 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngForOf", ctx_r10.selectOptions.monthDaysWithOutLasts);
} }
function CronGenComponent_mat_tab_6_mat_option_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 25);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const month_r19 = ctx.$implicit;
    i0.ɵɵproperty("value", month_r19);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", month_r19, " ");
} }
function CronGenComponent_mat_tab_6_mat_option_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 25);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const monthWeek_r20 = ctx.$implicit;
    const ctx_r12 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("value", monthWeek_r20);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r12.monthWeekDisplay(monthWeek_r20), " ");
} }
function CronGenComponent_mat_tab_6_mat_option_29_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 25);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const day_r21 = ctx.$implicit;
    const ctx_r13 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("value", day_r21);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r13.dayDisplay(day_r21), " ");
} }
function CronGenComponent_mat_tab_6_mat_option_35_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 25);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const month_r22 = ctx.$implicit;
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
    const ctx_r4 = i0.ɵɵnextContext();
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
    const monthDaysWithLast_r30 = ctx.$implicit;
    const ctx_r29 = i0.ɵɵnextContext(3);
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
    const ctx_r23 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngForOf", ctx_r23.selectOptions.monthDaysWithLasts);
} }
function CronGenComponent_mat_tab_7_mat_form_field_6_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 25);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const monthDaysWithOutLast_r32 = ctx.$implicit;
    const ctx_r31 = i0.ɵɵnextContext(3);
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
    const ctx_r24 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngForOf", ctx_r24.selectOptions.monthDaysWithOutLasts);
} }
function CronGenComponent_mat_tab_7_mat_option_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 25);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const month_r33 = ctx.$implicit;
    const ctx_r25 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("value", month_r33);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r25.monthDisplay(month_r33), " ");
} }
function CronGenComponent_mat_tab_7_mat_option_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 25);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const monthWeek_r34 = ctx.$implicit;
    const ctx_r26 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("value", monthWeek_r34);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r26.monthWeekDisplay(monthWeek_r34), " ");
} }
function CronGenComponent_mat_tab_7_mat_option_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 25);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const day_r35 = ctx.$implicit;
    const ctx_r27 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("value", day_r35);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r27.dayDisplay(day_r35), " ");
} }
function CronGenComponent_mat_tab_7_mat_option_32_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 25);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const month_r36 = ctx.$implicit;
    const ctx_r28 = i0.ɵɵnextContext(2);
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
    const ctx_r5 = i0.ɵɵnextContext();
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
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("formGroup", ctx_r6.advancedForm);
} }
export const CRON_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CronGenComponent),
    multi: true,
};
export class CronGenComponent {
    constructor(fb) {
        this.fb = fb;
        this.selectOptions = this.getSelectOptions();
        this.localCron = '0 0 1/1 * *';
        /*
         * ControlValueAccessor
         */
        this.onChange = (_) => {
        };
        this.onTouched = () => {
        };
    }
    get cron() {
        return this.localCron;
    }
    set cron(value) {
        this.localCron = value;
        this.onChange(value);
    }
    get isCronFlavorQuartz() {
        return this.options.cronFlavor === 'quartz';
    }
    get isCronFlavorStandard() {
        return this.options.cronFlavor === 'standard';
    }
    get yearDefaultChar() {
        return this.options.cronFlavor === 'quartz' ? '*' : '';
    }
    get weekDayDefaultChar() {
        return this.options.cronFlavor === 'quartz' ? '?' : '*';
    }
    get monthDayDefaultChar() {
        return this.options.cronFlavor === 'quartz' ? '?' : '*';
    }
    /* Update the cron output to that of the selected tab.
     * The cron output value is updated whenever a form is updated. To make it change in response to tab selection, we simply reset
     * the value of the form that goes into focus. */
    onTabFocus(idx) {
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
    }
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            this.state = this.getDefaultState();
            this.handleModelChange(this.cron);
            const [defaultHours, defaultMinutes, defaultSeconds] = this.options.defaultTime.split(':').map(Number);
            this.cronForm = new FormControl('0 0 1/1 * *');
            this.minutesForm = this.fb.group({
                hours: [0],
                minutes: [1],
                seconds: [0]
            });
            this.minutesForm.valueChanges.subscribe(value => this.computeMinutesCron(value));
            this.hourlyForm = this.fb.group({
                hours: [1],
                minutes: [0],
                seconds: [0]
            });
            this.hourlyForm.valueChanges.subscribe(value => this.computeHourlyCron(value));
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
            this.dailyForm.valueChanges.subscribe(value => this.computeDailyCron(value));
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
            this.weeklyForm.valueChanges.subscribe(next => this.computeWeeklyCron(next));
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
            this.monthlyForm.valueChanges.subscribe(next => this.computeMonthlyCron(next));
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
            this.yearlyForm.valueChanges.subscribe(next => this.computeYearlyCron(next));
            this.advancedForm = this.fb.group({
                expression: [this.isCronFlavorQuartz ? '0 15 10 L-2 * ? *' : '15 10 2 * *']
            });
            this.advancedForm.controls.expression.valueChanges.subscribe(next => this.computeAdvancedExpression(next));
        });
    }
    computeMinutesCron(state) {
        this.cron = `${this.isCronFlavorQuartz ? state.seconds : ''} 0/${state.minutes} * 1/1 * ${this.weekDayDefaultChar} ${this.yearDefaultChar}`.trim();
        this.cronForm.setValue(this.cron);
    }
    computeHourlyCron(state) {
        this.cron = `${this.isCronFlavorQuartz ? state.seconds : ''} ${state.minutes} 0/${state.hours} 1/1 * ${this.weekDayDefaultChar} ${this.yearDefaultChar}`.trim();
        this.cronForm.setValue(this.cron);
    }
    computeDailyCron(state) {
        switch (state.subTab) {
            case 'everyDays':
                this.cron = `${this.isCronFlavorQuartz ? state.everyDays.seconds : ''} ${state.everyDays.minutes} ${this.hourToCron(state.everyDays.hours, state.everyDays.hourType)} 1/${state.everyDays.days} * ${this.weekDayDefaultChar} ${this.yearDefaultChar}`.trim();
                break;
            case 'everyWeekDay':
                this.cron = `${this.isCronFlavorQuartz ? state.everyWeekDay.seconds : ''} ${state.everyWeekDay.minutes} ${this.hourToCron(state.everyWeekDay.hours, state.everyWeekDay.hourType)} ${this.monthDayDefaultChar} * MON-FRI ${this.yearDefaultChar}`.trim();
                break;
            default:
                throw new Error('Invalid cron daily subtab selection');
        }
        this.cronForm.setValue(this.cron);
    }
    computeWeeklyCron(state) {
        const days = this.selectOptions.days
            .reduce((acc, day) => state[day] ? acc.concat([day]) : acc, [])
            .join(',');
        this.cron = `${this.isCronFlavorQuartz ? state.seconds : ''} ${state.minutes} ${this.hourToCron(state.hours, state.hourType)} ${this.monthDayDefaultChar} * ${days} ${this.yearDefaultChar}`.trim();
        this.cronForm.setValue(this.cron);
    }
    computeMonthlyCron(state) {
        switch (state.subTab) {
            case 'specificDay':
                this.cron = `${this.isCronFlavorQuartz ? state.specificDay.seconds : ''} ${state.specificDay.minutes} ${this.hourToCron(state.specificDay.hours, state.specificDay.hourType)} ${state.specificDay.day} 1/${state.specificDay.months} ${this.weekDayDefaultChar} ${this.yearDefaultChar}`.trim();
                break;
            case 'specificWeekDay':
                this.cron = `${this.isCronFlavorQuartz ? state.specificWeekDay.seconds : ''} ${state.specificWeekDay.minutes} ${this.hourToCron(state.specificWeekDay.hours, state.specificWeekDay.hourType)} ${this.monthDayDefaultChar} 1/${state.specificWeekDay.months} ${state.specificWeekDay.day}${state.specificWeekDay.monthWeek} ${this.yearDefaultChar}`.trim();
                break;
            default:
                throw new Error('Invalid cron montly subtab selection');
        }
        this.cronForm.setValue(this.cron);
    }
    computeYearlyCron(state) {
        switch (state.subTab) {
            case 'specificMonthDay':
                this.cron = `${this.isCronFlavorQuartz ? state.specificMonthDay.seconds : ''} ${state.specificMonthDay.minutes} ${this.hourToCron(state.specificMonthDay.hours, state.specificMonthDay.hourType)} ${state.specificMonthDay.day} ${state.specificMonthDay.month} ${this.weekDayDefaultChar} ${this.yearDefaultChar}`.trim();
                break;
            case 'specificMonthWeek':
                this.cron = `${this.isCronFlavorQuartz ? state.specificMonthWeek.seconds : ''} ${state.specificMonthWeek.minutes} ${this.hourToCron(state.specificMonthWeek.hours, state.specificMonthWeek.hourType)} ${this.monthDayDefaultChar} ${state.specificMonthWeek.month} ${state.specificMonthWeek.day}${state.specificMonthWeek.monthWeek} ${this.yearDefaultChar}`.trim();
                break;
            default:
                throw new Error('Invalid cron yearly subtab selection');
        }
        this.cronForm.setValue(this.cron);
    }
    computeAdvancedExpression(expression) {
        this.cron = expression;
        this.cronForm.setValue(this.cron);
    }
    dayDisplay(day) {
        return Days[day];
    }
    monthWeekDisplay(monthWeekNumber) {
        return MonthWeeks[monthWeekNumber];
    }
    monthDisplay(month) {
        return Months[month];
    }
    monthDayDisplay(month) {
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
            return `${month}${this.getOrdinalSuffix(month)}`;
        }
    }
    getAmPmHour(hour) {
        return this.options.use24HourTime ? hour : (hour + 11) % 12 + 1;
    }
    getHourType(hour) {
        return this.options.use24HourTime ? undefined : (hour >= 12 ? 'PM' : 'AM');
    }
    hourToCron(hour, hourType) {
        if (this.options.use24HourTime) {
            return hour;
        }
        else {
            return hourType === 'AM' ? (hour === 12 ? 0 : hour) : (hour === 12 ? 12 : hour + 12);
        }
    }
    handleModelChange(cron) {
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
        const origCron = cron;
        if (cron.split(' ').length === 5 && this.isCronFlavorStandard) {
            cron = `0 ${cron} *`;
        }
        const [seconds, minutes, hours, dayOfMonth, month, dayOfWeek] = cron.split(' ');
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
            const parsedHours = parseInt(hours, 10);
            this.state.daily.everyDays.hours = this.getAmPmHour(parsedHours);
            this.state.daily.everyDays.hourType = this.getHourType(parsedHours);
            this.state.daily.everyDays.minutes = parseInt(minutes, 10);
            this.state.daily.everyDays.seconds = parseInt(seconds, 10);
        }
        else if (cron.match(/\d+ \d+ \d+ [\?\*] \* MON-FRI \*/)) {
            this.activeTab = 'daily';
            this.state.daily.subTab = 'everyWeekDay';
            const parsedHours = parseInt(hours, 10);
            this.state.daily.everyWeekDay.hours = this.getAmPmHour(parsedHours);
            this.state.daily.everyWeekDay.hourType = this.getHourType(parsedHours);
            this.state.daily.everyWeekDay.minutes = parseInt(minutes, 10);
            this.state.daily.everyWeekDay.seconds = parseInt(seconds, 10);
        }
        else if (cron.match(/\d+ \d+ \d+ [\?\*] \* (MON|TUE|WED|THU|FRI|SAT|SUN)(,(MON|TUE|WED|THU|FRI|SAT|SUN))* \*/)) {
            this.activeTab = 'weekly';
            this.selectOptions.days.forEach(weekDay => this.state.weekly[weekDay] = false);
            dayOfWeek.split(',').forEach(weekDay => this.state.weekly[weekDay] = true);
            const parsedHours = parseInt(hours, 10);
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
            const parsedHours = parseInt(hours, 10);
            this.state.monthly.specificDay.hours = this.getAmPmHour(parsedHours);
            this.state.monthly.specificDay.hourType = this.getHourType(parsedHours);
            this.state.monthly.specificDay.minutes = parseInt(minutes, 10);
            this.state.monthly.specificDay.seconds = parseInt(seconds, 10);
        }
        else if (cron.match(/\d+ \d+ \d+ [\?\*] 1\/\d+ (MON|TUE|WED|THU|FRI|SAT|SUN)((#[1-5])|L) \*/)) {
            const day = dayOfWeek.substr(0, 3);
            const monthWeek = dayOfWeek.substr(3);
            this.activeTab = 'monthly';
            this.state.monthly.subTab = 'specificWeekDay';
            this.state.monthly.specificWeekDay.monthWeek = monthWeek;
            this.state.monthly.specificWeekDay.day = day;
            this.state.monthly.specificWeekDay.months = parseInt(month.substring(2), 10);
            const parsedHours = parseInt(hours, 10);
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
            const parsedHours = parseInt(hours, 10);
            this.state.yearly.specificMonthDay.hours = this.getAmPmHour(parsedHours);
            this.state.yearly.specificMonthDay.hourType = this.getHourType(parsedHours);
            this.state.yearly.specificMonthDay.minutes = parseInt(minutes, 10);
            this.state.yearly.specificMonthDay.seconds = parseInt(seconds, 10);
        }
        else if (cron.match(/\d+ \d+ \d+ [\?\*] \d+ (MON|TUE|WED|THU|FRI|SAT|SUN)((#[1-5])|L) \*/)) {
            const day = dayOfWeek.substr(0, 3);
            const monthWeek = dayOfWeek.substr(3);
            this.activeTab = 'yearly';
            this.state.yearly.subTab = 'specificMonthWeek';
            this.state.yearly.specificMonthWeek.monthWeek = monthWeek;
            this.state.yearly.specificMonthWeek.day = day;
            this.state.yearly.specificMonthWeek.month = parseInt(month, 10);
            const parsedHours = parseInt(hours, 10);
            this.state.yearly.specificMonthWeek.hours = this.getAmPmHour(parsedHours);
            this.state.yearly.specificMonthWeek.hourType = this.getHourType(parsedHours);
            this.state.yearly.specificMonthWeek.minutes = parseInt(minutes, 10);
            this.state.yearly.specificMonthWeek.seconds = parseInt(seconds, 10);
        }
        else {
            this.activeTab = 'advanced';
            this.state.advanced.expression = origCron;
        }
    }
    cronIsValid(cron) {
        if (cron) {
            const cronParts = cron.split(' ');
            return (this.isCronFlavorQuartz && (cronParts.length === 6
                || cronParts.length === 7)
                || (this.isCronFlavorStandard && cronParts.length === 5));
        }
        return false;
    }
    getDefaultState() {
        const [defaultHours, defaultMinutes, defaultSeconds] = this.options.defaultTime.split(':').map(Number);
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
    }
    getOrdinalSuffix(value) {
        if (value.length > 1) {
            const secondToLastDigit = value.charAt(value.length - 2);
            if (secondToLastDigit === '1') {
                return 'th';
            }
        }
        const lastDigit = value.charAt(value.length - 1);
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
    }
    getSelectOptions() {
        return {
            months: this.getRange(1, 12),
            monthWeeks: ['#1', '#2', '#3', '#4', '#5', 'L'],
            days: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
            minutes: this.getRange(0, 59),
            fullMinutes: this.getRange(0, 59),
            seconds: this.getRange(0, 59),
            hours: this.getRange(1, 23),
            monthDays: this.getRange(1, 31),
            monthDaysWithLasts: ['1W', ...[...this.getRange(1, 31).map(String)], 'LW', 'L'],
            monthDaysWithOutLasts: [...[...this.getRange(1, 31).map(String)]],
            hourTypes: ['AM', 'PM']
        };
    }
    getRange(start, end) {
        const length = end - start + 1;
        return Array.apply(null, Array(length)).map((_, i) => i + start);
    }
    writeValue(obj) {
        this.cron = obj;
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3Jvbi1lZGl0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWNyb24tZWRpdG9yLyIsInNvdXJjZXMiOlsic3JjL2Nyb24tZWRpdG9yLmNvbXBvbmVudC50cyIsInNyYy9jcm9uLWVkaXRvci50ZW1wbGF0ZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBMEQsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRW5ILE9BQU8sRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBQyxNQUFNLFNBQVMsQ0FBQztBQUNqRCxPQUFPLEVBQXlDLFdBQVcsRUFBRSxXQUFXLEVBQWEsaUJBQWlCLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7Ozs7OztJQ0N4SCxrQ0FDRTtJQUFBLCtCQUVFO0lBQUEsZ0NBQThCO0lBQUEsc0JBQU07SUFBQSxpQkFBTztJQUV6Qyx1Q0FLbUI7SUFDdkIsaUJBQU07SUFDUixpQkFBVTs7O0lBTkYsZUFBeUI7SUFBekIsOENBQXlCLCtDQUFBLG1CQUFBLHlFQUFBOzs7SUFTakMsbUNBQ0U7SUFBQSwrQkFDRTtJQUFBLGdDQUE4QjtJQUFBLHNCQUFNO0lBQUEsaUJBQU87SUFFM0MsdUNBR21CO0lBQ3JCLGlCQUFNO0lBQ1IsaUJBQVU7OztJQUxZLGVBQXdCO0lBQXhCLDZDQUF3QiwrQ0FBQSx5RUFBQTs7O0lBb0JsQyxzQ0FDRTtJQUFBLFlBQ0Y7SUFBQSxpQkFBYTs7O0lBRmdELG1DQUFrQjtJQUM3RSxlQUNGO0lBREUsNENBQ0Y7OztJQWJaLG1DQUNFO0lBQUEsK0JBRUU7SUFBQSwyQ0FDRTtJQUFBLDRDQUVFO0lBQUEsZ0NBQThCO0lBQUEsc0JBQU07SUFBQSxpQkFBTztJQUUzQywwQ0FDRTtJQUFBLGlDQUFXO0lBQUEsc0JBQU07SUFBQSxpQkFBWTtJQUM3QixzQ0FDRTtJQUFBLDRGQUNFO0lBRUosaUJBQWE7SUFDZixpQkFBaUI7SUFF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LFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELGlCQUFpQixDQUFDLEVBQU87UUFDdkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELGdCQUFnQixDQUFDLFVBQW1CO1FBQ2xDLElBQUksQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDO0lBQzdCLENBQUM7O21HQTNrQlUsZ0JBQWdCO3dFQUFoQixnQkFBZ0IseUxBRmhCLENBQUMsbUJBQW1CLENBQUM7UUNsQmxDLGtDQUNJO1FBQUEsd0NBRUU7UUFGMkMsc0lBQXVCLHNCQUFrQixJQUFDO1FBR3JGLHlFQUNFO1FBY0YseUVBQ0U7UUFZRiwwRUFDRTtRQTBDRiwwRUFDRTtRQTBCRiwyRUFFRTtRQWdIRiwyRUFFRTtRQTRGRix5RUFDRTtRQVFKLGlCQUFnQjtRQUNwQixpQkFBVTs7UUEvVGtGLGVBQW1DO1FBQW5DLHFEQUFtQyxvQkFBQTtRQUd4RSxlQUErQjtRQUEvQixrREFBK0I7UUFlaEMsZUFBOEI7UUFBOUIsaURBQThCO1FBYS9CLGVBQTZCO1FBQTdCLGdEQUE2QjtRQTJDM0IsZUFBOEI7UUFBOUIsaURBQThCO1FBMkI5QixlQUErQjtRQUEvQixrREFBK0I7UUFrSC9CLGVBQThCO1FBQTlCLGlEQUE4QjtRQThGN0IsZUFBZ0M7UUFBaEMsbURBQWdDOztrRERsUzNFLGdCQUFnQjtjQU41QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLFdBQVcsRUFBRSw2QkFBNkI7Z0JBQzFDLFNBQVMsRUFBRSxDQUFDLDZCQUE2QixDQUFDO2dCQUMxQyxTQUFTLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQzthQUNqQzs7a0JBR0UsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBRUwsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBPbkluaXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcywgRXZlbnRFbWl0dGVyLCBmb3J3YXJkUmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q3Jvbk9wdGlvbnN9IGZyb20gJy4vQ3Jvbk9wdGlvbnMnO1xuaW1wb3J0IHtEYXlzLCBNb250aFdlZWtzLCBNb250aHN9IGZyb20gJy4vZW51bXMnO1xuaW1wb3J0IHtDb250cm9sQ29udGFpbmVyLCBDb250cm9sVmFsdWVBY2Nlc3NvciwgRm9ybUJ1aWxkZXIsIEZvcm1Db250cm9sLCBGb3JtR3JvdXAsIE5HX1ZBTFVFX0FDQ0VTU09SfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge1RoZW1lUGFsZXR0ZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5cblxuZXhwb3J0IGNvbnN0IENST05fVkFMVUVfQUNDRVNTT1I6IGFueSA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IENyb25HZW5Db21wb25lbnQpLFxuICBtdWx0aTogdHJ1ZSxcbn07XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3Jvbi1lZGl0b3InLFxuICB0ZW1wbGF0ZVVybDogJy4vY3Jvbi1lZGl0b3IudGVtcGxhdGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2Nyb24tZWRpdG9yLmNvbXBvbmVudC5jc3MnXSxcbiAgcHJvdmlkZXJzOiBbQ1JPTl9WQUxVRV9BQ0NFU1NPUl1cbn0pXG5leHBvcnQgY2xhc3MgQ3JvbkdlbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuXG4gIEBJbnB1dCgpIHB1YmxpYyBiYWNrZ3JvdW5kQ29sb3I6IFRoZW1lUGFsZXR0ZTtcbiAgQElucHV0KCkgcHVibGljIGNvbG9yOiBUaGVtZVBhbGV0dGU7XG4gIEBJbnB1dCgpIHB1YmxpYyBkaXNhYmxlZDogYm9vbGVhbjtcbiAgQElucHV0KCkgcHVibGljIG9wdGlvbnM6IENyb25PcHRpb25zO1xuXG4gIEBJbnB1dCgpIGdldCBjcm9uKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMubG9jYWxDcm9uO1xuICB9XG5cbiAgc2V0IGNyb24odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMubG9jYWxDcm9uID0gdmFsdWU7XG4gICAgdGhpcy5vbkNoYW5nZSh2YWx1ZSk7XG4gIH1cblxuICAvLyB0aGUgbmFtZSBpcyBhbiBBbmd1bGFyIGNvbnZlbnRpb24sIEBJbnB1dCB2YXJpYWJsZSBuYW1lICsgXCJDaGFuZ2VcIiBzdWZmaXhcbiAgLy8gQE91dHB1dCgpIGNyb25DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgcHVibGljIGFjdGl2ZVRhYjogc3RyaW5nO1xuICBwdWJsaWMgc2VsZWN0T3B0aW9ucyA9IHRoaXMuZ2V0U2VsZWN0T3B0aW9ucygpO1xuICBwdWJsaWMgc3RhdGU6IGFueTtcblxuICBwcml2YXRlIGxvY2FsQ3JvbiA9ICcwIDAgMS8xICogKic7XG4gIHByaXZhdGUgaXNEaXJ0eTogYm9vbGVhbjtcblxuICBjcm9uRm9ybTogRm9ybUNvbnRyb2w7XG5cbiAgbWludXRlc0Zvcm06IEZvcm1Hcm91cDtcbiAgaG91cmx5Rm9ybTogRm9ybUdyb3VwO1xuICBkYWlseUZvcm06IEZvcm1Hcm91cDtcbiAgd2Vla2x5Rm9ybTogRm9ybUdyb3VwO1xuICBtb250aGx5Rm9ybTogRm9ybUdyb3VwO1xuICB5ZWFybHlGb3JtOiBGb3JtR3JvdXA7XG4gIGFkdmFuY2VkRm9ybTogRm9ybUdyb3VwO1xuXG5cbiAgZ2V0IGlzQ3JvbkZsYXZvclF1YXJ0eigpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmNyb25GbGF2b3IgPT09ICdxdWFydHonO1xuICB9XG5cbiAgZ2V0IGlzQ3JvbkZsYXZvclN0YW5kYXJkKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuY3JvbkZsYXZvciA9PT0gJ3N0YW5kYXJkJztcbiAgfVxuXG4gIGdldCB5ZWFyRGVmYXVsdENoYXIoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5jcm9uRmxhdm9yID09PSAncXVhcnR6JyA/ICcqJyA6ICcnO1xuICB9XG5cbiAgZ2V0IHdlZWtEYXlEZWZhdWx0Q2hhcigpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmNyb25GbGF2b3IgPT09ICdxdWFydHonID8gJz8nIDogJyonO1xuICB9XG5cbiAgZ2V0IG1vbnRoRGF5RGVmYXVsdENoYXIoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5jcm9uRmxhdm9yID09PSAncXVhcnR6JyA/ICc/JyA6ICcqJztcbiAgfVxuXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIpIHtcbiAgfVxuXG4gIC8qIFVwZGF0ZSB0aGUgY3JvbiBvdXRwdXQgdG8gdGhhdCBvZiB0aGUgc2VsZWN0ZWQgdGFiLlxuICAgKiBUaGUgY3JvbiBvdXRwdXQgdmFsdWUgaXMgdXBkYXRlZCB3aGVuZXZlciBhIGZvcm0gaXMgdXBkYXRlZC4gVG8gbWFrZSBpdCBjaGFuZ2UgaW4gcmVzcG9uc2UgdG8gdGFiIHNlbGVjdGlvbiwgd2Ugc2ltcGx5IHJlc2V0XG4gICAqIHRoZSB2YWx1ZSBvZiB0aGUgZm9ybSB0aGF0IGdvZXMgaW50byBmb2N1cy4gKi9cbiAgcHVibGljIG9uVGFiRm9jdXMoaWR4OiBudW1iZXIpIHtcblxuICAgIHN3aXRjaCAoaWR4KSB7XG4gICAgICBjYXNlIDA6XG4gICAgICAgIHRoaXMubWludXRlc0Zvcm0uc2V0VmFsdWUodGhpcy5taW51dGVzRm9ybS52YWx1ZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAxOlxuICAgICAgICB0aGlzLmhvdXJseUZvcm0uc2V0VmFsdWUodGhpcy5ob3VybHlGb3JtLnZhbHVlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIHRoaXMuZGFpbHlGb3JtLnNldFZhbHVlKHRoaXMuZGFpbHlGb3JtLnZhbHVlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDM6XG4gICAgICAgIHRoaXMud2Vla2x5Rm9ybS5zZXRWYWx1ZSh0aGlzLndlZWtseUZvcm0udmFsdWUpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNDpcbiAgICAgICAgdGhpcy5tb250aGx5Rm9ybS5zZXRWYWx1ZSh0aGlzLm1vbnRobHlGb3JtLnZhbHVlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDU6XG4gICAgICAgIHRoaXMueWVhcmx5Rm9ybS5zZXRWYWx1ZSh0aGlzLnllYXJseUZvcm0udmFsdWUpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNjpcbiAgICAgICAgdGhpcy5hZHZhbmNlZEZvcm0uc2V0VmFsdWUodGhpcy5hZHZhbmNlZEZvcm0udmFsdWUpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93KG5ldyBFcnJvcignSW52YWxpZCB0YWIgc2VsZWN0ZWQnKSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGFzeW5jIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc3RhdGUgPSB0aGlzLmdldERlZmF1bHRTdGF0ZSgpO1xuXG4gICAgdGhpcy5oYW5kbGVNb2RlbENoYW5nZSh0aGlzLmNyb24pO1xuXG4gICAgY29uc3QgW2RlZmF1bHRIb3VycywgZGVmYXVsdE1pbnV0ZXMsIGRlZmF1bHRTZWNvbmRzXSA9IHRoaXMub3B0aW9ucy5kZWZhdWx0VGltZS5zcGxpdCgnOicpLm1hcChOdW1iZXIpO1xuXG4gICAgdGhpcy5jcm9uRm9ybSA9IG5ldyBGb3JtQ29udHJvbCgnMCAwIDEvMSAqIConKTtcblxuICAgIHRoaXMubWludXRlc0Zvcm0gPSB0aGlzLmZiLmdyb3VwKHtcbiAgICAgIGhvdXJzOiBbMF0sXG4gICAgICBtaW51dGVzOiBbMV0sXG4gICAgICBzZWNvbmRzOiBbMF1cbiAgICB9KTtcblxuICAgIHRoaXMubWludXRlc0Zvcm0udmFsdWVDaGFuZ2VzLnN1YnNjcmliZSh2YWx1ZSA9PiB0aGlzLmNvbXB1dGVNaW51dGVzQ3Jvbih2YWx1ZSkpO1xuXG4gICAgdGhpcy5ob3VybHlGb3JtID0gdGhpcy5mYi5ncm91cCh7XG4gICAgICBob3VyczogWzFdLFxuICAgICAgbWludXRlczogWzBdLFxuICAgICAgc2Vjb25kczogWzBdXG4gICAgfSk7XG4gICAgdGhpcy5ob3VybHlGb3JtLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUodmFsdWUgPT4gdGhpcy5jb21wdXRlSG91cmx5Q3Jvbih2YWx1ZSkpO1xuXG4gICAgdGhpcy5kYWlseUZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcbiAgICAgIHN1YlRhYjogWydldmVyeURheXMnXSxcbiAgICAgIGV2ZXJ5RGF5czogdGhpcy5mYi5ncm91cCh7XG4gICAgICAgIGRheXM6IFsxXSxcbiAgICAgICAgaG91cnM6IFt0aGlzLmdldEFtUG1Ib3VyKDEpXSxcbiAgICAgICAgbWludXRlczogWzBdLFxuICAgICAgICBzZWNvbmRzOiBbMF0sXG4gICAgICAgIGhvdXJUeXBlOiBbdGhpcy5nZXRIb3VyVHlwZSgwKV1cbiAgICAgIH0pLFxuICAgICAgZXZlcnlXZWVrRGF5OiB0aGlzLmZiLmdyb3VwKHtcbiAgICAgICAgZGF5czogWzBdLFxuICAgICAgICBob3VyczogW3RoaXMuZ2V0QW1QbUhvdXIoMSldLFxuICAgICAgICBtaW51dGVzOiBbMF0sXG4gICAgICAgIHNlY29uZHM6IFswXSxcbiAgICAgICAgaG91clR5cGU6IFt0aGlzLmdldEhvdXJUeXBlKDApXVxuICAgICAgfSlcbiAgICB9KTtcbiAgICB0aGlzLmRhaWx5Rm9ybS52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKHZhbHVlID0+IHRoaXMuY29tcHV0ZURhaWx5Q3Jvbih2YWx1ZSkpO1xuXG4gICAgdGhpcy53ZWVrbHlGb3JtID0gdGhpcy5mYi5ncm91cCh7XG4gICAgICBNT046IFt0cnVlXSxcbiAgICAgIFRVRTogW2ZhbHNlXSxcbiAgICAgIFdFRDogW2ZhbHNlXSxcbiAgICAgIFRIVTogW2ZhbHNlXSxcbiAgICAgIEZSSTogW2ZhbHNlXSxcbiAgICAgIFNBVDogW2ZhbHNlXSxcbiAgICAgIFNVTjogW2ZhbHNlXSxcbiAgICAgIGhvdXJzOiBbdGhpcy5nZXRBbVBtSG91cihkZWZhdWx0SG91cnMpXSxcbiAgICAgIG1pbnV0ZXM6IFtkZWZhdWx0TWludXRlc10sXG4gICAgICBzZWNvbmRzOiBbZGVmYXVsdFNlY29uZHNdLFxuICAgICAgaG91clR5cGU6IFt0aGlzLmdldEhvdXJUeXBlKGRlZmF1bHRIb3VycyldXG4gICAgfSk7XG4gICAgdGhpcy53ZWVrbHlGb3JtLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUobmV4dCA9PiB0aGlzLmNvbXB1dGVXZWVrbHlDcm9uKG5leHQpKTtcblxuICAgIHRoaXMubW9udGhseUZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcbiAgICAgIHN1YlRhYjogWydzcGVjaWZpY0RheSddLFxuICAgICAgc3BlY2lmaWNEYXk6IHRoaXMuZmIuZ3JvdXAoe1xuICAgICAgICBkYXk6IFsnMSddLFxuICAgICAgICBtb250aHM6IFsxXSxcbiAgICAgICAgaG91cnM6IFt0aGlzLmdldEFtUG1Ib3VyKGRlZmF1bHRIb3VycyldLFxuICAgICAgICBtaW51dGVzOiBbZGVmYXVsdE1pbnV0ZXNdLFxuICAgICAgICBzZWNvbmRzOiBbZGVmYXVsdFNlY29uZHNdLFxuICAgICAgICBob3VyVHlwZTogW3RoaXMuZ2V0SG91clR5cGUoZGVmYXVsdEhvdXJzKV1cbiAgICAgIH0pLFxuICAgICAgc3BlY2lmaWNXZWVrRGF5OiB0aGlzLmZiLmdyb3VwKHtcbiAgICAgICAgbW9udGhXZWVrOiBbJyMxJ10sXG4gICAgICAgIGRheTogWydNT04nXSxcbiAgICAgICAgbW9udGhzOiBbMV0sXG4gICAgICAgIGhvdXJzOiBbdGhpcy5nZXRBbVBtSG91cihkZWZhdWx0SG91cnMpXSxcbiAgICAgICAgbWludXRlczogW2RlZmF1bHRNaW51dGVzXSxcbiAgICAgICAgc2Vjb25kczogW2RlZmF1bHRTZWNvbmRzXSxcbiAgICAgICAgaG91clR5cGU6IFt0aGlzLmdldEhvdXJUeXBlKGRlZmF1bHRIb3VycyldXG4gICAgICB9KVxuICAgIH0pO1xuICAgIHRoaXMubW9udGhseUZvcm0udmFsdWVDaGFuZ2VzLnN1YnNjcmliZShuZXh0ID0+IHRoaXMuY29tcHV0ZU1vbnRobHlDcm9uKG5leHQpKTtcblxuICAgIHRoaXMueWVhcmx5Rm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xuICAgICAgc3ViVGFiOiBbJ3NwZWNpZmljTW9udGhEYXknXSxcbiAgICAgIHNwZWNpZmljTW9udGhEYXk6IHRoaXMuZmIuZ3JvdXAoe1xuICAgICAgICBtb250aDogWzFdLFxuICAgICAgICBkYXk6IFsnMSddLFxuICAgICAgICBob3VyczogW3RoaXMuZ2V0QW1QbUhvdXIoZGVmYXVsdEhvdXJzKV0sXG4gICAgICAgIG1pbnV0ZXM6IFtkZWZhdWx0TWludXRlc10sXG4gICAgICAgIHNlY29uZHM6IFtkZWZhdWx0U2Vjb25kc10sXG4gICAgICAgIGhvdXJUeXBlOiBbdGhpcy5nZXRIb3VyVHlwZShkZWZhdWx0SG91cnMpXVxuICAgICAgfSksXG4gICAgICBzcGVjaWZpY01vbnRoV2VlazogdGhpcy5mYi5ncm91cCh7XG4gICAgICAgIG1vbnRoV2VlazogWycjMSddLFxuICAgICAgICBkYXk6IFsnTU9OJ10sXG4gICAgICAgIG1vbnRoOiBbMV0sXG4gICAgICAgIGhvdXJzOiBbdGhpcy5nZXRBbVBtSG91cihkZWZhdWx0SG91cnMpXSxcbiAgICAgICAgbWludXRlczogW2RlZmF1bHRNaW51dGVzXSxcbiAgICAgICAgc2Vjb25kczogW2RlZmF1bHRTZWNvbmRzXSxcbiAgICAgICAgaG91clR5cGU6IFt0aGlzLmdldEhvdXJUeXBlKGRlZmF1bHRIb3VycyldXG4gICAgICB9KVxuICAgIH0pO1xuICAgIHRoaXMueWVhcmx5Rm9ybS52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKG5leHQgPT4gdGhpcy5jb21wdXRlWWVhcmx5Q3JvbihuZXh0KSk7XG5cbiAgICB0aGlzLmFkdmFuY2VkRm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xuICAgICAgZXhwcmVzc2lvbjogW3RoaXMuaXNDcm9uRmxhdm9yUXVhcnR6ID8gJzAgMTUgMTAgTC0yICogPyAqJyA6ICcxNSAxMCAyICogKiddXG4gICAgfSk7XG4gICAgdGhpcy5hZHZhbmNlZEZvcm0uY29udHJvbHMuZXhwcmVzc2lvbi52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKG5leHQgPT4gdGhpcy5jb21wdXRlQWR2YW5jZWRFeHByZXNzaW9uKG5leHQpKTtcbiAgfVxuXG4gIHByaXZhdGUgY29tcHV0ZU1pbnV0ZXNDcm9uKHN0YXRlOiBhbnkpIHtcbiAgICB0aGlzLmNyb24gPSBgJHt0aGlzLmlzQ3JvbkZsYXZvclF1YXJ0eiA/IHN0YXRlLnNlY29uZHMgOiAnJ30gMC8ke3N0YXRlLm1pbnV0ZXN9ICogMS8xICogJHt0aGlzLndlZWtEYXlEZWZhdWx0Q2hhcn0gJHt0aGlzLnllYXJEZWZhdWx0Q2hhcn1gLnRyaW0oKTtcbiAgICB0aGlzLmNyb25Gb3JtLnNldFZhbHVlKHRoaXMuY3Jvbik7XG4gIH1cblxuICBwcml2YXRlIGNvbXB1dGVIb3VybHlDcm9uKHN0YXRlOiBhbnkpIHtcbiAgICB0aGlzLmNyb24gPSBgJHt0aGlzLmlzQ3JvbkZsYXZvclF1YXJ0eiA/IHN0YXRlLnNlY29uZHMgOiAnJ30gJHtzdGF0ZS5taW51dGVzfSAwLyR7c3RhdGUuaG91cnN9IDEvMSAqICR7dGhpcy53ZWVrRGF5RGVmYXVsdENoYXJ9ICR7dGhpcy55ZWFyRGVmYXVsdENoYXJ9YC50cmltKCk7XG4gICAgdGhpcy5jcm9uRm9ybS5zZXRWYWx1ZSh0aGlzLmNyb24pO1xuICB9XG5cbiAgcHJpdmF0ZSBjb21wdXRlRGFpbHlDcm9uKHN0YXRlOiBhbnkpIHtcbiAgICBzd2l0Y2ggKHN0YXRlLnN1YlRhYikge1xuICAgICAgY2FzZSAnZXZlcnlEYXlzJzpcbiAgICAgICAgdGhpcy5jcm9uID0gYCR7dGhpcy5pc0Nyb25GbGF2b3JRdWFydHogPyBzdGF0ZS5ldmVyeURheXMuc2Vjb25kcyA6ICcnfSAke3N0YXRlLmV2ZXJ5RGF5cy5taW51dGVzfSAke3RoaXMuaG91clRvQ3JvbihzdGF0ZS5ldmVyeURheXMuaG91cnMsIHN0YXRlLmV2ZXJ5RGF5cy5ob3VyVHlwZSl9IDEvJHtzdGF0ZS5ldmVyeURheXMuZGF5c30gKiAke3RoaXMud2Vla0RheURlZmF1bHRDaGFyfSAke3RoaXMueWVhckRlZmF1bHRDaGFyfWAudHJpbSgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2V2ZXJ5V2Vla0RheSc6XG4gICAgICAgIHRoaXMuY3JvbiA9IGAke3RoaXMuaXNDcm9uRmxhdm9yUXVhcnR6ID8gc3RhdGUuZXZlcnlXZWVrRGF5LnNlY29uZHMgOiAnJ30gJHtzdGF0ZS5ldmVyeVdlZWtEYXkubWludXRlc30gJHt0aGlzLmhvdXJUb0Nyb24oc3RhdGUuZXZlcnlXZWVrRGF5LmhvdXJzLCBzdGF0ZS5ldmVyeVdlZWtEYXkuaG91clR5cGUpfSAke3RoaXMubW9udGhEYXlEZWZhdWx0Q2hhcn0gKiBNT04tRlJJICR7dGhpcy55ZWFyRGVmYXVsdENoYXJ9YC50cmltKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGNyb24gZGFpbHkgc3VidGFiIHNlbGVjdGlvbicpO1xuICAgIH1cbiAgICB0aGlzLmNyb25Gb3JtLnNldFZhbHVlKHRoaXMuY3Jvbik7XG4gIH1cblxuICBwcml2YXRlIGNvbXB1dGVXZWVrbHlDcm9uKHN0YXRlOiBhbnkpIHtcbiAgICBjb25zdCBkYXlzID0gdGhpcy5zZWxlY3RPcHRpb25zLmRheXNcbiAgICAgIC5yZWR1Y2UoKGFjYywgZGF5KSA9PiBzdGF0ZVtkYXldID8gYWNjLmNvbmNhdChbZGF5XSkgOiBhY2MsIFtdKVxuICAgICAgLmpvaW4oJywnKTtcbiAgICB0aGlzLmNyb24gPSBgJHt0aGlzLmlzQ3JvbkZsYXZvclF1YXJ0eiA/IHN0YXRlLnNlY29uZHMgOiAnJ30gJHtzdGF0ZS5taW51dGVzfSAke3RoaXMuaG91clRvQ3JvbihzdGF0ZS5ob3Vycywgc3RhdGUuaG91clR5cGUpfSAke3RoaXMubW9udGhEYXlEZWZhdWx0Q2hhcn0gKiAke2RheXN9ICR7dGhpcy55ZWFyRGVmYXVsdENoYXJ9YC50cmltKCk7XG4gICAgdGhpcy5jcm9uRm9ybS5zZXRWYWx1ZSh0aGlzLmNyb24pO1xuICB9XG5cbiAgcHJpdmF0ZSBjb21wdXRlTW9udGhseUNyb24oc3RhdGU6IGFueSkge1xuICAgIHN3aXRjaCAoc3RhdGUuc3ViVGFiKSB7XG4gICAgICBjYXNlICdzcGVjaWZpY0RheSc6XG4gICAgICAgIHRoaXMuY3JvbiA9IGAke3RoaXMuaXNDcm9uRmxhdm9yUXVhcnR6ID8gc3RhdGUuc3BlY2lmaWNEYXkuc2Vjb25kcyA6ICcnfSAke3N0YXRlLnNwZWNpZmljRGF5Lm1pbnV0ZXN9ICR7dGhpcy5ob3VyVG9Dcm9uKHN0YXRlLnNwZWNpZmljRGF5LmhvdXJzLCBzdGF0ZS5zcGVjaWZpY0RheS5ob3VyVHlwZSl9ICR7c3RhdGUuc3BlY2lmaWNEYXkuZGF5fSAxLyR7c3RhdGUuc3BlY2lmaWNEYXkubW9udGhzfSAke3RoaXMud2Vla0RheURlZmF1bHRDaGFyfSAke3RoaXMueWVhckRlZmF1bHRDaGFyfWAudHJpbSgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3NwZWNpZmljV2Vla0RheSc6XG4gICAgICAgIHRoaXMuY3JvbiA9IGAke3RoaXMuaXNDcm9uRmxhdm9yUXVhcnR6ID8gc3RhdGUuc3BlY2lmaWNXZWVrRGF5LnNlY29uZHMgOiAnJ30gJHtzdGF0ZS5zcGVjaWZpY1dlZWtEYXkubWludXRlc30gJHt0aGlzLmhvdXJUb0Nyb24oc3RhdGUuc3BlY2lmaWNXZWVrRGF5LmhvdXJzLCBzdGF0ZS5zcGVjaWZpY1dlZWtEYXkuaG91clR5cGUpfSAke3RoaXMubW9udGhEYXlEZWZhdWx0Q2hhcn0gMS8ke3N0YXRlLnNwZWNpZmljV2Vla0RheS5tb250aHN9ICR7c3RhdGUuc3BlY2lmaWNXZWVrRGF5LmRheX0ke3N0YXRlLnNwZWNpZmljV2Vla0RheS5tb250aFdlZWt9ICR7dGhpcy55ZWFyRGVmYXVsdENoYXJ9YC50cmltKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGNyb24gbW9udGx5IHN1YnRhYiBzZWxlY3Rpb24nKTtcbiAgICB9XG4gICAgdGhpcy5jcm9uRm9ybS5zZXRWYWx1ZSh0aGlzLmNyb24pO1xuICB9XG5cbiAgcHJpdmF0ZSBjb21wdXRlWWVhcmx5Q3JvbihzdGF0ZTogYW55KSB7XG4gICAgc3dpdGNoIChzdGF0ZS5zdWJUYWIpIHtcbiAgICAgIGNhc2UgJ3NwZWNpZmljTW9udGhEYXknOlxuICAgICAgICB0aGlzLmNyb24gPSBgJHt0aGlzLmlzQ3JvbkZsYXZvclF1YXJ0eiA/IHN0YXRlLnNwZWNpZmljTW9udGhEYXkuc2Vjb25kcyA6ICcnfSAke3N0YXRlLnNwZWNpZmljTW9udGhEYXkubWludXRlc30gJHt0aGlzLmhvdXJUb0Nyb24oc3RhdGUuc3BlY2lmaWNNb250aERheS5ob3Vycywgc3RhdGUuc3BlY2lmaWNNb250aERheS5ob3VyVHlwZSl9ICR7c3RhdGUuc3BlY2lmaWNNb250aERheS5kYXl9ICR7c3RhdGUuc3BlY2lmaWNNb250aERheS5tb250aH0gJHt0aGlzLndlZWtEYXlEZWZhdWx0Q2hhcn0gJHt0aGlzLnllYXJEZWZhdWx0Q2hhcn1gLnRyaW0oKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdzcGVjaWZpY01vbnRoV2Vlayc6XG4gICAgICAgIHRoaXMuY3JvbiA9IGAke3RoaXMuaXNDcm9uRmxhdm9yUXVhcnR6ID8gc3RhdGUuc3BlY2lmaWNNb250aFdlZWsuc2Vjb25kcyA6ICcnfSAke3N0YXRlLnNwZWNpZmljTW9udGhXZWVrLm1pbnV0ZXN9ICR7dGhpcy5ob3VyVG9Dcm9uKHN0YXRlLnNwZWNpZmljTW9udGhXZWVrLmhvdXJzLCBzdGF0ZS5zcGVjaWZpY01vbnRoV2Vlay5ob3VyVHlwZSl9ICR7dGhpcy5tb250aERheURlZmF1bHRDaGFyfSAke3N0YXRlLnNwZWNpZmljTW9udGhXZWVrLm1vbnRofSAke3N0YXRlLnNwZWNpZmljTW9udGhXZWVrLmRheX0ke3N0YXRlLnNwZWNpZmljTW9udGhXZWVrLm1vbnRoV2Vla30gJHt0aGlzLnllYXJEZWZhdWx0Q2hhcn1gLnRyaW0oKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgY3JvbiB5ZWFybHkgc3VidGFiIHNlbGVjdGlvbicpO1xuICAgIH1cbiAgICB0aGlzLmNyb25Gb3JtLnNldFZhbHVlKHRoaXMuY3Jvbik7XG4gIH1cblxuICBwcml2YXRlIGNvbXB1dGVBZHZhbmNlZEV4cHJlc3Npb24oZXhwcmVzc2lvbjogYW55KSB7XG4gICAgdGhpcy5jcm9uID0gZXhwcmVzc2lvbjtcbiAgICB0aGlzLmNyb25Gb3JtLnNldFZhbHVlKHRoaXMuY3Jvbik7XG4gIH1cblxuICBwdWJsaWMgZGF5RGlzcGxheShkYXk6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIERheXNbZGF5XTtcbiAgfVxuXG4gIHB1YmxpYyBtb250aFdlZWtEaXNwbGF5KG1vbnRoV2Vla051bWJlcjogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gTW9udGhXZWVrc1ttb250aFdlZWtOdW1iZXJdO1xuICB9XG5cbiAgcHVibGljIG1vbnRoRGlzcGxheShtb250aDogbnVtYmVyKTogc3RyaW5nIHtcbiAgICByZXR1cm4gTW9udGhzW21vbnRoXTtcbiAgfVxuXG4gIHB1YmxpYyBtb250aERheURpc3BsYXkobW9udGg6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgaWYgKG1vbnRoID09PSAnTCcpIHtcbiAgICAgIHJldHVybiAnTGFzdCBEYXknO1xuICAgIH0gZWxzZSBpZiAobW9udGggPT09ICdMVycpIHtcbiAgICAgIHJldHVybiAnTGFzdCBXZWVrZGF5JztcbiAgICB9IGVsc2UgaWYgKG1vbnRoID09PSAnMVcnKSB7XG4gICAgICByZXR1cm4gJ0ZpcnN0IFdlZWtkYXknO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gYCR7bW9udGh9JHt0aGlzLmdldE9yZGluYWxTdWZmaXgobW9udGgpfWA7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRBbVBtSG91cihob3VyOiBudW1iZXIpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLnVzZTI0SG91clRpbWUgPyBob3VyIDogKGhvdXIgKyAxMSkgJSAxMiArIDE7XG4gIH1cblxuICBwcml2YXRlIGdldEhvdXJUeXBlKGhvdXI6IG51bWJlcikge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMudXNlMjRIb3VyVGltZSA/IHVuZGVmaW5lZCA6IChob3VyID49IDEyID8gJ1BNJyA6ICdBTScpO1xuICB9XG5cbiAgcHJpdmF0ZSBob3VyVG9Dcm9uKGhvdXI6IG51bWJlciwgaG91clR5cGU6IHN0cmluZykge1xuICAgIGlmICh0aGlzLm9wdGlvbnMudXNlMjRIb3VyVGltZSkge1xuICAgICAgcmV0dXJuIGhvdXI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBob3VyVHlwZSA9PT0gJ0FNJyA/IChob3VyID09PSAxMiA/IDAgOiBob3VyKSA6IChob3VyID09PSAxMiA/IDEyIDogaG91ciArIDEyKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZU1vZGVsQ2hhbmdlKGNyb246IHN0cmluZykge1xuICAgIGlmICh0aGlzLmlzRGlydHkpIHtcbiAgICAgIHRoaXMuaXNEaXJ0eSA9IGZhbHNlO1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlzRGlydHkgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuY3JvbklzVmFsaWQoY3JvbikpIHtcbiAgICAgIGlmICh0aGlzLmlzQ3JvbkZsYXZvclF1YXJ0eikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgY3JvbiBleHByZXNzaW9uLCB0aGVyZSBtdXN0IGJlIDYgb3IgNyBzZWdtZW50cycpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5pc0Nyb25GbGF2b3JTdGFuZGFyZCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgY3JvbiBleHByZXNzaW9uLCB0aGVyZSBtdXN0IGJlIDUgc2VnbWVudHMnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBvcmlnQ3Jvbjogc3RyaW5nID0gY3JvbjtcbiAgICBpZiAoY3Jvbi5zcGxpdCgnICcpLmxlbmd0aCA9PT0gNSAmJiB0aGlzLmlzQ3JvbkZsYXZvclN0YW5kYXJkKSB7XG4gICAgICBjcm9uID0gYDAgJHtjcm9ufSAqYDtcbiAgICB9XG5cbiAgICBjb25zdCBbc2Vjb25kcywgbWludXRlcywgaG91cnMsIGRheU9mTW9udGgsIG1vbnRoLCBkYXlPZldlZWtdID0gY3Jvbi5zcGxpdCgnICcpO1xuXG4gICAgaWYgKGNyb24ubWF0Y2goL1xcZCsgMFxcL1xcZCsgXFwqIDFcXC8xIFxcKiBbXFw/XFwqXSBcXCovKSkge1xuICAgICAgdGhpcy5hY3RpdmVUYWIgPSAnbWludXRlcyc7XG5cbiAgICAgIHRoaXMuc3RhdGUubWludXRlcy5taW51dGVzID0gcGFyc2VJbnQobWludXRlcy5zdWJzdHJpbmcoMiksIDEwKTtcbiAgICAgIHRoaXMuc3RhdGUubWludXRlcy5zZWNvbmRzID0gcGFyc2VJbnQoc2Vjb25kcywgMTApO1xuICAgIH0gZWxzZSBpZiAoY3Jvbi5tYXRjaCgvXFxkKyBcXGQrIDBcXC9cXGQrIDFcXC8xIFxcKiBbXFw/XFwqXSBcXCovKSkge1xuICAgICAgdGhpcy5hY3RpdmVUYWIgPSAnaG91cmx5JztcblxuICAgICAgdGhpcy5zdGF0ZS5ob3VybHkuaG91cnMgPSBwYXJzZUludChob3Vycy5zdWJzdHJpbmcoMiksIDEwKTtcbiAgICAgIHRoaXMuc3RhdGUuaG91cmx5Lm1pbnV0ZXMgPSBwYXJzZUludChtaW51dGVzLCAxMCk7XG4gICAgICB0aGlzLnN0YXRlLmhvdXJseS5zZWNvbmRzID0gcGFyc2VJbnQoc2Vjb25kcywgMTApO1xuICAgIH0gZWxzZSBpZiAoY3Jvbi5tYXRjaCgvXFxkKyBcXGQrIFxcZCsgMVxcL1xcZCsgXFwqIFtcXD9cXCpdIFxcKi8pKSB7XG4gICAgICB0aGlzLmFjdGl2ZVRhYiA9ICdkYWlseSc7XG5cbiAgICAgIHRoaXMuc3RhdGUuZGFpbHkuc3ViVGFiID0gJ2V2ZXJ5RGF5cyc7XG4gICAgICB0aGlzLnN0YXRlLmRhaWx5LmV2ZXJ5RGF5cy5kYXlzID0gcGFyc2VJbnQoZGF5T2ZNb250aC5zdWJzdHJpbmcoMiksIDEwKTtcbiAgICAgIGNvbnN0IHBhcnNlZEhvdXJzID0gcGFyc2VJbnQoaG91cnMsIDEwKTtcbiAgICAgIHRoaXMuc3RhdGUuZGFpbHkuZXZlcnlEYXlzLmhvdXJzID0gdGhpcy5nZXRBbVBtSG91cihwYXJzZWRIb3Vycyk7XG4gICAgICB0aGlzLnN0YXRlLmRhaWx5LmV2ZXJ5RGF5cy5ob3VyVHlwZSA9IHRoaXMuZ2V0SG91clR5cGUocGFyc2VkSG91cnMpO1xuICAgICAgdGhpcy5zdGF0ZS5kYWlseS5ldmVyeURheXMubWludXRlcyA9IHBhcnNlSW50KG1pbnV0ZXMsIDEwKTtcbiAgICAgIHRoaXMuc3RhdGUuZGFpbHkuZXZlcnlEYXlzLnNlY29uZHMgPSBwYXJzZUludChzZWNvbmRzLCAxMCk7XG4gICAgfSBlbHNlIGlmIChjcm9uLm1hdGNoKC9cXGQrIFxcZCsgXFxkKyBbXFw/XFwqXSBcXCogTU9OLUZSSSBcXCovKSkge1xuICAgICAgdGhpcy5hY3RpdmVUYWIgPSAnZGFpbHknO1xuXG4gICAgICB0aGlzLnN0YXRlLmRhaWx5LnN1YlRhYiA9ICdldmVyeVdlZWtEYXknO1xuICAgICAgY29uc3QgcGFyc2VkSG91cnMgPSBwYXJzZUludChob3VycywgMTApO1xuICAgICAgdGhpcy5zdGF0ZS5kYWlseS5ldmVyeVdlZWtEYXkuaG91cnMgPSB0aGlzLmdldEFtUG1Ib3VyKHBhcnNlZEhvdXJzKTtcbiAgICAgIHRoaXMuc3RhdGUuZGFpbHkuZXZlcnlXZWVrRGF5LmhvdXJUeXBlID0gdGhpcy5nZXRIb3VyVHlwZShwYXJzZWRIb3Vycyk7XG4gICAgICB0aGlzLnN0YXRlLmRhaWx5LmV2ZXJ5V2Vla0RheS5taW51dGVzID0gcGFyc2VJbnQobWludXRlcywgMTApO1xuICAgICAgdGhpcy5zdGF0ZS5kYWlseS5ldmVyeVdlZWtEYXkuc2Vjb25kcyA9IHBhcnNlSW50KHNlY29uZHMsIDEwKTtcbiAgICB9IGVsc2UgaWYgKGNyb24ubWF0Y2goL1xcZCsgXFxkKyBcXGQrIFtcXD9cXCpdIFxcKiAoTU9OfFRVRXxXRUR8VEhVfEZSSXxTQVR8U1VOKSgsKE1PTnxUVUV8V0VEfFRIVXxGUkl8U0FUfFNVTikpKiBcXCovKSkge1xuICAgICAgdGhpcy5hY3RpdmVUYWIgPSAnd2Vla2x5JztcbiAgICAgIHRoaXMuc2VsZWN0T3B0aW9ucy5kYXlzLmZvckVhY2god2Vla0RheSA9PiB0aGlzLnN0YXRlLndlZWtseVt3ZWVrRGF5XSA9IGZhbHNlKTtcbiAgICAgIGRheU9mV2Vlay5zcGxpdCgnLCcpLmZvckVhY2god2Vla0RheSA9PiB0aGlzLnN0YXRlLndlZWtseVt3ZWVrRGF5XSA9IHRydWUpO1xuICAgICAgY29uc3QgcGFyc2VkSG91cnMgPSBwYXJzZUludChob3VycywgMTApO1xuICAgICAgdGhpcy5zdGF0ZS53ZWVrbHkuaG91cnMgPSB0aGlzLmdldEFtUG1Ib3VyKHBhcnNlZEhvdXJzKTtcbiAgICAgIHRoaXMuc3RhdGUud2Vla2x5LmhvdXJUeXBlID0gdGhpcy5nZXRIb3VyVHlwZShwYXJzZWRIb3Vycyk7XG4gICAgICB0aGlzLnN0YXRlLndlZWtseS5taW51dGVzID0gcGFyc2VJbnQobWludXRlcywgMTApO1xuICAgICAgdGhpcy5zdGF0ZS53ZWVrbHkuc2Vjb25kcyA9IHBhcnNlSW50KHNlY29uZHMsIDEwKTtcbiAgICB9IGVsc2UgaWYgKGNyb24ubWF0Y2goL1xcZCsgXFxkKyBcXGQrIChcXGQrfEx8TFd8MVcpIDFcXC9cXGQrIFtcXD9cXCpdIFxcKi8pKSB7XG4gICAgICB0aGlzLmFjdGl2ZVRhYiA9ICdtb250aGx5JztcbiAgICAgIHRoaXMuc3RhdGUubW9udGhseS5zdWJUYWIgPSAnc3BlY2lmaWNEYXknO1xuICAgICAgdGhpcy5zdGF0ZS5tb250aGx5LnNwZWNpZmljRGF5LmRheSA9IGRheU9mTW9udGg7XG4gICAgICB0aGlzLnN0YXRlLm1vbnRobHkuc3BlY2lmaWNEYXkubW9udGhzID0gcGFyc2VJbnQobW9udGguc3Vic3RyaW5nKDIpLCAxMCk7XG4gICAgICBjb25zdCBwYXJzZWRIb3VycyA9IHBhcnNlSW50KGhvdXJzLCAxMCk7XG4gICAgICB0aGlzLnN0YXRlLm1vbnRobHkuc3BlY2lmaWNEYXkuaG91cnMgPSB0aGlzLmdldEFtUG1Ib3VyKHBhcnNlZEhvdXJzKTtcbiAgICAgIHRoaXMuc3RhdGUubW9udGhseS5zcGVjaWZpY0RheS5ob3VyVHlwZSA9IHRoaXMuZ2V0SG91clR5cGUocGFyc2VkSG91cnMpO1xuICAgICAgdGhpcy5zdGF0ZS5tb250aGx5LnNwZWNpZmljRGF5Lm1pbnV0ZXMgPSBwYXJzZUludChtaW51dGVzLCAxMCk7XG4gICAgICB0aGlzLnN0YXRlLm1vbnRobHkuc3BlY2lmaWNEYXkuc2Vjb25kcyA9IHBhcnNlSW50KHNlY29uZHMsIDEwKTtcbiAgICB9IGVsc2UgaWYgKGNyb24ubWF0Y2goL1xcZCsgXFxkKyBcXGQrIFtcXD9cXCpdIDFcXC9cXGQrIChNT058VFVFfFdFRHxUSFV8RlJJfFNBVHxTVU4pKCgjWzEtNV0pfEwpIFxcKi8pKSB7XG4gICAgICBjb25zdCBkYXkgPSBkYXlPZldlZWsuc3Vic3RyKDAsIDMpO1xuICAgICAgY29uc3QgbW9udGhXZWVrID0gZGF5T2ZXZWVrLnN1YnN0cigzKTtcbiAgICAgIHRoaXMuYWN0aXZlVGFiID0gJ21vbnRobHknO1xuICAgICAgdGhpcy5zdGF0ZS5tb250aGx5LnN1YlRhYiA9ICdzcGVjaWZpY1dlZWtEYXknO1xuICAgICAgdGhpcy5zdGF0ZS5tb250aGx5LnNwZWNpZmljV2Vla0RheS5tb250aFdlZWsgPSBtb250aFdlZWs7XG4gICAgICB0aGlzLnN0YXRlLm1vbnRobHkuc3BlY2lmaWNXZWVrRGF5LmRheSA9IGRheTtcbiAgICAgIHRoaXMuc3RhdGUubW9udGhseS5zcGVjaWZpY1dlZWtEYXkubW9udGhzID0gcGFyc2VJbnQobW9udGguc3Vic3RyaW5nKDIpLCAxMCk7XG4gICAgICBjb25zdCBwYXJzZWRIb3VycyA9IHBhcnNlSW50KGhvdXJzLCAxMCk7XG4gICAgICB0aGlzLnN0YXRlLm1vbnRobHkuc3BlY2lmaWNXZWVrRGF5LmhvdXJzID0gdGhpcy5nZXRBbVBtSG91cihwYXJzZWRIb3Vycyk7XG4gICAgICB0aGlzLnN0YXRlLm1vbnRobHkuc3BlY2lmaWNXZWVrRGF5LmhvdXJUeXBlID0gdGhpcy5nZXRIb3VyVHlwZShwYXJzZWRIb3Vycyk7XG4gICAgICB0aGlzLnN0YXRlLm1vbnRobHkuc3BlY2lmaWNXZWVrRGF5Lm1pbnV0ZXMgPSBwYXJzZUludChtaW51dGVzLCAxMCk7XG4gICAgICB0aGlzLnN0YXRlLm1vbnRobHkuc3BlY2lmaWNXZWVrRGF5LnNlY29uZHMgPSBwYXJzZUludChzZWNvbmRzLCAxMCk7XG4gICAgfSBlbHNlIGlmIChjcm9uLm1hdGNoKC9cXGQrIFxcZCsgXFxkKyAoXFxkK3xMfExXfDFXKSBcXGQrIFtcXD9cXCpdIFxcKi8pKSB7XG4gICAgICB0aGlzLmFjdGl2ZVRhYiA9ICd5ZWFybHknO1xuICAgICAgdGhpcy5zdGF0ZS55ZWFybHkuc3ViVGFiID0gJ3NwZWNpZmljTW9udGhEYXknO1xuICAgICAgdGhpcy5zdGF0ZS55ZWFybHkuc3BlY2lmaWNNb250aERheS5tb250aCA9IHBhcnNlSW50KG1vbnRoLCAxMCk7XG4gICAgICB0aGlzLnN0YXRlLnllYXJseS5zcGVjaWZpY01vbnRoRGF5LmRheSA9IGRheU9mTW9udGg7XG4gICAgICBjb25zdCBwYXJzZWRIb3VycyA9IHBhcnNlSW50KGhvdXJzLCAxMCk7XG4gICAgICB0aGlzLnN0YXRlLnllYXJseS5zcGVjaWZpY01vbnRoRGF5LmhvdXJzID0gdGhpcy5nZXRBbVBtSG91cihwYXJzZWRIb3Vycyk7XG4gICAgICB0aGlzLnN0YXRlLnllYXJseS5zcGVjaWZpY01vbnRoRGF5LmhvdXJUeXBlID0gdGhpcy5nZXRIb3VyVHlwZShwYXJzZWRIb3Vycyk7XG4gICAgICB0aGlzLnN0YXRlLnllYXJseS5zcGVjaWZpY01vbnRoRGF5Lm1pbnV0ZXMgPSBwYXJzZUludChtaW51dGVzLCAxMCk7XG4gICAgICB0aGlzLnN0YXRlLnllYXJseS5zcGVjaWZpY01vbnRoRGF5LnNlY29uZHMgPSBwYXJzZUludChzZWNvbmRzLCAxMCk7XG4gICAgfSBlbHNlIGlmIChjcm9uLm1hdGNoKC9cXGQrIFxcZCsgXFxkKyBbXFw/XFwqXSBcXGQrIChNT058VFVFfFdFRHxUSFV8RlJJfFNBVHxTVU4pKCgjWzEtNV0pfEwpIFxcKi8pKSB7XG4gICAgICBjb25zdCBkYXkgPSBkYXlPZldlZWsuc3Vic3RyKDAsIDMpO1xuICAgICAgY29uc3QgbW9udGhXZWVrID0gZGF5T2ZXZWVrLnN1YnN0cigzKTtcbiAgICAgIHRoaXMuYWN0aXZlVGFiID0gJ3llYXJseSc7XG4gICAgICB0aGlzLnN0YXRlLnllYXJseS5zdWJUYWIgPSAnc3BlY2lmaWNNb250aFdlZWsnO1xuICAgICAgdGhpcy5zdGF0ZS55ZWFybHkuc3BlY2lmaWNNb250aFdlZWsubW9udGhXZWVrID0gbW9udGhXZWVrO1xuICAgICAgdGhpcy5zdGF0ZS55ZWFybHkuc3BlY2lmaWNNb250aFdlZWsuZGF5ID0gZGF5O1xuICAgICAgdGhpcy5zdGF0ZS55ZWFybHkuc3BlY2lmaWNNb250aFdlZWsubW9udGggPSBwYXJzZUludChtb250aCwgMTApO1xuICAgICAgY29uc3QgcGFyc2VkSG91cnMgPSBwYXJzZUludChob3VycywgMTApO1xuICAgICAgdGhpcy5zdGF0ZS55ZWFybHkuc3BlY2lmaWNNb250aFdlZWsuaG91cnMgPSB0aGlzLmdldEFtUG1Ib3VyKHBhcnNlZEhvdXJzKTtcbiAgICAgIHRoaXMuc3RhdGUueWVhcmx5LnNwZWNpZmljTW9udGhXZWVrLmhvdXJUeXBlID0gdGhpcy5nZXRIb3VyVHlwZShwYXJzZWRIb3Vycyk7XG4gICAgICB0aGlzLnN0YXRlLnllYXJseS5zcGVjaWZpY01vbnRoV2Vlay5taW51dGVzID0gcGFyc2VJbnQobWludXRlcywgMTApO1xuICAgICAgdGhpcy5zdGF0ZS55ZWFybHkuc3BlY2lmaWNNb250aFdlZWsuc2Vjb25kcyA9IHBhcnNlSW50KHNlY29uZHMsIDEwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hY3RpdmVUYWIgPSAnYWR2YW5jZWQnO1xuICAgICAgdGhpcy5zdGF0ZS5hZHZhbmNlZC5leHByZXNzaW9uID0gb3JpZ0Nyb247XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjcm9uSXNWYWxpZChjcm9uOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoY3Jvbikge1xuICAgICAgY29uc3QgY3JvblBhcnRzID0gY3Jvbi5zcGxpdCgnICcpO1xuICAgICAgcmV0dXJuICh0aGlzLmlzQ3JvbkZsYXZvclF1YXJ0eiAmJiAoY3JvblBhcnRzLmxlbmd0aCA9PT0gNlxuICAgICAgICB8fCBjcm9uUGFydHMubGVuZ3RoID09PSA3KVxuICAgICAgICB8fCAodGhpcy5pc0Nyb25GbGF2b3JTdGFuZGFyZCAmJiBjcm9uUGFydHMubGVuZ3RoID09PSA1KSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cblxuICBwcml2YXRlIGdldERlZmF1bHRTdGF0ZSgpIHtcbiAgICBjb25zdCBbZGVmYXVsdEhvdXJzLCBkZWZhdWx0TWludXRlcywgZGVmYXVsdFNlY29uZHNdID0gdGhpcy5vcHRpb25zLmRlZmF1bHRUaW1lLnNwbGl0KCc6JykubWFwKE51bWJlcik7XG5cbiAgICByZXR1cm4ge1xuICAgICAgbWludXRlczoge1xuICAgICAgICBtaW51dGVzOiAxLFxuICAgICAgICBzZWNvbmRzOiAwXG4gICAgICB9LFxuICAgICAgaG91cmx5OiB7XG4gICAgICAgIGhvdXJzOiAxLFxuICAgICAgICBtaW51dGVzOiAwLFxuICAgICAgICBzZWNvbmRzOiAwXG4gICAgICB9LFxuICAgICAgZGFpbHk6IHtcbiAgICAgICAgc3ViVGFiOiAnZXZlcnlEYXlzJyxcbiAgICAgICAgZXZlcnlEYXlzOiB7XG4gICAgICAgICAgZGF5czogMSxcbiAgICAgICAgICBob3VyczogdGhpcy5nZXRBbVBtSG91cihkZWZhdWx0SG91cnMpLFxuICAgICAgICAgIG1pbnV0ZXM6IGRlZmF1bHRNaW51dGVzLFxuICAgICAgICAgIHNlY29uZHM6IGRlZmF1bHRTZWNvbmRzLFxuICAgICAgICAgIGhvdXJUeXBlOiB0aGlzLmdldEhvdXJUeXBlKGRlZmF1bHRIb3VycylcbiAgICAgICAgfSxcbiAgICAgICAgZXZlcnlXZWVrRGF5OiB7XG4gICAgICAgICAgaG91cnM6IHRoaXMuZ2V0QW1QbUhvdXIoZGVmYXVsdEhvdXJzKSxcbiAgICAgICAgICBtaW51dGVzOiBkZWZhdWx0TWludXRlcyxcbiAgICAgICAgICBzZWNvbmRzOiBkZWZhdWx0U2Vjb25kcyxcbiAgICAgICAgICBob3VyVHlwZTogdGhpcy5nZXRIb3VyVHlwZShkZWZhdWx0SG91cnMpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB3ZWVrbHk6IHtcbiAgICAgICAgTU9OOiB0cnVlLFxuICAgICAgICBUVUU6IGZhbHNlLFxuICAgICAgICBXRUQ6IGZhbHNlLFxuICAgICAgICBUSFU6IGZhbHNlLFxuICAgICAgICBGUkk6IGZhbHNlLFxuICAgICAgICBTQVQ6IGZhbHNlLFxuICAgICAgICBTVU46IGZhbHNlLFxuICAgICAgICBob3VyczogdGhpcy5nZXRBbVBtSG91cihkZWZhdWx0SG91cnMpLFxuICAgICAgICBtaW51dGVzOiBkZWZhdWx0TWludXRlcyxcbiAgICAgICAgc2Vjb25kczogZGVmYXVsdFNlY29uZHMsXG4gICAgICAgIGhvdXJUeXBlOiB0aGlzLmdldEhvdXJUeXBlKGRlZmF1bHRIb3VycylcbiAgICAgIH0sXG4gICAgICBtb250aGx5OiB7XG4gICAgICAgIHN1YlRhYjogJ3NwZWNpZmljRGF5JyxcbiAgICAgICAgc3BlY2lmaWNEYXk6IHtcbiAgICAgICAgICBkYXk6ICcxJyxcbiAgICAgICAgICBtb250aHM6IDEsXG4gICAgICAgICAgaG91cnM6IHRoaXMuZ2V0QW1QbUhvdXIoZGVmYXVsdEhvdXJzKSxcbiAgICAgICAgICBtaW51dGVzOiBkZWZhdWx0TWludXRlcyxcbiAgICAgICAgICBzZWNvbmRzOiBkZWZhdWx0U2Vjb25kcyxcbiAgICAgICAgICBob3VyVHlwZTogdGhpcy5nZXRIb3VyVHlwZShkZWZhdWx0SG91cnMpXG4gICAgICAgIH0sXG4gICAgICAgIHNwZWNpZmljV2Vla0RheToge1xuICAgICAgICAgIG1vbnRoV2VlazogJyMxJyxcbiAgICAgICAgICBkYXk6ICdNT04nLFxuICAgICAgICAgIG1vbnRoczogMSxcbiAgICAgICAgICBob3VyczogdGhpcy5nZXRBbVBtSG91cihkZWZhdWx0SG91cnMpLFxuICAgICAgICAgIG1pbnV0ZXM6IGRlZmF1bHRNaW51dGVzLFxuICAgICAgICAgIHNlY29uZHM6IGRlZmF1bHRTZWNvbmRzLFxuICAgICAgICAgIGhvdXJUeXBlOiB0aGlzLmdldEhvdXJUeXBlKGRlZmF1bHRIb3VycylcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHllYXJseToge1xuICAgICAgICBzdWJUYWI6ICdzcGVjaWZpY01vbnRoRGF5JyxcbiAgICAgICAgc3BlY2lmaWNNb250aERheToge1xuICAgICAgICAgIG1vbnRoOiAxLFxuICAgICAgICAgIGRheTogJzEnLFxuICAgICAgICAgIGhvdXJzOiB0aGlzLmdldEFtUG1Ib3VyKGRlZmF1bHRIb3VycyksXG4gICAgICAgICAgbWludXRlczogZGVmYXVsdE1pbnV0ZXMsXG4gICAgICAgICAgc2Vjb25kczogZGVmYXVsdFNlY29uZHMsXG4gICAgICAgICAgaG91clR5cGU6IHRoaXMuZ2V0SG91clR5cGUoZGVmYXVsdEhvdXJzKVxuICAgICAgICB9LFxuICAgICAgICBzcGVjaWZpY01vbnRoV2Vlazoge1xuICAgICAgICAgIG1vbnRoV2VlazogJyMxJyxcbiAgICAgICAgICBkYXk6ICdNT04nLFxuICAgICAgICAgIG1vbnRoOiAxLFxuICAgICAgICAgIGhvdXJzOiB0aGlzLmdldEFtUG1Ib3VyKGRlZmF1bHRIb3VycyksXG4gICAgICAgICAgbWludXRlczogZGVmYXVsdE1pbnV0ZXMsXG4gICAgICAgICAgc2Vjb25kczogZGVmYXVsdFNlY29uZHMsXG4gICAgICAgICAgaG91clR5cGU6IHRoaXMuZ2V0SG91clR5cGUoZGVmYXVsdEhvdXJzKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgYWR2YW5jZWQ6IHtcbiAgICAgICAgZXhwcmVzc2lvbjogdGhpcy5pc0Nyb25GbGF2b3JRdWFydHogPyAnMCAxNSAxMCBMLTIgKiA/IConIDogJzE1IDEwIDIgKiAqJ1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICBwcml2YXRlIGdldE9yZGluYWxTdWZmaXgodmFsdWU6IHN0cmluZykge1xuICAgIGlmICh2YWx1ZS5sZW5ndGggPiAxKSB7XG4gICAgICBjb25zdCBzZWNvbmRUb0xhc3REaWdpdCA9IHZhbHVlLmNoYXJBdCh2YWx1ZS5sZW5ndGggLSAyKTtcbiAgICAgIGlmIChzZWNvbmRUb0xhc3REaWdpdCA9PT0gJzEnKSB7XG4gICAgICAgIHJldHVybiAndGgnO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGxhc3REaWdpdCA9IHZhbHVlLmNoYXJBdCh2YWx1ZS5sZW5ndGggLSAxKTtcbiAgICBzd2l0Y2ggKGxhc3REaWdpdCkge1xuICAgICAgY2FzZSAnMSc6XG4gICAgICAgIHJldHVybiAnc3QnO1xuICAgICAgY2FzZSAnMic6XG4gICAgICAgIHJldHVybiAnbmQnO1xuICAgICAgY2FzZSAnMyc6XG4gICAgICAgIHJldHVybiAncmQnO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuICd0aCc7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRTZWxlY3RPcHRpb25zKCkge1xuICAgIHJldHVybiB7XG4gICAgICBtb250aHM6IHRoaXMuZ2V0UmFuZ2UoMSwgMTIpLFxuICAgICAgbW9udGhXZWVrczogWycjMScsICcjMicsICcjMycsICcjNCcsICcjNScsICdMJ10sXG4gICAgICBkYXlzOiBbJ01PTicsICdUVUUnLCAnV0VEJywgJ1RIVScsICdGUkknLCAnU0FUJywgJ1NVTiddLFxuICAgICAgbWludXRlczogdGhpcy5nZXRSYW5nZSgwLCA1OSksXG4gICAgICBmdWxsTWludXRlczogdGhpcy5nZXRSYW5nZSgwLCA1OSksXG4gICAgICBzZWNvbmRzOiB0aGlzLmdldFJhbmdlKDAsIDU5KSxcbiAgICAgIGhvdXJzOiB0aGlzLmdldFJhbmdlKDEsIDIzKSxcbiAgICAgIG1vbnRoRGF5czogdGhpcy5nZXRSYW5nZSgxLCAzMSksXG4gICAgICBtb250aERheXNXaXRoTGFzdHM6IFsnMVcnLCAuLi5bLi4udGhpcy5nZXRSYW5nZSgxLCAzMSkubWFwKFN0cmluZyldLCAnTFcnLCAnTCddLFxuICAgICAgbW9udGhEYXlzV2l0aE91dExhc3RzOiBbLi4uWy4uLnRoaXMuZ2V0UmFuZ2UoMSwgMzEpLm1hcChTdHJpbmcpXV0sXG4gICAgICBob3VyVHlwZXM6IFsnQU0nLCAnUE0nXVxuICAgIH07XG4gIH1cblxuICBwcml2YXRlIGdldFJhbmdlKHN0YXJ0OiBudW1iZXIsIGVuZDogbnVtYmVyKTogbnVtYmVyW10ge1xuICAgIGNvbnN0IGxlbmd0aCA9IGVuZCAtIHN0YXJ0ICsgMTtcbiAgICByZXR1cm4gQXJyYXkuYXBwbHkobnVsbCwgQXJyYXkobGVuZ3RoKSkubWFwKChfLCBpKSA9PiBpICsgc3RhcnQpO1xuICB9XG5cblxuICAvKlxuICAgKiBDb250cm9sVmFsdWVBY2Nlc3NvclxuICAgKi9cbiAgb25DaGFuZ2UgPSAoXzogYW55KSA9PiB7XG4gIH07XG4gIG9uVG91Y2hlZCA9ICgpID0+IHtcbiAgfTtcblxuICB3cml0ZVZhbHVlKG9iajogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5jcm9uID0gb2JqO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgfVxuXG59XG4iLCI8c2VjdGlvbiBjbGFzcz1cImNyb24tZWRpdG9yLW1haW5cIj5cbiAgICA8bWF0LXRhYi1ncm91cCBjbGFzcz1cImNyb24tZWRpdG9yLWNvbnRhaW5lclwiIChzZWxlY3RlZEluZGV4Q2hhbmdlKT1cIm9uVGFiRm9jdXMoJGV2ZW50KVwiIFtiYWNrZ3JvdW5kQ29sb3JdPVwiYmFja2dyb3VuZENvbG9yXCIgW2NvbG9yXT1cImNvbG9yXCI+XG5cbiAgICAgIDwhLS0gTWludXRlIC0tPlxuICAgICAgPG1hdC10YWIgY2xhc3M9XCJjcm9uLWVkaXRvci10YWJcIiBsYWJlbD1cIk1pbnV0ZXNcIiAqbmdJZj1cIiFvcHRpb25zLmhpZGVNaW51dGVzVGFiXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjcm9uLWVkaXRvci10YWItY29udGVudFwiPlxuXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJjcm9uLWZvcm0tbGFiZWxcIj5FdmVyeSA8L3NwYW4+XG5cbiAgICAgICAgICAgIDxjcm9uLXRpbWUtcGlja2VyXG4gICAgICAgICAgICAgIFtmb3JtR3JvdXBdPVwibWludXRlc0Zvcm1cIlxuICAgICAgICAgICAgICBbdXNlMjRIb3VyVGltZV09XCJvcHRpb25zLnVzZTI0SG91clRpbWVcIlxuICAgICAgICAgICAgICBbaGlkZUhvdXJzXT1cInRydWVcIlxuICAgICAgICAgICAgICBbaGlkZVNlY29uZHNdPVwib3B0aW9ucy5oaWRlU2Vjb25kcyB8fCAhaXNDcm9uRmxhdm9yUXVhcnR6XCI+XG4gICAgICAgICAgICA8L2Nyb24tdGltZS1waWNrZXI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tYXQtdGFiPlxuXG4gICAgICA8IS0tIEhvdXJseSAtLT5cbiAgICAgIDxtYXQtdGFiIGNsYXNzPVwiY3Jvbi1lZGl0b3ItdGFiXCIgbGFiZWw9XCJIb3VybHlcIiAqbmdJZj1cIiFvcHRpb25zLmhpZGVIb3VybHlUYWJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNyb24tZWRpdG9yLXRhYi1jb250ZW50XCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJjcm9uLWZvcm0tbGFiZWxcIj5FdmVyeSA8L3NwYW4+XG5cbiAgICAgICAgICA8Y3Jvbi10aW1lLXBpY2tlciBbZm9ybUdyb3VwXT1cImhvdXJseUZvcm1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3VzZTI0SG91clRpbWVdPVwib3B0aW9ucy51c2UyNEhvdXJUaW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtoaWRlU2Vjb25kc109XCJvcHRpb25zLmhpZGVTZWNvbmRzIHx8ICAhaXNDcm9uRmxhdm9yUXVhcnR6XCI+XG4gICAgICAgICAgPC9jcm9uLXRpbWUtcGlja2VyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWF0LXRhYj5cblxuXG4gICAgICA8IS0tIERhaWx5LS0+XG4gICAgICA8bWF0LXRhYiBjbGFzcz1cImNyb24tZWRpdG9yLXRhYlwiIGxhYmVsPVwiRGFpbHlcIiAqbmdJZj1cIiFvcHRpb25zLmhpZGVEYWlseVRhYlwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY3Jvbi1lZGl0b3ItdGFiLWNvbnRlbnRcIiBbZm9ybUdyb3VwXT1cImRhaWx5Rm9ybVwiPlxuXG4gICAgICAgICAgPG1hdC1yYWRpby1ncm91cCBjbGFzcz1cImNyb24tZWRpdG9yLXJhZGlvLWdyb3VwXCIgZm9ybUNvbnRyb2xOYW1lPVwic3ViVGFiXCI+XG4gICAgICAgICAgICA8bWF0LXJhZGlvLWJ1dHRvbiBuYW1lPVwic3ViVGFiXCIgY2xhc3M9XCJjcm9uLWVkaXRvci1yYWRpby1idXR0b25cIiB2YWx1ZT1cImV2ZXJ5RGF5c1wiIGNoZWNrZWQ9XCJjaGVja2VkXCI+XG5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjcm9uLWZvcm0tbGFiZWxcIj5FdmVyeSA8L3NwYW4+XG5cbiAgICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGZvcm1Hcm91cE5hbWU9XCJldmVyeURheXNcIj5cbiAgICAgICAgICAgICAgICA8bWF0LWxhYmVsPkRheShzKTwvbWF0LWxhYmVsPlxuICAgICAgICAgICAgICAgIDxtYXQtc2VsZWN0IGZvcm1Db250cm9sTmFtZT1cImRheXNcIj5cbiAgICAgICAgICAgICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBtb250aERheSBvZiBzZWxlY3RPcHRpb25zLm1vbnRoRGF5c1wiIFt2YWx1ZV09XCJtb250aERheVwiPlxuICAgICAgICAgICAgICAgICAgICB7e21vbnRoRGF5fX1cbiAgICAgICAgICAgICAgICAgIDwvbWF0LW9wdGlvbj5cbiAgICAgICAgICAgICAgICA8L21hdC1zZWxlY3Q+XG4gICAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG5cbiAgICAgICAgICAgICAgIGF0XG5cbiAgICAgICAgICAgICAgPGNyb24tdGltZS1waWNrZXJcbiAgICAgICAgICAgICAgICBmb3JtR3JvdXBOYW1lPVwiZXZlcnlEYXlzXCJcbiAgICAgICAgICAgICAgICBbdXNlMjRIb3VyVGltZV09XCJvcHRpb25zLnVzZTI0SG91clRpbWVcIlxuICAgICAgICAgICAgICAgIFtoaWRlU2Vjb25kc109XCJvcHRpb25zLmhpZGVTZWNvbmRzIHx8ICFpc0Nyb25GbGF2b3JRdWFydHpcIj5cbiAgICAgICAgICAgICAgPC9jcm9uLXRpbWUtcGlja2VyPlxuXG4gICAgICAgICAgICA8L21hdC1yYWRpby1idXR0b24+XG5cbiAgICAgICAgICAgIDxtYXQtcmFkaW8tYnV0dG9uIG5hbWU9XCJzdWJUYWJcIiBjbGFzcz1cImNyb24tZWRpdG9yLXJhZGlvLWJ1dHRvblwiIHZhbHVlPVwiZXZlcnlXZWVrRGF5XCI+XG5cbiAgICAgICAgICAgICAgPHNwYW4+V2VlayBEYXkgKE1PTi1GUkkpIGF0IDwvc3Bhbj5cblxuICAgICAgICAgICAgICA8Y3Jvbi10aW1lLXBpY2tlclxuICAgICAgICAgICAgICAgIGZvcm1Hcm91cE5hbWU9XCJldmVyeVdlZWtEYXlcIlxuICAgICAgICAgICAgICAgIFt1c2UyNEhvdXJUaW1lXT1cIm9wdGlvbnMudXNlMjRIb3VyVGltZVwiXG4gICAgICAgICAgICAgICAgW2hpZGVTZWNvbmRzXT1cIm9wdGlvbnMuaGlkZVNlY29uZHMgfHwgIWlzQ3JvbkZsYXZvclF1YXJ0elwiPlxuICAgICAgICAgICAgICA8L2Nyb24tdGltZS1waWNrZXI+XG5cbiAgICAgICAgICAgIDwvbWF0LXJhZGlvLWJ1dHRvbj5cbiAgICAgICAgICA8L21hdC1yYWRpby1ncm91cD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWF0LXRhYj5cblxuICAgICAgPCEtLSBXZWVrbHktLT5cbiAgICAgIDxtYXQtdGFiICBjbGFzcz1cImNyb24tZWRpdG9yLXRhYlwiIGxhYmVsPVwiV2Vla2x5XCIgKm5nSWY9XCIhb3B0aW9ucy5oaWRlV2Vla2x5VGFiXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjcm9uLWVkaXRvci10YWItY29udGVudFwiPlxuXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJjcm9uLWZvcm0tbGFiZWxcIj5FdmVyeSA8L3NwYW4+XG5cbiAgICAgICAgICA8ZGl2IFtmb3JtR3JvdXBdPVwid2Vla2x5Rm9ybVwiPlxuICAgICAgICAgICAgPG1hdC1jaGVja2JveCBjbGFzcz1cImNoZWNrYm94LW1hcmdpblwiIGZvcm1Db250cm9sTmFtZT1cIk1PTlwiPk1vbmRheTwvbWF0LWNoZWNrYm94PlxuICAgICAgICAgICAgPG1hdC1jaGVja2JveCBjbGFzcz1cImNoZWNrYm94LW1hcmdpblwiIGZvcm1Db250cm9sTmFtZT1cIlRVRVwiPlR1ZXNkYXk8L21hdC1jaGVja2JveD5cbiAgICAgICAgICAgIDxtYXQtY2hlY2tib3ggY2xhc3M9XCJjaGVja2JveC1tYXJnaW5cIiBmb3JtQ29udHJvbE5hbWU9XCJXRURcIj5XZWRuZXNkYXk8L21hdC1jaGVja2JveD5cbiAgICAgICAgICAgIDxtYXQtY2hlY2tib3ggY2xhc3M9XCJjaGVja2JveC1tYXJnaW5cIiBmb3JtQ29udHJvbE5hbWU9XCJUSFVcIj5UaHVyc2RheTwvbWF0LWNoZWNrYm94PlxuICAgICAgICAgICAgPG1hdC1jaGVja2JveCBjbGFzcz1cImNoZWNrYm94LW1hcmdpblwiIGZvcm1Db250cm9sTmFtZT1cIkZSSVwiPkZyaWRheTwvbWF0LWNoZWNrYm94PlxuICAgICAgICAgICAgPG1hdC1jaGVja2JveCBjbGFzcz1cImNoZWNrYm94LW1hcmdpblwiIGZvcm1Db250cm9sTmFtZT1cIlNBVFwiPlNhdHVyZGF5PC9tYXQtY2hlY2tib3g+XG4gICAgICAgICAgICA8bWF0LWNoZWNrYm94IGNsYXNzPVwiY2hlY2tib3gtbWFyZ2luXCIgZm9ybUNvbnRyb2xOYW1lPVwiU1VOXCI+U3VuZGF5PC9tYXQtY2hlY2tib3g+XG4gICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY3Jvbi1mb3JtLWxhYmVsXCI+YXQgdGltZSA8L3NwYW4+XG5cbiAgICAgICAgICA8Y3Jvbi10aW1lLXBpY2tlciBbZm9ybUdyb3VwXT1cIndlZWtseUZvcm1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt1c2UyNEhvdXJUaW1lXT1cIm9wdGlvbnMudXNlMjRIb3VyVGltZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2hpZGVTZWNvbmRzXT1cIm9wdGlvbnMuaGlkZVNlY29uZHN8fCAhaXNDcm9uRmxhdm9yUXVhcnR6XCI+XG4gICAgICAgICAgPC9jcm9uLXRpbWUtcGlja2VyPlxuICAgICAgICA8L2Rpdj5cblxuICAgIDwvbWF0LXRhYj5cblxuICAgICAgPCEtLSBNb250aGx5LS0+XG4gICAgICA8bWF0LXRhYiBjbGFzcz1cImNyb24tZWRpdG9yLXRhYlwiIGxhYmVsPVwiTW9udGhseVwiICpuZ0lmPVwiIW9wdGlvbnMuaGlkZU1vbnRobHlUYWJcIj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiY3Jvbi1lZGl0b3ItdGFiLWNvbnRlbnRcIiBbZm9ybUdyb3VwXT1cIm1vbnRobHlGb3JtXCI+XG5cblxuICAgICAgICAgIDxtYXQtcmFkaW8tZ3JvdXAgZm9ybUNvbnRyb2xOYW1lPVwic3ViVGFiXCI+XG5cbiAgICAgICAgICAgIDxtYXQtcmFkaW8tYnV0dG9uICBuYW1lPVwibW9udGhseS1yYWRpb1wiIHZhbHVlPVwic3BlY2lmaWNEYXlcIiA+XG5cbiAgICAgICAgICAgICAgPCEtLSBTcGVzaWZpYyBkYXkgLS0+XG4gICAgICAgICAgICAgIDxzcGFuIGZvcm1Hcm91cE5hbWU9XCJzcGVjaWZpY0RheVwiPlxuXG4gICAgICAgICAgICAgICAgT24gdGhlXG5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwib3B0aW9ucy5jcm9uRmxhdm9yID09PSAncXVhcnR6J1wiPlxuICAgICAgICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgICAgICAgICAgICAgICAgICA8bWF0LWxhYmVsPkRheTwvbWF0LWxhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8bWF0LXNlbGVjdCBjbGFzcz1cIm1vbnRoLWRheXNcIiBmb3JtQ29udHJvbE5hbWU9XCJkYXlcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uICpuZ0Zvcj1cImxldCBtb250aERheXNXaXRoTGFzdCBvZiBzZWxlY3RPcHRpb25zLm1vbnRoRGF5c1dpdGhMYXN0c1wiIFt2YWx1ZV09XCJtb250aERheXNXaXRoTGFzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3ttb250aERheURpc3BsYXkobW9udGhEYXlzV2l0aExhc3QpfX1cbiAgICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9tYXQtc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJvcHRpb25zLmNyb25GbGF2b3IgPT09ICdzdGFuZGFyZCdcIj5cbiAgICAgICAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICAgICAgICAgICAgICAgICAgPG1hdC1sYWJlbD5EYXk8L21hdC1sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPG1hdC1zZWxlY3QgY2xhc3M9XCJtb250aC1kYXlzXCIgIGZvcm1Db250cm9sTmFtZT1cImRheVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBtb250aERheXNXaXRoT3V0TGFzdCBvZiBzZWxlY3RPcHRpb25zLm1vbnRoRGF5c1dpdGhPdXRMYXN0c1wiIFt2YWx1ZV09XCJtb250aERheXNXaXRoT3V0TGFzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3ttb250aERheURpc3BsYXkobW9udGhEYXlzV2l0aE91dExhc3QpfX1cbiAgICAgICAgICAgICAgICAgICAgICA8L21hdC1vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDwvbWF0LXNlbGVjdD5cbiAgICAgICAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgICBvZiBldmVyeVxuXG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICAgICAgICAgICAgICAgICAgPG1hdC1sYWJlbD5Nb250aDwvbWF0LWxhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8bWF0LXNlbGVjdCBjbGFzcz1cIm1vbnRocy1zbWFsbFwiIGZvcm1Db250cm9sTmFtZT1cIm1vbnRoc1wiIFtuZ0NsYXNzXT1cIm9wdGlvbnMuZm9ybVNlbGVjdENsYXNzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IG1vbnRoIG9mIHNlbGVjdE9wdGlvbnMubW9udGhzXCIgW3ZhbHVlXT1cIm1vbnRoXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7e21vbnRofX1cbiAgICAgICAgICAgICAgICAgICAgICA8L21hdC1vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDwvbWF0LXNlbGVjdD5cbiAgICAgICAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgICBhdCB0aW1lXG5cbiAgICAgICAgICAgICAgICA8Y3Jvbi10aW1lLXBpY2tlciBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIiBbZm9ybUdyb3VwXT1cIm1vbnRobHlGb3JtLmNvbnRyb2xzLnNwZWNpZmljRGF5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbdXNlMjRIb3VyVGltZV09XCJvcHRpb25zLnVzZTI0SG91clRpbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtoaWRlU2Vjb25kc109XCJvcHRpb25zLmhpZGVTZWNvbmRzIHx8ICFpc0Nyb25GbGF2b3JRdWFydHpcIj5cbiAgICAgICAgICAgICAgICA8L2Nyb24tdGltZS1waWNrZXI+XG4gICAgICAgICAgICAgIDwvc3Bhbj5cblxuXG4gICAgICAgICAgICA8L21hdC1yYWRpby1idXR0b24+XG5cbiAgICAgICAgICAgIDxtYXQtcmFkaW8tYnV0dG9uICBuYW1lPVwibW9udGhseS1yYWRpb1wiIHZhbHVlPVwic3BlY2lmaWNXZWVrRGF5XCI+XG5cbiAgICAgICAgICAgICAgPCEtLSBTcGVzaWZpYyBXZWVrIGRheSAtLT5cbiAgICAgICAgICAgICAgPHNwYW4gZm9ybUdyb3VwTmFtZT1cInNwZWNpZmljV2Vla0RheVwiPlxuXG4gICAgICAgICAgICAgICAgT24gdGhlXG5cbiAgICAgICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgICAgICAgICAgICAgICA8bWF0LWxhYmVsPldlZWs8L21hdC1sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxtYXQtc2VsZWN0IGNsYXNzPVwiZGF5LW9yZGVyLWluLW1vbnRoXCIgZm9ybUNvbnRyb2xOYW1lPVwibW9udGhXZWVrXCIgW25nQ2xhc3NdPVwib3B0aW9ucy5mb3JtU2VsZWN0Q2xhc3NcIj5cbiAgICAgICAgICAgICAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IG1vbnRoV2VlayBvZiBzZWxlY3RPcHRpb25zLm1vbnRoV2Vla3NcIiBbdmFsdWVdPVwibW9udGhXZWVrXCI+XG4gICAgICAgICAgICAgICAgICAgICAge3ttb250aFdlZWtEaXNwbGF5KG1vbnRoV2Vlayl9fVxuICAgICAgICAgICAgICAgICAgICA8L21hdC1vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8L21hdC1zZWxlY3Q+XG4gICAgICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cblxuICAgICAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICAgICAgICAgICAgICAgIDxtYXQtbGFiZWw+RGF5PC9tYXQtbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8bWF0LXNlbGVjdCBjbGFzcz1cIndlZWstZGF5c1wiIGZvcm1Db250cm9sTmFtZT1cImRheVwiIFtuZ0NsYXNzXT1cIm9wdGlvbnMuZm9ybVNlbGVjdENsYXNzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBkYXkgb2Ygc2VsZWN0T3B0aW9ucy5kYXlzXCIgW3ZhbHVlXT1cImRheVwiPlxuICAgICAgICAgICAgICAgICAgICAgIHt7ZGF5RGlzcGxheShkYXkpfX1cbiAgICAgICAgICAgICAgICAgICAgPC9tYXQtb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgPC9tYXQtc2VsZWN0PlxuICAgICAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG5cbiAgICAgICAgICAgICAgICBvZiBldmVyeVxuXG4gICAgICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgICAgICAgICAgICAgICAgPG1hdC1sYWJlbD5Nb250aDwvbWF0LWxhYmVsPlxuICAgICAgICAgICAgICAgICAgPG1hdC1zZWxlY3QgY2xhc3M9XCJtb250aHMtc21hbGxcIiBmb3JtQ29udHJvbE5hbWU9XCJtb250aHNcIj5cbiAgICAgICAgICAgICAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IG1vbnRoIG9mIHNlbGVjdE9wdGlvbnMubW9udGhzXCIgW3ZhbHVlXT1cIm1vbnRoXCI+XG4gICAgICAgICAgICAgICAgICAgICAge3ttb250aH19XG4gICAgICAgICAgICAgICAgICAgIDwvbWF0LW9wdGlvbj5cbiAgICAgICAgICAgICAgICAgIDwvbWF0LXNlbGVjdD5cbiAgICAgICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxuXG4gICAgICAgICAgICAgICAgYXQgdGltZVxuXG4gICAgICAgICAgICAgICAgPGNyb24tdGltZS1waWNrZXIgW2Zvcm1Hcm91cF09XCJtb250aGx5Rm9ybS5jb250cm9scy5zcGVjaWZpY1dlZWtEYXlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt1c2UyNEhvdXJUaW1lXT1cIm9wdGlvbnMudXNlMjRIb3VyVGltZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2hpZGVTZWNvbmRzXT1cIm9wdGlvbnMuaGlkZVNlY29uZHMgfHwgIWlzQ3JvbkZsYXZvclF1YXJ0elwiPlxuXG4gICAgICAgICAgICAgICAgPC9jcm9uLXRpbWUtcGlja2VyPlxuXG5cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9tYXQtcmFkaW8tYnV0dG9uPlxuXG4gICAgICAgICAgPC9tYXQtcmFkaW8tZ3JvdXA+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21hdC10YWI+XG5cbiAgICAgIDwhLS0gWWVhcmx5LS0+XG4gICAgICA8bWF0LXRhYiBjbGFzcz1cImNyb24tZWRpdG9yLXRhYlwiICBsYWJlbD1cIlllYXJseVwiICpuZ0lmPVwiIW9wdGlvbnMuaGlkZVllYXJseVRhYlwiPlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjcm9uLWVkaXRvci10YWItY29udGVudFwiIFtmb3JtR3JvdXBdPVwieWVhcmx5Rm9ybVwiPlxuXG4gICAgICAgICAgPG1hdC1yYWRpby1ncm91cCBmb3JtQ29udHJvbE5hbWU9XCJzdWJUYWJcIj5cblxuICAgICAgICAgICAgPG1hdC1yYWRpby1idXR0b24gbmFtZT1cInllYXJseS1yYWRpb1wiIHZhbHVlPVwic3BlY2lmaWNNb250aERheVwiPlxuXG4gICAgICAgICAgICAgIE9uIHRoZVxuXG4gICAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBmb3JtR3JvdXBOYW1lPVwic3BlY2lmaWNNb250aERheVwiICpuZ0lmPVwib3B0aW9ucy5jcm9uRmxhdm9yID09PSAncXVhcnR6J1wiPlxuICAgICAgICAgICAgICAgIDxtYXQtbGFiZWw+RGF5PC9tYXQtbGFiZWw+XG4gICAgICAgICAgICAgICAgPG1hdC1zZWxlY3QgY2xhc3M9XCJtb250aC1kYXlzXCIgZm9ybUNvbnRyb2xOYW1lPVwiZGF5XCI+XG4gICAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgbW9udGhEYXlzV2l0aExhc3Qgb2Ygc2VsZWN0T3B0aW9ucy5tb250aERheXNXaXRoTGFzdHNcIiBbdmFsdWVdPVwibW9udGhEYXlzV2l0aExhc3RcIj5cbiAgICAgICAgICAgICAgICAgICAge3ttb250aERheURpc3BsYXkobW9udGhEYXlzV2l0aExhc3QpfX1cbiAgICAgICAgICAgICAgICAgIDwvbWF0LW9wdGlvbj5cbiAgICAgICAgICAgICAgICA8L21hdC1zZWxlY3Q+XG4gICAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG5cbiAgICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGZvcm1Hcm91cE5hbWU9XCJzcGVjaWZpY01vbnRoRGF5XCIgKm5nSWY9XCJvcHRpb25zLmNyb25GbGF2b3IgPT09ICdzdGFuZGFyZCdcIj5cbiAgICAgICAgICAgICAgICA8bWF0LWxhYmVsPkRheTwvbWF0LWxhYmVsPlxuICAgICAgICAgICAgICAgIDxtYXQtc2VsZWN0IGNsYXNzPVwibW9udGgtZGF5c1wiIGZvcm1Db250cm9sTmFtZT1cImRheVwiID5cbiAgICAgICAgICAgICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBtb250aERheXNXaXRoT3V0TGFzdCBvZiBzZWxlY3RPcHRpb25zLm1vbnRoRGF5c1dpdGhPdXRMYXN0c1wiIFt2YWx1ZV09XCJtb250aERheXNXaXRoT3V0TGFzdFwiPlxuICAgICAgICAgICAgICAgICAgICB7e21vbnRoRGF5RGlzcGxheShtb250aERheXNXaXRoT3V0TGFzdCl9fVxuICAgICAgICAgICAgICAgICAgPC9tYXQtb3B0aW9uPlxuICAgICAgICAgICAgICAgIDwvbWF0LXNlbGVjdD5cbiAgICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cblxuICAgICAgICAgICAgICBvZlxuXG4gICAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBmb3JtR3JvdXBOYW1lPVwic3BlY2lmaWNNb250aERheVwiPlxuICAgICAgICAgICAgICAgIDxtYXQtbGFiZWw+TW9udGg8L21hdC1sYWJlbD5cbiAgICAgICAgICAgICAgICA8bWF0LXNlbGVjdCBjbGFzcz1cIm1vbnRoc1wiIGZvcm1Db250cm9sTmFtZT1cIm1vbnRoXCI+XG4gICAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgbW9udGggb2Ygc2VsZWN0T3B0aW9ucy5tb250aHNcIiBbdmFsdWVdPVwibW9udGhcIj5cbiAgICAgICAgICAgICAgICAgICAge3ttb250aERpc3BsYXkobW9udGgpfX1cbiAgICAgICAgICAgICAgICAgIDwvbWF0LW9wdGlvbj5cbiAgICAgICAgICAgICAgICA8L21hdC1zZWxlY3Q+XG4gICAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG5cbiAgICAgICAgICAgICAgYXQgdGltZVxuXG4gICAgICAgICAgICAgIDxjcm9uLXRpbWUtcGlja2VyIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtmb3JtR3JvdXBdPVwieWVhcmx5Rm9ybS5jb250cm9scy5zcGVjaWZpY01vbnRoRGF5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3VzZTI0SG91clRpbWVdPVwib3B0aW9ucy51c2UyNEhvdXJUaW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2hpZGVTZWNvbmRzXT1cIm9wdGlvbnMuaGlkZVNlY29uZHMgfHwgIWlzQ3JvbkZsYXZvclF1YXJ0elwiPlxuICAgICAgICAgICAgICA8L2Nyb24tdGltZS1waWNrZXI+XG4gICAgICAgICAgICA8L21hdC1yYWRpby1idXR0b24+XG5cbiAgICAgICAgICAgIDxtYXQtcmFkaW8tYnV0dG9uIG5hbWU9XCJ5ZWFybHktcmFkaW9cIiB2YWx1ZT1cInNwZWNpZmljTW9udGhXZWVrXCIgW25nQ2xhc3NdPVwic3RhdGUuZm9ybVJhZGlvQ2xhc3NcIj5cblxuICAgICAgICAgICAgICBPbiB0aGVcblxuICAgICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgZm9ybUdyb3VwTmFtZT1cInNwZWNpZmljTW9udGhXZWVrXCI+XG4gICAgICAgICAgICAgICAgPG1hdC1sYWJlbD5XZWVrPC9tYXQtbGFiZWw+XG4gICAgICAgICAgICAgICAgPG1hdC1zZWxlY3QgY2xhc3M9XCJkYXktb3JkZXItaW4tbW9udGhcIiBmb3JtQ29udHJvbE5hbWU9XCJtb250aFdlZWtcIiA+XG4gICAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgbW9udGhXZWVrIG9mIHNlbGVjdE9wdGlvbnMubW9udGhXZWVrc1wiIFt2YWx1ZV09XCJtb250aFdlZWtcIj5cbiAgICAgICAgICAgICAgICAgICAge3ttb250aFdlZWtEaXNwbGF5KG1vbnRoV2Vlayl9fVxuICAgICAgICAgICAgICAgICAgPC9tYXQtb3B0aW9uPlxuICAgICAgICAgICAgICAgIDwvbWF0LXNlbGVjdD5cbiAgICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cblxuICAgICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgZm9ybUdyb3VwTmFtZT1cInNwZWNpZmljTW9udGhXZWVrXCI+XG4gICAgICAgICAgICAgICAgPG1hdC1sYWJlbD5EYXk8L21hdC1sYWJlbD5cbiAgICAgICAgICAgICAgICA8bWF0LXNlbGVjdCBjbGFzcz1cIndlZWstZGF5c1wiICBmb3JtQ29udHJvbE5hbWU9XCJkYXlcIiA+XG4gICAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgZGF5IG9mIHNlbGVjdE9wdGlvbnMuZGF5c1wiIFt2YWx1ZV09XCJkYXlcIj5cbiAgICAgICAgICAgICAgICAgICAge3tkYXlEaXNwbGF5KGRheSl9fVxuICAgICAgICAgICAgICAgICAgPC9tYXQtb3B0aW9uPlxuICAgICAgICAgICAgICAgIDwvbWF0LXNlbGVjdD5cbiAgICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cblxuICAgICAgICAgICAgICBvZlxuXG4gICAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBmb3JtR3JvdXBOYW1lPVwic3BlY2lmaWNNb250aFdlZWtcIj5cbiAgICAgICAgICAgICAgICA8bWF0LWxhYmVsPk1vbnRoPC9tYXQtbGFiZWw+XG4gICAgICAgICAgICAgICAgPG1hdC1zZWxlY3QgY2xhc3M9XCJtb250aHNcIiBmb3JtQ29udHJvbE5hbWU9XCJtb250aFwiPlxuICAgICAgICAgICAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IG1vbnRoIG9mIHNlbGVjdE9wdGlvbnMubW9udGhzXCIgW3ZhbHVlXT1cIm1vbnRoXCI+XG4gICAgICAgICAgICAgICAgICAgIHt7bW9udGhEaXNwbGF5KG1vbnRoKX19XG4gICAgICAgICAgICAgICAgICA8L21hdC1vcHRpb24+XG4gICAgICAgICAgICAgICAgPC9tYXQtc2VsZWN0PlxuICAgICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxuXG4gICAgICAgICAgICAgIGF0IHRpbWVcblxuICAgICAgICAgICAgICA8Y3Jvbi10aW1lLXBpY2tlciBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZm9ybUdyb3VwXT1cInllYXJseUZvcm0uY29udHJvbHMuc3BlY2lmaWNNb250aFdlZWtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbdXNlMjRIb3VyVGltZV09XCJvcHRpb25zLnVzZTI0SG91clRpbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbaGlkZVNlY29uZHNdPVwib3B0aW9ucy5oaWRlU2Vjb25kcyB8fCAhaXNDcm9uRmxhdm9yUXVhcnR6XCI+XG4gICAgICAgICAgICAgIDwvY3Jvbi10aW1lLXBpY2tlcj5cbiAgICAgICAgICAgIDwvbWF0LXJhZGlvLWJ1dHRvbj5cbiAgICAgICAgICA8L21hdC1yYWRpby1ncm91cD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21hdC10YWI+XG5cbiAgICAgIDwhLS0gQWR2YW5jZWQtLT5cbiAgICAgIDxtYXQtdGFiIGNsYXNzPVwiY3Jvbi1lZGl0b3ItdGFiXCIgbGFiZWw9XCJBZHZhbmNlZFwiICpuZ0lmPVwiIW9wdGlvbnMuaGlkZUFkdmFuY2VkVGFiXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjcm9uLWVkaXRvci10YWItY29udGVudFwiIFtmb3JtR3JvdXBdPVwiYWR2YW5jZWRGb3JtXCI+XG5cbiAgICAgICAgICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgICAgICAgICA8bWF0LWxhYmVsPkV4cHJlc3Npb248L21hdC1sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCBtYXRJbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiYWR2YW5jZWQtY3Jvbi1lZGl0b3ItaW5wdXRcIiBmb3JtQ29udHJvbE5hbWU9XCJleHByZXNzaW9uXCI+XG4gICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21hdC10YWI+XG4gICAgPC9tYXQtdGFiLWdyb3VwPlxuPC9zZWN0aW9uPlxuIl19