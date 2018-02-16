import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { resources } from '../resources';

@Injectable()
export class ApiHandlerService {

    constructor(private http: HttpClient) { }

    getGithubIssues(options = {}) {
        return this.http.get(resources.githubIssuesAngular, options);
    }

    getGithubIssuesDetails(options = {}) {
        return this.http.get(resources.githubIssuesAngularDetails, options);
    }

    getGithubIssueDetails(number, options = {}) {
        return this.http.get(`${resources.githubIssueAngularDetails}/${number}`, options);
    }
}
