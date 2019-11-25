import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ProgressComponent } from './progress/progress.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graphs1Component } from './graphs1/graphs1.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';
import { ProgressControlComponent } from '../components/progress-control/progress-control.component';

@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graphs1Component,
        ProgressControlComponent
    ],
    exports: [
        DashboardComponent,
        ProgressComponent,
        Graphs1Component
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES,
        FormsModule
    ]

})
export class PagesModule {}
