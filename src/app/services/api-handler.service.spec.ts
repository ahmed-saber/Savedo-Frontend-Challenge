import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { ApiHandlerService } from './api-handler.service';

describe('ApiHandlerService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule],
            providers: [ApiHandlerService]
        });
    });

    it('should be created', inject([ApiHandlerService], (service: ApiHandlerService) => {
        expect(service).toBeTruthy();
    }));

    it('should have getGithubIssues method', inject([ApiHandlerService], (service: ApiHandlerService) => {
        expect(service.getGithubIssues).toBeTruthy();
    }));

    it('should have getGithubIssuesDetails method', inject([ApiHandlerService], (service: ApiHandlerService) => {
        expect(service.getGithubIssuesDetails).toBeTruthy();
    }));

    it('should have getGithubIssueDetails method', inject([ApiHandlerService], (service: ApiHandlerService) => {
        expect(service.getGithubIssueDetails).toBeTruthy();
    }));
});
