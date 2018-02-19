import { TestBed, async } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { RouterModule } from '@angular/router';
// SERVICES
import { ApiHandlerService } from '../services/api-handler.service';

describe('HomeComponent', () => {
    let app:HomeComponent;
    let fixture;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                HomeComponent
            ],
            imports: [
                RouterModule,
                NgxPaginationModule,
                HttpClientModule
            ],
            providers: [
                ApiHandlerService
            ]
        }).compileComponents();
        fixture = TestBed.createComponent(HomeComponent);
        app = fixture.debugElement.componentInstance;
    }));

    it('should create the app', () => {
        expect(app).toBeTruthy();
    });

    describe('getPage()', () => {
        it(`change the page number to 2`, () => {
            app.getPage(2);
            fixture.detectChanges();
            expect(app.page).toEqual(2);
        });

        it(`to call getListOfIssues()`, () => {
            spyOn(app, 'getListOfIssues');
            app.getPage(1);
            fixture.detectChanges();
            expect(app.getListOfIssues).toHaveBeenCalled();
        });
    });

    describe('getListOfIssues()', () => {
        it(`to return results`, (done) => {
            app.getListOfIssues(1).subscribe((res: any[]) => {
                expect(app.issuesList.length).toBeGreaterThan(1);
                done();
            });
        });
    });

    describe('sortDirection()', () => {
        it(`to change the direction`, () => {
            app.sortDirection();
            fixture.detectChanges();
            expect(app.direction).toEqual(app.sortDirections[0]);
        });

        it(`to call getListOfIssues()`, () => {
            spyOn(app, 'getListOfIssues');
            app.sortDirection();
            fixture.detectChanges();
            expect(app.getListOfIssues).toHaveBeenCalled();
        });
    });
});
