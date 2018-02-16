import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiHandlerService } from '../services/api-handler.service'

@Component({
    selector: 'app-issue-details',
    templateUrl: './issue-details.component.html',
    styleUrls: ['./issue-details.component.scss']
})
export class IssueDetailsComponent implements OnInit {
    private sub: any;
    details;

    constructor(private route: ActivatedRoute, private ApiHandlerService: ApiHandlerService) {

    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.ApiHandlerService.getGithubIssueDetails(params.number).subscribe((res)=>{
                this.details = res;
            });
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
