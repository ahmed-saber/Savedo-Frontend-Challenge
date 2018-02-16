import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { IssueDetailsComponent } from './issue-details/issue-details.component'

export const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'issue-details/:number',
        component: IssueDetailsComponent
    }
];
