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
import * as i0 from "@angular/core";
var CronEditorModule = /** @class */ (function () {
    function CronEditorModule() {
    }
    /** @nocollapse */ CronEditorModule.ɵmod = i0.ɵɵdefineNgModule({ type: CronEditorModule });
    /** @nocollapse */ CronEditorModule.ɵinj = i0.ɵɵdefineInjector({ factory: function CronEditorModule_Factory(t) { return new (t || CronEditorModule)(); }, providers: [
            { provide: MAT_LABEL_GLOBAL_OPTIONS, useValue: { float: 'always' } },
            { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'outline' } }
        ], imports: [[
                CommonModule,
                FormsModule,
                ReactiveFormsModule,
                MatTabsModule,
                MatListModule,
                MatSelectModule,
                MatInputModule,
                MatRadioModule,
                MatCheckboxModule
            ]] });
    return CronEditorModule;
}());
export { CronEditorModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CronEditorModule, { declarations: [TimePickerComponent, CronGenComponent], imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatTabsModule,
        MatListModule,
        MatSelectModule,
        MatInputModule,
        MatRadioModule,
        MatCheckboxModule], exports: [TimePickerComponent, CronGenComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CronEditorModule, [{
        type: NgModule,
        args: [{
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
                    { provide: MAT_LABEL_GLOBAL_OPTIONS, useValue: { float: 'always' } },
                    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'outline' } }
                ]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3Jvbi1lZGl0b3IubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWNyb24tZWRpdG9yLyIsInNvdXJjZXMiOlsic3JjL2Nyb24tZWRpdG9yLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxXQUFXLEVBQUUsbUJBQW1CLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUMzRCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUM3RCxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNoRSxPQUFPLEVBQUMsOEJBQThCLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQzs7QUFJNUU7SUFBQTtLQW9CQzsyRUFEWSxnQkFBZ0I7c0lBQWhCLGdCQUFnQixtQkFMZDtZQUNYLEVBQUMsT0FBTyxFQUFFLHdCQUF3QixFQUFFLFFBQVEsRUFBRSxFQUFDLEtBQUssRUFBRSxRQUFRLEVBQUMsRUFBQztZQUNoRSxFQUFDLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxRQUFRLEVBQUUsRUFBQyxVQUFVLEVBQUUsU0FBUyxFQUFDLEVBQUM7U0FDN0UsWUFoQlE7Z0JBQ1AsWUFBWTtnQkFDWixXQUFXO2dCQUNYLG1CQUFtQjtnQkFDbkIsYUFBYTtnQkFDYixhQUFhO2dCQUNiLGVBQWU7Z0JBQ2YsY0FBYztnQkFDZCxjQUFjO2dCQUNkLGlCQUFpQjthQUNsQjsyQkEzQkg7Q0FvQ0MsQUFwQkQsSUFvQkM7U0FEWSxnQkFBZ0I7d0ZBQWhCLGdCQUFnQixtQkFOVixtQkFBbUIsRUFBRSxnQkFBZ0IsYUFYcEQsWUFBWTtRQUNaLFdBQVc7UUFDWCxtQkFBbUI7UUFDbkIsYUFBYTtRQUNiLGFBQWE7UUFDYixlQUFlO1FBQ2YsY0FBYztRQUNkLGNBQWM7UUFDZCxpQkFBaUIsYUFFUCxtQkFBbUIsRUFBRSxnQkFBZ0I7a0RBT3RDLGdCQUFnQjtjQW5CNUIsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLFdBQVc7b0JBQ1gsbUJBQW1CO29CQUNuQixhQUFhO29CQUNiLGFBQWE7b0JBQ2IsZUFBZTtvQkFDZixjQUFjO29CQUNkLGNBQWM7b0JBQ2QsaUJBQWlCO2lCQUNsQjtnQkFDQyxPQUFPLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxnQkFBZ0IsQ0FBQztnQkFDaEQsWUFBWSxFQUFFLENBQUMsbUJBQW1CLEVBQUUsZ0JBQWdCLENBQUM7Z0JBQ3JELFNBQVMsRUFBRTtvQkFDWCxFQUFDLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxRQUFRLEVBQUUsRUFBQyxLQUFLLEVBQUUsUUFBUSxFQUFDLEVBQUM7b0JBQ2hFLEVBQUMsT0FBTyxFQUFFLDhCQUE4QixFQUFFLFFBQVEsRUFBRSxFQUFDLFVBQVUsRUFBRSxTQUFTLEVBQUMsRUFBQztpQkFDN0U7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBUaW1lUGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi9jcm9uLXRpbWUtcGlja2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDcm9uR2VuQ29tcG9uZW50IH0gZnJvbSAnLi9jcm9uLWVkaXRvci5jb21wb25lbnQnO1xuaW1wb3J0IHtNYXRUYWJzTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90YWJzJztcbmltcG9ydCB7TWF0TGlzdE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbGlzdCc7XG5pbXBvcnQge01hdFNlbGVjdE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2VsZWN0JztcbmltcG9ydCB7TWF0SW5wdXRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcbmltcG9ydCB7TWF0UmFkaW9Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3JhZGlvJztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtNYXRDaGVja2JveE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2hlY2tib3gnO1xuaW1wb3J0IHtNQVRfTEFCRUxfR0xPQkFMX09QVElPTlN9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuaW1wb3J0IHtNQVRfRk9STV9GSUVMRF9ERUZBVUxUX09QVElPTlN9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQnO1xuXG5cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIE1hdFRhYnNNb2R1bGUsXG4gICAgTWF0TGlzdE1vZHVsZSxcbiAgICBNYXRTZWxlY3RNb2R1bGUsXG4gICAgTWF0SW5wdXRNb2R1bGUsXG4gICAgTWF0UmFkaW9Nb2R1bGUsXG4gICAgTWF0Q2hlY2tib3hNb2R1bGVcbiAgXSxcbiAgICBleHBvcnRzOiBbVGltZVBpY2tlckNvbXBvbmVudCwgQ3JvbkdlbkNvbXBvbmVudF0sXG4gICAgZGVjbGFyYXRpb25zOiBbVGltZVBpY2tlckNvbXBvbmVudCwgQ3JvbkdlbkNvbXBvbmVudF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAge3Byb3ZpZGU6IE1BVF9MQUJFTF9HTE9CQUxfT1BUSU9OUywgdXNlVmFsdWU6IHtmbG9hdDogJ2Fsd2F5cyd9fSxcbiAgICB7cHJvdmlkZTogTUFUX0ZPUk1fRklFTERfREVGQVVMVF9PUFRJT05TLCB1c2VWYWx1ZToge2FwcGVhcmFuY2U6ICdvdXRsaW5lJ319XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQ3JvbkVkaXRvck1vZHVsZSB7XG59XG4iXX0=