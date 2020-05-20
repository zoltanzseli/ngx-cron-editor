import { Component, Input, forwardRef, NgModule } from '@angular/core';
import { ControlContainer, NG_VALUE_ACCESSOR, FormControl, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { __awaiter } from 'tslib';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MAT_LABEL_GLOBAL_OPTIONS } from '@angular/material/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';

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
function* range(start, end) {
    for (let i = start; i <= end; i++) {
        yield i;
    }
}
class TimePickerComponent {
    /**
     * @param {?} parent
     */
    constructor(parent) {
        this.parent = parent;
        this.use24HourTime = true;
        this.hideHours = false;
        this.hideMinutes = false;
        this.hideSeconds = true;
        this.minutes = [...range(0, 59)];
        this.seconds = [...range(0, 59)];
        this.hourTypes = ['AM', 'PM'];
    }
    /**
     * @return {?}
     */
    get hours() {
        return this.use24HourTime ? [...range(0, 23)] : [...range(0, 12)];
    }
}
TimePickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'cron-time-picker',
                template: "<span [formGroup]=\"parent.control\">\n\n  <ng-container *ngIf=\"!hideHours\">\n    <mat-form-field>\n      <mat-label>Hour(s)</mat-label>\n      <mat-select formControlName=\"hours\">\n        <mat-option *ngFor=\"let hour of hours\" [value]=\"hour\">{{hour}}</mat-option>\n      </mat-select>\n    </mat-form-field>\n  </ng-container>\n  <ng-container *ngIf=\"!hideMinutes\">\n    <span *ngIf=\"!hideHours\">:</span>\n    <mat-form-field>\n      <mat-label>Minute(s)</mat-label>\n      <mat-select formControlName=\"minutes\">\n        <mat-option *ngFor=\"let minute of minutes\" [value]=\"minute\">{{minute}}</mat-option>\n      </mat-select>\n    </mat-form-field>\n  </ng-container>\n\n  <ng-container *ngIf=\"!hideSeconds\">\n    <span *ngIf=\"!hideMinutes\">:</span>\n    <mat-form-field>\n      <mat-label>Second(s)</mat-label>\n      <mat-select formControlName=\"seconds\">\n        <mat-option *ngFor=\"let second of seconds\" [value]=\"second\">{{second}}</mat-option>\n      </mat-select>\n    </mat-form-field>\n  </ng-container>\n\n  <ng-container *ngIf=\"!use24HourTime\">\n    <span></span>.\n    <mat-form-field>\n      <mat-select formControlName=\"hourType\">\n        <mat-option *ngFor=\"let hourType of hourTypes\" [value]=\"hourType\">{{hourType}}</mat-option>\n      </mat-select>\n    </mat-form-field>\n  </ng-container>\n</span>\n",
                providers: []
            }] }
];
/** @nocollapse */
TimePickerComponent.ctorParameters = () => [
    { type: ControlContainer }
];
TimePickerComponent.propDecorators = {
    disabled: [{ type: Input }],
    use24HourTime: [{ type: Input }],
    hideHours: [{ type: Input }],
    hideMinutes: [{ type: Input }],
    hideSeconds: [{ type: Input }]
};
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
const Days = {
    'SUN': "Sunday",
    'MON': "Monday",
    'TUE': "Tuesday",
    'WED': "Wednesday",
    'THU': "Thursday",
    'FRI': "Friday",
    'SAT': "Saturday"
};
/** @type {?} */
const MonthWeeks = {
    '#1': "First",
    '#2': "Second",
    '#3': "Third",
    '#4': "Fourth",
    '#5': "Fifth",
    'L': "Last"
};
/** @enum {number} */
const Months = {
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
const CRON_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef((/**
     * @return {?}
     */
    () => CronGenComponent)),
    multi: true,
};
class CronGenComponent {
    /**
     * @param {?} fb
     */
    constructor(fb) {
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
        (_) => {
        });
        this.onTouched = (/**
         * @return {?}
         */
        () => {
        });
    }
    /**
     * @return {?}
     */
    get cron() {
        return this.localCron;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set cron(value) {
        this.localCron = value;
        this.onChange(value);
    }
    /**
     * @return {?}
     */
    get isCronFlavorQuartz() {
        return this.options.cronFlavor === 'quartz';
    }
    /**
     * @return {?}
     */
    get isCronFlavorStandard() {
        return this.options.cronFlavor === 'standard';
    }
    /**
     * @return {?}
     */
    get yearDefaultChar() {
        return this.options.cronFlavor === 'quartz' ? '*' : '';
    }
    /**
     * @return {?}
     */
    get weekDayDefaultChar() {
        return this.options.cronFlavor === 'quartz' ? '?' : '*';
    }
    /**
     * @return {?}
     */
    get monthDayDefaultChar() {
        return this.options.cronFlavor === 'quartz' ? '?' : '*';
    }
    /* Update the cron output to that of the selected tab.
       * The cron output value is updated whenever a form is updated. To make it change in response to tab selection, we simply reset
       * the value of the form that goes into focus. */
    /**
     * @param {?} idx
     * @return {?}
     */
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
    /**
     * @return {?}
     */
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
            this.minutesForm.valueChanges.subscribe((/**
             * @param {?} value
             * @return {?}
             */
            value => this.computeMinutesCron(value)));
            this.hourlyForm = this.fb.group({
                hours: [1],
                minutes: [0],
                seconds: [0]
            });
            this.hourlyForm.valueChanges.subscribe((/**
             * @param {?} value
             * @return {?}
             */
            value => this.computeHourlyCron(value)));
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
            value => this.computeDailyCron(value)));
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
            next => this.computeWeeklyCron(next)));
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
            next => this.computeMonthlyCron(next)));
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
            next => this.computeYearlyCron(next)));
            this.advancedForm = this.fb.group({
                expression: [this.isCronFlavorQuartz ? '0 15 10 L-2 * ? *' : '15 10 2 * *']
            });
            this.advancedForm.controls.expression.valueChanges.subscribe((/**
             * @param {?} next
             * @return {?}
             */
            next => this.computeAdvancedExpression(next)));
        });
    }
    /**
     * @private
     * @param {?} state
     * @return {?}
     */
    computeMinutesCron(state) {
        this.cron = `${this.isCronFlavorQuartz ? state.seconds : ''} 0/${state.minutes} * 1/1 * ${this.weekDayDefaultChar} ${this.yearDefaultChar}`.trim();
        this.cronForm.setValue(this.cron);
    }
    /**
     * @private
     * @param {?} state
     * @return {?}
     */
    computeHourlyCron(state) {
        this.cron = `${this.isCronFlavorQuartz ? state.seconds : ''} ${state.minutes} 0/${state.hours} 1/1 * ${this.weekDayDefaultChar} ${this.yearDefaultChar}`.trim();
        this.cronForm.setValue(this.cron);
    }
    /**
     * @private
     * @param {?} state
     * @return {?}
     */
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
    /**
     * @private
     * @param {?} state
     * @return {?}
     */
    computeWeeklyCron(state) {
        /** @type {?} */
        const days = this.selectOptions.days
            .reduce((/**
         * @param {?} acc
         * @param {?} day
         * @return {?}
         */
        (acc, day) => state[day] ? acc.concat([day]) : acc), [])
            .join(',');
        this.cron = `${this.isCronFlavorQuartz ? state.seconds : ''} ${state.minutes} ${this.hourToCron(state.hours, state.hourType)} ${this.monthDayDefaultChar} * ${days} ${this.yearDefaultChar}`.trim();
        this.cronForm.setValue(this.cron);
    }
    /**
     * @private
     * @param {?} state
     * @return {?}
     */
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
    /**
     * @private
     * @param {?} state
     * @return {?}
     */
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
    /**
     * @private
     * @param {?} expression
     * @return {?}
     */
    computeAdvancedExpression(expression) {
        this.cron = expression;
        this.cronForm.setValue(this.cron);
    }
    /**
     * @param {?} day
     * @return {?}
     */
    dayDisplay(day) {
        return Days[day];
    }
    /**
     * @param {?} monthWeekNumber
     * @return {?}
     */
    monthWeekDisplay(monthWeekNumber) {
        return MonthWeeks[monthWeekNumber];
    }
    /**
     * @param {?} month
     * @return {?}
     */
    monthDisplay(month) {
        return Months[month];
    }
    /**
     * @param {?} month
     * @return {?}
     */
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
    /**
     * @private
     * @param {?} hour
     * @return {?}
     */
    getAmPmHour(hour) {
        return this.options.use24HourTime ? hour : (hour + 11) % 12 + 1;
    }
    /**
     * @private
     * @param {?} hour
     * @return {?}
     */
    getHourType(hour) {
        return this.options.use24HourTime ? undefined : (hour >= 12 ? 'PM' : 'AM');
    }
    /**
     * @private
     * @param {?} hour
     * @param {?} hourType
     * @return {?}
     */
    hourToCron(hour, hourType) {
        if (this.options.use24HourTime) {
            return hour;
        }
        else {
            return hourType === 'AM' ? (hour === 12 ? 0 : hour) : (hour === 12 ? 12 : hour + 12);
        }
    }
    /**
     * @private
     * @param {?} cron
     * @return {?}
     */
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
        /** @type {?} */
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
            /** @type {?} */
            const parsedHours = parseInt(hours, 10);
            this.state.daily.everyDays.hours = this.getAmPmHour(parsedHours);
            this.state.daily.everyDays.hourType = this.getHourType(parsedHours);
            this.state.daily.everyDays.minutes = parseInt(minutes, 10);
            this.state.daily.everyDays.seconds = parseInt(seconds, 10);
        }
        else if (cron.match(/\d+ \d+ \d+ [\?\*] \* MON-FRI \*/)) {
            this.activeTab = 'daily';
            this.state.daily.subTab = 'everyWeekDay';
            /** @type {?} */
            const parsedHours = parseInt(hours, 10);
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
            weekDay => this.state.weekly[weekDay] = false));
            dayOfWeek.split(',').forEach((/**
             * @param {?} weekDay
             * @return {?}
             */
            weekDay => this.state.weekly[weekDay] = true));
            /** @type {?} */
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
            /** @type {?} */
            const parsedHours = parseInt(hours, 10);
            this.state.monthly.specificDay.hours = this.getAmPmHour(parsedHours);
            this.state.monthly.specificDay.hourType = this.getHourType(parsedHours);
            this.state.monthly.specificDay.minutes = parseInt(minutes, 10);
            this.state.monthly.specificDay.seconds = parseInt(seconds, 10);
        }
        else if (cron.match(/\d+ \d+ \d+ [\?\*] 1\/\d+ (MON|TUE|WED|THU|FRI|SAT|SUN)((#[1-5])|L) \*/)) {
            /** @type {?} */
            const day = dayOfWeek.substr(0, 3);
            /** @type {?} */
            const monthWeek = dayOfWeek.substr(3);
            this.activeTab = 'monthly';
            this.state.monthly.subTab = 'specificWeekDay';
            this.state.monthly.specificWeekDay.monthWeek = monthWeek;
            this.state.monthly.specificWeekDay.day = day;
            this.state.monthly.specificWeekDay.months = parseInt(month.substring(2), 10);
            /** @type {?} */
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
            /** @type {?} */
            const parsedHours = parseInt(hours, 10);
            this.state.yearly.specificMonthDay.hours = this.getAmPmHour(parsedHours);
            this.state.yearly.specificMonthDay.hourType = this.getHourType(parsedHours);
            this.state.yearly.specificMonthDay.minutes = parseInt(minutes, 10);
            this.state.yearly.specificMonthDay.seconds = parseInt(seconds, 10);
        }
        else if (cron.match(/\d+ \d+ \d+ [\?\*] \d+ (MON|TUE|WED|THU|FRI|SAT|SUN)((#[1-5])|L) \*/)) {
            /** @type {?} */
            const day = dayOfWeek.substr(0, 3);
            /** @type {?} */
            const monthWeek = dayOfWeek.substr(3);
            this.activeTab = 'yearly';
            this.state.yearly.subTab = 'specificMonthWeek';
            this.state.yearly.specificMonthWeek.monthWeek = monthWeek;
            this.state.yearly.specificMonthWeek.day = day;
            this.state.yearly.specificMonthWeek.month = parseInt(month, 10);
            /** @type {?} */
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
    /**
     * @private
     * @param {?} cron
     * @return {?}
     */
    cronIsValid(cron) {
        if (cron) {
            /** @type {?} */
            const cronParts = cron.split(' ');
            return (this.isCronFlavorQuartz && (cronParts.length === 6
                || cronParts.length === 7)
                || (this.isCronFlavorStandard && cronParts.length === 5));
        }
        return false;
    }
    /**
     * @private
     * @return {?}
     */
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
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    getOrdinalSuffix(value) {
        if (value.length > 1) {
            /** @type {?} */
            const secondToLastDigit = value.charAt(value.length - 2);
            if (secondToLastDigit === '1') {
                return 'th';
            }
        }
        /** @type {?} */
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
    /**
     * @private
     * @return {?}
     */
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
    /**
     * @private
     * @param {?} start
     * @param {?} end
     * @return {?}
     */
    getRange(start, end) {
        /** @type {?} */
        const length = end - start + 1;
        return Array.apply(null, Array(length)).map((/**
         * @param {?} _
         * @param {?} i
         * @return {?}
         */
        (_, i) => i + start));
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    writeValue(obj) {
        this.cron = obj;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
}
CronGenComponent.decorators = [
    { type: Component, args: [{
                selector: 'cron-editor',
                template: "<section class=\"cron-editor-main\">\n    <mat-tab-group class=\"cron-editor-container\" (selectedIndexChange)=\"onTabFocus($event)\" [backgroundColor]=\"backgroundColor\" [color]=\"color\">\n\n      <!-- Minute -->\n      <mat-tab class=\"cron-editor-tab\" label=\"Minutes\" *ngIf=\"!options.hideMinutesTab\">\n        <div class=\"cron-editor-tab-content\">\n\n          <span class=\"cron-form-label\">Every </span>\n\n            <cron-time-picker\n              [formGroup]=\"minutesForm\"\n              [use24HourTime]=\"options.use24HourTime\"\n              [hideHours]=\"true\"\n              [hideSeconds]=\"options.hideSeconds || !isCronFlavorQuartz\">\n            </cron-time-picker>\n        </div>\n      </mat-tab>\n\n      <!-- Hourly -->\n      <mat-tab class=\"cron-editor-tab\" label=\"Hourly\" *ngIf=\"!options.hideHourlyTab\">\n        <div class=\"cron-editor-tab-content\">\n          <span class=\"cron-form-label\">Every </span>\n\n          <cron-time-picker [formGroup]=\"hourlyForm\"\n                              [use24HourTime]=\"options.use24HourTime\"\n                              [hideSeconds]=\"options.hideSeconds ||  !isCronFlavorQuartz\">\n          </cron-time-picker>\n        </div>\n      </mat-tab>\n\n\n      <!-- Daily-->\n      <mat-tab class=\"cron-editor-tab\" label=\"Daily\" *ngIf=\"!options.hideDailyTab\">\n        <div class=\"cron-editor-tab-content\" [formGroup]=\"dailyForm\">\n\n          <mat-radio-group class=\"cron-editor-radio-group\" formControlName=\"subTab\">\n            <mat-radio-button name=\"subTab\" class=\"cron-editor-radio-button\" value=\"everyDays\" checked=\"checked\">\n\n              <span class=\"cron-form-label\">Every </span>\n\n              <mat-form-field formGroupName=\"everyDays\">\n                <mat-label>Day(s)</mat-label>\n                <mat-select formControlName=\"days\">\n                  <mat-option *ngFor=\"let monthDay of selectOptions.monthDays\" [value]=\"monthDay\">\n                    {{monthDay}}\n                  </mat-option>\n                </mat-select>\n              </mat-form-field>\n\n               at\n\n              <cron-time-picker\n                formGroupName=\"everyDays\"\n                [use24HourTime]=\"options.use24HourTime\"\n                [hideSeconds]=\"options.hideSeconds || !isCronFlavorQuartz\">\n              </cron-time-picker>\n\n            </mat-radio-button>\n\n            <mat-radio-button name=\"subTab\" class=\"cron-editor-radio-button\" value=\"everyWeekDay\">\n\n              <span>Week Day (MON-FRI) at </span>\n\n              <cron-time-picker\n                formGroupName=\"everyWeekDay\"\n                [use24HourTime]=\"options.use24HourTime\"\n                [hideSeconds]=\"options.hideSeconds || !isCronFlavorQuartz\">\n              </cron-time-picker>\n\n            </mat-radio-button>\n          </mat-radio-group>\n          </div>\n      </mat-tab>\n\n      <!-- Weekly-->\n      <mat-tab  class=\"cron-editor-tab\" label=\"Weekly\" *ngIf=\"!options.hideWeeklyTab\">\n        <div class=\"cron-editor-tab-content\">\n\n          <span class=\"cron-form-label\">Every </span>\n\n          <div [formGroup]=\"weeklyForm\">\n            <mat-checkbox class=\"checkbox-margin\" formControlName=\"MON\">Monday</mat-checkbox>\n            <mat-checkbox class=\"checkbox-margin\" formControlName=\"TUE\">Tuesday</mat-checkbox>\n            <mat-checkbox class=\"checkbox-margin\" formControlName=\"WED\">Wednesday</mat-checkbox>\n            <mat-checkbox class=\"checkbox-margin\" formControlName=\"THU\">Thursday</mat-checkbox>\n            <mat-checkbox class=\"checkbox-margin\" formControlName=\"FRI\">Friday</mat-checkbox>\n            <mat-checkbox class=\"checkbox-margin\" formControlName=\"SAT\">Saturday</mat-checkbox>\n            <mat-checkbox class=\"checkbox-margin\" formControlName=\"SUN\">Sunday</mat-checkbox>\n          </div>\n\n\n          <span class=\"cron-form-label\">at time </span>\n\n          <cron-time-picker [formGroup]=\"weeklyForm\"\n                            [use24HourTime]=\"options.use24HourTime\"\n                            [hideSeconds]=\"options.hideSeconds|| !isCronFlavorQuartz\">\n          </cron-time-picker>\n        </div>\n\n    </mat-tab>\n\n      <!-- Monthly-->\n      <mat-tab class=\"cron-editor-tab\" label=\"Monthly\" *ngIf=\"!options.hideMonthlyTab\">\n\n        <div class=\"cron-editor-tab-content\" [formGroup]=\"monthlyForm\">\n\n\n          <mat-radio-group formControlName=\"subTab\">\n\n            <mat-radio-button  name=\"monthly-radio\" value=\"specificDay\" >\n\n              <!-- Spesific day -->\n              <span formGroupName=\"specificDay\">\n\n                On the\n\n                <ng-container *ngIf=\"options.cronFlavor === 'quartz'\">\n                  <mat-form-field>\n                    <mat-label>Day</mat-label>\n                    <mat-select class=\"month-days\" formControlName=\"day\">\n                      <option *ngFor=\"let monthDaysWithLast of selectOptions.monthDaysWithLasts\" [value]=\"monthDaysWithLast\">\n                        {{monthDayDisplay(monthDaysWithLast)}}\n                      </option>\n                    </mat-select>\n                  </mat-form-field>\n                </ng-container>\n\n                <ng-container *ngIf=\"options.cronFlavor === 'standard'\">\n                  <mat-form-field>\n                    <mat-label>Day</mat-label>\n                    <mat-select class=\"month-days\"  formControlName=\"day\">\n                      <mat-option *ngFor=\"let monthDaysWithOutLast of selectOptions.monthDaysWithOutLasts\" [value]=\"monthDaysWithOutLast\">\n                        {{monthDayDisplay(monthDaysWithOutLast)}}\n                      </mat-option>\n                    </mat-select>\n                  </mat-form-field>\n                </ng-container>\n\n                of every\n\n                <ng-container>\n                  <mat-form-field>\n                    <mat-label>Month</mat-label>\n                    <mat-select class=\"months-small\" formControlName=\"months\" [ngClass]=\"options.formSelectClass\">\n                      <mat-option *ngFor=\"let month of selectOptions.months\" [value]=\"month\">\n                        {{month}}\n                      </mat-option>\n                    </mat-select>\n                  </mat-form-field>\n                </ng-container>\n\n                at time\n\n                <cron-time-picker [disabled]=\"disabled\" [formGroup]=\"monthlyForm.controls.specificDay\"\n                                  [use24HourTime]=\"options.use24HourTime\"\n                                  [hideSeconds]=\"options.hideSeconds || !isCronFlavorQuartz\">\n                </cron-time-picker>\n              </span>\n\n\n            </mat-radio-button>\n\n            <mat-radio-button  name=\"monthly-radio\" value=\"specificWeekDay\">\n\n              <!-- Spesific Week day -->\n              <span formGroupName=\"specificWeekDay\">\n\n                On the\n\n                <mat-form-field>\n                  <mat-label>Week</mat-label>\n                  <mat-select class=\"day-order-in-month\" formControlName=\"monthWeek\" [ngClass]=\"options.formSelectClass\">\n                    <mat-option *ngFor=\"let monthWeek of selectOptions.monthWeeks\" [value]=\"monthWeek\">\n                      {{monthWeekDisplay(monthWeek)}}\n                    </mat-option>\n                  </mat-select>\n                </mat-form-field>\n\n                <mat-form-field>\n                  <mat-label>Day</mat-label>\n                  <mat-select class=\"week-days\" formControlName=\"day\" [ngClass]=\"options.formSelectClass\">\n                    <mat-option *ngFor=\"let day of selectOptions.days\" [value]=\"day\">\n                      {{dayDisplay(day)}}\n                    </mat-option>\n                  </mat-select>\n                </mat-form-field>\n\n                of every\n\n                <mat-form-field>\n                  <mat-label>Month</mat-label>\n                  <mat-select class=\"months-small\" formControlName=\"months\">\n                    <mat-option *ngFor=\"let month of selectOptions.months\" [value]=\"month\">\n                      {{month}}\n                    </mat-option>\n                  </mat-select>\n                </mat-form-field>\n\n                at time\n\n                <cron-time-picker [formGroup]=\"monthlyForm.controls.specificWeekDay\"\n                                  [use24HourTime]=\"options.use24HourTime\"\n                                  [hideSeconds]=\"options.hideSeconds || !isCronFlavorQuartz\">\n\n                </cron-time-picker>\n\n\n              </span>\n            </mat-radio-button>\n\n          </mat-radio-group>\n\n        </div>\n      </mat-tab>\n\n      <!-- Yearly-->\n      <mat-tab class=\"cron-editor-tab\"  label=\"Yearly\" *ngIf=\"!options.hideYearlyTab\">\n\n        <div class=\"cron-editor-tab-content\" [formGroup]=\"yearlyForm\">\n\n          <mat-radio-group formControlName=\"subTab\">\n\n            <mat-radio-button name=\"yearly-radio\" value=\"specificMonthDay\">\n\n              On the\n\n              <mat-form-field formGroupName=\"specificMonthDay\" *ngIf=\"options.cronFlavor === 'quartz'\">\n                <mat-label>Day</mat-label>\n                <mat-select class=\"month-days\" formControlName=\"day\">\n                  <mat-option *ngFor=\"let monthDaysWithLast of selectOptions.monthDaysWithLasts\" [value]=\"monthDaysWithLast\">\n                    {{monthDayDisplay(monthDaysWithLast)}}\n                  </mat-option>\n                </mat-select>\n              </mat-form-field>\n\n              <mat-form-field formGroupName=\"specificMonthDay\" *ngIf=\"options.cronFlavor === 'standard'\">\n                <mat-label>Day</mat-label>\n                <mat-select class=\"month-days\" formControlName=\"day\" >\n                  <mat-option *ngFor=\"let monthDaysWithOutLast of selectOptions.monthDaysWithOutLasts\" [value]=\"monthDaysWithOutLast\">\n                    {{monthDayDisplay(monthDaysWithOutLast)}}\n                  </mat-option>\n                </mat-select>\n              </mat-form-field>\n\n              of\n\n              <mat-form-field formGroupName=\"specificMonthDay\">\n                <mat-label>Month</mat-label>\n                <mat-select class=\"months\" formControlName=\"month\">\n                  <mat-option *ngFor=\"let month of selectOptions.months\" [value]=\"month\">\n                    {{monthDisplay(month)}}\n                  </mat-option>\n                </mat-select>\n              </mat-form-field>\n\n              at time\n\n              <cron-time-picker [disabled]=\"disabled\"\n                                [formGroup]=\"yearlyForm.controls.specificMonthDay\"\n                                [use24HourTime]=\"options.use24HourTime\"\n                                [hideSeconds]=\"options.hideSeconds || !isCronFlavorQuartz\">\n              </cron-time-picker>\n            </mat-radio-button>\n\n            <mat-radio-button name=\"yearly-radio\" value=\"specificMonthWeek\" [ngClass]=\"state.formRadioClass\">\n\n              On the\n\n              <mat-form-field formGroupName=\"specificMonthWeek\">\n                <mat-label>Week</mat-label>\n                <mat-select class=\"day-order-in-month\" formControlName=\"monthWeek\" >\n                  <mat-option *ngFor=\"let monthWeek of selectOptions.monthWeeks\" [value]=\"monthWeek\">\n                    {{monthWeekDisplay(monthWeek)}}\n                  </mat-option>\n                </mat-select>\n              </mat-form-field>\n\n              <mat-form-field formGroupName=\"specificMonthWeek\">\n                <mat-label>Day</mat-label>\n                <mat-select class=\"week-days\"  formControlName=\"day\" >\n                  <mat-option *ngFor=\"let day of selectOptions.days\" [value]=\"day\">\n                    {{dayDisplay(day)}}\n                  </mat-option>\n                </mat-select>\n              </mat-form-field>\n\n              of\n\n              <mat-form-field formGroupName=\"specificMonthWeek\">\n                <mat-label>Month</mat-label>\n                <mat-select class=\"months\" formControlName=\"month\">\n                  <mat-option *ngFor=\"let month of selectOptions.months\" [value]=\"month\">\n                    {{monthDisplay(month)}}\n                  </mat-option>\n                </mat-select>\n              </mat-form-field>\n\n              at time\n\n              <cron-time-picker [disabled]=\"disabled\"\n                                [formGroup]=\"yearlyForm.controls.specificMonthWeek\"\n                                [use24HourTime]=\"options.use24HourTime\"\n                                [hideSeconds]=\"options.hideSeconds || !isCronFlavorQuartz\">\n              </cron-time-picker>\n            </mat-radio-button>\n          </mat-radio-group>\n        </div>\n      </mat-tab>\n\n      <!-- Advanced-->\n      <mat-tab class=\"cron-editor-tab\" label=\"Advanced\" *ngIf=\"!options.hideAdvancedTab\">\n        <div class=\"cron-editor-tab-content\" [formGroup]=\"advancedForm\">\n\n          <mat-form-field>\n            <mat-label>Expression</mat-label>\n            <input matInput type=\"text\" class=\"advanced-cron-editor-input\" formControlName=\"expression\">\n          </mat-form-field>\n        </div>\n      </mat-tab>\n    </mat-tab-group>\n</section>\n",
                providers: [CRON_VALUE_ACCESSOR],
                styles: [".cron-editor-main{@include mat-elevation(1);}.cron-editor-tab-content{height:200px;margin-top:24px;border-radius:8px}.cron-editor-main .cron-editor-container .cron-editor-radio{width:20px;display:inline-block}.cron-editor-main .cron-editor-container .cron-editor-checkbox,.cron-editor-main .cron-editor-container .cron-editor-input,.cron-editor-main .cron-editor-container .cron-editor-select{display:inline-block}.cron-editor-main .cron-editor-container .well-time-wrapper{padding-left:20px}.cron-editor-main .cron-editor-container .inline-block{display:inline-block}.cron-editor-main .cron-editor-container .hour-types{width:70px}.nav-tabs li a{cursor:pointer}.cron-editor-radio-group{display:flex;flex-direction:column;margin:15px 0}.cron-editor-radio-button{margin:5px}.checkbox-margin{margin:0 10px}"]
            }] }
];
/** @nocollapse */
CronGenComponent.ctorParameters = () => [
    { type: FormBuilder }
];
CronGenComponent.propDecorators = {
    backgroundColor: [{ type: Input }],
    color: [{ type: Input }],
    disabled: [{ type: Input }],
    options: [{ type: Input }],
    cron: [{ type: Input }]
};
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
const ɵ0 = { float: 'always' }, ɵ1 = { appearance: 'outline' };
class CronEditorModule {
}
CronEditorModule.decorators = [
    { type: NgModule, args: [{
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
                    { provide: MAT_LABEL_GLOBAL_OPTIONS, useValue: ɵ0 },
                    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: ɵ1 }
                ]
            },] }
];

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

/**
 * @fileoverview added by tsickle
 * Generated from: public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ngx-cron-editor.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { CRON_VALUE_ACCESSOR, CronEditorModule, CronGenComponent, Days, MonthWeeks, Months, TimePickerComponent };
//# sourceMappingURL=ngx-cron-editor.js.map
