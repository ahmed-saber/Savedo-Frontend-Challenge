import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { ApiHandlerService } from './api-handler.service';
import { HttpParams } from '@angular/common/http';

describe('ApiHandlerService', () => {
    // VARS
    let service: ApiHandlerService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientModule,
            ],
            providers: [
                ApiHandlerService
            ]
        });
        service = TestBed.get(ApiHandlerService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should getGithubIssues return response', (done) => {
        // PARAMS
        const params = new HttpParams()
            .set('page', '1')
            .set('state', 'open')
            .set('direction', 'desc');
        service.getGithubIssues().subscribe(res => {
            done();
            expect(res['length']).toBeGreaterThan(1);
        });
    });

    it('should getGithubIssuesDetails return the open_issues count', (done) => {
        service.getGithubIssuesDetails().subscribe(res => {
            done();
            expect(res['open_issues']).toBeDefined();
        });
    });

    it('should getGithubIssueDetails return response', (done) => {
        // PARAMS
        const params = new HttpParams()
            .set('page', '1')
            .set('state', 'open')
            .set('direction', 'desc');
        service.getGithubIssueDetails(1).subscribe(res => {
            done();
            expect(res['title']).toBeTruthy();
        });
    });
});
