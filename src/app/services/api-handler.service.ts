import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { resources } from '../resources';
import { HttpHeaders } from '@angular/common/http/src/headers'
import { HttpParams } from '@angular/common/http/src/params'

@Injectable()
export class ApiHandlerService {

    constructor(private http: HttpClient) { }

    getGithubIssues(options: options = {}) {
        return this.http.get(resources.githubIssuesAngular, options);
    }

    getGithubIssuesDetails(options: options = {}) {
        return this.http.get(resources.githubIssuesAngularDetails, options);
    }

    getGithubIssueDetails(number, options: options = {}) {
        return this.http.get(`${resources.githubIssueAngularDetails}/${number}`);
    }
}

interface options {
    headers?: HttpHeaders | {
        [header: string]: string | string[];
    };
    observe?: 'body';
    params?: HttpParams | {
        [param: string]: string | string[];
    };
    reportProgress?: boolean;
    responseType?: 'json';
    withCredentials?: boolean;
}
