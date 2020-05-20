/**
 * @fileoverview added by tsickle
 * Generated from: src/cron-time-picker.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __generator, __read, __spread } from "tslib";
import { Component, Input } from '@angular/core';
import { ControlContainer } from '@angular/forms';
/**
 * @record
 */
export function TimePickerModel() { }
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
        { type: Component, args: [{
                    selector: 'cron-time-picker',
                    template: "<span [formGroup]=\"parent.control\">\n\n  <ng-container *ngIf=\"!hideHours\">\n    <mat-form-field>\n      <mat-label>Hour(s)</mat-label>\n      <mat-select formControlName=\"hours\">\n        <mat-option *ngFor=\"let hour of hours\" [value]=\"hour\">{{hour}}</mat-option>\n      </mat-select>\n    </mat-form-field>\n  </ng-container>\n  <ng-container *ngIf=\"!hideMinutes\">\n    <span *ngIf=\"!hideHours\">:</span>\n    <mat-form-field>\n      <mat-label>Minute(s)</mat-label>\n      <mat-select formControlName=\"minutes\">\n        <mat-option *ngFor=\"let minute of minutes\" [value]=\"minute\">{{minute}}</mat-option>\n      </mat-select>\n    </mat-form-field>\n  </ng-container>\n\n  <ng-container *ngIf=\"!hideSeconds\">\n    <span *ngIf=\"!hideMinutes\">:</span>\n    <mat-form-field>\n      <mat-label>Second(s)</mat-label>\n      <mat-select formControlName=\"seconds\">\n        <mat-option *ngFor=\"let second of seconds\" [value]=\"second\">{{second}}</mat-option>\n      </mat-select>\n    </mat-form-field>\n  </ng-container>\n\n  <ng-container *ngIf=\"!use24HourTime\">\n    <span></span>.\n    <mat-form-field>\n      <mat-select formControlName=\"hourType\">\n        <mat-option *ngFor=\"let hourType of hourTypes\" [value]=\"hourType\">{{hourType}}</mat-option>\n      </mat-select>\n    </mat-form-field>\n  </ng-container>\n</span>\n",
                    providers: []
                }] }
    ];
    /** @nocollapse */
    TimePickerComponent.ctorParameters = function () { return [
        { type: ControlContainer }
    ]; };
    TimePickerComponent.propDecorators = {
        disabled: [{ type: Input }],
        use24HourTime: [{ type: Input }],
        hideHours: [{ type: Input }],
        hideMinutes: [{ type: Input }],
        hideSeconds: [{ type: Input }]
    };
    return TimePickerComponent;
}());
export { TimePickerComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3Jvbi10aW1lLXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtY3Jvbi1lZGl0b3IvIiwic291cmNlcyI6WyJzcmMvY3Jvbi10aW1lLXBpY2tlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFHbEQscUNBS0M7OztJQUpDLCtCQUFhOztJQUNiLGdDQUFjOztJQUNkLGtDQUFnQjs7SUFDaEIsa0NBQWdCOzs7Ozs7O0FBR2xCLFNBQVUsS0FBSyxDQUFDLEtBQWEsRUFBRSxHQUFXOzs7OztnQkFDL0IsQ0FBQyxHQUFHLEtBQUs7OztxQkFBRSxDQUFBLENBQUMsSUFBSSxHQUFHLENBQUE7Z0JBQzFCLHFCQUFNLENBQUMsRUFBQTs7Z0JBQVAsU0FBTyxDQUFDOzs7Z0JBRG9CLENBQUMsRUFBRSxDQUFBOzs7OztDQUdsQztBQUVEO0lBcUJFLDZCQUFtQixNQUF3QjtRQUF4QixXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQWIzQixrQkFBYSxHQUFHLElBQUksQ0FBQztRQUNyQixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBTTVCLFlBQU8sWUFBUSxLQUFLLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFHO1FBQzlCLFlBQU8sWUFBTyxLQUFLLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFHO1FBQzdCLGNBQVMsR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUVjLENBQUM7SUFSL0Msc0JBQUksc0NBQUs7Ozs7UUFBVDtZQUNFLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLFVBQU0sS0FBSyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLFVBQU0sS0FBSyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3RFLENBQUM7OztPQUFBOztnQkFmRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsMjFDQUErQztvQkFDL0MsU0FBUyxFQUFFLEVBQUU7aUJBQ2Q7Ozs7Z0JBcEJRLGdCQUFnQjs7OzJCQXVCdEIsS0FBSztnQ0FDTCxLQUFLOzRCQUNMLEtBQUs7OEJBQ0wsS0FBSzs4QkFDTCxLQUFLOztJQWNSLDBCQUFDO0NBQUEsQUF6QkQsSUF5QkM7U0FwQlksbUJBQW1COzs7SUFFOUIsdUNBQXlCOztJQUN6Qiw0Q0FBcUM7O0lBQ3JDLHdDQUFrQzs7SUFDbEMsMENBQW9DOztJQUNwQywwQ0FBbUM7O0lBTW5DLHNDQUFxQzs7SUFDckMsc0NBQW9DOztJQUNwQyx3Q0FBZ0M7O0lBRXBCLHFDQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbENvbnRhaW5lciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuXG5leHBvcnQgaW50ZXJmYWNlIFRpbWVQaWNrZXJNb2RlbCB7XG4gIGRheXM6IG51bWJlcjtcbiAgaG91cnM6IG51bWJlcjtcbiAgbWludXRlczogbnVtYmVyO1xuICBzZWNvbmRzOiBudW1iZXI7XG59XG5cbmZ1bmN0aW9uKiByYW5nZShzdGFydDogbnVtYmVyLCBlbmQ6IG51bWJlcikge1xuICBmb3IgKGxldCBpID0gc3RhcnQ7IGkgPD0gZW5kOyBpKyspIHtcbiAgICB5aWVsZCBpO1xuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nyb24tdGltZS1waWNrZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vY3Jvbi10aW1lLXBpY2tlci50ZW1wbGF0ZS5odG1sJyxcbiAgcHJvdmlkZXJzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBUaW1lUGlja2VyQ29tcG9uZW50IHtcblxuICBASW5wdXQoKSBwdWJsaWMgZGlzYWJsZWQ7XG4gIEBJbnB1dCgpIHB1YmxpYyB1c2UyNEhvdXJUaW1lID0gdHJ1ZTtcbiAgQElucHV0KCkgcHVibGljIGhpZGVIb3VycyA9IGZhbHNlO1xuICBASW5wdXQoKSBwdWJsaWMgaGlkZU1pbnV0ZXMgPSBmYWxzZTtcbiAgQElucHV0KCkgcHVibGljIGhpZGVTZWNvbmRzID0gdHJ1ZTtcblxuICBnZXQgaG91cnMoKTogbnVtYmVyW10ge1xuICAgIHJldHVybiB0aGlzLnVzZTI0SG91clRpbWUgPyBbLi4uIHJhbmdlKDAsIDIzKV0gOiBbLi4uIHJhbmdlKDAsIDEyKV07XG4gIH1cblxuICBwdWJsaWMgbWludXRlcyA9ICBbLi4ucmFuZ2UoMCwgNTkpIF07XG4gIHB1YmxpYyBzZWNvbmRzID0gWy4uLnJhbmdlKDAsIDU5KSBdO1xuICBwdWJsaWMgaG91clR5cGVzID0gWydBTScsICdQTSddO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXJlbnQ6IENvbnRyb2xDb250YWluZXIpIHt9XG5cblxuXG59XG5cblxuIl19