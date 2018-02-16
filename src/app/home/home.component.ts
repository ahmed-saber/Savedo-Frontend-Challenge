import { Component } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { ApiHandlerService } from '../services/api-handler.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent {
    page: number = 1;
    details;
    issuesList: any[] = [];
    promise;

    constructor(private ApiHandlerService: ApiHandlerService) {
    }

    ngOnInit() {
        // GET TOTAL COUNT FOR OPEND ISSUES
        this.promise = this.ApiHandlerService.getGithubIssuesDetails().subscribe((res) => {
            this.details = res;
            // GET FIRST PAGE
            return this.getPage(1);
        });
    }

    getPage(pageNum) {
        // SET PAGE NUMBER
        this.page = pageNum;
        // GET ISSUES BY PAGE NUMBER
        this.getListOfIssues(pageNum);
    }

    getListOfIssues(pageNum) {
        // PARAMS
        const params = new HttpParams()
            .set('page', pageNum)
            .set('state', 'all')
            .set('direction', 'desc');
        // RESET THE LIST
        this.issuesList = [];
        // CALL GITHUB ISSUES API
        return this.ApiHandlerService.getGithubIssues({
            params
        }).subscribe((res: any[]) => {
            // SAVE THE LIST
            this.issuesList = res;
        });
    }
}
