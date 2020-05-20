/**
 * @fileoverview added by tsickle
 * Generated from: src/cron-editor.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __awaiter } from "tslib";
import { Component, Input, forwardRef } from '@angular/core';
import { Days, MonthWeeks, Months } from './enums';
import { FormBuilder, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
/** @type {?} */
export const CRON_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef((/**
     * @return {?}
     */
    () => CronGenComponent)),
    multi: true,
};
export class CronGenComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3Jvbi1lZGl0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWNyb24tZWRpdG9yLyIsInNvdXJjZXMiOlsic3JjL2Nyb24tZWRpdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBMEQsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRW5ILE9BQU8sRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBQyxNQUFNLFNBQVMsQ0FBQztBQUNqRCxPQUFPLEVBQXlDLFdBQVcsRUFBRSxXQUFXLEVBQWEsaUJBQWlCLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFJOUgsTUFBTSxPQUFPLG1CQUFtQixHQUFRO0lBQ3RDLE9BQU8sRUFBRSxpQkFBaUI7SUFDMUIsV0FBVyxFQUFFLFVBQVU7OztJQUFDLEdBQUcsRUFBRSxDQUFDLGdCQUFnQixFQUFDO0lBQy9DLEtBQUssRUFBRSxJQUFJO0NBQ1o7QUFTRCxNQUFNLE9BQU8sZ0JBQWdCOzs7O0lBMEQzQixZQUFvQixFQUFlO1FBQWYsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQXRDNUIsa0JBQWEsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUd2QyxjQUFTLEdBQUcsYUFBYSxDQUFDOzs7O1FBaWlCbEMsYUFBUTs7OztRQUFHLENBQUMsQ0FBTSxFQUFFLEVBQUU7UUFDdEIsQ0FBQyxFQUFDO1FBQ0YsY0FBUzs7O1FBQUcsR0FBRyxFQUFFO1FBQ2pCLENBQUMsRUFBQztJQWhnQkYsQ0FBQzs7OztJQXBERCxJQUFhLElBQUk7UUFDZixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQzs7Ozs7SUFFRCxJQUFJLElBQUksQ0FBQyxLQUFhO1FBQ3BCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFD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QUFRLEVBQUUsYUFBYTtnQkFDdkIsa3dhQUEwQztnQkFFMUMsU0FBUyxFQUFFLENBQUMsbUJBQW1CLENBQUM7O2FBQ2pDOzs7O1lBaEIrQyxXQUFXOzs7OEJBbUJ4RCxLQUFLO29CQUNMLEtBQUs7dUJBQ0wsS0FBSztzQkFDTCxLQUFLO21CQUVMLEtBQUs7Ozs7SUFMTiwyQ0FBOEM7O0lBQzlDLGlDQUFvQzs7SUFDcEMsb0NBQWtDOztJQUNsQyxtQ0FBcUM7O0lBY3JDLHFDQUF5Qjs7SUFDekIseUNBQStDOztJQUMvQyxpQ0FBa0I7Ozs7O0lBRWxCLHFDQUFrQzs7Ozs7SUFDbEMsbUNBQXlCOztJQUV6QixvQ0FBc0I7O0lBRXRCLHVDQUF1Qjs7SUFDdkIsc0NBQXNCOztJQUN0QixxQ0FBcUI7O0lBQ3JCLHNDQUFzQjs7SUFDdEIsdUNBQXVCOztJQUN2QixzQ0FBc0I7O0lBQ3RCLHdDQUF3Qjs7SUFzaEJ4QixvQ0FDRTs7SUFDRixxQ0FDRTs7Ozs7SUFqZ0JVLDhCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBPbkluaXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcywgRXZlbnRFbWl0dGVyLCBmb3J3YXJkUmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q3Jvbk9wdGlvbnN9IGZyb20gJy4vQ3Jvbk9wdGlvbnMnO1xuaW1wb3J0IHtEYXlzLCBNb250aFdlZWtzLCBNb250aHN9IGZyb20gJy4vZW51bXMnO1xuaW1wb3J0IHtDb250cm9sQ29udGFpbmVyLCBDb250cm9sVmFsdWVBY2Nlc3NvciwgRm9ybUJ1aWxkZXIsIEZvcm1Db250cm9sLCBGb3JtR3JvdXAsIE5HX1ZBTFVFX0FDQ0VTU09SfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge1RoZW1lUGFsZXR0ZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5cblxuZXhwb3J0IGNvbnN0IENST05fVkFMVUVfQUNDRVNTT1I6IGFueSA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IENyb25HZW5Db21wb25lbnQpLFxuICBtdWx0aTogdHJ1ZSxcbn07XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3Jvbi1lZGl0b3InLFxuICB0ZW1wbGF0ZVVybDogJy4vY3Jvbi1lZGl0b3IudGVtcGxhdGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2Nyb24tZWRpdG9yLmNvbXBvbmVudC5jc3MnXSxcbiAgcHJvdmlkZXJzOiBbQ1JPTl9WQUxVRV9BQ0NFU1NPUl1cbn0pXG5leHBvcnQgY2xhc3MgQ3JvbkdlbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuXG4gIEBJbnB1dCgpIHB1YmxpYyBiYWNrZ3JvdW5kQ29sb3I6IFRoZW1lUGFsZXR0ZTtcbiAgQElucHV0KCkgcHVibGljIGNvbG9yOiBUaGVtZVBhbGV0dGU7XG4gIEBJbnB1dCgpIHB1YmxpYyBkaXNhYmxlZDogYm9vbGVhbjtcbiAgQElucHV0KCkgcHVibGljIG9wdGlvbnM6IENyb25PcHRpb25zO1xuXG4gIEBJbnB1dCgpIGdldCBjcm9uKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMubG9jYWxDcm9uO1xuICB9XG5cbiAgc2V0IGNyb24odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMubG9jYWxDcm9uID0gdmFsdWU7XG4gICAgdGhpcy5vbkNoYW5nZSh2YWx1ZSk7XG4gIH1cblxuICAvLyB0aGUgbmFtZSBpcyBhbiBBbmd1bGFyIGNvbnZlbnRpb24sIEBJbnB1dCB2YXJpYWJsZSBuYW1lICsgXCJDaGFuZ2VcIiBzdWZmaXhcbiAgLy8gQE91dHB1dCgpIGNyb25DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgcHVibGljIGFjdGl2ZVRhYjogc3RyaW5nO1xuICBwdWJsaWMgc2VsZWN0T3B0aW9ucyA9IHRoaXMuZ2V0U2VsZWN0T3B0aW9ucygpO1xuICBwdWJsaWMgc3RhdGU6IGFueTtcblxuICBwcml2YXRlIGxvY2FsQ3JvbiA9ICcwIDAgMS8xICogKic7XG4gIHByaXZhdGUgaXNEaXJ0eTogYm9vbGVhbjtcblxuICBjcm9uRm9ybTogRm9ybUNvbnRyb2w7XG5cbiAgbWludXRlc0Zvcm06IEZvcm1Hcm91cDtcbiAgaG91cmx5Rm9ybTogRm9ybUdyb3VwO1xuICBkYWlseUZvcm06IEZvcm1Hcm91cDtcbiAgd2Vla2x5Rm9ybTogRm9ybUdyb3VwO1xuICBtb250aGx5Rm9ybTogRm9ybUdyb3VwO1xuICB5ZWFybHlGb3JtOiBGb3JtR3JvdXA7XG4gIGFkdmFuY2VkRm9ybTogRm9ybUdyb3VwO1xuXG5cbiAgZ2V0IGlzQ3JvbkZsYXZvclF1YXJ0eigpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmNyb25GbGF2b3IgPT09ICdxdWFydHonO1xuICB9XG5cbiAgZ2V0IGlzQ3JvbkZsYXZvclN0YW5kYXJkKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuY3JvbkZsYXZvciA9PT0gJ3N0YW5kYXJkJztcbiAgfVxuXG4gIGdldCB5ZWFyRGVmYXVsdENoYXIoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5jcm9uRmxhdm9yID09PSAncXVhcnR6JyA/ICcqJyA6ICcnO1xuICB9XG5cbiAgZ2V0IHdlZWtEYXlEZWZhdWx0Q2hhcigpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmNyb25GbGF2b3IgPT09ICdxdWFydHonID8gJz8nIDogJyonO1xuICB9XG5cbiAgZ2V0IG1vbnRoRGF5RGVmYXVsdENoYXIoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5jcm9uRmxhdm9yID09PSAncXVhcnR6JyA/ICc/JyA6ICcqJztcbiAgfVxuXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIpIHtcbiAgfVxuXG4gIC8qIFVwZGF0ZSB0aGUgY3JvbiBvdXRwdXQgdG8gdGhhdCBvZiB0aGUgc2VsZWN0ZWQgdGFiLlxuICAgKiBUaGUgY3JvbiBvdXRwdXQgdmFsdWUgaXMgdXBkYXRlZCB3aGVuZXZlciBhIGZvcm0gaXMgdXBkYXRlZC4gVG8gbWFrZSBpdCBjaGFuZ2UgaW4gcmVzcG9uc2UgdG8gdGFiIHNlbGVjdGlvbiwgd2Ugc2ltcGx5IHJlc2V0XG4gICAqIHRoZSB2YWx1ZSBvZiB0aGUgZm9ybSB0aGF0IGdvZXMgaW50byBmb2N1cy4gKi9cbiAgcHVibGljIG9uVGFiRm9jdXMoaWR4OiBudW1iZXIpIHtcblxuICAgIHN3aXRjaCAoaWR4KSB7XG4gICAgICBjYXNlIDA6XG4gICAgICAgIHRoaXMubWludXRlc0Zvcm0uc2V0VmFsdWUodGhpcy5taW51dGVzRm9ybS52YWx1ZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAxOlxuICAgICAgICB0aGlzLmhvdXJseUZvcm0uc2V0VmFsdWUodGhpcy5ob3VybHlGb3JtLnZhbHVlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIHRoaXMuZGFpbHlGb3JtLnNldFZhbHVlKHRoaXMuZGFpbHlGb3JtLnZhbHVlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDM6XG4gICAgICAgIHRoaXMud2Vla2x5Rm9ybS5zZXRWYWx1ZSh0aGlzLndlZWtseUZvcm0udmFsdWUpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNDpcbiAgICAgICAgdGhpcy5tb250aGx5Rm9ybS5zZXRWYWx1ZSh0aGlzLm1vbnRobHlGb3JtLnZhbHVlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDU6XG4gICAgICAgIHRoaXMueWVhcmx5Rm9ybS5zZXRWYWx1ZSh0aGlzLnllYXJseUZvcm0udmFsdWUpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNjpcbiAgICAgICAgdGhpcy5hZHZhbmNlZEZvcm0uc2V0VmFsdWUodGhpcy5hZHZhbmNlZEZvcm0udmFsdWUpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93KG5ldyBFcnJvcignSW52YWxpZCB0YWIgc2VsZWN0ZWQnKSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGFzeW5jIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc3RhdGUgPSB0aGlzLmdldERlZmF1bHRTdGF0ZSgpO1xuXG4gICAgdGhpcy5oYW5kbGVNb2RlbENoYW5nZSh0aGlzLmNyb24pO1xuXG4gICAgY29uc3QgW2RlZmF1bHRIb3VycywgZGVmYXVsdE1pbnV0ZXMsIGRlZmF1bHRTZWNvbmRzXSA9IHRoaXMub3B0aW9ucy5kZWZhdWx0VGltZS5zcGxpdCgnOicpLm1hcChOdW1iZXIpO1xuXG4gICAgdGhpcy5jcm9uRm9ybSA9IG5ldyBGb3JtQ29udHJvbCgnMCAwIDEvMSAqIConKTtcblxuICAgIHRoaXMubWludXRlc0Zvcm0gPSB0aGlzLmZiLmdyb3VwKHtcbiAgICAgIGhvdXJzOiBbMF0sXG4gICAgICBtaW51dGVzOiBbMV0sXG4gICAgICBzZWNvbmRzOiBbMF1cbiAgICB9KTtcblxuICAgIHRoaXMubWludXRlc0Zvcm0udmFsdWVDaGFuZ2VzLnN1YnNjcmliZSh2YWx1ZSA9PiB0aGlzLmNvbXB1dGVNaW51dGVzQ3Jvbih2YWx1ZSkpO1xuXG4gICAgdGhpcy5ob3VybHlGb3JtID0gdGhpcy5mYi5ncm91cCh7XG4gICAgICBob3VyczogWzFdLFxuICAgICAgbWludXRlczogWzBdLFxuICAgICAgc2Vjb25kczogWzBdXG4gICAgfSk7XG4gICAgdGhpcy5ob3VybHlGb3JtLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUodmFsdWUgPT4gdGhpcy5jb21wdXRlSG91cmx5Q3Jvbih2YWx1ZSkpO1xuXG4gICAgdGhpcy5kYWlseUZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcbiAgICAgIHN1YlRhYjogWydldmVyeURheXMnXSxcbiAgICAgIGV2ZXJ5RGF5czogdGhpcy5mYi5ncm91cCh7XG4gICAgICAgIGRheXM6IFsxXSxcbiAgICAgICAgaG91cnM6IFt0aGlzLmdldEFtUG1Ib3VyKDEpXSxcbiAgICAgICAgbWludXRlczogWzBdLFxuICAgICAgICBzZWNvbmRzOiBbMF0sXG4gICAgICAgIGhvdXJUeXBlOiBbdGhpcy5nZXRIb3VyVHlwZSgwKV1cbiAgICAgIH0pLFxuICAgICAgZXZlcnlXZWVrRGF5OiB0aGlzLmZiLmdyb3VwKHtcbiAgICAgICAgZGF5czogWzBdLFxuICAgICAgICBob3VyczogW3RoaXMuZ2V0QW1QbUhvdXIoMSldLFxuICAgICAgICBtaW51dGVzOiBbMF0sXG4gICAgICAgIHNlY29uZHM6IFswXSxcbiAgICAgICAgaG91clR5cGU6IFt0aGlzLmdldEhvdXJUeXBlKDApXVxuICAgICAgfSlcbiAgICB9KTtcbiAgICB0aGlzLmRhaWx5Rm9ybS52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKHZhbHVlID0+IHRoaXMuY29tcHV0ZURhaWx5Q3Jvbih2YWx1ZSkpO1xuXG4gICAgdGhpcy53ZWVrbHlGb3JtID0gdGhpcy5mYi5ncm91cCh7XG4gICAgICBNT046IFt0cnVlXSxcbiAgICAgIFRVRTogW2ZhbHNlXSxcbiAgICAgIFdFRDogW2ZhbHNlXSxcbiAgICAgIFRIVTogW2ZhbHNlXSxcbiAgICAgIEZSSTogW2ZhbHNlXSxcbiAgICAgIFNBVDogW2ZhbHNlXSxcbiAgICAgIFNVTjogW2ZhbHNlXSxcbiAgICAgIGhvdXJzOiBbdGhpcy5nZXRBbVBtSG91cihkZWZhdWx0SG91cnMpXSxcbiAgICAgIG1pbnV0ZXM6IFtkZWZhdWx0TWludXRlc10sXG4gICAgICBzZWNvbmRzOiBbZGVmYXVsdFNlY29uZHNdLFxuICAgICAgaG91clR5cGU6IFt0aGlzLmdldEhvdXJUeXBlKGRlZmF1bHRIb3VycyldXG4gICAgfSk7XG4gICAgdGhpcy53ZWVrbHlGb3JtLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUobmV4dCA9PiB0aGlzLmNvbXB1dGVXZWVrbHlDcm9uKG5leHQpKTtcblxuICAgIHRoaXMubW9udGhseUZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcbiAgICAgIHN1YlRhYjogWydzcGVjaWZpY0RheSddLFxuICAgICAgc3BlY2lmaWNEYXk6IHRoaXMuZmIuZ3JvdXAoe1xuICAgICAgICBkYXk6IFsnMSddLFxuICAgICAgICBtb250aHM6IFsxXSxcbiAgICAgICAgaG91cnM6IFt0aGlzLmdldEFtUG1Ib3VyKGRlZmF1bHRIb3VycyldLFxuICAgICAgICBtaW51dGVzOiBbZGVmYXVsdE1pbnV0ZXNdLFxuICAgICAgICBzZWNvbmRzOiBbZGVmYXVsdFNlY29uZHNdLFxuICAgICAgICBob3VyVHlwZTogW3RoaXMuZ2V0SG91clR5cGUoZGVmYXVsdEhvdXJzKV1cbiAgICAgIH0pLFxuICAgICAgc3BlY2lmaWNXZWVrRGF5OiB0aGlzLmZiLmdyb3VwKHtcbiAgICAgICAgbW9udGhXZWVrOiBbJyMxJ10sXG4gICAgICAgIGRheTogWydNT04nXSxcbiAgICAgICAgbW9udGhzOiBbMV0sXG4gICAgICAgIGhvdXJzOiBbdGhpcy5nZXRBbVBtSG91cihkZWZhdWx0SG91cnMpXSxcbiAgICAgICAgbWludXRlczogW2RlZmF1bHRNaW51dGVzXSxcbiAgICAgICAgc2Vjb25kczogW2RlZmF1bHRTZWNvbmRzXSxcbiAgICAgICAgaG91clR5cGU6IFt0aGlzLmdldEhvdXJUeXBlKGRlZmF1bHRIb3VycyldXG4gICAgICB9KVxuICAgIH0pO1xuICAgIHRoaXMubW9udGhseUZvcm0udmFsdWVDaGFuZ2VzLnN1YnNjcmliZShuZXh0ID0+IHRoaXMuY29tcHV0ZU1vbnRobHlDcm9uKG5leHQpKTtcblxuICAgIHRoaXMueWVhcmx5Rm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xuICAgICAgc3ViVGFiOiBbJ3NwZWNpZmljTW9udGhEYXknXSxcbiAgICAgIHNwZWNpZmljTW9udGhEYXk6IHRoaXMuZmIuZ3JvdXAoe1xuICAgICAgICBtb250aDogWzFdLFxuICAgICAgICBkYXk6IFsnMSddLFxuICAgICAgICBob3VyczogW3RoaXMuZ2V0QW1QbUhvdXIoZGVmYXVsdEhvdXJzKV0sXG4gICAgICAgIG1pbnV0ZXM6IFtkZWZhdWx0TWludXRlc10sXG4gICAgICAgIHNlY29uZHM6IFtkZWZhdWx0U2Vjb25kc10sXG4gICAgICAgIGhvdXJUeXBlOiBbdGhpcy5nZXRIb3VyVHlwZShkZWZhdWx0SG91cnMpXVxuICAgICAgfSksXG4gICAgICBzcGVjaWZpY01vbnRoV2VlazogdGhpcy5mYi5ncm91cCh7XG4gICAgICAgIG1vbnRoV2VlazogWycjMSddLFxuICAgICAgICBkYXk6IFsnTU9OJ10sXG4gICAgICAgIG1vbnRoOiBbMV0sXG4gICAgICAgIGhvdXJzOiBbdGhpcy5nZXRBbVBtSG91cihkZWZhdWx0SG91cnMpXSxcbiAgICAgICAgbWludXRlczogW2RlZmF1bHRNaW51dGVzXSxcbiAgICAgICAgc2Vjb25kczogW2RlZmF1bHRTZWNvbmRzXSxcbiAgICAgICAgaG91clR5cGU6IFt0aGlzLmdldEhvdXJUeXBlKGRlZmF1bHRIb3VycyldXG4gICAgICB9KVxuICAgIH0pO1xuICAgIHRoaXMueWVhcmx5Rm9ybS52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKG5leHQgPT4gdGhpcy5jb21wdXRlWWVhcmx5Q3JvbihuZXh0KSk7XG5cbiAgICB0aGlzLmFkdmFuY2VkRm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xuICAgICAgZXhwcmVzc2lvbjogW3RoaXMuaXNDcm9uRmxhdm9yUXVhcnR6ID8gJzAgMTUgMTAgTC0yICogPyAqJyA6ICcxNSAxMCAyICogKiddXG4gICAgfSk7XG4gICAgdGhpcy5hZHZhbmNlZEZvcm0uY29udHJvbHMuZXhwcmVzc2lvbi52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKG5leHQgPT4gdGhpcy5jb21wdXRlQWR2YW5jZWRFeHByZXNzaW9uKG5leHQpKTtcbiAgfVxuXG4gIHByaXZhdGUgY29tcHV0ZU1pbnV0ZXNDcm9uKHN0YXRlOiBhbnkpIHtcbiAgICB0aGlzLmNyb24gPSBgJHt0aGlzLmlzQ3JvbkZsYXZvclF1YXJ0eiA/IHN0YXRlLnNlY29uZHMgOiAnJ30gMC8ke3N0YXRlLm1pbnV0ZXN9ICogMS8xICogJHt0aGlzLndlZWtEYXlEZWZhdWx0Q2hhcn0gJHt0aGlzLnllYXJEZWZhdWx0Q2hhcn1gLnRyaW0oKTtcbiAgICB0aGlzLmNyb25Gb3JtLnNldFZhbHVlKHRoaXMuY3Jvbik7XG4gIH1cblxuICBwcml2YXRlIGNvbXB1dGVIb3VybHlDcm9uKHN0YXRlOiBhbnkpIHtcbiAgICB0aGlzLmNyb24gPSBgJHt0aGlzLmlzQ3JvbkZsYXZvclF1YXJ0eiA/IHN0YXRlLnNlY29uZHMgOiAnJ30gJHtzdGF0ZS5taW51dGVzfSAwLyR7c3RhdGUuaG91cnN9IDEvMSAqICR7dGhpcy53ZWVrRGF5RGVmYXVsdENoYXJ9ICR7dGhpcy55ZWFyRGVmYXVsdENoYXJ9YC50cmltKCk7XG4gICAgdGhpcy5jcm9uRm9ybS5zZXRWYWx1ZSh0aGlzLmNyb24pO1xuICB9XG5cbiAgcHJpdmF0ZSBjb21wdXRlRGFpbHlDcm9uKHN0YXRlOiBhbnkpIHtcbiAgICBzd2l0Y2ggKHN0YXRlLnN1YlRhYikge1xuICAgICAgY2FzZSAnZXZlcnlEYXlzJzpcbiAgICAgICAgdGhpcy5jcm9uID0gYCR7dGhpcy5pc0Nyb25GbGF2b3JRdWFydHogPyBzdGF0ZS5ldmVyeURheXMuc2Vjb25kcyA6ICcnfSAke3N0YXRlLmV2ZXJ5RGF5cy5taW51dGVzfSAke3RoaXMuaG91clRvQ3JvbihzdGF0ZS5ldmVyeURheXMuaG91cnMsIHN0YXRlLmV2ZXJ5RGF5cy5ob3VyVHlwZSl9IDEvJHtzdGF0ZS5ldmVyeURheXMuZGF5c30gKiAke3RoaXMud2Vla0RheURlZmF1bHRDaGFyfSAke3RoaXMueWVhckRlZmF1bHRDaGFyfWAudHJpbSgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2V2ZXJ5V2Vla0RheSc6XG4gICAgICAgIHRoaXMuY3JvbiA9IGAke3RoaXMuaXNDcm9uRmxhdm9yUXVhcnR6ID8gc3RhdGUuZXZlcnlXZWVrRGF5LnNlY29uZHMgOiAnJ30gJHtzdGF0ZS5ldmVyeVdlZWtEYXkubWludXRlc30gJHt0aGlzLmhvdXJUb0Nyb24oc3RhdGUuZXZlcnlXZWVrRGF5LmhvdXJzLCBzdGF0ZS5ldmVyeVdlZWtEYXkuaG91clR5cGUpfSAke3RoaXMubW9udGhEYXlEZWZhdWx0Q2hhcn0gKiBNT04tRlJJICR7dGhpcy55ZWFyRGVmYXVsdENoYXJ9YC50cmltKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGNyb24gZGFpbHkgc3VidGFiIHNlbGVjdGlvbicpO1xuICAgIH1cbiAgICB0aGlzLmNyb25Gb3JtLnNldFZhbHVlKHRoaXMuY3Jvbik7XG4gIH1cblxuICBwcml2YXRlIGNvbXB1dGVXZWVrbHlDcm9uKHN0YXRlOiBhbnkpIHtcbiAgICBjb25zdCBkYXlzID0gdGhpcy5zZWxlY3RPcHRpb25zLmRheXNcbiAgICAgIC5yZWR1Y2UoKGFjYywgZGF5KSA9PiBzdGF0ZVtkYXldID8gYWNjLmNvbmNhdChbZGF5XSkgOiBhY2MsIFtdKVxuICAgICAgLmpvaW4oJywnKTtcbiAgICB0aGlzLmNyb24gPSBgJHt0aGlzLmlzQ3JvbkZsYXZvclF1YXJ0eiA/IHN0YXRlLnNlY29uZHMgOiAnJ30gJHtzdGF0ZS5taW51dGVzfSAke3RoaXMuaG91clRvQ3JvbihzdGF0ZS5ob3Vycywgc3RhdGUuaG91clR5cGUpfSAke3RoaXMubW9udGhEYXlEZWZhdWx0Q2hhcn0gKiAke2RheXN9ICR7dGhpcy55ZWFyRGVmYXVsdENoYXJ9YC50cmltKCk7XG4gICAgdGhpcy5jcm9uRm9ybS5zZXRWYWx1ZSh0aGlzLmNyb24pO1xuICB9XG5cbiAgcHJpdmF0ZSBjb21wdXRlTW9udGhseUNyb24oc3RhdGU6IGFueSkge1xuICAgIHN3aXRjaCAoc3RhdGUuc3ViVGFiKSB7XG4gICAgICBjYXNlICdzcGVjaWZpY0RheSc6XG4gICAgICAgIHRoaXMuY3JvbiA9IGAke3RoaXMuaXNDcm9uRmxhdm9yUXVhcnR6ID8gc3RhdGUuc3BlY2lmaWNEYXkuc2Vjb25kcyA6ICcnfSAke3N0YXRlLnNwZWNpZmljRGF5Lm1pbnV0ZXN9ICR7dGhpcy5ob3VyVG9Dcm9uKHN0YXRlLnNwZWNpZmljRGF5LmhvdXJzLCBzdGF0ZS5zcGVjaWZpY0RheS5ob3VyVHlwZSl9ICR7c3RhdGUuc3BlY2lmaWNEYXkuZGF5fSAxLyR7c3RhdGUuc3BlY2lmaWNEYXkubW9udGhzfSAke3RoaXMud2Vla0RheURlZmF1bHRDaGFyfSAke3RoaXMueWVhckRlZmF1bHRDaGFyfWAudHJpbSgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3NwZWNpZmljV2Vla0RheSc6XG4gICAgICAgIHRoaXMuY3JvbiA9IGAke3RoaXMuaXNDcm9uRmxhdm9yUXVhcnR6ID8gc3RhdGUuc3BlY2lmaWNXZWVrRGF5LnNlY29uZHMgOiAnJ30gJHtzdGF0ZS5zcGVjaWZpY1dlZWtEYXkubWludXRlc30gJHt0aGlzLmhvdXJUb0Nyb24oc3RhdGUuc3BlY2lmaWNXZWVrRGF5LmhvdXJzLCBzdGF0ZS5zcGVjaWZpY1dlZWtEYXkuaG91clR5cGUpfSAke3RoaXMubW9udGhEYXlEZWZhdWx0Q2hhcn0gMS8ke3N0YXRlLnNwZWNpZmljV2Vla0RheS5tb250aHN9ICR7c3RhdGUuc3BlY2lmaWNXZWVrRGF5LmRheX0ke3N0YXRlLnNwZWNpZmljV2Vla0RheS5tb250aFdlZWt9ICR7dGhpcy55ZWFyRGVmYXVsdENoYXJ9YC50cmltKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGNyb24gbW9udGx5IHN1YnRhYiBzZWxlY3Rpb24nKTtcbiAgICB9XG4gICAgdGhpcy5jcm9uRm9ybS5zZXRWYWx1ZSh0aGlzLmNyb24pO1xuICB9XG5cbiAgcHJpdmF0ZSBjb21wdXRlWWVhcmx5Q3JvbihzdGF0ZTogYW55KSB7XG4gICAgc3dpdGNoIChzdGF0ZS5zdWJUYWIpIHtcbiAgICAgIGNhc2UgJ3NwZWNpZmljTW9udGhEYXknOlxuICAgICAgICB0aGlzLmNyb24gPSBgJHt0aGlzLmlzQ3JvbkZsYXZvclF1YXJ0eiA/IHN0YXRlLnNwZWNpZmljTW9udGhEYXkuc2Vjb25kcyA6ICcnfSAke3N0YXRlLnNwZWNpZmljTW9udGhEYXkubWludXRlc30gJHt0aGlzLmhvdXJUb0Nyb24oc3RhdGUuc3BlY2lmaWNNb250aERheS5ob3Vycywgc3RhdGUuc3BlY2lmaWNNb250aERheS5ob3VyVHlwZSl9ICR7c3RhdGUuc3BlY2lmaWNNb250aERheS5kYXl9ICR7c3RhdGUuc3BlY2lmaWNNb250aERheS5tb250aH0gJHt0aGlzLndlZWtEYXlEZWZhdWx0Q2hhcn0gJHt0aGlzLnllYXJEZWZhdWx0Q2hhcn1gLnRyaW0oKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdzcGVjaWZpY01vbnRoV2Vlayc6XG4gICAgICAgIHRoaXMuY3JvbiA9IGAke3RoaXMuaXNDcm9uRmxhdm9yUXVhcnR6ID8gc3RhdGUuc3BlY2lmaWNNb250aFdlZWsuc2Vjb25kcyA6ICcnfSAke3N0YXRlLnNwZWNpZmljTW9udGhXZWVrLm1pbnV0ZXN9ICR7dGhpcy5ob3VyVG9Dcm9uKHN0YXRlLnNwZWNpZmljTW9udGhXZWVrLmhvdXJzLCBzdGF0ZS5zcGVjaWZpY01vbnRoV2Vlay5ob3VyVHlwZSl9ICR7dGhpcy5tb250aERheURlZmF1bHRDaGFyfSAke3N0YXRlLnNwZWNpZmljTW9udGhXZWVrLm1vbnRofSAke3N0YXRlLnNwZWNpZmljTW9udGhXZWVrLmRheX0ke3N0YXRlLnNwZWNpZmljTW9udGhXZWVrLm1vbnRoV2Vla30gJHt0aGlzLnllYXJEZWZhdWx0Q2hhcn1gLnRyaW0oKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgY3JvbiB5ZWFybHkgc3VidGFiIHNlbGVjdGlvbicpO1xuICAgIH1cbiAgICB0aGlzLmNyb25Gb3JtLnNldFZhbHVlKHRoaXMuY3Jvbik7XG4gIH1cblxuICBwcml2YXRlIGNvbXB1dGVBZHZhbmNlZEV4cHJlc3Npb24oZXhwcmVzc2lvbjogYW55KSB7XG4gICAgdGhpcy5jcm9uID0gZXhwcmVzc2lvbjtcbiAgICB0aGlzLmNyb25Gb3JtLnNldFZhbHVlKHRoaXMuY3Jvbik7XG4gIH1cblxuICBwdWJsaWMgZGF5RGlzcGxheShkYXk6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIERheXNbZGF5XTtcbiAgfVxuXG4gIHB1YmxpYyBtb250aFdlZWtEaXNwbGF5KG1vbnRoV2Vla051bWJlcjogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gTW9udGhXZWVrc1ttb250aFdlZWtOdW1iZXJdO1xuICB9XG5cbiAgcHVibGljIG1vbnRoRGlzcGxheShtb250aDogbnVtYmVyKTogc3RyaW5nIHtcbiAgICByZXR1cm4gTW9udGhzW21vbnRoXTtcbiAgfVxuXG4gIHB1YmxpYyBtb250aERheURpc3BsYXkobW9udGg6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgaWYgKG1vbnRoID09PSAnTCcpIHtcbiAgICAgIHJldHVybiAnTGFzdCBEYXknO1xuICAgIH0gZWxzZSBpZiAobW9udGggPT09ICdMVycpIHtcbiAgICAgIHJldHVybiAnTGFzdCBXZWVrZGF5JztcbiAgICB9IGVsc2UgaWYgKG1vbnRoID09PSAnMVcnKSB7XG4gICAgICByZXR1cm4gJ0ZpcnN0IFdlZWtkYXknO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gYCR7bW9udGh9JHt0aGlzLmdldE9yZGluYWxTdWZmaXgobW9udGgpfWA7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRBbVBtSG91cihob3VyOiBudW1iZXIpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLnVzZTI0SG91clRpbWUgPyBob3VyIDogKGhvdXIgKyAxMSkgJSAxMiArIDE7XG4gIH1cblxuICBwcml2YXRlIGdldEhvdXJUeXBlKGhvdXI6IG51bWJlcikge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMudXNlMjRIb3VyVGltZSA/IHVuZGVmaW5lZCA6IChob3VyID49IDEyID8gJ1BNJyA6ICdBTScpO1xuICB9XG5cbiAgcHJpdmF0ZSBob3VyVG9Dcm9uKGhvdXI6IG51bWJlciwgaG91clR5cGU6IHN0cmluZykge1xuICAgIGlmICh0aGlzLm9wdGlvbnMudXNlMjRIb3VyVGltZSkge1xuICAgICAgcmV0dXJuIGhvdXI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBob3VyVHlwZSA9PT0gJ0FNJyA/IChob3VyID09PSAxMiA/IDAgOiBob3VyKSA6IChob3VyID09PSAxMiA/IDEyIDogaG91ciArIDEyKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZU1vZGVsQ2hhbmdlKGNyb246IHN0cmluZykge1xuICAgIGlmICh0aGlzLmlzRGlydHkpIHtcbiAgICAgIHRoaXMuaXNEaXJ0eSA9IGZhbHNlO1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlzRGlydHkgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuY3JvbklzVmFsaWQoY3JvbikpIHtcbiAgICAgIGlmICh0aGlzLmlzQ3JvbkZsYXZvclF1YXJ0eikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgY3JvbiBleHByZXNzaW9uLCB0aGVyZSBtdXN0IGJlIDYgb3IgNyBzZWdtZW50cycpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5pc0Nyb25GbGF2b3JTdGFuZGFyZCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgY3JvbiBleHByZXNzaW9uLCB0aGVyZSBtdXN0IGJlIDUgc2VnbWVudHMnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBvcmlnQ3Jvbjogc3RyaW5nID0gY3JvbjtcbiAgICBpZiAoY3Jvbi5zcGxpdCgnICcpLmxlbmd0aCA9PT0gNSAmJiB0aGlzLmlzQ3JvbkZsYXZvclN0YW5kYXJkKSB7XG4gICAgICBjcm9uID0gYDAgJHtjcm9ufSAqYDtcbiAgICB9XG5cbiAgICBjb25zdCBbc2Vjb25kcywgbWludXRlcywgaG91cnMsIGRheU9mTW9udGgsIG1vbnRoLCBkYXlPZldlZWtdID0gY3Jvbi5zcGxpdCgnICcpO1xuXG4gICAgaWYgKGNyb24ubWF0Y2goL1xcZCsgMFxcL1xcZCsgXFwqIDFcXC8xIFxcKiBbXFw/XFwqXSBcXCovKSkge1xuICAgICAgdGhpcy5hY3RpdmVUYWIgPSAnbWludXRlcyc7XG5cbiAgICAgIHRoaXMuc3RhdGUubWludXRlcy5taW51dGVzID0gcGFyc2VJbnQobWludXRlcy5zdWJzdHJpbmcoMiksIDEwKTtcbiAgICAgIHRoaXMuc3RhdGUubWludXRlcy5zZWNvbmRzID0gcGFyc2VJbnQoc2Vjb25kcywgMTApO1xuICAgIH0gZWxzZSBpZiAoY3Jvbi5tYXRjaCgvXFxkKyBcXGQrIDBcXC9cXGQrIDFcXC8xIFxcKiBbXFw/XFwqXSBcXCovKSkge1xuICAgICAgdGhpcy5hY3RpdmVUYWIgPSAnaG91cmx5JztcblxuICAgICAgdGhpcy5zdGF0ZS5ob3VybHkuaG91cnMgPSBwYXJzZUludChob3Vycy5zdWJzdHJpbmcoMiksIDEwKTtcbiAgICAgIHRoaXMuc3RhdGUuaG91cmx5Lm1pbnV0ZXMgPSBwYXJzZUludChtaW51dGVzLCAxMCk7XG4gICAgICB0aGlzLnN0YXRlLmhvdXJseS5zZWNvbmRzID0gcGFyc2VJbnQoc2Vjb25kcywgMTApO1xuICAgIH0gZWxzZSBpZiAoY3Jvbi5tYXRjaCgvXFxkKyBcXGQrIFxcZCsgMVxcL1xcZCsgXFwqIFtcXD9cXCpdIFxcKi8pKSB7XG4gICAgICB0aGlzLmFjdGl2ZVRhYiA9ICdkYWlseSc7XG5cbiAgICAgIHRoaXMuc3RhdGUuZGFpbHkuc3ViVGFiID0gJ2V2ZXJ5RGF5cyc7XG4gICAgICB0aGlzLnN0YXRlLmRhaWx5LmV2ZXJ5RGF5cy5kYXlzID0gcGFyc2VJbnQoZGF5T2ZNb250aC5zdWJzdHJpbmcoMiksIDEwKTtcbiAgICAgIGNvbnN0IHBhcnNlZEhvdXJzID0gcGFyc2VJbnQoaG91cnMsIDEwKTtcbiAgICAgIHRoaXMuc3RhdGUuZGFpbHkuZXZlcnlEYXlzLmhvdXJzID0gdGhpcy5nZXRBbVBtSG91cihwYXJzZWRIb3Vycyk7XG4gICAgICB0aGlzLnN0YXRlLmRhaWx5LmV2ZXJ5RGF5cy5ob3VyVHlwZSA9IHRoaXMuZ2V0SG91clR5cGUocGFyc2VkSG91cnMpO1xuICAgICAgdGhpcy5zdGF0ZS5kYWlseS5ldmVyeURheXMubWludXRlcyA9IHBhcnNlSW50KG1pbnV0ZXMsIDEwKTtcbiAgICAgIHRoaXMuc3RhdGUuZGFpbHkuZXZlcnlEYXlzLnNlY29uZHMgPSBwYXJzZUludChzZWNvbmRzLCAxMCk7XG4gICAgfSBlbHNlIGlmIChjcm9uLm1hdGNoKC9cXGQrIFxcZCsgXFxkKyBbXFw/XFwqXSBcXCogTU9OLUZSSSBcXCovKSkge1xuICAgICAgdGhpcy5hY3RpdmVUYWIgPSAnZGFpbHknO1xuXG4gICAgICB0aGlzLnN0YXRlLmRhaWx5LnN1YlRhYiA9ICdldmVyeVdlZWtEYXknO1xuICAgICAgY29uc3QgcGFyc2VkSG91cnMgPSBwYXJzZUludChob3VycywgMTApO1xuICAgICAgdGhpcy5zdGF0ZS5kYWlseS5ldmVyeVdlZWtEYXkuaG91cnMgPSB0aGlzLmdldEFtUG1Ib3VyKHBhcnNlZEhvdXJzKTtcbiAgICAgIHRoaXMuc3RhdGUuZGFpbHkuZXZlcnlXZWVrRGF5LmhvdXJUeXBlID0gdGhpcy5nZXRIb3VyVHlwZShwYXJzZWRIb3Vycyk7XG4gICAgICB0aGlzLnN0YXRlLmRhaWx5LmV2ZXJ5V2Vla0RheS5taW51dGVzID0gcGFyc2VJbnQobWludXRlcywgMTApO1xuICAgICAgdGhpcy5zdGF0ZS5kYWlseS5ldmVyeVdlZWtEYXkuc2Vjb25kcyA9IHBhcnNlSW50KHNlY29uZHMsIDEwKTtcbiAgICB9IGVsc2UgaWYgKGNyb24ubWF0Y2goL1xcZCsgXFxkKyBcXGQrIFtcXD9cXCpdIFxcKiAoTU9OfFRVRXxXRUR8VEhVfEZSSXxTQVR8U1VOKSgsKE1PTnxUVUV8V0VEfFRIVXxGUkl8U0FUfFNVTikpKiBcXCovKSkge1xuICAgICAgdGhpcy5hY3RpdmVUYWIgPSAnd2Vla2x5JztcbiAgICAgIHRoaXMuc2VsZWN0T3B0aW9ucy5kYXlzLmZvckVhY2god2Vla0RheSA9PiB0aGlzLnN0YXRlLndlZWtseVt3ZWVrRGF5XSA9IGZhbHNlKTtcbiAgICAgIGRheU9mV2Vlay5zcGxpdCgnLCcpLmZvckVhY2god2Vla0RheSA9PiB0aGlzLnN0YXRlLndlZWtseVt3ZWVrRGF5XSA9IHRydWUpO1xuICAgICAgY29uc3QgcGFyc2VkSG91cnMgPSBwYXJzZUludChob3VycywgMTApO1xuICAgICAgdGhpcy5zdGF0ZS53ZWVrbHkuaG91cnMgPSB0aGlzLmdldEFtUG1Ib3VyKHBhcnNlZEhvdXJzKTtcbiAgICAgIHRoaXMuc3RhdGUud2Vla2x5LmhvdXJUeXBlID0gdGhpcy5nZXRIb3VyVHlwZShwYXJzZWRIb3Vycyk7XG4gICAgICB0aGlzLnN0YXRlLndlZWtseS5taW51dGVzID0gcGFyc2VJbnQobWludXRlcywgMTApO1xuICAgICAgdGhpcy5zdGF0ZS53ZWVrbHkuc2Vjb25kcyA9IHBhcnNlSW50KHNlY29uZHMsIDEwKTtcbiAgICB9IGVsc2UgaWYgKGNyb24ubWF0Y2goL1xcZCsgXFxkKyBcXGQrIChcXGQrfEx8TFd8MVcpIDFcXC9cXGQrIFtcXD9cXCpdIFxcKi8pKSB7XG4gICAgICB0aGlzLmFjdGl2ZVRhYiA9ICdtb250aGx5JztcbiAgICAgIHRoaXMuc3RhdGUubW9udGhseS5zdWJUYWIgPSAnc3BlY2lmaWNEYXknO1xuICAgICAgdGhpcy5zdGF0ZS5tb250aGx5LnNwZWNpZmljRGF5LmRheSA9IGRheU9mTW9udGg7XG4gICAgICB0aGlzLnN0YXRlLm1vbnRobHkuc3BlY2lmaWNEYXkubW9udGhzID0gcGFyc2VJbnQobW9udGguc3Vic3RyaW5nKDIpLCAxMCk7XG4gICAgICBjb25zdCBwYXJzZWRIb3VycyA9IHBhcnNlSW50KGhvdXJzLCAxMCk7XG4gICAgICB0aGlzLnN0YXRlLm1vbnRobHkuc3BlY2lmaWNEYXkuaG91cnMgPSB0aGlzLmdldEFtUG1Ib3VyKHBhcnNlZEhvdXJzKTtcbiAgICAgIHRoaXMuc3RhdGUubW9udGhseS5zcGVjaWZpY0RheS5ob3VyVHlwZSA9IHRoaXMuZ2V0SG91clR5cGUocGFyc2VkSG91cnMpO1xuICAgICAgdGhpcy5zdGF0ZS5tb250aGx5LnNwZWNpZmljRGF5Lm1pbnV0ZXMgPSBwYXJzZUludChtaW51dGVzLCAxMCk7XG4gICAgICB0aGlzLnN0YXRlLm1vbnRobHkuc3BlY2lmaWNEYXkuc2Vjb25kcyA9IHBhcnNlSW50KHNlY29uZHMsIDEwKTtcbiAgICB9IGVsc2UgaWYgKGNyb24ubWF0Y2goL1xcZCsgXFxkKyBcXGQrIFtcXD9cXCpdIDFcXC9cXGQrIChNT058VFVFfFdFRHxUSFV8RlJJfFNBVHxTVU4pKCgjWzEtNV0pfEwpIFxcKi8pKSB7XG4gICAgICBjb25zdCBkYXkgPSBkYXlPZldlZWsuc3Vic3RyKDAsIDMpO1xuICAgICAgY29uc3QgbW9udGhXZWVrID0gZGF5T2ZXZWVrLnN1YnN0cigzKTtcbiAgICAgIHRoaXMuYWN0aXZlVGFiID0gJ21vbnRobHknO1xuICAgICAgdGhpcy5zdGF0ZS5tb250aGx5LnN1YlRhYiA9ICdzcGVjaWZpY1dlZWtEYXknO1xuICAgICAgdGhpcy5zdGF0ZS5tb250aGx5LnNwZWNpZmljV2Vla0RheS5tb250aFdlZWsgPSBtb250aFdlZWs7XG4gICAgICB0aGlzLnN0YXRlLm1vbnRobHkuc3BlY2lmaWNXZWVrRGF5LmRheSA9IGRheTtcbiAgICAgIHRoaXMuc3RhdGUubW9udGhseS5zcGVjaWZpY1dlZWtEYXkubW9udGhzID0gcGFyc2VJbnQobW9udGguc3Vic3RyaW5nKDIpLCAxMCk7XG4gICAgICBjb25zdCBwYXJzZWRIb3VycyA9IHBhcnNlSW50KGhvdXJzLCAxMCk7XG4gICAgICB0aGlzLnN0YXRlLm1vbnRobHkuc3BlY2lmaWNXZWVrRGF5LmhvdXJzID0gdGhpcy5nZXRBbVBtSG91cihwYXJzZWRIb3Vycyk7XG4gICAgICB0aGlzLnN0YXRlLm1vbnRobHkuc3BlY2lmaWNXZWVrRGF5LmhvdXJUeXBlID0gdGhpcy5nZXRIb3VyVHlwZShwYXJzZWRIb3Vycyk7XG4gICAgICB0aGlzLnN0YXRlLm1vbnRobHkuc3BlY2lmaWNXZWVrRGF5Lm1pbnV0ZXMgPSBwYXJzZUludChtaW51dGVzLCAxMCk7XG4gICAgICB0aGlzLnN0YXRlLm1vbnRobHkuc3BlY2lmaWNXZWVrRGF5LnNlY29uZHMgPSBwYXJzZUludChzZWNvbmRzLCAxMCk7XG4gICAgfSBlbHNlIGlmIChjcm9uLm1hdGNoKC9cXGQrIFxcZCsgXFxkKyAoXFxkK3xMfExXfDFXKSBcXGQrIFtcXD9cXCpdIFxcKi8pKSB7XG4gICAgICB0aGlzLmFjdGl2ZVRhYiA9ICd5ZWFybHknO1xuICAgICAgdGhpcy5zdGF0ZS55ZWFybHkuc3ViVGFiID0gJ3NwZWNpZmljTW9udGhEYXknO1xuICAgICAgdGhpcy5zdGF0ZS55ZWFybHkuc3BlY2lmaWNNb250aERheS5tb250aCA9IHBhcnNlSW50KG1vbnRoLCAxMCk7XG4gICAgICB0aGlzLnN0YXRlLnllYXJseS5zcGVjaWZpY01vbnRoRGF5LmRheSA9IGRheU9mTW9udGg7XG4gICAgICBjb25zdCBwYXJzZWRIb3VycyA9IHBhcnNlSW50KGhvdXJzLCAxMCk7XG4gICAgICB0aGlzLnN0YXRlLnllYXJseS5zcGVjaWZpY01vbnRoRGF5LmhvdXJzID0gdGhpcy5nZXRBbVBtSG91cihwYXJzZWRIb3Vycyk7XG4gICAgICB0aGlzLnN0YXRlLnllYXJseS5zcGVjaWZpY01vbnRoRGF5LmhvdXJUeXBlID0gdGhpcy5nZXRIb3VyVHlwZShwYXJzZWRIb3Vycyk7XG4gICAgICB0aGlzLnN0YXRlLnllYXJseS5zcGVjaWZpY01vbnRoRGF5Lm1pbnV0ZXMgPSBwYXJzZUludChtaW51dGVzLCAxMCk7XG4gICAgICB0aGlzLnN0YXRlLnllYXJseS5zcGVjaWZpY01vbnRoRGF5LnNlY29uZHMgPSBwYXJzZUludChzZWNvbmRzLCAxMCk7XG4gICAgfSBlbHNlIGlmIChjcm9uLm1hdGNoKC9cXGQrIFxcZCsgXFxkKyBbXFw/XFwqXSBcXGQrIChNT058VFVFfFdFRHxUSFV8RlJJfFNBVHxTVU4pKCgjWzEtNV0pfEwpIFxcKi8pKSB7XG4gICAgICBjb25zdCBkYXkgPSBkYXlPZldlZWsuc3Vic3RyKDAsIDMpO1xuICAgICAgY29uc3QgbW9udGhXZWVrID0gZGF5T2ZXZWVrLnN1YnN0cigzKTtcbiAgICAgIHRoaXMuYWN0aXZlVGFiID0gJ3llYXJseSc7XG4gICAgICB0aGlzLnN0YXRlLnllYXJseS5zdWJUYWIgPSAnc3BlY2lmaWNNb250aFdlZWsnO1xuICAgICAgdGhpcy5zdGF0ZS55ZWFybHkuc3BlY2lmaWNNb250aFdlZWsubW9udGhXZWVrID0gbW9udGhXZWVrO1xuICAgICAgdGhpcy5zdGF0ZS55ZWFybHkuc3BlY2lmaWNNb250aFdlZWsuZGF5ID0gZGF5O1xuICAgICAgdGhpcy5zdGF0ZS55ZWFybHkuc3BlY2lmaWNNb250aFdlZWsubW9udGggPSBwYXJzZUludChtb250aCwgMTApO1xuICAgICAgY29uc3QgcGFyc2VkSG91cnMgPSBwYXJzZUludChob3VycywgMTApO1xuICAgICAgdGhpcy5zdGF0ZS55ZWFybHkuc3BlY2lmaWNNb250aFdlZWsuaG91cnMgPSB0aGlzLmdldEFtUG1Ib3VyKHBhcnNlZEhvdXJzKTtcbiAgICAgIHRoaXMuc3RhdGUueWVhcmx5LnNwZWNpZmljTW9udGhXZWVrLmhvdXJUeXBlID0gdGhpcy5nZXRIb3VyVHlwZShwYXJzZWRIb3Vycyk7XG4gICAgICB0aGlzLnN0YXRlLnllYXJseS5zcGVjaWZpY01vbnRoV2Vlay5taW51dGVzID0gcGFyc2VJbnQobWludXRlcywgMTApO1xuICAgICAgdGhpcy5zdGF0ZS55ZWFybHkuc3BlY2lmaWNNb250aFdlZWsuc2Vjb25kcyA9IHBhcnNlSW50KHNlY29uZHMsIDEwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hY3RpdmVUYWIgPSAnYWR2YW5jZWQnO1xuICAgICAgdGhpcy5zdGF0ZS5hZHZhbmNlZC5leHByZXNzaW9uID0gb3JpZ0Nyb247XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjcm9uSXNWYWxpZChjcm9uOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoY3Jvbikge1xuICAgICAgY29uc3QgY3JvblBhcnRzID0gY3Jvbi5zcGxpdCgnICcpO1xuICAgICAgcmV0dXJuICh0aGlzLmlzQ3JvbkZsYXZvclF1YXJ0eiAmJiAoY3JvblBhcnRzLmxlbmd0aCA9PT0gNlxuICAgICAgICB8fCBjcm9uUGFydHMubGVuZ3RoID09PSA3KVxuICAgICAgICB8fCAodGhpcy5pc0Nyb25GbGF2b3JTdGFuZGFyZCAmJiBjcm9uUGFydHMubGVuZ3RoID09PSA1KSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cblxuICBwcml2YXRlIGdldERlZmF1bHRTdGF0ZSgpIHtcbiAgICBjb25zdCBbZGVmYXVsdEhvdXJzLCBkZWZhdWx0TWludXRlcywgZGVmYXVsdFNlY29uZHNdID0gdGhpcy5vcHRpb25zLmRlZmF1bHRUaW1lLnNwbGl0KCc6JykubWFwKE51bWJlcik7XG5cbiAgICByZXR1cm4ge1xuICAgICAgbWludXRlczoge1xuICAgICAgICBtaW51dGVzOiAxLFxuICAgICAgICBzZWNvbmRzOiAwXG4gICAgICB9LFxuICAgICAgaG91cmx5OiB7XG4gICAgICAgIGhvdXJzOiAxLFxuICAgICAgICBtaW51dGVzOiAwLFxuICAgICAgICBzZWNvbmRzOiAwXG4gICAgICB9LFxuICAgICAgZGFpbHk6IHtcbiAgICAgICAgc3ViVGFiOiAnZXZlcnlEYXlzJyxcbiAgICAgICAgZXZlcnlEYXlzOiB7XG4gICAgICAgICAgZGF5czogMSxcbiAgICAgICAgICBob3VyczogdGhpcy5nZXRBbVBtSG91cihkZWZhdWx0SG91cnMpLFxuICAgICAgICAgIG1pbnV0ZXM6IGRlZmF1bHRNaW51dGVzLFxuICAgICAgICAgIHNlY29uZHM6IGRlZmF1bHRTZWNvbmRzLFxuICAgICAgICAgIGhvdXJUeXBlOiB0aGlzLmdldEhvdXJUeXBlKGRlZmF1bHRIb3VycylcbiAgICAgICAgfSxcbiAgICAgICAgZXZlcnlXZWVrRGF5OiB7XG4gICAgICAgICAgaG91cnM6IHRoaXMuZ2V0QW1QbUhvdXIoZGVmYXVsdEhvdXJzKSxcbiAgICAgICAgICBtaW51dGVzOiBkZWZhdWx0TWludXRlcyxcbiAgICAgICAgICBzZWNvbmRzOiBkZWZhdWx0U2Vjb25kcyxcbiAgICAgICAgICBob3VyVHlwZTogdGhpcy5nZXRIb3VyVHlwZShkZWZhdWx0SG91cnMpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB3ZWVrbHk6IHtcbiAgICAgICAgTU9OOiB0cnVlLFxuICAgICAgICBUVUU6IGZhbHNlLFxuICAgICAgICBXRUQ6IGZhbHNlLFxuICAgICAgICBUSFU6IGZhbHNlLFxuICAgICAgICBGUkk6IGZhbHNlLFxuICAgICAgICBTQVQ6IGZhbHNlLFxuICAgICAgICBTVU46IGZhbHNlLFxuICAgICAgICBob3VyczogdGhpcy5nZXRBbVBtSG91cihkZWZhdWx0SG91cnMpLFxuICAgICAgICBtaW51dGVzOiBkZWZhdWx0TWludXRlcyxcbiAgICAgICAgc2Vjb25kczogZGVmYXVsdFNlY29uZHMsXG4gICAgICAgIGhvdXJUeXBlOiB0aGlzLmdldEhvdXJUeXBlKGRlZmF1bHRIb3VycylcbiAgICAgIH0sXG4gICAgICBtb250aGx5OiB7XG4gICAgICAgIHN1YlRhYjogJ3NwZWNpZmljRGF5JyxcbiAgICAgICAgc3BlY2lmaWNEYXk6IHtcbiAgICAgICAgICBkYXk6ICcxJyxcbiAgICAgICAgICBtb250aHM6IDEsXG4gICAgICAgICAgaG91cnM6IHRoaXMuZ2V0QW1QbUhvdXIoZGVmYXVsdEhvdXJzKSxcbiAgICAgICAgICBtaW51dGVzOiBkZWZhdWx0TWludXRlcyxcbiAgICAgICAgICBzZWNvbmRzOiBkZWZhdWx0U2Vjb25kcyxcbiAgICAgICAgICBob3VyVHlwZTogdGhpcy5nZXRIb3VyVHlwZShkZWZhdWx0SG91cnMpXG4gICAgICAgIH0sXG4gICAgICAgIHNwZWNpZmljV2Vla0RheToge1xuICAgICAgICAgIG1vbnRoV2VlazogJyMxJyxcbiAgICAgICAgICBkYXk6ICdNT04nLFxuICAgICAgICAgIG1vbnRoczogMSxcbiAgICAgICAgICBob3VyczogdGhpcy5nZXRBbVBtSG91cihkZWZhdWx0SG91cnMpLFxuICAgICAgICAgIG1pbnV0ZXM6IGRlZmF1bHRNaW51dGVzLFxuICAgICAgICAgIHNlY29uZHM6IGRlZmF1bHRTZWNvbmRzLFxuICAgICAgICAgIGhvdXJUeXBlOiB0aGlzLmdldEhvdXJUeXBlKGRlZmF1bHRIb3VycylcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHllYXJseToge1xuICAgICAgICBzdWJUYWI6ICdzcGVjaWZpY01vbnRoRGF5JyxcbiAgICAgICAgc3BlY2lmaWNNb250aERheToge1xuICAgICAgICAgIG1vbnRoOiAxLFxuICAgICAgICAgIGRheTogJzEnLFxuICAgICAgICAgIGhvdXJzOiB0aGlzLmdldEFtUG1Ib3VyKGRlZmF1bHRIb3VycyksXG4gICAgICAgICAgbWludXRlczogZGVmYXVsdE1pbnV0ZXMsXG4gICAgICAgICAgc2Vjb25kczogZGVmYXVsdFNlY29uZHMsXG4gICAgICAgICAgaG91clR5cGU6IHRoaXMuZ2V0SG91clR5cGUoZGVmYXVsdEhvdXJzKVxuICAgICAgICB9LFxuICAgICAgICBzcGVjaWZpY01vbnRoV2Vlazoge1xuICAgICAgICAgIG1vbnRoV2VlazogJyMxJyxcbiAgICAgICAgICBkYXk6ICdNT04nLFxuICAgICAgICAgIG1vbnRoOiAxLFxuICAgICAgICAgIGhvdXJzOiB0aGlzLmdldEFtUG1Ib3VyKGRlZmF1bHRIb3VycyksXG4gICAgICAgICAgbWludXRlczogZGVmYXVsdE1pbnV0ZXMsXG4gICAgICAgICAgc2Vjb25kczogZGVmYXVsdFNlY29uZHMsXG4gICAgICAgICAgaG91clR5cGU6IHRoaXMuZ2V0SG91clR5cGUoZGVmYXVsdEhvdXJzKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgYWR2YW5jZWQ6IHtcbiAgICAgICAgZXhwcmVzc2lvbjogdGhpcy5pc0Nyb25GbGF2b3JRdWFydHogPyAnMCAxNSAxMCBMLTIgKiA/IConIDogJzE1IDEwIDIgKiAqJ1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICBwcml2YXRlIGdldE9yZGluYWxTdWZmaXgodmFsdWU6IHN0cmluZykge1xuICAgIGlmICh2YWx1ZS5sZW5ndGggPiAxKSB7XG4gICAgICBjb25zdCBzZWNvbmRUb0xhc3REaWdpdCA9IHZhbHVlLmNoYXJBdCh2YWx1ZS5sZW5ndGggLSAyKTtcbiAgICAgIGlmIChzZWNvbmRUb0xhc3REaWdpdCA9PT0gJzEnKSB7XG4gICAgICAgIHJldHVybiAndGgnO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGxhc3REaWdpdCA9IHZhbHVlLmNoYXJBdCh2YWx1ZS5sZW5ndGggLSAxKTtcbiAgICBzd2l0Y2ggKGxhc3REaWdpdCkge1xuICAgICAgY2FzZSAnMSc6XG4gICAgICAgIHJldHVybiAnc3QnO1xuICAgICAgY2FzZSAnMic6XG4gICAgICAgIHJldHVybiAnbmQnO1xuICAgICAgY2FzZSAnMyc6XG4gICAgICAgIHJldHVybiAncmQnO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuICd0aCc7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRTZWxlY3RPcHRpb25zKCkge1xuICAgIHJldHVybiB7XG4gICAgICBtb250aHM6IHRoaXMuZ2V0UmFuZ2UoMSwgMTIpLFxuICAgICAgbW9udGhXZWVrczogWycjMScsICcjMicsICcjMycsICcjNCcsICcjNScsICdMJ10sXG4gICAgICBkYXlzOiBbJ01PTicsICdUVUUnLCAnV0VEJywgJ1RIVScsICdGUkknLCAnU0FUJywgJ1NVTiddLFxuICAgICAgbWludXRlczogdGhpcy5nZXRSYW5nZSgwLCA1OSksXG4gICAgICBmdWxsTWludXRlczogdGhpcy5nZXRSYW5nZSgwLCA1OSksXG4gICAgICBzZWNvbmRzOiB0aGlzLmdldFJhbmdlKDAsIDU5KSxcbiAgICAgIGhvdXJzOiB0aGlzLmdldFJhbmdlKDEsIDIzKSxcbiAgICAgIG1vbnRoRGF5czogdGhpcy5nZXRSYW5nZSgxLCAzMSksXG4gICAgICBtb250aERheXNXaXRoTGFzdHM6IFsnMVcnLCAuLi5bLi4udGhpcy5nZXRSYW5nZSgxLCAzMSkubWFwKFN0cmluZyldLCAnTFcnLCAnTCddLFxuICAgICAgbW9udGhEYXlzV2l0aE91dExhc3RzOiBbLi4uWy4uLnRoaXMuZ2V0UmFuZ2UoMSwgMzEpLm1hcChTdHJpbmcpXV0sXG4gICAgICBob3VyVHlwZXM6IFsnQU0nLCAnUE0nXVxuICAgIH07XG4gIH1cblxuICBwcml2YXRlIGdldFJhbmdlKHN0YXJ0OiBudW1iZXIsIGVuZDogbnVtYmVyKTogbnVtYmVyW10ge1xuICAgIGNvbnN0IGxlbmd0aCA9IGVuZCAtIHN0YXJ0ICsgMTtcbiAgICByZXR1cm4gQXJyYXkuYXBwbHkobnVsbCwgQXJyYXkobGVuZ3RoKSkubWFwKChfLCBpKSA9PiBpICsgc3RhcnQpO1xuICB9XG5cblxuICAvKlxuICAgKiBDb250cm9sVmFsdWVBY2Nlc3NvclxuICAgKi9cbiAgb25DaGFuZ2UgPSAoXzogYW55KSA9PiB7XG4gIH07XG4gIG9uVG91Y2hlZCA9ICgpID0+IHtcbiAgfTtcblxuICB3cml0ZVZhbHVlKG9iajogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5jcm9uID0gb2JqO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgfVxuXG59XG4iXX0=