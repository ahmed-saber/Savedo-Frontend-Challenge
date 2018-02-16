import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { appRoutes } from './app.routes'
// COMPONENTS
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component'
// SERVICES
import { ApiHandlerService } from '../app/services/api-handler.service';


@NgModule({
    declarations: [
        LayoutComponent,
        HomeComponent
    ],
    imports: [
        RouterModule.forRoot(
            appRoutes
        ),
        BrowserModule,
        HttpClientModule
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
