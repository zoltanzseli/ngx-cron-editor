import { __generator, __read, __spread } from "tslib";
import { Component, Input } from '@angular/core';
import { ControlContainer } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/common";
import * as i3 from "@angular/material/form-field";
import * as i4 from "@angular/material/select";
import * as i5 from "@angular/material/core";
function TimePickerComponent_ng_container_1_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 4);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var hour_r5 = ctx.$implicit;
    i0.ɵɵproperty("value", hour_r5);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(hour_r5);
} }
function TimePickerComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "mat-form-field");
    i0.ɵɵelementStart(2, "mat-label");
    i0.ɵɵtext(3, "Hour(s)");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "mat-select", 2);
    i0.ɵɵtemplate(5, TimePickerComponent_ng_container_1_mat_option_5_Template, 2, 2, "mat-option", 3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngForOf", ctx_r0.hours);
} }
function TimePickerComponent_ng_container_2_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, ":");
    i0.ɵɵelementEnd();
} }
function TimePickerComponent_ng_container_2_mat_option_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 4);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var minute_r8 = ctx.$implicit;
    i0.ɵɵproperty("value", minute_r8);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(minute_r8);
} }
function TimePickerComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, TimePickerComponent_ng_container_2_span_1_Template, 2, 0, "span", 1);
    i0.ɵɵelementStart(2, "mat-form-field");
    i0.ɵɵelementStart(3, "mat-label");
    i0.ɵɵtext(4, "Minute(s)");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "mat-select", 5);
    i0.ɵɵtemplate(6, TimePickerComponent_ng_container_2_mat_option_6_Template, 2, 2, "mat-option", 3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r1.hideHours);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngForOf", ctx_r1.minutes);
} }
function TimePickerComponent_ng_container_3_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, ":");
    i0.ɵɵelementEnd();
} }
function TimePickerComponent_ng_container_3_mat_option_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 4);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var second_r11 = ctx.$implicit;
    i0.ɵɵproperty("value", second_r11);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(second_r11);
} }
function TimePickerComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, TimePickerComponent_ng_container_3_span_1_Template, 2, 0, "span", 1);
    i0.ɵɵelementStart(2, "mat-form-field");
    i0.ɵɵelementStart(3, "mat-label");
    i0.ɵɵtext(4, "Second(s)");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "mat-select", 6);
    i0.ɵɵtemplate(6, TimePickerComponent_ng_container_3_mat_option_6_Template, 2, 2, "mat-option", 3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r2.hideMinutes);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngForOf", ctx_r2.seconds);
} }
function TimePickerComponent_ng_container_4_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 4);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var hourType_r13 = ctx.$implicit;
    i0.ɵɵproperty("value", hourType_r13);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(hourType_r13);
} }
function TimePickerComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "span");
    i0.ɵɵtext(2, ". ");
    i0.ɵɵelementStart(3, "mat-form-field");
    i0.ɵɵelementStart(4, "mat-select", 7);
    i0.ɵɵtemplate(5, TimePickerComponent_ng_container_4_mat_option_5_Template, 2, 2, "mat-option", 3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngForOf", ctx_r3.hourTypes);
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
    /** @nocollapse */ TimePickerComponent.ɵfac = function TimePickerComponent_Factory(t) { return new (t || TimePickerComponent)(i0.ɵɵdirectiveInject(i1.ControlContainer)); };
    /** @nocollapse */ TimePickerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: TimePickerComponent, selectors: [["cron-time-picker"]], inputs: { disabled: "disabled", use24HourTime: "use24HourTime", hideHours: "hideHours", hideMinutes: "hideMinutes", hideSeconds: "hideSeconds" }, features: [i0.ɵɵProvidersFeature([])], decls: 5, vars: 5, consts: [[3, "formGroup"], [4, "ngIf"], ["formControlName", "hours"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["formControlName", "minutes"], ["formControlName", "seconds"], ["formControlName", "hourType"]], template: function TimePickerComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "span", 0);
            i0.ɵɵtemplate(1, TimePickerComponent_ng_container_1_Template, 6, 1, "ng-container", 1);
            i0.ɵɵtemplate(2, TimePickerComponent_ng_container_2_Template, 7, 2, "ng-container", 1);
            i0.ɵɵtemplate(3, TimePickerComponent_ng_container_3_Template, 7, 2, "ng-container", 1);
            i0.ɵɵtemplate(4, TimePickerComponent_ng_container_4_Template, 6, 1, "ng-container", 1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("formGroup", ctx.parent.control);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.hideHours);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.hideMinutes);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.hideSeconds);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.use24HourTime);
        } }, directives: [i1.NgControlStatusGroup, i1.FormGroupDirective, i2.NgIf, i3.MatFormField, i3.MatLabel, i4.MatSelect, i1.NgControlStatus, i1.FormControlName, i2.NgForOf, i5.MatOption], encapsulation: 2 });
    return TimePickerComponent;
}());
export { TimePickerComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TimePickerComponent, [{
        type: Component,
        args: [{
                selector: 'cron-time-picker',
                templateUrl: './cron-time-picker.template.html',
                providers: []
            }]
    }], function () { return [{ type: i1.ControlContainer }]; }, { disabled: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3Jvbi10aW1lLXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtY3Jvbi1lZGl0b3IvIiwic291cmNlcyI6WyJzcmMvY3Jvbi10aW1lLXBpY2tlci5jb21wb25lbnQudHMiLCJzcmMvY3Jvbi10aW1lLXBpY2tlci50ZW1wbGF0ZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7SUNLMUMscUNBQXNEO0lBQUEsWUFBUTtJQUFBLGlCQUFhOzs7SUFBcEMsK0JBQWM7SUFBQyxlQUFRO0lBQVIsNkJBQVE7OztJQUpwRSw2QkFDRTtJQUFBLHNDQUNFO0lBQUEsaUNBQVc7SUFBQSx1QkFBTztJQUFBLGlCQUFZO0lBQzlCLHFDQUNFO0lBQUEsaUdBQXNEO0lBQ3hELGlCQUFhO0lBQ2YsaUJBQWlCO0lBQ25CLDBCQUFlOzs7SUFIRyxlQUEwQjtJQUExQixzQ0FBMEI7OztJQUsxQyw0QkFBeUI7SUFBQSxpQkFBQztJQUFBLGlCQUFPOzs7SUFJN0IscUNBQTREO0lBQUEsWUFBVTtJQUFBLGlCQUFhOzs7SUFBeEMsaUNBQWdCO0lBQUMsZUFBVTtJQUFWLCtCQUFVOzs7SUFMNUUsNkJBQ0U7SUFBQSxxRkFBeUI7SUFDekIsc0NBQ0U7SUFBQSxpQ0FBVztJQUFBLHlCQUFTO0lBQUEsaUJBQVk7SUFDaEMscUNBQ0U7SUFBQSxpR0FBNEQ7SUFDOUQsaUJBQWE7SUFDZixpQkFBaUI7SUFDbkIsMEJBQWU7OztJQVBQLGVBQWtCO0lBQWxCLHdDQUFrQjtJQUlSLGVBQThCO0lBQTlCLHdDQUE4Qjs7O0lBTTlDLDRCQUEyQjtJQUFBLGlCQUFDO0lBQUEsaUJBQU87OztJQUkvQixxQ0FBNEQ7SUFBQSxZQUFVO0lBQUEsaUJBQWE7OztJQUF4QyxrQ0FBZ0I7SUFBQyxlQUFVO0lBQVYsZ0NBQVU7OztJQUw1RSw2QkFDRTtJQUFBLHFGQUEyQjtJQUMzQixzQ0FDRTtJQUFBLGlDQUFXO0lBQUEseUJBQVM7SUFBQSxpQkFBWTtJQUNoQyxxQ0FDRTtJQUFBLGlHQUE0RDtJQUM5RCxpQkFBYTtJQUNmLGlCQUFpQjtJQUNuQiwwQkFBZTs7O0lBUFAsZUFBb0I7SUFBcEIsMENBQW9CO0lBSVYsZUFBOEI7SUFBOUIsd0NBQThCOzs7SUFTMUMscUNBQWtFO0lBQUEsWUFBWTtJQUFBLGlCQUFhOzs7SUFBNUMsb0NBQWtCO0lBQUMsZUFBWTtJQUFaLGtDQUFZOzs7SUFKcEYsNkJBQ0U7SUFBQSx1QkFBYTtJQUFBLGtCQUNiO0lBQUEsc0NBQ0U7SUFBQSxxQ0FDRTtJQUFBLGlHQUFrRTtJQUNwRSxpQkFBYTtJQUNmLGlCQUFpQjtJQUNuQiwwQkFBZTs7O0lBSEcsZUFBa0M7SUFBbEMsMENBQWtDOztBRHZCdEQsU0FBVSxLQUFLLENBQUMsS0FBYSxFQUFFLEdBQVc7Ozs7O2dCQUMvQixDQUFDLEdBQUcsS0FBSzs7O3FCQUFFLENBQUEsQ0FBQyxJQUFJLEdBQUcsQ0FBQTtnQkFDMUIscUJBQU0sQ0FBQyxFQUFBOztnQkFBUCxTQUFPLENBQUM7OztnQkFEb0IsQ0FBQyxFQUFFLENBQUE7Ozs7O0NBR2xDO0FBRUQ7SUFxQkUsNkJBQW1CLE1BQXdCO1FBQXhCLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBYjNCLGtCQUFhLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFDcEIsZ0JBQVcsR0FBRyxJQUFJLENBQUM7UUFNNUIsWUFBTyxZQUFRLEtBQUssQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUc7UUFDOUIsWUFBTyxZQUFPLEtBQUssQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUc7UUFDN0IsY0FBUyxHQUFHLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBRWMsQ0FBQztJQVIvQyxzQkFBSSxzQ0FBSzthQUFUO1lBQ0UsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsVUFBTSxLQUFLLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsVUFBTSxLQUFLLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDdEUsQ0FBQzs7O09BQUE7NkdBVlUsbUJBQW1COytFQUFuQixtQkFBbUIsd05BRm5CLEVBQUU7WUNwQmYsK0JBRUU7WUFBQSxzRkFDRTtZQU9GLHNGQUNFO1lBU0Ysc0ZBQ0U7WUFTRixzRkFDRTtZQU9KLGlCQUFPOztZQXRDRCw4Q0FBNEI7WUFFbEIsZUFBa0I7WUFBbEIscUNBQWtCO1lBUWxCLGVBQW9CO1lBQXBCLHVDQUFvQjtZQVVwQixlQUFvQjtZQUFwQix1Q0FBb0I7WUFVcEIsZUFBc0I7WUFBdEIseUNBQXNCOzs4QkQ5QnRDO0NBMENDLEFBekJELElBeUJDO1NBcEJZLG1CQUFtQjtrREFBbkIsbUJBQW1CO2NBTC9CLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixXQUFXLEVBQUUsa0NBQWtDO2dCQUMvQyxTQUFTLEVBQUUsRUFBRTthQUNkOztrQkFHRSxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sQ29udGFpbmVyIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5cbmV4cG9ydCBpbnRlcmZhY2UgVGltZVBpY2tlck1vZGVsIHtcbiAgZGF5czogbnVtYmVyO1xuICBob3VyczogbnVtYmVyO1xuICBtaW51dGVzOiBudW1iZXI7XG4gIHNlY29uZHM6IG51bWJlcjtcbn1cblxuZnVuY3Rpb24qIHJhbmdlKHN0YXJ0OiBudW1iZXIsIGVuZDogbnVtYmVyKSB7XG4gIGZvciAobGV0IGkgPSBzdGFydDsgaSA8PSBlbmQ7IGkrKykge1xuICAgIHlpZWxkIGk7XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3Jvbi10aW1lLXBpY2tlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9jcm9uLXRpbWUtcGlja2VyLnRlbXBsYXRlLmh0bWwnLFxuICBwcm92aWRlcnM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIFRpbWVQaWNrZXJDb21wb25lbnQge1xuXG4gIEBJbnB1dCgpIHB1YmxpYyBkaXNhYmxlZDtcbiAgQElucHV0KCkgcHVibGljIHVzZTI0SG91clRpbWUgPSB0cnVlO1xuICBASW5wdXQoKSBwdWJsaWMgaGlkZUhvdXJzID0gZmFsc2U7XG4gIEBJbnB1dCgpIHB1YmxpYyBoaWRlTWludXRlcyA9IGZhbHNlO1xuICBASW5wdXQoKSBwdWJsaWMgaGlkZVNlY29uZHMgPSB0cnVlO1xuXG4gIGdldCBob3VycygpOiBudW1iZXJbXSB7XG4gICAgcmV0dXJuIHRoaXMudXNlMjRIb3VyVGltZSA/IFsuLi4gcmFuZ2UoMCwgMjMpXSA6IFsuLi4gcmFuZ2UoMCwgMTIpXTtcbiAgfVxuXG4gIHB1YmxpYyBtaW51dGVzID0gIFsuLi5yYW5nZSgwLCA1OSkgXTtcbiAgcHVibGljIHNlY29uZHMgPSBbLi4ucmFuZ2UoMCwgNTkpIF07XG4gIHB1YmxpYyBob3VyVHlwZXMgPSBbJ0FNJywgJ1BNJ107XG5cbiAgY29uc3RydWN0b3IocHVibGljIHBhcmVudDogQ29udHJvbENvbnRhaW5lcikge31cblxuXG5cbn1cblxuXG4iLCI8c3BhbiBbZm9ybUdyb3VwXT1cInBhcmVudC5jb250cm9sXCI+XG5cbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFoaWRlSG91cnNcIj5cbiAgICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgICA8bWF0LWxhYmVsPkhvdXIocyk8L21hdC1sYWJlbD5cbiAgICAgIDxtYXQtc2VsZWN0IGZvcm1Db250cm9sTmFtZT1cImhvdXJzXCI+XG4gICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBob3VyIG9mIGhvdXJzXCIgW3ZhbHVlXT1cImhvdXJcIj57e2hvdXJ9fTwvbWF0LW9wdGlvbj5cbiAgICAgIDwvbWF0LXNlbGVjdD5cbiAgICA8L21hdC1mb3JtLWZpZWxkPlxuICA8L25nLWNvbnRhaW5lcj5cbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFoaWRlTWludXRlc1wiPlxuICAgIDxzcGFuICpuZ0lmPVwiIWhpZGVIb3Vyc1wiPjo8L3NwYW4+XG4gICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgICAgPG1hdC1sYWJlbD5NaW51dGUocyk8L21hdC1sYWJlbD5cbiAgICAgIDxtYXQtc2VsZWN0IGZvcm1Db250cm9sTmFtZT1cIm1pbnV0ZXNcIj5cbiAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IG1pbnV0ZSBvZiBtaW51dGVzXCIgW3ZhbHVlXT1cIm1pbnV0ZVwiPnt7bWludXRlfX08L21hdC1vcHRpb24+XG4gICAgICA8L21hdC1zZWxlY3Q+XG4gICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgPC9uZy1jb250YWluZXI+XG5cbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFoaWRlU2Vjb25kc1wiPlxuICAgIDxzcGFuICpuZ0lmPVwiIWhpZGVNaW51dGVzXCI+Ojwvc3Bhbj5cbiAgICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgICA8bWF0LWxhYmVsPlNlY29uZChzKTwvbWF0LWxhYmVsPlxuICAgICAgPG1hdC1zZWxlY3QgZm9ybUNvbnRyb2xOYW1lPVwic2Vjb25kc1wiPlxuICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgc2Vjb25kIG9mIHNlY29uZHNcIiBbdmFsdWVdPVwic2Vjb25kXCI+e3tzZWNvbmR9fTwvbWF0LW9wdGlvbj5cbiAgICAgIDwvbWF0LXNlbGVjdD5cbiAgICA8L21hdC1mb3JtLWZpZWxkPlxuICA8L25nLWNvbnRhaW5lcj5cblxuICA8bmctY29udGFpbmVyICpuZ0lmPVwiIXVzZTI0SG91clRpbWVcIj5cbiAgICA8c3Bhbj48L3NwYW4+LlxuICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICAgIDxtYXQtc2VsZWN0IGZvcm1Db250cm9sTmFtZT1cImhvdXJUeXBlXCI+XG4gICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBob3VyVHlwZSBvZiBob3VyVHlwZXNcIiBbdmFsdWVdPVwiaG91clR5cGVcIj57e2hvdXJUeXBlfX08L21hdC1vcHRpb24+XG4gICAgICA8L21hdC1zZWxlY3Q+XG4gICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgPC9uZy1jb250YWluZXI+XG48L3NwYW4+XG4iXX0=