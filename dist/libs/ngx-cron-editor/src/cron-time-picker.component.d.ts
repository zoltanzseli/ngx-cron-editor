import { ControlContainer } from '@angular/forms';
export interface TimePickerModel {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}
export declare class TimePickerComponent {
    parent: ControlContainer;
    disabled: any;
    use24HourTime: boolean;
    hideHours: boolean;
    hideMinutes: boolean;
    hideSeconds: boolean;
    readonly hours: number[];
    minutes: number[];
    seconds: number[];
    hourTypes: string[];
    constructor(parent: ControlContainer);
}
