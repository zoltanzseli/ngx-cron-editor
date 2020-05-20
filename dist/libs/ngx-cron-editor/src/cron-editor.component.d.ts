import { OnInit } from '@angular/core';
import { CronOptions } from './CronOptions';
import { ControlValueAccessor, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
export declare const CRON_VALUE_ACCESSOR: any;
export declare class CronGenComponent implements OnInit, ControlValueAccessor {
    private fb;
    backgroundColor: ThemePalette;
    color: ThemePalette;
    disabled: boolean;
    options: CronOptions;
    cron: string;
    activeTab: string;
    selectOptions: {
        months: number[];
        monthWeeks: string[];
        days: string[];
        minutes: number[];
        fullMinutes: number[];
        seconds: number[];
        hours: number[];
        monthDays: number[];
        monthDaysWithLasts: string[];
        monthDaysWithOutLasts: string[];
        hourTypes: string[];
    };
    state: any;
    private localCron;
    private isDirty;
    cronForm: FormControl;
    minutesForm: FormGroup;
    hourlyForm: FormGroup;
    dailyForm: FormGroup;
    weeklyForm: FormGroup;
    monthlyForm: FormGroup;
    yearlyForm: FormGroup;
    advancedForm: FormGroup;
    readonly isCronFlavorQuartz: boolean;
    readonly isCronFlavorStandard: boolean;
    readonly yearDefaultChar: "" | "*";
    readonly weekDayDefaultChar: "*" | "?";
    readonly monthDayDefaultChar: "*" | "?";
    constructor(fb: FormBuilder);
    onTabFocus(idx: number): void;
    ngOnInit(): Promise<void>;
    private computeMinutesCron;
    private computeHourlyCron;
    private computeDailyCron;
    private computeWeeklyCron;
    private computeMonthlyCron;
    private computeYearlyCron;
    private computeAdvancedExpression;
    dayDisplay(day: string): string;
    monthWeekDisplay(monthWeekNumber: string): string;
    monthDisplay(month: number): string;
    monthDayDisplay(month: string): string;
    private getAmPmHour;
    private getHourType;
    private hourToCron;
    private handleModelChange;
    private cronIsValid;
    private getDefaultState;
    private getOrdinalSuffix;
    private getSelectOptions;
    private getRange;
    onChange: (_: any) => void;
    onTouched: () => void;
    writeValue(obj: string): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
}