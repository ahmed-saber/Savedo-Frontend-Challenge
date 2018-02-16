import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { appRoutes } from './app.routes'
// COMPONENTS
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { IssueDetailsComponent } from './issue-details/issue-details.component';
//https://github.com/michaelbromley/ngx-pagination
import { NgxPaginationModule } from 'ngx-pagination';
// SERVICES
import { ApiHandlerService } from '../app/services/api-handler.service';


@NgModule({
    declarations: [
        LayoutComponent,
        HomeComponent,
        IssueDetailsComponent
    ],
    imports: [
        RouterModule.forRoot(
            appRoutes
        ),
        BrowserModule,
        HttpClientModule,
        NgxPaginationModule
    ],
    providers: [
        ApiHandlerService
    ],
    bootstrap: [
        LayoutComponent
    ]
})
export class AppModule {

}
