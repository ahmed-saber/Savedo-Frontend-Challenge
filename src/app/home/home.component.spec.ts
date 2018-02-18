import { TestBed, async } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { RouterModule } from '@angular/router';
// SERVICES
import { ApiHandlerService } from '../services/api-handler.service';

describe('HomeComponent', () => {
    let app;
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
        fixture.detectChanges();
    }));

    it('should create the app', async(() => {
        expect(app).toBeTruthy();
    }));

    it(`should have getPage() method`, async(() => {
        expect(app.getPage).toBeTruthy();
    }));

    it(`should have getListOfIssues() method`, async(() => {
        expect(app.getListOfIssues).toBeTruthy();
    }));

    it(`should have sortDirection() method`, async(() => {
        expect(app.sortDirection).toBeTruthy();
    }));

    it(`should have sortDirection() to be called`, async(() => {
        spyOn(app, 'sortDirection');
        app.sortDirection();
        expect(app.sortDirection).toHaveBeenCalled();
    }));
});
