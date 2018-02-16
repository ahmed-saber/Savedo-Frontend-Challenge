import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { appRoutes } from './app.routes'
// COMPONENTS
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component'


@NgModule({
    declarations: [
        LayoutComponent,
        HomeComponent
    ],
    imports: [
        RouterModule.forRoot(
            appRoutes
        ),
        BrowserModule
    ],
    providers: [

    ],
    bootstrap: [
        LayoutComponent
    ]
})
export class AppModule {

}
