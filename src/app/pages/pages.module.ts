import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

//ng-2 charts
import { ChartsModule } from 'ng2-charts';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';


/* modules */
import { SharedModule } from '../shared/shared.module';

/* routes */
import { PAGES_ROUTES } from './pages.routes';

//Temporal
import { IncrementadorComponent } from  '../components/incrementador/incrementador.component';
import { GraficoDonaComponent } from  '../components/grafico-dona/grafico-dona.component';


@NgModule({
    declarations: [
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        PagesComponent,
        IncrementadorComponent,
        GraficoDonaComponent
    ],
    imports: [ 
        CommonModule,
        SharedModule ,
        PAGES_ROUTES,
        FormsModule,
        ChartsModule
    ],
    exports: [
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        PagesComponent,
        IncrementadorComponent
    ],
    providers: [],
})
export class PagesModule {}