/**
 * @fileoverview added by tsickle
 * Generated from: src/cron-editor.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TimePickerComponent } from './cron-time-picker.component';
import { CronGenComponent } from './cron-editor.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MAT_LABEL_GLOBAL_OPTIONS } from '@angular/material/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
var ɵ0 = { float: 'always' }, ɵ1 = { appearance: 'outline' };
var CronEditorModule = /** @class */ (function () {
    function CronEditorModule() {
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
    return CronEditorModule;
}());
export { CronEditorModule };
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3Jvbi1lZGl0b3IubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWNyb24tZWRpdG9yLyIsInNvdXJjZXMiOlsic3JjL2Nyb24tZWRpdG9yLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFDLFdBQVcsRUFBRSxtQkFBbUIsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ25FLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzNELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBQzdELE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ2hFLE9BQU8sRUFBQyw4QkFBOEIsRUFBQyxNQUFNLDhCQUE4QixDQUFDO1NBbUIxQixFQUFDLEtBQUssRUFBRSxRQUFRLEVBQUMsT0FDWCxFQUFDLFVBQVUsRUFBRSxTQUFTLEVBQUM7QUFoQi9FO0lBQUE7SUFvQkEsQ0FBQzs7Z0JBcEJBLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixXQUFXO3dCQUNYLG1CQUFtQjt3QkFDbkIsYUFBYTt3QkFDYixhQUFhO3dCQUNiLGVBQWU7d0JBQ2YsY0FBYzt3QkFDZCxjQUFjO3dCQUNkLGlCQUFpQjtxQkFDbEI7b0JBQ0MsT0FBTyxFQUFFLENBQUMsbUJBQW1CLEVBQUUsZ0JBQWdCLENBQUM7b0JBQ2hELFlBQVksRUFBRSxDQUFDLG1CQUFtQixFQUFFLGdCQUFnQixDQUFDO29CQUNyRCxTQUFTLEVBQUU7d0JBQ1gsRUFBQyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsUUFBUSxJQUFtQixFQUFDO3dCQUNoRSxFQUFDLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxRQUFRLElBQXlCLEVBQUM7cUJBQzdFO2lCQUNGOztJQUVELHVCQUFDO0NBQUEsQUFwQkQsSUFvQkM7U0FEWSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgVGltZVBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vY3Jvbi10aW1lLXBpY2tlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ3JvbkdlbkNvbXBvbmVudCB9IGZyb20gJy4vY3Jvbi1lZGl0b3IuY29tcG9uZW50JztcbmltcG9ydCB7TWF0VGFic01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdGFicyc7XG5pbXBvcnQge01hdExpc3RNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2xpc3QnO1xuaW1wb3J0IHtNYXRTZWxlY3RNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NlbGVjdCc7XG5pbXBvcnQge01hdElucHV0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pbnB1dCc7XG5pbXBvcnQge01hdFJhZGlvTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9yYWRpbyc7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7TWF0Q2hlY2tib3hNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NoZWNrYm94JztcbmltcG9ydCB7TUFUX0xBQkVMX0dMT0JBTF9PUFRJT05TfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcbmltcG9ydCB7TUFUX0ZPUk1fRklFTERfREVGQVVMVF9PUFRJT05TfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkJztcblxuXG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBNYXRUYWJzTW9kdWxlLFxuICAgIE1hdExpc3RNb2R1bGUsXG4gICAgTWF0U2VsZWN0TW9kdWxlLFxuICAgIE1hdElucHV0TW9kdWxlLFxuICAgIE1hdFJhZGlvTW9kdWxlLFxuICAgIE1hdENoZWNrYm94TW9kdWxlXG4gIF0sXG4gICAgZXhwb3J0czogW1RpbWVQaWNrZXJDb21wb25lbnQsIENyb25HZW5Db21wb25lbnRdLFxuICAgIGRlY2xhcmF0aW9uczogW1RpbWVQaWNrZXJDb21wb25lbnQsIENyb25HZW5Db21wb25lbnRdLFxuICAgIHByb3ZpZGVyczogW1xuICAgIHtwcm92aWRlOiBNQVRfTEFCRUxfR0xPQkFMX09QVElPTlMsIHVzZVZhbHVlOiB7ZmxvYXQ6ICdhbHdheXMnfX0sXG4gICAge3Byb3ZpZGU6IE1BVF9GT1JNX0ZJRUxEX0RFRkFVTFRfT1BUSU9OUywgdXNlVmFsdWU6IHthcHBlYXJhbmNlOiAnb3V0bGluZSd9fVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIENyb25FZGl0b3JNb2R1bGUge1xufVxuIl19