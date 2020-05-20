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
const ɵ0 = { float: 'always' }, ɵ1 = { appearance: 'outline' };
export class CronEditorModule {
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
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3Jvbi1lZGl0b3IubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWNyb24tZWRpdG9yLyIsInNvdXJjZXMiOlsic3JjL2Nyb24tZWRpdG9yLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFDLFdBQVcsRUFBRSxtQkFBbUIsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ25FLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzNELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBQzdELE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ2hFLE9BQU8sRUFBQyw4QkFBOEIsRUFBQyxNQUFNLDhCQUE4QixDQUFDO1dBbUIxQixFQUFDLEtBQUssRUFBRSxRQUFRLEVBQUMsT0FDWCxFQUFDLFVBQVUsRUFBRSxTQUFTLEVBQUM7QUFHL0UsTUFBTSxPQUFPLGdCQUFnQjs7O1lBbkI1QixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osV0FBVztvQkFDWCxtQkFBbUI7b0JBQ25CLGFBQWE7b0JBQ2IsYUFBYTtvQkFDYixlQUFlO29CQUNmLGNBQWM7b0JBQ2QsY0FBYztvQkFDZCxpQkFBaUI7aUJBQ2xCO2dCQUNDLE9BQU8sRUFBRSxDQUFDLG1CQUFtQixFQUFFLGdCQUFnQixDQUFDO2dCQUNoRCxZQUFZLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxnQkFBZ0IsQ0FBQztnQkFDckQsU0FBUyxFQUFFO29CQUNYLEVBQUMsT0FBTyxFQUFFLHdCQUF3QixFQUFFLFFBQVEsSUFBbUIsRUFBQztvQkFDaEUsRUFBQyxPQUFPLEVBQUUsOEJBQThCLEVBQUUsUUFBUSxJQUF5QixFQUFDO2lCQUM3RTthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFRpbWVQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL2Nyb24tdGltZS1waWNrZXIuY29tcG9uZW50JztcbmltcG9ydCB7IENyb25HZW5Db21wb25lbnQgfSBmcm9tICcuL2Nyb24tZWRpdG9yLmNvbXBvbmVudCc7XG5pbXBvcnQge01hdFRhYnNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3RhYnMnO1xuaW1wb3J0IHtNYXRMaXN0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9saXN0JztcbmltcG9ydCB7TWF0U2VsZWN0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zZWxlY3QnO1xuaW1wb3J0IHtNYXRJbnB1dE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xuaW1wb3J0IHtNYXRSYWRpb01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcmFkaW8nO1xuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge01hdENoZWNrYm94TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jaGVja2JveCc7XG5pbXBvcnQge01BVF9MQUJFTF9HTE9CQUxfT1BUSU9OU30gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5pbXBvcnQge01BVF9GT1JNX0ZJRUxEX0RFRkFVTFRfT1BUSU9OU30gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XG5cblxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgTWF0VGFic01vZHVsZSxcbiAgICBNYXRMaXN0TW9kdWxlLFxuICAgIE1hdFNlbGVjdE1vZHVsZSxcbiAgICBNYXRJbnB1dE1vZHVsZSxcbiAgICBNYXRSYWRpb01vZHVsZSxcbiAgICBNYXRDaGVja2JveE1vZHVsZVxuICBdLFxuICAgIGV4cG9ydHM6IFtUaW1lUGlja2VyQ29tcG9uZW50LCBDcm9uR2VuQ29tcG9uZW50XSxcbiAgICBkZWNsYXJhdGlvbnM6IFtUaW1lUGlja2VyQ29tcG9uZW50LCBDcm9uR2VuQ29tcG9uZW50XSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICB7cHJvdmlkZTogTUFUX0xBQkVMX0dMT0JBTF9PUFRJT05TLCB1c2VWYWx1ZToge2Zsb2F0OiAnYWx3YXlzJ319LFxuICAgIHtwcm92aWRlOiBNQVRfRk9STV9GSUVMRF9ERUZBVUxUX09QVElPTlMsIHVzZVZhbHVlOiB7YXBwZWFyYW5jZTogJ291dGxpbmUnfX1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBDcm9uRWRpdG9yTW9kdWxlIHtcbn1cbiJdfQ==